import { Controller, Get } from '@nestjs/common';
import { Brand } from '@prisma/client';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  findAll(): Promise<Brand[]> {
    return this.brandService.brands({});
  }
}
