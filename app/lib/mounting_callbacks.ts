import React from "react";

type MountingCallbackProps = {
  callback: () => void;
};

export function UnmountCallback({ callback }: MountingCallbackProps) {
  React.useEffect(() => {
    return callback;
  }, [callback]);

  return null;
}

export function MountCallback({ callback }: MountingCallbackProps) {
  React.useEffect(() => {
    callback();
  }, [callback]);

  return null;
}
