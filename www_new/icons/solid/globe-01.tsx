import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Globe01IconInner(
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
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM3.05493 11C3.46801 7.26324 6.16881 4.21597 9.72571 3.28983C8.1991 5.58442 7.2743 8.23681 7.05009 11H3.05493ZM3.05493 13C3.46801 16.7368 6.16881 19.784 9.72571 20.7102C8.1991 18.4156 7.2743 15.7632 7.05009 13H3.05493ZM14.2743 20.7102C17.8312 19.784 20.532 16.7368 20.9451 13H16.9499C16.7257 15.7632 15.8009 18.4156 14.2743 20.7102ZM20.9451 11H16.9499C16.7257 8.23681 15.8009 5.58442 14.2743 3.28983C17.8312 4.21597 20.532 7.26324 20.9451 11ZM12 3.5508C13.6697 5.70193 14.6912 8.28683 14.9424 11H9.05759C9.30879 8.28683 10.3303 5.70193 12 3.5508ZM12 20.4492C10.3303 18.2981 9.30879 15.7132 9.05759 13H14.9424C14.6912 15.7132 13.6697 18.2981 12 20.4492Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Globe01Icon = forwardRef(Globe01IconInner);
export { Globe01Icon };
