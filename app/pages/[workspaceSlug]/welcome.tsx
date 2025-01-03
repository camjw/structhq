import React, { Suspense } from "react";

import { CheckIcon } from "@/icons/outline/check";
import { Copy01Icon } from "@/icons/outline/copy-01";
import { Link03Icon } from "@/icons/outline/link-03";
import { Mail02Icon } from "@/icons/outline/mail-02";
import { Workspace, WorkspaceAPIKey } from "@/models/workspace";
import NotionLogo from "@/public/assets/notion-logo-no-background.png";
import {
  workspaceAPIKeysAtom,
  workspaceBySlugAtomFamily,
} from "@/state/workspace";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilCallback, useRecoilValueLoadable } from "recoil";
import { toast } from "sonner";
import * as Yup from "yup";

import useAuthToken from "@/components/auth/use_auth_token";
import { BrandingLogo } from "@/components/branding/branding_logo";
import NotLoggedInLayout from "@/components/layouts/not_logged_in_layout";
import FullGrayScreen from "@/components/loading_states/full_gray_screen";
import { Button } from "@/components/ui/button";
import { Header, SubHeader } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Panel } from "@/components/ui/panel";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NoAccessToWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { BackendRequest } from "@/lib/backend_request";
import {
  COMPANY_NAME,
  COMPANY_TWITTER_HANDLE,
  COMPANY_URL_PREFIX,
} from "@/lib/constants";

enum WelcomeStep {
  GET_STARTED = 1,
  CREATE_API_KEY,
  INVITE_COWORKERS,
  SUBSCRIBE_TO_UPDATES,
  COMPLETE,
}

function WorkspaceWelcomeStepSelector({
  currentStep,
  setCurrentStep,
}: {
  currentStep: WelcomeStep;
  setCurrentStep: React.Dispatch<React.SetStateAction<WelcomeStep>>;
}) {
  return (
    <div className="flex flex-row space-x-6 items-center py-10">
      {Object.values(WelcomeStep)
        .filter((w) => typeof w === "number")
        .map((step) => (
          <button
            key={step}
            className={`${
              currentStep === step ? "bg-gray-9" : "bg-gray-6"
            } h-2 w-2 rounded-full`}
            onClick={() => setCurrentStep(step)}
            disabled={currentStep < step}
          ></button>
        ))}
    </div>
  );
}

