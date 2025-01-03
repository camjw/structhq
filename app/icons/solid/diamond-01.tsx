import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Diamond01IconInner(
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
        d="M12.6127 2H11.3873L9.38734 8H14.6127L12.6127 2Z"
        fill="currentColor"
      />
      <path
        d="M14.6125 10H9.38749L12 17.8375L14.6125 10Z"
        fill="currentColor"
      />
      <path
        d="M7.27916 8L9.27916 2H7.2342C6.78903 2 6.36686 2.19773 6.08187 2.53972L2.21505 7.17991C1.94366 7.50557 2.17524 8 2.59916 8H7.27916Z"
        fill="currentColor"
      />
      <path
        d="M2.21505 10.8201C1.94367 10.4944 2.17524 10 2.59916 10H7.2793L10.791 20.535C10.8676 20.7649 10.6156 20.9198 10.4663 20.729C10.4145 20.6628 10.3629 20.5976 10.3108 20.535L2.21505 10.8201Z"
        fill="currentColor"
      />
      <path
        d="M16.7207 10H21.4009C21.8248 10 22.0564 10.4944 21.785 10.8201L13.6892 20.535C13.6371 20.5976 13.5855 20.6628 13.5337 20.729C13.3844 20.9198 13.1324 20.7648 13.209 20.535L16.7207 10Z"
        fill="currentColor"
      />
      <path
        d="M21.785 7.17991C22.0564 7.50557 21.8248 8 21.4009 8H16.7208L14.7208 2H16.7658C17.211 2 17.6332 2.19773 17.9182 2.53972L21.785 7.17991Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Diamond01Icon = forwardRef(Diamond01IconInner);
export { Diamond01Icon };
