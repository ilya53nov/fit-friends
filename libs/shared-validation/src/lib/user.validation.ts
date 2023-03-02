import { ExerciseDurationEnum, ExerciseLevelEnum, ExerciseTypeEnum, LocationEnum, RoleEnum, UserGenderEnum } from '@fit-friends/shared-types'

export const UserValidation = {
  Name: {
    Length: {
      min: 1,
      max: 15,
    },
    //добавить проверку на "только буквы русского/английского алфавита"
    Avatar: {
      fileType: /image\/(jpeg|png)$/,
      maxSize: 1024 * 1024,
    },
    PasswordLength: {
      min: 6,
      max: 12,
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
    }
  }
}
