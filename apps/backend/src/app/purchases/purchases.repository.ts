import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PurchaseEntity } from './purchases.entity';

@Injectable()
export class PurchasesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: PurchaseEntity) {
    const entityData = item.toObject();

    return await this.prisma.purchase.create({
      data: {...entityData},
    })
  }


}
