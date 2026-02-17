"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBattleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_battle_dto_1 = require("./create-battle.dto");
class UpdateBattleDto extends (0, mapped_types_1.PartialType)(create_battle_dto_1.CreateBattleDto) {
}
exports.UpdateBattleDto = UpdateBattleDto;
//# sourceMappingURL=update-battle.dto.js.map