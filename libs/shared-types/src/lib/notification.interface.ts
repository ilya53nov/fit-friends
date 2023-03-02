import { CoachInterface, UserInterface } from "./user.interface";

export interface NotificationInterface {
  createdAt: Date;
  user: UserInterface | CoachInterface;
  text: string;
}
