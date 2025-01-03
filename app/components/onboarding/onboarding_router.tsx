import React from "react";

import { PlusIcon } from "@/icons/outline/plus";
import { User } from "@/models/user";
import { Workspace } from "@/models/workspace";
import { userAtom, userWorkspacesAtom } from "@/state/user";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import { useRouter } from "next/router";
import pluralize from "pluralize";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { toast } from "sonner";
import * as Yup from "yup";

import useAuthToken from "@/components/auth/use_auth_token";
import useSignOut from "@/components/auth/use_sign_out";
import LoadingSpinner from "@/components/loading_states/loading_spinner";
import { Button } from "@/components/ui/button";
import { Header, SubHeader } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Panel } from "@/components/ui/panel";
import { Separator } from "@/components/ui/separator";
import WorkspaceAvatar from "@/components/workspace/workspace_avatar";

import { BackendRequest } from "@/lib/backend_request";
import { COMPANY_NAME, COMPANY_URL_STUB } from "@/lib/constants";

function OnboardingHeader({ user }: { user: User }) {
  const signOut = useSignOut();

  return (
    <div className="w-full h-24 flex items-center justify-between px-10">
      <Button
        variant={"ghost"}
        onClick={() => signOut("Signed out from Onboarding")}
      >
        Log out
      </Button>
      <div className="flex flex-col space-y-1">
        <span className="text-gray-11 text-xs">Logged in as:</span>
        <span className="font-medium text-sm">{user?.email}</span>
      </div>
    </div>
  );
}

