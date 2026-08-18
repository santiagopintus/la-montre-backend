import { Injectable } from '@nestjs/common';
import { Watch, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WatchService {
  constructor(private prisma: PrismaService) {}

  async watch(
    watchWhereUniqueInput: Prisma.WatchWhereUniqueInput,
  ): Promise<Watch | null> {
    return this.prisma.watch.findUnique({
      where: watchWhereUniqueInput,
    });
  }

  async watches(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.WatchWhereUniqueInput;
    where?: Prisma.WatchWhereInput;
    orderBy?: Prisma.WatchOrderByWithRelationInput;
  }): Promise<Watch[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.watch.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
