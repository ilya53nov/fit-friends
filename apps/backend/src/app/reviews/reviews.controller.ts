import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from '@fit-friends/shared-dto';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReviewsApiOperation } from '@fit-friends/shared-description-operation';
import { ReviewRdo } from '@fit-friends/shared-rdo';

@ApiTags(ApiRouteEnum.Reviews)
@Controller(ApiRouteEnum.Reviews)
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiOperation({summary: ReviewsApiOperation.Create})
  @ApiResponse({
    type: ReviewRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Body() createReviewDto: CreateReviewDto
  ) {
    return await this.reviewsService.create(userId, createReviewDto);
  }

  @ApiOperation({summary: ReviewsApiOperation.Get})
  @ApiResponse({
    type: ReviewRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @UseGuards(AccessTokenGuard)
  @Get(ParameterKey.Rout)
  public async findByExerciseId(@Param(ParameterKey.Id) exerciseId: string) {
    return this.reviewsService.findByExerciseId(exerciseId);
  }

}
