import { atom } from "recoil";

import { PageNumberPagination } from "@/lib/pagination";

export const voidAtom = atom({
  default: null,
  key: "voidAtom",
});

export const voidPaginationAtom = atom<PageNumberPagination<unknown>>({
  default: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  key: "voidPaginationAtom",
});
