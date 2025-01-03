import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Gift02IconInner(
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
        d="M12 4.13142C11.9799 4.09369 11.9595 4.0559 11.9387 4.01808C11.1927 2.66166 9.8061 1 7.5 1C6.57174 1 5.6815 1.36875 5.02513 2.02513C4.36875 2.6815 4 3.57174 4 4.5C4 5.02589 4.11836 5.53959 4.34032 6.00546C4.14704 6.0097 3.96837 6.01722 3.80498 6.03057C3.40963 6.06287 3.01641 6.13419 2.63803 6.32698C2.07355 6.6146 1.6146 7.07354 1.32698 7.63803C1.13419 8.01641 1.06287 8.40963 1.03057 8.80497C0.999972 9.17952 0.999985 9.63428 1 10.1614V12.2C1 12.48 1 12.62 1.0545 12.727C1.10243 12.8211 1.17892 12.8976 1.27301 12.9455C1.37996 13 1.51997 13 1.8 13H11V8.8C11 8.51997 11 8.37996 11.0545 8.273C11.1024 8.17892 11.1789 8.10243 11.273 8.0545C11.38 8 11.52 8 11.8 8H12.2C12.48 8 12.62 8 12.727 8.0545C12.8211 8.10243 12.8976 8.17892 12.9455 8.273C13 8.37996 13 8.51997 13 8.8V13H22.2C22.48 13 22.62 13 22.727 12.9455C22.8211 12.8976 22.8976 12.8211 22.9455 12.727C23 12.62 23 12.48 23 12.2V10.1614C23 9.6343 23 9.17954 22.9694 8.80498C22.9371 8.40963 22.8658 8.01641 22.673 7.63803C22.3854 7.07355 21.9265 6.61461 21.362 6.32699C20.9836 6.13419 20.5904 6.06288 20.195 6.03057C20.0316 6.01722 19.853 6.0097 19.6597 6.00546C19.8817 5.53959 20 5.02589 20 4.5C20 3.57174 19.6313 2.6815 18.9749 2.02513C18.3185 1.36875 17.4283 1 16.5 1C14.1939 1 12.8073 2.66166 12.0613 4.01808C12.0405 4.0559 12.0201 4.09369 12 4.13142ZM6.43934 3.43934C6.72064 3.15804 7.10218 3 7.5 3C8.6939 3 9.55732 3.83834 10.1863 4.98192C10.3774 5.32942 10.5319 5.68061 10.654 6H7.5C7.10218 6 6.72064 5.84196 6.43934 5.56066C6.15804 5.27936 6 4.89782 6 4.5C6 4.10218 6.15804 3.72064 6.43934 3.43934ZM16.5 6H13.346C13.4681 5.68061 13.6226 5.32942 13.8137 4.98192C14.4427 3.83834 15.3061 3 16.5 3C16.8978 3 17.2794 3.15804 17.5607 3.43934C17.842 3.72064 18 4.10218 18 4.5C18 4.89782 17.842 5.27936 17.5607 5.56066C17.2794 5.84196 16.8978 6 16.5 6Z"
        fill="currentColor"
      />
      <path
        d="M1.8 15C1.51997 15 1.37996 15 1.27301 15.0545C1.17892 15.1024 1.10243 15.1789 1.0545 15.273C1 15.38 1 15.52 1 15.8V18.8385C0.999985 19.3656 0.999972 19.8205 1.03057 20.195C1.06287 20.5904 1.13419 20.9836 1.32698 21.362C1.6146 21.9265 2.07355 22.3854 2.63803 22.673C3.01641 22.8658 3.40963 22.9371 3.80498 22.9694C4.17954 23 4.6343 23 5.16144 23L18.8386 23C19.3657 23 19.8205 23 20.195 22.9694C20.5904 22.9371 20.9836 22.8658 21.362 22.673C21.9265 22.3854 22.3854 21.9265 22.673 21.362C22.8658 20.9836 22.9371 20.5904 22.9694 20.195C23 19.8205 23 19.3657 23 18.8386V15.8C23 15.52 23 15.38 22.9455 15.273C22.8976 15.1789 22.8211 15.1024 22.727 15.0545C22.62 15 22.48 15 22.2 15H13V20.2C13 20.48 13 20.62 12.9455 20.727C12.8976 20.8211 12.8211 20.8976 12.727 20.9455C12.62 21 12.48 21 12.2 21H11.8C11.52 21 11.38 21 11.273 20.9455C11.1789 20.8976 11.1024 20.8211 11.0545 20.727C11 20.62 11 20.48 11 20.2V15H1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Gift02Icon = forwardRef(Gift02IconInner);
export { Gift02Icon };