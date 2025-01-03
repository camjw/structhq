import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PieChart04IconInner(
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
        d="M7.62546 20.158C7.40338 20.7076 7.29234 20.9825 7.06753 21.1499C6.88809 21.2836 6.60454 21.3638 6.38166 21.344C6.10244 21.3192 5.89482 21.1661 5.47957 20.86C2.76258 18.8572 1 15.6344 1 12C1 11.9715 1.00011 11.943 1.00033 11.9145C1.00426 11.398 1.00622 11.1398 1.15367 10.9015C1.27142 10.7111 1.50532 10.5324 1.71989 10.4688C1.98857 10.3892 2.27519 10.4649 2.84843 10.6164L9.77061 12.4453C10.0738 12.5254 10.2253 12.5654 10.319 12.6557C10.4012 12.735 10.4537 12.84 10.468 12.9533C10.4842 13.0824 10.4255 13.2277 10.308 13.5184L7.62546 20.158Z"
        fill="currentColor"
      />
      <path
        d="M13.0962 2.80627C13.1024 2.21425 13.1055 1.91824 13.2535 1.68046C13.3715 1.49072 13.606 1.31245 13.8204 1.24939C14.089 1.17036 14.3379 1.23656 14.8355 1.36896C19.5365 2.61957 23 6.90532 23 12C23 18.0752 18.0751 23 12 23C11.5032 23 11.014 22.9671 10.5346 22.9033C10.024 22.8353 9.76874 22.8013 9.55056 22.6252C9.37649 22.4847 9.22809 22.2298 9.19184 22.0091C9.14641 21.7324 9.25737 21.4578 9.47931 20.9085L12.9272 12.3746C12.9764 12.2529 13.0005 12.1242 13 11.9959L13.0962 2.80627Z"
        fill="currentColor"
      />
      <path
        d="M9.3875 1.31213C9.88795 1.19023 10.1382 1.12928 10.4051 1.21394C10.6181 1.2815 10.8487 1.4646 10.9627 1.65679C11.1056 1.89761 11.1025 2.19368 11.0963 2.78583L11.0243 9.66914C11.0206 10.0204 11.0187 10.196 10.9446 10.315C10.8797 10.4193 10.7786 10.496 10.6607 10.5305C10.5262 10.5699 10.3566 10.5244 10.0173 10.4335L3.36785 8.6518C2.79567 8.49848 2.50958 8.42182 2.31598 8.2191C2.16152 8.05735 2.04724 7.78553 2.03974 7.56201C2.03033 7.28184 2.15676 7.05743 2.40961 6.60862C3.88317 3.99303 6.39579 2.04088 9.3875 1.31213Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PieChart04Icon = forwardRef(PieChart04IconInner);
export { PieChart04Icon };