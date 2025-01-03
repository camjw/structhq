"use client";

import { useToast } from "@/hooks/use_toast";
import { LinkedinIcon } from "@/icons/brand/linkedin-icon";
import { TwitterIcon } from "@/icons/brand/twitter-icon";
import { ClipboardIcon } from "@/icons/outline/clipboard";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { TypographyH4 } from "@/components/ui/typography-h4";

import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_EMAIL,
  COMPANY_DOCUMENTATION_URL,
  COMPANY_LEGAL_NAME,
  COMPANY_LINKEDIN_HANDLE,
  COMPANY_SUPPORT_EMAIL,
  COMPANY_TWITTER_HANDLE,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

import { BrandingLogo } from "./branding/branding_logo";

type FooterElement = {
  name: string;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
  as?: "link" | "a";
};

type FooterSection = {
  name: string;
  elements: FooterElement[];
};

export const Footer = () => {
  const pathname = usePathname();

  const { toast } = useToast();

  const FOOTER_SECTIONS: FooterSection[] = [
    {
      name: "Company",
      elements: [
        // {
        //   name: "Blog",
        //   href: "/blog",
        // },
        {
          name: "Contact",
          onClick: async () => {
            await navigator.clipboard.writeText(COMPANY_SUPPORT_EMAIL);
            toast({
              id: "contact-email-copied",
              duration: 3000,
              icon: (
                <ClipboardIcon className="relative -top-0.5 text-gray-8 w-5 h-5" />
              ),
              title: "Email copied",
              description: (
                <>
                  <span className="text-primary-9 font-semibold">
                    {COMPANY_CONTACT_EMAIL}
                  </span>{" "}
                  was copied to your clipboard, get in touch!
                </>
              ),
            });
          },
        },
        // {
        //   name: "People",
        //   href: "/people.txt",
        //   as: "a",
        // },
      ],
    },
    // {
    //   name: "Product",
    //   elements: [
    //     {
    //       name: "Documentation",
    //       href: COMPANY_DOCUMENTATION_URL,
    //     },
    //     {
    //       name: "Security",
    //       href: "/security",
    //     },
    //   ],
    // },
    {
      name: "Legal",
      elements: [
        {
          name: "Privacy Policy",
          href: "/privacy",
        },
        {
          name: "Terms and Conditions",
          href: "/terms-and-conditions",
        },
        // {
        //   name: "Report a vulnerability",
        //   href: "/vulnerability-report",
        // },
      ],
    },
  ];

  return (
    <footer className="bg-white flex flex-col justify-center items-center lg:px-6 py-8 z-[2] relative">
      <div className="container flex flex-col md:flex-row-reverse gap-12 py-6 md:gap-20 md:py-14 md:justify-between border-t border-gray-4">
        <div className="text-gray-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
          {FOOTER_SECTIONS.map((section) => (
            <div
              className="flex flex-col gap-10 items-start border-t border-gray-5 pt-8 sm:border-0 sm:pt-0 first:border-0 first:pt-0"
              key={section.name}
            >
              <TypographyH4>{section.name}</TypographyH4>
              <nav>
                <ul className="flex flex-col gap-4 text-sm">
                  {section.elements.map((element) => (
                    <li key={element.name}>
                      <FooterLink
                        href={element.href}
                        onClick={element.onClick}
                        className={
                          element.href &&
                          pathname &&
                          pathname.startsWith(element.href)
                            ? "font-bold hover:white"
                            : ""
                        }
                        as={element.newTab ? "a" : (element.as ?? "link")}
                      >
                        {element.name}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 items-start flex-shrink-0 md:border-0 md:pt-0">
          <BrandingLogo size={"lg"} />
          <p className="text-sm text-gray-12 leading-[200%]">
            {COMPANY_ADDRESS}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="pb-8 justify-between flex flex-col-reverse gap-8 lg:flex-row lg:items-center">
          <p className="text-sm text-gray-12">
            © {new Date().getFullYear()} {COMPANY_LEGAL_NAME}
          </p>
          <nav>
            <ul className="flex text-gray-12 items-center gap-4">
              {/* <li>
                <FooterLink
                  as="a"
                  href={`https://www.linkedin.com/company/${COMPANY_LINKEDIN_HANDLE}`}
                >
                  <LinkedinIcon />
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  as="a"
                  href={`https://twitter.com/${COMPANY_TWITTER_HANDLE}`}
                >
                  <TwitterIcon />
                </FooterLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  children,
  href,
  onClick,
  className,
  as = "link",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  as?: "link" | "a";
}) => {
  if (href) {
    const Component = as === "a" ? "a" : Link;

    return (
      <Component
        href={href}
        onClick={onClick}
        className={cn(
          "hover:text-gray-12 transition-colors inline-block focus-visible:outline-white",
          className
        )}
      >
        {children}
      </Component>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "hover:text-gray-12 transition-colors inline-block focus-visible:outline-white",
        className
      )}
    >
      {children}
    </button>
  );
};
