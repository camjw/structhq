import { SVGProps } from "react";

import { cn } from "@/lib/utils";

export const WifiIcon = ({
  width = "50",
  height = "50",
  fill = "none",
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 50 50"
      {...{ width, height, fill }}
      className={cn("text-gray-12", className)}
      {...props}
    >
      <path
        d="M25.0002 40.625H25.021M47.5135 18.1266C41.5825 12.6916 33.6786 9.375 24.9999 9.375C16.3213 9.375 8.41731 12.6916 2.48633 18.1266M9.85836 25.5062C13.8961 21.9493 19.1961 19.7917 25.0001 19.7917C30.8041 19.7917 36.1041 21.9493 40.1419 25.5062M32.705 32.8648C30.5819 31.2006 27.9068 30.2083 24.9999 30.2083C22.0491 30.2083 19.3371 31.2308 17.1989 32.9408"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
