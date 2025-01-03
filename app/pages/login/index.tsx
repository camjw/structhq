import React, { useCallback, useEffect } from "react";

import { GetServerSideProps } from "next";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { parseAsString, useQueryStates } from "nuqs";
import { toast } from "sonner";

import { BrandingLogo } from "@/components/branding/branding_logo";
import NotLoggedInLayout from "@/components/layouts/not_logged_in_layout";
import LoadingSpinner from "@/components/loading_states/loading_spinner";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";

import { COMPANY_DEMO_FORM_URL, COMPANY_NAME } from "@/lib/constants";

const FALLBACK_REDIRECT_URL = "/";

enum LoginState {
  Home,
  Email,
  SAML,
}

export default function Login() {
  const { data: session } = useSession();

  const router = useRouter();

  const [callbackUrl, setCallbackUrl] = React.useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const callbackUrl = cookies.callbackUrl;

    setCallbackUrl(callbackUrl);
  }, [setCallbackUrl]);

  const [inviteLinkValues] = useQueryStates({
    workspaceSlug: parseAsString,
    inviteLinkId: parseAsString,
  });

  const onSessionCreated = useCallback(async () => {
    if (inviteLinkValues.workspaceSlug && inviteLinkValues.inviteLinkId) {
      router.push(
        `/join?workspaceSlug=${inviteLinkValues.workspaceSlug}&inviteLinkId=${inviteLinkValues.inviteLinkId}`,
      );
      return;
    }

    try {
      if (callbackUrl) {
        destroyCookie(null, "callbackUrl");
        router.push(callbackUrl);
        return;
      }

      router.push(FALLBACK_REDIRECT_URL);
    } catch (error) {
      console.error(error);
      router.push(FALLBACK_REDIRECT_URL);
    }
  }, [router, callbackUrl, inviteLinkValues]);

  useEffect(() => {
    console.log("session", session);
    if (session) {
      (async () => {
        await onSessionCreated();
      })();
    }
  }, [onSessionCreated, session]);

  const [loginState, setLoginState] = React.useState(LoginState.Home);

  useEffect(() => {
    if (router.isReady) {
      const { error, ...rest } = router.query;

      if (error) {
        setTimeout(() => toast.error("Sorry, something went wrong!"), 0);

        router.replace({ pathname: router.pathname, query: rest }, undefined, {
          shallow: true,
        });
      }
    }
  }, [router]);

  const [isLoading, setIsLoading] = React.useState(false);

  const [showEmailError, setShowEmailError] = React.useState(false);

  const fakeEmailLogin = React.useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowEmailError(true);
    }, 2000);
  }, []);

  const fakeSAMLLogin = React.useCallback(() => {
    setIsLoading(true);
    setShowEmailError(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowEmailError(true);
    }, 2000);
  }, []);

  if (session) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-sm flex flex-col items-center space-y-14 pb-12">
        <div className="flex flex-col items-center space-y-4">
          <BrandingLogo />
          {loginState === LoginState.Home && (
            <Header className="pt-1">Login to {COMPANY_NAME}</Header>
          )}
          {loginState === LoginState.Email && (
            <Header className="pt-1">What's your email address?</Header>
          )}
          {loginState === LoginState.SAML && (
            <Header className="pt-1">What's your email address?</Header>
          )}
        </div>

        {loginState === LoginState.Home && (
          <>
            <div className="flex flex-col space-y-3">
              {process.env.NODE_ENV === "development" && (
                <Button
                  type="button"
                  size={"xl"}
                  textVariant={"lg"}
                  onClick={() => {
                    signIn("google");
                  }}
                >
                  Continue with Google
                </Button>
              )}
              {/* <Button
                type="button"
                size={"xl"}
                textVariant={"lg"}
                onClick={() => {
                  setLoginState(LoginState.SAML);
                }}
              >
                Continue with SAML SSO
              </Button> */}
              <Button
                type="button"
                variant={"outline"}
                size={"xl"}
                textVariant={"lg"}
                onClick={() => {
                  setLoginState(LoginState.Email);
                }}
              >
                Continue with Email
              </Button>
            </div>
            <Button
              type="button"
              variant={"tertiary"}
              size={"xl"}
              textVariant={"lg"}
              asChild
            >
              <Link
                href={COMPANY_DEMO_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
              </Link>
            </Button>
          </>
        )}

        {loginState === LoginState.Email && (
          <>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <Input
                  height="lg"
                  placeholder="Enter your email address..."
                  className="!shadow-none !bg-transparent !border-gray-5"
                />
                {showEmailError && (
                  <div className="text-red-11 text-xxs">
                    No account found for this email address.
                  </div>
                )}
              </div>
              <Button
                type="button"
                variant={"outline"}
                size={"xl"}
                textVariant={"lg"}
                onClick={fakeEmailLogin}
                disabled={isLoading}
              >
                Continue with Email
              </Button>
            </div>
            <Button
              type="button"
              variant={"tertiary"}
              size={"xl"}
              textVariant={"lg"}
              onClick={() => {
                setLoginState(LoginState.Home);
                setShowEmailError(false);
              }}
            >
              Back to login
            </Button>
          </>
        )}

        {loginState === LoginState.SAML && (
          <>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <Input
                  height="lg"
                  placeholder="Enter your email address..."
                  className="!shadow-none !bg-transparent !border-gray-5"
                />
                {showEmailError && (
                  <div className="text-red-11 text-xxs">
                    No SAML SSO workspace found for this email address.
                  </div>
                )}
              </div>
              <Button
                type="button"
                variant={"outline"}
                size={"xl"}
                textVariant={"lg"}
                onClick={fakeSAMLLogin}
                disabled={isLoading}
              >
                Continue with SAML
              </Button>
            </div>
            <Button
              type="button"
              variant={"tertiary"}
              size={"xl"}
              textVariant={"lg"}
              onClick={() => {
                setLoginState(LoginState.Home);
                setShowEmailError(false);
              }}
            >
              Back to login
            </Button>
          </>
        )}
      </form>
    </div>
  );
}

Login.getLayout = NotLoggedInLayout.getLayout;
Login.isUnprotected = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, res } = context;
  const { callbackUrl, ...restQueryParams } = query;

  if (callbackUrl) {
    // Set the callbackUrl in a cookie
    setCookie(context, "callbackUrl", callbackUrl as string, {
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    // Rebuild the URL without the callbackUrl query parameter
    const baseUrl = context.resolvedUrl.split("?")[0];
    const remainingQueryParams = new URLSearchParams(
      restQueryParams as Record<string, string>,
    );
    const redirectUrl = remainingQueryParams.toString()
      ? `${baseUrl}?${remainingQueryParams.toString()}`
      : baseUrl;

    res.writeHead(302, { Location: redirectUrl });
    res.end();

    return { props: {} };
  }

  return {
    props: {},
  };
};
