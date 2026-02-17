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
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ngenerator client2 {\n  provider     = \"prisma-client-js\"\n  output       = \"../generated/prisma2\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\n// --------------------------------------\n// 1. USUARIOS Y ROLES (Seguridad)\n// --------------------------------------\n\nmodel User {\n  id       Int    @id @default(autoincrement())\n  email    String @unique @db.VarChar(100)\n  password String @db.VarChar(255)\n  nickname String @unique @db.VarChar(50)\n\n  // Progreso del Usuario\n  level      Int @default(1)\n  experience Int @default(0)\n  wins       Int @default(0)\n  losses     Int @default(0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relaciones\n  roles           UserRole[] // Relación explícita \n  characters      UserCharacter[] // Sus personajes\n  battlesAsPlayer BattleParticipant[] // Historial de partidas jugadas\n  battlesWon      Battle[]            @relation(\"WinnerUser\") // Partidas que ganó\n}\n\nmodel Role {\n  id   Int    @id @default(autoincrement())\n  name String @unique @db.VarChar(20) // ADMIN, USER\n\n  users UserRole[]\n}\n\n// Tabla intermedia explícita para Roles \nmodel UserRole {\n  id     Int @id @default(autoincrement())\n  userId Int\n  roleId Int\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n  role Role @relation(fields: [roleId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, roleId]) // Evita que un usuario tenga el mismo rol dos veces\n}\n\n// --------------------------------------\n// 2. PERSONAJES \n// --------------------------------------\n\n// La plantilla (Creada por ADMIN)\nmodel Character {\n  id         Int     @id @default(autoincrement())\n  name       String  @unique @db.VarChar(50)\n  baseHp     Int // Vida base\n  baseAttack Int // Ataque base\n  minLevel   Int     @default(1) // Nivel requerido de usuario para desbloquearlo\n  special    Float   @default(0.25) // La especialidad del character, si me da tiempo lo cambio a un sistema de habilidades\n  imageUrl   String? @db.VarChar(255)\n\n  instances UserCharacter[] // Referencia a todos los usuarios que tienen este pj\n}\n\n// La \"Instancia\" (El personaje en el inventario del usuario)\nmodel UserCharacter {\n  id Int @id @default(autoincrement())\n\n  userId      Int\n  characterId Int\n\n  // Progreso individual del personaje\n  level      Int @default(1)\n  experience Int @default(0)\n\n  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  character Character @relation(fields: [characterId], references: [id], onDelete: Cascade)\n\n  // Relación con las batallas: Un usuario usa su instancia específica en combate\n  battles BattleParticipant[]\n}\n\n// --------------------------------------\n// 3. BATALLAS (Historial)\n// --------------------------------------\n\nenum BattleStatus {\n  PENDING\n  IN_PROGRESS\n  FINISHED\n}\n\nmodel Battle {\n  id     Int          @id @default(autoincrement())\n  status BattleStatus @default(PENDING)\n\n  winnerId Int? // Puede ser nulo si empata o aún no ha terminado\n  winner   User? @relation(\"WinnerUser\", fields: [winnerId], references: [id])\n\n  createdAt  DateTime  @default(now())\n  finishedAt DateTime?\n\n  participants BattleParticipant[]\n}\n\n// Tabla intermedia que define quién jugó y Ccon qué personaje\nmodel BattleParticipant {\n  id Int @id @default(autoincrement())\n\n  battleId        Int\n  userId          Int\n  userCharacterId Int // El personaje específico que usó\n\n  battle        Battle        @relation(fields: [battleId], references: [id], onDelete: Cascade)\n  user          User          @relation(fields: [userId], references: [id])\n  characterUsed UserCharacter @relation(fields: [userCharacterId], references: [id])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nickname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"level\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"experience\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"wins\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"losses\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"roles\",\"kind\":\"object\",\"type\":\"UserRole\",\"relationName\":\"UserToUserRole\"},{\"name\":\"characters\",\"kind\":\"object\",\"type\":\"UserCharacter\",\"relationName\":\"UserToUserCharacter\"},{\"name\":\"battlesAsPlayer\",\"kind\":\"object\",\"type\":\"BattleParticipant\",\"relationName\":\"BattleParticipantToUser\"},{\"name\":\"battlesWon\",\"kind\":\"object\",\"type\":\"Battle\",\"relationName\":\"WinnerUser\"}],\"dbName\":null},\"Role\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"UserRole\",\"relationName\":\"RoleToUserRole\"}],\"dbName\":null},\"UserRole\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"roleId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserRole\"},{\"name\":\"role\",\"kind\":\"object\",\"type\":\"Role\",\"relationName\":\"RoleToUserRole\"}],\"dbName\":null},\"Character\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"baseHp\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"baseAttack\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"minLevel\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"special\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"instances\",\"kind\":\"object\",\"type\":\"UserCharacter\",\"relationName\":\"CharacterToUserCharacter\"}],\"dbName\":null},\"UserCharacter\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"characterId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"level\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"experience\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserCharacter\"},{\"name\":\"character\",\"kind\":\"object\",\"type\":\"Character\",\"relationName\":\"CharacterToUserCharacter\"},{\"name\":\"battles\",\"kind\":\"object\",\"type\":\"BattleParticipant\",\"relationName\":\"BattleParticipantToUserCharacter\"}],\"dbName\":null},\"Battle\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"BattleStatus\"},{\"name\":\"winnerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"winner\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"WinnerUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"finishedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"participants\",\"kind\":\"object\",\"type\":\"BattleParticipant\",\"relationName\":\"BattleToBattleParticipant\"}],\"dbName\":null},\"BattleParticipant\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"battleId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userCharacterId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"battle\",\"kind\":\"object\",\"type\":\"Battle\",\"relationName\":\"BattleToBattleParticipant\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"BattleParticipantToUser\"},{\"name\":\"characterUsed\",\"kind\":\"object\",\"type\":\"UserCharacter\",\"relationName\":\"BattleParticipantToUserCharacter\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map