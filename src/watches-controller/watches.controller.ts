import { Controller, Get } from '@nestjs/common';

@Controller('watches')
export class WatchesController {
  @Get()
  findAll(): string {
    return 'This action returns all watches';
  }
}
