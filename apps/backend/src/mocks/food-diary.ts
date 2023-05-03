import { FoodDiaryApiProperty } from "@fit-friends/shared-description-property";
import { CreateFoodDiaryDto, UpdateFoodDiaryDto } from "@fit-friends/shared-dto";
import { FoodDiaryInterface } from "@fit-friends/shared-types";

const createFoodDiaryDto: CreateFoodDiaryDto = {
  caloriesCount: FoodDiaryApiProperty.CaloriesCount.example,
  date: FoodDiaryApiProperty.Date.example,
  foodType: FoodDiaryApiProperty.FoodType.example,
}

const updateFoodDiaryDto: UpdateFoodDiaryDto = {
  caloriesCount: FoodDiaryApiProperty.CaloriesCount.example,
  date: FoodDiaryApiProperty.Date.example,
  foodType: FoodDiaryApiProperty.FoodType.example,
}

const foodDiary: FoodDiaryInterface = {
  caloriesCount: FoodDiaryApiProperty.CaloriesCount.example,
  date: FoodDiaryApiProperty.Date.example,
  foodType: FoodDiaryApiProperty.FoodType.example,
  userId: FoodDiaryApiProperty.UserId.example,
  id: FoodDiaryApiProperty.Id.example,
}

export const FoodDiaryMock = {
  CreateFoodDiaryDto: createFoodDiaryDto,
  UpdateFoodDiaryDto: updateFoodDiaryDto,
  FoodDiary: foodDiary,
}
