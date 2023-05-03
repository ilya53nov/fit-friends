import { Injectable } from '@nestjs/common';
import { BalanceRepository } from './balance.repository';
import { UpdateUserBalanceDto } from '@fit-friends/shared-dto';
import { fillObject } from '@fit-friends/core';
import { UserBalanceRdo } from '@fit-friends/shared-rdo';

@Injectable()
export class BalanceService {
  constructor(private readonly balanceRepository: BalanceRepository) {}
  
  public async findAll(userId: string) {
    const findedAll = await this.balanceRepository.findAll(userId);

    return findedAll.map((item) => fillObject(UserBalanceRdo, item));
  }

  public async increment(userId: string, updateUserBalanceDto: UpdateUserBalanceDto) {
    const finded = await this.balanceRepository.findByType(userId, updateUserBalanceDto.purchaseType);

    finded
    ? this.balanceRepository.increment(finded.id, updateUserBalanceDto.count)
    : this.balanceRepository.create(userId,updateUserBalanceDto);
  }

  public async decrement(userId: string, updateUserBalanceDto: UpdateUserBalanceDto) {
    const finded = await this.balanceRepository.findByType(userId, updateUserBalanceDto.purchaseType);

    finded
    ? this.balanceRepository.decrement(finded.id, updateUserBalanceDto.count)
    : this.balanceRepository.create(userId,updateUserBalanceDto);
  }
}
