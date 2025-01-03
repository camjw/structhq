import { ArrowRightIcon } from "@/icons/outline/arrow-right";
import { Mail02Icon } from "@/icons/solid/mail-02";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { COMPANY_DEMO_FORM_URL, COMPANY_NAME } from "@/lib/constants";

export default function ComingSoonSection() {
  return (
    <>
      <div className="mx-auto pt-2 max-w-[86rem] px-4 sm:pt-24 sm:px-12 lg:pt-32 min-h-screen">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="md:mx-auto md:max-w-xl lg:col-span-5 lg:text-left">
            <div className="flex flex-row space-x-2 items-center justify-start w-full py-3 mt-0">
              <h1 className="font-bold text-5xl tracking-tighter !leading-[1.125]">
                {COMPANY_NAME}
              </h1>
            </div>
            <div className="flex flex-col space-y-0.5">
              <span className="mt-3 text-gray-12 opacity-85 !leading-[1.125] font-semibold sm:mt-5 text-4xl text-left lg:text-5xl xl:text-6xl inline-flex">
                Legals for startups
              </span>
              <span className="mt-3 text-gray-12 opacity-85 !leading-[1.125] font-semibold sm:mt-5 text-4xl text-left lg:text-5xl xl:text-6xl inline-flex whitespace-nowrap">
                Without the lawyers
              </span>
            </div>
            <div className="mt-12 sm:mx-1 sm:max-w-lg sm:text-center lg:text-left flex flex-row items-center space-x-4">
              <Button asChild className="!rounded-full !shadow-md">
                <Link
                  href={COMPANY_DEMO_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail02Icon className="w-5 h-5 text-primary-9 bg-white rounded-full p-[3px] -ml-2" />
                  Request access
                </Link>
              </Button>
              <Button
                variant={"tertiary"}
                asChild
                className="!bg-white !text-gray-12 rounded-full !shadow-md"
              >
                <Link href={"https://app.structhq.com/"}>
                  <ArrowRightIcon className="w-5 h-5 text-white bg-gray-11 rounded-full p-[3px] -ml-2" />
                  Sign in
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-7 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-4xl">
              <div className="relative block w-full overflow-hidden rounded-lg bg-white h-full min-h-[32rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
