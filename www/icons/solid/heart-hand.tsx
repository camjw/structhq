import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function HeartHandIconInner(
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
        d="M17.5354 2.30595C16.5778 1.19507 15.0108 0.672849 13.4497 1.41786C11.6347 2.28402 10.8409 4.36403 11.6109 6.19113C11.9982 7.11024 13.0461 8.78656 13.7371 9.86017C13.7425 9.86851 13.7479 9.87685 13.7532 9.88519C13.8699 10.0665 13.9875 10.2494 14.1022 10.399C14.2322 10.5686 14.3978 10.7498 14.6326 10.8959C14.9644 11.1024 15.3647 11.2097 15.7554 11.1967C16.0318 11.1876 16.2657 11.1135 16.4631 11.0316C16.6372 10.9594 16.8306 10.8598 17.0222 10.7611C17.0311 10.7566 17.0399 10.752 17.0487 10.7475C18.1839 10.1632 19.9296 9.23545 20.7246 8.63314C22.2935 7.44451 22.6914 5.23785 21.511 3.5688C20.5175 2.16392 18.9179 1.8226 17.5354 2.30595Z"
        fill="currentColor"
      />
      <path
        d="M17.7088 15.8932C17.7088 16.6845 17.1854 17.3538 16.4639 17.5775L16.9278 17.556C17.4348 17.556 17.9278 17.3965 18.3329 17.1004L21.1618 15.0365C21.8678 14.5217 22.856 14.59 23.4801 15.1971C24.1733 15.8714 24.1733 16.9637 23.4801 17.6368L21.0529 19.998C20.3995 20.6335 19.5658 21.0675 18.6596 21.244L15.2289 21.9115C14.5486 22.0436 13.8472 22.0277 13.174 21.8636L10.0711 21.1096C9.69997 21.0185 9.31943 20.9729 8.93655 20.9729C8.53006 20.9729 8.32681 20.9729 8.16374 20.9147C7.88129 20.8139 7.65902 20.5916 7.55818 20.3092C7.49997 20.1461 7.49997 19.9428 7.49997 19.5364V16.1072C7.49997 15.8214 7.49997 15.6785 7.53667 15.5468C7.56918 15.4301 7.62261 15.3203 7.69437 15.2228C7.77537 15.1126 7.88783 15.0244 8.11277 14.8481L9.29836 13.9186C9.29836 13.9186 11.2631 12.9999 12.3485 12.9999C12.7981 12.9999 13.2454 13.0546 13.6821 13.1629L16.3658 13.8301C17.155 14.0257 17.7088 14.7313 17.7088 15.5404V15.8932Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.47352 12.9999C3.48233 12.9999 3.49116 12.9999 3.49999 12.9999C3.50882 12.9999 3.51765 12.9999 3.52646 12.9999C3.7365 12.9999 3.94113 12.9999 4.11521 13.0118C4.30558 13.0247 4.53131 13.0552 4.76535 13.1522C5.2554 13.3552 5.64475 13.7445 5.84773 14.2346C5.94468 14.4686 5.97515 14.6943 5.98814 14.8847C6.00002 15.0588 6 15.2634 5.99997 15.4734C5.99997 15.4822 5.99997 15.4911 5.99997 15.4999L5.99997 20.5264C6 20.7364 6.00002 20.941 5.98814 21.1151C5.97515 21.3055 5.94468 21.5312 5.84773 21.7652C5.64475 22.2553 5.2554 22.6446 4.76535 22.8476C4.5313 22.9446 4.30558 22.975 4.11521 22.988C3.94113 22.9999 3.73651 22.9999 3.52646 22.9999H3.47351C3.26346 22.9999 3.05884 22.9999 2.88476 22.988C2.69439 22.975 2.46867 22.9446 2.23462 22.8476C1.74457 22.6446 1.35523 22.2553 1.15224 21.7652C1.0553 21.5312 1.02482 21.3055 1.01183 21.1151C0.999955 20.941 0.999976 20.7364 0.999997 20.5264L0.999998 15.4999C0.999998 15.4911 0.999998 15.4823 0.999997 15.4734C0.999976 15.2634 0.999955 15.0588 1.01183 14.8847C1.02482 14.6943 1.0553 14.4686 1.15224 14.2346C1.35523 13.7445 1.74457 13.3552 2.23463 13.1522C2.46867 13.0552 2.69439 13.0247 2.88476 13.0118C3.05885 12.9999 3.26347 12.9999 3.47352 12.9999Z"
        fill="currentColor"
      />
    </svg>
  );
}
const HeartHandIcon = forwardRef(HeartHandIconInner);
export { HeartHandIcon };
