"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

import { useToast } from "@/hooks/use_toast";

import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        icon,
        title,
        description,
        actions,
        className,
        ...props
      }) {
        return (
          <Toast
            key={id}
            {...props}
            className={cn("flex items-start", className)}
          >
            {icon && <div>{icon}</div>}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {actions && <div className="flex gap-2">{actions}</div>}
            </div>
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
