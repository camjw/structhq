import React from "react";

import { Workspace } from "@/models/workspace";
import { workspaceBySlugAtomFamily } from "@/state/workspace";
import { useFormik } from "formik";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilCallback } from "recoil";
import { toast } from "sonner";
import * as Yup from "yup";

import useAuthToken from "@/components/auth/use_auth_token";
import useSignOut from "@/components/auth/use_sign_out";
import SettingsLayout from "@/components/layouts/settings_layout";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Header, SubHeader } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SettingsPage, SettingsPageBody } from "@/components/ui/settings_page";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { BackendRequest } from "@/lib/backend_request";
import { COMPANY_NAME, COMPANY_URL_STUB } from "@/lib/constants";

export default function SettingsProfilePage() {
  const workspace = useCurrentWorkspace();

  const authToken = useAuthToken();

  const [deleteWorkspaceModalOpen, setDeleteWorkspaceModalOpen] =
    React.useState(false);

  const router = useRouter();

  const onUpdateWorkspace = useRecoilCallback(
    ({ set }) =>
      async (values: { name: string; slug: string }) => {
        try {
          const response = await BackendRequest.call<
            { name: string; slug: string },
            Workspace
          >(`workspaces`, {
            method: "PATCH",
            body: values,
            headers: {
              Authorization: `Bearer ${authToken?.access}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to update workspace.");
          }

          const newWorkspace = await response.json();

          toast.success("Workspace updated successfully.");
          set(workspaceBySlugAtomFamily(values.slug), newWorkspace);

          if (workspace.slug !== values.slug) {
            router.replace(`/${values.slug}/settings/general`);
          }
        } catch (error) {
          toast.error("Sorry, something went wrong! Please try again.");
        }
      },
    [authToken, workspace, router],
  );

  const [showChangeSlugDialog, setShowChangeSlugDialog] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      slug: workspace.slug,
      name: workspace.name,
    },
    validationSchema: workspaceUpdateSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: onUpdateWorkspace,
  });

  const signOut = useSignOut();

  const onDeleteWorkspace = useRecoilCallback(
    () => async () => {
      try {
        const response = await BackendRequest.call(`workspaces`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken?.access}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete workspace.");
        }

        toast.success("Workspace deleted successfully.");
        signOut("Workspace deleted");
        router.push("/");
      } catch (error) {
        toast.error("Sorry, something went wrong! Please try again.");
      }
    },
    [signOut, authToken, router],
  );

  return (
    <>
      <SettingsPage>
        <Head>
          <title>Profile</title>
        </Head>
        <SettingsPageBody>
          <div className="flex flex-col space-y-2 w-full items-start">
            <Header>Profile</Header>
            <SubHeader>Manage your {COMPANY_NAME} profile</SubHeader>
          </div>
          <Separator />
          <div className="flex flex-col items-start">
            <Header variant={"sm"}>Logo</Header>
            <SubHeader variant={"sm"}>
              Anyone with an email at one of these domains can join your
              workspace.
            </SubHeader>
          </div>
          <Separator />
          <form
            className="flex flex-col gap-6 items-start"
            onSubmit={(e) => {
              if (formik.values.slug !== workspace.slug) {
                e.preventDefault();
                setShowChangeSlugDialog(true);
                return;
              }

              formik.handleSubmit(e);
            }}
          >
            <div className="flex flex-row w-full justify-between items-start">
              <div className="flex flex-col space-y-2 w-full items-start">
                <Header variant={"sm"}>General</Header>
              </div>
            </div>

            <Input
              label="Workspace name"
              {...formik.getFieldProps("name")}
              error={formik.errors.name}
            />
            <div className="w-full relative">
              <Input
                className="pl-[6.6rem] text-sm font-medium"
                label="Workspace URL"
                {...formik.getFieldProps("slug")}
                error={formik.errors.slug}
              />
              <span className="absolute top-[calc(34px)] left-3 text-sm text-gray-11 font-medium">
                {COMPANY_URL_STUB}
              </span>
            </div>

            <Button
              size={"sm"}
              variant={"default"}
              disabled={formik.isSubmitting}
              type="submit"
            >
              Update
            </Button>
          </form>
          <Separator />
          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-row w-full justify-between items-start">
              <div className="flex flex-col space-y-2 w-full items-start">
                <Header variant={"sm"}>Delete workspace</Header>
                <SubHeader variant={"sm"}>
                  Anyone with an email at one of these domains can join your
                  workspace.
                </SubHeader>
              </div>
            </div>
            <Button
              onClick={() => setDeleteWorkspaceModalOpen(true)}
              size={"sm"}
              variant={"destructive"}
            >
              Delete this workspace
            </Button>
          </div>
        </SettingsPageBody>
      </SettingsPage>

      <ChangeWorkspaceSlugDialog
        isOpen={showChangeSlugDialog}
        setOpen={setShowChangeSlugDialog}
        newWorkspaceSlug={formik.values.slug}
        onConfirm={formik.submitForm}
      />

      <DeleteWorkspaceDialog
        isOpen={deleteWorkspaceModalOpen}
        setOpen={setDeleteWorkspaceModalOpen}
        onConfirm={onDeleteWorkspace}
      />
    </>
  );
}

function ChangeWorkspaceSlugDialog({
  isOpen,
  setOpen,
  onConfirm,
  newWorkspaceSlug,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
  newWorkspaceSlug: string;
}) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          Update workspace URL to {newWorkspaceSlug}?
        </AlertDialogHeader>
        <AlertDialogDescription>
          This will update all links and references to this workspace.
        </AlertDialogDescription>

        <AlertDialogFooter>
          <Button onClick={() => setOpen(false)} variant={"outline"}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
            variant={"destructive"}
          >
            Update URL
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function DeleteWorkspaceDialog({
  isOpen,
  setOpen,
  onConfirm,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
}) {
  const workspace = useCurrentWorkspace();

  const [inputValue, setInputValue] = React.useState("");

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          Are you sure you want to delete this workspace?
        </AlertDialogHeader>
        <Separator />
        <AlertDialogDescription className="text-normal text-sm text-gray-11">
          This will permanently delete all data associated with this workspace
          and cannot be undone.
          <br />
          <br />
          To confirm, type{" "}
          <span className="font-semibold text-gray-12">
            delete {workspace.name}
          </span>{" "}
          in the box below.
        </AlertDialogDescription>

        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full"
        />

        <AlertDialogFooter>
          <Button
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
            size={"lg"}
            variant={"destructive"}
            className="w-full"
            disabled={inputValue !== `delete ${workspace.name}`}
          >
            Delete this workspace
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

SettingsProfilePage.getLayout = SettingsLayout.getLayout;

const workspaceUpdateSchema = Yup.object().shape({
  name: Yup.string().required("Please enter a name."),
  slug: Yup.string()
    .required("Please enter a slug.")
    .matches(
      /^[a-zA-Z0-9-]*$/,
      "Your URL can only contain letters, numbers, and dashes.",
    ),
});
