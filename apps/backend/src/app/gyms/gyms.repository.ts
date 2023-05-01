import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GymsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll() {
    return await this.prisma.gym.findMany();
  }
  
}
