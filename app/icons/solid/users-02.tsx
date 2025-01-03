import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Users02IconInner(
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
        d="M15.1045 3.02273C15.3503 2.52815 15.9505 2.32646 16.445 2.57225C18.2536 3.47103 19.5 5.33904 19.5 7.5C19.5 9.66096 18.2536 11.529 16.445 12.4278C15.9505 12.6735 15.3503 12.4719 15.1045 11.9773C14.8587 11.4827 15.0604 10.8825 15.555 10.6367C16.7098 10.0628 17.5 8.87276 17.5 7.5C17.5 6.12724 16.7098 4.9372 15.555 4.36327C15.0604 4.11749 14.8587 3.51731 15.1045 3.02273Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0889 16.3541C17.3166 15.851 17.9091 15.6276 18.4123 15.8553C20.0902 16.6146 21.5741 17.8393 22.7863 19.3822C23.1275 19.8165 23.0521 20.4451 22.6178 20.7863C22.1835 21.1275 21.5549 21.0521 21.2137 20.6178C20.171 19.2907 18.9327 18.2861 17.5877 17.6775C17.0846 17.4498 16.8613 16.8573 17.0889 16.3541Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.00001 7.5C4.00001 4.46243 6.46244 2 9.50001 2C12.5376 2 15 4.46243 15 7.5C15 10.5376 12.5376 13 9.50001 13C6.46244 13 4.00001 10.5376 4.00001 7.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.21368 19.3822C3.30547 16.7198 6.21714 15 9.50001 15C12.7829 15 15.6946 16.7198 17.7863 19.3822C18.0228 19.6832 18.0667 20.0928 17.8994 20.4371C17.7321 20.7814 17.3828 21 17 21H2.00001C1.61719 21 1.26796 20.7814 1.10062 20.4371C0.933269 20.0928 0.977171 19.6832 1.21368 19.3822Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Users02Icon = forwardRef(Users02IconInner);
export { Users02Icon };