import { UserBalanceApiProperty } from '@fit-friends/shared-description-property';
import { UpdateUserBalanceDto } from '@fit-friends/shared-dto';
import { UserBalanceInterface } from '@fit-friends/shared-types';

const updateUserBalanceDto: UpdateUserBalanceDto = {
  count: UserBalanceApiProperty.Count.example,
  purchaseType: UserBalanceApiProperty.PurchaseType.example,
}

const userBalance: UserBalanceInterface = {
  count: UserBalanceApiProperty.Count.example,
  purchaseType: UserBalanceApiProperty.PurchaseType.example,
  userId: UserBalanceApiProperty.UserId.example,
  id: UserBalanceApiProperty.Id.example,
}

export const BalanceMock = {
  UpdateUserBalanceDto: updateUserBalanceDto,
  UserBalance: userBalance,
}
