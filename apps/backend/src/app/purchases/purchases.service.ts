import { BaseQuery, fillObject } from '@fit-friends/core';
import { CreatePurchaseDto } from '@fit-friends/shared-dto';
import { PurchaseRdo } from '@fit-friends/shared-rdo';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ExercisesDescription } from '../exercises/exercises.constants';
import { ExercisesRepository } from '../exercises/exercises.repository';
import { ExercisesService } from '../exercises/exercises.service';
import { PurchaseEntity } from './purchases.entity';
import { PurchasesRepository } from './purchases.repository';

@Injectable()
export class PurchasesService {
  constructor(
    private readonly exercisesService: ExercisesService,
    private readonly purchasesRepository: PurchasesRepository,
    private readonly exercisesRepository: ExercisesRepository,
  ) {}  

  public async create(createPurchaseDto: CreatePurchaseDto, exerciseId: string, userId: string) {
    const existExercise = await this.exercisesService.findOne(exerciseId);

    if (!existExercise) {
      throw new NotFoundException(ExercisesDescription.NotFound);
    }

    const price = existExercise.price;
    const sum = price * createPurchaseDto.countExercise;

    const entity = await new PurchaseEntity({...createPurchaseDto, exerciseId, priceExercise: price, sum, userId });

    const newPurchase = await this.purchasesRepository.create(entity);

    return fillObject(PurchaseRdo, newPurchase);
  }

  public async findAll(coachId: string, query: BaseQuery) {
    return await this.exercisesRepository.getSoldExercises(coachId, query);
  }

}
