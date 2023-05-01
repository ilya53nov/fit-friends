import {
  Controller,
  Get,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { GymsService } from './gyms.service';
import { AccessTokenGuard } from '@fit-friends/core';
import { ApiRouteEnum } from '@fit-friends/shared-types';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GymsApiOperation } from '@fit-friends/shared-description-operation';
import { GymRdo } from '@fit-friends/shared-rdo';

@ApiTags(ApiRouteEnum.Gyms)
@Controller(ApiRouteEnum.Gyms)
export class GymsController {
  constructor(private readonly gymsService: GymsService) {}

  @ApiOperation({summary: GymsApiOperation.FindAll})
  @ApiResponse({
    type: GymRdo,
    status: HttpStatus.OK
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN
  })
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll() {
    return await this.gymsService.findAll();
  }
  
}
