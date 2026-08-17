import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WatchesControllerController } from './watches-controller/watches-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, WatchesControllerController],
  providers: [AppService],
})
export class AppModule {}
