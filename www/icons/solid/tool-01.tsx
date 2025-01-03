import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Tool01IconInner(
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
        d="M8.99998 8C8.99998 4.13401 12.134 1 16 1C16.8236 1 17.6161 1.14267 18.3527 1.40547C18.6756 1.52068 18.917 1.79329 18.9922 2.12778C19.0675 2.46226 18.9662 2.81199 18.7237 3.05443L16.4802 5.32178C16.162 5.64333 16.0029 5.80411 15.9279 5.98225C15.8228 6.23209 15.8236 6.51392 15.9301 6.76316C16.0061 6.94087 16.1661 7.10075 16.4861 7.4205C16.8067 7.74085 16.967 7.90103 17.1451 7.97687C17.3948 8.08324 17.677 8.08353 17.927 7.97766C18.1052 7.90219 18.2658 7.74234 18.587 7.42264L20.8911 5.1297C21.1302 4.89056 21.474 4.7885 21.8049 4.85841C22.1358 4.92832 22.4089 5.16073 22.5309 5.47616C22.8342 6.26046 23 7.11205 23 8C23 11.866 19.866 15 16 15C15.4286 15 14.8719 14.9313 14.3382 14.8013C14.0851 14.7397 13.9251 14.7009 13.8082 14.6774C13.7866 14.673 13.7689 14.6698 13.7547 14.6673C13.7509 14.6706 13.7468 14.6742 13.7424 14.6783C13.6803 14.7344 13.5987 14.8155 13.4549 14.9593L7.20709 21.2071C5.98814 22.4261 4.01183 22.4261 2.79288 21.2071C1.57392 19.9882 1.57392 18.0118 2.79288 16.7929L9.04069 10.5451C9.18451 10.4013 9.26561 10.3197 9.32172 10.2576C9.33734 10.2403 9.32845 10.2209 9.32259 10.1918C9.29908 10.0749 9.26031 9.91484 9.19866 9.66177C9.06865 9.1281 8.99998 8.57139 8.99998 8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Tool01Icon = forwardRef(Tool01IconInner);
export { Tool01Icon };