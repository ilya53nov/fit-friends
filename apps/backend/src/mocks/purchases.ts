import { PurchaseApiProperty } from '@fit-friends/shared-description-property';
import { CreatePurchaseDto } from '@fit-friends/shared-dto';
import { PurchaseInterface } from '@fit-friends/shared-types';

const createPurchaseDto: CreatePurchaseDto = {
  countExercise: PurchaseApiProperty.CountExercise.example,
  paymentMethod: PurchaseApiProperty.PaymentMethod.example,
  purchaseType: PurchaseApiProperty.PurchaseType.example,
}

const purchase: PurchaseInterface = {
  countExercise: PurchaseApiProperty.CountExercise.example,
  exerciseId: PurchaseApiProperty.ExerciseId.example,
  paymentMethod: PurchaseApiProperty.PaymentMethod.example,
  priceExercise: PurchaseApiProperty.PriceExercise.example,
  purchaseType: PurchaseApiProperty.PurchaseType.example,
  sum: PurchaseApiProperty.Sum.example,
  userId: PurchaseApiProperty.UserId.example,
  createdAt: PurchaseApiProperty.CreatedAt.example,
  id: PurchaseApiProperty.Id.example,
}

export const PurchasesMock = {
  CreatePurchaseDto: createPurchaseDto,
  Purchase: purchase,
}
