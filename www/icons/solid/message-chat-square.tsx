import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageChatSquareIconInner(
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
        d="M13.1615 10H18.8385C19.3657 9.99998 19.8205 9.99997 20.195 10.0306C20.5904 10.0629 20.9836 10.1342 21.362 10.327C21.9265 10.6146 22.3854 11.0735 22.673 11.638C22.8658 12.0164 22.9371 12.4096 22.9694 12.805C23 13.1795 23 13.6343 23 14.1615V16.9463C23 17.3849 23 17.7634 22.9787 18.0767C22.9561 18.4065 22.9066 18.7364 22.7716 19.0623C22.4672 19.7974 21.8831 20.3814 21.1481 20.6859C20.8221 20.8209 20.4922 20.8704 20.1624 20.8929C20.1101 20.8965 20.0559 20.8995 20 20.902V22C20 22.3723 19.7932 22.7138 19.4632 22.8862C19.1333 23.0587 18.7348 23.0336 18.4292 22.8211L16.2528 21.3079C15.9175 21.0749 15.8497 21.0324 15.7856 21.0034C15.7118 20.9699 15.6341 20.9455 15.5543 20.9308C15.4851 20.9181 15.4052 20.9143 14.9969 20.9143H13.1615C12.6343 20.9143 12.1795 20.9143 11.805 20.8837C11.4096 20.8514 11.0164 20.7801 10.638 20.5873C10.0735 20.2997 9.6146 19.8407 9.32698 19.2763C9.13419 18.8979 9.06287 18.5047 9.03057 18.1093C8.99997 17.7347 8.99998 17.28 9 16.7528V14.1615C8.99998 13.6343 8.99997 13.1795 9.03057 12.805C9.06287 12.4096 9.13419 12.0164 9.32698 11.638C9.6146 11.0735 10.0735 10.6146 10.638 10.327C11.0164 10.1342 11.4096 10.0629 11.805 10.0306C12.1795 9.99997 12.6343 9.99998 13.1615 10Z"
        fill="currentColor"
      />
      <path
        d="M14.2413 1H6.75873C5.95377 0.999988 5.2894 0.999978 4.7482 1.04419C4.18611 1.09012 3.6694 1.18868 3.18407 1.43598C2.43142 1.81947 1.8195 2.43139 1.436 3.18404C1.18871 3.66937 1.09015 4.18608 1.04422 4.74818C1.00001 5.28937 1.00002 5.95373 1.00003 6.7587L1.00001 11.5208C0.999881 11.9625 0.999782 12.2897 1.04226 12.5797C1.2984 14.3283 2.67169 15.7016 4.4203 15.9578C4.49179 15.9682 4.53636 15.9951 4.55559 16.0111L4.55558 17.5889C4.55554 17.8615 4.5555 18.1289 4.57452 18.3439C4.59142 18.5349 4.63567 18.9306 4.9168 19.2585C5.23016 19.624 5.69995 19.8169 6.17978 19.7771C6.61021 19.7413 6.91972 19.4909 7.06596 19.3669C7.10762 19.3315 7.15077 19.293 7.19508 19.2519C7.10251 18.8912 7.06048 18.5567 7.03724 18.2722C6.99977 17.8136 6.9999 17.2838 7.00001 16.7952V14.1192C6.9999 13.6305 6.99977 13.1007 7.03724 12.6421C7.07964 12.1231 7.1846 11.4374 7.54499 10.7301C8.02436 9.78926 8.78926 9.02436 9.73007 8.54499C10.4374 8.1846 11.1231 8.07964 11.6421 8.03724C12.1007 7.99977 12.6305 7.9999 13.1191 8.00001H18.8809C19.2466 7.99993 19.6353 7.99983 20 8.0155V6.75868C20 5.95372 20.0001 5.28937 19.9558 4.74818C19.9099 4.18608 19.8113 3.66937 19.5641 3.18404C19.1806 2.43139 18.5686 1.81947 17.816 1.43598C17.3307 1.18868 16.814 1.09012 16.2519 1.04419C15.7107 0.999978 15.0463 0.999988 14.2413 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageChatSquareIcon = forwardRef(MessageChatSquareIconInner);
export { MessageChatSquareIcon };
