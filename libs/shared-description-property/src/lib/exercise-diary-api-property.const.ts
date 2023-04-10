export const ExerciseDiaryApiProperty = {
  Id: {
    description: 'Уникальный индификатор дневника тренировки',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',       
  },
  UserId: {
    description: 'Уникальный индификатор пользователя',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',     
  },
  ExerciseId: {
    description: 'Уникальный индификатор тренировки',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',        
  },
  CaloriesSpentCount: {
    description: 'Количество потраченных калорий',
    example: '1000',      
  },
  TimeSpentExercise: {
    description: 'Время, затраченное на тренировку',
    example: '90',      
  },
  Date: {
    description: 'Дата тренировки',
    example: '2023-03-22T16:29:03.561Z',     
  }
} as const