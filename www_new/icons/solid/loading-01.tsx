import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Loading01IconInner(
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
        d="M12 1.25C12.5523 1.25 13 1.69772 13 2.25V4.75C13 5.30228 12.5523 5.75 12 5.75C11.4477 5.75 11 5.30228 11 4.75V2.25C11 1.69772 11.4477 1.25 12 1.25Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 12C1.25 11.4477 1.69772 11 2.25 11H5.75C6.30228 11 6.75 11.4477 6.75 12C6.75 12.5523 6.30228 13 5.75 13H2.25C1.69772 13 1.25 12.5523 1.25 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 12C18.75 11.4477 19.1977 11 19.75 11H21.25C21.8023 11 22.25 11.4477 22.25 12C22.25 12.5523 21.8023 13 21.25 13H19.75C19.1977 13 18.75 12.5523 18.75 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0429 17.0429C17.4334 16.6524 18.0666 16.6524 18.4571 17.0429L19.1642 17.75C19.5547 18.1405 19.5547 18.7737 19.1642 19.1642C18.7737 19.5547 18.1405 19.5547 17.75 19.1642L17.0429 18.4571C16.6524 18.0666 16.6524 17.4334 17.0429 17.0429Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3713 4.70868C19.7618 5.0992 19.7618 5.73237 19.3713 6.12289L17.9571 7.53711C17.5666 7.92763 16.9334 7.92763 16.5429 7.53711C16.1524 7.14658 16.1524 6.51342 16.5429 6.12289L17.9571 4.70868C18.3476 4.31816 18.9808 4.31816 19.3713 4.70868Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.45711 15.5429C8.84763 15.9334 8.84763 16.5666 8.45711 16.9571L5.62868 19.7855C5.23815 20.1761 4.60499 20.1761 4.21447 19.7855C3.82394 19.395 3.82394 18.7618 4.21447 18.3713L7.04289 15.5429C7.43342 15.1524 8.06658 15.1524 8.45711 15.5429Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.42157 4.50157C4.8121 4.11105 5.44526 4.11105 5.83579 4.50157L7.95711 6.62289C8.34763 7.01342 8.34763 7.64658 7.95711 8.03711C7.56658 8.42763 6.93342 8.42763 6.54289 8.03711L4.42157 5.91579C4.03105 5.52526 4.03105 4.8921 4.42157 4.50157Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Loading01Icon = forwardRef(Loading01IconInner);
export { Loading01Icon };
