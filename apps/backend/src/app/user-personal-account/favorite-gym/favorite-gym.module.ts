import { Module } from '@nestjs/common';
import { FavoriteGymService } from './favorite-gym.service';
import { FavoriteGymController } from './favorite-gym.controller';
import { FavoriteGymRepository } from './favorite-gym.repository';
import { GymsModule } from '../../gyms/gyms.module';
import { GymsService } from '../../gyms/gyms.service';
import { GymsRepository } from '../../gyms/gyms.repository';

@Module({
  imports: [GymsModule],
  controllers: [FavoriteGymController],
  providers: [FavoriteGymService, FavoriteGymRepository, GymsRepository, GymsService],
})
export class FavoriteGymModule {}