function OnboardingJoinWorkspaceForm({
  userCanJoinWorkspaces,
  setCurrentForm,
}: {
  userCanJoinWorkspaces: Workspace[];
  setCurrentForm: React.Dispatch<React.SetStateAction<OnboardingForm>>;
}) {
  const router = useRouter();
  const authToken = useAuthToken();

  const joinWorkspace = useRecoilCallback(
    ({ set, snapshot }) =>
      async (workspace: Workspace) => {
        try {
          const response = await BackendRequest.call(
            `/workspaces/${workspace.id}/join`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${authToken?.access}`,
              },
            },
          );

          if (!response.ok) {
            throw new Error("Failed to join workspace");
          }

          router.push(`/${workspace.slug}`);
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong. Please try again.");
        }
      },
    [authToken, router],
  );

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[30rem] flex flex-col items-center space-y-14 pb-20">
        <div className="flex flex-col items-center space-y-14 pt-20">
          <Header>You can join these workspaces</Header>
          <Panel className="w-[30rem]">
            {userCanJoinWorkspaces.map((workspace) => (
              <div
                className="flex flex-row w-full justify-between items-center"
                key={workspace.id}
              >
                <div className="flex flex-row w-full items-start space-x-3">
                  <WorkspaceAvatar workspace={workspace} />
                  <div className="flex flex-col">
                    <h3 className="text-gray-12 text-lg">{workspace.name}</h3>
                    <h3 className="text-gray-11">
                      {pluralize("member", workspace.numProfiles, true)}
                    </h3>
                  </div>
                </div>
                <Button
                  variant={"outline"}
                  onClick={() => joinWorkspace(workspace)}
                >
                  Join
                </Button>
              </div>
            ))}
            <Separator />
            <div className="w-full">
              <Button
                variant={"outline"}
                onClick={() => {
                  setCurrentForm(OnboardingForm.Create);
                }}
              >
                <PlusIcon className="w-3.5 h-3.5" />
                <span>Create new workspace</span>
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function OnboardingCreateWorkspaceForm({
  canJoinWorkspaces,
  setCurrentForm,
}: {
  canJoinWorkspaces: boolean;
  setCurrentForm: React.Dispatch<React.SetStateAction<OnboardingForm>>;
}) {
  const authToken = useAuthToken();

  const onFormSubmit = useRecoilCallback(
    ({ set }) =>
      async (
        values: FormikValues,
        helpers: FormikHelpers<Yup.InferType<typeof createNewWorkspaceSchema>>,
      ) => {
        try {
          const workspaceResponse = await BackendRequest.call<
            { name: string; slug: string },
            Workspace
          >("workspaces", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${authToken?.access}`,
            },
            body: {
              name: values.workspaceName,
              slug: values.workspaceUrl,
            },
          });

          if (workspaceResponse.status === 409) {
            helpers.setFieldError("workspaceUrl", "This URL is already taken.");
            return;
          } else if (!workspaceResponse.ok) {
            throw new Error("Failed to create workspace");
          }

          const newWorkspace = await workspaceResponse.json();

          if (workspaceResponse) {
            set(userWorkspacesAtom, [newWorkspace]);
          }
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong. Please try again.");
        }
      },
    [authToken],
  );

  const formik = useFormik({
    initialValues: {
      workspaceName: "",
      workspaceUrl: "",
    },
    validationSchema: createNewWorkspaceSchema,
    onSubmit: onFormSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const [hasOverriddenUrl, setHasOverriddenUrl] = React.useState(false);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[30rem] flex flex-col items-center space-y-14 pb-20">
        <div className="flex flex-col items-center space-y-8 w-full">
          <Header>Create a new workspace</Header>
          <SubHeader>
            Workspaces are a way to organise your work in {COMPANY_NAME}.
          </SubHeader>
        </div>
        <form
          className="flex flex-col space-y-12 items-center w-full"
          onSubmit={formik.handleSubmit}
        >
          <Panel>
            <Input
              label="Workspace name"
              type="text"
              height={"lg"}
              {...formik.getFieldProps("workspaceName")}
              error={formik.errors.workspaceName}
              onChange={(e) => {
                formik.handleChange(e);

                if (!hasOverriddenUrl) {
                  formik.setFieldValue(
                    "workspaceUrl",
                    e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, ""),
                  );
                }
              }}
            />

            <div className="w-full relative">
              <Input
                className="pl-[6.25rem] text-sm font-medium"
                label="Workspace URL"
                type="text"
                height={"lg"}
                {...formik.getFieldProps("workspaceUrl")}
                error={formik.errors.workspaceUrl}
                onChange={(e) => {
                  formik.handleChange(e);

                  setHasOverriddenUrl(true);
                }}
              />
              <span className="absolute top-[calc(2.5rem)] left-3 text-sm text-gray-11 font-medium">
                {COMPANY_URL_STUB}
              </span>
            </div>
          </Panel>

          <div className="flex flex-col space-y-2 items-center w-full">
            <Button type="submit" size={"xl"} textVariant={"lg"}>
              {formik.isSubmitting ? <LoadingSpinner /> : <>Create workspace</>}
            </Button>
            {canJoinWorkspaces ||
              (true && (
                <Button
                  type="button"
                  variant="ghost"
                  size={"xl"}
                  onClick={() => setCurrentForm(OnboardingForm.Join)}
                >
                  Join a workspace instead
                </Button>
              ))}
          </div>
        </form>
      </div>
    </div>
  );
}

const createNewWorkspaceSchema = Yup.object({
  workspaceName: Yup.string().required("Required"),
  workspaceUrl: Yup.string()
    .required("Required")
    .test("is-valid-url", "Workspace URL must be a valid URL", (value) => {
      try {
        new URL(`https://${COMPANY_URL_STUB}${value}`);
        return true;
      } catch {
        return false;
      }
    }),
});

type OnboardingRouterProps = {
  userCanJoinWorkspaces: Workspace[];
};

enum OnboardingForm {
  Join = "join",
  Create = "create",
}
export default function OnboardingRouter({
  userCanJoinWorkspaces,
}: OnboardingRouterProps) {
  const user = useRecoilValue(userAtom);

  const hasAnyWorkspacesToJoin = userCanJoinWorkspaces.length > 0;

  const [currentForm, setCurrentForm] = React.useState<OnboardingForm>(
    hasAnyWorkspacesToJoin ? OnboardingForm.Join : OnboardingForm.Create,
  );

  return (
    <div className="h-full flex flex-col justify-center">
      <OnboardingHeader user={user} />
      {currentForm === OnboardingForm.Join ? (
        <OnboardingJoinWorkspaceForm
          userCanJoinWorkspaces={userCanJoinWorkspaces}
          setCurrentForm={setCurrentForm}
        />
      ) : (
        <OnboardingCreateWorkspaceForm
          canJoinWorkspaces={false}
          setCurrentForm={setCurrentForm}
        />
      )}
    </div>
  );
}
