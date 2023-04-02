import { PurchaseApiProperty } from '@fit-friends/shared-description-property';
import { PurchaseValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsUUID } from 'class-validator';

export class CreatePurchaseDto {
  @ApiProperty(PurchaseApiProperty.PurchaseType)
  @IsEnum(PurchaseValidation.PurchaseType)
  purchaseType!: string;

  //@ApiProperty(PurchaseApiProperty.UserId)
  //@IsUUID()  
  //userId!: string;

  @ApiProperty(PurchaseApiProperty.CountExercise)
  @IsNumber()
  countExercise!: number;

  @ApiProperty(PurchaseApiProperty.PaymentMethod)
  @IsEnum(PurchaseValidation.PaymentMethod)  
  paymentMethod!: string;
}
