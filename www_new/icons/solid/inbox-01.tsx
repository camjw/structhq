import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Inbox01IconInner(
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
        d="M8.81414 2.99994C7.88644 2.99932 7.18706 2.99884 6.54986 3.21863C5.98936 3.41196 5.47885 3.72747 5.05527 4.14234C4.57372 4.61398 4.26137 5.23973 3.84705 6.06977C3.33863 7.08665 2.5156 8.73582 1.96291 9.84356C1.77196 10.2263 1.67648 10.4176 1.69959 10.5734C1.71976 10.7094 1.79504 10.831 1.90771 10.9098C2.03674 11 2.25083 11 2.67901 11H5.88199C6.94596 11 7.91862 11.6011 8.39445 12.5528C8.53149 12.8269 8.81162 13 9.11805 13H14.882C15.1884 13 15.4686 12.8269 15.6056 12.5528C16.0814 11.6011 17.0541 11 18.1181 11H21.3211C21.7492 11 21.9633 11 22.0924 10.9098C22.205 10.831 22.2803 10.7094 22.3005 10.5734C22.3236 10.4176 22.2281 10.2263 22.0372 9.84356C21.4845 8.73582 20.6615 7.08666 20.153 6.06978C19.7387 5.23974 19.4264 4.61398 18.9448 4.14234C18.5212 3.72747 18.0107 3.41196 17.4502 3.21863C16.813 2.99884 16.1136 2.99932 15.1859 2.99994H8.81414Z"
        fill="currentColor"
      />
      <path
        d="M23.0001 14.5996C23.0001 14.0399 23.0001 13.76 22.8912 13.5461C22.7953 13.3579 22.6423 13.2049 22.4541 13.109C22.2402 13 21.9603 13 21.4004 13H18.1181C17.8116 13 17.5315 13.1731 17.3944 13.4472C16.9186 14.3989 15.946 15 14.882 15H9.11805C8.05408 15 7.08142 14.3989 6.60559 13.4472C6.46855 13.1731 6.18842 13 5.88199 13H2.59962C2.03978 13 1.75985 13 1.54593 13.109C1.3578 13.2049 1.20476 13.3579 1.10891 13.5461C0.999925 13.76 0.999951 14.0399 1 14.5996C1.00002 14.8135 1.00004 15.0274 1.00004 15.2413C1.00003 16.0463 1.00002 16.7106 1.04423 17.2518C1.09016 17.8139 1.18872 18.3306 1.43601 18.816C1.81951 19.5686 2.43143 20.1805 3.18408 20.564C3.66941 20.8113 4.18612 20.9099 4.74821 20.9558C5.2894 21 5.95376 21 6.75872 21H17.2414C18.0463 21 18.7107 21 19.2519 20.9558C19.814 20.9099 20.3307 20.8113 20.816 20.564C21.5687 20.1805 22.1806 19.5686 22.5641 18.816C22.8114 18.3306 22.9099 17.8139 22.9558 17.2518C23.0001 16.7106 23.0001 16.0463 23 15.2413C23 15.0274 23.0001 14.8135 23.0001 14.5996Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Inbox01Icon = forwardRef(Inbox01IconInner);
export { Inbox01Icon };
