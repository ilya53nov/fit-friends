import { Module } from '@nestjs/common';
import { FavoriteGymService } from './favorite-gym.service';
import { FavoriteGymController } from './favorite-gym.controller';
import { FavoriteGymRepository } from './favorite-gym.repository';

@Module({
  controllers: [FavoriteGymController],
  providers: [FavoriteGymService, FavoriteGymRepository],
})
export class FavoriteGymModule {}
