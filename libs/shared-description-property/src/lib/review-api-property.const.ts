export const ReviewApiProperty = {
  Id: {
    description: 'Уникальный индификатор отзыва',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',    
  },
  AuthorId: {
    description: 'Уникальный индификатор пользователя',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',       
  },
  ExerciseId: {
    description: 'Уникальный индификатор тренировки',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',   
  },
  Score: {
    description: 'Оценка',
    example: '5',    
  },
  Text: {
    description: 'Текст отзыва',
    example: 'Отличная тренировка!',   
  },
  CreatedAt: {
    description: 'Дата создания отзыва',
    example: '2023-03-22T16:29:03.561Z',    
  }
}
