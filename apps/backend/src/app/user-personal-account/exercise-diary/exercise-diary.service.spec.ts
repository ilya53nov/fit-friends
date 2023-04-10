import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDiaryService } from './exercise-diary.service';

describe('ExerciseDiaryService', () => {
  let service: ExerciseDiaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseDiaryService],
    }).compile();

    service = module.get<ExerciseDiaryService>(ExerciseDiaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
