"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlesService = void 0;
const common_1 = require("@nestjs/common");
let BattlesService = class BattlesService {
    create(createBattleDto) {
        return 'This action adds a new battle';
    }
    findAll() {
        return `This action returns all battles`;
    }
    findOne(id) {
        return `This action returns a #${id} battle`;
    }
    update(id, updateBattleDto) {
        return `This action updates a #${id} battle`;
    }
    remove(id) {
        return `This action removes a #${id} battle`;
    }
};
exports.BattlesService = BattlesService;
exports.BattlesService = BattlesService = __decorate([
    (0, common_1.Injectable)()
], BattlesService);
//# sourceMappingURL=battles.service.js.map