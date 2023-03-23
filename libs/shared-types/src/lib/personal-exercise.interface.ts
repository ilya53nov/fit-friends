import { PersonalExerciseStatusEnum } from "./personal-exercise-status.enum";
import { SportsmanInterface, UserType } from "./user.interface";

export interface PersonalExerciseInterface {
  initiator: SportsmanInterface;
  user: UserType;
  createdAt: Date;
  udatedAt: Date;
  status: PersonalExerciseStatusEnum;
}
