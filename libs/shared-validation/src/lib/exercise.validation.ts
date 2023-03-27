import { ExerciseDurationEnum, ExerciseGenderEnum, ExerciseLevelEnum, ExerciseTypeEnum } from "@fit-friends/shared-types";

export const ExerciseValidation = {
  TitleLength: {
    min: 1,
    max: 15,
  },
  Image: {
    fileType: /image\/(jpeg|png)$/,
  },
  Level: ExerciseLevelEnum,
  ExerciseType: ExerciseTypeEnum,
  DurationTraining: ExerciseDurationEnum,
  PriceMin: 0,
  Rating: {
    min: 1,
    max: 5,
  },
  CaloriesCount: {
    min: 1000,
    max: 5000,
  },
  DescriptionLength: {
    min: 10,
    max: 140,
  },
  Gender: ExerciseGenderEnum,
  Video: {
    fileType: /video\/(mp4|quicktime|x-msvideo)$/,
  },
}
