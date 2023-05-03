import { UserBalanceApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserBalanceRdo {
  @ApiProperty(UserBalanceApiProperty.Id)
  @Expose()
  id!: string;

  @ApiProperty(UserBalanceApiProperty.PurchaseType)
  @Expose()
  purchaseType!: string;

  @ApiProperty(UserBalanceApiProperty.Count)
  @Expose()
  count!: number;

  @ApiProperty(UserBalanceApiProperty.UserId)
  @Expose()
  userId!: string;  
}
