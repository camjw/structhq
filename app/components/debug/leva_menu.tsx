import React from "react";

import { isInEasterEggModeAtom } from "@/state/debug";
import { Leva } from "leva";
import { useRecoilValue } from "recoil";

export const LevaMenu = () => {
  const isInEasterEggMode = useRecoilValue(isInEasterEggModeAtom);

  return (
    <div className="absolute top-8 left-1/2 z-[10001]">
      <Leva hidden={!isInEasterEggMode} fill collapsed />
    </div>
  );
};
