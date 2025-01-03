import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Droplets01IconInner(
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
        d="M5 1C4.65378 1 4.3322 1.17908 4.14988 1.47341C4.10415 1.54793 4.05873 1.62264 4.01373 1.69761C3.92906 1.83864 3.80886 2.04134 3.66495 2.29091C3.37763 2.78919 2.99339 3.47844 2.60795 4.23925C2.22393 4.99725 1.83073 5.84191 1.5313 6.6482C1.24152 7.42854 1 8.27452 1 9C1 11.2091 2.79086 13 5 13C7.20914 13 9 11.2091 9 9C9 8.27452 8.75848 7.42854 8.4687 6.6482C8.16927 5.84191 7.77607 4.99725 7.39205 4.23925C7.00661 3.47844 6.62237 2.78919 6.33504 2.29091C6.19114 2.04134 6.07094 1.83864 5.98627 1.69761C5.94127 1.62264 5.89585 1.54793 5.85012 1.47341C5.6678 1.17908 5.34622 1 5 1Z"
        fill="currentColor"
      />
      <path
        d="M9 16C9 19.866 12.134 23 16 23C19.866 23 23 19.866 23 16C23 14.7353 22.571 13.1822 21.9999 11.6445C21.4193 10.0809 20.6511 8.42862 19.8921 6.93043C19.1316 5.42943 18.3724 4.06738 17.8038 3.08135C17.5193 2.58791 17.2819 2.1876 17.1152 1.90993C17.0318 1.77107 16.9661 1.66281 16.9209 1.58884L16.8501 1.47341C16.6678 1.17908 16.3462 1 16 1C15.6538 1 15.3322 1.17908 15.1499 1.47341L15.0791 1.58884C15.0339 1.66281 14.9682 1.77107 14.8848 1.90993C14.7181 2.1876 14.4807 2.58791 14.1962 3.08135C13.6276 4.06738 12.8684 5.42943 12.1079 6.93043C11.3489 8.42862 10.5807 10.0809 10.0001 11.6445C9.42902 13.1822 9 14.7353 9 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Droplets01Icon = forwardRef(Droplets01IconInner);
export { Droplets01Icon };
