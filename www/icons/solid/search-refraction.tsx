import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SearchRefractionIconInner(
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
        d="M10 6C10 5.44772 10.4477 5 11 5C14.3137 5 17 7.68629 17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 8.79086 13.2091 7 11 7C10.4477 7 10 6.55228 10 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SearchRefractionIcon = forwardRef(SearchRefractionIconInner);
export { SearchRefractionIcon };