import { Test, TestingModule } from '@nestjs/testing';
import { WatchesControllerController } from './watches-controller.controller';

describe('WatchesControllerController', () => {
  let controller: WatchesControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchesControllerController],
    }).compile();

    controller = module.get<WatchesControllerController>(WatchesControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
