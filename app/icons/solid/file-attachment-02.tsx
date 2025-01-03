import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FileAttachment02IconInner(
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
        d="M4.09589 14.9323C4.39077 14.9769 4.69269 15 5 15C8.31371 15 11 12.3137 11 9V3.5C11 3.10606 10.9494 2.72395 10.8543 2.35981C10.7029 1.78023 10.6273 1.49039 10.6678 1.35586C10.7099 1.21574 10.7612 1.1494 10.8861 1.07318C11.006 1 11.2508 1 11.7404 1H15.2413C16.0463 0.999988 16.7106 0.999979 17.2518 1.0442C17.8139 1.09012 18.3306 1.18868 18.816 1.43598C19.5686 1.81947 20.1805 2.43139 20.564 3.18404C20.8113 3.66938 20.9099 4.18608 20.9558 4.74818C21 5.28937 21 5.95372 21 6.75868V17.2413C21 18.0463 21 18.7106 20.9558 19.2518C20.9099 19.8139 20.8113 20.3306 20.564 20.816C20.1805 21.5686 19.5686 22.1805 18.816 22.564C18.3306 22.8113 17.8139 22.9099 17.2518 22.9558C16.7106 23 16.0463 23 15.2413 23H8.75868C7.95372 23 7.28937 23 6.74818 22.9558C6.18608 22.9099 5.66937 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43598 20.816C3.18868 20.3306 3.09012 19.8139 3.04419 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2413V15.7898C3 15.4072 3 15.2159 3.06516 15.1011C3.12881 14.989 3.20056 14.9273 3.32095 14.8811C3.4442 14.8338 3.66144 14.8667 4.09589 14.9323ZM12.5 10C12.5 9.44771 12.9477 9 13.5 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H13.5C12.9477 11 12.5 10.5523 12.5 10ZM11.5 14C11.5 13.4477 11.9477 13 12.5 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H12.5C11.9477 15 11.5 14.5523 11.5 14ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19H17C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17H9Z"
        fill="currentColor"
      />
      <path
        d="M6 3.5C6 3.22386 6.22386 3 6.5 3C6.77614 3 7 3.22386 7 3.5V9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9V5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5V9C1 11.2091 2.79086 13 5 13C7.20914 13 9 11.2091 9 9V3.5C9 2.11929 7.88071 1 6.5 1C5.11929 1 4 2.11929 4 3.5V9C4 9.55229 4.44772 10 5 10C5.55228 10 6 9.55229 6 9V3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FileAttachment02Icon = forwardRef(FileAttachment02IconInner);
export { FileAttachment02Icon };
