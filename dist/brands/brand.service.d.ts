import { Brand, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class BrandService {
    private prisma;
    constructor(prisma: PrismaService);
    brands(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.BrandWhereUniqueInput;
        where?: Prisma.BrandWhereInput;
        orderBy?: Prisma.BrandOrderByWithRelationInput;
    }): Promise<Brand[]>;
}
