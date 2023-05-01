import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { GymsRepository } from './gyms.repository';

@Module({
  controllers: [GymsController],
  providers: [GymsService, GymsRepository],
})
export class GymsModule {}
