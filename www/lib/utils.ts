import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "xxxxs",
            "xxxs",
            "xxs",
            "xs",
            "sm",
            "base",
            "lg",
            "xl",
            "2xl",
            "3xl",
            "4xl",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
