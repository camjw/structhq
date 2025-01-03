import React, { useCallback } from "react";

import { Router, useRouter } from "next/router";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function UnsavedChangesDialog({
  hasUnsavedChanges,
  onReset,
  title = "Unsaved changes",
  description = "Are you sure you want to leave without saving your changes?",
  continueText = "Keep editing",
  discardText = "Discard changes",
}: {
  hasUnsavedChanges: boolean;
  onReset: () => void;
  title?: string;
  description?: string;
  continueText?: string;
  discardText?: string;
}) {
  const router = useRouter();

  const [nextUrl, setNextUrl] = React.useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDiscarding, setIsDiscarding] = React.useState(false);

  const nativeBrowserHandler = useCallback(
    (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges && !isDiscarding) {
        event.preventDefault();
      }
    },
    [hasUnsavedChanges, isDiscarding],
  );

  const nextNavigationHandler = useCallback(
    (url: string) => {
      // Allow navigation if only query params change
      const parsedUrl = new URL(`https://dummy.com${url}`);
      const currentUrl = new URL(`https://dummy.com${router.asPath}`);
      if (parsedUrl.pathname === currentUrl.pathname) {
        return;
      }

      if (hasUnsavedChanges && !isDiscarding) {
        setNextUrl(url);
        setIsModalOpen(true);
        Router.events.emit("routeChangeError");
        // eslint-disable-next-line no-throw-literal
        throw "Abort route change, unsaved changes.";
      }
    },
    [hasUnsavedChanges, isDiscarding, router.asPath],
  );

  React.useEffect(() => {
    window.addEventListener("beforeunload", nativeBrowserHandler);
    Router.events.on("beforeHistoryChange", nextNavigationHandler);

    // On component unmount, remove the event listener and finish the upload
    return () => {
      window.removeEventListener("beforeunload", nativeBrowserHandler);
      Router.events.off("beforeHistoryChange", nextNavigationHandler);
    };
  }, [
    hasUnsavedChanges,
    setNextUrl,
    setIsModalOpen,
    isModalOpen,
    nativeBrowserHandler,
    nextNavigationHandler,
  ]);

  const onKeepEditing = useCallback(() => {
    setNextUrl(null);
    setIsModalOpen(false);
  }, [setNextUrl, setIsModalOpen]);

  const onLeaveWithoutSaving = useCallback(async () => {
    setIsDiscarding(true);
    onReset();

    if (nextUrl) {
      await router.push(nextUrl);
    }
    setIsModalOpen(false);
  }, [onReset, nextUrl, router]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <div className="flex gap-3 w-full justify-end mt-4">
          <AlertDialogAction asChild>
            <Button
              variant="outline"
              className="w-auto"
              onClick={onLeaveWithoutSaving}
            >
              {discardText}
            </Button>
          </AlertDialogAction>
          <AlertDialogCancel asChild>
            <Button variant="default" onClick={onKeepEditing}>
              <span>{continueText}</span>
            </Button>
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
