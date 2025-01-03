import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Settings02IconInner(
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
        d="M9.74225 21.5541L9.08973 20.1082C8.85724 19.5922 8.4646 19.1621 7.9683 18.8799C7.47171 18.5977 6.89723 18.4774 6.32708 18.5364L4.73053 18.7039C4.25532 18.7531 3.77581 18.6656 3.35002 18.4519C2.92423 18.2383 2.57041 17.9076 2.33135 17.5C2.09223 17.0924 1.97831 16.6252 2.00341 16.1551C2.02851 15.6849 2.19156 15.2321 2.47277 14.8514L3.41805 13.5718C3.75516 13.115 3.9367 12.5648 3.93659 12C3.9367 11.4352 3.75516 10.885 3.41805 10.4282L2.47277 9.14855C2.19156 8.76793 2.02851 8.31508 2.00341 7.84494C1.97831 7.3748 2.09223 6.90759 2.33135 6.5C2.57017 6.09216 2.92395 5.76134 3.3498 5.54765C3.77565 5.33396 4.25528 5.24658 4.73053 5.29611L6.33205 5.46356C6.90219 5.52255 7.47667 5.40233 7.97326 5.12011C8.46771 4.83708 8.85854 4.40709 9.08973 3.89178L9.74225 2.44589C9.93622 2.01549 10.2528 1.64979 10.6535 1.39314C11.0543 1.13649 11.522 0.999923 12 1C12.478 0.999923 12.9457 1.13649 13.3465 1.39314C13.7472 1.64979 14.0638 2.01549 14.2578 2.44589L14.9152 3.89178C15.1464 4.40709 15.5372 4.83708 16.0317 5.12011C16.5283 5.40233 17.1028 5.52255 17.6729 5.46356L19.2695 5.29611C19.7447 5.24658 20.2243 5.33396 20.6502 5.54765C21.076 5.76134 21.4298 6.09216 21.6686 6.5C21.9078 6.90759 22.0217 7.3748 21.9966 7.84494C21.9715 8.31508 21.8084 8.76793 21.5272 9.14855L20.5819 10.4282C20.2448 10.885 20.0633 11.4352 20.0634 12C20.0605 12.5663 20.2404 13.1188 20.577 13.5779L21.5223 14.8576C21.8035 15.2382 21.9665 15.691 21.9916 16.1612C22.0167 16.6313 21.9028 17.0985 21.6637 17.5061C21.4249 17.914 21.0711 18.2448 20.6452 18.4585C20.2194 18.6722 19.7398 18.7595 19.2645 18.71L17.668 18.5426C17.0978 18.4836 16.5233 18.6038 16.0267 18.886C15.5333 19.1674 15.1425 19.5952 14.9103 20.1082L14.2578 21.5541C14.0638 21.9845 13.7472 22.3502 13.3465 22.6069C12.9457 22.8635 12.478 23.0001 12 23C11.522 23.0001 11.0543 22.8635 10.6535 22.6069C10.2528 22.3502 9.93622 21.9845 9.74225 21.5541ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Settings02Icon = forwardRef(Settings02IconInner);
export { Settings02Icon };
