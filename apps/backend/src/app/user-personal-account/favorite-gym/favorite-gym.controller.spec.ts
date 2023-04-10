import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteGymController } from './favorite-gym.controller';
import { FavoriteGymService } from './favorite-gym.service';

describe('FavoriteGymController', () => {
  let controller: FavoriteGymController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteGymController],
      providers: [FavoriteGymService],
    }).compile();

    controller = module.get<FavoriteGymController>(FavoriteGymController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
