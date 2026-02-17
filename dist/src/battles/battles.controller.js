"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlesController = void 0;
const common_1 = require("@nestjs/common");
const battles_service_1 = require("./battles.service");
const create_battle_dto_1 = require("./dto/create-battle.dto");
const update_battle_dto_1 = require("./dto/update-battle.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
let BattlesController = class BattlesController {
    battlesService;
    constructor(battlesService) {
        this.battlesService = battlesService;
    }
    create(req, createBattleDto) {
        return this.battlesService.create(req.user.id, createBattleDto);
    }
    findAll(req) {
        return this.battlesService.findAllBattles(req.user.id);
    }
    findOne(id) {
        return this.battlesService.findOne(+id);
    }
    update(id, updateBattleDto) {
        return this.battlesService.update(+id, updateBattleDto);
    }
    remove(id) {
        return this.battlesService.remove(+id);
    }
};
exports.BattlesController = BattlesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_battle_dto_1.CreateBattleDto]),
    __metadata("design:returntype", void 0)
], BattlesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BattlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BattlesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_battle_dto_1.UpdateBattleDto]),
    __metadata("design:returntype", void 0)
], BattlesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BattlesController.prototype, "remove", null);
exports.BattlesController = BattlesController = __decorate([
    (0, common_1.Controller)('battles'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [battles_service_1.BattlesService])
], BattlesController);
//# sourceMappingURL=battles.controller.js.map