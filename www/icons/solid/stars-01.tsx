import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Stars01IconInner(
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
        d="M15.9333 1.64102C15.7848 1.25483 15.4138 1 15 1C14.5862 1 14.2152 1.25483 14.0667 1.64102L12.888 4.70544C12.5876 5.48648 12.4932 5.71155 12.3641 5.89315C12.2345 6.07535 12.0754 6.23455 11.8931 6.36411C11.7116 6.49323 11.4865 6.58763 10.7054 6.88803L7.64102 8.06665C7.25483 8.21519 7 8.58623 7 9C7 9.41377 7.25483 9.78481 7.64102 9.93335L10.7054 11.112C11.4865 11.4124 11.7116 11.5068 11.8931 11.6359C12.0754 11.7655 12.2345 11.9246 12.3641 12.1069C12.4932 12.2884 12.5876 12.5135 12.888 13.2946L14.0667 16.359C14.2152 16.7452 14.5862 17 15 17C15.4138 17 15.7848 16.7452 15.9333 16.359L17.112 13.2946C17.4124 12.5135 17.5068 12.2884 17.6359 12.1069C17.7655 11.9246 17.9246 11.7655 18.1069 11.6359C18.2884 11.5068 18.5135 11.4124 19.2946 11.112L22.359 9.93335C22.7452 9.78481 23 9.41377 23 9C23 8.58623 22.7452 8.21519 22.359 8.06665L19.2946 6.88803C18.5135 6.58763 18.2884 6.49323 18.1069 6.36411C17.9246 6.23455 17.7654 6.07536 17.6359 5.89315C17.5068 5.71155 17.4124 5.48648 17.112 4.70544L15.9333 1.64102Z"
        fill="currentColor"
      />
      <path
        d="M7.39443 12.5528C7.22503 12.214 6.87877 12 6.5 12C6.12123 12 5.77496 12.214 5.60557 12.5528L4.82111 14.1217C4.53863 14.6867 4.45255 14.8493 4.34796 14.9849C4.24305 15.121 4.12104 15.243 3.98494 15.348C3.84925 15.4525 3.68667 15.5386 3.1217 15.8211L1.55279 16.6056C1.214 16.775 1 17.1212 1 17.5C1 17.8788 1.214 18.225 1.55279 18.3944L3.1217 19.1789C3.68667 19.4614 3.84925 19.5475 3.98494 19.652C4.12104 19.757 4.24305 19.879 4.34796 20.0151C4.45255 20.1507 4.53863 20.3133 4.82111 20.8783L5.60557 22.4472C5.77497 22.786 6.12123 23 6.5 23C6.87877 23 7.22504 22.786 7.39443 22.4472L8.17889 20.8783C8.46137 20.3133 8.54745 20.1507 8.65204 20.0151C8.75695 19.879 8.87896 19.757 9.01506 19.652C9.15075 19.5475 9.31333 19.4614 9.8783 19.1789L11.4472 18.3944C11.786 18.225 12 17.8788 12 17.5C12 17.1212 11.786 16.775 11.4472 16.6056L9.8783 15.8211C9.31333 15.5386 9.15075 15.4525 9.01506 15.348C8.87896 15.243 8.75695 15.121 8.65204 14.9849C8.54745 14.8493 8.46137 14.6867 8.17889 14.1217L7.39443 12.5528Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Stars01Icon = forwardRef(Stars01IconInner);
export { Stars01Icon };
