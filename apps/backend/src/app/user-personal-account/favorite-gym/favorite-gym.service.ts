import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { FavoriteGymRepository } from './favorite-gym.repository';
import { FavoriteGymDescription } from './favorite-gym.constants';
import { fillObject } from '@fit-friends/core';
import { FavoriteGymRdo } from '@fit-friends/shared-rdo';
import { GymsService } from '../../gyms/gyms.service';

@Injectable()
export class FavoriteGymService {
  constructor(
    private readonly favoriteGymRepository: FavoriteGymRepository,
    private readonly gymsService: GymsService
  ) {}
  
  public async create(userId: string, gymId: number) {
    const gym = await this.gymsService.findById(gymId);

    if (!gym) {
      throw new NotFoundException(FavoriteGymDescription.NotFoundGym);
    }

    const findedFavoriteGym = await this.favoriteGymRepository.findById(userId, gymId);

    if (findedFavoriteGym) {
      throw new ConflictException(FavoriteGymDescription.FoundFavorite);
    }

    const newFavoriteGym = await this.favoriteGymRepository.create(userId, gymId);

    return fillObject(FavoriteGymRdo, newFavoriteGym);
  }

  public async findAll(userId: string) {
    const favoriteGyms = await this.favoriteGymRepository.findAll(userId);

    return favoriteGyms.map((item) => fillObject(FavoriteGymRdo, item));
  }

  public async delete(userId: string, gymId: number) {
    const findedFavoriteGym = await this.favoriteGymRepository.findById(userId, gymId);

    if (!findedFavoriteGym) {
      throw new NotFoundException(FavoriteGymDescription.NotFoundFavorite);
    }

    await this.favoriteGymRepository.delete(findedFavoriteGym.id);
  }
}
