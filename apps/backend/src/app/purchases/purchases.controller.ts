import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PurchaseRdo } from '@fit-friends/shared-rdo';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParametrKey, RoleEnum } from '@fit-friends/shared-types';
import { CreatePurchaseDto } from '@fit-friends/shared-dto';

@ApiTags(ApiRouteEnum.Purchases)
@Controller(ApiRouteEnum.Purchases)
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @ApiResponse({
    type: PurchaseRdo,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post(ParametrKey.Rout)
  public async create(
    @GetUser(ParametrKey.Id) userId: string,
    @Param(ParametrKey.Id) exerciseId: string,
    @Body() createPurchaseDto: CreatePurchaseDto,
  ) {
    return await this.purchasesService.create(createPurchaseDto, exerciseId, userId);
  }

  @Roles(RoleEnum.Coach)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(
    @GetUser(ParametrKey.Id) coachId: string,
  ) {
    return await this.purchasesService.findAll(coachId);
  }



}
