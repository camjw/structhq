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

type SidebarLinkProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  activeIcon: React.ComponentType<{ className?: string }>;
  tooltip: string;
  isExactPath?: boolean;
  className?: string;
} & LinkProps;

export const SidebarLink = ({
  href,
  icon: Icon,
  activeIcon: ActiveIcon,
  tooltip,
  isExactPath = false,
  className,
  ...props
}: SidebarLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const router = useRouter();

  const isActive = React.useMemo(() => {
    if (isExactPath) {
      return router.asPath === href;
    }

    const currentURL = new URL(router.asPath, "http://doesntmatter");
    const currentURLPath = currentURL.pathname;

    return currentURLPath.startsWith(href);
  }, [router, href, isExactPath]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="unstyled"
          className={cn(
            "justify-center text-xs group h-9 w-9 focus-visible:ring-0 focus-visible:-ring-offset-0 focus:outline-none focus:ring-0 transition-colors rounded-lg outline-none",
            isActive
              ? "bg-gray-5 text-gray-12"
              : "text-gray-11 hover:bg-gray-4 hover:text-gray-12",
            className,
          )}
          asChild
        >
          <Link href={href} {...props}>
            <span className="flex flex-shrink-0">
              <Icon className={cn("h-5 w-5")} />
            </span>
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <span>{tooltip}</span>
      </TooltipContent>
    </Tooltip>
  );
};
