import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyYenIconInner(
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
        d="M4.86956 2.72392C5.2982 2.37565 5.928 2.4408 6.27627 2.86944L12.0002 9.91422L17.724 2.86944C18.0723 2.4408 18.7021 2.37565 19.1307 2.72392C19.5594 3.07218 19.6245 3.70199 19.2763 4.13062L14.1012 10.5H18C18.5523 10.5 19 10.9477 19 11.5C19 12.0523 18.5523 12.5 18 12.5H13V14.5H17C17.5523 14.5 18 14.9477 18 15.5C18 16.0523 17.5523 16.5 17 16.5H13V20.5C13 21.0523 12.5523 21.5 12 21.5C11.4477 21.5 11 21.0523 11 20.5V16.5H7C6.44772 16.5 6 16.0523 6 15.5C6 14.9477 6.44772 14.5 7 14.5H11V12.5H6C5.44772 12.5 5 12.0523 5 11.5C5 10.9477 5.44772 10.5 6 10.5H9.89916L4.72404 4.13062C4.37577 3.70199 4.44093 3.07218 4.86956 2.72392Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyYenIcon = forwardRef(CurrencyYenIconInner);
export { CurrencyYenIcon };
