import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function HeartIconInner(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9928 3.71703C9.65285 1.67214 6.19239 1.25369 3.50509 3.54978C0.598301 6.0334 0.175971 10.2162 2.47459 13.1741C3.34712 14.2968 5.05011 15.9836 6.68672 17.5284C8.34249 19.0912 9.99445 20.568 10.8091 21.2895C10.8142 21.294 10.8194 21.2986 10.8247 21.3033C10.9012 21.3712 10.9966 21.4557 11.088 21.5245C11.1974 21.6069 11.3545 21.7092 11.5643 21.7718C11.8432 21.855 12.143 21.855 12.422 21.7718C12.6318 21.7092 12.7889 21.6069 12.8983 21.5245C12.9897 21.4557 13.085 21.3712 13.1616 21.3033C13.1669 21.2986 13.1721 21.294 13.1772 21.2895C13.9918 20.568 15.6438 19.0912 17.2996 17.5284C18.9362 15.9836 20.6392 14.2968 21.5117 13.1741C23.8015 10.2276 23.4444 6.0125 20.4708 3.54101C17.7536 1.28258 14.33 1.67136 11.9928 3.71703Z"
        fill="currentColor"
      />
    </svg>
  );
}
const HeartIcon = forwardRef(HeartIconInner);
export { HeartIcon };