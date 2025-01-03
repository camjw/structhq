import React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

import { COMPANY_LOGO_SVG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const brandingLogoVariants = cva(
  "rounded-full items-center justify-center flex ring-1 ring-transparent flex-shrink-0",
  {
    variants: {
      size: {
        default: "w-[48px] h-[48px]",
        lg: "w-[92px] h-[92px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface BrandingLogoProps
  extends VariantProps<typeof brandingLogoVariants> {
  className?: string;
}

export function BrandingLogo({ size, className }: BrandingLogoProps) {
  return (
    <Image
      src={COMPANY_LOGO_SVG}
      loader={({ src }) => src}
      unoptimized={true}
      alt="Struct"
      priority={true}
      className={cn(brandingLogoVariants({ size }), className)}
    />
  );
}

export function BrandingLogoSpinner({ size, className }: BrandingLogoProps) {
  const [currentRotation, setCurrentRotation] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotation((prev) => prev + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [setCurrentRotation]);

  return (
    <div
      className={
        (cn(brandingLogoVariants({ size }), className),
        "flex items-center justify-center")
      }
    >
      <svg
        width="144"
        height="144"
        viewBox="0 0 144 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4_9)">
          <circle
            cx="72"
            cy="72"
            r="62"
            fill="white"
            stroke="url(#paint0_linear_4_9)"
            strokeWidth="20"
          />
          <path
            d="M70.7638 37.0216C66.729 37.5001 56.8596 40.0087 57.261 51.5017C57.5576 59.9965 64.8259 61.9421 68.6731 63.1105C73.7297 64.6462 80.1486 62.2094 89.3002 66.3926C98.9468 70.802 100.282 80.0176 102.903 83.4282C105.524 86.8388 107.946 70.2442 104.082 59.8727C100.217 49.5013 91.1482 42.4184 87.3934 40.4433C80.2581 36.69 76.7427 36.3125 70.7638 37.0216Z"
            fill="url(#paint1_linear_4_9)"
            stroke="url(#paint2_linear_4_9)"
          />
          <path
            d="M73.2362 107.818C77.271 107.34 87.1404 104.831 86.739 93.3384C86.4424 84.8436 79.1741 82.898 75.327 81.7296C70.2703 80.1939 63.8514 82.6306 54.6998 78.4475C45.0532 74.038 43.7177 64.8224 41.097 61.4118C38.4764 58.0012 36.0541 74.5958 39.9184 84.9673C43.7827 95.3388 52.8518 102.422 56.6066 104.397C63.742 108.15 67.2573 108.528 73.2362 107.818Z"
            fill="url(#paint3_linear_4_9)"
            stroke="url(#paint4_linear_4_9)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_4_9"
            x1="72"
            y1="0"
            x2="72"
            y2="144"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`rotate(${currentRotation} 72 72)`}
          >
            <stop offset="0.24" stopColor="#1C2024" />
            <stop offset="1" stopColor="#BBC2D2" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_4_9"
            x1="105.669"
            y1="59.6928"
            x2="57.6032"
            y2="61.295"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`rotate(${currentRotation} 72 72)`}
          >
            <stop offset="0.24" stopColor="#1C2024" />
            <stop offset="1" stopColor="#BBC2D2" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_4_9"
            x1="80.7987"
            y1="36.5111"
            x2="82.4787"
            y2="84.6202"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`rotate(${currentRotation} 72 72)`}
          >
            <stop offset="0.24" stopColor="#1C2024" />
            <stop offset="1" stopColor="#BBC2D2" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_4_9"
            x1="38.3305"
            y1="85.1472"
            x2="86.3968"
            y2="83.545"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`rotate(${currentRotation} 72 72)`}
          >
            <stop offset="0.24" stopColor="#1C2024" />
            <stop offset="1" stopColor="#BBC2D2" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_4_9"
            x1="63.2013"
            y1="108.329"
            x2="61.5213"
            y2="60.2198"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`rotate(${currentRotation} 72 72)`}
          >
            <stop offset="0.24" stopColor="#1C2024" />
            <stop offset="1" stopColor="#BBC2D2" />
          </linearGradient>
          <clipPath id="clip0_4_9">
            <rect width="144" height="144" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
