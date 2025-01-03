import React, { useEffect } from "react";

import { useEffectDebugger } from "use-debugger-hooks";

type WindowProps = {
  url: string;
  title: string;
  width: number;
  height: number;
};

type PopupWindowProps = WindowProps & {
  onClose?: () => void;
  isComplete: (params: URLSearchParams) => boolean;
  onComplete: (params: URLSearchParams) => Promise<void>;
  isError: (params: URLSearchParams) => boolean;
  onError: (params: URLSearchParams) => Promise<void>;
};

function createPopup({ url, title, height, width }: WindowProps) {
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2.5;
  const externalPopup = window.open(
    url,
    title,
    `width=${width},height=${height},left=${left},top=${top}`,
  );

  return externalPopup;
}

export default function usePopupWindow({
  title,
  width,
  height,
  url,
  isComplete,
  onComplete,
  isError,
  onError,
  onClose,
}: PopupWindowProps) {
  const [externalWindow, setExternalWindow] = React.useState<Window | null>();
  const intervalRef = React.useRef<number>();

  const clearTimer = () => {
    window.clearInterval(intervalRef.current);
  };

  const openPopup = React.useCallback(() => {
    setExternalWindow(
      createPopup({
        url,
        title,
        width,
        height,
      }),
    );
  }, [url, title, width, height, setExternalWindow]);

  useEffect(() => {
    if (externalWindow) {
      intervalRef.current = window.setInterval(async () => {
        try {
          const currentUrl = externalWindow.location.href;

          const params = new URL(currentUrl).searchParams;
          const complete = isComplete(params);
          const error = isError(params);

          if (complete) {
            await onComplete(params);
            clearTimer();
            externalWindow.close();
          }

          if (error) {
            await onError(params);
            clearTimer();
            externalWindow.close();
          }
          return;
        } catch (error) {
          // eslint-ignore-line
        } finally {
          if (!externalWindow || externalWindow.closed) {
            if (onClose) {
              onClose();
            }

            clearTimer();
          }
        }
      }, 700);
    }

    return () => {
      if (externalWindow && !externalWindow.closed) {
        externalWindow.close();
      }

      // Check the window actually opened
      if (externalWindow && externalWindow.window) {
        if (onClose) {
          onClose();
        }
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalWindow, isComplete, isError]);

  return { openPopup };
}
