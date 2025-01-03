import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const SettingsPage = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex flex-col w-full h-full overflow-y-auto min-h-screen",
      className,
    )}
  >
    {children}
  </div>
);

const SettingsPageBody = ({
  children,
  className,
  wrapperClassName,
}: {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
}) => (
  <div className={cn("w-full h-full overflow-y-auto", wrapperClassName)}>
    <div
      className={cn(
        "flex flex-col gap-8 p-8 pb-[3.75rem] pt-20 lg:pb-12 max-w-[45rem] mx-auto w-full",
        className,
      )}
    >
      {children}
    </div>
  </div>
);

export { SettingsPage, SettingsPageBody };
