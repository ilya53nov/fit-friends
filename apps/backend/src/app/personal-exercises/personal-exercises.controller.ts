import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { PersonalExercisesService } from './personal-exercises.service';
import { CreatePersonalExerciseDto, UpdatePersonalExerciseDto } from '@fit-friends/shared-dto';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonalExerciseRdo } from '@fit-friends/shared-rdo';
import { PersonalExercisesApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.PersonalExercises)
@Controller(ApiRouteEnum.PersonalExercises)
export class PersonalExercisesController {
  constructor(
    private readonly personalExercisesService: PersonalExercisesService
  ) {}

  @ApiOperation({summary: PersonalExercisesApiOperation.Create})
  @ApiResponse({
    type: PersonalExerciseRdo,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParameterKey.Id) initiatorId: string,
    @Body() createPersonalExerciseDto: CreatePersonalExerciseDto
  ) {
    return await this.personalExercisesService.create(initiatorId, createPersonalExerciseDto);
  }

  @ApiOperation({summary: PersonalExercisesApiOperation.Update})
  @ApiResponse({
    type: PersonalExerciseRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
  })
  @UseGuards(AccessTokenGuard)
  @Patch(ParameterKey.Rout)
  public async update(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) id: string,
    @Body() updatePersonalExerciseDto: UpdatePersonalExerciseDto
  ) {
    return await this.personalExercisesService.update(id, userId, updatePersonalExerciseDto);
  }

}
