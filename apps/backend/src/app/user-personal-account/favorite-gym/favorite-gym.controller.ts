import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FavoriteGymService } from './favorite-gym.service';
import { CreateFavoriteGymDto } from './dto/create-favorite-gym.dto';
import { UpdateFavoriteGymDto } from './dto/update-favorite-gym.dto';

@Controller('favorite-gym')
export class FavoriteGymController {
  constructor(private readonly favoriteGymService: FavoriteGymService) {}

  @Post()
  create(@Body() createFavoriteGymDto: CreateFavoriteGymDto) {
    return this.favoriteGymService.create(createFavoriteGymDto);
  }

  @Get()
  findAll() {
    return this.favoriteGymService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteGymService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavoriteGymDto: UpdateFavoriteGymDto
  ) {
    return this.favoriteGymService.update(+id, updateFavoriteGymDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteGymService.remove(+id);
  }
}
