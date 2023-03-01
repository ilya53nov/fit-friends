import { LevelTrainingEnum } from "./level-training.enum";
import { LocationEnum } from "./location.enum";
import { RoleEnum } from "./role.enum";
import { SexEnum } from "./sex.enum";
import { TimeTrainingEnum } from "./time-training.enum";
import { TypeTrainingEnum } from "./type-training.enum";

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  avatar: string;
  password: string;
  sex: SexEnum;
  dateBirth: Date;
  role: RoleEnum;
  locationDefault: LocationEnum;
  createdAt: Date;

  levelTraining: LevelTrainingEnum;
  typeTraining: TypeTrainingEnum[];

  timeTraining: TimeTrainingEnum;
  caloriesResetCount: number;
  caloriesSpendPerDayCount: number;
  isReadyUser: boolean;

  comment: string;

  certificate: string;
  isReadyCoach: boolean;

}
