import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { BalanceRepository } from './balance.repository';

@Module({
  controllers: [BalanceController],
  providers: [BalanceService, BalanceRepository],
})
export class BalanceModule {}
