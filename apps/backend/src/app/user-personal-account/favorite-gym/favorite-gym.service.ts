import { Injectable } from '@nestjs/common';
import { CreateFavoriteGymDto } from './dto/create-favorite-gym.dto';
import { UpdateFavoriteGymDto } from './dto/update-favorite-gym.dto';

@Injectable()
export class FavoriteGymService {
  create(createFavoriteGymDto: CreateFavoriteGymDto) {
    return 'This action adds a new favoriteGym';
  }

  findAll() {
    return `This action returns all favoriteGym`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoriteGym`;
  }

  update(id: number, updateFavoriteGymDto: UpdateFavoriteGymDto) {
    return `This action updates a #${id} favoriteGym`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoriteGym`;
  }
}
