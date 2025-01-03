"use client";

import { useState } from "react";

import { useAuthedAppUrl } from "@/hooks/use_authed_app_url";
import { useToast } from "@/hooks/use_toast";
import { ChevronDownIcon } from "@/icons/outline/chevron-down";
import { ClipboardIcon } from "@/icons/outline/clipboard";
import { File01Icon } from "@/icons/outline/file-01";
import { File02Icon } from "@/icons/outline/file-02";
import { Users01Icon } from "@/icons/outline/users-01";
import { Menu01Icon } from "@/icons/solid/menu-01";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandingLogoType } from "@/components/branding/branding_logo";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  COMPANY_CAREERS_CLUE,
  COMPANY_DEMO_FORM_URL,
  COMPANY_DOCUMENTATION_URL,
  COMPANY_LOGIN_URL,
  COMPANY_NAME,
  COMPANY_SUPPORT_EMAIL,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Header = () => {
  const authedAppUrl = useAuthedAppUrl();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50">
        <header className={cn("h-16 flex items-center bg-white")}>
          <div className="w-full px-4 grid grid-rows-1 grid-cols-1">
            <div className="flex justify-between w-full row-start-1 col-start-1">
              <Link href="/" className="flex-shrink-0 rounded-lg">
                <BrandingLogoType className="h-[28px] sm:h-[33px]" />
              </Link>

              <div className="flex gap-2 items-center">
                {authedAppUrl ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={authedAppUrl}>Open {COMPANY_NAME}</Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      size={"lg"}
                      textVariant={"lg"}
                    >
                      <Link href={COMPANY_LOGIN_URL}>Login</Link>
                    </Button>
                    <Button asChild size={"lg"} textVariant={"lg"}>
                      <a href={COMPANY_DEMO_FORM_URL}>Book a demo</a>
                    </Button>
                  </>
                )}
                <Popover
                  open={isMobileNavOpen}
                  onOpenChange={(isOpen) => setIsMobileNavOpen(isOpen)}
                >
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                      <Menu01Icon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent forceMount align="end" className="lg:hidden">
                    <Nav
                      className="flex-col gap-4"
                      onLinkClick={() => setIsMobileNavOpen(false)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="row-start-1 col-start-1 h-full pointer-events-none">
              <div className="flex items-center justify-center h-full">
                <Nav className="hidden lg:flex gap-10 " />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

const Nav = ({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: () => void;
}) => {
  const pathname = usePathname();

  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

  const { toast } = useToast();

  return (
    <nav>
      <ul className={cn("flex text-xs md:text-sm items-center", className)}>
        <li>
          <HeaderLink
            className={pathname === "/changelog" ? "text-gray-12" : ""}
            href="/changelog"
            onClick={onLinkClick}
            text="Changelog"
          />
        </li>
        <li>
          <HeaderLink
            className={""}
            href={COMPANY_DOCUMENTATION_URL}
            onClick={onLinkClick}
            text="Documentation"
          />
        </li>

        <li className="pointer-events-auto">
          <DropdownMenu
            open={isCompanyMenuOpen}
            onOpenChange={setIsCompanyMenuOpen}
          >
            <DropdownMenuTrigger>
              <div className="flex flex-row items-center gap-1 text-gray-9 hover:text-gray-12 hover:opacity-100 transition-all">
                <span className="text-lg">Company</span>
                <ChevronDownIcon
                  className={cn(
                    "h-2.5 w-2.5 transform origin-center ease-in-out transition-transform duration-200",
                    isCompanyMenuOpen ? "rotate-180" : "",
                  )}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent
                align="start"
                className="text-sm flex flex-col space-y-4 p-3"
              >
                <div
                  className={cn(
                    `group-hover:text-gray-9 transition-colors pointer-events-auto cursor-pointer`,
                    className,
                  )}
                  onClick={async () => {
                    await navigator.clipboard.writeText(COMPANY_CAREERS_CLUE);

                    toast({
                      id: "contact-email-copied",
                      duration: 3000,
                      icon: (
                        <ClipboardIcon className="relative -top-0.5 text-gray-8 w-5 h-5" />
                      ),
                      title: "Something was copied (...?)",
                      description: (
                        <>
                          Have a look at your clipboard if you're interested in
                          working at {COMPANY_NAME}!
                        </>
                      ),
                    });
                  }}
                >
                  <div className="flex items-center flex-row space-x-2 group">
                    <Users01Icon className="h-5 w-5 text-gray-9 group-hover:text-gray-12 transition-colors" />
                    <span
                      className={cn(
                        "group-hover:text-gray-12 text-gray-9 group-hover:opacity-100 font-medium text-lg transition-all",
                        className,
                      )}
                    >
                      Careers
                    </span>
                  </div>
                </div>
                <HeaderLink
                  icon={File02Icon}
                  className={pathname === "/blog" ? "text-gray-12" : ""}
                  href="/blog"
                  onClick={onLinkClick}
                  text="Blog"
                />
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
};

const HeaderLink = ({
  icon,
  text,
  href,
  className,
  onClick,
}: {
  icon?: React.ElementType<Omit<React.SVGProps<SVGSVGElement>, "ref">>;
  text: string;
  href: string;
  className?: string;
  onClick?: () => void;
}) => {
  const Icon = icon;

  return (
    <Link
      href={href}
      className={cn(
        `group-hover:text-gray-9 transition-colors pointer-events-auto before:content-["${text.replaceAll(
          " ",
          "_",
        )}"] before:block before:overflow-hidden before:invisible before:h-0`,
        className,
      )}
      onClick={onClick}
    >
      <div className="flex items-center flex-row space-x-2 group">
        {Icon && (
          <Icon className="h-5 w-5 text-gray-9 group-hover:text-gray-12 transition-colors" />
        )}
        <span
          className={cn(
            "group-hover:text-gray-12 text-gray-9 group-hover:opacity-100 font-medium text-lg transition-all",
            className,
          )}
        >
          {text}
        </span>
      </div>
    </Link>
  );
};
