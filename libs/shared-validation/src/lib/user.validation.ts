import { ExerciseDurationEnum, ExerciseLevelEnum, ExerciseTypeEnum, LocationEnum, RoleEnum, UserGenderEnum } from '@fit-friends/shared-types'

const enum NameLength {
  Min = 1,
  Max = 15
}

const enum PasswordLength {
  Min = 6,
  Max = 12,
}

export const UserValidation = {
  Name: {
    Length: {
      min: NameLength.Min,
      max: NameLength.Max,
      message: `Минимальная длина имени: ${NameLength.Min}, максимальная: ${NameLength.Max} (символов)`,
    },
    SymbolsPattern: /[a-zA-Zа-яА-яеЁ\s]+$/,
  },    
  Avatar: {
    fileType: /image\/(jpeg|png)$/,
    maxSize: 1024 * 1024,
  },
  PasswordLength: {
    min: PasswordLength.Min,
    max: PasswordLength.Max,
    message: `Минимальная длина пароля: ${PasswordLength.Min}, максимальная: ${PasswordLength.Max} (символов)`
  },
  Gender: UserGenderEnum,
  Role: RoleEnum,
  Location: LocationEnum,
  ExerciseLevel: ExerciseLevelEnum,
  ExerciseType: {
    items: ExerciseTypeEnum,
    maxCount: 3,
  },
  DurationTraining: ExerciseDurationEnum,
  CaloriesResetCount: {
    min: 1000,
    max: 5000,
  },
  CaloriesSpendPerDayCount: {
    min: 1000,
    max: 5000,
  },
  Certificate: {
    fileType: /application\/pdf$/,
  },
  CommentLength: {
    min: 10,
    max: 140,
  },
}
