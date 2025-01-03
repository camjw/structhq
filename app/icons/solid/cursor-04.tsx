import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Cursor04IconInner(
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
        d="M4.65692 2.44517C4.45632 2.38611 4.24544 2.32404 4.06536 2.28854C3.88427 2.25285 3.56019 2.20407 3.21433 2.33299C2.80648 2.48503 2.48479 2.80672 2.33275 3.21457C2.20382 3.56043 2.2526 3.88451 2.2883 4.06561C2.3238 4.24569 2.38587 4.45656 2.44492 4.65716L6.66941 19.0204C6.72391 19.2059 6.78237 19.4049 6.84679 19.5673C6.91348 19.7355 7.04166 20.0166 7.3179 20.2326C7.64878 20.4914 8.073 20.5996 8.48738 20.5308C8.83334 20.4735 9.08047 20.2881 9.21956 20.1724C9.3539 20.0606 9.50047 19.9139 9.63712 19.7772L11.9999 17.4144L15.7435 21.158C15.8277 21.2423 15.9283 21.3429 16.0241 21.4242C16.1352 21.5185 16.3038 21.6441 16.5364 21.7197C16.8377 21.8175 17.1622 21.8175 17.4635 21.7197C17.6961 21.6441 17.8647 21.5185 17.9758 21.4242C18.0716 21.3428 18.1722 21.2422 18.2564 21.158L21.1578 18.2566C21.242 18.1724 21.3426 18.0719 21.424 17.976C21.5183 17.8649 21.6438 17.6963 21.7194 17.4637C21.8173 17.1624 21.8173 16.8379 21.7194 16.5367C21.6438 16.304 21.5183 16.1354 21.424 16.0243C21.3426 15.9285 21.242 15.8279 21.1577 15.7437L17.4141 12.0002L19.7769 9.63739C19.9137 9.50073 20.0603 9.35415 20.1721 9.2198C20.2878 9.08071 20.4732 8.83358 20.5306 8.48763C20.5993 8.07324 20.4911 7.64902 20.2324 7.31814C20.0163 7.04191 19.7353 6.91372 19.5671 6.84703C19.4046 6.78261 19.2057 6.72416 19.0202 6.66966L4.65692 2.44517Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Cursor04Icon = forwardRef(Cursor04IconInner);
export { Cursor04Icon };
