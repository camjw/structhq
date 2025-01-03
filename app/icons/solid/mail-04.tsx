import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Mail04IconInner(
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
        d="M12.6855 0.964631C12.2346 0.858795 11.7654 0.858795 11.3145 0.964631C10.7994 1.08553 10.3416 1.38401 9.82066 1.72362C7.56542 3.18957 5.30411 4.64668 3.05228 6.11797C2.71184 6.34041 2.54162 6.45163 2.48234 6.59304C2.43059 6.7165 2.43057 6.856 2.48228 6.97947C2.54151 7.1209 2.71193 7.23233 3.05276 7.45518L10.7961 12.5181C11.4941 12.9745 11.6407 13.0532 11.7705 13.0838C11.9214 13.1194 12.0786 13.1194 12.2296 13.0838C12.3594 13.0532 12.5059 12.9745 13.204 12.5181L20.9473 7.45521C21.2881 7.23236 21.4585 7.12093 21.5178 6.9795C21.5695 6.85602 21.5694 6.71653 21.5177 6.59307C21.4584 6.45166 21.2882 6.34044 20.9477 6.118C18.6959 4.64671 16.4346 3.18958 14.1793 1.72363C13.6584 1.38402 13.2006 1.08553 12.6855 0.964631Z"
        fill="currentColor"
      />
      <path
        d="M22.9974 9.98165C22.9971 9.50159 22.9969 9.26156 22.8965 9.12814C22.8089 9.01188 22.6751 8.93952 22.5299 8.92997C22.3632 8.91901 22.162 9.05056 21.7596 9.31365L14.1884 14.2642C13.6656 14.6071 13.2061 14.9084 12.6887 15.0304C12.2358 15.1372 11.7643 15.1372 11.3113 15.0304C10.7939 14.9084 10.3345 14.6071 9.81166 14.2642L2.24037 9.3136C1.838 9.0505 1.63682 8.91896 1.47015 8.92992C1.32494 8.93947 1.19108 9.01183 1.10355 9.12808C1.00308 9.26151 1.00293 9.50154 1.00264 9.9816C1.00157 11.7067 1 14.5406 1 16.2412C0.999988 17.0462 0.999977 17.7105 1.04419 18.2517C1.09012 18.8138 1.18868 19.3305 1.43597 19.8158C1.81947 20.5685 2.43139 21.1804 3.18404 21.5639C3.66937 21.8112 4.18608 21.9098 4.74817 21.9557C5.28936 21.9999 5.95372 21.9999 6.75868 21.9999H17.2413C18.0463 21.9999 18.7106 21.9999 19.2518 21.9557C19.8139 21.9098 20.3306 21.8112 20.816 21.5639C21.5686 21.1804 22.1805 20.5685 22.564 19.8158C22.8113 19.3305 22.9099 18.8138 22.9558 18.2517C23 17.7105 23 17.0462 23 16.2412C23 14.5406 22.9984 11.7067 22.9974 9.98165Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Mail04Icon = forwardRef(Mail04IconInner);
export { Mail04Icon };
