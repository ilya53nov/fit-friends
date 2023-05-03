import { FoodTypeEnum } from '@fit-friends/shared-types';

export const FoodDiaryApiProperty = {
  Id: {
    description: 'Уникальный индификатор дневника питания',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',     
  },
  UserId: {
    description: 'Уникальный индификатор пользователя',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',        
  },
  CaloriesCount: {
    description: 'Количество калорий',
    example: 1000, 
  },
  FoodType: {
    description: 'Вид приёма пищи',
    enum: FoodTypeEnum,
    example: 'обед',   
  },
  Date: {
    description: 'Дата приёма пищи',
    example: new Date('2023-03-22T16:29:03.561Z'),  
  }
}
