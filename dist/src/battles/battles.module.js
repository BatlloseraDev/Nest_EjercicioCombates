"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlesModule = void 0;
const common_1 = require("@nestjs/common");
const battles_service_1 = require("./battles.service");
const battles_controller_1 = require("./battles.controller");
const jwt_1 = require("@nestjs/jwt");
const prisma_module_1 = require("../prisma/prisma.module");
const battles_gateway_1 = require("./battles.gateway");
const auth_module_1 = require("../auth/auth.module");
const config_1 = require("@nestjs/config");
const users_module_1 = require("../users/users.module");
const characters_module_1 = require("../characters/characters.module");
let BattlesModule = class BattlesModule {
};
exports.BattlesModule = BattlesModule;
exports.BattlesModule = BattlesModule = __decorate([
    (0, common_1.Module)({
        controllers: [battles_controller_1.BattlesController],
        providers: [battles_service_1.BattlesService, battles_gateway_1.BattlesGateway, config_1.ConfigService],
        imports: [
            jwt_1.JwtModule, prisma_module_1.PrismaModule, auth_module_1.AuthModule, users_module_1.UsersModule, characters_module_1.CharactersModule
        ],
        exports: [battles_service_1.BattlesService]
    })
], BattlesModule);
//# sourceMappingURL=battles.module.js.map