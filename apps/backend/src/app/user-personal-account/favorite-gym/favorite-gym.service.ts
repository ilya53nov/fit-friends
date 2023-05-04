import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { FavoriteGymRepository } from './favorite-gym.repository';
import { FavoriteGymDescription } from './favorite-gym.constants';
import { fillObject } from '@fit-friends/core';
import { FavoriteGymRdo, GymRdo } from '@fit-friends/shared-rdo';
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

    const gymsId = [].concat(...favoriteGyms.map((item) => item.gymId));

    const gyms = await this.gymsService.findManyById(gymsId);

    return gyms.map((item) => fillObject(GymRdo, item));
  }

  public async delete(userId: string, gymId: number) {
    const findedFavoriteGym = await this.favoriteGymRepository.findById(userId, gymId);

    if (!findedFavoriteGym) {
      throw new NotFoundException(FavoriteGymDescription.NotFoundFavorite);
    }

    await this.favoriteGymRepository.delete(findedFavoriteGym.id);
  }
}
