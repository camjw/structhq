import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ThermometerWarmIconInner(
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
        d="M8.92141 9.01012C9.81143 8.33767 10.9008 7.98216 12.0161 8.00013C12.5683 8.00903 13.0088 8.4639 12.9999 9.01611C12.991 9.56832 12.5361 10.0088 11.9839 9.99987C11.3147 9.98909 10.6611 10.2024 10.1271 10.6059C9.59306 11.0093 9.2093 11.5798 9.03685 12.2265C8.8644 12.8732 8.91315 13.559 9.17536 14.1748C9.43757 14.7906 9.89817 15.301 10.4839 15.6249C10.9672 15.8921 11.1424 16.5006 10.8751 16.9839C10.6079 17.4672 9.99943 17.6424 9.51611 17.3751C8.53991 16.8354 7.77224 15.9846 7.33523 14.9583C6.89822 13.932 6.81696 12.789 7.10438 11.7112C7.3918 10.6333 8.03139 9.68258 8.92141 9.01012Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.30711 17.6929C7.69763 18.0834 7.69763 18.7166 7.30711 19.1071L5.90711 20.5071C5.51658 20.8976 4.88342 20.8976 4.49289 20.5071C4.10237 20.1166 4.10237 19.4834 4.49289 19.0929L5.89289 17.6929C6.28342 17.3024 6.91658 17.3024 7.30711 17.6929Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 13C1 12.4477 1.44772 12 2 12H4C4.55228 12 5 12.4477 5 13C5 13.5523 4.55228 14 4 14H2C1.44772 14 1 13.5523 1 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.49289 5.49289C4.88342 5.10237 5.51658 5.10237 5.90711 5.49289L7.30711 6.89289C7.69763 7.28342 7.69763 7.91658 7.30711 8.30711C6.91658 8.69763 6.28342 8.69763 5.89289 8.30711L4.49289 6.90711C4.10237 6.51658 4.10237 5.88342 4.49289 5.49289Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4C15 2.34315 16.3431 1 18 1C19.6569 1 21 2.34315 21 4V13.9998C22.213 14.9109 23 16.3631 23 18C23 20.7614 20.7614 23 18 23C15.2386 23 13 20.7614 13 18C13 16.3631 13.787 14.9109 15 13.9998V4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ThermometerWarmIcon = forwardRef(ThermometerWarmIconInner);
export { ThermometerWarmIcon };