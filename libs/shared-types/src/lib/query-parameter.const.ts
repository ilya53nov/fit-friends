export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export const QueryParameter = {
  DefaultExerciseCountLimit: 50,
  Separator: {
    array: ',',
    range: '-',
  },
  MaxCountInRange: 2,
  IndexInRange: {
    gte: 0,
    lte: 1,
  },
  DefaultSortDirection: SortDirection.Desc,
}
