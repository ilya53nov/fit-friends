import { GymTypeEnum, LocationEnum } from '@fit-friends/shared-types';

export const GymApiProperty = {
  Id: {
    description: 'Уникальный индификатор зала',
    example: '1',      
  },
  Title:{
    description: 'Название зала',
    example: 'GRAND FITNESS',  
  },
  Location: {
    description: 'Локация зала',
    enum: LocationEnum,
    example: 'ст. м. Пионерская',       
  },
  IsVerified: {
    description: 'Признак верификации зала',
    example: 'true',     
  },
  Types: {
    description: 'Параметры зала',
    enum: GymTypeEnum,
    example: 'бесплатная парковка',      
  },
  Images: {
    description: 'Изображение зала',
    example: 'gym-01.jpg',      
  },
  Description: {
    description: 'Описание зала',
    example: 'Спортивный комплекс премиум-класса с 3 видами сауны, бассейном длинной 54 м., услугами массажиста и большой парковкой.',       
  },
  Price: {
    description: 'Стоимость тренировки',
    example: '1000',    
  },
  CreatedAt: {
    description: 'Дата создания',
    example: '12023-03-22T16:29:03.561Z000',      
  }
} as const
