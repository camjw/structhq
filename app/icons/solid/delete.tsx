import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function DeleteIconInner(
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
        d="M8.17616 3.11548C8.5838 2.99906 9.01262 2.99954 9.49942 3.00007L17.2413 3.00014C18.0463 3.00013 18.7106 3.00012 19.2518 3.04434C19.8139 3.09026 20.3306 3.18883 20.816 3.43612C21.5686 3.81961 22.1805 4.43154 22.564 5.18418C22.8113 5.66952 22.9099 6.18622 22.9558 6.74832C23 7.28951 23 7.95386 23 8.75882V15.2415C23 16.0464 23 16.7108 22.9558 17.252C22.9099 17.8141 22.8113 18.3308 22.564 18.8161C22.1805 19.5688 21.5686 20.1807 20.816 20.5642C20.3306 20.8115 19.8139 20.91 19.2518 20.956C18.7106 21.0002 18.0463 21.0002 17.2413 21.0001L9.49942 21.0002C9.01262 21.0008 8.5838 21.0012 8.17616 20.8848C7.81847 20.7827 7.48291 20.6149 7.18657 20.39C6.84886 20.1338 6.59194 19.7904 6.30029 19.4007L1.92 13.5601L1.8649 13.4871C1.66653 13.2251 1.41782 12.8965 1.31589 12.5093C1.22804 12.1755 1.22804 11.8247 1.31589 11.491C1.41782 11.1038 1.66653 10.7752 1.8649 10.5132L1.92 10.4401L6.30029 4.59963C6.59194 4.20987 6.84886 3.86653 7.18657 3.61027C7.48291 3.38542 7.81847 3.21763 8.17616 3.11548ZM17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L15.4142 12L17.7071 14.2929C18.0976 14.6834 18.0976 15.3166 17.7071 15.7071C17.3166 16.0976 16.6834 16.0976 16.2929 15.7071L14 13.4142L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071C9.90237 15.3166 9.90237 14.6834 10.2929 14.2929L12.5858 12L10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289C10.6834 7.90237 11.3166 7.90237 11.7071 8.29289L14 10.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const DeleteIcon = forwardRef(DeleteIconInner);
export { DeleteIcon };
