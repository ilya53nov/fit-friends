import { UserBalanceApiProperty } from "@fit-friends/shared-description-property";
import { UserBalanceValidation } from "@fit-friends/shared-validation";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber } from "class-validator";

export class UpdateUserBalanceDto {
  @ApiProperty(UserBalanceApiProperty.PurchaseType)
  @IsEnum(UserBalanceValidation.PurchaseType)
  public purchaseType!: string;

  @ApiProperty(UserBalanceApiProperty.Count)
  @IsNumber()
  public count!: number;
}
