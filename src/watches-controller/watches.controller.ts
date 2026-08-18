import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Watch } from '@prisma/client';
import { WatchService } from './watch.service';

@Controller('watches')
export class WatchesController {
  constructor(private readonly watchService: WatchService) {}

  @Get()
  findAll(): Promise<Watch[]> {
    return this.watchService.watches({});
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Watch> {
    const watch = await this.watchService.watch({ id });
    if (!watch) {
      throw new NotFoundException(`Watch with id ${id} not found`);
    }
    return watch;
  }
}
