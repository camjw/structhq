import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function LogIn03IconInner(
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
        d="M17.8146 3.47821C17.3073 3.50208 16.6534 3.5884 15.6978 3.71582L9.10586 4.59474C8.73411 4.64431 8.62192 4.66057 8.53472 4.68143C7.70842 4.8791 7.09718 5.57724 7.01046 6.42242C7.00131 6.51161 7.00001 6.62496 7.00001 7.00001C7.00001 7.55229 6.5523 8.00001 6.00001 8.00001C5.44773 8.00001 5.00001 7.55229 5.00001 7.00001L5.00001 6.94871C4.99994 6.64731 4.9999 6.42304 5.0209 6.21828C5.19434 4.52793 6.41682 3.13163 8.06943 2.73631C8.26961 2.68843 8.49191 2.65883 8.79068 2.61906L15.4774 1.72751C16.3783 1.60738 17.1175 1.5088 17.7206 1.48042C18.3436 1.45112 18.9236 1.48918 19.4779 1.70961C20.3304 2.04855 21.0404 2.67019 21.489 3.47034C21.7808 3.99072 21.8952 4.56062 21.9485 5.18194C22 5.78357 22 6.52931 22 7.43816V16.5618C22 17.4707 22 18.2164 21.9485 18.8181C21.8952 19.4394 21.7808 20.0093 21.489 20.5297C21.0404 21.3298 20.3304 21.9515 19.4779 22.2904C18.9236 22.5108 18.3436 22.5489 17.7206 22.5196C17.1175 22.4912 16.3783 22.3926 15.4774 22.2725L8.79052 21.3809C8.49196 21.3412 8.26953 21.3116 8.06943 21.2637C6.41682 20.8684 5.19434 19.4721 5.02091 17.7817C4.9999 17.577 4.99994 17.3527 5.00001 17.0513L5.00001 17C5.00001 16.4477 5.44773 16 6.00001 16C6.5523 16 7.00001 16.4477 7.00001 17C7.00001 17.3751 7.00131 17.4884 7.01046 17.5776C7.09718 18.4228 7.70842 19.1209 8.53472 19.3186C8.62191 19.3394 8.73413 19.3557 9.10587 19.4053L15.6978 20.2842C16.6534 20.4116 17.3073 20.4979 17.8146 20.5218C18.312 20.5452 18.5652 20.501 18.739 20.4319C19.1652 20.2625 19.5202 19.9516 19.7445 19.5516C19.836 19.3884 19.9132 19.1433 19.9558 18.6472C19.9992 18.1412 20 17.4816 20 16.5175V7.48249C20 6.51841 19.9992 5.85883 19.9558 5.3528C19.9132 4.85672 19.836 4.6116 19.7445 4.44845C19.5202 4.04837 19.1652 3.73755 18.739 3.56808C18.5652 3.49897 18.312 3.45481 17.8146 3.47821Z"
        fill="currentColor"
      />
      <path
        d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071C10.9024 16.3166 10.9024 15.6834 11.2929 15.2929L13.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H13.5858L11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const LogIn03Icon = forwardRef(LogIn03IconInner);
export { LogIn03Icon };