import { ExerciseLevelEnum } from "./exercise-level.enum";
import { LocationEnum } from "./location.enum";
import { RoleEnum } from "./role.enum";
import { UserGenderEnum } from "./user-gender.enum";
import { ExerciseDurationEnum } from "./exercise-duration.enum";
import { ExerciseTypeEnum } from "./exercise-type.enum";

export interface BaseUserInterface {
  id: string;
  name: string;
  email: string;
  avatar: string;
  password: string;
  gender: UserGenderEnum;
  dateBirth: Date;
  role: RoleEnum;
  locationDefault: LocationEnum;
  createdAt: Date;
  exerciseLevel: ExerciseLevelEnum;
  exerciseTypes: ExerciseTypeEnum[]; 
}

export interface UserInterface extends BaseUserInterface {
  durationTraining: ExerciseDurationEnum;
  caloriesResetCount: number;
  caloriesSpendPerDayCount: number;
  isReadyUser: boolean;  
}

export interface CoachInterface extends BaseUserInterface {
  comment: string;
  certificate: string;
  isReadyCoach: boolean;
}
