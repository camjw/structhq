import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CodeCircle01IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.2071 9.70711C10.5976 9.31658 10.5976 8.68342 10.2071 8.29289C9.81658 7.90237 9.18342 7.90237 8.79289 8.29289L5.79289 11.2929C5.40237 11.6834 5.40237 12.3166 5.79289 12.7071L8.79289 15.7071C9.18342 16.0976 9.81658 16.0976 10.2071 15.7071C10.5976 15.3166 10.5976 14.6834 10.2071 14.2929L7.91421 12L10.2071 9.70711ZM15.2071 8.29289C14.8166 7.90237 14.1834 7.90237 13.7929 8.29289C13.4024 8.68342 13.4024 9.31658 13.7929 9.70711L16.0858 12L13.7929 14.2929C13.4024 14.6834 13.4024 15.3166 13.7929 15.7071C14.1834 16.0976 14.8166 16.0976 15.2071 15.7071L18.2071 12.7071C18.5976 12.3166 18.5976 11.6834 18.2071 11.2929L15.2071 8.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CodeCircle01Icon = forwardRef(CodeCircle01IconInner);
export { CodeCircle01Icon };