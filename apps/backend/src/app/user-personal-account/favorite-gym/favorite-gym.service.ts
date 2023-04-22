import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { FavoriteGymRepository } from './favorite-gym.repository';
import { FavoriteGymDescription } from './favorite-gym.constants';

@Injectable()
export class FavoriteGymService {
  constructor(private readonly favoriteGymRepository: FavoriteGymRepository) {}
  
  public async create(userId: string, gymId: string) {
    const findedFavoriteGym = await this.favoriteGymRepository.findById(userId, gymId);

    if (findedFavoriteGym) {
      throw new ConflictException(FavoriteGymDescription.FoundFavorite);
    }

    return await this.favoriteGymRepository.create(userId, gymId);
  }

  public async findAll(userId: string) {
    return await this.favoriteGymRepository.findAll(userId);
  }

  public async delete(userId: string, gymId: string) {
    const findedFavoriteGym = await this.favoriteGymRepository.findById(userId, gymId);

    if (!findedFavoriteGym) {
      throw new NotFoundException(FavoriteGymDescription.NotFoundFavorite);
    }

    await this.favoriteGymRepository.delete(findedFavoriteGym.id);
  }
}
