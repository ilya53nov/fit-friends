export const PersonalExerciseApiProperty = {
  Id: {
    description: 'Уникальный индификатор заявки на персональную тренировку',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',   
  },
  InitiatorId: {
    description: 'Уникальный индификатор инициатора',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',   
  },
  UserId: {
    description: 'Уникальный индификатор пользователя',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',   
  },
  CreatedAt: {
    description: 'Дата создания заявки на персональную тренировку',
    example: new Date('2023-03-22T16:29:03.561Z'),     
  },
  UpdatedAt: {
    description: 'Дата обновления заявки на персональную тренировку',
    example: new Date('2023-03-22T16:29:03.561Z'),     
  },
  Status: {
    description: 'Статус заявки',
    example: 'на рассмотрении',     
  },
} as const
