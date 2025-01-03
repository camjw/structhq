import React from "react";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

type SettingsSidebarLinkProps = {
  href: string;
  label: string;
  className?: string;
  isExact?: boolean;
} & LinkProps;

export const SettingsSidebarLink = ({
  href,
  label,
  className,
  isExact = false,
  ...props
}: SettingsSidebarLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const router = useRouter();

  const isActive = React.useMemo(() => {
    const currentURL = new URL(router.asPath, "http://doesntmatter");
    const currentURLPath = currentURL.pathname;

    if (isExact) {
      return currentURLPath === href;
    }

    return currentURLPath.startsWith(href);
  }, [router, href, isExact]);

  return (
    <Button
      variant="unstyled"
      size={"none"}
      className={cn(
        "justify-center text-sm group focus-visible:ring-0 focus-visible:-ring-offset-0 focus:outline-none focus:ring-0 transition-colors rounded outline-none",
        "px-1.5 py-1 w-full",
        isActive
          ? "bg-gray-5 text-gray-12"
          : "text-gray-11 hover:bg-gray-4 hover:text-gray-12",
        className,
      )}
      asChild
    >
      <Link href={href} {...props}>
        <span className="flex flex-shrink-0 justify-start w-full text-gray-12 font-medium">
          {label}
        </span>
      </Link>
    </Button>
  );
};
