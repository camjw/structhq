import React, { Suspense } from "react";

import { useAddWorkspaceDomain } from "@/hooks/state/workspace/use_add_workspace_domain";
import { useDeleteWorkspaceDomain } from "@/hooks/state/workspace/use_delete_workspace_domain";
import { useUpdateWorkspaceMemberDeactivation } from "@/hooks/state/workspace/use_update_workspace_member_deactivation";
import { DotsHorizontalIcon } from "@/icons/outline/dots-horizontal";
import { PlusIcon } from "@/icons/outline/plus";
import { RefreshCw02Icon } from "@/icons/outline/refresh-cw-02";
import { Trash01Icon } from "@/icons/outline/trash-01";
import { User } from "@/models/user";
import {
  Workspace,
  WorkspaceAllowedEmailDomain,
  WorkspaceInviteRecord,
} from "@/models/workspace";
import { profilesAtom } from "@/state/profile";
import { userAtom } from "@/state/user";
import {
  workspaceAllowedDomainsAtomFamily,
  workspaceBySlugAtomFamily,
  workspaceInvitedUsersAtom,
  workspaceUsersAtom,
} from "@/state/workspace";
import { useFormik } from "formik";
import _ from "lodash";
import { DateTime } from "luxon";
import Head from "next/head";
import pluralize from "pluralize";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { toast } from "sonner";
import * as Yup from "yup";

import useAuthToken from "@/components/auth/use_auth_token";
import CopyStringBlock from "@/components/copy_string_block";
import DeleteEntityDialog from "@/components/dialogs/delete_entity_dialog";
import InviteUserDialog from "@/components/dialogs/invite_user_dialog";
import SettingsLayout from "@/components/layouts/settings_layout";
import {
  AvatarFromText,
  ProfileAvatar,
} from "@/components/profile/profile_avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Form, FormField } from "@/components/ui/form";
import { Header, SubHeader } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SettingsPage, SettingsPageBody } from "@/components/ui/settings_page";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { BackendRequest } from "@/lib/backend_request";
import RelativeDateUtils from "@/lib/relative_date_utils";
import { cn } from "@/lib/utils";
import uuid from "@/lib/uuid";

