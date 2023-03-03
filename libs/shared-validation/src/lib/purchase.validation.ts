import { PaymentMethodEnum, PurchaseTypeEnum } from "@fit-friends/shared-types";

export const PurchaseValidation = {
  PurchaseType: PurchaseTypeEnum,
  CountExercise: {
    min: 1,
    max: 50,
  },
  PaymentMethod: PaymentMethodEnum,
}
