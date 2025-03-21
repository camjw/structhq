import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function User01IconInner(
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
        d="M8.78597 14.5C10.9286 14.5005 13.0713 14.5005 15.2139 14.5C15.9406 14.4998 16.4358 14.4997 16.8682 14.576C18.9383 14.941 20.559 16.5617 20.924 18.6318C21.0002 19.0642 21.0001 19.5593 21 20.286C20.9999 20.4444 21.0048 20.6038 20.9772 20.7605C20.8677 21.3815 20.3814 21.8677 19.7604 21.9772C19.6243 22.0012 19.4808 22.0005 19.4094 22.0001C14.4703 21.9736 9.52962 21.9736 4.59047 22.0001C4.51911 22.0005 4.37565 22.0012 4.23948 21.9772C3.61847 21.8677 3.13225 21.3815 3.02274 20.7605C2.99512 20.6038 2.99998 20.4444 2.99994 20.286C2.99978 19.5593 2.99967 19.0642 3.07592 18.6318C3.44093 16.5617 5.06166 14.941 7.13171 14.576C7.56412 14.4997 8.05929 14.4998 8.78597 14.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.49996 7.5C6.49996 4.46243 8.96239 2 12 2C15.0375 2 17.5 4.46243 17.5 7.5C17.5 10.5376 15.0375 13 12 13C8.96239 13 6.49996 10.5376 6.49996 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const User01Icon = forwardRef(User01IconInner);
export { User01Icon };
