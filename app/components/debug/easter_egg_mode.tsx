import React from "react";

import { isInEasterEggModeAtom } from "@/state/debug";
import Konami from "react-konami-code";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const EasterEggMode = () => {
  const setIsInEasterEggMode = useSetRecoilState(isInEasterEggModeAtom);
  const isInEasterEggMode = useRecoilValue(isInEasterEggModeAtom);

  return (
    <Konami
      key={isInEasterEggMode ? "easter-egg-mode" : "normal-mode"} // This is a hack to force the component to re-render when the easter egg mode changes so we can deactivate the easter egg mode
      action={() => {
        setIsInEasterEggMode(!isInEasterEggMode);
      }}
    />
  );
};
