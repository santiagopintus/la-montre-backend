import { Brand } from '@prisma/client';
import { BrandService } from './brand.service';
export declare class BrandsController {
    private readonly brandService;
    constructor(brandService: BrandService);
    findAll(): Promise<Brand[]>;
}
