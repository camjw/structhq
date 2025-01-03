import { localStorageEffect } from "@/state/effects";
import { atom } from "recoil";

export const chatSidebarOpenAtom = atom<boolean>({
  key: "chatSidebarOpen",
  default: true,
  effects: [localStorageEffect("chatSidebarOpen")],
});
