import { ExerciseDurationEnum, ExerciseLevelEnum, ExerciseTypeEnum, LocationEnum, RoleEnum, UserGenderEnum } from '@fit-friends/shared-types'

const enum NameLength {
  Min = 1,
  Max = 15
}

const enum PasswordLength {
  Min = 6,
  Max = 12,
}

const enum ExerciseTypeCount {
  Min = 1,
  Max = 3,
}

const enum CaloriesResetCount {
  Min = 1000,
  Max = 5000,  
}

const enum CaloriesSpendPerDayCount {
  Min = 1000,
  Max = 5000,  
}

const enum CommentLength {
  Min = 10,
  Max = 140,  
}

export const UserValidation = {
  Name: {
    Length: {
      min: NameLength.Min,
      max: NameLength.Max,
      message: `Минимальная длина имени: ${NameLength.Min}, максимальная: ${NameLength.Max} (символов)`,
    },
    SymbolsPattern: '[a-zA-Zа-яА-яеЁ\\s]+$',
  },    
  Avatar: {
    fileType: /image\/(jpeg|png)$/,
    maxSize: 1024 * 1024,
  },
  PasswordLength: {
    min: PasswordLength.Min,
    max: PasswordLength.Max,
    message: `Минимальная длина пароля: ${PasswordLength.Min}, максимальная: ${PasswordLength.Max} (символов)`,
  },
  Gender: UserGenderEnum,
  Role: RoleEnum,
  Location: LocationEnum,
  ExerciseLevel: ExerciseLevelEnum,
  ExerciseType: {
    items: ExerciseTypeEnum,
    maxCount: ExerciseTypeCount.Max,
    message: `Минимальное количество типа тренировок: ${ExerciseTypeCount.Min}, максимальное: ${ExerciseTypeCount.Max}`,
  },
  DurationTraining: ExerciseDurationEnum,
  CaloriesResetCount: {
    min: CaloriesResetCount.Min,
    max: CaloriesResetCount.Max,
    message: `Минимальное количество калорий для сброса: ${CaloriesResetCount.Min}, максимальное: ${CaloriesResetCount.Max}`,
  },
  CaloriesSpendPerDayCount: {
    min: CaloriesSpendPerDayCount.Min,
    max: CaloriesSpendPerDayCount.Max,
    message: `Минимальное количество калорий в день: ${CaloriesSpendPerDayCount.Min}, максимальное: ${CaloriesSpendPerDayCount.Max}`,
  },
  Certificate: {
    fileType: /application\/pdf$/,
    message: 'Необходимо загрузить сертификат в формате PDF',
  },
  CommentLength: {
    min: CommentLength.Min,
    max: CommentLength.Max,
    message: `Минимальная длина комментария: ${CommentLength.Min}, максимальная: ${CommentLength.Max}`
  },
}
