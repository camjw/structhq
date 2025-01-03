import * as React from "react";

import { cn } from "@/lib/utils";

import { FormField, FormFieldInputProps } from "./form";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  FormFieldInputProps & {
    wrapperClassName?: string;
    isResizable?: boolean;
    minHeightPx?: number;
    maxHeightPx?: number;
  };

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error,
      name,
      id,
      label,
      tooltip,
      message,
      wrapperClassName,
      value,
      isResizable = true,
      minHeightPx = 80,
      maxHeightPx,
      ...props
    },
    ref,
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    const [dimensions, setDimensions] = React.useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    React.useEffect(() => {
      if (!isResizable) {
        return;
      }

      if (!textareaRef.current || !dimensions) {
        return;
      }

      const text = textareaRef.current;
      text.style.height = "auto";

      const newHeight = maxHeightPx
        ? Math.min(maxHeightPx, text.scrollHeight + 3)
        : text.scrollHeight + 3;
      text.style.height = newHeight + "px";
    }, [textareaRef, value, dimensions, isResizable, maxHeightPx]);

    const handleResize = React.useCallback(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, [setDimensions]);

    React.useEffect(() => {
      if (!isResizable) {
        return;
      }

      window.addEventListener("resize", handleResize, false);

      return () => {
        window.removeEventListener("resize", handleResize, false);
      };
    }, [handleResize, isResizable]);

    return (
      <FormField
        {...{ error, name, label, tooltip, message }}
        className={wrapperClassName}
      >
        <textarea
          className={cn(
            "flex py-2 px-3 w-full rounded-md text-sm outline-none placeholder:text-gray-9 border focus:border-primary-10 focus:ring-0 focus:outline-none text-gray-12 border-gray-4 shadow-sm transition-all disabled:text-gray-8 disabled:placeholder:text-gray-8 disabled:bg-gray-3 disabled:border-gray-4",
            isResizable && "resize-none",
            error && "bg-red-3 border-red-9",
            className,
          )}
          style={{
            minHeight: minHeightPx,
          }}
          name={name}
          id={id ?? name}
          ref={(r) => {
            textareaRef.current = r;

            if (typeof ref === "function") {
              ref(r);
            } else if (ref) {
              ref.current = r;
            }
          }}
          value={value}
          {...props}
        />
      </FormField>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
