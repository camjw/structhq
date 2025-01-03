import React from "react";

import usePrevious from "@/hooks/use_previous";
import { voidPaginationAtom } from "@/state/void";
import {
  RecoilState,
  useRecoilCallback,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

import { PageNumberPagination } from "@/lib/pagination";

export function useFetchPagination<T extends { id: string }>({
  queryString,
  paginatedQueryStringsAtom,
  paginatedAtomFamily,
  idLookupAtomFamily,
}: {
  queryString: string;
  paginatedQueryStringsAtom: RecoilState<string[]>;
  paginatedAtomFamily: (param: string) => RecoilState<PageNumberPagination<T>>;
  idLookupAtomFamily: (id: string) => RecoilState<T>;
}): PageNumberPagination<T> {
  const previousQueryString = usePrevious(queryString);

  const items = useRecoilValueLoadable(paginatedAtomFamily(queryString));

  const previousItems = useRecoilValue(
    previousQueryString
      ? paginatedAtomFamily(previousQueryString)
      : voidPaginationAtom,
  );

  const setQueryStrings = useSetRecoilState(paginatedQueryStringsAtom);

  const setIdLookupValue = useRecoilCallback(
    ({ set }) =>
      (item: T) => {
        if (idLookupAtomFamily) {
          set(idLookupAtomFamily(item.id), item);
        }
      },
    [idLookupAtomFamily],
  );

  React.useEffect(() => {
    setQueryStrings((currStrings) => {
      if (currStrings.includes(queryString)) return currStrings;

      return [...currStrings, queryString];
    });
  }, [queryString, setQueryStrings]);

  React.useEffect(() => {
    if (items.state !== "hasValue") {
      return;
    }

    for (const item of items?.contents.results || []) {
      setIdLookupValue(item);
    }
  }, [items, setIdLookupValue]);

  return items.state === "hasValue"
    ? items.contents
    : (previousItems as PageNumberPagination<T>);
}
