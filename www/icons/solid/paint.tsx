import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PaintIconInner(
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
        d="M11.2071 1.29289C10.8166 0.902369 10.1834 0.902369 9.79289 1.29289C9.40237 1.68342 9.40237 2.31658 9.79289 2.70711L10.0857 2.99994L4.15783 8.92784C3.58863 9.49703 3.11885 9.96679 2.76743 10.3807C2.40244 10.8107 2.10677 11.2457 1.93845 11.7638C1.67742 12.5672 1.67742 13.4325 1.93845 14.2359C2.10677 14.754 2.40244 15.189 2.76743 15.619C3.11885 16.0329 3.58864 16.5027 4.15787 17.0719L7.42804 20.3421C7.99718 20.9112 8.467 21.3811 8.88093 21.7325C9.31086 22.0974 9.74592 22.3931 10.264 22.5614C11.0673 22.8225 11.9327 22.8225 12.7361 22.5614C13.2541 22.3931 13.6892 22.0974 14.1191 21.7325C14.5331 21.3811 15.0028 20.9113 15.5719 20.3422L21.0983 14.8158C21.2768 14.6374 21.4506 14.4636 21.5858 14.3043C21.7342 14.1295 21.8938 13.9076 21.9879 13.6179C22.1185 13.2162 22.1185 12.7835 21.9879 12.3818C21.8938 12.0921 21.7342 11.8702 21.5858 11.6954C21.4506 11.5361 21.2768 11.3624 21.0983 11.1839L12.2071 2.29274C12.2033 2.28887 12.1994 2.28504 12.1955 2.28124L11.2071 1.29289ZM11.5 4.41406L5.60125 10.3128C4.99556 10.9185 4.58437 11.3308 4.29211 11.6751C4.18619 11.7999 4.10409 11.9065 4.03995 11.9998H19.0858L11.5 4.41406Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PaintIcon = forwardRef(PaintIconInner);
export { PaintIcon };
