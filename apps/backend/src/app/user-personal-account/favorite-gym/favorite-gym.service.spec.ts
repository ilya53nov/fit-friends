import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteGymService } from './favorite-gym.service';

describe('FavoriteGymService', () => {
  let service: FavoriteGymService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteGymService],
    }).compile();

    service = module.get<FavoriteGymService>(FavoriteGymService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
