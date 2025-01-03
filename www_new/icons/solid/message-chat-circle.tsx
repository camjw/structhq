import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageChatCircleIconInner(
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
        d="M1.26317 16.5C1.26317 12.9331 4.09172 10 7.63159 10C11.1715 10 14 12.9331 14 16.5C14 20.0669 11.1715 23 7.63159 23C6.90394 23 6.20298 22.875 5.54947 22.6444C5.44146 22.6063 5.37446 22.5827 5.32533 22.5664C5.31641 22.5635 5.30911 22.5611 5.30327 22.5593L5.29784 22.5599C5.26354 22.5637 5.21679 22.57 5.13013 22.5818L2.13533 22.9908C1.81127 23.0351 1.48606 22.9181 1.26448 22.6775C1.0429 22.4369 0.952961 22.1032 1.02365 21.7839L1.63499 19.0222C1.65624 18.9262 1.6676 18.8744 1.67491 18.8363C1.67532 18.8342 1.67604 18.8303 1.67604 18.8303C1.67423 18.824 1.67193 18.8162 1.66905 18.8066C1.65258 18.7521 1.62837 18.6778 1.589 18.5573C1.37731 17.9093 1.26317 17.2171 1.26317 16.5Z"
        fill="currentColor"
      />
      <path
        d="M5.14754 8.3726C5.92512 8.13071 6.75395 8 7.61788 8C12.3313 8 16.0001 11.8907 16.0001 16.5C16.0001 17.3136 15.8858 18.1049 15.6716 18.8563C16.2136 18.759 16.7393 18.6136 17.2438 18.4246C17.315 18.3979 17.386 18.3707 17.4579 18.3461C17.5159 18.3528 17.5737 18.3619 17.6315 18.3703L20.8444 18.8413C20.9961 18.8636 21.1682 18.8889 21.3182 18.8974C21.4843 18.9069 21.7426 18.9058 22.0162 18.7882C22.3579 18.6412 22.6328 18.3726 22.7876 18.0343C22.9115 17.7635 22.9185 17.5054 22.9129 17.3391C22.9078 17.1888 22.8865 17.0162 22.8677 16.864L22.4617 13.5661C22.4512 13.4804 22.4457 13.4354 22.4425 13.4024C22.4601 13.3301 22.4931 13.2602 22.5195 13.1909C22.8983 12.1979 23.1053 11.1219 23.1053 10C23.1053 5.02326 19.0461 1 14.0526 1C9.61686 1 5.9183 4.17483 5.14754 8.3726Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageChatCircleIcon = forwardRef(MessageChatCircleIconInner);
export { MessageChatCircleIcon };
