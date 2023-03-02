import { ExerciseInterface } from "./exercise.interface";
import { GymInterface } from "./gym.interface";
import { PaymentMethodEnum } from "./payment-method.enum";
import { PurchaseTypeEnum } from "./purchase-type.enum";

export interface PurchaseInterface {
  purchaseType: PurchaseTypeEnum;
  serviceType: ExerciseInterface | GymInterface;
  priceExercise: number;
  countExercise: number;
  sum: number;
  paymentMethod: PaymentMethodEnum;
  createdAt: Date;
}
