import { Controller, Get } from '@nestjs/common';
import { Watch } from '@prisma/client';
import { WatchService } from './watch.service';

@Controller('watches')
export class WatchesController {
  constructor(private readonly watchService: WatchService) {}

  @Get()
  findAll(): Promise<Watch[]> {
    return this.watchService.watches({});
  }
}