function WorkspaceWelcomeGetStartedStep({
  setCurrentStep,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<WelcomeStep>>;
}) {
  return (
    <div className="flex flex-col h-full justify-center pt-32">
      <div className="flex flex-col space-y-4 w-full items-center">
        <div className="pb-8">
          <BrandingLogo size="lg" />
        </div>
        <Header variant={"xl"}>Welcome to {COMPANY_NAME}</Header>
        <div className="flex flex-col space-y-1 max-w-[26rem]">
          <SubHeader>
            {COMPANY_NAME} uses AI to structure data from any web page into
            whatever format you need.
          </SubHeader>
        </div>
        <div className="pt-8">
          <Button
            onClick={() => setCurrentStep(WelcomeStep.CREATE_API_KEY)}
            size={"xl"}
            textVariant={"lg"}
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}

const createNewAPIKeySchema = Yup.object().shape({
  label: Yup.string().required("Label is required"),
});

function WorkspaceWelcomeCreateAPIKeyStep({
  setCurrentStep,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<WelcomeStep>>;
}) {
  const [hasCreatedAPIKey, setHasCreatedAPIKey] = React.useState(false);

  const authToken = useAuthToken();

  const [createdAPIKey, setCreatedAPIKey] =
    React.useState<WorkspaceAPIKey | null>(null);

  const createAPIKey = useRecoilCallback(
    ({ set, snapshot }) =>
      async (
        values: FormikValues,
        helpers: FormikHelpers<Yup.InferType<typeof createNewAPIKeySchema>>,
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

          setCreatedAPIKey(newKey);
          setHasCreatedAPIKey(true);

          navigator.clipboard.writeText(newKey.key ?? "");
          toast.success("API key created and copied to clipboard.");

          helpers.resetForm();
        } catch (e) {
          toast.error("Failed to create API key.");
        }
      },
    [authToken, setCreatedAPIKey, setHasCreatedAPIKey],
  );

  const formik = useFormik({
    initialValues: {
      label: "",
    },
    validationSchema: createNewAPIKeySchema,
    onSubmit: createAPIKey,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const copyApiKeyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(createdAPIKey?.key ?? "");
    toast.success("API key copied to clipboard.");
  }, [createdAPIKey]);

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col space-y-4 w-full items-center max-w-[34rem] mt-24">
        <Header>Create your first API key</Header>
        <SubHeader>
          API keys are used to build structs through the Struct REST API and
          clients.
        </SubHeader>

        <div className="pt-8 w-full h-full">
          <Panel>
            <form
              className="flex flex-col justify-between items-start w-full space-y-3 pt-1"
              onSubmit={formik.handleSubmit}
            >
              {hasCreatedAPIKey ? (
                <>
                  <span className="text-gray-12 font-medium text-sm">
                    This key has been copied to your clipboard. Store it
                    securely because it will only be visible now:
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="font-mono text-gray-12 text-sm"
                        onClick={copyApiKeyToClipboard}
                      >
                        {createdAPIKey?.key}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      Click to copy to clipboard
                    </TooltipContent>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Input
                    height="md"
                    label="API key label"
                    {...formik.getFieldProps("label")}
                    error={formik.errors.label}
                  />

                  <Button variant={"default"} type="submit">
                    Create API key
                  </Button>
                </>
              )}
            </form>
            {/* <div className="flex flex-col divide-y divide-gray-4 px-6 w-full">
              <div className="w-full flex flex-row space-x-4 items-start py-7">
                <CheckIcon className="h-5 w-5 text-primary-9 flex-shrink-0" />
                <span className="text-lg">
                  {COMPANY_NAME} will read all of the pages in your workspace
                  and build a model of your team.
                </span>
              </div>
              <div className="w-full flex flex-row space-x-4 items-start py-7">
                <CheckIcon className="h-5 w-5 text-primary-9 flex-shrink-0" />
                <span className="text-lg">
                  {COMPANY_NAME} will use this model to contextualize
                  conversations with you.
                </span>
              </div>
              <div className="w-full flex flex-row space-x-4 items-start py-7">
                <CheckIcon className="h-5 w-5 text-primary-9 flex-shrink-0" />
                <span className="text-lg">
                  {COMPANY_NAME} <span className="font-semibold">will not</span>{" "}
                  edit any of your pages.
                </span>
              </div>
            </div> */}
          </Panel>
        </div>
        <div className="pt-8 w-full items-center flex flex-col">
          {hasCreatedAPIKey ? (
            <Button
              size={"xl"}
              textVariant={"lg"}
              onClick={() => setCurrentStep(WelcomeStep.INVITE_COWORKERS)}
            >
              Continue
            </Button>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={"xl"} textVariant={"lg"} disabled>
                  Continue
                </Button>
              </TooltipTrigger>

              <TooltipContent>Create an API key to continue</TooltipContent>
            </Tooltip>
          )}
          <Button
            onClick={() => setCurrentStep(WelcomeStep.INVITE_COWORKERS)}
            variant={"ghost"}
            size={"xl"}
          >
            I'll do this later
          </Button>
        </div>
      </div>
    </div>
  );
}

