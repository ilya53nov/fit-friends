export const NotificationApiProperty = {
  Id: {
    description: 'Уникальный индификатор уведомления',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',     
  },
  UserId: {
    description: 'Уникальный индификатор пользователя',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',        
  },
  CreatedAt: {
    description: 'Дата создания уведомления',
    example: '2023-03-22T16:29:03.561Z',  
  },
  Text: {
    description: 'Текст уведомления',
    example: 'Алина добавила вас в друзья', 
  }
} as const
