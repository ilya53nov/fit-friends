import { ExerciseInterface } from "./exercise.interface";
import { GymInterface } from "./gym.interface";
import { PaymentMethodEnum } from "./payment-method.enum";
import { PurchaseTypeEnum } from "./purchase-type.enum";

export interface PurchaseInterface {
  id?: string;
  purchaseType: string;
  exerciseId: string;
  userId: string;
  priceExercise: number;
  countExercise: number;
  sum: number;
  paymentMethod: string;
  createdAt?: Date;
}
