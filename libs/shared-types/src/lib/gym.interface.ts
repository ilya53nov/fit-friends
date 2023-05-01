import { GymTypeEnum } from "./gym-type.enum";
import { LocationEnum } from "./location.enum";

export interface GymInterface {
  id: number;
  title: string;
  location: LocationEnum;
  isVerified: boolean;
  types: GymTypeEnum[];
  images: string[];
  description: string;
  price: number;
  createdAt: Date;
}
