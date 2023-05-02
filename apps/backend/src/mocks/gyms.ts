import { GymApiProperty } from "@fit-friends/shared-description-property";
import { GymInterface } from "@fit-friends/shared-types";

const gym: GymInterface = {
  createdAt: GymApiProperty.CreatedAt.example,
  description: GymApiProperty.Description.example,
  id: GymApiProperty.Id.example,
  images: GymApiProperty.Images.example,
  isVerified: GymApiProperty.IsVerified.example,
  location: GymApiProperty.Location.example,
  price: GymApiProperty.Price.example,
  title: GymApiProperty.Title.example,
  types: GymApiProperty.Types.example,
}

export const GymsMock = {
  Gym: gym,
}
