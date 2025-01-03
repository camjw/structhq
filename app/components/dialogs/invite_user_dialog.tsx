import React from "react";

import { useInviteWorkspaceMember } from "@/hooks/state/workspace/use_invite_workspace_member";
import { userAtom } from "@/state/user";
import { FormikHelpers, useFormik } from "formik";
import { useRecoilValue } from "recoil";
import { toast } from "sonner";
import * as Yup from "yup";

import useAuthToken from "@/components/auth/use_auth_token";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { BackendRequest } from "@/lib/backend_request";

interface InviteUserFormValues {
  emailInput: string;
}

export default function InviteUserDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const user = useRecoilValue(userAtom);

  const inviteUser = useInviteWorkspaceMember();

  const onSubmit = React.useCallback(
    async (
      values: InviteUserFormValues,
      formikHelpers: FormikHelpers<InviteUserFormValues>,
    ) => {
      const invite = await inviteUser({
        email: values.emailInput,
      });

      if (!invite) return;

      formikHelpers.resetForm();

      onClose(false);
    },
    [inviteUser, onClose],
  );

  const formik = useFormik<InviteUserFormValues>({
    onSubmit,
    validationSchema: Yup.object().shape({
      emailInput: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address"),
    }),
    initialValues: {
      emailInput: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const { errors, handleChange, values, isSubmitting } = formik;

  const authToken = useAuthToken();

  const copyInviteLink = React.useCallback(async () => {
    try {
      const inviteTokenResponse = await BackendRequest.call<
        void,
        { token: string }
      >(`workspaces/invite_token/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken?.access}`,
        },
      });

      const { token } = await inviteTokenResponse.json();

      const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/account/create?token=${token}`;

      if (!navigator.clipboard) return;

      navigator.clipboard.writeText(inviteLink);

      toast.success("Invite link copied");
    } catch (e) {
      console.error(e);
      toast.error("Error copying invite link");
    }
  }, [authToken]);

  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(isOpen) => onClose(isOpen)}>
      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>Invite coworker</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="p-6">
          <Form formik={formik} className="gap-8 !pb-2">
            <Input
              ref={inputRef}
              value={values.emailInput}
              label="Email"
              type="text"
              name="emailInput"
              onChange={handleChange}
              error={errors.emailInput}
            />

            <div className="flex flex-row justify-end space-x-2">
              <Button type="button" variant="outline" onClick={copyInviteLink}>
                Copy invite link
              </Button>

              <Button type="submit" disabled={isSubmitting}>
                Send invite
              </Button>
            </div>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
