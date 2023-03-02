import { PersonalExerciseStatusEnum } from "./personal-exercise-status.enum";
import { CoachInterface, UserInterface } from "./user.interface";

export interface PersonalExerciseInterface {
  initiator: UserInterface;
  user: UserInterface | CoachInterface;
  createdAt: Date;
  udatedAt: Date;
  status: PersonalExerciseStatusEnum;
}
