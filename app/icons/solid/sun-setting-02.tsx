import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SunSetting02IconInner(
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
        d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M3 20C3 19.4477 3.44772 19 4 19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20Z"
        fill="currentColor"
      />
      <path
        d="M2 12C1.44772 12 1 12.4477 1 13C1 13.5523 1.44772 14 2 14H4C4.55228 14 5 13.5523 5 13C5 12.4477 4.55228 12 4 12H2Z"
        fill="currentColor"
      />
      <path
        d="M4.1928 5.1928C4.58332 4.80227 5.21649 4.80227 5.60701 5.1928L7.02122 6.60701C7.41175 6.99753 7.41175 7.6307 7.02122 8.02122C6.6307 8.41175 5.99753 8.41175 5.60701 8.02122L4.1928 6.60701C3.80227 6.21649 3.80227 5.58332 4.1928 5.1928Z"
        fill="currentColor"
      />
      <path
        d="M19.8069 6.60701C20.1974 6.21649 20.1974 5.58332 19.8069 5.1928C19.4163 4.80227 18.7832 4.80227 18.3927 5.1928L16.9784 6.60701C16.5879 6.99753 16.5879 7.6307 16.9784 8.02122C17.369 8.41175 18.0021 8.41175 18.3927 8.02122L19.8069 6.60701Z"
        fill="currentColor"
      />
      <path
        d="M19 13C19 12.4477 19.4477 12 20 12H22C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14H20C19.4477 14 19 13.5523 19 13Z"
        fill="currentColor"
      />
      <path
        d="M2 15.5C1.44772 15.5 1 15.9477 1 16.5C1 17.0523 1.44772 17.5 2 17.5H22C22.5523 17.5 23 17.0523 23 16.5C23 15.9477 22.5523 15.5 22 15.5H2Z"
        fill="currentColor"
      />
      <path
        d="M12 7C8.68629 7 6 9.68629 6 13C6 13.5523 6.44772 14 7 14H17C17.5523 14 18 13.5523 18 13C18 9.68629 15.3137 7 12 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SunSetting02Icon = forwardRef(SunSetting02IconInner);
export { SunSetting02Icon };
