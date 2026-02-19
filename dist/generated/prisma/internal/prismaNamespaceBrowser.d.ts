import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Role: "Role";
    readonly UserRole: "UserRole";
    readonly Character: "Character";
    readonly UserCharacter: "UserCharacter";
    readonly Battle: "Battle";
    readonly BattleParticipant: "BattleParticipant";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly nickname: "nickname";
    readonly level: "level";
    readonly experience: "experience";
    readonly wins: "wins";
    readonly losses: "losses";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly roleId: "roleId";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const CharacterScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly baseHp: "baseHp";
    readonly baseAttack: "baseAttack";
    readonly minLevel: "minLevel";
    readonly special: "special";
    readonly imageUrl: "imageUrl";
};
export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum];
export declare const UserCharacterScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly characterId: "characterId";
    readonly level: "level";
    readonly experience: "experience";
    readonly currentHp: "currentHp";
};
export type UserCharacterScalarFieldEnum = (typeof UserCharacterScalarFieldEnum)[keyof typeof UserCharacterScalarFieldEnum];
export declare const BattleScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
    readonly winnerId: "winnerId";
    readonly createdAt: "createdAt";
    readonly finishedAt: "finishedAt";
};
export type BattleScalarFieldEnum = (typeof BattleScalarFieldEnum)[keyof typeof BattleScalarFieldEnum];
export declare const BattleParticipantScalarFieldEnum: {
    readonly id: "id";
    readonly battleId: "battleId";
    readonly userId: "userId";
    readonly userCharacterId: "userCharacterId";
};
export type BattleParticipantScalarFieldEnum = (typeof BattleParticipantScalarFieldEnum)[keyof typeof BattleParticipantScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
