import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function InfoOctagonIconInner(
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
        d="M8.52275 0.999947L8.47171 0.999855C8.2818 0.999348 8.04266 0.998709 7.80733 1.05521C7.60326 1.1042 7.40817 1.18501 7.22922 1.29467C7.02287 1.42112 6.85423 1.59067 6.7203 1.72531L6.68427 1.76147L1.76153 6.68421L1.72538 6.72024C1.59073 6.85416 1.42118 7.02281 1.29473 7.22916C1.18507 7.40811 1.10426 7.6032 1.05527 7.80727C0.99877 8.0426 0.999409 8.28174 0.999916 8.47165L1.00001 8.52269V15.4772L0.999916 15.5282C0.999409 15.7182 0.99877 15.9573 1.05527 16.1926C1.10426 16.3967 1.18507 16.5918 1.29473 16.7707C1.42118 16.9771 1.59073 17.1457 1.72538 17.2797L1.76153 17.3157L6.68427 22.2384L6.72031 22.2746C6.85423 22.4092 7.02287 22.5788 7.22922 22.7052C7.40817 22.8149 7.60326 22.8957 7.80733 22.9447C8.04266 23.0012 8.2818 23.0005 8.47172 23L8.52275 22.9999H15.4773L15.5283 23C15.7182 23.0005 15.9574 23.0012 16.1927 22.9447C16.3968 22.8957 16.5918 22.8149 16.7708 22.7052C16.9771 22.5788 17.1458 22.4092 17.2797 22.2746L17.3157 22.2384L22.2385 17.3157L22.2746 17.2797C22.4093 17.1457 22.5788 16.9771 22.7053 16.7707C22.8149 16.5918 22.8958 16.3967 22.9447 16.1926C23.0012 15.9573 23.0006 15.7181 23.0001 15.5282L23 15.4772V8.52269L23.0001 8.47166C23.0006 8.28174 23.0012 8.0426 22.9447 7.80727C22.8958 7.6032 22.8149 7.40811 22.7053 7.22916C22.5788 7.02282 22.4093 6.85417 22.2747 6.72025L22.2385 6.68421L17.3157 1.76147L17.2797 1.72531C17.1458 1.59067 16.9771 1.42112 16.7708 1.29467C16.5918 1.18501 16.3968 1.1042 16.1927 1.05521C15.9574 0.998709 15.7182 0.999348 15.5283 0.999855L15.4773 0.999947H8.52275ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.01C12.5623 9 13.01 8.55228 13.01 8C13.01 7.44772 12.5623 7 12.01 7H12ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const InfoOctagonIcon = forwardRef(InfoOctagonIconInner);
export { InfoOctagonIcon };
