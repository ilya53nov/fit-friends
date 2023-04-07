import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  UseGuards,
  Query,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { PurchaseRdo } from '@fit-friends/shared-rdo';
import { AccessTokenGuard, BaseQuery, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { CreatePurchaseDto } from '@fit-friends/shared-dto';
import { PurchasesApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.Purchases)
@Controller(ApiRouteEnum.Purchases)
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @ApiOperation({summary: PurchasesApiOperation.Create})
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
  @Post(ParameterKey.Rout)
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) exerciseId: string,
    @Body() createPurchaseDto: CreatePurchaseDto,
  ) {
    return await this.purchasesService.create(createPurchaseDto, exerciseId, userId);
  }

  @ApiOperation({summary: PurchasesApiOperation.FindAll})
  @ApiQuery({schema: {example: getSchemaPath(BaseQuery)}, required: false})
  @Roles(RoleEnum.Coach)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(
    @GetUser(ParameterKey.Id) coachId: string,
    @Query() query: BaseQuery,
  ) {
    return await this.purchasesService.findAll(coachId, query);
  }



}
