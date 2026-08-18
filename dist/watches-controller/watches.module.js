"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchesModule = void 0;
const common_1 = require("@nestjs/common");
const watches_controller_1 = require("./watches.controller");
const watch_service_1 = require("./watch.service");
let WatchesModule = class WatchesModule {
};
exports.WatchesModule = WatchesModule;
exports.WatchesModule = WatchesModule = __decorate([
    (0, common_1.Module)({
        controllers: [watches_controller_1.WatchesController],
        providers: [watch_service_1.WatchService],
    })
], WatchesModule);
//# sourceMappingURL=watches.module.js.map