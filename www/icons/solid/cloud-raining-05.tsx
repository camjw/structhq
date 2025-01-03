import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudRaining05IconInner(
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
        d="M12 1C9.68905 1 7.66126 2.20617 6.50941 4.01977C3.42516 4.26936 1 6.85147 1 10C1 13.3137 3.68629 16 7 16H17.5C20.5376 16 23 13.5376 23 10.5C23 7.63481 20.8091 5.28134 18.0112 5.02345C17.0375 2.66263 14.714 1 12 1Z"
        fill="currentColor"
      />
      <path
        d="M8.37141 17.5713C8.8842 17.7764 9.13361 18.3584 8.9285 18.8712L7.9285 21.3712C7.72338 21.884 7.14141 22.1334 6.62863 21.9283C6.11585 21.7231 5.86643 21.1412 6.07155 20.6284L7.07155 18.1284C7.27666 17.6156 7.85863 17.3662 8.37141 17.5713Z"
        fill="currentColor"
      />
      <path
        d="M16.3714 17.5713C16.8842 17.7764 17.1336 18.3584 16.9285 18.8712L15.9285 21.3712C15.7234 21.884 15.1414 22.1334 14.6286 21.9283C14.1158 21.7231 13.8664 21.1412 14.0715 20.6284L15.0715 18.1284C15.2767 17.6156 15.8586 17.3662 16.3714 17.5713Z"
        fill="currentColor"
      />
      <path
        d="M12.9285 18.8712C13.1336 18.3584 12.8842 17.7764 12.3714 17.5713C11.8586 17.3662 11.2767 17.6156 11.0715 18.1284L10.0715 20.6284C9.86643 21.1412 10.1158 21.7231 10.6286 21.9283C11.1414 22.1334 11.7234 21.884 11.9285 21.3712L12.9285 18.8712Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudRaining05Icon = forwardRef(CloudRaining05IconInner);
export { CloudRaining05Icon };
