import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GymsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll() {
    return await this.prisma.gym.findMany();
  }

  public async findById(id: number) {
    return await this.prisma.gym.findFirst({
      where: {
        id,
      }
    });
  }  
  
}
