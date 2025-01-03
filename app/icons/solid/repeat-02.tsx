import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Repeat02IconInner(
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
        d="M10.2929 1.29289C10.6834 0.902369 11.3166 0.902369 11.7071 1.29289L14.7071 4.29289C15.0976 4.68342 15.0976 5.31658 14.7071 5.70711L11.7071 8.70711C11.3166 9.09763 10.6834 9.09763 10.2929 8.70711C9.90237 8.31658 9.90237 7.68342 10.2929 7.29289L11.5858 6.00002H6.80002C5.94344 6.00002 5.36115 6.0008 4.91106 6.03758C4.47265 6.0734 4.24844 6.13832 4.09204 6.21801C3.71572 6.40976 3.40976 6.71572 3.21801 7.09204C3.13832 7.24844 3.0734 7.47265 3.03758 7.91106C3.0008 8.36115 3.00002 8.94345 3.00002 9.80002V15.5C3.00002 15.9962 3.00218 16.1475 3.01713 16.2611C3.13529 17.1585 3.8415 17.8648 4.73897 17.9829C4.85256 17.9979 5.00382 18 5.50002 18C6.05231 18 6.50002 18.4477 6.50002 19C6.50002 19.5523 6.05231 20 5.50002 20L5.43127 20C5.03382 20.0001 4.73938 20.0002 4.47792 19.9658C2.68299 19.7295 1.27055 18.3171 1.03424 16.5221C0.999824 16.2607 0.999904 15.9662 1.00001 15.5688L1.00002 9.75873C1.00001 8.95378 1 8.28938 1.04422 7.7482C1.09014 7.1861 1.18871 6.6694 1.436 6.18406C1.81949 5.43141 2.43141 4.81949 3.18406 4.436C3.6694 4.18871 4.1861 4.09014 4.7482 4.04422C5.28939 4 5.95375 4.00001 6.75873 4.00002L11.5858 4.00002L10.2929 2.70711C9.90237 2.31658 9.90237 1.68342 10.2929 1.29289Z"
        fill="currentColor"
      />
      <path
        d="M19.2611 6.01713C19.1475 6.00218 18.9962 6.00002 18.5 6.00002C17.9477 6.00002 17.5 5.55231 17.5 5.00002C17.5 4.44774 17.9477 4.00002 18.5 4.00002L18.5688 4.00001C18.9662 3.9999 19.2607 3.99982 19.5221 4.03424C21.3171 4.27055 22.7295 5.68299 22.9658 7.47792C23.0002 7.73937 23.0001 8.03381 23 8.43124L23 14.2413C23 15.0463 23 15.7107 22.9558 16.2519C22.9099 16.8139 22.8113 17.3307 22.5641 17.816C22.1806 18.5686 21.5686 19.1806 20.816 19.564C20.3307 19.8113 19.8139 19.9099 19.2519 19.9558C18.7106 20 18.0463 20 17.2413 20H12.4142L13.7071 21.2929C14.0976 21.6834 14.0976 22.3166 13.7071 22.7071C13.3166 23.0976 12.6834 23.0976 12.2929 22.7071L9.29289 19.7071C8.90237 19.3166 8.90237 18.6834 9.29289 18.2929L12.2929 15.2929C12.6834 14.9024 13.3166 14.9024 13.7071 15.2929C14.0976 15.6834 14.0976 16.3166 13.7071 16.7071L12.4142 18H17.2C18.0566 18 18.6389 17.9992 19.089 17.9625C19.5274 17.9267 19.7516 17.8617 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C20.8617 16.7516 20.9267 16.5274 20.9625 16.089C20.9992 15.6389 21 15.0566 21 14.2V8.50002C21 8.00382 20.9979 7.85256 20.9829 7.73897C20.8648 6.8415 20.1585 6.13529 19.2611 6.01713Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Repeat02Icon = forwardRef(Repeat02IconInner);
export { Repeat02Icon };
