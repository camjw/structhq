"use client";

import { useEffect } from "react";

import Link from "next/link";
import Script from "next/script";

import { useLocalStorage } from "@/hooks/use_local_storage";
import { useToast } from "@/hooks/use_toast";
import { CookieIcon } from "@/icons/brand/cookie-icon";
import { ToastAction } from "@/components/ui/toast";

export const CookieToast = () => {
  const { toast } = useToast();

  const [consentState, setConsentState] = useLocalStorage<
    "accepted" | "rejected" | null
  >("consentState", null);

  const onCookiesAccepted = () => setConsentState("accepted");
  const onCookiesRejected = () => setConsentState("rejected");

  useEffect(() => {
    if (!!consentState) return;

    toast({
      itemID: "cookie-consent",
      duration: Infinity,
      icon: <CookieIcon className="relative -top-0.5 text-gray-8" />,
      title: "Cookie consent",
      description: (
        <>
          We use cookies to improve your experience and for marketing. You can
          view our cookie policy{" "}
          <Link href="/privacy" className="font-bold">
            here
          </Link>
          .
        </>
      ),
      actions: [
        <ToastAction
          key="accept"
          altText="Accept all"
          className="bg-gray-12 hover:bg-gray-12/80 focus-visible:ring-gray-12"
          onClick={onCookiesAccepted}
        >
          Accept all
        </ToastAction>,
        <ToastAction
          key="reject"
          altText="Reject all"
          variant="outline"
          onClick={onCookiesRejected}
        >
          Reject all
        </ToastAction>,
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consentState]);

  if (!consentState || consentState === "rejected") return null;

  return (
    <>
      <Script
        data-domain="sonatahq.com"
        src="https://plausible.io/js/script.js"
        defer
      />
    </>
  );
};
