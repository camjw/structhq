import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PlayIconInner(
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
        d="M8.00625 2.80243C8.0182 2.8104 8.03019 2.81839 8.04222 2.82642L18.591 9.8589C18.8962 10.0623 19.1792 10.251 19.3965 10.4263C19.6234 10.6092 19.8908 10.8629 20.0447 11.234C20.2481 11.7245 20.2481 12.2758 20.0447 12.7663C19.8908 13.1374 19.6234 13.391 19.3965 13.574C19.1792 13.7493 18.8962 13.9379 18.591 14.1413L8.00628 21.1978C7.63319 21.4465 7.29772 21.6702 7.01305 21.8245C6.72818 21.9789 6.33717 22.1553 5.8808 22.128C5.29705 22.0932 4.75779 21.8046 4.40498 21.3382C4.12916 20.9736 4.05905 20.5504 4.02949 20.2278C3.99994 19.9053 3.99997 19.5021 4 19.0537L4 4.98975C4 4.97529 4 4.96087 4 4.9465C3.99997 4.49811 3.99994 4.09491 4.02949 3.77249C4.05905 3.44983 4.12916 3.02663 4.40498 2.66202C4.75779 2.19565 5.29705 1.90705 5.8808 1.87219C6.33717 1.84494 6.72818 2.02135 7.01305 2.17573C7.29771 2.33 7.63317 2.55368 8.00625 2.80243Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PlayIcon = forwardRef(PlayIconInner);
export { PlayIcon };
