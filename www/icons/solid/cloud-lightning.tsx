import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudLightningIconInner(
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
        d="M19.4914 8.18681C22.0836 8.84987 24 11.2011 24 14C24 17.3137 21.3137 20 18 20H6.5C2.91015 20 0 17.0899 0 13.5C0 10.4377 2.11764 7.87004 4.96841 7.18148C6.32398 4.69055 8.96456 3 12 3C15.4283 3 18.3528 5.15641 19.4914 8.18681ZM13.6369 8.59523C13.9656 8.15144 13.8724 7.52518 13.4286 7.19644C12.9848 6.86771 12.3585 6.96098 12.0298 7.40477L8.69644 11.9048C8.47163 12.2083 8.43699 12.6126 8.60691 12.9499C8.77682 13.2872 9.1223 13.5 9.5 13.5H12.5148L10.3631 16.4048C10.0344 16.8486 10.1276 17.4748 10.5714 17.8036C11.0152 18.1323 11.6415 18.039 11.9702 17.5952L15.3036 13.0952C15.5284 12.7917 15.563 12.3874 15.3931 12.0501C15.2232 11.7128 14.8777 11.5 14.5 11.5H11.4852L13.6369 8.59523Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudLightningIcon = forwardRef(CloudLightningIconInner);
export { CloudLightningIcon };
