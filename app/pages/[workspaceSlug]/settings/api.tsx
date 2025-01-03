import React from "react";

import { ArrowRightIcon } from "@/icons/outline/arrow-right";
import { WorkspaceAPIKey } from "@/models/workspace";
import { workspaceAPIKeysAtom } from "@/state/workspace";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import _ from "lodash";
import Head from "next/head";
import Link from "next/link";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { toast } from "sonner";
import * as Yup from "yup";

import useAuthToken from "@/components/auth/use_auth_token";
import DeleteEntityDialog from "@/components/dialogs/delete_entity_dialog";
import SettingsLayout from "@/components/layouts/settings_layout";
import { Button } from "@/components/ui/button";
import { Header, SubHeader } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SettingsPage, SettingsPageBody } from "@/components/ui/settings_page";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { BackendRequest } from "@/lib/backend_request";
import { COMPANY_NAME } from "@/lib/constants";

function WorkspaceAPIKeyView({ apiKey }: { apiKey: WorkspaceAPIKey }) {
  const isInVisibleMode = Boolean(apiKey.key);

  const copyApiKeyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(apiKey.key ?? "");
    toast.success("API key copied to clipboard.");
  }, [apiKey.key]);

  const authToken = useAuthToken();

  const revokeAPIKey = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        const oldKeys = await snapshot.getPromise(workspaceAPIKeysAtom);
        set(
          workspaceAPIKeysAtom,
          oldKeys.filter((k) => k.id !== apiKey.id),
        );

        try {
          const response = await BackendRequest.call<void, void>(
            `workspaces/api-keys/${apiKey.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${authToken?.access}`,
              },
            },
          );

          if (!response.ok) {
            throw new Error("Failed to revoke API key.");
          }

          toast.success("API key revoked.");
        } catch (e) {
          toast.error("Failed to revoke API key.");
        }
      },
    [apiKey.id, authToken],
  );

  const [isRevokeDialogOpen, setIsRevokeDialogOpen] = React.useState(false);

  if (!isInVisibleMode) {
    return (
      <div className="flex flex-row w-full justify-between px-4 py-1 rounded border border-gray-5 items-center bg-white">
        <div className="text-gray-12 font-medium text-sm">{apiKey.label}</div>
        <Button variant="outline" size="sm" onClick={revokeAPIKey}>
          Revoke
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full px-4 py-1 rounded border border-gray-5 space-y-1 bg-white items-start">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="text-gray-12 font-medium text-sm">{apiKey.label}</div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsRevokeDialogOpen(true)}
          >
            Revoke
          </Button>
        </div>
        <span className="text-gray-12 font-medium text-sm">
          This key has been copied to your clipboard. Store it securely because
          it will only be visible now:
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="font-mono text-gray-12 text-sm"
              onClick={copyApiKeyToClipboard}
            >
              {apiKey.key}
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Click to copy to clipboard
          </TooltipContent>
        </Tooltip>
      </div>
      <DeleteEntityDialog
        isOpen={isRevokeDialogOpen}
        setOpen={setIsRevokeDialogOpen}
        onDelete={revokeAPIKey}
        title="Revoke API key"
        description="Are you sure you want to revoke this API key? This action cannot be undone."
      />
    </>
  );
}

export default function APIPage() {
  const authToken = useAuthToken();

  const createAPIKey = useRecoilCallback(
    ({ set, snapshot }) =>
      async (
        values: FormikValues,
        helpers: FormikHelpers<Yup.InferType<typeof createAPIKeySchema>>,
      ) => {
        try {
          const response = await BackendRequest.call<
            { label: string },
            WorkspaceAPIKey
          >(`workspaces/api-keys/new`, {
            method: "POST",
            body: {
              label: values.label,
            },
            headers: {
              Authorization: `Bearer ${authToken?.access}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to create API key.");
          }

          const newKey = await response.json();

          const oldKeys = await snapshot.getPromise(workspaceAPIKeysAtom);
          set(workspaceAPIKeysAtom, [...oldKeys, newKey]);

          navigator.clipboard.writeText(newKey.key ?? "");
          toast.success("API key created and copied to clipboard.");

          helpers.resetForm();
        } catch (e) {
          toast.error("Failed to create API key.");
        }
      },
    [authToken],
  );

  const formik = useFormik({
    initialValues: {
      label: "",
    },
    validationSchema: createAPIKeySchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: createAPIKey,
  });

  const workspaceAPIKeys = useRecoilValue(workspaceAPIKeysAtom);

  return (
    <SettingsPage>
      <Head>
        <title>API</title>
      </Head>
      <SettingsPageBody>
        <div className="flex flex-col space-y-2 w-full items-start">
          <Header>API</Header>
        </div>
        <Separator />
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col space-y-2 w-full items-start">
            <Header variant={"sm"}>API Keys</Header>
            <SubHeader variant={"sm"} align={"left"}>
              You can create API keys to access personas and other data in your{" "}
              {COMPANY_NAME} workspace in whatever tools or services you build.
            </SubHeader>
            <Link
              href={`${process.env.NEXT_PUBLIC_DOCS_URL}/teams`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="inline-flex flex-row items-center space-x-1 text-gray-12 font-medium text-sm">
                API documentation{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 text-gray-12" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 w-full">
            {workspaceAPIKeys.map((key) => (
              <WorkspaceAPIKeyView key={key.id} apiKey={key} />
            ))}
          </div>
          <form
            className="flex flex-row items-start space-x-2 w-full pt-6"
            onSubmit={formik.handleSubmit}
          >
            <Input
              height="md"
              placeholder="Label"
              {...formik.getFieldProps("label")}
              error={formik.errors.label}
            />

            <Button variant={"default"} type="submit">
              Create API key
            </Button>
          </form>
        </div>
      </SettingsPageBody>
    </SettingsPage>
  );
}

const createAPIKeySchema = Yup.object().shape({
  label: Yup.string().required("You must provide a label for the API key"),
});

APIPage.getLayout = SettingsLayout.getLayout;
