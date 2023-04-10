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
