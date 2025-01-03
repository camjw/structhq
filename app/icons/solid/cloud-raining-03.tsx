import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudRaining03IconInner(
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
        d="M5.24923 6.14303C6.0632 3.17816 8.7764 1 12 1C15.2236 1 17.9368 3.17816 18.7508 6.14303C21.1861 6.70961 23 8.8925 23 11.5C23 14.5376 20.5376 17 17.5 17H16.527L15.1785 20.3712C14.9734 20.884 14.3914 21.1334 13.8786 20.9283C13.3658 20.7231 13.1164 20.1412 13.3215 19.6284L14.3729 17H12.5269L10.3784 22.3712C10.1733 22.884 9.59137 23.1334 9.07858 22.9283C8.5658 22.7231 8.31638 22.1412 8.5215 21.6284L10.3729 17H8.52697L7.1785 20.3712C6.97338 20.884 6.39141 21.1334 5.87863 20.9283C5.36585 20.7231 5.11643 20.1412 5.32155 19.6284L6.37347 16.9986C3.39435 16.9313 1 14.4953 1 11.5C1 8.8925 2.8139 6.70961 5.24923 6.14303Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudRaining03Icon = forwardRef(CloudRaining03IconInner);
export { CloudRaining03Icon };