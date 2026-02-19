"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.BattleParticipantScalarFieldEnum = exports.BattleScalarFieldEnum = exports.UserCharacterScalarFieldEnum = exports.CharacterScalarFieldEnum = exports.UserRoleScalarFieldEnum = exports.RoleScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Character: 'Character',
    UserCharacter: 'UserCharacter',
    Battle: 'Battle',
    BattleParticipant: 'BattleParticipant'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    nickname: 'nickname',
    level: 'level',
    experience: 'experience',
    wins: 'wins',
    losses: 'losses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.UserRoleScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId'
};
exports.CharacterScalarFieldEnum = {
    id: 'id',
    name: 'name',
    baseHp: 'baseHp',
    baseAttack: 'baseAttack',
    minLevel: 'minLevel',
    special: 'special',
    imageUrl: 'imageUrl'
};
exports.UserCharacterScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    characterId: 'characterId',
    level: 'level',
    experience: 'experience',
    currentHp: 'currentHp'
};
exports.BattleScalarFieldEnum = {
    id: 'id',
    status: 'status',
    winnerId: 'winnerId',
    createdAt: 'createdAt',
    finishedAt: 'finishedAt'
};
exports.BattleParticipantScalarFieldEnum = {
    id: 'id',
    battleId: 'battleId',
    userId: 'userId',
    userCharacterId: 'userCharacterId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map