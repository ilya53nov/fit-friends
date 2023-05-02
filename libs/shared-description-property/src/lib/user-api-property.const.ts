import { ExerciseDurationEnum, ExerciseLevelEnum, ExerciseTypeEnum, LocationEnum, RoleEnum, UserGenderEnum } from '@fit-friends/shared-types'

export const UserApiProperty = {
  Id: {
    description: 'Уникальный индификатор пользователя',
    example: '02ad7c74-e86e-466f-a2ea-8bd0be15382b',    
  },
  Name: {
    description: 'Имя пользователя',
    example: 'Иван',
  },
  Email: {
    description: 'Электронная почта пользователя',
    example: 'user@user.ru',    
  },
  Avatar: {
    description: 'Аватар пользователя',
    example: 'smile.jpg',
  },
  Role: {
    description: 'Роль пользователя',
    enum: RoleEnum,
    example: 'Пользователь',
  },
  DateBirth: {
    description: 'Дата рождения пользователя',
    example: new Date('2023-03-22'),
  },
  Password: {
    description: 'Пароль пользователя',
    example: '123456',
  },
  NewPassword: {
    description: 'Новый пароль пользователя',
    example: '1234567',
  },
  Gender: {
    description: 'Пол пользователя',
    enum: UserGenderEnum,
    example: 'Мужской',
  },
  LocationDefault: {
    description: 'Станция метро',
    enum: LocationEnum,
    example: 'Петроградская',    
  },
  ExerciseLevel: {
    description: 'Уровень физической подготовки пользователя',
    enum: ExerciseLevelEnum,
    example: 'Любитель',     
  },
  ExerciseTypes: {
    description: 'Тип тренировок',
    enum: ExerciseTypeEnum,
    example: ['Бег', 'бокс'],         
  },
  DurationTraining: {
    description: 'Время на тренировку',
    enum: ExerciseDurationEnum,
    example: '30-50 мин',        
  },
  CaloriesResetCount: {
    description: 'Количество калорий для сброса',
    example: 5000,       
  },
  CaloriesSpendPerDayCount: {
    description: 'Количество калорий для траты в день',
    example: 1000,      
  },
  IsReadyUser: {
    description: 'Флаг готовности пользователя к приглашениям на тренировку',
    example: true,        
  },
  Comment: {
    description: 'Заслуги тренера',
    example: 'Самый лучший тренер',      
  },
  Certificate: {
    description: 'Сертификат',
    example: 'level-up.pdf',       
  },
  IsReadyCoach: {
    description: 'Флаг готовности проводить индивидуальные тренировки',
    example: true,      
  },
  CreatedAt: {
    description: 'Дата создания пользователя',
    example: new Date('2023-03-22T16:29:03.561Z'),      
  },
  AccessToken: {
    description: 'Токен доступа',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',         
  },
  RefreshToken: {
    description: 'Токен обновления доступа',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',         
  }
} 
