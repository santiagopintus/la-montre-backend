import { Watch, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class WatchService {
    private prisma;
    constructor(prisma: PrismaService);
    watch(watchWhereUniqueInput: Prisma.WatchWhereUniqueInput): Promise<Watch | null>;
    watches(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.WatchWhereUniqueInput;
        where?: Prisma.WatchWhereInput;
        orderBy?: Prisma.WatchOrderByWithRelationInput;
    }): Promise<Watch[]>;
}
