import { UserType } from "./user.interface";

export interface NotificationInterface {
  createdAt: Date;
  user: UserType;
  text: string;
}
