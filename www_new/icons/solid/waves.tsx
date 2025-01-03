import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function WavesIconInner(
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
        d="M6.41713 7.58902C5.8873 7.84334 5.27014 8 4.50003 8C3.71124 8 3.08572 7.84593 2.55196 7.58766C2.05303 7.34624 1.67256 7.02898 1.38479 6.78902C1.3764 6.78202 1.36808 6.77509 1.35984 6.76822C0.935564 6.41466 0.87824 5.78409 1.2318 5.35982C1.58537 4.93554 2.21593 4.87821 2.64021 5.23178C2.94959 5.4896 3.16158 5.6608 3.42309 5.78734C3.66433 5.90407 3.98881 6 4.50003 6C4.97991 6 5.30025 5.90666 5.55167 5.78598C5.82439 5.65507 6.05281 5.47715 6.37533 5.21913C6.3837 5.21243 6.39214 5.20568 6.40066 5.19886C6.69985 4.95938 7.08847 4.64831 7.58292 4.41098C8.11275 4.15666 8.72991 4 9.50002 4C10.2888 4 10.9143 4.15407 11.4481 4.41234C11.947 4.65376 12.3275 4.97102 12.6153 5.21098C12.6237 5.21798 12.632 5.22491 12.6402 5.23178C12.9496 5.4896 13.1616 5.6608 13.4231 5.78734C13.6643 5.90407 13.9888 6 14.5 6C14.9799 6 15.3002 5.90666 15.5517 5.78598C15.8244 5.65507 16.0528 5.47715 16.3753 5.21913C16.3837 5.21243 16.3921 5.20568 16.4007 5.19886C16.6998 4.95938 17.0885 4.64831 17.5829 4.41098C18.1127 4.15666 18.7299 4 19.5 4C20.2888 4 20.9143 4.15407 21.4481 4.41234C21.947 4.65376 22.3275 4.97102 22.6153 5.21097L22.6402 5.23178C23.0645 5.58534 23.1218 6.21591 22.7682 6.64018C22.4147 7.06446 21.7841 7.12179 21.3598 6.76822C21.0505 6.5104 20.8385 6.3392 20.577 6.21266C20.3357 6.09593 20.0112 6 19.5 6C19.0201 6 18.6998 6.09334 18.4484 6.21402C18.1757 6.34493 17.9472 6.52285 17.6247 6.78087L17.5994 6.80114C17.3002 7.04062 16.9116 7.35169 16.4171 7.58902C15.8873 7.84334 15.2701 8 14.5 8C13.7112 8 13.0857 7.84593 12.552 7.58766C12.053 7.34624 11.6726 7.02898 11.3848 6.78902C11.3764 6.78202 11.3681 6.77509 11.3598 6.76822C11.0505 6.5104 10.8385 6.3392 10.577 6.21266C10.3357 6.09593 10.0112 6 9.50002 6C9.02014 6 8.6998 6.09334 8.44838 6.21402C8.17566 6.34493 7.94724 6.52285 7.62472 6.78087C7.61635 6.78757 7.60791 6.79432 7.59939 6.80114C7.30021 7.04062 6.91158 7.35169 6.41713 7.58902Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.41713 19.589C5.8873 19.8433 5.27014 20 4.50003 20C3.71124 20 3.08572 19.8459 2.55196 19.5877C2.05303 19.3462 1.67256 19.029 1.38479 18.789C1.3764 18.782 1.36808 18.7751 1.35984 18.7682C0.935564 18.4147 0.87824 17.7841 1.2318 17.3598C1.58537 16.9355 2.21593 16.8782 2.64021 17.2318C2.94959 17.4896 3.16158 17.6608 3.42309 17.7873C3.66433 17.9041 3.98881 18 4.50003 18C4.97991 18 5.30025 17.9067 5.55167 17.786C5.82439 17.6551 6.05281 17.4771 6.37533 17.2191C6.3837 17.2124 6.39214 17.2057 6.40066 17.1989C6.69985 16.9594 7.08847 16.6483 7.58292 16.411C8.11275 16.1567 8.72991 16 9.50002 16C10.2888 16 10.9143 16.1541 11.4481 16.4123C11.947 16.6538 12.3275 16.971 12.6153 17.211C12.6237 17.218 12.632 17.2249 12.6402 17.2318C12.9496 17.4896 13.1616 17.6608 13.4231 17.7873C13.6643 17.9041 13.9888 18 14.5 18C14.9799 18 15.3002 17.9067 15.5517 17.786C15.8244 17.6551 16.0528 17.4771 16.3753 17.2191C16.3837 17.2124 16.3921 17.2057 16.4007 17.1989C16.6998 16.9594 17.0885 16.6483 17.5829 16.411C18.1127 16.1567 18.7299 16 19.5 16C20.2888 16 20.9143 16.1541 21.4481 16.4123C21.947 16.6538 22.3275 16.971 22.6153 17.211L22.6402 17.2318C23.0645 17.5853 23.1218 18.2159 22.7682 18.6402C22.4147 19.0645 21.7841 19.1218 21.3598 18.7682C21.0505 18.5104 20.8385 18.3392 20.577 18.2127C20.3357 18.0959 20.0112 18 19.5 18C19.0201 18 18.6998 18.0933 18.4484 18.214C18.1757 18.3449 17.9472 18.5229 17.6247 18.7809L17.5994 18.8011C17.3002 19.0406 16.9116 19.3517 16.4171 19.589C15.8873 19.8433 15.2701 20 14.5 20C13.7112 20 13.0857 19.8459 12.552 19.5877C12.053 19.3462 11.6726 19.029 11.3848 18.789C11.3764 18.782 11.3681 18.7751 11.3598 18.7682C11.0505 18.5104 10.8385 18.3392 10.577 18.2127C10.3357 18.0959 10.0112 18 9.50002 18C9.02014 18 8.6998 18.0933 8.44838 18.214C8.17566 18.3449 7.94724 18.5229 7.62472 18.7809C7.61635 18.7876 7.60791 18.7943 7.59939 18.8011C7.30021 19.0406 6.91158 19.3517 6.41713 19.589Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.41713 13.589C5.8873 13.8433 5.27014 14 4.50003 14C3.71124 14 3.08572 13.8459 2.55196 13.5877C2.05303 13.3462 1.67256 13.029 1.38479 12.789C1.3764 12.782 1.36808 12.7751 1.35984 12.7682C0.935564 12.4147 0.87824 11.7841 1.2318 11.3598C1.58537 10.9355 2.21593 10.8782 2.64021 11.2318C2.94959 11.4896 3.16158 11.6608 3.42309 11.7873C3.66433 11.9041 3.98881 12 4.50003 12C4.97991 12 5.30025 11.9067 5.55167 11.786C5.82439 11.6551 6.05281 11.4771 6.37533 11.2191C6.3837 11.2124 6.39214 11.2057 6.40066 11.1989C6.69985 10.9594 7.08847 10.6483 7.58292 10.411C8.11275 10.1567 8.72991 10 9.50002 10C10.2888 10 10.9143 10.1541 11.4481 10.4123C11.947 10.6538 12.3275 10.971 12.6153 11.211C12.6237 11.218 12.632 11.2249 12.6402 11.2318C12.9496 11.4896 13.1616 11.6608 13.4231 11.7873C13.6643 11.9041 13.9888 12 14.5 12C14.9799 12 15.3002 11.9067 15.5517 11.786C15.8244 11.6551 16.0528 11.4771 16.3753 11.2191C16.3837 11.2124 16.3921 11.2057 16.4007 11.1989C16.6998 10.9594 17.0885 10.6483 17.5829 10.411C18.1127 10.1567 18.7299 10 19.5 10C20.2888 10 20.9143 10.1541 21.4481 10.4123C21.947 10.6538 22.3275 10.971 22.6153 11.211L22.6402 11.2318C23.0645 11.5853 23.1218 12.2159 22.7682 12.6402C22.4147 13.0645 21.7841 13.1218 21.3598 12.7682C21.0505 12.5104 20.8385 12.3392 20.577 12.2127C20.3357 12.0959 20.0112 12 19.5 12C19.0201 12 18.6998 12.0933 18.4484 12.214C18.1757 12.3449 17.9472 12.5229 17.6247 12.7809L17.5994 12.8011C17.3002 13.0406 16.9116 13.3517 16.4171 13.589C15.8873 13.8433 15.2701 14 14.5 14C13.7112 14 13.0857 13.8459 12.552 13.5877C12.053 13.3462 11.6726 13.029 11.3848 12.789C11.3764 12.782 11.3681 12.7751 11.3598 12.7682C11.0505 12.5104 10.8385 12.3392 10.577 12.2127C10.3357 12.0959 10.0112 12 9.50002 12C9.02014 12 8.6998 12.0933 8.44838 12.214C8.17566 12.3449 7.94724 12.5229 7.62472 12.7809C7.61635 12.7876 7.60791 12.7943 7.59939 12.8011C7.30021 13.0406 6.91158 13.3517 6.41713 13.589Z"
        fill="currentColor"
      />
    </svg>
  );
}
const WavesIcon = forwardRef(WavesIconInner);
export { WavesIcon };