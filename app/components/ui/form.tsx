import React, { useMemo } from "react";

import { InfoCircleIcon } from "@/icons/outline/info-circle";
import { FormikErrors, FormikProps, FormikProvider } from "formik";

import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

type FormProps<T> = React.FormHTMLAttributes<HTMLFormElement> & {
  formik: FormikProps<T>;
};

export const formClasses = cn(
  "flex flex-col gap-12 w-full max-w-[45rem] mx-auto pb-8",
);

function Form<T>({ formik, children, className, ...props }: FormProps<T>) {
  return (
    <FormikProvider value={formik}>
      <form
        {...props}
        className={cn(formClasses, className)}
        onSubmit={formik.handleSubmit}
      >
        {children}
      </form>
    </FormikProvider>
  );
}

type FormFieldProps = {
  children?: React.ReactNode;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  name?: string;
  label?: React.ReactNode | string;
  tooltip?: React.ReactNode | string;
  message?: React.ReactNode | string;
  className?: string;
};

export type FormFieldInputProps = Omit<
  FormFieldProps,
  "children" | "className"
>;

const FormField = ({
  error,
  name,
  label,
  tooltip,
  message,
  children,
  className,
}: FormFieldProps) => {
  const errors = useMemo(() => {
    if (Array.isArray(error)) {
      return error;
    }
    if (typeof error === "string") {
      return [error];
    }
    return [];
  }, [error]);

  return (
    <div className={cn("w-full flex flex-col gap-1.5 relative", className)}>
      {(label || tooltip) && (
        <div className="flex justify-between gap-4 items min-h-[1rem]">
          <div className="flex flex-col gap-2">
            {label && <Label htmlFor={name}>{label}</Label>}
            {message && (
              <span className="text-gray-9 text-xs font-medium">{message}</span>
            )}
          </div>
          {tooltip && (
            <Tooltip>
              <TooltipTrigger>
                <InfoCircleIcon className="h-4 w-4 text-gray-8" />
              </TooltipTrigger>
              <TooltipContent side="right">{tooltip}</TooltipContent>
            </Tooltip>
          )}
        </div>
      )}
      {children}

      {errors.map((error, i) => (
        <div className="text-red-11 pl-0.5 flex gap-2" key={i}>
          <span className="text-xxs">{error as string}</span>
        </div>
      ))}
    </div>
  );
};

export { Form, FormField };
