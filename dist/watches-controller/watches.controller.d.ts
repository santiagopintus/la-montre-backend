import { Watch } from '@prisma/client';
import { WatchService } from './watch.service';
export declare class WatchesController {
    private readonly watchService;
    constructor(watchService: WatchService);
    findAll(): Promise<Watch[]>;
    findOne(id: number): Promise<Watch>;
}
