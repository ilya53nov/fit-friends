export enum ExercisesDescription {
  NotFound = 'Тренировка не найдена',
  NotOwner = 'Вы не являетесь владельцем данной тренировки',
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export const ExercisesQueryParametr = {
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
