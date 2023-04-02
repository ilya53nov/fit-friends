import { PurchaseApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PurchaseRdo {
  @ApiProperty(PurchaseApiProperty.Id)
  @Expose()  
  id!: string;

  @ApiProperty(PurchaseApiProperty.PurchaseType)
  @Expose()  
  purchaseType!: string;

  @ApiProperty(PurchaseApiProperty.ExerciseId)
  @Expose()  
  exerciseId!: string;

  @ApiProperty(PurchaseApiProperty.PriceExercise)
  @Expose()  
  priceExercise!: number;

  @ApiProperty(PurchaseApiProperty.CountExercise)
  @Expose()  
  countExercise!: number;

  @ApiProperty(PurchaseApiProperty.Sum)
  @Expose()  
  sum!: number;

  @ApiProperty(PurchaseApiProperty.PaymentMethod)
  @Expose()  
  paymentMethod!: string;

  @ApiProperty(PurchaseApiProperty.CreatedAt)
  @Expose()  
  createdAt!: Date;
}
