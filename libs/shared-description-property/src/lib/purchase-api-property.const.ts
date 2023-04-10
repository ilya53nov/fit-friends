export const PurchaseApiProperty = {
  Id: {
    description: 'Уникальный индификатор покупки',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',     
  },  
  CreatedAt: {
    description: 'Дата покупки',
    example: '2023-03-22T16:29:03.561Z',      
  },
  PurchaseType: {
    description: 'Вид покупки',
    example: 'тренировка',       
  },
  ExerciseId: {
    description: 'Уникальный индификатор тренировки',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',   
  },
  UserId:{
    description: 'Уникальный индификатор пользователя',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',      
  },
  PriceExercise: {
    description: 'Цена тренировки',
    example: '1000',   
  },
  CountExercise: {
    description: 'Количество',
    example: '2',  
  },
  Sum: {
    description: 'Сумма заказа',
    example: '2000',   
  },
  PaymentMethod: {
    description: 'Способ оплаты',
    example: 'visa',       
  }
} as const
