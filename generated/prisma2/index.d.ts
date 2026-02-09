
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model UserCharacter
 * 
 */
export type UserCharacter = $Result.DefaultSelection<Prisma.$UserCharacterPayload>
/**
 * Model Battle
 * 
 */
export type Battle = $Result.DefaultSelection<Prisma.$BattlePayload>
/**
 * Model BattleParticipant
 * 
 */
export type BattleParticipant = $Result.DefaultSelection<Prisma.$BattleParticipantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BattleStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type BattleStatus = (typeof BattleStatus)[keyof typeof BattleStatus]

}

export type BattleStatus = $Enums.BattleStatus

export const BattleStatus: typeof $Enums.BattleStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCharacter`: Exposes CRUD operations for the **UserCharacter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCharacters
    * const userCharacters = await prisma.userCharacter.findMany()
    * ```
    */
  get userCharacter(): Prisma.UserCharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle`: Exposes CRUD operations for the **Battle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battles
    * const battles = await prisma.battle.findMany()
    * ```
    */
  get battle(): Prisma.BattleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battleParticipant`: Exposes CRUD operations for the **BattleParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BattleParticipants
    * const battleParticipants = await prisma.battleParticipant.findMany()
    * ```
    */
  get battleParticipant(): Prisma.BattleParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Character: 'Character',
    UserCharacter: 'UserCharacter',
    Battle: 'Battle',
    BattleParticipant: 'BattleParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "userRole" | "character" | "userCharacter" | "battle" | "battleParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      UserCharacter: {
        payload: Prisma.$UserCharacterPayload<ExtArgs>
        fields: Prisma.UserCharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>
          }
          findFirst: {
            args: Prisma.UserCharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>
          }
          findMany: {
            args: Prisma.UserCharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>[]
          }
          create: {
            args: Prisma.UserCharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>
          }
          createMany: {
            args: Prisma.UserCharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>[]
          }
          delete: {
            args: Prisma.UserCharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>
          }
          update: {
            args: Prisma.UserCharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>
          }
          deleteMany: {
            args: Prisma.UserCharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>[]
          }
          upsert: {
            args: Prisma.UserCharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacterPayload>
          }
          aggregate: {
            args: Prisma.UserCharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCharacter>
          }
          groupBy: {
            args: Prisma.UserCharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCharacterCountArgs<ExtArgs>
            result: $Utils.Optional<UserCharacterCountAggregateOutputType> | number
          }
        }
      }
      Battle: {
        payload: Prisma.$BattlePayload<ExtArgs>
        fields: Prisma.BattleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findFirst: {
            args: Prisma.BattleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findMany: {
            args: Prisma.BattleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          create: {
            args: Prisma.BattleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          createMany: {
            args: Prisma.BattleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BattleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          delete: {
            args: Prisma.BattleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          update: {
            args: Prisma.BattleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          deleteMany: {
            args: Prisma.BattleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BattleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          upsert: {
            args: Prisma.BattleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          aggregate: {
            args: Prisma.BattleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle>
          }
          groupBy: {
            args: Prisma.BattleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleCountArgs<ExtArgs>
            result: $Utils.Optional<BattleCountAggregateOutputType> | number
          }
        }
      }
      BattleParticipant: {
        payload: Prisma.$BattleParticipantPayload<ExtArgs>
        fields: Prisma.BattleParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>
          }
          findFirst: {
            args: Prisma.BattleParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>
          }
          findMany: {
            args: Prisma.BattleParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>[]
          }
          create: {
            args: Prisma.BattleParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>
          }
          createMany: {
            args: Prisma.BattleParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BattleParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>[]
          }
          delete: {
            args: Prisma.BattleParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>
          }
          update: {
            args: Prisma.BattleParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>
          }
          deleteMany: {
            args: Prisma.BattleParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BattleParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>[]
          }
          upsert: {
            args: Prisma.BattleParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleParticipantPayload>
          }
          aggregate: {
            args: Prisma.BattleParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattleParticipant>
          }
          groupBy: {
            args: Prisma.BattleParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<BattleParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    character?: CharacterOmit
    userCharacter?: UserCharacterOmit
    battle?: BattleOmit
    battleParticipant?: BattleParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    characters: number
    battlesAsPlayer: number
    battlesWon: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    characters?: boolean | UserCountOutputTypeCountCharactersArgs
    battlesAsPlayer?: boolean | UserCountOutputTypeCountBattlesAsPlayerArgs
    battlesWon?: boolean | UserCountOutputTypeCountBattlesWonArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharacterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBattlesAsPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBattlesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    instances: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | CharacterCountOutputTypeCountInstancesArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharacterWhereInput
  }


  /**
   * Count Type UserCharacterCountOutputType
   */

  export type UserCharacterCountOutputType = {
    battles: number
  }

  export type UserCharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battles?: boolean | UserCharacterCountOutputTypeCountBattlesArgs
  }

  // Custom InputTypes
  /**
   * UserCharacterCountOutputType without action
   */
  export type UserCharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacterCountOutputType
     */
    select?: UserCharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCharacterCountOutputType without action
   */
  export type UserCharacterCountOutputTypeCountBattlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleParticipantWhereInput
  }


  /**
   * Count Type BattleCountOutputType
   */

  export type BattleCountOutputType = {
    participants: number
  }

  export type BattleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | BattleCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleCountOutputType
     */
    select?: BattleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    level: number | null
    experience: number | null
    wins: number | null
    losses: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    level: number | null
    experience: number | null
    wins: number | null
    losses: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nickname: string | null
    level: number | null
    experience: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nickname: string | null
    level: number | null
    experience: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nickname: number
    level: number
    experience: number
    wins: number
    losses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    level?: true
    experience?: true
    wins?: true
    losses?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    level?: true
    experience?: true
    wins?: true
    losses?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    level?: true
    experience?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    level?: true
    experience?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    level?: true
    experience?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    nickname: string
    level: number
    experience: number
    wins: number
    losses: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    characters?: boolean | User$charactersArgs<ExtArgs>
    battlesAsPlayer?: boolean | User$battlesAsPlayerArgs<ExtArgs>
    battlesWon?: boolean | User$battlesWonArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nickname" | "level" | "experience" | "wins" | "losses" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    characters?: boolean | User$charactersArgs<ExtArgs>
    battlesAsPlayer?: boolean | User$battlesAsPlayerArgs<ExtArgs>
    battlesWon?: boolean | User$battlesWonArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      characters: Prisma.$UserCharacterPayload<ExtArgs>[]
      battlesAsPlayer: Prisma.$BattleParticipantPayload<ExtArgs>[]
      battlesWon: Prisma.$BattlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nickname: string
      level: number
      experience: number
      wins: number
      losses: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    characters<T extends User$charactersArgs<ExtArgs> = {}>(args?: Subset<T, User$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsPlayer<T extends User$battlesAsPlayerArgs<ExtArgs> = {}>(args?: Subset<T, User$battlesAsPlayerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesWon<T extends User$battlesWonArgs<ExtArgs> = {}>(args?: Subset<T, User$battlesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly wins: FieldRef<"User", 'Int'>
    readonly losses: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.characters
   */
  export type User$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    where?: UserCharacterWhereInput
    orderBy?: UserCharacterOrderByWithRelationInput | UserCharacterOrderByWithRelationInput[]
    cursor?: UserCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCharacterScalarFieldEnum | UserCharacterScalarFieldEnum[]
  }

  /**
   * User.battlesAsPlayer
   */
  export type User$battlesAsPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    where?: BattleParticipantWhereInput
    orderBy?: BattleParticipantOrderByWithRelationInput | BattleParticipantOrderByWithRelationInput[]
    cursor?: BattleParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleParticipantScalarFieldEnum | BattleParticipantScalarFieldEnum[]
  }

  /**
   * User.battlesWon
   */
  export type User$battlesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    userId: number
    roleId: number
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roleId: number
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    id: number | null
    baseHp: number | null
    baseAttack: number | null
    minLevel: number | null
  }

  export type CharacterSumAggregateOutputType = {
    id: number | null
    baseHp: number | null
    baseAttack: number | null
    minLevel: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: number | null
    name: string | null
    baseHp: number | null
    baseAttack: number | null
    minLevel: number | null
    imageUrl: string | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    baseHp: number | null
    baseAttack: number | null
    minLevel: number | null
    imageUrl: string | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    baseHp: number
    baseAttack: number
    minLevel: number
    imageUrl: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    id?: true
    baseHp?: true
    baseAttack?: true
    minLevel?: true
  }

  export type CharacterSumAggregateInputType = {
    id?: true
    baseHp?: true
    baseAttack?: true
    minLevel?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    baseHp?: true
    baseAttack?: true
    minLevel?: true
    imageUrl?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    baseHp?: true
    baseAttack?: true
    minLevel?: true
    imageUrl?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    baseHp?: true
    baseAttack?: true
    minLevel?: true
    imageUrl?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: number
    name: string
    baseHp: number
    baseAttack: number
    minLevel: number
    imageUrl: string | null
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseHp?: boolean
    baseAttack?: boolean
    minLevel?: boolean
    imageUrl?: boolean
    instances?: boolean | Character$instancesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseHp?: boolean
    baseAttack?: boolean
    minLevel?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseHp?: boolean
    baseAttack?: boolean
    minLevel?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    baseHp?: boolean
    baseAttack?: boolean
    minLevel?: boolean
    imageUrl?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "baseHp" | "baseAttack" | "minLevel" | "imageUrl", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | Character$instancesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      instances: Prisma.$UserCharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      baseHp: number
      baseAttack: number
      minLevel: number
      imageUrl: string | null
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instances<T extends Character$instancesArgs<ExtArgs> = {}>(args?: Subset<T, Character$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'Int'>
    readonly name: FieldRef<"Character", 'String'>
    readonly baseHp: FieldRef<"Character", 'Int'>
    readonly baseAttack: FieldRef<"Character", 'Int'>
    readonly minLevel: FieldRef<"Character", 'Int'>
    readonly imageUrl: FieldRef<"Character", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.instances
   */
  export type Character$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    where?: UserCharacterWhereInput
    orderBy?: UserCharacterOrderByWithRelationInput | UserCharacterOrderByWithRelationInput[]
    cursor?: UserCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCharacterScalarFieldEnum | UserCharacterScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model UserCharacter
   */

  export type AggregateUserCharacter = {
    _count: UserCharacterCountAggregateOutputType | null
    _avg: UserCharacterAvgAggregateOutputType | null
    _sum: UserCharacterSumAggregateOutputType | null
    _min: UserCharacterMinAggregateOutputType | null
    _max: UserCharacterMaxAggregateOutputType | null
  }

  export type UserCharacterAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    characterId: number | null
    level: number | null
    experience: number | null
  }

  export type UserCharacterSumAggregateOutputType = {
    id: number | null
    userId: number | null
    characterId: number | null
    level: number | null
    experience: number | null
  }

  export type UserCharacterMinAggregateOutputType = {
    id: number | null
    userId: number | null
    characterId: number | null
    level: number | null
    experience: number | null
  }

  export type UserCharacterMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    characterId: number | null
    level: number | null
    experience: number | null
  }

  export type UserCharacterCountAggregateOutputType = {
    id: number
    userId: number
    characterId: number
    level: number
    experience: number
    _all: number
  }


  export type UserCharacterAvgAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    level?: true
    experience?: true
  }

  export type UserCharacterSumAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    level?: true
    experience?: true
  }

  export type UserCharacterMinAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    level?: true
    experience?: true
  }

  export type UserCharacterMaxAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    level?: true
    experience?: true
  }

  export type UserCharacterCountAggregateInputType = {
    id?: true
    userId?: true
    characterId?: true
    level?: true
    experience?: true
    _all?: true
  }

  export type UserCharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCharacter to aggregate.
     */
    where?: UserCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacters to fetch.
     */
    orderBy?: UserCharacterOrderByWithRelationInput | UserCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCharacters
    **/
    _count?: true | UserCharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCharacterMaxAggregateInputType
  }

  export type GetUserCharacterAggregateType<T extends UserCharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCharacter[P]>
      : GetScalarType<T[P], AggregateUserCharacter[P]>
  }




  export type UserCharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharacterWhereInput
    orderBy?: UserCharacterOrderByWithAggregationInput | UserCharacterOrderByWithAggregationInput[]
    by: UserCharacterScalarFieldEnum[] | UserCharacterScalarFieldEnum
    having?: UserCharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCharacterCountAggregateInputType | true
    _avg?: UserCharacterAvgAggregateInputType
    _sum?: UserCharacterSumAggregateInputType
    _min?: UserCharacterMinAggregateInputType
    _max?: UserCharacterMaxAggregateInputType
  }

  export type UserCharacterGroupByOutputType = {
    id: number
    userId: number
    characterId: number
    level: number
    experience: number
    _count: UserCharacterCountAggregateOutputType | null
    _avg: UserCharacterAvgAggregateOutputType | null
    _sum: UserCharacterSumAggregateOutputType | null
    _min: UserCharacterMinAggregateOutputType | null
    _max: UserCharacterMaxAggregateOutputType | null
  }

  type GetUserCharacterGroupByPayload<T extends UserCharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCharacterGroupByOutputType[P]>
            : GetScalarType<T[P], UserCharacterGroupByOutputType[P]>
        }
      >
    >


  export type UserCharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterId?: boolean
    level?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    battles?: boolean | UserCharacter$battlesArgs<ExtArgs>
    _count?: boolean | UserCharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCharacter"]>

  export type UserCharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterId?: boolean
    level?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCharacter"]>

  export type UserCharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterId?: boolean
    level?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCharacter"]>

  export type UserCharacterSelectScalar = {
    id?: boolean
    userId?: boolean
    characterId?: boolean
    level?: boolean
    experience?: boolean
  }

  export type UserCharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "characterId" | "level" | "experience", ExtArgs["result"]["userCharacter"]>
  export type UserCharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    battles?: boolean | UserCharacter$battlesArgs<ExtArgs>
    _count?: boolean | UserCharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserCharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type UserCharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $UserCharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCharacter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      character: Prisma.$CharacterPayload<ExtArgs>
      battles: Prisma.$BattleParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      characterId: number
      level: number
      experience: number
    }, ExtArgs["result"]["userCharacter"]>
    composites: {}
  }

  type UserCharacterGetPayload<S extends boolean | null | undefined | UserCharacterDefaultArgs> = $Result.GetResult<Prisma.$UserCharacterPayload, S>

  type UserCharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCharacterCountAggregateInputType | true
    }

  export interface UserCharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCharacter'], meta: { name: 'UserCharacter' } }
    /**
     * Find zero or one UserCharacter that matches the filter.
     * @param {UserCharacterFindUniqueArgs} args - Arguments to find a UserCharacter
     * @example
     * // Get one UserCharacter
     * const userCharacter = await prisma.userCharacter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCharacterFindUniqueArgs>(args: SelectSubset<T, UserCharacterFindUniqueArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCharacter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCharacterFindUniqueOrThrowArgs} args - Arguments to find a UserCharacter
     * @example
     * // Get one UserCharacter
     * const userCharacter = await prisma.userCharacter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCharacter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacterFindFirstArgs} args - Arguments to find a UserCharacter
     * @example
     * // Get one UserCharacter
     * const userCharacter = await prisma.userCharacter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCharacterFindFirstArgs>(args?: SelectSubset<T, UserCharacterFindFirstArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCharacter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacterFindFirstOrThrowArgs} args - Arguments to find a UserCharacter
     * @example
     * // Get one UserCharacter
     * const userCharacter = await prisma.userCharacter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCharacters
     * const userCharacters = await prisma.userCharacter.findMany()
     * 
     * // Get first 10 UserCharacters
     * const userCharacters = await prisma.userCharacter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCharacterWithIdOnly = await prisma.userCharacter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCharacterFindManyArgs>(args?: SelectSubset<T, UserCharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCharacter.
     * @param {UserCharacterCreateArgs} args - Arguments to create a UserCharacter.
     * @example
     * // Create one UserCharacter
     * const UserCharacter = await prisma.userCharacter.create({
     *   data: {
     *     // ... data to create a UserCharacter
     *   }
     * })
     * 
     */
    create<T extends UserCharacterCreateArgs>(args: SelectSubset<T, UserCharacterCreateArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCharacters.
     * @param {UserCharacterCreateManyArgs} args - Arguments to create many UserCharacters.
     * @example
     * // Create many UserCharacters
     * const userCharacter = await prisma.userCharacter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCharacterCreateManyArgs>(args?: SelectSubset<T, UserCharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCharacters and returns the data saved in the database.
     * @param {UserCharacterCreateManyAndReturnArgs} args - Arguments to create many UserCharacters.
     * @example
     * // Create many UserCharacters
     * const userCharacter = await prisma.userCharacter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCharacters and only return the `id`
     * const userCharacterWithIdOnly = await prisma.userCharacter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCharacter.
     * @param {UserCharacterDeleteArgs} args - Arguments to delete one UserCharacter.
     * @example
     * // Delete one UserCharacter
     * const UserCharacter = await prisma.userCharacter.delete({
     *   where: {
     *     // ... filter to delete one UserCharacter
     *   }
     * })
     * 
     */
    delete<T extends UserCharacterDeleteArgs>(args: SelectSubset<T, UserCharacterDeleteArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCharacter.
     * @param {UserCharacterUpdateArgs} args - Arguments to update one UserCharacter.
     * @example
     * // Update one UserCharacter
     * const userCharacter = await prisma.userCharacter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCharacterUpdateArgs>(args: SelectSubset<T, UserCharacterUpdateArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCharacters.
     * @param {UserCharacterDeleteManyArgs} args - Arguments to filter UserCharacters to delete.
     * @example
     * // Delete a few UserCharacters
     * const { count } = await prisma.userCharacter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCharacterDeleteManyArgs>(args?: SelectSubset<T, UserCharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCharacters
     * const userCharacter = await prisma.userCharacter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCharacterUpdateManyArgs>(args: SelectSubset<T, UserCharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCharacters and returns the data updated in the database.
     * @param {UserCharacterUpdateManyAndReturnArgs} args - Arguments to update many UserCharacters.
     * @example
     * // Update many UserCharacters
     * const userCharacter = await prisma.userCharacter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCharacters and only return the `id`
     * const userCharacterWithIdOnly = await prisma.userCharacter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCharacter.
     * @param {UserCharacterUpsertArgs} args - Arguments to update or create a UserCharacter.
     * @example
     * // Update or create a UserCharacter
     * const userCharacter = await prisma.userCharacter.upsert({
     *   create: {
     *     // ... data to create a UserCharacter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCharacter we want to update
     *   }
     * })
     */
    upsert<T extends UserCharacterUpsertArgs>(args: SelectSubset<T, UserCharacterUpsertArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacterCountArgs} args - Arguments to filter UserCharacters to count.
     * @example
     * // Count the number of UserCharacters
     * const count = await prisma.userCharacter.count({
     *   where: {
     *     // ... the filter for the UserCharacters we want to count
     *   }
     * })
    **/
    count<T extends UserCharacterCountArgs>(
      args?: Subset<T, UserCharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCharacterAggregateArgs>(args: Subset<T, UserCharacterAggregateArgs>): Prisma.PrismaPromise<GetUserCharacterAggregateType<T>>

    /**
     * Group by UserCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCharacterGroupByArgs['orderBy'] }
        : { orderBy?: UserCharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCharacter model
   */
  readonly fields: UserCharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCharacter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    battles<T extends UserCharacter$battlesArgs<ExtArgs> = {}>(args?: Subset<T, UserCharacter$battlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCharacter model
   */
  interface UserCharacterFieldRefs {
    readonly id: FieldRef<"UserCharacter", 'Int'>
    readonly userId: FieldRef<"UserCharacter", 'Int'>
    readonly characterId: FieldRef<"UserCharacter", 'Int'>
    readonly level: FieldRef<"UserCharacter", 'Int'>
    readonly experience: FieldRef<"UserCharacter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserCharacter findUnique
   */
  export type UserCharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacter to fetch.
     */
    where: UserCharacterWhereUniqueInput
  }

  /**
   * UserCharacter findUniqueOrThrow
   */
  export type UserCharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacter to fetch.
     */
    where: UserCharacterWhereUniqueInput
  }

  /**
   * UserCharacter findFirst
   */
  export type UserCharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacter to fetch.
     */
    where?: UserCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacters to fetch.
     */
    orderBy?: UserCharacterOrderByWithRelationInput | UserCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCharacters.
     */
    cursor?: UserCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCharacters.
     */
    distinct?: UserCharacterScalarFieldEnum | UserCharacterScalarFieldEnum[]
  }

  /**
   * UserCharacter findFirstOrThrow
   */
  export type UserCharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacter to fetch.
     */
    where?: UserCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacters to fetch.
     */
    orderBy?: UserCharacterOrderByWithRelationInput | UserCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCharacters.
     */
    cursor?: UserCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCharacters.
     */
    distinct?: UserCharacterScalarFieldEnum | UserCharacterScalarFieldEnum[]
  }

  /**
   * UserCharacter findMany
   */
  export type UserCharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacters to fetch.
     */
    where?: UserCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacters to fetch.
     */
    orderBy?: UserCharacterOrderByWithRelationInput | UserCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCharacters.
     */
    cursor?: UserCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacters.
     */
    skip?: number
    distinct?: UserCharacterScalarFieldEnum | UserCharacterScalarFieldEnum[]
  }

  /**
   * UserCharacter create
   */
  export type UserCharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCharacter.
     */
    data: XOR<UserCharacterCreateInput, UserCharacterUncheckedCreateInput>
  }

  /**
   * UserCharacter createMany
   */
  export type UserCharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCharacters.
     */
    data: UserCharacterCreateManyInput | UserCharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCharacter createManyAndReturn
   */
  export type UserCharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * The data used to create many UserCharacters.
     */
    data: UserCharacterCreateManyInput | UserCharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCharacter update
   */
  export type UserCharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCharacter.
     */
    data: XOR<UserCharacterUpdateInput, UserCharacterUncheckedUpdateInput>
    /**
     * Choose, which UserCharacter to update.
     */
    where: UserCharacterWhereUniqueInput
  }

  /**
   * UserCharacter updateMany
   */
  export type UserCharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCharacters.
     */
    data: XOR<UserCharacterUpdateManyMutationInput, UserCharacterUncheckedUpdateManyInput>
    /**
     * Filter which UserCharacters to update
     */
    where?: UserCharacterWhereInput
    /**
     * Limit how many UserCharacters to update.
     */
    limit?: number
  }

  /**
   * UserCharacter updateManyAndReturn
   */
  export type UserCharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * The data used to update UserCharacters.
     */
    data: XOR<UserCharacterUpdateManyMutationInput, UserCharacterUncheckedUpdateManyInput>
    /**
     * Filter which UserCharacters to update
     */
    where?: UserCharacterWhereInput
    /**
     * Limit how many UserCharacters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCharacter upsert
   */
  export type UserCharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCharacter to update in case it exists.
     */
    where: UserCharacterWhereUniqueInput
    /**
     * In case the UserCharacter found by the `where` argument doesn't exist, create a new UserCharacter with this data.
     */
    create: XOR<UserCharacterCreateInput, UserCharacterUncheckedCreateInput>
    /**
     * In case the UserCharacter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCharacterUpdateInput, UserCharacterUncheckedUpdateInput>
  }

  /**
   * UserCharacter delete
   */
  export type UserCharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
    /**
     * Filter which UserCharacter to delete.
     */
    where: UserCharacterWhereUniqueInput
  }

  /**
   * UserCharacter deleteMany
   */
  export type UserCharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCharacters to delete
     */
    where?: UserCharacterWhereInput
    /**
     * Limit how many UserCharacters to delete.
     */
    limit?: number
  }

  /**
   * UserCharacter.battles
   */
  export type UserCharacter$battlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    where?: BattleParticipantWhereInput
    orderBy?: BattleParticipantOrderByWithRelationInput | BattleParticipantOrderByWithRelationInput[]
    cursor?: BattleParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleParticipantScalarFieldEnum | BattleParticipantScalarFieldEnum[]
  }

  /**
   * UserCharacter without action
   */
  export type UserCharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacter
     */
    select?: UserCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacter
     */
    omit?: UserCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacterInclude<ExtArgs> | null
  }


  /**
   * Model Battle
   */

  export type AggregateBattle = {
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  export type BattleAvgAggregateOutputType = {
    id: number | null
    winnerId: number | null
  }

  export type BattleSumAggregateOutputType = {
    id: number | null
    winnerId: number | null
  }

  export type BattleMinAggregateOutputType = {
    id: number | null
    status: $Enums.BattleStatus | null
    winnerId: number | null
    createdAt: Date | null
    finishedAt: Date | null
  }

  export type BattleMaxAggregateOutputType = {
    id: number | null
    status: $Enums.BattleStatus | null
    winnerId: number | null
    createdAt: Date | null
    finishedAt: Date | null
  }

  export type BattleCountAggregateOutputType = {
    id: number
    status: number
    winnerId: number
    createdAt: number
    finishedAt: number
    _all: number
  }


  export type BattleAvgAggregateInputType = {
    id?: true
    winnerId?: true
  }

  export type BattleSumAggregateInputType = {
    id?: true
    winnerId?: true
  }

  export type BattleMinAggregateInputType = {
    id?: true
    status?: true
    winnerId?: true
    createdAt?: true
    finishedAt?: true
  }

  export type BattleMaxAggregateInputType = {
    id?: true
    status?: true
    winnerId?: true
    createdAt?: true
    finishedAt?: true
  }

  export type BattleCountAggregateInputType = {
    id?: true
    status?: true
    winnerId?: true
    createdAt?: true
    finishedAt?: true
    _all?: true
  }

  export type BattleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battle to aggregate.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Battles
    **/
    _count?: true | BattleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleMaxAggregateInputType
  }

  export type GetBattleAggregateType<T extends BattleAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle[P]>
      : GetScalarType<T[P], AggregateBattle[P]>
  }




  export type BattleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithAggregationInput | BattleOrderByWithAggregationInput[]
    by: BattleScalarFieldEnum[] | BattleScalarFieldEnum
    having?: BattleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleCountAggregateInputType | true
    _avg?: BattleAvgAggregateInputType
    _sum?: BattleSumAggregateInputType
    _min?: BattleMinAggregateInputType
    _max?: BattleMaxAggregateInputType
  }

  export type BattleGroupByOutputType = {
    id: number
    status: $Enums.BattleStatus
    winnerId: number | null
    createdAt: Date
    finishedAt: Date | null
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  type GetBattleGroupByPayload<T extends BattleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleGroupByOutputType[P]>
            : GetScalarType<T[P], BattleGroupByOutputType[P]>
        }
      >
    >


  export type BattleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    winnerId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    participants?: boolean | Battle$participantsArgs<ExtArgs>
    _count?: boolean | BattleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    winnerId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    winner?: boolean | Battle$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    winnerId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    winner?: boolean | Battle$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectScalar = {
    id?: boolean
    status?: boolean
    winnerId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
  }

  export type BattleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "winnerId" | "createdAt" | "finishedAt", ExtArgs["result"]["battle"]>
  export type BattleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    participants?: boolean | Battle$participantsArgs<ExtArgs>
    _count?: boolean | BattleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BattleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Battle$winnerArgs<ExtArgs>
  }
  export type BattleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Battle$winnerArgs<ExtArgs>
  }

  export type $BattlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Battle"
    objects: {
      winner: Prisma.$UserPayload<ExtArgs> | null
      participants: Prisma.$BattleParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.BattleStatus
      winnerId: number | null
      createdAt: Date
      finishedAt: Date | null
    }, ExtArgs["result"]["battle"]>
    composites: {}
  }

  type BattleGetPayload<S extends boolean | null | undefined | BattleDefaultArgs> = $Result.GetResult<Prisma.$BattlePayload, S>

  type BattleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BattleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleCountAggregateInputType | true
    }

  export interface BattleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Battle'], meta: { name: 'Battle' } }
    /**
     * Find zero or one Battle that matches the filter.
     * @param {BattleFindUniqueArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleFindUniqueArgs>(args: SelectSubset<T, BattleFindUniqueArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BattleFindUniqueOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleFindFirstArgs>(args?: SelectSubset<T, BattleFindFirstArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battles
     * const battles = await prisma.battle.findMany()
     * 
     * // Get first 10 Battles
     * const battles = await prisma.battle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleWithIdOnly = await prisma.battle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleFindManyArgs>(args?: SelectSubset<T, BattleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle.
     * @param {BattleCreateArgs} args - Arguments to create a Battle.
     * @example
     * // Create one Battle
     * const Battle = await prisma.battle.create({
     *   data: {
     *     // ... data to create a Battle
     *   }
     * })
     * 
     */
    create<T extends BattleCreateArgs>(args: SelectSubset<T, BattleCreateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battles.
     * @param {BattleCreateManyArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleCreateManyArgs>(args?: SelectSubset<T, BattleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Battles and returns the data saved in the database.
     * @param {BattleCreateManyAndReturnArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Battles and only return the `id`
     * const battleWithIdOnly = await prisma.battle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BattleCreateManyAndReturnArgs>(args?: SelectSubset<T, BattleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Battle.
     * @param {BattleDeleteArgs} args - Arguments to delete one Battle.
     * @example
     * // Delete one Battle
     * const Battle = await prisma.battle.delete({
     *   where: {
     *     // ... filter to delete one Battle
     *   }
     * })
     * 
     */
    delete<T extends BattleDeleteArgs>(args: SelectSubset<T, BattleDeleteArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle.
     * @param {BattleUpdateArgs} args - Arguments to update one Battle.
     * @example
     * // Update one Battle
     * const battle = await prisma.battle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleUpdateArgs>(args: SelectSubset<T, BattleUpdateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battles.
     * @param {BattleDeleteManyArgs} args - Arguments to filter Battles to delete.
     * @example
     * // Delete a few Battles
     * const { count } = await prisma.battle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleDeleteManyArgs>(args?: SelectSubset<T, BattleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleUpdateManyArgs>(args: SelectSubset<T, BattleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles and returns the data updated in the database.
     * @param {BattleUpdateManyAndReturnArgs} args - Arguments to update many Battles.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Battles and only return the `id`
     * const battleWithIdOnly = await prisma.battle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BattleUpdateManyAndReturnArgs>(args: SelectSubset<T, BattleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Battle.
     * @param {BattleUpsertArgs} args - Arguments to update or create a Battle.
     * @example
     * // Update or create a Battle
     * const battle = await prisma.battle.upsert({
     *   create: {
     *     // ... data to create a Battle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle we want to update
     *   }
     * })
     */
    upsert<T extends BattleUpsertArgs>(args: SelectSubset<T, BattleUpsertArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleCountArgs} args - Arguments to filter Battles to count.
     * @example
     * // Count the number of Battles
     * const count = await prisma.battle.count({
     *   where: {
     *     // ... the filter for the Battles we want to count
     *   }
     * })
    **/
    count<T extends BattleCountArgs>(
      args?: Subset<T, BattleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BattleAggregateArgs>(args: Subset<T, BattleAggregateArgs>): Prisma.PrismaPromise<GetBattleAggregateType<T>>

    /**
     * Group by Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BattleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleGroupByArgs['orderBy'] }
        : { orderBy?: BattleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BattleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Battle model
   */
  readonly fields: BattleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Battle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winner<T extends Battle$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Battle$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participants<T extends Battle$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Battle$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Battle model
   */
  interface BattleFieldRefs {
    readonly id: FieldRef<"Battle", 'Int'>
    readonly status: FieldRef<"Battle", 'BattleStatus'>
    readonly winnerId: FieldRef<"Battle", 'Int'>
    readonly createdAt: FieldRef<"Battle", 'DateTime'>
    readonly finishedAt: FieldRef<"Battle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Battle findUnique
   */
  export type BattleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findUniqueOrThrow
   */
  export type BattleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findFirst
   */
  export type BattleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findFirstOrThrow
   */
  export type BattleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findMany
   */
  export type BattleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battles to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle create
   */
  export type BattleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to create a Battle.
     */
    data?: XOR<BattleCreateInput, BattleUncheckedCreateInput>
  }

  /**
   * Battle createMany
   */
  export type BattleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Battle createManyAndReturn
   */
  export type BattleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Battle update
   */
  export type BattleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to update a Battle.
     */
    data: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
    /**
     * Choose, which Battle to update.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle updateMany
   */
  export type BattleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Battles.
     */
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyInput>
    /**
     * Filter which Battles to update
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to update.
     */
    limit?: number
  }

  /**
   * Battle updateManyAndReturn
   */
  export type BattleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * The data used to update Battles.
     */
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyInput>
    /**
     * Filter which Battles to update
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Battle upsert
   */
  export type BattleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The filter to search for the Battle to update in case it exists.
     */
    where: BattleWhereUniqueInput
    /**
     * In case the Battle found by the `where` argument doesn't exist, create a new Battle with this data.
     */
    create: XOR<BattleCreateInput, BattleUncheckedCreateInput>
    /**
     * In case the Battle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
  }

  /**
   * Battle delete
   */
  export type BattleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter which Battle to delete.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle deleteMany
   */
  export type BattleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battles to delete
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to delete.
     */
    limit?: number
  }

  /**
   * Battle.winner
   */
  export type Battle$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Battle.participants
   */
  export type Battle$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    where?: BattleParticipantWhereInput
    orderBy?: BattleParticipantOrderByWithRelationInput | BattleParticipantOrderByWithRelationInput[]
    cursor?: BattleParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleParticipantScalarFieldEnum | BattleParticipantScalarFieldEnum[]
  }

  /**
   * Battle without action
   */
  export type BattleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
  }


  /**
   * Model BattleParticipant
   */

  export type AggregateBattleParticipant = {
    _count: BattleParticipantCountAggregateOutputType | null
    _avg: BattleParticipantAvgAggregateOutputType | null
    _sum: BattleParticipantSumAggregateOutputType | null
    _min: BattleParticipantMinAggregateOutputType | null
    _max: BattleParticipantMaxAggregateOutputType | null
  }

  export type BattleParticipantAvgAggregateOutputType = {
    id: number | null
    battleId: number | null
    userId: number | null
    userCharacterId: number | null
  }

  export type BattleParticipantSumAggregateOutputType = {
    id: number | null
    battleId: number | null
    userId: number | null
    userCharacterId: number | null
  }

  export type BattleParticipantMinAggregateOutputType = {
    id: number | null
    battleId: number | null
    userId: number | null
    userCharacterId: number | null
  }

  export type BattleParticipantMaxAggregateOutputType = {
    id: number | null
    battleId: number | null
    userId: number | null
    userCharacterId: number | null
  }

  export type BattleParticipantCountAggregateOutputType = {
    id: number
    battleId: number
    userId: number
    userCharacterId: number
    _all: number
  }


  export type BattleParticipantAvgAggregateInputType = {
    id?: true
    battleId?: true
    userId?: true
    userCharacterId?: true
  }

  export type BattleParticipantSumAggregateInputType = {
    id?: true
    battleId?: true
    userId?: true
    userCharacterId?: true
  }

  export type BattleParticipantMinAggregateInputType = {
    id?: true
    battleId?: true
    userId?: true
    userCharacterId?: true
  }

  export type BattleParticipantMaxAggregateInputType = {
    id?: true
    battleId?: true
    userId?: true
    userCharacterId?: true
  }

  export type BattleParticipantCountAggregateInputType = {
    id?: true
    battleId?: true
    userId?: true
    userCharacterId?: true
    _all?: true
  }

  export type BattleParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleParticipant to aggregate.
     */
    where?: BattleParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleParticipants to fetch.
     */
    orderBy?: BattleParticipantOrderByWithRelationInput | BattleParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BattleParticipants
    **/
    _count?: true | BattleParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleParticipantMaxAggregateInputType
  }

  export type GetBattleParticipantAggregateType<T extends BattleParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateBattleParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattleParticipant[P]>
      : GetScalarType<T[P], AggregateBattleParticipant[P]>
  }




  export type BattleParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleParticipantWhereInput
    orderBy?: BattleParticipantOrderByWithAggregationInput | BattleParticipantOrderByWithAggregationInput[]
    by: BattleParticipantScalarFieldEnum[] | BattleParticipantScalarFieldEnum
    having?: BattleParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleParticipantCountAggregateInputType | true
    _avg?: BattleParticipantAvgAggregateInputType
    _sum?: BattleParticipantSumAggregateInputType
    _min?: BattleParticipantMinAggregateInputType
    _max?: BattleParticipantMaxAggregateInputType
  }

  export type BattleParticipantGroupByOutputType = {
    id: number
    battleId: number
    userId: number
    userCharacterId: number
    _count: BattleParticipantCountAggregateOutputType | null
    _avg: BattleParticipantAvgAggregateOutputType | null
    _sum: BattleParticipantSumAggregateOutputType | null
    _min: BattleParticipantMinAggregateOutputType | null
    _max: BattleParticipantMaxAggregateOutputType | null
  }

  type GetBattleParticipantGroupByPayload<T extends BattleParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], BattleParticipantGroupByOutputType[P]>
        }
      >
    >


  export type BattleParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battleId?: boolean
    userId?: boolean
    userCharacterId?: boolean
    battle?: boolean | BattleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterUsed?: boolean | UserCharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battleParticipant"]>

  export type BattleParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battleId?: boolean
    userId?: boolean
    userCharacterId?: boolean
    battle?: boolean | BattleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterUsed?: boolean | UserCharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battleParticipant"]>

  export type BattleParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battleId?: boolean
    userId?: boolean
    userCharacterId?: boolean
    battle?: boolean | BattleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterUsed?: boolean | UserCharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battleParticipant"]>

  export type BattleParticipantSelectScalar = {
    id?: boolean
    battleId?: boolean
    userId?: boolean
    userCharacterId?: boolean
  }

  export type BattleParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "battleId" | "userId" | "userCharacterId", ExtArgs["result"]["battleParticipant"]>
  export type BattleParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle?: boolean | BattleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterUsed?: boolean | UserCharacterDefaultArgs<ExtArgs>
  }
  export type BattleParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle?: boolean | BattleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterUsed?: boolean | UserCharacterDefaultArgs<ExtArgs>
  }
  export type BattleParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battle?: boolean | BattleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterUsed?: boolean | UserCharacterDefaultArgs<ExtArgs>
  }

  export type $BattleParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BattleParticipant"
    objects: {
      battle: Prisma.$BattlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      characterUsed: Prisma.$UserCharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      battleId: number
      userId: number
      userCharacterId: number
    }, ExtArgs["result"]["battleParticipant"]>
    composites: {}
  }

  type BattleParticipantGetPayload<S extends boolean | null | undefined | BattleParticipantDefaultArgs> = $Result.GetResult<Prisma.$BattleParticipantPayload, S>

  type BattleParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BattleParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleParticipantCountAggregateInputType | true
    }

  export interface BattleParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BattleParticipant'], meta: { name: 'BattleParticipant' } }
    /**
     * Find zero or one BattleParticipant that matches the filter.
     * @param {BattleParticipantFindUniqueArgs} args - Arguments to find a BattleParticipant
     * @example
     * // Get one BattleParticipant
     * const battleParticipant = await prisma.battleParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleParticipantFindUniqueArgs>(args: SelectSubset<T, BattleParticipantFindUniqueArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BattleParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BattleParticipantFindUniqueOrThrowArgs} args - Arguments to find a BattleParticipant
     * @example
     * // Get one BattleParticipant
     * const battleParticipant = await prisma.battleParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleParticipantFindFirstArgs} args - Arguments to find a BattleParticipant
     * @example
     * // Get one BattleParticipant
     * const battleParticipant = await prisma.battleParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleParticipantFindFirstArgs>(args?: SelectSubset<T, BattleParticipantFindFirstArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleParticipantFindFirstOrThrowArgs} args - Arguments to find a BattleParticipant
     * @example
     * // Get one BattleParticipant
     * const battleParticipant = await prisma.battleParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BattleParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BattleParticipants
     * const battleParticipants = await prisma.battleParticipant.findMany()
     * 
     * // Get first 10 BattleParticipants
     * const battleParticipants = await prisma.battleParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleParticipantWithIdOnly = await prisma.battleParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleParticipantFindManyArgs>(args?: SelectSubset<T, BattleParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BattleParticipant.
     * @param {BattleParticipantCreateArgs} args - Arguments to create a BattleParticipant.
     * @example
     * // Create one BattleParticipant
     * const BattleParticipant = await prisma.battleParticipant.create({
     *   data: {
     *     // ... data to create a BattleParticipant
     *   }
     * })
     * 
     */
    create<T extends BattleParticipantCreateArgs>(args: SelectSubset<T, BattleParticipantCreateArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BattleParticipants.
     * @param {BattleParticipantCreateManyArgs} args - Arguments to create many BattleParticipants.
     * @example
     * // Create many BattleParticipants
     * const battleParticipant = await prisma.battleParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleParticipantCreateManyArgs>(args?: SelectSubset<T, BattleParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BattleParticipants and returns the data saved in the database.
     * @param {BattleParticipantCreateManyAndReturnArgs} args - Arguments to create many BattleParticipants.
     * @example
     * // Create many BattleParticipants
     * const battleParticipant = await prisma.battleParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BattleParticipants and only return the `id`
     * const battleParticipantWithIdOnly = await prisma.battleParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BattleParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, BattleParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BattleParticipant.
     * @param {BattleParticipantDeleteArgs} args - Arguments to delete one BattleParticipant.
     * @example
     * // Delete one BattleParticipant
     * const BattleParticipant = await prisma.battleParticipant.delete({
     *   where: {
     *     // ... filter to delete one BattleParticipant
     *   }
     * })
     * 
     */
    delete<T extends BattleParticipantDeleteArgs>(args: SelectSubset<T, BattleParticipantDeleteArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BattleParticipant.
     * @param {BattleParticipantUpdateArgs} args - Arguments to update one BattleParticipant.
     * @example
     * // Update one BattleParticipant
     * const battleParticipant = await prisma.battleParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleParticipantUpdateArgs>(args: SelectSubset<T, BattleParticipantUpdateArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BattleParticipants.
     * @param {BattleParticipantDeleteManyArgs} args - Arguments to filter BattleParticipants to delete.
     * @example
     * // Delete a few BattleParticipants
     * const { count } = await prisma.battleParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleParticipantDeleteManyArgs>(args?: SelectSubset<T, BattleParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BattleParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BattleParticipants
     * const battleParticipant = await prisma.battleParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleParticipantUpdateManyArgs>(args: SelectSubset<T, BattleParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BattleParticipants and returns the data updated in the database.
     * @param {BattleParticipantUpdateManyAndReturnArgs} args - Arguments to update many BattleParticipants.
     * @example
     * // Update many BattleParticipants
     * const battleParticipant = await prisma.battleParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BattleParticipants and only return the `id`
     * const battleParticipantWithIdOnly = await prisma.battleParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BattleParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, BattleParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BattleParticipant.
     * @param {BattleParticipantUpsertArgs} args - Arguments to update or create a BattleParticipant.
     * @example
     * // Update or create a BattleParticipant
     * const battleParticipant = await prisma.battleParticipant.upsert({
     *   create: {
     *     // ... data to create a BattleParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BattleParticipant we want to update
     *   }
     * })
     */
    upsert<T extends BattleParticipantUpsertArgs>(args: SelectSubset<T, BattleParticipantUpsertArgs<ExtArgs>>): Prisma__BattleParticipantClient<$Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BattleParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleParticipantCountArgs} args - Arguments to filter BattleParticipants to count.
     * @example
     * // Count the number of BattleParticipants
     * const count = await prisma.battleParticipant.count({
     *   where: {
     *     // ... the filter for the BattleParticipants we want to count
     *   }
     * })
    **/
    count<T extends BattleParticipantCountArgs>(
      args?: Subset<T, BattleParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BattleParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BattleParticipantAggregateArgs>(args: Subset<T, BattleParticipantAggregateArgs>): Prisma.PrismaPromise<GetBattleParticipantAggregateType<T>>

    /**
     * Group by BattleParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BattleParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleParticipantGroupByArgs['orderBy'] }
        : { orderBy?: BattleParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BattleParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BattleParticipant model
   */
  readonly fields: BattleParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BattleParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battle<T extends BattleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BattleDefaultArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    characterUsed<T extends UserCharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCharacterDefaultArgs<ExtArgs>>): Prisma__UserCharacterClient<$Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BattleParticipant model
   */
  interface BattleParticipantFieldRefs {
    readonly id: FieldRef<"BattleParticipant", 'Int'>
    readonly battleId: FieldRef<"BattleParticipant", 'Int'>
    readonly userId: FieldRef<"BattleParticipant", 'Int'>
    readonly userCharacterId: FieldRef<"BattleParticipant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BattleParticipant findUnique
   */
  export type BattleParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * Filter, which BattleParticipant to fetch.
     */
    where: BattleParticipantWhereUniqueInput
  }

  /**
   * BattleParticipant findUniqueOrThrow
   */
  export type BattleParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * Filter, which BattleParticipant to fetch.
     */
    where: BattleParticipantWhereUniqueInput
  }

  /**
   * BattleParticipant findFirst
   */
  export type BattleParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * Filter, which BattleParticipant to fetch.
     */
    where?: BattleParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleParticipants to fetch.
     */
    orderBy?: BattleParticipantOrderByWithRelationInput | BattleParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleParticipants.
     */
    cursor?: BattleParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleParticipants.
     */
    distinct?: BattleParticipantScalarFieldEnum | BattleParticipantScalarFieldEnum[]
  }

  /**
   * BattleParticipant findFirstOrThrow
   */
  export type BattleParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * Filter, which BattleParticipant to fetch.
     */
    where?: BattleParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleParticipants to fetch.
     */
    orderBy?: BattleParticipantOrderByWithRelationInput | BattleParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleParticipants.
     */
    cursor?: BattleParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleParticipants.
     */
    distinct?: BattleParticipantScalarFieldEnum | BattleParticipantScalarFieldEnum[]
  }

  /**
   * BattleParticipant findMany
   */
  export type BattleParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * Filter, which BattleParticipants to fetch.
     */
    where?: BattleParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleParticipants to fetch.
     */
    orderBy?: BattleParticipantOrderByWithRelationInput | BattleParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BattleParticipants.
     */
    cursor?: BattleParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleParticipants.
     */
    skip?: number
    distinct?: BattleParticipantScalarFieldEnum | BattleParticipantScalarFieldEnum[]
  }

  /**
   * BattleParticipant create
   */
  export type BattleParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a BattleParticipant.
     */
    data: XOR<BattleParticipantCreateInput, BattleParticipantUncheckedCreateInput>
  }

  /**
   * BattleParticipant createMany
   */
  export type BattleParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BattleParticipants.
     */
    data: BattleParticipantCreateManyInput | BattleParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BattleParticipant createManyAndReturn
   */
  export type BattleParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many BattleParticipants.
     */
    data: BattleParticipantCreateManyInput | BattleParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BattleParticipant update
   */
  export type BattleParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a BattleParticipant.
     */
    data: XOR<BattleParticipantUpdateInput, BattleParticipantUncheckedUpdateInput>
    /**
     * Choose, which BattleParticipant to update.
     */
    where: BattleParticipantWhereUniqueInput
  }

  /**
   * BattleParticipant updateMany
   */
  export type BattleParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BattleParticipants.
     */
    data: XOR<BattleParticipantUpdateManyMutationInput, BattleParticipantUncheckedUpdateManyInput>
    /**
     * Filter which BattleParticipants to update
     */
    where?: BattleParticipantWhereInput
    /**
     * Limit how many BattleParticipants to update.
     */
    limit?: number
  }

  /**
   * BattleParticipant updateManyAndReturn
   */
  export type BattleParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * The data used to update BattleParticipants.
     */
    data: XOR<BattleParticipantUpdateManyMutationInput, BattleParticipantUncheckedUpdateManyInput>
    /**
     * Filter which BattleParticipants to update
     */
    where?: BattleParticipantWhereInput
    /**
     * Limit how many BattleParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BattleParticipant upsert
   */
  export type BattleParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the BattleParticipant to update in case it exists.
     */
    where: BattleParticipantWhereUniqueInput
    /**
     * In case the BattleParticipant found by the `where` argument doesn't exist, create a new BattleParticipant with this data.
     */
    create: XOR<BattleParticipantCreateInput, BattleParticipantUncheckedCreateInput>
    /**
     * In case the BattleParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleParticipantUpdateInput, BattleParticipantUncheckedUpdateInput>
  }

  /**
   * BattleParticipant delete
   */
  export type BattleParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
    /**
     * Filter which BattleParticipant to delete.
     */
    where: BattleParticipantWhereUniqueInput
  }

  /**
   * BattleParticipant deleteMany
   */
  export type BattleParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleParticipants to delete
     */
    where?: BattleParticipantWhereInput
    /**
     * Limit how many BattleParticipants to delete.
     */
    limit?: number
  }

  /**
   * BattleParticipant without action
   */
  export type BattleParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleParticipant
     */
    select?: BattleParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleParticipant
     */
    omit?: BattleParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    baseHp: 'baseHp',
    baseAttack: 'baseAttack',
    minLevel: 'minLevel',
    imageUrl: 'imageUrl'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const UserCharacterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    characterId: 'characterId',
    level: 'level',
    experience: 'experience'
  };

  export type UserCharacterScalarFieldEnum = (typeof UserCharacterScalarFieldEnum)[keyof typeof UserCharacterScalarFieldEnum]


  export const BattleScalarFieldEnum: {
    id: 'id',
    status: 'status',
    winnerId: 'winnerId',
    createdAt: 'createdAt',
    finishedAt: 'finishedAt'
  };

  export type BattleScalarFieldEnum = (typeof BattleScalarFieldEnum)[keyof typeof BattleScalarFieldEnum]


  export const BattleParticipantScalarFieldEnum: {
    id: 'id',
    battleId: 'battleId',
    userId: 'userId',
    userCharacterId: 'userCharacterId'
  };

  export type BattleParticipantScalarFieldEnum = (typeof BattleParticipantScalarFieldEnum)[keyof typeof BattleParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BattleStatus'
   */
  export type EnumBattleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BattleStatus'>
    


  /**
   * Reference to a field of type 'BattleStatus[]'
   */
  export type ListEnumBattleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BattleStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    characters?: UserCharacterListRelationFilter
    battlesAsPlayer?: BattleParticipantListRelationFilter
    battlesWon?: BattleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    characters?: UserCharacterOrderByRelationAggregateInput
    battlesAsPlayer?: BattleParticipantOrderByRelationAggregateInput
    battlesWon?: BattleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    nickname?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    characters?: UserCharacterListRelationFilter
    battlesAsPlayer?: BattleParticipantListRelationFilter
    battlesWon?: BattleListRelationFilter
  }, "id" | "email" | "nickname">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    level?: IntWithAggregatesFilter<"User"> | number
    experience?: IntWithAggregatesFilter<"User"> | number
    wins?: IntWithAggregatesFilter<"User"> | number
    losses?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    baseHp?: IntFilter<"Character"> | number
    baseAttack?: IntFilter<"Character"> | number
    minLevel?: IntFilter<"Character"> | number
    imageUrl?: StringNullableFilter<"Character"> | string | null
    instances?: UserCharacterListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    baseHp?: SortOrder
    baseAttack?: SortOrder
    minLevel?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    instances?: UserCharacterOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    name?: StringFilter<"Character"> | string
    baseHp?: IntFilter<"Character"> | number
    baseAttack?: IntFilter<"Character"> | number
    minLevel?: IntFilter<"Character"> | number
    imageUrl?: StringNullableFilter<"Character"> | string | null
    instances?: UserCharacterListRelationFilter
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    baseHp?: SortOrder
    baseAttack?: SortOrder
    minLevel?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Character"> | number
    name?: StringWithAggregatesFilter<"Character"> | string
    baseHp?: IntWithAggregatesFilter<"Character"> | number
    baseAttack?: IntWithAggregatesFilter<"Character"> | number
    minLevel?: IntWithAggregatesFilter<"Character"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Character"> | string | null
  }

  export type UserCharacterWhereInput = {
    AND?: UserCharacterWhereInput | UserCharacterWhereInput[]
    OR?: UserCharacterWhereInput[]
    NOT?: UserCharacterWhereInput | UserCharacterWhereInput[]
    id?: IntFilter<"UserCharacter"> | number
    userId?: IntFilter<"UserCharacter"> | number
    characterId?: IntFilter<"UserCharacter"> | number
    level?: IntFilter<"UserCharacter"> | number
    experience?: IntFilter<"UserCharacter"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    battles?: BattleParticipantListRelationFilter
  }

  export type UserCharacterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    user?: UserOrderByWithRelationInput
    character?: CharacterOrderByWithRelationInput
    battles?: BattleParticipantOrderByRelationAggregateInput
  }

  export type UserCharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserCharacterWhereInput | UserCharacterWhereInput[]
    OR?: UserCharacterWhereInput[]
    NOT?: UserCharacterWhereInput | UserCharacterWhereInput[]
    userId?: IntFilter<"UserCharacter"> | number
    characterId?: IntFilter<"UserCharacter"> | number
    level?: IntFilter<"UserCharacter"> | number
    experience?: IntFilter<"UserCharacter"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    battles?: BattleParticipantListRelationFilter
  }, "id">

  export type UserCharacterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    _count?: UserCharacterCountOrderByAggregateInput
    _avg?: UserCharacterAvgOrderByAggregateInput
    _max?: UserCharacterMaxOrderByAggregateInput
    _min?: UserCharacterMinOrderByAggregateInput
    _sum?: UserCharacterSumOrderByAggregateInput
  }

  export type UserCharacterScalarWhereWithAggregatesInput = {
    AND?: UserCharacterScalarWhereWithAggregatesInput | UserCharacterScalarWhereWithAggregatesInput[]
    OR?: UserCharacterScalarWhereWithAggregatesInput[]
    NOT?: UserCharacterScalarWhereWithAggregatesInput | UserCharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCharacter"> | number
    userId?: IntWithAggregatesFilter<"UserCharacter"> | number
    characterId?: IntWithAggregatesFilter<"UserCharacter"> | number
    level?: IntWithAggregatesFilter<"UserCharacter"> | number
    experience?: IntWithAggregatesFilter<"UserCharacter"> | number
  }

  export type BattleWhereInput = {
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    id?: IntFilter<"Battle"> | number
    status?: EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus
    winnerId?: IntNullableFilter<"Battle"> | number | null
    createdAt?: DateTimeFilter<"Battle"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Battle"> | Date | string | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    participants?: BattleParticipantListRelationFilter
  }

  export type BattleOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    winner?: UserOrderByWithRelationInput
    participants?: BattleParticipantOrderByRelationAggregateInput
  }

  export type BattleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    status?: EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus
    winnerId?: IntNullableFilter<"Battle"> | number | null
    createdAt?: DateTimeFilter<"Battle"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Battle"> | Date | string | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    participants?: BattleParticipantListRelationFilter
  }, "id">

  export type BattleOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: BattleCountOrderByAggregateInput
    _avg?: BattleAvgOrderByAggregateInput
    _max?: BattleMaxOrderByAggregateInput
    _min?: BattleMinOrderByAggregateInput
    _sum?: BattleSumOrderByAggregateInput
  }

  export type BattleScalarWhereWithAggregatesInput = {
    AND?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    OR?: BattleScalarWhereWithAggregatesInput[]
    NOT?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Battle"> | number
    status?: EnumBattleStatusWithAggregatesFilter<"Battle"> | $Enums.BattleStatus
    winnerId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Battle"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Battle"> | Date | string | null
  }

  export type BattleParticipantWhereInput = {
    AND?: BattleParticipantWhereInput | BattleParticipantWhereInput[]
    OR?: BattleParticipantWhereInput[]
    NOT?: BattleParticipantWhereInput | BattleParticipantWhereInput[]
    id?: IntFilter<"BattleParticipant"> | number
    battleId?: IntFilter<"BattleParticipant"> | number
    userId?: IntFilter<"BattleParticipant"> | number
    userCharacterId?: IntFilter<"BattleParticipant"> | number
    battle?: XOR<BattleScalarRelationFilter, BattleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    characterUsed?: XOR<UserCharacterScalarRelationFilter, UserCharacterWhereInput>
  }

  export type BattleParticipantOrderByWithRelationInput = {
    id?: SortOrder
    battleId?: SortOrder
    userId?: SortOrder
    userCharacterId?: SortOrder
    battle?: BattleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    characterUsed?: UserCharacterOrderByWithRelationInput
  }

  export type BattleParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BattleParticipantWhereInput | BattleParticipantWhereInput[]
    OR?: BattleParticipantWhereInput[]
    NOT?: BattleParticipantWhereInput | BattleParticipantWhereInput[]
    battleId?: IntFilter<"BattleParticipant"> | number
    userId?: IntFilter<"BattleParticipant"> | number
    userCharacterId?: IntFilter<"BattleParticipant"> | number
    battle?: XOR<BattleScalarRelationFilter, BattleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    characterUsed?: XOR<UserCharacterScalarRelationFilter, UserCharacterWhereInput>
  }, "id">

  export type BattleParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    battleId?: SortOrder
    userId?: SortOrder
    userCharacterId?: SortOrder
    _count?: BattleParticipantCountOrderByAggregateInput
    _avg?: BattleParticipantAvgOrderByAggregateInput
    _max?: BattleParticipantMaxOrderByAggregateInput
    _min?: BattleParticipantMinOrderByAggregateInput
    _sum?: BattleParticipantSumOrderByAggregateInput
  }

  export type BattleParticipantScalarWhereWithAggregatesInput = {
    AND?: BattleParticipantScalarWhereWithAggregatesInput | BattleParticipantScalarWhereWithAggregatesInput[]
    OR?: BattleParticipantScalarWhereWithAggregatesInput[]
    NOT?: BattleParticipantScalarWhereWithAggregatesInput | BattleParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BattleParticipant"> | number
    battleId?: IntWithAggregatesFilter<"BattleParticipant"> | number
    userId?: IntWithAggregatesFilter<"BattleParticipant"> | number
    userCharacterId?: IntWithAggregatesFilter<"BattleParticipant"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    characters?: UserCharacterCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantCreateNestedManyWithoutUserInput
    battlesWon?: BattleCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    characters?: UserCharacterUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantUncheckedCreateNestedManyWithoutUserInput
    battlesWon?: BattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    characters?: UserCharacterUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    characters?: UserCharacterUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUncheckedUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    userId: number
    roleId: number
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyInput = {
    id?: number
    userId: number
    roleId: number
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterCreateInput = {
    name: string
    baseHp: number
    baseAttack: number
    minLevel?: number
    imageUrl?: string | null
    instances?: UserCharacterCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: number
    name: string
    baseHp: number
    baseAttack: number
    minLevel?: number
    imageUrl?: string | null
    instances?: UserCharacterUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    baseAttack?: IntFieldUpdateOperationsInput | number
    minLevel?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instances?: UserCharacterUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    baseAttack?: IntFieldUpdateOperationsInput | number
    minLevel?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instances?: UserCharacterUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: number
    name: string
    baseHp: number
    baseAttack: number
    minLevel?: number
    imageUrl?: string | null
  }

  export type CharacterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    baseAttack?: IntFieldUpdateOperationsInput | number
    minLevel?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    baseAttack?: IntFieldUpdateOperationsInput | number
    minLevel?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCharacterCreateInput = {
    level?: number
    experience?: number
    user: UserCreateNestedOneWithoutCharactersInput
    character: CharacterCreateNestedOneWithoutInstancesInput
    battles?: BattleParticipantCreateNestedManyWithoutCharacterUsedInput
  }

  export type UserCharacterUncheckedCreateInput = {
    id?: number
    userId: number
    characterId: number
    level?: number
    experience?: number
    battles?: BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput
  }

  export type UserCharacterUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    character?: CharacterUpdateOneRequiredWithoutInstancesNestedInput
    battles?: BattleParticipantUpdateManyWithoutCharacterUsedNestedInput
  }

  export type UserCharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    battles?: BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput
  }

  export type UserCharacterCreateManyInput = {
    id?: number
    userId: number
    characterId: number
    level?: number
    experience?: number
  }

  export type UserCharacterUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type UserCharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type BattleCreateInput = {
    status?: $Enums.BattleStatus
    createdAt?: Date | string
    finishedAt?: Date | string | null
    winner?: UserCreateNestedOneWithoutBattlesWonInput
    participants?: BattleParticipantCreateNestedManyWithoutBattleInput
  }

  export type BattleUncheckedCreateInput = {
    id?: number
    status?: $Enums.BattleStatus
    winnerId?: number | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
    participants?: BattleParticipantUncheckedCreateNestedManyWithoutBattleInput
  }

  export type BattleUpdateInput = {
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: UserUpdateOneWithoutBattlesWonNestedInput
    participants?: BattleParticipantUpdateManyWithoutBattleNestedInput
  }

  export type BattleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: BattleParticipantUncheckedUpdateManyWithoutBattleNestedInput
  }

  export type BattleCreateManyInput = {
    id?: number
    status?: $Enums.BattleStatus
    winnerId?: number | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type BattleUpdateManyMutationInput = {
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BattleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BattleParticipantCreateInput = {
    battle: BattleCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutBattlesAsPlayerInput
    characterUsed: UserCharacterCreateNestedOneWithoutBattlesInput
  }

  export type BattleParticipantUncheckedCreateInput = {
    id?: number
    battleId: number
    userId: number
    userCharacterId: number
  }

  export type BattleParticipantUpdateInput = {
    battle?: BattleUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutBattlesAsPlayerNestedInput
    characterUsed?: UserCharacterUpdateOneRequiredWithoutBattlesNestedInput
  }

  export type BattleParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    battleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userCharacterId?: IntFieldUpdateOperationsInput | number
  }

  export type BattleParticipantCreateManyInput = {
    id?: number
    battleId: number
    userId: number
    userCharacterId: number
  }

  export type BattleParticipantUpdateManyMutationInput = {

  }

  export type BattleParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    battleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userCharacterId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type UserCharacterListRelationFilter = {
    every?: UserCharacterWhereInput
    some?: UserCharacterWhereInput
    none?: UserCharacterWhereInput
  }

  export type BattleParticipantListRelationFilter = {
    every?: BattleParticipantWhereInput
    some?: BattleParticipantWhereInput
    none?: BattleParticipantWhereInput
  }

  export type BattleListRelationFilter = {
    every?: BattleWhereInput
    some?: BattleWhereInput
    none?: BattleWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BattleParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BattleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseHp?: SortOrder
    baseAttack?: SortOrder
    minLevel?: SortOrder
    imageUrl?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    baseHp?: SortOrder
    baseAttack?: SortOrder
    minLevel?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseHp?: SortOrder
    baseAttack?: SortOrder
    minLevel?: SortOrder
    imageUrl?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseHp?: SortOrder
    baseAttack?: SortOrder
    minLevel?: SortOrder
    imageUrl?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    id?: SortOrder
    baseHp?: SortOrder
    baseAttack?: SortOrder
    minLevel?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type UserCharacterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
  }

  export type UserCharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
  }

  export type UserCharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
  }

  export type UserCharacterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
  }

  export type UserCharacterSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
  }

  export type EnumBattleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusFilter<$PrismaModel> | $Enums.BattleStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BattleCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type BattleAvgOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
  }

  export type BattleMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type BattleMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type BattleSumOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
  }

  export type EnumBattleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusWithAggregatesFilter<$PrismaModel> | $Enums.BattleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBattleStatusFilter<$PrismaModel>
    _max?: NestedEnumBattleStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BattleScalarRelationFilter = {
    is?: BattleWhereInput
    isNot?: BattleWhereInput
  }

  export type UserCharacterScalarRelationFilter = {
    is?: UserCharacterWhereInput
    isNot?: UserCharacterWhereInput
  }

  export type BattleParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    battleId?: SortOrder
    userId?: SortOrder
    userCharacterId?: SortOrder
  }

  export type BattleParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    battleId?: SortOrder
    userId?: SortOrder
    userCharacterId?: SortOrder
  }

  export type BattleParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    battleId?: SortOrder
    userId?: SortOrder
    userCharacterId?: SortOrder
  }

  export type BattleParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    battleId?: SortOrder
    userId?: SortOrder
    userCharacterId?: SortOrder
  }

  export type BattleParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    battleId?: SortOrder
    userId?: SortOrder
    userCharacterId?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserCharacterCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCharacterCreateWithoutUserInput, UserCharacterUncheckedCreateWithoutUserInput> | UserCharacterCreateWithoutUserInput[] | UserCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutUserInput | UserCharacterCreateOrConnectWithoutUserInput[]
    createMany?: UserCharacterCreateManyUserInputEnvelope
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
  }

  export type BattleParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<BattleParticipantCreateWithoutUserInput, BattleParticipantUncheckedCreateWithoutUserInput> | BattleParticipantCreateWithoutUserInput[] | BattleParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutUserInput | BattleParticipantCreateOrConnectWithoutUserInput[]
    createMany?: BattleParticipantCreateManyUserInputEnvelope
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutWinnerInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserCharacterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCharacterCreateWithoutUserInput, UserCharacterUncheckedCreateWithoutUserInput> | UserCharacterCreateWithoutUserInput[] | UserCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutUserInput | UserCharacterCreateOrConnectWithoutUserInput[]
    createMany?: UserCharacterCreateManyUserInputEnvelope
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
  }

  export type BattleParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BattleParticipantCreateWithoutUserInput, BattleParticipantUncheckedCreateWithoutUserInput> | BattleParticipantCreateWithoutUserInput[] | BattleParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutUserInput | BattleParticipantCreateOrConnectWithoutUserInput[]
    createMany?: BattleParticipantCreateManyUserInputEnvelope
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCharacterUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCharacterCreateWithoutUserInput, UserCharacterUncheckedCreateWithoutUserInput> | UserCharacterCreateWithoutUserInput[] | UserCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutUserInput | UserCharacterCreateOrConnectWithoutUserInput[]
    upsert?: UserCharacterUpsertWithWhereUniqueWithoutUserInput | UserCharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCharacterCreateManyUserInputEnvelope
    set?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    disconnect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    delete?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    update?: UserCharacterUpdateWithWhereUniqueWithoutUserInput | UserCharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCharacterUpdateManyWithWhereWithoutUserInput | UserCharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCharacterScalarWhereInput | UserCharacterScalarWhereInput[]
  }

  export type BattleParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<BattleParticipantCreateWithoutUserInput, BattleParticipantUncheckedCreateWithoutUserInput> | BattleParticipantCreateWithoutUserInput[] | BattleParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutUserInput | BattleParticipantCreateOrConnectWithoutUserInput[]
    upsert?: BattleParticipantUpsertWithWhereUniqueWithoutUserInput | BattleParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BattleParticipantCreateManyUserInputEnvelope
    set?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    disconnect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    delete?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    update?: BattleParticipantUpdateWithWhereUniqueWithoutUserInput | BattleParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BattleParticipantUpdateManyWithWhereWithoutUserInput | BattleParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutWinnerInput | BattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutWinnerInput | BattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutWinnerInput | BattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCharacterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCharacterCreateWithoutUserInput, UserCharacterUncheckedCreateWithoutUserInput> | UserCharacterCreateWithoutUserInput[] | UserCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutUserInput | UserCharacterCreateOrConnectWithoutUserInput[]
    upsert?: UserCharacterUpsertWithWhereUniqueWithoutUserInput | UserCharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCharacterCreateManyUserInputEnvelope
    set?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    disconnect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    delete?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    update?: UserCharacterUpdateWithWhereUniqueWithoutUserInput | UserCharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCharacterUpdateManyWithWhereWithoutUserInput | UserCharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCharacterScalarWhereInput | UserCharacterScalarWhereInput[]
  }

  export type BattleParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BattleParticipantCreateWithoutUserInput, BattleParticipantUncheckedCreateWithoutUserInput> | BattleParticipantCreateWithoutUserInput[] | BattleParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutUserInput | BattleParticipantCreateOrConnectWithoutUserInput[]
    upsert?: BattleParticipantUpsertWithWhereUniqueWithoutUserInput | BattleParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BattleParticipantCreateManyUserInputEnvelope
    set?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    disconnect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    delete?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    update?: BattleParticipantUpdateWithWhereUniqueWithoutUserInput | BattleParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BattleParticipantUpdateManyWithWhereWithoutUserInput | BattleParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutWinnerInput | BattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutWinnerInput | BattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutWinnerInput | BattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserCharacterCreateNestedManyWithoutCharacterInput = {
    create?: XOR<UserCharacterCreateWithoutCharacterInput, UserCharacterUncheckedCreateWithoutCharacterInput> | UserCharacterCreateWithoutCharacterInput[] | UserCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutCharacterInput | UserCharacterCreateOrConnectWithoutCharacterInput[]
    createMany?: UserCharacterCreateManyCharacterInputEnvelope
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
  }

  export type UserCharacterUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<UserCharacterCreateWithoutCharacterInput, UserCharacterUncheckedCreateWithoutCharacterInput> | UserCharacterCreateWithoutCharacterInput[] | UserCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutCharacterInput | UserCharacterCreateOrConnectWithoutCharacterInput[]
    createMany?: UserCharacterCreateManyCharacterInputEnvelope
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCharacterUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<UserCharacterCreateWithoutCharacterInput, UserCharacterUncheckedCreateWithoutCharacterInput> | UserCharacterCreateWithoutCharacterInput[] | UserCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutCharacterInput | UserCharacterCreateOrConnectWithoutCharacterInput[]
    upsert?: UserCharacterUpsertWithWhereUniqueWithoutCharacterInput | UserCharacterUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: UserCharacterCreateManyCharacterInputEnvelope
    set?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    disconnect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    delete?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    update?: UserCharacterUpdateWithWhereUniqueWithoutCharacterInput | UserCharacterUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: UserCharacterUpdateManyWithWhereWithoutCharacterInput | UserCharacterUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: UserCharacterScalarWhereInput | UserCharacterScalarWhereInput[]
  }

  export type UserCharacterUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<UserCharacterCreateWithoutCharacterInput, UserCharacterUncheckedCreateWithoutCharacterInput> | UserCharacterCreateWithoutCharacterInput[] | UserCharacterUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: UserCharacterCreateOrConnectWithoutCharacterInput | UserCharacterCreateOrConnectWithoutCharacterInput[]
    upsert?: UserCharacterUpsertWithWhereUniqueWithoutCharacterInput | UserCharacterUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: UserCharacterCreateManyCharacterInputEnvelope
    set?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    disconnect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    delete?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    connect?: UserCharacterWhereUniqueInput | UserCharacterWhereUniqueInput[]
    update?: UserCharacterUpdateWithWhereUniqueWithoutCharacterInput | UserCharacterUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: UserCharacterUpdateManyWithWhereWithoutCharacterInput | UserCharacterUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: UserCharacterScalarWhereInput | UserCharacterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    connect?: UserWhereUniqueInput
  }

  export type CharacterCreateNestedOneWithoutInstancesInput = {
    create?: XOR<CharacterCreateWithoutInstancesInput, CharacterUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutInstancesInput
    connect?: CharacterWhereUniqueInput
  }

  export type BattleParticipantCreateNestedManyWithoutCharacterUsedInput = {
    create?: XOR<BattleParticipantCreateWithoutCharacterUsedInput, BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | BattleParticipantCreateWithoutCharacterUsedInput[] | BattleParticipantUncheckedCreateWithoutCharacterUsedInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutCharacterUsedInput | BattleParticipantCreateOrConnectWithoutCharacterUsedInput[]
    createMany?: BattleParticipantCreateManyCharacterUsedInputEnvelope
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
  }

  export type BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput = {
    create?: XOR<BattleParticipantCreateWithoutCharacterUsedInput, BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | BattleParticipantCreateWithoutCharacterUsedInput[] | BattleParticipantUncheckedCreateWithoutCharacterUsedInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutCharacterUsedInput | BattleParticipantCreateOrConnectWithoutCharacterUsedInput[]
    createMany?: BattleParticipantCreateManyCharacterUsedInputEnvelope
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    upsert?: UserUpsertWithoutCharactersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCharactersInput, UserUpdateWithoutCharactersInput>, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type CharacterUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<CharacterCreateWithoutInstancesInput, CharacterUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutInstancesInput
    upsert?: CharacterUpsertWithoutInstancesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutInstancesInput, CharacterUpdateWithoutInstancesInput>, CharacterUncheckedUpdateWithoutInstancesInput>
  }

  export type BattleParticipantUpdateManyWithoutCharacterUsedNestedInput = {
    create?: XOR<BattleParticipantCreateWithoutCharacterUsedInput, BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | BattleParticipantCreateWithoutCharacterUsedInput[] | BattleParticipantUncheckedCreateWithoutCharacterUsedInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutCharacterUsedInput | BattleParticipantCreateOrConnectWithoutCharacterUsedInput[]
    upsert?: BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput | BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput[]
    createMany?: BattleParticipantCreateManyCharacterUsedInputEnvelope
    set?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    disconnect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    delete?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    update?: BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput | BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput[]
    updateMany?: BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput | BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput[]
    deleteMany?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
  }

  export type BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput = {
    create?: XOR<BattleParticipantCreateWithoutCharacterUsedInput, BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | BattleParticipantCreateWithoutCharacterUsedInput[] | BattleParticipantUncheckedCreateWithoutCharacterUsedInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutCharacterUsedInput | BattleParticipantCreateOrConnectWithoutCharacterUsedInput[]
    upsert?: BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput | BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput[]
    createMany?: BattleParticipantCreateManyCharacterUsedInputEnvelope
    set?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    disconnect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    delete?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    update?: BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput | BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput[]
    updateMany?: BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput | BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput[]
    deleteMany?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBattlesWonInput = {
    create?: XOR<UserCreateWithoutBattlesWonInput, UserUncheckedCreateWithoutBattlesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesWonInput
    connect?: UserWhereUniqueInput
  }

  export type BattleParticipantCreateNestedManyWithoutBattleInput = {
    create?: XOR<BattleParticipantCreateWithoutBattleInput, BattleParticipantUncheckedCreateWithoutBattleInput> | BattleParticipantCreateWithoutBattleInput[] | BattleParticipantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutBattleInput | BattleParticipantCreateOrConnectWithoutBattleInput[]
    createMany?: BattleParticipantCreateManyBattleInputEnvelope
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
  }

  export type BattleParticipantUncheckedCreateNestedManyWithoutBattleInput = {
    create?: XOR<BattleParticipantCreateWithoutBattleInput, BattleParticipantUncheckedCreateWithoutBattleInput> | BattleParticipantCreateWithoutBattleInput[] | BattleParticipantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutBattleInput | BattleParticipantCreateOrConnectWithoutBattleInput[]
    createMany?: BattleParticipantCreateManyBattleInputEnvelope
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
  }

  export type EnumBattleStatusFieldUpdateOperationsInput = {
    set?: $Enums.BattleStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutBattlesWonNestedInput = {
    create?: XOR<UserCreateWithoutBattlesWonInput, UserUncheckedCreateWithoutBattlesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesWonInput
    upsert?: UserUpsertWithoutBattlesWonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBattlesWonInput, UserUpdateWithoutBattlesWonInput>, UserUncheckedUpdateWithoutBattlesWonInput>
  }

  export type BattleParticipantUpdateManyWithoutBattleNestedInput = {
    create?: XOR<BattleParticipantCreateWithoutBattleInput, BattleParticipantUncheckedCreateWithoutBattleInput> | BattleParticipantCreateWithoutBattleInput[] | BattleParticipantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutBattleInput | BattleParticipantCreateOrConnectWithoutBattleInput[]
    upsert?: BattleParticipantUpsertWithWhereUniqueWithoutBattleInput | BattleParticipantUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: BattleParticipantCreateManyBattleInputEnvelope
    set?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    disconnect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    delete?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    update?: BattleParticipantUpdateWithWhereUniqueWithoutBattleInput | BattleParticipantUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: BattleParticipantUpdateManyWithWhereWithoutBattleInput | BattleParticipantUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BattleParticipantUncheckedUpdateManyWithoutBattleNestedInput = {
    create?: XOR<BattleParticipantCreateWithoutBattleInput, BattleParticipantUncheckedCreateWithoutBattleInput> | BattleParticipantCreateWithoutBattleInput[] | BattleParticipantUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: BattleParticipantCreateOrConnectWithoutBattleInput | BattleParticipantCreateOrConnectWithoutBattleInput[]
    upsert?: BattleParticipantUpsertWithWhereUniqueWithoutBattleInput | BattleParticipantUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: BattleParticipantCreateManyBattleInputEnvelope
    set?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    disconnect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    delete?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    connect?: BattleParticipantWhereUniqueInput | BattleParticipantWhereUniqueInput[]
    update?: BattleParticipantUpdateWithWhereUniqueWithoutBattleInput | BattleParticipantUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: BattleParticipantUpdateManyWithWhereWithoutBattleInput | BattleParticipantUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
  }

  export type BattleCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<BattleCreateWithoutParticipantsInput, BattleUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: BattleCreateOrConnectWithoutParticipantsInput
    connect?: BattleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBattlesAsPlayerInput = {
    create?: XOR<UserCreateWithoutBattlesAsPlayerInput, UserUncheckedCreateWithoutBattlesAsPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCharacterCreateNestedOneWithoutBattlesInput = {
    create?: XOR<UserCharacterCreateWithoutBattlesInput, UserCharacterUncheckedCreateWithoutBattlesInput>
    connectOrCreate?: UserCharacterCreateOrConnectWithoutBattlesInput
    connect?: UserCharacterWhereUniqueInput
  }

  export type BattleUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<BattleCreateWithoutParticipantsInput, BattleUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: BattleCreateOrConnectWithoutParticipantsInput
    upsert?: BattleUpsertWithoutParticipantsInput
    connect?: BattleWhereUniqueInput
    update?: XOR<XOR<BattleUpdateToOneWithWhereWithoutParticipantsInput, BattleUpdateWithoutParticipantsInput>, BattleUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutBattlesAsPlayerNestedInput = {
    create?: XOR<UserCreateWithoutBattlesAsPlayerInput, UserUncheckedCreateWithoutBattlesAsPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayerInput
    upsert?: UserUpsertWithoutBattlesAsPlayerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBattlesAsPlayerInput, UserUpdateWithoutBattlesAsPlayerInput>, UserUncheckedUpdateWithoutBattlesAsPlayerInput>
  }

  export type UserCharacterUpdateOneRequiredWithoutBattlesNestedInput = {
    create?: XOR<UserCharacterCreateWithoutBattlesInput, UserCharacterUncheckedCreateWithoutBattlesInput>
    connectOrCreate?: UserCharacterCreateOrConnectWithoutBattlesInput
    upsert?: UserCharacterUpsertWithoutBattlesInput
    connect?: UserCharacterWhereUniqueInput
    update?: XOR<XOR<UserCharacterUpdateToOneWithWhereWithoutBattlesInput, UserCharacterUpdateWithoutBattlesInput>, UserCharacterUncheckedUpdateWithoutBattlesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBattleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusFilter<$PrismaModel> | $Enums.BattleStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBattleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusWithAggregatesFilter<$PrismaModel> | $Enums.BattleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBattleStatusFilter<$PrismaModel>
    _max?: NestedEnumBattleStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: number
    roleId: number
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCharacterCreateWithoutUserInput = {
    level?: number
    experience?: number
    character: CharacterCreateNestedOneWithoutInstancesInput
    battles?: BattleParticipantCreateNestedManyWithoutCharacterUsedInput
  }

  export type UserCharacterUncheckedCreateWithoutUserInput = {
    id?: number
    characterId: number
    level?: number
    experience?: number
    battles?: BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput
  }

  export type UserCharacterCreateOrConnectWithoutUserInput = {
    where: UserCharacterWhereUniqueInput
    create: XOR<UserCharacterCreateWithoutUserInput, UserCharacterUncheckedCreateWithoutUserInput>
  }

  export type UserCharacterCreateManyUserInputEnvelope = {
    data: UserCharacterCreateManyUserInput | UserCharacterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BattleParticipantCreateWithoutUserInput = {
    battle: BattleCreateNestedOneWithoutParticipantsInput
    characterUsed: UserCharacterCreateNestedOneWithoutBattlesInput
  }

  export type BattleParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    battleId: number
    userCharacterId: number
  }

  export type BattleParticipantCreateOrConnectWithoutUserInput = {
    where: BattleParticipantWhereUniqueInput
    create: XOR<BattleParticipantCreateWithoutUserInput, BattleParticipantUncheckedCreateWithoutUserInput>
  }

  export type BattleParticipantCreateManyUserInputEnvelope = {
    data: BattleParticipantCreateManyUserInput | BattleParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutWinnerInput = {
    status?: $Enums.BattleStatus
    createdAt?: Date | string
    finishedAt?: Date | string | null
    participants?: BattleParticipantCreateNestedManyWithoutBattleInput
  }

  export type BattleUncheckedCreateWithoutWinnerInput = {
    id?: number
    status?: $Enums.BattleStatus
    createdAt?: Date | string
    finishedAt?: Date | string | null
    participants?: BattleParticipantUncheckedCreateNestedManyWithoutBattleInput
  }

  export type BattleCreateOrConnectWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput>
  }

  export type BattleCreateManyWinnerInputEnvelope = {
    data: BattleCreateManyWinnerInput | BattleCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
  }

  export type UserCharacterUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCharacterWhereUniqueInput
    update: XOR<UserCharacterUpdateWithoutUserInput, UserCharacterUncheckedUpdateWithoutUserInput>
    create: XOR<UserCharacterCreateWithoutUserInput, UserCharacterUncheckedCreateWithoutUserInput>
  }

  export type UserCharacterUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCharacterWhereUniqueInput
    data: XOR<UserCharacterUpdateWithoutUserInput, UserCharacterUncheckedUpdateWithoutUserInput>
  }

  export type UserCharacterUpdateManyWithWhereWithoutUserInput = {
    where: UserCharacterScalarWhereInput
    data: XOR<UserCharacterUpdateManyMutationInput, UserCharacterUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCharacterScalarWhereInput = {
    AND?: UserCharacterScalarWhereInput | UserCharacterScalarWhereInput[]
    OR?: UserCharacterScalarWhereInput[]
    NOT?: UserCharacterScalarWhereInput | UserCharacterScalarWhereInput[]
    id?: IntFilter<"UserCharacter"> | number
    userId?: IntFilter<"UserCharacter"> | number
    characterId?: IntFilter<"UserCharacter"> | number
    level?: IntFilter<"UserCharacter"> | number
    experience?: IntFilter<"UserCharacter"> | number
  }

  export type BattleParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: BattleParticipantWhereUniqueInput
    update: XOR<BattleParticipantUpdateWithoutUserInput, BattleParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<BattleParticipantCreateWithoutUserInput, BattleParticipantUncheckedCreateWithoutUserInput>
  }

  export type BattleParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: BattleParticipantWhereUniqueInput
    data: XOR<BattleParticipantUpdateWithoutUserInput, BattleParticipantUncheckedUpdateWithoutUserInput>
  }

  export type BattleParticipantUpdateManyWithWhereWithoutUserInput = {
    where: BattleParticipantScalarWhereInput
    data: XOR<BattleParticipantUpdateManyMutationInput, BattleParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type BattleParticipantScalarWhereInput = {
    AND?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
    OR?: BattleParticipantScalarWhereInput[]
    NOT?: BattleParticipantScalarWhereInput | BattleParticipantScalarWhereInput[]
    id?: IntFilter<"BattleParticipant"> | number
    battleId?: IntFilter<"BattleParticipant"> | number
    userId?: IntFilter<"BattleParticipant"> | number
    userCharacterId?: IntFilter<"BattleParticipant"> | number
  }

  export type BattleUpsertWithWhereUniqueWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutWinnerInput, BattleUncheckedUpdateWithoutWinnerInput>
    create: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutWinnerInput, BattleUncheckedUpdateWithoutWinnerInput>
  }

  export type BattleUpdateManyWithWhereWithoutWinnerInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutWinnerInput>
  }

  export type BattleScalarWhereInput = {
    AND?: BattleScalarWhereInput | BattleScalarWhereInput[]
    OR?: BattleScalarWhereInput[]
    NOT?: BattleScalarWhereInput | BattleScalarWhereInput[]
    id?: IntFilter<"Battle"> | number
    status?: EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus
    winnerId?: IntNullableFilter<"Battle"> | number | null
    createdAt?: DateTimeFilter<"Battle"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Battle"> | Date | string | null
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    userId: number
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutRolesInput = {
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: UserCharacterCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantCreateNestedManyWithoutUserInput
    battlesWon?: BattleCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: UserCharacterUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantUncheckedCreateNestedManyWithoutUserInput
    battlesWon?: BattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: UserCharacterUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: UserCharacterUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUncheckedUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCharacterCreateWithoutCharacterInput = {
    level?: number
    experience?: number
    user: UserCreateNestedOneWithoutCharactersInput
    battles?: BattleParticipantCreateNestedManyWithoutCharacterUsedInput
  }

  export type UserCharacterUncheckedCreateWithoutCharacterInput = {
    id?: number
    userId: number
    level?: number
    experience?: number
    battles?: BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput
  }

  export type UserCharacterCreateOrConnectWithoutCharacterInput = {
    where: UserCharacterWhereUniqueInput
    create: XOR<UserCharacterCreateWithoutCharacterInput, UserCharacterUncheckedCreateWithoutCharacterInput>
  }

  export type UserCharacterCreateManyCharacterInputEnvelope = {
    data: UserCharacterCreateManyCharacterInput | UserCharacterCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UserCharacterUpsertWithWhereUniqueWithoutCharacterInput = {
    where: UserCharacterWhereUniqueInput
    update: XOR<UserCharacterUpdateWithoutCharacterInput, UserCharacterUncheckedUpdateWithoutCharacterInput>
    create: XOR<UserCharacterCreateWithoutCharacterInput, UserCharacterUncheckedCreateWithoutCharacterInput>
  }

  export type UserCharacterUpdateWithWhereUniqueWithoutCharacterInput = {
    where: UserCharacterWhereUniqueInput
    data: XOR<UserCharacterUpdateWithoutCharacterInput, UserCharacterUncheckedUpdateWithoutCharacterInput>
  }

  export type UserCharacterUpdateManyWithWhereWithoutCharacterInput = {
    where: UserCharacterScalarWhereInput
    data: XOR<UserCharacterUpdateManyMutationInput, UserCharacterUncheckedUpdateManyWithoutCharacterInput>
  }

  export type UserCreateWithoutCharactersInput = {
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantCreateNestedManyWithoutUserInput
    battlesWon?: BattleCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutCharactersInput = {
    id?: number
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantUncheckedCreateNestedManyWithoutUserInput
    battlesWon?: BattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutCharactersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterCreateWithoutInstancesInput = {
    name: string
    baseHp: number
    baseAttack: number
    minLevel?: number
    imageUrl?: string | null
  }

  export type CharacterUncheckedCreateWithoutInstancesInput = {
    id?: number
    name: string
    baseHp: number
    baseAttack: number
    minLevel?: number
    imageUrl?: string | null
  }

  export type CharacterCreateOrConnectWithoutInstancesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutInstancesInput, CharacterUncheckedCreateWithoutInstancesInput>
  }

  export type BattleParticipantCreateWithoutCharacterUsedInput = {
    battle: BattleCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutBattlesAsPlayerInput
  }

  export type BattleParticipantUncheckedCreateWithoutCharacterUsedInput = {
    id?: number
    battleId: number
    userId: number
  }

  export type BattleParticipantCreateOrConnectWithoutCharacterUsedInput = {
    where: BattleParticipantWhereUniqueInput
    create: XOR<BattleParticipantCreateWithoutCharacterUsedInput, BattleParticipantUncheckedCreateWithoutCharacterUsedInput>
  }

  export type BattleParticipantCreateManyCharacterUsedInputEnvelope = {
    data: BattleParticipantCreateManyCharacterUsedInput | BattleParticipantCreateManyCharacterUsedInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCharactersInput = {
    update: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type UserUpdateWithoutCharactersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCharactersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUncheckedUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type CharacterUpsertWithoutInstancesInput = {
    update: XOR<CharacterUpdateWithoutInstancesInput, CharacterUncheckedUpdateWithoutInstancesInput>
    create: XOR<CharacterCreateWithoutInstancesInput, CharacterUncheckedCreateWithoutInstancesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutInstancesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutInstancesInput, CharacterUncheckedUpdateWithoutInstancesInput>
  }

  export type CharacterUpdateWithoutInstancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    baseAttack?: IntFieldUpdateOperationsInput | number
    minLevel?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterUncheckedUpdateWithoutInstancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    baseAttack?: IntFieldUpdateOperationsInput | number
    minLevel?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput = {
    where: BattleParticipantWhereUniqueInput
    update: XOR<BattleParticipantUpdateWithoutCharacterUsedInput, BattleParticipantUncheckedUpdateWithoutCharacterUsedInput>
    create: XOR<BattleParticipantCreateWithoutCharacterUsedInput, BattleParticipantUncheckedCreateWithoutCharacterUsedInput>
  }

  export type BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput = {
    where: BattleParticipantWhereUniqueInput
    data: XOR<BattleParticipantUpdateWithoutCharacterUsedInput, BattleParticipantUncheckedUpdateWithoutCharacterUsedInput>
  }

  export type BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput = {
    where: BattleParticipantScalarWhereInput
    data: XOR<BattleParticipantUpdateManyMutationInput, BattleParticipantUncheckedUpdateManyWithoutCharacterUsedInput>
  }

  export type UserCreateWithoutBattlesWonInput = {
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    characters?: UserCharacterCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBattlesWonInput = {
    id?: number
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    characters?: UserCharacterUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer?: BattleParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBattlesWonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBattlesWonInput, UserUncheckedCreateWithoutBattlesWonInput>
  }

  export type BattleParticipantCreateWithoutBattleInput = {
    user: UserCreateNestedOneWithoutBattlesAsPlayerInput
    characterUsed: UserCharacterCreateNestedOneWithoutBattlesInput
  }

  export type BattleParticipantUncheckedCreateWithoutBattleInput = {
    id?: number
    userId: number
    userCharacterId: number
  }

  export type BattleParticipantCreateOrConnectWithoutBattleInput = {
    where: BattleParticipantWhereUniqueInput
    create: XOR<BattleParticipantCreateWithoutBattleInput, BattleParticipantUncheckedCreateWithoutBattleInput>
  }

  export type BattleParticipantCreateManyBattleInputEnvelope = {
    data: BattleParticipantCreateManyBattleInput | BattleParticipantCreateManyBattleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBattlesWonInput = {
    update: XOR<UserUpdateWithoutBattlesWonInput, UserUncheckedUpdateWithoutBattlesWonInput>
    create: XOR<UserCreateWithoutBattlesWonInput, UserUncheckedCreateWithoutBattlesWonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBattlesWonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBattlesWonInput, UserUncheckedUpdateWithoutBattlesWonInput>
  }

  export type UserUpdateWithoutBattlesWonInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    characters?: UserCharacterUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBattlesWonInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    characters?: UserCharacterUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer?: BattleParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BattleParticipantUpsertWithWhereUniqueWithoutBattleInput = {
    where: BattleParticipantWhereUniqueInput
    update: XOR<BattleParticipantUpdateWithoutBattleInput, BattleParticipantUncheckedUpdateWithoutBattleInput>
    create: XOR<BattleParticipantCreateWithoutBattleInput, BattleParticipantUncheckedCreateWithoutBattleInput>
  }

  export type BattleParticipantUpdateWithWhereUniqueWithoutBattleInput = {
    where: BattleParticipantWhereUniqueInput
    data: XOR<BattleParticipantUpdateWithoutBattleInput, BattleParticipantUncheckedUpdateWithoutBattleInput>
  }

  export type BattleParticipantUpdateManyWithWhereWithoutBattleInput = {
    where: BattleParticipantScalarWhereInput
    data: XOR<BattleParticipantUpdateManyMutationInput, BattleParticipantUncheckedUpdateManyWithoutBattleInput>
  }

  export type BattleCreateWithoutParticipantsInput = {
    status?: $Enums.BattleStatus
    createdAt?: Date | string
    finishedAt?: Date | string | null
    winner?: UserCreateNestedOneWithoutBattlesWonInput
  }

  export type BattleUncheckedCreateWithoutParticipantsInput = {
    id?: number
    status?: $Enums.BattleStatus
    winnerId?: number | null
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type BattleCreateOrConnectWithoutParticipantsInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutParticipantsInput, BattleUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutBattlesAsPlayerInput = {
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    characters?: UserCharacterCreateNestedManyWithoutUserInput
    battlesWon?: BattleCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutBattlesAsPlayerInput = {
    id?: number
    email: string
    password: string
    nickname: string
    level?: number
    experience?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    characters?: UserCharacterUncheckedCreateNestedManyWithoutUserInput
    battlesWon?: BattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutBattlesAsPlayerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBattlesAsPlayerInput, UserUncheckedCreateWithoutBattlesAsPlayerInput>
  }

  export type UserCharacterCreateWithoutBattlesInput = {
    level?: number
    experience?: number
    user: UserCreateNestedOneWithoutCharactersInput
    character: CharacterCreateNestedOneWithoutInstancesInput
  }

  export type UserCharacterUncheckedCreateWithoutBattlesInput = {
    id?: number
    userId: number
    characterId: number
    level?: number
    experience?: number
  }

  export type UserCharacterCreateOrConnectWithoutBattlesInput = {
    where: UserCharacterWhereUniqueInput
    create: XOR<UserCharacterCreateWithoutBattlesInput, UserCharacterUncheckedCreateWithoutBattlesInput>
  }

  export type BattleUpsertWithoutParticipantsInput = {
    update: XOR<BattleUpdateWithoutParticipantsInput, BattleUncheckedUpdateWithoutParticipantsInput>
    create: XOR<BattleCreateWithoutParticipantsInput, BattleUncheckedCreateWithoutParticipantsInput>
    where?: BattleWhereInput
  }

  export type BattleUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: BattleWhereInput
    data: XOR<BattleUpdateWithoutParticipantsInput, BattleUncheckedUpdateWithoutParticipantsInput>
  }

  export type BattleUpdateWithoutParticipantsInput = {
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: UserUpdateOneWithoutBattlesWonNestedInput
  }

  export type BattleUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutBattlesAsPlayerInput = {
    update: XOR<UserUpdateWithoutBattlesAsPlayerInput, UserUncheckedUpdateWithoutBattlesAsPlayerInput>
    create: XOR<UserCreateWithoutBattlesAsPlayerInput, UserUncheckedCreateWithoutBattlesAsPlayerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBattlesAsPlayerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBattlesAsPlayerInput, UserUncheckedUpdateWithoutBattlesAsPlayerInput>
  }

  export type UserUpdateWithoutBattlesAsPlayerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    characters?: UserCharacterUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBattlesAsPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    characters?: UserCharacterUncheckedUpdateManyWithoutUserNestedInput
    battlesWon?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserCharacterUpsertWithoutBattlesInput = {
    update: XOR<UserCharacterUpdateWithoutBattlesInput, UserCharacterUncheckedUpdateWithoutBattlesInput>
    create: XOR<UserCharacterCreateWithoutBattlesInput, UserCharacterUncheckedCreateWithoutBattlesInput>
    where?: UserCharacterWhereInput
  }

  export type UserCharacterUpdateToOneWithWhereWithoutBattlesInput = {
    where?: UserCharacterWhereInput
    data: XOR<UserCharacterUpdateWithoutBattlesInput, UserCharacterUncheckedUpdateWithoutBattlesInput>
  }

  export type UserCharacterUpdateWithoutBattlesInput = {
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    character?: CharacterUpdateOneRequiredWithoutInstancesNestedInput
  }

  export type UserCharacterUncheckedUpdateWithoutBattlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyUserInput = {
    id?: number
    roleId: number
  }

  export type UserCharacterCreateManyUserInput = {
    id?: number
    characterId: number
    level?: number
    experience?: number
  }

  export type BattleParticipantCreateManyUserInput = {
    id?: number
    battleId: number
    userCharacterId: number
  }

  export type BattleCreateManyWinnerInput = {
    id?: number
    status?: $Enums.BattleStatus
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCharacterUpdateWithoutUserInput = {
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutInstancesNestedInput
    battles?: BattleParticipantUpdateManyWithoutCharacterUsedNestedInput
  }

  export type UserCharacterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    battles?: BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput
  }

  export type UserCharacterUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type BattleParticipantUpdateWithoutUserInput = {
    battle?: BattleUpdateOneRequiredWithoutParticipantsNestedInput
    characterUsed?: UserCharacterUpdateOneRequiredWithoutBattlesNestedInput
  }

  export type BattleParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    battleId?: IntFieldUpdateOperationsInput | number
    userCharacterId?: IntFieldUpdateOperationsInput | number
  }

  export type BattleParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    battleId?: IntFieldUpdateOperationsInput | number
    userCharacterId?: IntFieldUpdateOperationsInput | number
  }

  export type BattleUpdateWithoutWinnerInput = {
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: BattleParticipantUpdateManyWithoutBattleNestedInput
  }

  export type BattleUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: BattleParticipantUncheckedUpdateManyWithoutBattleNestedInput
  }

  export type BattleUncheckedUpdateManyWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleCreateManyRoleInput = {
    id?: number
    userId: number
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCharacterCreateManyCharacterInput = {
    id?: number
    userId: number
    level?: number
    experience?: number
  }

  export type UserCharacterUpdateWithoutCharacterInput = {
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    battles?: BattleParticipantUpdateManyWithoutCharacterUsedNestedInput
  }

  export type UserCharacterUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    battles?: BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput
  }

  export type UserCharacterUncheckedUpdateManyWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type BattleParticipantCreateManyCharacterUsedInput = {
    id?: number
    battleId: number
    userId: number
  }

  export type BattleParticipantUpdateWithoutCharacterUsedInput = {
    battle?: BattleUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutBattlesAsPlayerNestedInput
  }

  export type BattleParticipantUncheckedUpdateWithoutCharacterUsedInput = {
    id?: IntFieldUpdateOperationsInput | number
    battleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BattleParticipantUncheckedUpdateManyWithoutCharacterUsedInput = {
    id?: IntFieldUpdateOperationsInput | number
    battleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BattleParticipantCreateManyBattleInput = {
    id?: number
    userId: number
    userCharacterId: number
  }

  export type BattleParticipantUpdateWithoutBattleInput = {
    user?: UserUpdateOneRequiredWithoutBattlesAsPlayerNestedInput
    characterUsed?: UserCharacterUpdateOneRequiredWithoutBattlesNestedInput
  }

  export type BattleParticipantUncheckedUpdateWithoutBattleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userCharacterId?: IntFieldUpdateOperationsInput | number
  }

  export type BattleParticipantUncheckedUpdateManyWithoutBattleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userCharacterId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}