enum InviteType {
  LINK = "link",
  EMAIL = "email",
}
function WorkspaceWelcomeInviteCoworkersStep({
  setCurrentStep,
  workspace,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<WelcomeStep>>;
  workspace: Workspace;
}) {
  const workspaceInviteToken = "not-implemented";

  const [inviteType, setInviteType] = React.useState<InviteType>(
    InviteType.LINK,
  );

  const handleCopyLink = React.useCallback(() => {
    navigator.clipboard.writeText(
      `${COMPANY_URL_PREFIX}/${workspace.slug}/join?token=${workspaceInviteToken}`,
    );

    toast.success("Link copied to clipboard");
  }, [workspace.slug, workspaceInviteToken]);

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col space-y-4 w-full items-center max-w-[36rem] pt-36">
        <Header>Invite co-workers to your workspace</Header>
        <SubHeader>
          {COMPANY_NAME} is for your whole team. Invite some pepole to test it
          out with.
        </SubHeader>

        <div className="pt-8 w-full h-full">
          <Panel className="!space-y-4 !pb-4">
            {inviteType === InviteType.LINK && (
              <>
                <div className="w-full flex flex-col items-start space-y-1">
                  <Label>Invite link</Label>
                  <span className="text-sm text-gray-11">
                    Share this link with someone you want to join your
                    workspace.
                  </span>
                </div>

                <div className="flex flex-row justify-between items-center w-full space-x-3 pt-1">
                  <Input
                    type="text"
                    value={`${COMPANY_URL_PREFIX}/${workspace.slug}/join?token=${workspaceInviteToken}`}
                    className="!text-gray-11"
                    readOnly
                  />
                  <Button size={"lg"} onClick={handleCopyLink}>
                    <Copy01Icon className="h-4 w-4 text-white" />
                    Copy
                  </Button>
                </div>

                <div className="w-full flex flex-col items-start pt-2">
                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="!px-0"
                    onClick={() => setInviteType(InviteType.EMAIL)}
                  >
                    <Mail02Icon className="h-4 w-4" />
                    Invite with email
                  </Button>
                </div>
              </>
            )}

            {inviteType === InviteType.EMAIL && (
              <>
                <div className="w-full flex flex-col items-start space-y-1">
                  <Label>Invite emails</Label>
                </div>
                <Textarea placeholder="anthony@newjerseywaste.com, buster@austerobluth.com..." />

                <div className="w-full flex flex-row justify-between pt-2">
                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="!px-0"
                    onClick={() => setInviteType(InviteType.LINK)}
                  >
                    <Link03Icon className="h-4 w-4" />
                    Invite with link
                  </Button>
                  <Button>Send invites</Button>
                </div>
              </>
            )}
          </Panel>
        </div>
        <div className="pt-8 w-full items-center flex flex-col">
          <Button
            onClick={() => setCurrentStep(WelcomeStep.SUBSCRIBE_TO_UPDATES)}
            variant={"tertiary"}
            size={"xl"}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

function WorkspaceWelcomeSubscribeToUpdates({
  setCurrentStep,
  subscribeToChangelog,
  setSubscribeToChangelog,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<WelcomeStep>>;
  subscribeToChangelog: boolean;
  setSubscribeToChangelog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col space-y-4 w-full items-center max-w-[36rem] pt-36">
        <Header>Keep updated</Header>
        <SubHeader>
          {COMPANY_NAME} is always improving. Subscribe to our updates to stay
          in the loop.
        </SubHeader>

        <div className="pt-8 w-full h-full">
          <Panel className="!py-2">
            <div className="flex flex-col divide-y divide-gray-4 px-6 w-full">
              <div className="w-full flex flex-row justify-between items-center py-7 space-x-16">
                <div className="flex flex-col">
                  <Label variant={"lg"}>Subscribe to changelog</Label>
                  <span className="text-gray-11">
                    Fortnightly email on new features and improvements.
                  </span>
                </div>

                <Switch
                  checked={subscribeToChangelog}
                  onCheckedChange={(v) => setSubscribeToChangelog(v)}
                />
              </div>
              <div className="w-full flex flex-row justify-between items-center py-7 space-x-16">
                <div className="flex flex-col">
                  <Label variant={"lg"}>Follow us on Twitter</Label>
                  <span className="text-gray-11">
                    Stay updated with our latest news.
                  </span>
                </div>

                <Link
                  href={`https://twitter.com/${COMPANY_TWITTER_HANDLE}`}
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button variant="outline">
                    <span className="font-semibold">
                      @{COMPANY_TWITTER_HANDLE}
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </Panel>
        </div>
        <div className="pt-8 w-full items-center flex flex-col">
          <Button
            onClick={() => setCurrentStep(WelcomeStep.COMPLETE)}
            variant={subscribeToChangelog ? "default" : "tertiary"}
            size={"xl"}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

function WorkspaceWelcomeComplete({
  completeWelcome,
}: {
  completeWelcome: () => void;
}) {
  return (
    <div className="flex flex-col h-full justify-center pt-24">
      <div className="flex flex-col space-y-4 w-full items-center max-w-[40rem] pt-36">
        <Header variant={"xl"}>{COMPANY_NAME} is ready!</Header>
        <SubHeader>
          Start exploring your workspace and build some more structs.
        </SubHeader>

        <div className="pt-8 w-full items-center flex flex-col">
          <Button onClick={completeWelcome} size={"xl"}>
            Let's go!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function WorkspaceWelcome() {
  const router = useRouter();

  const pathname = router.isReady ? router.asPath : null;

  const workspaceSlug = pathname?.split("/")[1] ?? null;

  const [subscribeToChangelog, setSubscribeToChangelog] = React.useState(false);

  const workspaceLoadable = useRecoilValueLoadable(
    workspaceBySlugAtomFamily(workspaceSlug),
  );

  const [currentStep, setCurrentStep] = React.useState<WelcomeStep>(
    WelcomeStep.GET_STARTED,
  );

  const authToken = useAuthToken();

  const completeWelcome = useRecoilCallback(
    ({ set }) =>
      async () => {
        if (workspaceLoadable.state !== "hasValue") {
          return;
        }

        const workspace = workspaceLoadable.contents;

        if (!workspace) {
          return;
        }

        set(workspaceBySlugAtomFamily(workspaceSlug), (prev) => {
          if (!prev) {
            return prev;
          }

          return {
            ...prev,
            isSetupComplete: true,
          };
        });

        try {
          const response = await BackendRequest.call<
            { subscribeToChangelog: boolean },
            void
          >(`/workspaces/${workspace?.id}/complete_welcome`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${authToken?.access}`,
            },
            body: { subscribeToChangelog },
          });

          if (!response.ok) {
            throw new Error("Failed to complete welcome");
          }
        } catch (e) {
          console.error(e);
          toast.error("Something went wrong. Please try again.");
          return;
        }

        router.replace(`/${workspaceSlug}/facts`);
      },
    [subscribeToChangelog, workspaceSlug, authToken, router, workspaceLoadable],
  );

  if (workspaceLoadable.state === "loading") {
    return <FullGrayScreen />;
  }

  if (workspaceLoadable.state === "hasError") {
    <NoAccessToWorkspace />;
  }

  const workspace = workspaceLoadable.contents;

  return (
    <div className="h-full flex flex-col justify-between items-center min-h-screen">
      {currentStep === WelcomeStep.GET_STARTED && (
        <WorkspaceWelcomeGetStartedStep setCurrentStep={setCurrentStep} />
      )}

      {currentStep === WelcomeStep.CREATE_API_KEY && (
        <WorkspaceWelcomeCreateAPIKeyStep setCurrentStep={setCurrentStep} />
      )}

      {currentStep === WelcomeStep.INVITE_COWORKERS && (
        <Suspense fallback={<div />}>
          <WorkspaceWelcomeInviteCoworkersStep
            setCurrentStep={setCurrentStep}
            workspace={workspace}
          />
        </Suspense>
      )}

      {currentStep === WelcomeStep.SUBSCRIBE_TO_UPDATES && (
        <WorkspaceWelcomeSubscribeToUpdates
          setCurrentStep={setCurrentStep}
          subscribeToChangelog={subscribeToChangelog}
          setSubscribeToChangelog={setSubscribeToChangelog}
        />
      )}

      {currentStep === WelcomeStep.COMPLETE && (
        <WorkspaceWelcomeComplete completeWelcome={completeWelcome} />
      )}

      <WorkspaceWelcomeStepSelector
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
}

WorkspaceWelcome.getLayout = NotLoggedInLayout.getLayout;
