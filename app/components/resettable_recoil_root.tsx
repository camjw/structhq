import React from "react";

import { RecoilRoot } from "recoil";

type ResetRecoilContextData = {
  resetRecoil: () => void;
};

const ResetRecoilContext = React.createContext<ResetRecoilContextData>(null!);

export function ResettableRecoilRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [recoilResetValue, setRecoilResetValue] = React.useState(0);

  const resetRecoil = React.useCallback(() => {
    setRecoilResetValue((v) => v + 1);
  }, [setRecoilResetValue]);

  return (
    <ResetRecoilContext.Provider value={{ resetRecoil }}>
      <RecoilRoot key={recoilResetValue}>{children}</RecoilRoot>
    </ResetRecoilContext.Provider>
  );
}

export function useResetRecoil() {
  const { resetRecoil } = React.useContext(ResetRecoilContext);
  return resetRecoil;
}
