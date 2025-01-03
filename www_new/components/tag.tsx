import clsx from "clsx";

const variantStyles = {
  small: "",
  medium: "rounded-lg px-1.5 ring-1 ring-inset",
};

const colorStyles = {
  green: {
    small: "text-green-10",
    medium: "ring-green-10 bg-green-7/10 text-green-10",
  },
  sky: {
    small: "text-sky-10",
    medium: "ring-sky-10 bg-sky-7/10 text-sky-10",
  },
  amber: {
    small: "text-amber-10",
    medium: "ring-amber-10 bg-amber-7/10 text-amber-10",
  },
  ruby: {
    small: "text-red-10 dark:text-ruby-10",
    medium: "ring-ruby-10 bg-ruby-50 text-red-10",
  },
  gray: {
    small: "text-gray-7 dark:text-gray-10",
    medium: "ring-gray-10 bg-gray-50 text-gray-10",
  },
};

const valueColorMap = {
  GET: "green",
  POST: "sky",
  PUT: "amber",
  DELETE: "ruby",
} as Record<string, keyof typeof colorStyles>;

export function Tag({
  children,
  variant = "medium",
  color = valueColorMap[children] ?? "green",
}: {
  children: keyof typeof valueColorMap & (string | {});
  variant?: keyof typeof variantStyles;
  color?: keyof typeof colorStyles;
}) {
  return (
    <span
      className={clsx(
        "font-mono text-[0.625rem] font-semibold leading-6",
        variantStyles[variant],
        colorStyles[color][variant],
      )}
    >
      {children}
    </span>
  );
}
