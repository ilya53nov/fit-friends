import { Module } from '@nestjs/common';
import { FavoriteGymService } from './favorite-gym.service';
import { FavoriteGymController } from './favorite-gym.controller';

@Module({
  controllers: [FavoriteGymController],
  providers: [FavoriteGymService],
})
export class FavoriteGymModule {}
