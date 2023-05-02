import { BaseQuery } from "@fit-friends/core";
import { SortDirection } from "@fit-friends/shared-types";

enum Default {
  Limit = 5,
  Page = 1,
}

export const QueryMock: BaseQuery = {
  limit: Default.Limit,
  page: Default.Page,
  sortDirection: SortDirection.Asc,
}
