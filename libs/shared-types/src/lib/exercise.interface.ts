import { ExerciseDurationEnum } from "./exercise-duration.enum";
import { ExerciseGenderEnum } from "./exercise-gender.enum";
import { ExerciseLevelEnum } from "./exercise-level.enum";
import { ExerciseTypeEnum } from "./exercise-type.enum";
import { CoachInterface } from "./user.interface";

export interface ExerciseInterface {
  id: string;
  title: string;
  image: string;
  level: ExerciseLevelEnum;
  type: ExerciseTypeEnum;
  duration: ExerciseDurationEnum;
  price: number;
  caloriesCount: number;
  description: string;
  gender: ExerciseGenderEnum;
  video: string;
  rating: number;
  coach: CoachInterface;
  isSpecialOffer: boolean;
}