export default function MembersPage() {
  const workspace = useCurrentWorkspace();

  const workspaceUsers = useRecoilValue(workspaceUsersAtom);

  const workspaceInvitedUsers = useRecoilValue(workspaceInvitedUsersAtom);
  const workspaceAllowedDomains = useRecoilValue(
    workspaceAllowedDomainsAtomFamily(workspace.id),
  );

  const currentUser = useRecoilValue(userAtom);

  const workspaceUserEmails = React.useMemo(() => {
    return workspaceUsers?.map((u) => u.email) ?? [];
  }, [workspaceUsers]);

  const [addDomainModalOpen, setAddDomainModalOpen] = React.useState(false);
  const [inviteUseDialogOpen, setInviteUserDialogOpen] = React.useState(false);

  const authToken = useAuthToken();

  const setInviteLinkEnabled = useRecoilCallback(
    ({ set }) =>
      async (enabled: boolean) => {
        set(workspaceBySlugAtomFamily(workspace.slug), {
          ...workspace,
          inviteLinkEnabled: enabled,
        });

        try {
          const response = await BackendRequest.call<
            { inviteLinkEnabled: boolean },
            Workspace
          >(`/workspaces/${workspace.id}`, {
            method: "PATCH",
            headers: { Authorization: `Bearer ${authToken?.access}` },
            body: { inviteLinkEnabled: enabled },
          });

          if (!response.ok) {
            throw new Error("Failed to update workspace");
          }

          const newWorkspace = await response.json();

          set(workspaceBySlugAtomFamily(workspace.slug), newWorkspace);
        } catch (error) {
          toast.error("Something went wrong. Please try again.");
          set(workspaceBySlugAtomFamily(workspace.slug), {
            ...workspace,
            inviteLinkEnabled: !enabled,
          });
        }
      },
    [authToken, workspace],
  );

  const refreshInviteLinkId = useRecoilCallback(
    ({ set }) =>
      async () => {
        const originalInviteLinkId = workspace.inviteLinkId;

        const newInviteLinkId = uuid();

        set(workspaceBySlugAtomFamily(workspace.slug), {
          ...workspace,
          inviteLinkId: newInviteLinkId,
        });

        try {
          const response = await BackendRequest.call<
            { inviteLinkId: string },
            Workspace
          >(`/workspaces/${workspace.id}`, {
            method: "PATCH",
            headers: { Authorization: `Bearer ${authToken?.access}` },
            body: { inviteLinkId: newInviteLinkId },
          });

          if (!response.ok) {
            throw new Error("Failed to update workspace");
          }

          const newWorkspace = await response.json();

          set(workspaceBySlugAtomFamily(workspace.slug), newWorkspace);
        } catch (error) {
          toast.error("Something went wrong. Please try again.");
          set(workspaceBySlugAtomFamily(workspace.slug), {
            ...workspace,
            inviteLinkId: originalInviteLinkId,
          });
        }
      },
    [authToken, workspace],
  );

  if (!currentUser || !workspaceUsers) {
    return null;
  }

  return (
    <SettingsPage>
      <Head>
        <title>Members</title>
      </Head>
      <SettingsPageBody>
        <div className="flex flex-col space-y-2 w-full items-start">
          <Header>Members</Header>
          <SubHeader>Manage who has access to your workspace</SubHeader>
        </div>
        <Separator />
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col space-y-2 w-full items-start">
              <Header variant={"sm"}>Invite link</Header>
              <SubHeader variant={"sm"}>
                Anyone with this link can join your workspace.
              </SubHeader>
            </div>
            <Switch
              checked={workspace.inviteLinkEnabled}
              onCheckedChange={setInviteLinkEnabled}
            />
          </div>
          <div className="flex flex-row items-center w-full space-x-4">
            <CopyStringBlock
              content={`${process.env.NEXT_PUBLIC_APP_URL}/${workspace.slug}/join/${workspace.inviteLinkId}`}
            />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={refreshInviteLinkId}
                  size={"icon"}
                  variant={"tertiary"}
                >
                  <RefreshCw02Icon className="w-4 h-4 text-gray-9 group-hover:text-gray-12" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Refresh link</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center justify-between w-full">
            <Header variant={"sm"}>Manage members</Header>
            <Button onClick={() => setInviteUserDialogOpen(true)}>
              Invite someone
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-start pt-4 w-full">
            <span className="text-sm font-medium text-gray-12 w-full">
              {pluralize(
                "active member",
                workspaceUsers.filter((u) => !u.isDeactivated).length,
                true,
              )}
            </span>
            {workspaceUsers !== undefined && (
              <div className="w-full">
                <WorkspaceMemberView
                  key={currentUser.id}
                  user={currentUser}
                  currentUser={currentUser}
                />

                {workspaceUsers
                  .filter((u) => u.id !== currentUser.id)
                  .filter((u) => !u.isDeactivated)
                  .map((user) => (
                    <WorkspaceMemberView
                      key={user.id}
                      user={user}
                      currentUser={currentUser}
                    />
                  ))}

                {workspaceUsers
                  .filter((u) => u.id !== currentUser.id)
                  .filter((u) => u.isDeactivated)
                  .map((user) => (
                    <WorkspaceMemberView
                      key={user.id}
                      user={user}
                      currentUser={currentUser}
                    />
                  ))}
              </div>
            )}

            {workspaceInvitedUsers.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-sm font-medium text-gray-12">
                  {pluralize(
                    "pending invite",
                    workspaceInvitedUsers.filter((u) => !u.accepted).length,
                    true,
                  )}
                </span>
                <div>
                  {workspaceInvitedUsers
                    .filter((u) => !u.accepted)
                    .filter((u) => !workspaceUserEmails.includes(u.email))
                    .map((userInvite) => (
                      <PendingMember
                        workspaceInvite={userInvite}
                        key={userInvite.id}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-row w-full justify-between items-start">
            <div className="flex flex-col space-y-2 w-full items-start">
              <Header variant={"sm"}>Allowed email domains</Header>
              <SubHeader variant={"sm"}>
                Anyone with an email at one of these domains can join your
                workspace.
              </SubHeader>
            </div>
            <Button
              onClick={() => setAddDomainModalOpen(true)}
              size={"sm"}
              variant={"outline"}
            >
              <PlusIcon className="w-4 h-4" />
              Add domain
            </Button>
          </div>

          <div className="space-y-2 w-full">
            {workspaceAllowedDomains.map((domain) => (
              <WorkspaceDomain key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </SettingsPageBody>
      <AddEmailDomainModal
        open={addDomainModalOpen}
        setOpen={setAddDomainModalOpen}
      />
      <Suspense fallback={null}>
        <InviteUserDialog
          isOpen={inviteUseDialogOpen}
          onClose={setInviteUserDialogOpen}
        />
      </Suspense>
    </SettingsPage>
  );
}

function WorkspaceDomain({ domain }: { domain: WorkspaceAllowedEmailDomain }) {
  const deleteWorkspaceDomain = useDeleteWorkspaceDomain();
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

  return (
    <>
      <div
        key={domain.id}
        className="flex flex-col sm:flex-row justify-between py-3 border-b border-gray-3 sm:items-center relative last:border-0 gap-0 w-full"
      >
        <div className="flex flex-col gap-0.5 w-full">
          <span className="text-sm font-medium">{domain.domain}</span>
          <span className="text-gray-9 text-xxs">
            Added on{" "}
            {DateTime.fromISO(domain.createdAt).toFormat("dd LLL yyyy")}
          </span>
        </div>

        <div className="flex-shrink-0 flex items-center absolute top-4 right-0 sm:static">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="icon"
                size="iconSm"
                onClick={() => setDeleteModalOpen(true)}
              >
                <Trash01Icon className="h-3.5 w-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Delete domain</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <DeleteEntityDialog
        onDelete={() => deleteWorkspaceDomain(domain.id)}
        title={`Are you sure you want to delete domain?`}
        description="This domain will no longer automatically grant access to this workspace."
        isOpen={deleteModalOpen}
        setOpen={setDeleteModalOpen}
      />
    </>
  );
}

type AddEmailDomainModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const addEmailDomainSchema = Yup.object().shape({
  domain: Yup.string()
    .required("Please enter a domain.")
    .matches(
      /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/,
      "This doesn't look like an email domain.",
    ), // CAMERON: this is a regex for a valid domain. But, GitHub copilot wrote it for me, so I'm not sure how it works. It also wrote this comment for me.
});

function AddEmailDomainModal({ open, setOpen }: AddEmailDomainModalProps) {
  const addWorkspaceDomain = useAddWorkspaceDomain();

  const formik = useFormik({
    initialValues: {
      domain: "",
    },
    validationSchema: addEmailDomainSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      addWorkspaceDomain(values.domain);
      setOpen(false);
    },
  });
  const { errors, getFieldProps, submitForm } = formik;

  const domainInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          domainInputRef.current?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>Invite Teammate</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="p-6 gap-6">
          <Form formik={formik}>
            <Input
              ref={domainInputRef}
              id={"domain"}
              label="Domain"
              error={errors.domain}
              {...getFieldProps("domain")}
              message="Anyone with an email matching this domain will be able to join this
            workspace."
              placeholder="example.com"
            />
          </Form>
          <Button className="self-end" onClick={submitForm}>
            Add domain
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function WorkspaceMemberView({
  user,
  currentUser,
}: {
  user: User;
  currentUser: User;
}) {
  const workspaceProfiles = useRecoilValue(profilesAtom);

  const profile = workspaceProfiles.find((p) => p.user === user.id);

  const updateUserDeactivation = useUpdateWorkspaceMemberDeactivation();

  const [showDeactivateModal, setShowDeactivateModal] = React.useState(false);

  const isDeactivated = user.isDeactivated;

  const undeactivateUser = async () =>
    updateUserDeactivation({
      profileId: user.id,
      isDeactivated: false,
    });

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between py-3 border-b border-gray-3 sm:items-center relative last:border-0 gap-0">
        <div className="mr-auto flex flex-row gap-2">
          <div className="flex-shrink-0">
            {profile && <ProfileAvatar profile={profile} shadow={"none"} />}
          </div>
          <div
            className={cn(
              "flex flex-col gap-0.5",
              isDeactivated && "text-gray-9",
            )}
          >
            <span
              className={cn(
                "font-medium text-sm",
                isDeactivated && "line-through",
              )}
            >
              {profile?.preferredName} {user.id === currentUser?.id && "(you)"}
            </span>
            <span
              className={cn(
                "text-gray-11 text-xs",
                isDeactivated && "text-gray-9",
              )}
            >
              {user.email}
            </span>
          </div>
        </div>
        <div className="w-[140px] ml-10 sm:mr-4 flex">
          {isDeactivated && (
            <span className="text-gray-9 text-xs sm:text-sm">Deactivated</span>
          )}
        </div>
        <div className="flex-shrink-0 flex items-center absolute top-4 right-0 sm:static">
          {currentUser.id !== user.id && (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="icon" size="iconSm">
                  <DotsHorizontalIcon className="w-3.5 h-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {isDeactivated ? (
                  <DropdownMenuItem onSelect={undeactivateUser}>
                    Reactivate user
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem
                    onSelect={() => setShowDeactivateModal(true)}
                  >
                    Deactivate user
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      <DeleteEntityDialog
        onDelete={() =>
          updateUserDeactivation({
            profileId: user.id,
            isDeactivated: true,
          })
        }
        title={`Are you sure you want to deactivate ${profile?.preferredName}?`}
        description="They will no longer be able to access this workspace."
        isOpen={showDeactivateModal}
        setOpen={setShowDeactivateModal}
        actionButtonText="Deactivate"
      />
    </>
  );
}

const PendingMember = ({
  workspaceInvite: userInvite,
}: {
  workspaceInvite: WorkspaceInviteRecord;
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between py-3 border-b border-gray-3 sm:items-center relative last:border-0 gap-0">
      <div className="mr-auto flex flex-row gap-2">
        <div className="flex-shrink-0">
          <AvatarFromText text={userInvite.email} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-gray-12 text-sm">
            {userInvite.email}
          </span>
          {userInvite.createdAt && (
            <span className="text-gray-11 text-xs font-normal">
              {RelativeDateUtils.getCleanFromISODate(userInvite.createdAt)}
            </span>
          )}
        </div>
      </div>
      <div className="flex-shrink-0 flex items-center absolute top-4 right-0 sm:static">
        <div className="w-4 h-4" />
      </div>
    </div>
  );
};

MembersPage.getLayout = SettingsLayout.getLayout;
