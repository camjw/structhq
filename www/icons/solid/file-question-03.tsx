import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FileQuestion03IconInner(
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
        d="M13 2.01558C13 1.98928 13 1.97612 12.9989 1.95227C12.9753 1.4585 12.541 1.02448 12.0473 1.00112C12.0234 0.999992 12.0156 0.999995 12 1H8.75866C7.95372 0.99999 7.28935 0.999981 6.74818 1.0442C6.18608 1.09012 5.66938 1.18869 5.18404 1.43598C4.43139 1.81947 3.81947 2.43139 3.43598 3.18404C3.18869 3.66938 3.09012 4.18608 3.0442 4.74818C2.99998 5.28936 2.99999 5.95372 3 6.75867V17.2413C2.99999 18.0463 2.99998 18.7106 3.0442 19.2518C3.09012 19.8139 3.18869 20.3306 3.43598 20.816C3.81947 21.5686 4.43139 22.1805 5.18404 22.564C5.66938 22.8113 6.18608 22.9099 6.74818 22.9558C7.28937 23 7.95372 23 8.75868 23H15.2413C16.0463 23 16.7106 23 17.2518 22.9558C17.8139 22.9099 18.3306 22.8113 18.816 22.564C19.5686 22.1805 20.1805 21.5686 20.564 20.816C20.8113 20.3306 20.9099 19.8139 20.9558 19.2518C21 18.7106 21 18.0463 21 17.2413V9.99994C21 9.98441 21 9.97664 20.9989 9.95282C20.9756 9.45899 20.5415 9.02471 20.0477 9.00115C20.0238 9.00001 20.0107 9.00001 19.9845 9.00001L15.5681 9.00001C15.3157 9.00004 15.0699 9.00007 14.8618 8.98307C14.6332 8.96439 14.3634 8.92032 14.092 8.78202C13.7157 8.59028 13.4097 8.28432 13.218 7.90799C13.0797 7.63657 13.0356 7.36683 13.017 7.13824C12.9999 6.93008 13 6.68429 13 6.43191L13 2.01558ZM12.182 12.518C11.8914 12.4681 11.5926 12.5227 11.3384 12.6721C11.0843 12.8215 10.8912 13.056 10.7933 13.3341C10.6101 13.8551 10.0392 14.1288 9.51816 13.9456C8.99717 13.7623 8.7234 13.1914 8.90667 12.6704C9.16123 11.9467 9.66369 11.3365 10.3251 10.9478C10.9864 10.5592 11.764 10.4171 12.5201 10.5468C13.2762 10.6765 13.9619 11.0695 14.456 11.6564C14.9498 12.243 15.2201 12.9854 15.2192 13.7521C15.219 15.0322 14.2722 15.855 13.6498 16.27C13.3081 16.4978 12.9736 16.6643 12.7284 16.7733C12.6043 16.8284 12.4996 16.8704 12.4235 16.8994L12.2871 16.9487C11.7632 17.1233 11.1969 16.8402 11.0222 16.3162C10.8478 15.7928 11.1302 15.2271 11.6531 15.0519L11.652 15.0522L11.6612 15.049C11.671 15.0455 11.6882 15.0393 11.7115 15.0304C11.7584 15.0125 11.8293 14.9842 11.9161 14.9457C12.0924 14.8673 12.32 14.7528 12.5404 14.6059C13.0421 14.2714 13.2192 13.9703 13.2192 13.7517V13.7502C13.2197 13.4554 13.1158 13.1699 12.9259 12.9444C12.7361 12.7189 12.4725 12.5678 12.182 12.518ZM11 19C11 18.4477 11.4477 18 12 18H12.01C12.5623 18 13.01 18.4477 13.01 19C13.01 19.5523 12.5623 20 12.01 20H12C11.4477 20 11 19.5523 11 19Z"
        fill="currentColor"
      />
      <path
        d="M18.908 6.99999C19.2016 7 19.3484 7 19.4686 6.92627C19.6385 6.82215 19.74 6.57684 19.6935 6.38313C19.6605 6.24598 19.5648 6.15033 19.3733 5.95904L16.041 2.62672C15.8497 2.43523 15.754 2.33949 15.6169 2.30652C15.4232 2.25996 15.1779 2.3615 15.0737 2.53134C15 2.65161 15 2.79842 15 3.09204L15 6.19996C15 6.47998 15 6.61999 15.0545 6.72694C15.1024 6.82102 15.1789 6.89751 15.273 6.94545C15.38 6.99995 15.52 6.99995 15.8 6.99995L18.908 6.99999Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FileQuestion03Icon = forwardRef(FileQuestion03IconInner);
export { FileQuestion03Icon };