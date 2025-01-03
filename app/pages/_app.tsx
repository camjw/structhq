import React from "react";

import { AlertTriangleIcon } from "@/icons/solid/alert-triangle";
import { CheckCircleIcon } from "@/icons/solid/check-circle";
import { InfoCircleIcon } from "@/icons/solid/info-circle";
import { SlashCircle02Icon } from "@/icons/solid/slash-circle-02";
import "katex/dist/katex.min.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { RecoilEnv } from "recoil";
import { Toaster } from "sonner";

import AuthGuard from "@/components/auth/auth_guard";
import { EasterEggMode } from "@/components/debug/easter_egg_mode";
import { LevaMenu } from "@/components/debug/leva_menu";
import LoggedInLayout from "@/components/layouts/logged_in_layout";
import { ResettableRecoilRoot } from "@/components/resettable_recoil_root";
import { TooltipProvider } from "@/components/ui/tooltip";

import { COMPANY_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

import "@/styles/antialiasing.css";
import "@/styles/code_highlighting.css";
import "@/styles/overscroll.css";
import "@/styles/scrollbar.css";
import "@/styles/tailwind.css";
import "@/styles/tiptap.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function reportWebVitals(metric: any) {
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.NEXT_PUBLIC_LOG_WEB_VITALS === "true"
  ) {
    console.log(metric);
  }
}
interface ProtectableComponent {
  isUnprotected: boolean;
}
interface LayoutableComponent {
  getLayout?: (page: React.ReactNode, path: string) => React.ReactNode;
}

export default function StructApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Environment variable didn't work!
    RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  }, []);

  const getLayout =
    (Component as unknown as LayoutableComponent).getLayout ||
    LoggedInLayout.getLayout;

  const { isUnprotected } = Component as unknown as ProtectableComponent;

  const router = useRouter();

  return (
    <main
      className={cn(
        "min-h-screen bg-white font-sans antialiased",
        fontSans.variable,
      )}
      suppressHydrationWarning
    >
      <Head>
        <title>{`${COMPANY_NAME}`}</title>
      </Head>
      <SessionProvider
        session={pageProps.session}
        refetchInterval={10 * 60}
        refetchOnWindowFocus={true}
      >
        <ResettableRecoilRoot>
          <AuthGuard loginRedirect={!isUnprotected}>
            <EasterEggMode />
            <LevaMenu />
            <TooltipProvider delayDuration={400}>
              <>{getLayout(<Component {...pageProps} />, router.asPath)}</>
              <Toaster
                expand
                icons={{
                  success: <CheckCircleIcon className="text-green-8 w-5 h-5" />,
                  info: <InfoCircleIcon className="text-blue-8 w-5 h-5" />,
                  warning: (
                    <AlertTriangleIcon className="text-amber-8 w-5 h-5" />
                  ),
                  error: (
                    <SlashCircle02Icon className="text-danger-8 w-5 h-5" />
                  ),
                }}
              />
            </TooltipProvider>
          </AuthGuard>
        </ResettableRecoilRoot>
      </SessionProvider>
    </main>
  );
}
