import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function GraduationHat01IconInner(
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
        d="M22.4472 9.39449C22.786 9.2251 23 8.87884 23 8.50006C23 8.12129 22.786 7.77503 22.4472 7.60564L12.7794 2.77155C12.6861 2.72394 12.493 2.62541 12.2766 2.5848C12.0938 2.55051 11.9062 2.55051 11.7234 2.5848C11.507 2.62541 11.3139 2.72394 11.2206 2.77155L1.55279 7.60564C1.214 7.77503 1 8.12129 1 8.50006C1 8.87884 1.214 9.2251 1.55279 9.39449L11.2829 14.2725C11.5458 14.4043 11.6773 14.4702 11.8152 14.4961C11.9373 14.5191 12.0627 14.5191 12.1848 14.4961C12.3227 14.4702 12.4542 14.4043 12.7171 14.2725L22.4472 9.39449Z"
        fill="currentColor"
      />
      <path
        d="M19.9966 14.1653C19.9966 13.7359 19.9965 13.5212 19.9062 13.3922C19.8274 13.2794 19.7057 13.2043 19.5696 13.1842C19.4138 13.1611 19.2219 13.2571 18.8382 13.449L12.7794 16.4785C12.6861 16.5261 12.493 16.6247 12.2766 16.6653C12.0938 16.6996 11.9062 16.6996 11.7234 16.6653C11.507 16.6247 11.3139 16.5261 11.2206 16.4785L5.16162 13.4489C4.77789 13.257 4.58602 13.1611 4.43022 13.1841C4.2941 13.2042 4.17246 13.2793 4.09358 13.3921C4.0033 13.5211 4.00326 13.7358 4.00318 14.1652C4.00307 14.8058 4.00215 15.4463 3.99972 16.0868C3.99867 16.3629 3.99736 16.7098 4.10922 17.0341C4.20589 17.3144 4.36365 17.5696 4.57108 17.7814C4.81114 18.0265 5.12202 18.1805 5.36937 18.303C7.21262 19.2187 9.05417 20.138 10.8921 21.0643C11.0947 21.1664 11.3497 21.2949 11.6311 21.3477C11.8749 21.3934 12.125 21.3934 12.3687 21.3477C12.6502 21.2949 12.9051 21.1664 13.1077 21.0643C14.9456 20.138 16.7862 19.2164 18.6305 18.303C18.8778 18.1805 19.1887 18.0265 19.4288 17.7814C19.6362 17.5696 19.7939 17.3144 19.8906 17.0341C20.0025 16.7098 20.0012 16.3629 20.0001 16.0868C19.9977 15.4463 19.9968 14.8058 19.9966 14.1653Z"
        fill="currentColor"
      />
    </svg>
  );
}
const GraduationHat01Icon = forwardRef(GraduationHat01IconInner);
export { GraduationHat01Icon };
