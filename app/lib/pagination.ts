export type PageNumberPagination<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

type EmptyPageNumberPagination = {
  detail: string;
};

export type MaybePageNumberPagination<T> =
  | PageNumberPagination<T>
  | EmptyPageNumberPagination;

export class PaginationUtils {
  public static hasValue<T>(
    pagination: MaybePageNumberPagination<T>,
  ): pagination is PageNumberPagination<T> {
    return "results" in pagination;
  }
}
