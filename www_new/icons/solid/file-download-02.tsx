import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FileDownload02IconInner(
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
        d="M8.7587 1H15.2413C16.0463 0.999988 16.7106 0.999979 17.2518 1.0442C17.8139 1.09012 18.3306 1.18868 18.816 1.43598C19.5686 1.81947 20.1805 2.43139 20.564 3.18404C20.8113 3.66938 20.9099 4.18608 20.9558 4.74818C21 5.28937 21 5.95372 21 6.75868V11.9742C21 12.5239 21 12.7987 20.9362 12.9126C20.8598 13.0488 20.83 13.0749 20.6849 13.1327C20.5636 13.1809 20.1753 13.1294 19.3987 13.0263C19.2682 13.0089 19.1352 13 19 13C17.3431 13 16 14.3431 16 16C15.2322 16 14.4645 16.2929 13.8787 16.8787C12.7071 18.0503 12.7071 19.9497 13.8787 21.1213L14.3968 21.6394C14.8232 22.0659 15.0364 22.2791 15.0509 22.4629C15.0635 22.6223 14.9988 22.7785 14.8773 22.8823C14.7371 23.0021 14.4359 23.0023 13.8334 23.0026C12.9003 23.003 11.9672 23.0022 11.0341 23.0013C10.2756 23.0007 9.51716 23 8.75868 23C7.95372 23 7.28937 23 6.74818 22.9558C6.18608 22.9099 5.66938 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43598 20.816C3.18868 20.3306 3.09012 19.8139 3.0442 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2413V6.75869C2.99999 5.95373 2.99998 5.28936 3.0442 4.74818C3.09012 4.18608 3.18868 3.66938 3.43598 3.18404C3.81947 2.43139 4.43139 1.81947 5.18404 1.43598C5.66938 1.18868 6.18608 1.09012 6.74818 1.0442C7.28936 0.999979 7.95375 0.999988 8.7587 1ZM7 5C6.44772 5 6 5.44772 6 6C6 6.55229 6.44772 7 7 7H16C16.5523 7 17 6.55229 17 6C17 5.44772 16.5523 5 16 5H7ZM6 10C6 9.44771 6.44772 9 7 9H13C13.5523 9 14 9.44771 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10ZM6 14C6 13.4477 6.44772 13 7 13H9C9.55229 13 10 13.4477 10 14C10 14.5523 9.55229 15 9 15H7C6.44772 15 6 14.5523 6 14Z"
        fill="currentColor"
      />
      <path
        d="M19 15C19.5523 15 20 15.4477 20 16V19.5858L21.2929 18.2929C21.6834 17.9024 22.3166 17.9024 22.7071 18.2929C23.0976 18.6834 23.0976 19.3166 22.7071 19.7071L19.7071 22.7071C19.5196 22.8946 19.2652 23 19 23C18.7348 23 18.4804 22.8946 18.2929 22.7071L15.2929 19.7071C14.9024 19.3166 14.9024 18.6834 15.2929 18.2929C15.6834 17.9024 16.3166 17.9024 16.7071 18.2929L18 19.5858V16C18 15.4477 18.4477 15 19 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FileDownload02Icon = forwardRef(FileDownload02IconInner);
export { FileDownload02Icon };
