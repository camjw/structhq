import { SVGProps } from "react";

export const TwitterIcon = ({
  width = "27",
  height = "27",
  fill = "none",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 27 27" {...{ width, height, fill }} {...props}>
      <path
        d="M24.75 6.52548C23.9044 6.89234 23.0101 7.13485 22.095 7.24548C23.0604 6.66872 23.7839 5.76136 24.1313 4.69173C23.224 5.2318 22.2309 5.61231 21.195 5.81673C20.5026 5.06587 19.5806 4.56606 18.5735 4.39569C17.5665 4.22531 16.5314 4.39401 15.6305 4.87532C14.7297 5.35663 14.014 6.12333 13.5959 7.05517C13.1777 7.98701 13.0807 9.03129 13.32 10.0242C11.4856 9.93145 9.69125 9.4538 8.05349 8.62232C6.41573 7.79085 4.9712 6.62413 3.81375 5.19798C3.40778 5.90692 3.19446 6.70978 3.195 7.52673C3.19356 8.28541 3.37974 9.03267 3.73697 9.70199C4.0942 10.3713 4.6114 10.9419 5.2425 11.363C4.50897 11.343 3.79112 11.1462 3.15 10.7892V10.8455C3.1555 11.9085 3.52799 12.937 4.20448 13.7569C4.88096 14.5769 5.81991 15.1381 6.8625 15.3455C6.46116 15.4676 6.04448 15.532 5.625 15.5367C5.33463 15.5333 5.04498 15.507 4.75875 15.458C5.05565 16.3724 5.6302 17.1715 6.40246 17.7442C7.17472 18.3168 8.10627 18.6345 9.0675 18.653C7.44435 19.9302 5.44037 20.6272 3.375 20.633C2.99895 20.6342 2.6232 20.6117 2.25 20.5655C4.35873 21.927 6.81616 22.6498 9.32625 22.6467C11.0584 22.6647 12.7768 22.3374 14.381 21.6838C15.9852 21.0303 17.4432 20.0636 18.6696 18.8403C19.8961 17.617 20.8665 16.1615 21.5241 14.559C22.1818 12.9565 22.5135 11.2389 22.5 9.50673C22.5 9.31548 22.5 9.11298 22.5 8.91048C23.3828 8.25214 24.1442 7.44508 24.75 6.52548Z"
        fill="currentColor"
      />
    </svg>
  );
};