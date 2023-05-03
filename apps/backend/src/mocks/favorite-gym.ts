import { FavoriteGymApiProperty } from '@fit-friends/shared-description-property';
import { FavoriteGymInterface } from '@fit-friends/shared-types';

const  favoriteGym: FavoriteGymInterface = {
  gymId: FavoriteGymApiProperty.GymId.example,
  userId: FavoriteGymApiProperty.UserId.example,
  id: FavoriteGymApiProperty.Id.example,
}

export const FavoriteGymMock = {
  FavoriteGym: favoriteGym,
}
