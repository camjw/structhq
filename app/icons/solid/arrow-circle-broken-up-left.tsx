import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenUpLeftIconInner(
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
        d="M21.4641 17.6114C21.2011 18.0543 21.0696 18.2758 20.8224 18.4073C20.625 18.5122 20.3329 18.5488 20.1158 18.4959C19.8437 18.4295 19.6344 18.2201 19.2157 17.8015L11.5858 10.1716H14.8284C15.3807 10.1716 15.8284 9.72386 15.8284 9.17157C15.8284 8.61929 15.3807 8.17157 14.8284 8.17157L9.17157 8.17157C8.61929 8.17157 8.17157 8.61929 8.17157 9.17157L8.17157 14.8284C8.17157 15.3807 8.61929 15.8284 9.17157 15.8284C9.72386 15.8284 10.1716 15.3807 10.1716 14.8284L10.1716 11.5858L17.8015 19.2157C18.2201 19.6344 18.4295 19.8437 18.4959 20.1158C18.5488 20.3329 18.5122 20.625 18.4073 20.8224C18.2758 21.0696 18.0543 21.2011 17.6114 21.4641C13.3903 23.971 7.85269 23.409 4.22182 19.7782C-0.0739415 15.4824 -0.0739417 8.51759 4.22183 4.22183C8.51759 -0.0739417 15.4824 -0.0739415 19.7782 4.22182C23.409 7.85269 23.971 13.3903 21.4641 17.6114Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenUpLeftIcon = forwardRef(
  ArrowCircleBrokenUpLeftIconInner,
);
export { ArrowCircleBrokenUpLeftIcon };
