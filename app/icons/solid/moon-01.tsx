import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Moon01IconInner(
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
        d="M9.06693 2.41209C9.23841 2.03292 9.15714 1.58718 8.86288 1.29292C8.56862 0.998664 8.12289 0.917396 7.74371 1.08887C3.76893 2.88642 1 6.88764 1 11.5377C1 17.8682 6.13185 23 12.4623 23C17.1124 23 21.1136 20.2311 22.9112 16.2563C23.0826 15.8771 23.0014 15.4314 22.7071 15.1371C22.4128 14.8429 21.9671 14.7616 21.5879 14.9331C20.4015 15.4697 19.0838 15.7689 17.6935 15.7689C12.4676 15.7689 8.23116 11.5325 8.23116 6.30656C8.23116 4.91628 8.53036 3.59857 9.06693 2.41209Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Moon01Icon = forwardRef(Moon01IconInner);
export { Moon01Icon };
