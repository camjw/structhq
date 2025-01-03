import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PackageSearchIconInner(
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
        d="M20 14C17.7909 14 16 15.7909 16 18C16 20.2091 17.7909 22 20 22C20.6099 22 21.1879 21.8635 21.7052 21.6194L22.2929 22.2071C22.6834 22.5976 23.3166 22.5976 23.7071 22.2071C24.0976 21.8166 24.0976 21.1834 23.7071 20.7929L23.2486 20.3344C23.7215 19.6774 24 18.8712 24 18C24 15.7909 22.2091 14 20 14ZM18 18C18 16.8954 18.8954 16 20 16C21.1046 16 22 16.8954 22 18C22 19.1046 21.1046 20 20 20C18.8954 20 18 19.1046 18 18Z"
        fill="currentColor"
      />
      <path
        d="M11.5971 1.18505C11.8629 1.13038 12.1371 1.13038 12.4029 1.18505C12.7102 1.24824 12.9848 1.40207 13.2032 1.52436L13.2627 1.55761C15.0256 2.53701 18.0079 4.19466 19.6893 5.12926C20.0975 5.35619 20.3017 5.46965 20.3699 5.61961C20.4293 5.75034 20.4297 5.90033 20.3709 6.03136C20.3035 6.18166 20.0997 6.29625 19.6923 6.52544L17.3632 7.83555L8.40038 2.85619L10.7373 1.55761L10.7968 1.52436C11.0152 1.40207 11.2898 1.24824 11.5971 1.18505Z"
        fill="currentColor"
      />
      <path
        d="M6.34168 4.00039L15.3169 8.98661L12.3922 10.6318C12.2491 10.7122 12.1776 10.7525 12.1017 10.7683C12.0346 10.7822 11.9653 10.7822 11.8982 10.7683C11.8224 10.7525 11.7508 10.7122 11.6078 10.6318L4.30769 6.52545C3.90025 6.29627 3.69653 6.18167 3.62907 6.03137C3.57027 5.90034 3.57065 5.75035 3.63012 5.61962C3.69833 5.46967 3.90245 5.3562 4.3107 5.12928L6.34168 4.00039Z"
        fill="currentColor"
      />
      <path
        d="M21.9959 8.89013C21.9955 8.4418 21.9953 8.21764 21.9008 8.08675C21.8183 7.97256 21.6915 7.89845 21.5515 7.88267C21.3911 7.86457 21.1953 7.97469 20.8038 8.19493L13.4078 12.3552C13.2593 12.4387 13.1851 12.4805 13.1311 12.5395C13.0833 12.5918 13.0471 12.6536 13.025 12.7209C13 12.7969 13 12.8821 13 13.0524V21.2277C13 21.6749 13 21.8985 13.094 22.0293C13.1761 22.1434 13.3023 22.2177 13.4419 22.234C13.6019 22.2527 13.7968 22.1445 14.1865 21.9281C14.2246 21.907 14.2634 21.8854 14.303 21.8635C14.571 21.7146 14.705 21.6402 14.7713 21.5445C14.8355 21.4519 14.8609 21.3702 14.8604 21.2575C14.8599 21.141 14.7819 20.9844 14.6258 20.671C14.2253 19.8666 14 18.9596 14 18C14 14.6863 16.6863 12 20 12C20.3066 12 20.6078 12.023 20.9021 12.0674C21.3367 12.1329 21.554 12.1657 21.6773 12.1183C21.7977 12.0721 21.8694 12.0103 21.933 11.8981C21.9981 11.7832 21.998 11.5919 21.9977 11.2091C21.9971 10.3397 21.9964 9.52869 21.9959 8.89013Z"
        fill="currentColor"
      />
      <path
        d="M9.81351 21.9281C10.2032 22.1445 10.3981 22.2527 10.5581 22.234C10.6977 22.2177 10.8239 22.1434 10.906 22.0293C11 21.8985 11 21.6749 11 21.2277V13.0525C11 12.8821 11 12.797 10.975 12.7209C10.9529 12.6536 10.9167 12.5918 10.8689 12.5396C10.8149 12.4805 10.7407 12.4387 10.5922 12.3552L3.19624 8.19496C2.8047 7.97472 2.60894 7.8646 2.44849 7.88269C2.30852 7.89848 2.18168 7.97259 2.09921 8.08677C2.00466 8.21766 2.00448 8.44183 2.0041 8.89017C2.00254 10.7563 2 14.0956 2 16.0586L1.99982 16.1308C1.99886 16.3946 1.99765 16.7264 2.10097 17.0391C2.1903 17.3095 2.33632 17.5576 2.52927 17.767C2.75243 18.0092 3.04303 18.1692 3.27416 18.2966L3.33733 18.3314C5.11852 19.321 8.14715 21.0028 9.81351 21.9281Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PackageSearchIcon = forwardRef(PackageSearchIconInner);
export { PackageSearchIcon };