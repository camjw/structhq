import { SlackIcon } from "@/icons/brand/slack_icon";
import { BookOpen02Icon } from "@/icons/outline/book-open-02";
import { HelpCircleIcon } from "@/icons/outline/help-circle";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLink,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SupportMenu() {
  return (
    <div className="flex flex-col items-start gap-2 w-full justify-center pb-4 pl-[14px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"unstyled"}
            className="hover:bg-gray-4 rounded-lg transition-colors h-9 w-9"
          >
            <HelpCircleIcon className="h-5 w-5 text-gray-11 group-hover:text-gray-12 flex-shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          align="start"
          className="!min-w-[10rem]"
        >
          <DropdownMenuLink
            href={process.env.NEXT_PUBLIC_DOCS_URL as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen02Icon className="h-4 w-4 mr-2 text-gray-12" />
            Documentation
          </DropdownMenuLink>
          <DropdownMenuLink
            href={process.env.NEXT_PUBLIC_COMMUNITY_URL as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlackIcon className="h-[18px] w-[18px] -ml-[1px] mr-[7px] text-gray-12" />
            Community
          </DropdownMenuLink>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
