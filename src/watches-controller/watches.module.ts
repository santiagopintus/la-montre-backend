import { Module } from '@nestjs/common';
import { WatchesController } from './watches.controller';
import { WatchService } from './watch.service';

@Module({
  controllers: [WatchesController],
  providers: [WatchService],
})
export class WatchesModule {}
