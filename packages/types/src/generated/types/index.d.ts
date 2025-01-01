
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PurchasedGames
 * 
 */
export type PurchasedGames = $Result.DefaultSelection<Prisma.$PurchasedGamesPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameTag
 * 
 */
export type GameTag = $Result.DefaultSelection<Prisma.$GameTagPayload>
/**
 * Model Checkpoint
 * 
 */
export type Checkpoint = $Result.DefaultSelection<Prisma.$CheckpointPayload>
/**
 * Model Hint
 * 
 */
export type Hint = $Result.DefaultSelection<Prisma.$HintPayload>
/**
 * Model GameSession
 * 
 */
export type GameSession = $Result.DefaultSelection<Prisma.$GameSessionPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CREATOR: 'CREATOR',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const GameDifficulty: {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD'
};

export type GameDifficulty = (typeof GameDifficulty)[keyof typeof GameDifficulty]


export const GameState: {
  CREATED: 'CREATED',
  ON_THE_WAY: 'ON_THE_WAY',
  CHECKPOINT: 'CHECKPOINT',
  FINISHED: 'FINISHED',
  TIMEOUT: 'TIMEOUT'
};

export type GameState = (typeof GameState)[keyof typeof GameState]


export const OrderStatus: {
  DRAFT: 'DRAFT',
  CREATED: 'CREATED',
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELED: 'CANCELED',
  TIMEOUT: 'TIMEOUT'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type GameDifficulty = $Enums.GameDifficulty

export const GameDifficulty: typeof $Enums.GameDifficulty

export type GameState = $Enums.GameState

export const GameState: typeof $Enums.GameState

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Badges
 * const badges = await prisma.badge.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Badges
   * const badges = await prisma.badge.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.purchasedGames`: Exposes CRUD operations for the **PurchasedGames** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchasedGames
    * const purchasedGames = await prisma.purchasedGames.findMany()
    * ```
    */
  get purchasedGames(): Prisma.PurchasedGamesDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs>;

  /**
   * `prisma.gameTag`: Exposes CRUD operations for the **GameTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameTags
    * const gameTags = await prisma.gameTag.findMany()
    * ```
    */
  get gameTag(): Prisma.GameTagDelegate<ExtArgs>;

  /**
   * `prisma.checkpoint`: Exposes CRUD operations for the **Checkpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkpoints
    * const checkpoints = await prisma.checkpoint.findMany()
    * ```
    */
  get checkpoint(): Prisma.CheckpointDelegate<ExtArgs>;

  /**
   * `prisma.hint`: Exposes CRUD operations for the **Hint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hints
    * const hints = await prisma.hint.findMany()
    * ```
    */
  get hint(): Prisma.HintDelegate<ExtArgs>;

  /**
   * `prisma.gameSession`: Exposes CRUD operations for the **GameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSession.findMany()
    * ```
    */
  get gameSession(): Prisma.GameSessionDelegate<ExtArgs>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Badge: 'Badge',
    User: 'User',
    PurchasedGames: 'PurchasedGames',
    Game: 'Game',
    GameTag: 'GameTag',
    Checkpoint: 'Checkpoint',
    Hint: 'Hint',
    GameSession: 'GameSession',
    File: 'File',
    Contract: 'Contract',
    Order: 'Order',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "badge" | "user" | "purchasedGames" | "game" | "gameTag" | "checkpoint" | "hint" | "gameSession" | "file" | "contract" | "order" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
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
      PurchasedGames: {
        payload: Prisma.$PurchasedGamesPayload<ExtArgs>
        fields: Prisma.PurchasedGamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasedGamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasedGamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload>
          }
          findFirst: {
            args: Prisma.PurchasedGamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasedGamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload>
          }
          findMany: {
            args: Prisma.PurchasedGamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload>[]
          }
          create: {
            args: Prisma.PurchasedGamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload>
          }
          createMany: {
            args: Prisma.PurchasedGamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurchasedGamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload>
          }
          update: {
            args: Prisma.PurchasedGamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload>
          }
          deleteMany: {
            args: Prisma.PurchasedGamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasedGamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchasedGamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedGamesPayload>
          }
          aggregate: {
            args: Prisma.PurchasedGamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchasedGames>
          }
          groupBy: {
            args: Prisma.PurchasedGamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasedGamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasedGamesCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasedGamesCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameTag: {
        payload: Prisma.$GameTagPayload<ExtArgs>
        fields: Prisma.GameTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          findFirst: {
            args: Prisma.GameTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          findMany: {
            args: Prisma.GameTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>[]
          }
          create: {
            args: Prisma.GameTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          createMany: {
            args: Prisma.GameTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          update: {
            args: Prisma.GameTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          deleteMany: {
            args: Prisma.GameTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTagPayload>
          }
          aggregate: {
            args: Prisma.GameTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameTag>
          }
          groupBy: {
            args: Prisma.GameTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameTagCountArgs<ExtArgs>
            result: $Utils.Optional<GameTagCountAggregateOutputType> | number
          }
        }
      }
      Checkpoint: {
        payload: Prisma.$CheckpointPayload<ExtArgs>
        fields: Prisma.CheckpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload>
          }
          findFirst: {
            args: Prisma.CheckpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload>
          }
          findMany: {
            args: Prisma.CheckpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload>[]
          }
          create: {
            args: Prisma.CheckpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload>
          }
          createMany: {
            args: Prisma.CheckpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CheckpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload>
          }
          update: {
            args: Prisma.CheckpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload>
          }
          deleteMany: {
            args: Prisma.CheckpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CheckpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckpointPayload>
          }
          aggregate: {
            args: Prisma.CheckpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckpoint>
          }
          groupBy: {
            args: Prisma.CheckpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckpointCountArgs<ExtArgs>
            result: $Utils.Optional<CheckpointCountAggregateOutputType> | number
          }
        }
      }
      Hint: {
        payload: Prisma.$HintPayload<ExtArgs>
        fields: Prisma.HintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findFirst: {
            args: Prisma.HintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findMany: {
            args: Prisma.HintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          create: {
            args: Prisma.HintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          createMany: {
            args: Prisma.HintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          update: {
            args: Prisma.HintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          deleteMany: {
            args: Prisma.HintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          aggregate: {
            args: Prisma.HintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHint>
          }
          groupBy: {
            args: Prisma.HintGroupByArgs<ExtArgs>
            result: $Utils.Optional<HintGroupByOutputType>[]
          }
          count: {
            args: Prisma.HintCountArgs<ExtArgs>
            result: $Utils.Optional<HintCountAggregateOutputType> | number
          }
        }
      }
      GameSession: {
        payload: Prisma.$GameSessionPayload<ExtArgs>
        fields: Prisma.GameSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findFirst: {
            args: Prisma.GameSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findMany: {
            args: Prisma.GameSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          create: {
            args: Prisma.GameSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          createMany: {
            args: Prisma.GameSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          update: {
            args: Prisma.GameSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          deleteMany: {
            args: Prisma.GameSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          aggregate: {
            args: Prisma.GameSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSession>
          }
          groupBy: {
            args: Prisma.GameSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSessionCountArgs<ExtArgs>
            result: $Utils.Optional<GameSessionCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    users: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BadgeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contract: number
    participations: number
    orders: number
    purchasedGames: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | UserCountOutputTypeCountContractArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    purchasedGames?: boolean | UserCountOutputTypeCountPurchasedGamesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
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
  export type UserCountOutputTypeCountContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedGamesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    checkpoints: number
    contract: number
    gameSessions: number
    tags: number
    purchases: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkpoints?: boolean | GameCountOutputTypeCountCheckpointsArgs
    contract?: boolean | GameCountOutputTypeCountContractArgs
    gameSessions?: boolean | GameCountOutputTypeCountGameSessionsArgs
    tags?: boolean | GameCountOutputTypeCountTagsArgs
    purchases?: boolean | GameCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountCheckpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckpointWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTagWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedGamesWhereInput
  }


  /**
   * Count Type GameTagCountOutputType
   */

  export type GameTagCountOutputType = {
    games: number
  }

  export type GameTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | GameTagCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * GameTagCountOutputType without action
   */
  export type GameTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTagCountOutputType
     */
    select?: GameTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameTagCountOutputType without action
   */
  export type GameTagCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type CheckpointCountOutputType
   */

  export type CheckpointCountOutputType = {
    gameSessions: number
    hints: number
  }

  export type CheckpointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSessions?: boolean | CheckpointCountOutputTypeCountGameSessionsArgs
    hints?: boolean | CheckpointCountOutputTypeCountHintsArgs
  }

  // Custom InputTypes
  /**
   * CheckpointCountOutputType without action
   */
  export type CheckpointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckpointCountOutputType
     */
    select?: CheckpointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CheckpointCountOutputType without action
   */
  export type CheckpointCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * CheckpointCountOutputType without action
   */
  export type CheckpointCountOutputTypeCountHintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HintWhereInput
  }


  /**
   * Count Type GameSessionCountOutputType
   */

  export type GameSessionCountOutputType = {
    participants: number
  }

  export type GameSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | GameSessionCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionCountOutputType
     */
    select?: GameSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    id: number | null
    minExperience: number | null
    imageId: number | null
  }

  export type BadgeSumAggregateOutputType = {
    id: number | null
    minExperience: number | null
    imageId: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: number | null
    title: string | null
    minExperience: number | null
    imageId: number | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    minExperience: number | null
    imageId: number | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    title: number
    minExperience: number
    imageId: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    id?: true
    minExperience?: true
    imageId?: true
  }

  export type BadgeSumAggregateInputType = {
    id?: true
    minExperience?: true
    imageId?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    title?: true
    minExperience?: true
    imageId?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    title?: true
    minExperience?: true
    imageId?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    title?: true
    minExperience?: true
    imageId?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: number
    title: string
    minExperience: number
    imageId: number
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    minExperience?: boolean
    imageId?: boolean
    image?: boolean | FileDefaultArgs<ExtArgs>
    users?: boolean | Badge$usersArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>


  export type BadgeSelectScalar = {
    id?: boolean
    title?: boolean
    minExperience?: boolean
    imageId?: boolean
  }

  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | FileDefaultArgs<ExtArgs>
    users?: boolean | Badge$usersArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      image: Prisma.$FilePayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      minExperience: number
      imageId: number
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
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
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    users<T extends Badge$usersArgs<ExtArgs> = {}>(args?: Subset<T, Badge$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Badge model
   */ 
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'Int'>
    readonly title: FieldRef<"Badge", 'String'>
    readonly minExperience: FieldRef<"Badge", 'Int'>
    readonly imageId: FieldRef<"Badge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge.users
   */
  export type Badge$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


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
    photoId: number | null
    experience: number | null
    coins: number | null
    badgeId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    photoId: number | null
    experience: number | null
    coins: number | null
    badgeId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role | null
    isAlive: boolean | null
    photoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    experience: number | null
    coins: number | null
    badgeId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role | null
    isAlive: boolean | null
    photoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    experience: number | null
    coins: number | null
    badgeId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    role: number
    isAlive: number
    photoId: number
    createdAt: number
    updatedAt: number
    experience: number
    coins: number
    badgeId: number
    deliveryInfo: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    photoId?: true
    experience?: true
    coins?: true
    badgeId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    photoId?: true
    experience?: true
    coins?: true
    badgeId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    isAlive?: true
    photoId?: true
    createdAt?: true
    updatedAt?: true
    experience?: true
    coins?: true
    badgeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    isAlive?: true
    photoId?: true
    createdAt?: true
    updatedAt?: true
    experience?: true
    coins?: true
    badgeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    isAlive?: true
    photoId?: true
    createdAt?: true
    updatedAt?: true
    experience?: true
    coins?: true
    badgeId?: true
    deliveryInfo?: true
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
    name: string
    email: string
    emailVerified: Date | null
    password: string
    role: $Enums.Role
    isAlive: boolean
    photoId: number | null
    createdAt: Date
    updatedAt: Date
    experience: number
    coins: number
    badgeId: number
    deliveryInfo: JsonValue | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    isAlive?: boolean
    photoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    experience?: boolean
    coins?: boolean
    badgeId?: boolean
    deliveryInfo?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    photo?: boolean | User$photoArgs<ExtArgs>
    contract?: boolean | User$contractArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    purchasedGames?: boolean | User$purchasedGamesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    isAlive?: boolean
    photoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    experience?: boolean
    coins?: boolean
    badgeId?: boolean
    deliveryInfo?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    photo?: boolean | User$photoArgs<ExtArgs>
    contract?: boolean | User$contractArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    purchasedGames?: boolean | User$purchasedGamesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      badge: Prisma.$BadgePayload<ExtArgs>
      photo: Prisma.$FilePayload<ExtArgs> | null
      contract: Prisma.$ContractPayload<ExtArgs>[]
      participations: Prisma.$GameSessionPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      purchasedGames: Prisma.$PurchasedGamesPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      emailVerified: Date | null
      password: string
      role: $Enums.Role
      isAlive: boolean
      photoId: number | null
      createdAt: Date
      updatedAt: Date
      experience: number
      coins: number
      badgeId: number
      deliveryInfo: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    photo<T extends User$photoArgs<ExtArgs> = {}>(args?: Subset<T, User$photoArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    contract<T extends User$contractArgs<ExtArgs> = {}>(args?: Subset<T, User$contractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany"> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    purchasedGames<T extends User$purchasedGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasedGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "findMany"> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isAlive: FieldRef<"User", 'Boolean'>
    readonly photoId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly coins: FieldRef<"User", 'Int'>
    readonly badgeId: FieldRef<"User", 'Int'>
    readonly deliveryInfo: FieldRef<"User", 'Json'>
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  }

  /**
   * User.photo
   */
  export type User$photoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
  }

  /**
   * User.contract
   */
  export type User$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.purchasedGames
   */
  export type User$purchasedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    where?: PurchasedGamesWhereInput
    orderBy?: PurchasedGamesOrderByWithRelationInput | PurchasedGamesOrderByWithRelationInput[]
    cursor?: PurchasedGamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedGamesScalarFieldEnum | PurchasedGamesScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PurchasedGames
   */

  export type AggregatePurchasedGames = {
    _count: PurchasedGamesCountAggregateOutputType | null
    _avg: PurchasedGamesAvgAggregateOutputType | null
    _sum: PurchasedGamesSumAggregateOutputType | null
    _min: PurchasedGamesMinAggregateOutputType | null
    _max: PurchasedGamesMaxAggregateOutputType | null
  }

  export type PurchasedGamesAvgAggregateOutputType = {
    userId: number | null
    gameId: number | null
  }

  export type PurchasedGamesSumAggregateOutputType = {
    userId: number | null
    gameId: number | null
  }

  export type PurchasedGamesMinAggregateOutputType = {
    userId: number | null
    gameId: number | null
    played: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchasedGamesMaxAggregateOutputType = {
    userId: number | null
    gameId: number | null
    played: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchasedGamesCountAggregateOutputType = {
    userId: number
    gameId: number
    played: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchasedGamesAvgAggregateInputType = {
    userId?: true
    gameId?: true
  }

  export type PurchasedGamesSumAggregateInputType = {
    userId?: true
    gameId?: true
  }

  export type PurchasedGamesMinAggregateInputType = {
    userId?: true
    gameId?: true
    played?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchasedGamesMaxAggregateInputType = {
    userId?: true
    gameId?: true
    played?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchasedGamesCountAggregateInputType = {
    userId?: true
    gameId?: true
    played?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchasedGamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasedGames to aggregate.
     */
    where?: PurchasedGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedGames to fetch.
     */
    orderBy?: PurchasedGamesOrderByWithRelationInput | PurchasedGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasedGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchasedGames
    **/
    _count?: true | PurchasedGamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchasedGamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchasedGamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasedGamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasedGamesMaxAggregateInputType
  }

  export type GetPurchasedGamesAggregateType<T extends PurchasedGamesAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchasedGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchasedGames[P]>
      : GetScalarType<T[P], AggregatePurchasedGames[P]>
  }




  export type PurchasedGamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedGamesWhereInput
    orderBy?: PurchasedGamesOrderByWithAggregationInput | PurchasedGamesOrderByWithAggregationInput[]
    by: PurchasedGamesScalarFieldEnum[] | PurchasedGamesScalarFieldEnum
    having?: PurchasedGamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasedGamesCountAggregateInputType | true
    _avg?: PurchasedGamesAvgAggregateInputType
    _sum?: PurchasedGamesSumAggregateInputType
    _min?: PurchasedGamesMinAggregateInputType
    _max?: PurchasedGamesMaxAggregateInputType
  }

  export type PurchasedGamesGroupByOutputType = {
    userId: number
    gameId: number
    played: boolean
    createdAt: Date
    updatedAt: Date
    _count: PurchasedGamesCountAggregateOutputType | null
    _avg: PurchasedGamesAvgAggregateOutputType | null
    _sum: PurchasedGamesSumAggregateOutputType | null
    _min: PurchasedGamesMinAggregateOutputType | null
    _max: PurchasedGamesMaxAggregateOutputType | null
  }

  type GetPurchasedGamesGroupByPayload<T extends PurchasedGamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasedGamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasedGamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasedGamesGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasedGamesGroupByOutputType[P]>
        }
      >
    >


  export type PurchasedGamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    gameId?: boolean
    played?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedGames"]>


  export type PurchasedGamesSelectScalar = {
    userId?: boolean
    gameId?: boolean
    played?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchasedGamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $PurchasedGamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchasedGames"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      gameId: number
      played: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchasedGames"]>
    composites: {}
  }

  type PurchasedGamesGetPayload<S extends boolean | null | undefined | PurchasedGamesDefaultArgs> = $Result.GetResult<Prisma.$PurchasedGamesPayload, S>

  type PurchasedGamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchasedGamesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchasedGamesCountAggregateInputType | true
    }

  export interface PurchasedGamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchasedGames'], meta: { name: 'PurchasedGames' } }
    /**
     * Find zero or one PurchasedGames that matches the filter.
     * @param {PurchasedGamesFindUniqueArgs} args - Arguments to find a PurchasedGames
     * @example
     * // Get one PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasedGamesFindUniqueArgs>(args: SelectSubset<T, PurchasedGamesFindUniqueArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchasedGames that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchasedGamesFindUniqueOrThrowArgs} args - Arguments to find a PurchasedGames
     * @example
     * // Get one PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasedGamesFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasedGamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchasedGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedGamesFindFirstArgs} args - Arguments to find a PurchasedGames
     * @example
     * // Get one PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasedGamesFindFirstArgs>(args?: SelectSubset<T, PurchasedGamesFindFirstArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchasedGames that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedGamesFindFirstOrThrowArgs} args - Arguments to find a PurchasedGames
     * @example
     * // Get one PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasedGamesFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasedGamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchasedGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedGamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.findMany()
     * 
     * // Get first 10 PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const purchasedGamesWithUserIdOnly = await prisma.purchasedGames.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PurchasedGamesFindManyArgs>(args?: SelectSubset<T, PurchasedGamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchasedGames.
     * @param {PurchasedGamesCreateArgs} args - Arguments to create a PurchasedGames.
     * @example
     * // Create one PurchasedGames
     * const PurchasedGames = await prisma.purchasedGames.create({
     *   data: {
     *     // ... data to create a PurchasedGames
     *   }
     * })
     * 
     */
    create<T extends PurchasedGamesCreateArgs>(args: SelectSubset<T, PurchasedGamesCreateArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchasedGames.
     * @param {PurchasedGamesCreateManyArgs} args - Arguments to create many PurchasedGames.
     * @example
     * // Create many PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasedGamesCreateManyArgs>(args?: SelectSubset<T, PurchasedGamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PurchasedGames.
     * @param {PurchasedGamesDeleteArgs} args - Arguments to delete one PurchasedGames.
     * @example
     * // Delete one PurchasedGames
     * const PurchasedGames = await prisma.purchasedGames.delete({
     *   where: {
     *     // ... filter to delete one PurchasedGames
     *   }
     * })
     * 
     */
    delete<T extends PurchasedGamesDeleteArgs>(args: SelectSubset<T, PurchasedGamesDeleteArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchasedGames.
     * @param {PurchasedGamesUpdateArgs} args - Arguments to update one PurchasedGames.
     * @example
     * // Update one PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasedGamesUpdateArgs>(args: SelectSubset<T, PurchasedGamesUpdateArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchasedGames.
     * @param {PurchasedGamesDeleteManyArgs} args - Arguments to filter PurchasedGames to delete.
     * @example
     * // Delete a few PurchasedGames
     * const { count } = await prisma.purchasedGames.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasedGamesDeleteManyArgs>(args?: SelectSubset<T, PurchasedGamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchasedGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedGamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasedGamesUpdateManyArgs>(args: SelectSubset<T, PurchasedGamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchasedGames.
     * @param {PurchasedGamesUpsertArgs} args - Arguments to update or create a PurchasedGames.
     * @example
     * // Update or create a PurchasedGames
     * const purchasedGames = await prisma.purchasedGames.upsert({
     *   create: {
     *     // ... data to create a PurchasedGames
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchasedGames we want to update
     *   }
     * })
     */
    upsert<T extends PurchasedGamesUpsertArgs>(args: SelectSubset<T, PurchasedGamesUpsertArgs<ExtArgs>>): Prisma__PurchasedGamesClient<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchasedGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedGamesCountArgs} args - Arguments to filter PurchasedGames to count.
     * @example
     * // Count the number of PurchasedGames
     * const count = await prisma.purchasedGames.count({
     *   where: {
     *     // ... the filter for the PurchasedGames we want to count
     *   }
     * })
    **/
    count<T extends PurchasedGamesCountArgs>(
      args?: Subset<T, PurchasedGamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasedGamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchasedGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedGamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchasedGamesAggregateArgs>(args: Subset<T, PurchasedGamesAggregateArgs>): Prisma.PrismaPromise<GetPurchasedGamesAggregateType<T>>

    /**
     * Group by PurchasedGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedGamesGroupByArgs} args - Group by arguments.
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
      T extends PurchasedGamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasedGamesGroupByArgs['orderBy'] }
        : { orderBy?: PurchasedGamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchasedGamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasedGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchasedGames model
   */
  readonly fields: PurchasedGamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchasedGames.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasedGamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PurchasedGames model
   */ 
  interface PurchasedGamesFieldRefs {
    readonly userId: FieldRef<"PurchasedGames", 'Int'>
    readonly gameId: FieldRef<"PurchasedGames", 'Int'>
    readonly played: FieldRef<"PurchasedGames", 'Boolean'>
    readonly createdAt: FieldRef<"PurchasedGames", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchasedGames", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchasedGames findUnique
   */
  export type PurchasedGamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedGames to fetch.
     */
    where: PurchasedGamesWhereUniqueInput
  }

  /**
   * PurchasedGames findUniqueOrThrow
   */
  export type PurchasedGamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedGames to fetch.
     */
    where: PurchasedGamesWhereUniqueInput
  }

  /**
   * PurchasedGames findFirst
   */
  export type PurchasedGamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedGames to fetch.
     */
    where?: PurchasedGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedGames to fetch.
     */
    orderBy?: PurchasedGamesOrderByWithRelationInput | PurchasedGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasedGames.
     */
    cursor?: PurchasedGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasedGames.
     */
    distinct?: PurchasedGamesScalarFieldEnum | PurchasedGamesScalarFieldEnum[]
  }

  /**
   * PurchasedGames findFirstOrThrow
   */
  export type PurchasedGamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedGames to fetch.
     */
    where?: PurchasedGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedGames to fetch.
     */
    orderBy?: PurchasedGamesOrderByWithRelationInput | PurchasedGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasedGames.
     */
    cursor?: PurchasedGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasedGames.
     */
    distinct?: PurchasedGamesScalarFieldEnum | PurchasedGamesScalarFieldEnum[]
  }

  /**
   * PurchasedGames findMany
   */
  export type PurchasedGamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedGames to fetch.
     */
    where?: PurchasedGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedGames to fetch.
     */
    orderBy?: PurchasedGamesOrderByWithRelationInput | PurchasedGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchasedGames.
     */
    cursor?: PurchasedGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedGames.
     */
    skip?: number
    distinct?: PurchasedGamesScalarFieldEnum | PurchasedGamesScalarFieldEnum[]
  }

  /**
   * PurchasedGames create
   */
  export type PurchasedGamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchasedGames.
     */
    data: XOR<PurchasedGamesCreateInput, PurchasedGamesUncheckedCreateInput>
  }

  /**
   * PurchasedGames createMany
   */
  export type PurchasedGamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchasedGames.
     */
    data: PurchasedGamesCreateManyInput | PurchasedGamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchasedGames update
   */
  export type PurchasedGamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchasedGames.
     */
    data: XOR<PurchasedGamesUpdateInput, PurchasedGamesUncheckedUpdateInput>
    /**
     * Choose, which PurchasedGames to update.
     */
    where: PurchasedGamesWhereUniqueInput
  }

  /**
   * PurchasedGames updateMany
   */
  export type PurchasedGamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchasedGames.
     */
    data: XOR<PurchasedGamesUpdateManyMutationInput, PurchasedGamesUncheckedUpdateManyInput>
    /**
     * Filter which PurchasedGames to update
     */
    where?: PurchasedGamesWhereInput
  }

  /**
   * PurchasedGames upsert
   */
  export type PurchasedGamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchasedGames to update in case it exists.
     */
    where: PurchasedGamesWhereUniqueInput
    /**
     * In case the PurchasedGames found by the `where` argument doesn't exist, create a new PurchasedGames with this data.
     */
    create: XOR<PurchasedGamesCreateInput, PurchasedGamesUncheckedCreateInput>
    /**
     * In case the PurchasedGames was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasedGamesUpdateInput, PurchasedGamesUncheckedUpdateInput>
  }

  /**
   * PurchasedGames delete
   */
  export type PurchasedGamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    /**
     * Filter which PurchasedGames to delete.
     */
    where: PurchasedGamesWhereUniqueInput
  }

  /**
   * PurchasedGames deleteMany
   */
  export type PurchasedGamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasedGames to delete
     */
    where?: PurchasedGamesWhereInput
  }

  /**
   * PurchasedGames without action
   */
  export type PurchasedGamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    startingCheckpointId: number | null
    endingCheckpointId: number | null
    imageId: number | null
    authorId: number | null
    price: number | null
    maxPoints: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    startingCheckpointId: number | null
    endingCheckpointId: number | null
    imageId: number | null
    authorId: number | null
    price: number | null
    maxPoints: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    place: string | null
    difficultness: $Enums.GameDifficulty | null
    startingCheckpointId: number | null
    endingCheckpointId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    imageId: number | null
    authorId: number | null
    isActive: boolean | null
    price: number | null
    maxPoints: number | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    place: string | null
    difficultness: $Enums.GameDifficulty | null
    startingCheckpointId: number | null
    endingCheckpointId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    imageId: number | null
    authorId: number | null
    isActive: boolean | null
    price: number | null
    maxPoints: number | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    place: number
    difficultness: number
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt: number
    updatedAt: number
    imageId: number
    authorId: number
    isActive: number
    price: number
    maxPoints: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    startingCheckpointId?: true
    endingCheckpointId?: true
    imageId?: true
    authorId?: true
    price?: true
    maxPoints?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    startingCheckpointId?: true
    endingCheckpointId?: true
    imageId?: true
    authorId?: true
    price?: true
    maxPoints?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    place?: true
    difficultness?: true
    startingCheckpointId?: true
    endingCheckpointId?: true
    createdAt?: true
    updatedAt?: true
    imageId?: true
    authorId?: true
    isActive?: true
    price?: true
    maxPoints?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    place?: true
    difficultness?: true
    startingCheckpointId?: true
    endingCheckpointId?: true
    createdAt?: true
    updatedAt?: true
    imageId?: true
    authorId?: true
    isActive?: true
    price?: true
    maxPoints?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    place?: true
    difficultness?: true
    startingCheckpointId?: true
    endingCheckpointId?: true
    createdAt?: true
    updatedAt?: true
    imageId?: true
    authorId?: true
    isActive?: true
    price?: true
    maxPoints?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    title: string
    slug: string
    description: string
    place: string
    difficultness: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt: Date
    updatedAt: Date
    imageId: number
    authorId: number
    isActive: boolean
    price: number
    maxPoints: number
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    place?: boolean
    difficultness?: boolean
    startingCheckpointId?: boolean
    endingCheckpointId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageId?: boolean
    authorId?: boolean
    isActive?: boolean
    price?: boolean
    maxPoints?: boolean
    image?: boolean | FileDefaultArgs<ExtArgs>
    checkpoints?: boolean | Game$checkpointsArgs<ExtArgs>
    contract?: boolean | Game$contractArgs<ExtArgs>
    gameSessions?: boolean | Game$gameSessionsArgs<ExtArgs>
    tags?: boolean | Game$tagsArgs<ExtArgs>
    purchases?: boolean | Game$purchasesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>


  export type GameSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    place?: boolean
    difficultness?: boolean
    startingCheckpointId?: boolean
    endingCheckpointId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageId?: boolean
    authorId?: boolean
    isActive?: boolean
    price?: boolean
    maxPoints?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | FileDefaultArgs<ExtArgs>
    checkpoints?: boolean | Game$checkpointsArgs<ExtArgs>
    contract?: boolean | Game$contractArgs<ExtArgs>
    gameSessions?: boolean | Game$gameSessionsArgs<ExtArgs>
    tags?: boolean | Game$tagsArgs<ExtArgs>
    purchases?: boolean | Game$purchasesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      image: Prisma.$FilePayload<ExtArgs>
      checkpoints: Prisma.$CheckpointPayload<ExtArgs>[]
      contract: Prisma.$ContractPayload<ExtArgs>[]
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
      tags: Prisma.$GameTagPayload<ExtArgs>[]
      purchases: Prisma.$PurchasedGamesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      description: string
      place: string
      difficultness: $Enums.GameDifficulty
      startingCheckpointId: number
      endingCheckpointId: number
      createdAt: Date
      updatedAt: Date
      imageId: number
      authorId: number
      isActive: boolean
      price: number
      maxPoints: number
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    checkpoints<T extends Game$checkpointsArgs<ExtArgs> = {}>(args?: Subset<T, Game$checkpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findMany"> | Null>
    contract<T extends Game$contractArgs<ExtArgs> = {}>(args?: Subset<T, Game$contractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany"> | Null>
    gameSessions<T extends Game$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Game$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Game$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findMany"> | Null>
    purchases<T extends Game$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Game$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedGamesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly title: FieldRef<"Game", 'String'>
    readonly slug: FieldRef<"Game", 'String'>
    readonly description: FieldRef<"Game", 'String'>
    readonly place: FieldRef<"Game", 'String'>
    readonly difficultness: FieldRef<"Game", 'GameDifficulty'>
    readonly startingCheckpointId: FieldRef<"Game", 'Int'>
    readonly endingCheckpointId: FieldRef<"Game", 'Int'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
    readonly imageId: FieldRef<"Game", 'Int'>
    readonly authorId: FieldRef<"Game", 'Int'>
    readonly isActive: FieldRef<"Game", 'Boolean'>
    readonly price: FieldRef<"Game", 'Int'>
    readonly maxPoints: FieldRef<"Game", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }

  /**
   * Game.checkpoints
   */
  export type Game$checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    where?: CheckpointWhereInput
    orderBy?: CheckpointOrderByWithRelationInput | CheckpointOrderByWithRelationInput[]
    cursor?: CheckpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckpointScalarFieldEnum | CheckpointScalarFieldEnum[]
  }

  /**
   * Game.contract
   */
  export type Game$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Game.gameSessions
   */
  export type Game$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * Game.tags
   */
  export type Game$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    where?: GameTagWhereInput
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    cursor?: GameTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * Game.purchases
   */
  export type Game$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedGames
     */
    select?: PurchasedGamesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedGamesInclude<ExtArgs> | null
    where?: PurchasedGamesWhereInput
    orderBy?: PurchasedGamesOrderByWithRelationInput | PurchasedGamesOrderByWithRelationInput[]
    cursor?: PurchasedGamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedGamesScalarFieldEnum | PurchasedGamesScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameTag
   */

  export type AggregateGameTag = {
    _count: GameTagCountAggregateOutputType | null
    _avg: GameTagAvgAggregateOutputType | null
    _sum: GameTagSumAggregateOutputType | null
    _min: GameTagMinAggregateOutputType | null
    _max: GameTagMaxAggregateOutputType | null
  }

  export type GameTagAvgAggregateOutputType = {
    id: number | null
  }

  export type GameTagSumAggregateOutputType = {
    id: number | null
  }

  export type GameTagMinAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type GameTagMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type GameTagCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type GameTagAvgAggregateInputType = {
    id?: true
  }

  export type GameTagSumAggregateInputType = {
    id?: true
  }

  export type GameTagMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type GameTagMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type GameTagCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type GameTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTag to aggregate.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameTags
    **/
    _count?: true | GameTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameTagMaxAggregateInputType
  }

  export type GetGameTagAggregateType<T extends GameTagAggregateArgs> = {
        [P in keyof T & keyof AggregateGameTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameTag[P]>
      : GetScalarType<T[P], AggregateGameTag[P]>
  }




  export type GameTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTagWhereInput
    orderBy?: GameTagOrderByWithAggregationInput | GameTagOrderByWithAggregationInput[]
    by: GameTagScalarFieldEnum[] | GameTagScalarFieldEnum
    having?: GameTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameTagCountAggregateInputType | true
    _avg?: GameTagAvgAggregateInputType
    _sum?: GameTagSumAggregateInputType
    _min?: GameTagMinAggregateInputType
    _max?: GameTagMaxAggregateInputType
  }

  export type GameTagGroupByOutputType = {
    id: number
    label: string
    _count: GameTagCountAggregateOutputType | null
    _avg: GameTagAvgAggregateOutputType | null
    _sum: GameTagSumAggregateOutputType | null
    _min: GameTagMinAggregateOutputType | null
    _max: GameTagMaxAggregateOutputType | null
  }

  type GetGameTagGroupByPayload<T extends GameTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameTagGroupByOutputType[P]>
            : GetScalarType<T[P], GameTagGroupByOutputType[P]>
        }
      >
    >


  export type GameTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    games?: boolean | GameTag$gamesArgs<ExtArgs>
    _count?: boolean | GameTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTag"]>


  export type GameTagSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type GameTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | GameTag$gamesArgs<ExtArgs>
    _count?: boolean | GameTagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GameTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameTag"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
    }, ExtArgs["result"]["gameTag"]>
    composites: {}
  }

  type GameTagGetPayload<S extends boolean | null | undefined | GameTagDefaultArgs> = $Result.GetResult<Prisma.$GameTagPayload, S>

  type GameTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameTagCountAggregateInputType | true
    }

  export interface GameTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameTag'], meta: { name: 'GameTag' } }
    /**
     * Find zero or one GameTag that matches the filter.
     * @param {GameTagFindUniqueArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameTagFindUniqueArgs>(args: SelectSubset<T, GameTagFindUniqueArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameTagFindUniqueOrThrowArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameTagFindUniqueOrThrowArgs>(args: SelectSubset<T, GameTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagFindFirstArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameTagFindFirstArgs>(args?: SelectSubset<T, GameTagFindFirstArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagFindFirstOrThrowArgs} args - Arguments to find a GameTag
     * @example
     * // Get one GameTag
     * const gameTag = await prisma.gameTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameTagFindFirstOrThrowArgs>(args?: SelectSubset<T, GameTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameTags
     * const gameTags = await prisma.gameTag.findMany()
     * 
     * // Get first 10 GameTags
     * const gameTags = await prisma.gameTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameTagWithIdOnly = await prisma.gameTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameTagFindManyArgs>(args?: SelectSubset<T, GameTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameTag.
     * @param {GameTagCreateArgs} args - Arguments to create a GameTag.
     * @example
     * // Create one GameTag
     * const GameTag = await prisma.gameTag.create({
     *   data: {
     *     // ... data to create a GameTag
     *   }
     * })
     * 
     */
    create<T extends GameTagCreateArgs>(args: SelectSubset<T, GameTagCreateArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameTags.
     * @param {GameTagCreateManyArgs} args - Arguments to create many GameTags.
     * @example
     * // Create many GameTags
     * const gameTag = await prisma.gameTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameTagCreateManyArgs>(args?: SelectSubset<T, GameTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameTag.
     * @param {GameTagDeleteArgs} args - Arguments to delete one GameTag.
     * @example
     * // Delete one GameTag
     * const GameTag = await prisma.gameTag.delete({
     *   where: {
     *     // ... filter to delete one GameTag
     *   }
     * })
     * 
     */
    delete<T extends GameTagDeleteArgs>(args: SelectSubset<T, GameTagDeleteArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameTag.
     * @param {GameTagUpdateArgs} args - Arguments to update one GameTag.
     * @example
     * // Update one GameTag
     * const gameTag = await prisma.gameTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameTagUpdateArgs>(args: SelectSubset<T, GameTagUpdateArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameTags.
     * @param {GameTagDeleteManyArgs} args - Arguments to filter GameTags to delete.
     * @example
     * // Delete a few GameTags
     * const { count } = await prisma.gameTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameTagDeleteManyArgs>(args?: SelectSubset<T, GameTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameTags
     * const gameTag = await prisma.gameTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameTagUpdateManyArgs>(args: SelectSubset<T, GameTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameTag.
     * @param {GameTagUpsertArgs} args - Arguments to update or create a GameTag.
     * @example
     * // Update or create a GameTag
     * const gameTag = await prisma.gameTag.upsert({
     *   create: {
     *     // ... data to create a GameTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameTag we want to update
     *   }
     * })
     */
    upsert<T extends GameTagUpsertArgs>(args: SelectSubset<T, GameTagUpsertArgs<ExtArgs>>): Prisma__GameTagClient<$Result.GetResult<Prisma.$GameTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagCountArgs} args - Arguments to filter GameTags to count.
     * @example
     * // Count the number of GameTags
     * const count = await prisma.gameTag.count({
     *   where: {
     *     // ... the filter for the GameTags we want to count
     *   }
     * })
    **/
    count<T extends GameTagCountArgs>(
      args?: Subset<T, GameTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameTagAggregateArgs>(args: Subset<T, GameTagAggregateArgs>): Prisma.PrismaPromise<GetGameTagAggregateType<T>>

    /**
     * Group by GameTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTagGroupByArgs} args - Group by arguments.
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
      T extends GameTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameTagGroupByArgs['orderBy'] }
        : { orderBy?: GameTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameTag model
   */
  readonly fields: GameTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends GameTag$gamesArgs<ExtArgs> = {}>(args?: Subset<T, GameTag$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the GameTag model
   */ 
  interface GameTagFieldRefs {
    readonly id: FieldRef<"GameTag", 'Int'>
    readonly label: FieldRef<"GameTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GameTag findUnique
   */
  export type GameTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag findUniqueOrThrow
   */
  export type GameTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag findFirst
   */
  export type GameTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTags.
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTags.
     */
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * GameTag findFirstOrThrow
   */
  export type GameTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTag to fetch.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTags.
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTags.
     */
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * GameTag findMany
   */
  export type GameTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter, which GameTags to fetch.
     */
    where?: GameTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTags to fetch.
     */
    orderBy?: GameTagOrderByWithRelationInput | GameTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameTags.
     */
    cursor?: GameTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTags.
     */
    skip?: number
    distinct?: GameTagScalarFieldEnum | GameTagScalarFieldEnum[]
  }

  /**
   * GameTag create
   */
  export type GameTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * The data needed to create a GameTag.
     */
    data: XOR<GameTagCreateInput, GameTagUncheckedCreateInput>
  }

  /**
   * GameTag createMany
   */
  export type GameTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameTags.
     */
    data: GameTagCreateManyInput | GameTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameTag update
   */
  export type GameTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * The data needed to update a GameTag.
     */
    data: XOR<GameTagUpdateInput, GameTagUncheckedUpdateInput>
    /**
     * Choose, which GameTag to update.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag updateMany
   */
  export type GameTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameTags.
     */
    data: XOR<GameTagUpdateManyMutationInput, GameTagUncheckedUpdateManyInput>
    /**
     * Filter which GameTags to update
     */
    where?: GameTagWhereInput
  }

  /**
   * GameTag upsert
   */
  export type GameTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * The filter to search for the GameTag to update in case it exists.
     */
    where: GameTagWhereUniqueInput
    /**
     * In case the GameTag found by the `where` argument doesn't exist, create a new GameTag with this data.
     */
    create: XOR<GameTagCreateInput, GameTagUncheckedCreateInput>
    /**
     * In case the GameTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameTagUpdateInput, GameTagUncheckedUpdateInput>
  }

  /**
   * GameTag delete
   */
  export type GameTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
    /**
     * Filter which GameTag to delete.
     */
    where: GameTagWhereUniqueInput
  }

  /**
   * GameTag deleteMany
   */
  export type GameTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTags to delete
     */
    where?: GameTagWhereInput
  }

  /**
   * GameTag.games
   */
  export type GameTag$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * GameTag without action
   */
  export type GameTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTag
     */
    select?: GameTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTagInclude<ExtArgs> | null
  }


  /**
   * Model Checkpoint
   */

  export type AggregateCheckpoint = {
    _count: CheckpointCountAggregateOutputType | null
    _avg: CheckpointAvgAggregateOutputType | null
    _sum: CheckpointSumAggregateOutputType | null
    _min: CheckpointMinAggregateOutputType | null
    _max: CheckpointMaxAggregateOutputType | null
  }

  export type CheckpointAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    imageId: number | null
    mapId: number | null
    maxPoints: number | null
    pointsPenalty: number | null
    ordering: number | null
  }

  export type CheckpointSumAggregateOutputType = {
    id: number | null
    gameId: number | null
    imageId: number | null
    mapId: number | null
    maxPoints: number | null
    pointsPenalty: number | null
    ordering: number | null
  }

  export type CheckpointMinAggregateOutputType = {
    id: number | null
    gameId: number | null
    title: string | null
    description: string | null
    imageId: number | null
    mapId: number | null
    riddle: string | null
    gpsCoordinates: string | null
    reachDescription: string | null
    maxPoints: number | null
    pointsPenalty: number | null
    ordering: number | null
  }

  export type CheckpointMaxAggregateOutputType = {
    id: number | null
    gameId: number | null
    title: string | null
    description: string | null
    imageId: number | null
    mapId: number | null
    riddle: string | null
    gpsCoordinates: string | null
    reachDescription: string | null
    maxPoints: number | null
    pointsPenalty: number | null
    ordering: number | null
  }

  export type CheckpointCountAggregateOutputType = {
    id: number
    gameId: number
    title: number
    description: number
    imageId: number
    mapId: number
    riddle: number
    answer: number
    gpsCoordinates: number
    reachDescription: number
    maxPoints: number
    pointsPenalty: number
    ordering: number
    _all: number
  }


  export type CheckpointAvgAggregateInputType = {
    id?: true
    gameId?: true
    imageId?: true
    mapId?: true
    maxPoints?: true
    pointsPenalty?: true
    ordering?: true
  }

  export type CheckpointSumAggregateInputType = {
    id?: true
    gameId?: true
    imageId?: true
    mapId?: true
    maxPoints?: true
    pointsPenalty?: true
    ordering?: true
  }

  export type CheckpointMinAggregateInputType = {
    id?: true
    gameId?: true
    title?: true
    description?: true
    imageId?: true
    mapId?: true
    riddle?: true
    gpsCoordinates?: true
    reachDescription?: true
    maxPoints?: true
    pointsPenalty?: true
    ordering?: true
  }

  export type CheckpointMaxAggregateInputType = {
    id?: true
    gameId?: true
    title?: true
    description?: true
    imageId?: true
    mapId?: true
    riddle?: true
    gpsCoordinates?: true
    reachDescription?: true
    maxPoints?: true
    pointsPenalty?: true
    ordering?: true
  }

  export type CheckpointCountAggregateInputType = {
    id?: true
    gameId?: true
    title?: true
    description?: true
    imageId?: true
    mapId?: true
    riddle?: true
    answer?: true
    gpsCoordinates?: true
    reachDescription?: true
    maxPoints?: true
    pointsPenalty?: true
    ordering?: true
    _all?: true
  }

  export type CheckpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkpoint to aggregate.
     */
    where?: CheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkpoints to fetch.
     */
    orderBy?: CheckpointOrderByWithRelationInput | CheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkpoints
    **/
    _count?: true | CheckpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckpointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckpointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckpointMaxAggregateInputType
  }

  export type GetCheckpointAggregateType<T extends CheckpointAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckpoint[P]>
      : GetScalarType<T[P], AggregateCheckpoint[P]>
  }




  export type CheckpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckpointWhereInput
    orderBy?: CheckpointOrderByWithAggregationInput | CheckpointOrderByWithAggregationInput[]
    by: CheckpointScalarFieldEnum[] | CheckpointScalarFieldEnum
    having?: CheckpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckpointCountAggregateInputType | true
    _avg?: CheckpointAvgAggregateInputType
    _sum?: CheckpointSumAggregateInputType
    _min?: CheckpointMinAggregateInputType
    _max?: CheckpointMaxAggregateInputType
  }

  export type CheckpointGroupByOutputType = {
    id: number
    gameId: number
    title: string
    description: string
    imageId: number
    mapId: number
    riddle: string
    answer: JsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    _count: CheckpointCountAggregateOutputType | null
    _avg: CheckpointAvgAggregateOutputType | null
    _sum: CheckpointSumAggregateOutputType | null
    _min: CheckpointMinAggregateOutputType | null
    _max: CheckpointMaxAggregateOutputType | null
  }

  type GetCheckpointGroupByPayload<T extends CheckpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckpointGroupByOutputType[P]>
            : GetScalarType<T[P], CheckpointGroupByOutputType[P]>
        }
      >
    >


  export type CheckpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    title?: boolean
    description?: boolean
    imageId?: boolean
    mapId?: boolean
    riddle?: boolean
    answer?: boolean
    gpsCoordinates?: boolean
    reachDescription?: boolean
    maxPoints?: boolean
    pointsPenalty?: boolean
    ordering?: boolean
    image?: boolean | FileDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    gameSessions?: boolean | Checkpoint$gameSessionsArgs<ExtArgs>
    hints?: boolean | Checkpoint$hintsArgs<ExtArgs>
    _count?: boolean | CheckpointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkpoint"]>


  export type CheckpointSelectScalar = {
    id?: boolean
    gameId?: boolean
    title?: boolean
    description?: boolean
    imageId?: boolean
    mapId?: boolean
    riddle?: boolean
    answer?: boolean
    gpsCoordinates?: boolean
    reachDescription?: boolean
    maxPoints?: boolean
    pointsPenalty?: boolean
    ordering?: boolean
  }

  export type CheckpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | FileDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    gameSessions?: boolean | Checkpoint$gameSessionsArgs<ExtArgs>
    hints?: boolean | Checkpoint$hintsArgs<ExtArgs>
    _count?: boolean | CheckpointCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CheckpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkpoint"
    objects: {
      image: Prisma.$FilePayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
      hints: Prisma.$HintPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: number
      title: string
      description: string
      imageId: number
      mapId: number
      riddle: string
      answer: Prisma.JsonValue
      gpsCoordinates: string
      reachDescription: string
      maxPoints: number
      pointsPenalty: number
      ordering: number
    }, ExtArgs["result"]["checkpoint"]>
    composites: {}
  }

  type CheckpointGetPayload<S extends boolean | null | undefined | CheckpointDefaultArgs> = $Result.GetResult<Prisma.$CheckpointPayload, S>

  type CheckpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckpointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckpointCountAggregateInputType | true
    }

  export interface CheckpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkpoint'], meta: { name: 'Checkpoint' } }
    /**
     * Find zero or one Checkpoint that matches the filter.
     * @param {CheckpointFindUniqueArgs} args - Arguments to find a Checkpoint
     * @example
     * // Get one Checkpoint
     * const checkpoint = await prisma.checkpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckpointFindUniqueArgs>(args: SelectSubset<T, CheckpointFindUniqueArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Checkpoint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckpointFindUniqueOrThrowArgs} args - Arguments to find a Checkpoint
     * @example
     * // Get one Checkpoint
     * const checkpoint = await prisma.checkpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckpointFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Checkpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckpointFindFirstArgs} args - Arguments to find a Checkpoint
     * @example
     * // Get one Checkpoint
     * const checkpoint = await prisma.checkpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckpointFindFirstArgs>(args?: SelectSubset<T, CheckpointFindFirstArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Checkpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckpointFindFirstOrThrowArgs} args - Arguments to find a Checkpoint
     * @example
     * // Get one Checkpoint
     * const checkpoint = await prisma.checkpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckpointFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Checkpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkpoints
     * const checkpoints = await prisma.checkpoint.findMany()
     * 
     * // Get first 10 Checkpoints
     * const checkpoints = await prisma.checkpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkpointWithIdOnly = await prisma.checkpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckpointFindManyArgs>(args?: SelectSubset<T, CheckpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Checkpoint.
     * @param {CheckpointCreateArgs} args - Arguments to create a Checkpoint.
     * @example
     * // Create one Checkpoint
     * const Checkpoint = await prisma.checkpoint.create({
     *   data: {
     *     // ... data to create a Checkpoint
     *   }
     * })
     * 
     */
    create<T extends CheckpointCreateArgs>(args: SelectSubset<T, CheckpointCreateArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Checkpoints.
     * @param {CheckpointCreateManyArgs} args - Arguments to create many Checkpoints.
     * @example
     * // Create many Checkpoints
     * const checkpoint = await prisma.checkpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckpointCreateManyArgs>(args?: SelectSubset<T, CheckpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Checkpoint.
     * @param {CheckpointDeleteArgs} args - Arguments to delete one Checkpoint.
     * @example
     * // Delete one Checkpoint
     * const Checkpoint = await prisma.checkpoint.delete({
     *   where: {
     *     // ... filter to delete one Checkpoint
     *   }
     * })
     * 
     */
    delete<T extends CheckpointDeleteArgs>(args: SelectSubset<T, CheckpointDeleteArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Checkpoint.
     * @param {CheckpointUpdateArgs} args - Arguments to update one Checkpoint.
     * @example
     * // Update one Checkpoint
     * const checkpoint = await prisma.checkpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckpointUpdateArgs>(args: SelectSubset<T, CheckpointUpdateArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Checkpoints.
     * @param {CheckpointDeleteManyArgs} args - Arguments to filter Checkpoints to delete.
     * @example
     * // Delete a few Checkpoints
     * const { count } = await prisma.checkpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckpointDeleteManyArgs>(args?: SelectSubset<T, CheckpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkpoints
     * const checkpoint = await prisma.checkpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckpointUpdateManyArgs>(args: SelectSubset<T, CheckpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checkpoint.
     * @param {CheckpointUpsertArgs} args - Arguments to update or create a Checkpoint.
     * @example
     * // Update or create a Checkpoint
     * const checkpoint = await prisma.checkpoint.upsert({
     *   create: {
     *     // ... data to create a Checkpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkpoint we want to update
     *   }
     * })
     */
    upsert<T extends CheckpointUpsertArgs>(args: SelectSubset<T, CheckpointUpsertArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckpointCountArgs} args - Arguments to filter Checkpoints to count.
     * @example
     * // Count the number of Checkpoints
     * const count = await prisma.checkpoint.count({
     *   where: {
     *     // ... the filter for the Checkpoints we want to count
     *   }
     * })
    **/
    count<T extends CheckpointCountArgs>(
      args?: Subset<T, CheckpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckpointAggregateArgs>(args: Subset<T, CheckpointAggregateArgs>): Prisma.PrismaPromise<GetCheckpointAggregateType<T>>

    /**
     * Group by Checkpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckpointGroupByArgs} args - Group by arguments.
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
      T extends CheckpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckpointGroupByArgs['orderBy'] }
        : { orderBy?: CheckpointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkpoint model
   */
  readonly fields: CheckpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    gameSessions<T extends Checkpoint$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Checkpoint$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany"> | Null>
    hints<T extends Checkpoint$hintsArgs<ExtArgs> = {}>(args?: Subset<T, Checkpoint$hintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Checkpoint model
   */ 
  interface CheckpointFieldRefs {
    readonly id: FieldRef<"Checkpoint", 'Int'>
    readonly gameId: FieldRef<"Checkpoint", 'Int'>
    readonly title: FieldRef<"Checkpoint", 'String'>
    readonly description: FieldRef<"Checkpoint", 'String'>
    readonly imageId: FieldRef<"Checkpoint", 'Int'>
    readonly mapId: FieldRef<"Checkpoint", 'Int'>
    readonly riddle: FieldRef<"Checkpoint", 'String'>
    readonly answer: FieldRef<"Checkpoint", 'Json'>
    readonly gpsCoordinates: FieldRef<"Checkpoint", 'String'>
    readonly reachDescription: FieldRef<"Checkpoint", 'String'>
    readonly maxPoints: FieldRef<"Checkpoint", 'Int'>
    readonly pointsPenalty: FieldRef<"Checkpoint", 'Int'>
    readonly ordering: FieldRef<"Checkpoint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Checkpoint findUnique
   */
  export type CheckpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * Filter, which Checkpoint to fetch.
     */
    where: CheckpointWhereUniqueInput
  }

  /**
   * Checkpoint findUniqueOrThrow
   */
  export type CheckpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * Filter, which Checkpoint to fetch.
     */
    where: CheckpointWhereUniqueInput
  }

  /**
   * Checkpoint findFirst
   */
  export type CheckpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * Filter, which Checkpoint to fetch.
     */
    where?: CheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkpoints to fetch.
     */
    orderBy?: CheckpointOrderByWithRelationInput | CheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkpoints.
     */
    cursor?: CheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkpoints.
     */
    distinct?: CheckpointScalarFieldEnum | CheckpointScalarFieldEnum[]
  }

  /**
   * Checkpoint findFirstOrThrow
   */
  export type CheckpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * Filter, which Checkpoint to fetch.
     */
    where?: CheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkpoints to fetch.
     */
    orderBy?: CheckpointOrderByWithRelationInput | CheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkpoints.
     */
    cursor?: CheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkpoints.
     */
    distinct?: CheckpointScalarFieldEnum | CheckpointScalarFieldEnum[]
  }

  /**
   * Checkpoint findMany
   */
  export type CheckpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * Filter, which Checkpoints to fetch.
     */
    where?: CheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkpoints to fetch.
     */
    orderBy?: CheckpointOrderByWithRelationInput | CheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkpoints.
     */
    cursor?: CheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkpoints.
     */
    skip?: number
    distinct?: CheckpointScalarFieldEnum | CheckpointScalarFieldEnum[]
  }

  /**
   * Checkpoint create
   */
  export type CheckpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkpoint.
     */
    data: XOR<CheckpointCreateInput, CheckpointUncheckedCreateInput>
  }

  /**
   * Checkpoint createMany
   */
  export type CheckpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkpoints.
     */
    data: CheckpointCreateManyInput | CheckpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkpoint update
   */
  export type CheckpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkpoint.
     */
    data: XOR<CheckpointUpdateInput, CheckpointUncheckedUpdateInput>
    /**
     * Choose, which Checkpoint to update.
     */
    where: CheckpointWhereUniqueInput
  }

  /**
   * Checkpoint updateMany
   */
  export type CheckpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkpoints.
     */
    data: XOR<CheckpointUpdateManyMutationInput, CheckpointUncheckedUpdateManyInput>
    /**
     * Filter which Checkpoints to update
     */
    where?: CheckpointWhereInput
  }

  /**
   * Checkpoint upsert
   */
  export type CheckpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkpoint to update in case it exists.
     */
    where: CheckpointWhereUniqueInput
    /**
     * In case the Checkpoint found by the `where` argument doesn't exist, create a new Checkpoint with this data.
     */
    create: XOR<CheckpointCreateInput, CheckpointUncheckedCreateInput>
    /**
     * In case the Checkpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckpointUpdateInput, CheckpointUncheckedUpdateInput>
  }

  /**
   * Checkpoint delete
   */
  export type CheckpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    /**
     * Filter which Checkpoint to delete.
     */
    where: CheckpointWhereUniqueInput
  }

  /**
   * Checkpoint deleteMany
   */
  export type CheckpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkpoints to delete
     */
    where?: CheckpointWhereInput
  }

  /**
   * Checkpoint.gameSessions
   */
  export type Checkpoint$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * Checkpoint.hints
   */
  export type Checkpoint$hintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    where?: HintWhereInput
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    cursor?: HintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Checkpoint without action
   */
  export type CheckpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
  }


  /**
   * Model Hint
   */

  export type AggregateHint = {
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  export type HintAvgAggregateOutputType = {
    id: number | null
    checkpointId: number | null
    ordering: number | null
  }

  export type HintSumAggregateOutputType = {
    id: number | null
    checkpointId: number | null
    ordering: number | null
  }

  export type HintMinAggregateOutputType = {
    id: number | null
    checkpointId: number | null
    label: string | null
    ordering: number | null
  }

  export type HintMaxAggregateOutputType = {
    id: number | null
    checkpointId: number | null
    label: string | null
    ordering: number | null
  }

  export type HintCountAggregateOutputType = {
    id: number
    checkpointId: number
    label: number
    ordering: number
    _all: number
  }


  export type HintAvgAggregateInputType = {
    id?: true
    checkpointId?: true
    ordering?: true
  }

  export type HintSumAggregateInputType = {
    id?: true
    checkpointId?: true
    ordering?: true
  }

  export type HintMinAggregateInputType = {
    id?: true
    checkpointId?: true
    label?: true
    ordering?: true
  }

  export type HintMaxAggregateInputType = {
    id?: true
    checkpointId?: true
    label?: true
    ordering?: true
  }

  export type HintCountAggregateInputType = {
    id?: true
    checkpointId?: true
    label?: true
    ordering?: true
    _all?: true
  }

  export type HintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hint to aggregate.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hints
    **/
    _count?: true | HintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HintMaxAggregateInputType
  }

  export type GetHintAggregateType<T extends HintAggregateArgs> = {
        [P in keyof T & keyof AggregateHint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHint[P]>
      : GetScalarType<T[P], AggregateHint[P]>
  }




  export type HintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HintWhereInput
    orderBy?: HintOrderByWithAggregationInput | HintOrderByWithAggregationInput[]
    by: HintScalarFieldEnum[] | HintScalarFieldEnum
    having?: HintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HintCountAggregateInputType | true
    _avg?: HintAvgAggregateInputType
    _sum?: HintSumAggregateInputType
    _min?: HintMinAggregateInputType
    _max?: HintMaxAggregateInputType
  }

  export type HintGroupByOutputType = {
    id: number
    checkpointId: number
    label: string
    ordering: number
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  type GetHintGroupByPayload<T extends HintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HintGroupByOutputType[P]>
            : GetScalarType<T[P], HintGroupByOutputType[P]>
        }
      >
    >


  export type HintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkpointId?: boolean
    label?: boolean
    ordering?: boolean
    checkpoint?: boolean | CheckpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>


  export type HintSelectScalar = {
    id?: boolean
    checkpointId?: boolean
    label?: boolean
    ordering?: boolean
  }

  export type HintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkpoint?: boolean | CheckpointDefaultArgs<ExtArgs>
  }

  export type $HintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hint"
    objects: {
      checkpoint: Prisma.$CheckpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkpointId: number
      label: string
      ordering: number
    }, ExtArgs["result"]["hint"]>
    composites: {}
  }

  type HintGetPayload<S extends boolean | null | undefined | HintDefaultArgs> = $Result.GetResult<Prisma.$HintPayload, S>

  type HintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HintFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HintCountAggregateInputType | true
    }

  export interface HintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hint'], meta: { name: 'Hint' } }
    /**
     * Find zero or one Hint that matches the filter.
     * @param {HintFindUniqueArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HintFindUniqueArgs>(args: SelectSubset<T, HintFindUniqueArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HintFindUniqueOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HintFindUniqueOrThrowArgs>(args: SelectSubset<T, HintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HintFindFirstArgs>(args?: SelectSubset<T, HintFindFirstArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HintFindFirstOrThrowArgs>(args?: SelectSubset<T, HintFindFirstOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hints
     * const hints = await prisma.hint.findMany()
     * 
     * // Get first 10 Hints
     * const hints = await prisma.hint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hintWithIdOnly = await prisma.hint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HintFindManyArgs>(args?: SelectSubset<T, HintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hint.
     * @param {HintCreateArgs} args - Arguments to create a Hint.
     * @example
     * // Create one Hint
     * const Hint = await prisma.hint.create({
     *   data: {
     *     // ... data to create a Hint
     *   }
     * })
     * 
     */
    create<T extends HintCreateArgs>(args: SelectSubset<T, HintCreateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hints.
     * @param {HintCreateManyArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HintCreateManyArgs>(args?: SelectSubset<T, HintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hint.
     * @param {HintDeleteArgs} args - Arguments to delete one Hint.
     * @example
     * // Delete one Hint
     * const Hint = await prisma.hint.delete({
     *   where: {
     *     // ... filter to delete one Hint
     *   }
     * })
     * 
     */
    delete<T extends HintDeleteArgs>(args: SelectSubset<T, HintDeleteArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hint.
     * @param {HintUpdateArgs} args - Arguments to update one Hint.
     * @example
     * // Update one Hint
     * const hint = await prisma.hint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HintUpdateArgs>(args: SelectSubset<T, HintUpdateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hints.
     * @param {HintDeleteManyArgs} args - Arguments to filter Hints to delete.
     * @example
     * // Delete a few Hints
     * const { count } = await prisma.hint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HintDeleteManyArgs>(args?: SelectSubset<T, HintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HintUpdateManyArgs>(args: SelectSubset<T, HintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hint.
     * @param {HintUpsertArgs} args - Arguments to update or create a Hint.
     * @example
     * // Update or create a Hint
     * const hint = await prisma.hint.upsert({
     *   create: {
     *     // ... data to create a Hint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hint we want to update
     *   }
     * })
     */
    upsert<T extends HintUpsertArgs>(args: SelectSubset<T, HintUpsertArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintCountArgs} args - Arguments to filter Hints to count.
     * @example
     * // Count the number of Hints
     * const count = await prisma.hint.count({
     *   where: {
     *     // ... the filter for the Hints we want to count
     *   }
     * })
    **/
    count<T extends HintCountArgs>(
      args?: Subset<T, HintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HintAggregateArgs>(args: Subset<T, HintAggregateArgs>): Prisma.PrismaPromise<GetHintAggregateType<T>>

    /**
     * Group by Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintGroupByArgs} args - Group by arguments.
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
      T extends HintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HintGroupByArgs['orderBy'] }
        : { orderBy?: HintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hint model
   */
  readonly fields: HintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkpoint<T extends CheckpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CheckpointDefaultArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Hint model
   */ 
  interface HintFieldRefs {
    readonly id: FieldRef<"Hint", 'Int'>
    readonly checkpointId: FieldRef<"Hint", 'Int'>
    readonly label: FieldRef<"Hint", 'String'>
    readonly ordering: FieldRef<"Hint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hint findUnique
   */
  export type HintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findUniqueOrThrow
   */
  export type HintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findFirst
   */
  export type HintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findFirstOrThrow
   */
  export type HintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findMany
   */
  export type HintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hints to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint create
   */
  export type HintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to create a Hint.
     */
    data: XOR<HintCreateInput, HintUncheckedCreateInput>
  }

  /**
   * Hint createMany
   */
  export type HintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hint update
   */
  export type HintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to update a Hint.
     */
    data: XOR<HintUpdateInput, HintUncheckedUpdateInput>
    /**
     * Choose, which Hint to update.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint updateMany
   */
  export type HintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput
  }

  /**
   * Hint upsert
   */
  export type HintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The filter to search for the Hint to update in case it exists.
     */
    where: HintWhereUniqueInput
    /**
     * In case the Hint found by the `where` argument doesn't exist, create a new Hint with this data.
     */
    create: XOR<HintCreateInput, HintUncheckedCreateInput>
    /**
     * In case the Hint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HintUpdateInput, HintUncheckedUpdateInput>
  }

  /**
   * Hint delete
   */
  export type HintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter which Hint to delete.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint deleteMany
   */
  export type HintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hints to delete
     */
    where?: HintWhereInput
  }

  /**
   * Hint without action
   */
  export type HintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
  }


  /**
   * Model GameSession
   */

  export type AggregateGameSession = {
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  export type GameSessionAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    earnedPoints: number | null
    duration: number | null
    checkpointId: number | null
  }

  export type GameSessionSumAggregateOutputType = {
    id: number | null
    gameId: number | null
    earnedPoints: number | null
    duration: number | null
    checkpointId: number | null
  }

  export type GameSessionMinAggregateOutputType = {
    id: number | null
    inviteCode: string | null
    gameId: number | null
    state: $Enums.GameState | null
    team: string | null
    start: Date | null
    finish: Date | null
    earnedPoints: number | null
    duration: number | null
    checkpointId: number | null
  }

  export type GameSessionMaxAggregateOutputType = {
    id: number | null
    inviteCode: string | null
    gameId: number | null
    state: $Enums.GameState | null
    team: string | null
    start: Date | null
    finish: Date | null
    earnedPoints: number | null
    duration: number | null
    checkpointId: number | null
  }

  export type GameSessionCountAggregateOutputType = {
    id: number
    inviteCode: number
    gameId: number
    state: number
    team: number
    start: number
    finish: number
    earnedPoints: number
    duration: number
    checkpointId: number
    hints: number
    answers: number
    _all: number
  }


  export type GameSessionAvgAggregateInputType = {
    id?: true
    gameId?: true
    earnedPoints?: true
    duration?: true
    checkpointId?: true
  }

  export type GameSessionSumAggregateInputType = {
    id?: true
    gameId?: true
    earnedPoints?: true
    duration?: true
    checkpointId?: true
  }

  export type GameSessionMinAggregateInputType = {
    id?: true
    inviteCode?: true
    gameId?: true
    state?: true
    team?: true
    start?: true
    finish?: true
    earnedPoints?: true
    duration?: true
    checkpointId?: true
  }

  export type GameSessionMaxAggregateInputType = {
    id?: true
    inviteCode?: true
    gameId?: true
    state?: true
    team?: true
    start?: true
    finish?: true
    earnedPoints?: true
    duration?: true
    checkpointId?: true
  }

  export type GameSessionCountAggregateInputType = {
    id?: true
    inviteCode?: true
    gameId?: true
    state?: true
    team?: true
    start?: true
    finish?: true
    earnedPoints?: true
    duration?: true
    checkpointId?: true
    hints?: true
    answers?: true
    _all?: true
  }

  export type GameSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSession to aggregate.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessions
    **/
    _count?: true | GameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionMaxAggregateInputType
  }

  export type GetGameSessionAggregateType<T extends GameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSession[P]>
      : GetScalarType<T[P], AggregateGameSession[P]>
  }




  export type GameSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithAggregationInput | GameSessionOrderByWithAggregationInput[]
    by: GameSessionScalarFieldEnum[] | GameSessionScalarFieldEnum
    having?: GameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionCountAggregateInputType | true
    _avg?: GameSessionAvgAggregateInputType
    _sum?: GameSessionSumAggregateInputType
    _min?: GameSessionMinAggregateInputType
    _max?: GameSessionMaxAggregateInputType
  }

  export type GameSessionGroupByOutputType = {
    id: number
    inviteCode: string
    gameId: number
    state: $Enums.GameState
    team: string
    start: Date
    finish: Date | null
    earnedPoints: number
    duration: number
    checkpointId: number | null
    hints: JsonValue | null
    answers: JsonValue | null
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  type GetGameSessionGroupByPayload<T extends GameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteCode?: boolean
    gameId?: boolean
    state?: boolean
    team?: boolean
    start?: boolean
    finish?: boolean
    earnedPoints?: boolean
    duration?: boolean
    checkpointId?: boolean
    hints?: boolean
    answers?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    checkpoint?: boolean | GameSession$checkpointArgs<ExtArgs>
    participants?: boolean | GameSession$participantsArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>


  export type GameSessionSelectScalar = {
    id?: boolean
    inviteCode?: boolean
    gameId?: boolean
    state?: boolean
    team?: boolean
    start?: boolean
    finish?: boolean
    earnedPoints?: boolean
    duration?: boolean
    checkpointId?: boolean
    hints?: boolean
    answers?: boolean
  }

  export type GameSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    checkpoint?: boolean | GameSession$checkpointArgs<ExtArgs>
    participants?: boolean | GameSession$participantsArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GameSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSession"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      checkpoint: Prisma.$CheckpointPayload<ExtArgs> | null
      participants: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inviteCode: string
      gameId: number
      state: $Enums.GameState
      team: string
      start: Date
      finish: Date | null
      earnedPoints: number
      duration: number
      checkpointId: number | null
      hints: Prisma.JsonValue | null
      answers: Prisma.JsonValue | null
    }, ExtArgs["result"]["gameSession"]>
    composites: {}
  }

  type GameSessionGetPayload<S extends boolean | null | undefined | GameSessionDefaultArgs> = $Result.GetResult<Prisma.$GameSessionPayload, S>

  type GameSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameSessionCountAggregateInputType | true
    }

  export interface GameSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSession'], meta: { name: 'GameSession' } }
    /**
     * Find zero or one GameSession that matches the filter.
     * @param {GameSessionFindUniqueArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSessionFindUniqueArgs>(args: SelectSubset<T, GameSessionFindUniqueArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameSessionFindUniqueOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSessionFindFirstArgs>(args?: SelectSubset<T, GameSessionFindFirstArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSession.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSessionFindManyArgs>(args?: SelectSubset<T, GameSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameSession.
     * @param {GameSessionCreateArgs} args - Arguments to create a GameSession.
     * @example
     * // Create one GameSession
     * const GameSession = await prisma.gameSession.create({
     *   data: {
     *     // ... data to create a GameSession
     *   }
     * })
     * 
     */
    create<T extends GameSessionCreateArgs>(args: SelectSubset<T, GameSessionCreateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameSessions.
     * @param {GameSessionCreateManyArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSessionCreateManyArgs>(args?: SelectSubset<T, GameSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameSession.
     * @param {GameSessionDeleteArgs} args - Arguments to delete one GameSession.
     * @example
     * // Delete one GameSession
     * const GameSession = await prisma.gameSession.delete({
     *   where: {
     *     // ... filter to delete one GameSession
     *   }
     * })
     * 
     */
    delete<T extends GameSessionDeleteArgs>(args: SelectSubset<T, GameSessionDeleteArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameSession.
     * @param {GameSessionUpdateArgs} args - Arguments to update one GameSession.
     * @example
     * // Update one GameSession
     * const gameSession = await prisma.gameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSessionUpdateArgs>(args: SelectSubset<T, GameSessionUpdateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameSessions.
     * @param {GameSessionDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSessionDeleteManyArgs>(args?: SelectSubset<T, GameSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSessionUpdateManyArgs>(args: SelectSubset<T, GameSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameSession.
     * @param {GameSessionUpsertArgs} args - Arguments to update or create a GameSession.
     * @example
     * // Update or create a GameSession
     * const gameSession = await prisma.gameSession.upsert({
     *   create: {
     *     // ... data to create a GameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSession we want to update
     *   }
     * })
     */
    upsert<T extends GameSessionUpsertArgs>(args: SelectSubset<T, GameSessionUpsertArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSession.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends GameSessionCountArgs>(
      args?: Subset<T, GameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameSessionAggregateArgs>(args: Subset<T, GameSessionAggregateArgs>): Prisma.PrismaPromise<GetGameSessionAggregateType<T>>

    /**
     * Group by GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionGroupByArgs} args - Group by arguments.
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
      T extends GameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSession model
   */
  readonly fields: GameSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    checkpoint<T extends GameSession$checkpointArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$checkpointArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    participants<T extends GameSession$participantsArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the GameSession model
   */ 
  interface GameSessionFieldRefs {
    readonly id: FieldRef<"GameSession", 'Int'>
    readonly inviteCode: FieldRef<"GameSession", 'String'>
    readonly gameId: FieldRef<"GameSession", 'Int'>
    readonly state: FieldRef<"GameSession", 'GameState'>
    readonly team: FieldRef<"GameSession", 'String'>
    readonly start: FieldRef<"GameSession", 'DateTime'>
    readonly finish: FieldRef<"GameSession", 'DateTime'>
    readonly earnedPoints: FieldRef<"GameSession", 'Int'>
    readonly duration: FieldRef<"GameSession", 'Int'>
    readonly checkpointId: FieldRef<"GameSession", 'Int'>
    readonly hints: FieldRef<"GameSession", 'Json'>
    readonly answers: FieldRef<"GameSession", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * GameSession findUnique
   */
  export type GameSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findUniqueOrThrow
   */
  export type GameSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findFirst
   */
  export type GameSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findFirstOrThrow
   */
  export type GameSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findMany
   */
  export type GameSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSessions to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession create
   */
  export type GameSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSession.
     */
    data: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
  }

  /**
   * GameSession createMany
   */
  export type GameSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSession update
   */
  export type GameSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSession.
     */
    data: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
    /**
     * Choose, which GameSession to update.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession updateMany
   */
  export type GameSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
  }

  /**
   * GameSession upsert
   */
  export type GameSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSession to update in case it exists.
     */
    where: GameSessionWhereUniqueInput
    /**
     * In case the GameSession found by the `where` argument doesn't exist, create a new GameSession with this data.
     */
    create: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
    /**
     * In case the GameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
  }

  /**
   * GameSession delete
   */
  export type GameSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter which GameSession to delete.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession deleteMany
   */
  export type GameSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessions to delete
     */
    where?: GameSessionWhereInput
  }

  /**
   * GameSession.checkpoint
   */
  export type GameSession$checkpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    where?: CheckpointWhereInput
  }

  /**
   * GameSession.participants
   */
  export type GameSession$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * GameSession without action
   */
  export type GameSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    generatedName: string | null
    originalName: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    generatedName: string | null
    originalName: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    generatedName: number
    originalName: number
    path: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    generatedName?: true
    originalName?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    generatedName?: true
    originalName?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    generatedName?: true
    originalName?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    generatedName: string
    originalName: string
    path: string
    createdAt: Date
    updatedAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    generatedName?: boolean
    originalName?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | File$userArgs<ExtArgs>
    game?: boolean | File$gameArgs<ExtArgs>
    contract?: boolean | File$contractArgs<ExtArgs>
    checkpoint?: boolean | File$checkpointArgs<ExtArgs>
    badge?: boolean | File$badgeArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>


  export type FileSelectScalar = {
    id?: boolean
    generatedName?: boolean
    originalName?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | File$userArgs<ExtArgs>
    game?: boolean | File$gameArgs<ExtArgs>
    contract?: boolean | File$contractArgs<ExtArgs>
    checkpoint?: boolean | File$checkpointArgs<ExtArgs>
    badge?: boolean | File$badgeArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      game: Prisma.$GamePayload<ExtArgs> | null
      contract: Prisma.$ContractPayload<ExtArgs> | null
      checkpoint: Prisma.$CheckpointPayload<ExtArgs> | null
      badge: Prisma.$BadgePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      generatedName: string
      originalName: string
      path: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends File$userArgs<ExtArgs> = {}>(args?: Subset<T, File$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    game<T extends File$gameArgs<ExtArgs> = {}>(args?: Subset<T, File$gameArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    contract<T extends File$contractArgs<ExtArgs> = {}>(args?: Subset<T, File$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    checkpoint<T extends File$checkpointArgs<ExtArgs> = {}>(args?: Subset<T, File$checkpointArgs<ExtArgs>>): Prisma__CheckpointClient<$Result.GetResult<Prisma.$CheckpointPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    badge<T extends File$badgeArgs<ExtArgs> = {}>(args?: Subset<T, File$badgeArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly generatedName: FieldRef<"File", 'String'>
    readonly originalName: FieldRef<"File", 'String'>
    readonly path: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }

  /**
   * File.user
   */
  export type File$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * File.game
   */
  export type File$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
  }

  /**
   * File.contract
   */
  export type File$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * File.checkpoint
   */
  export type File$checkpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint
     */
    select?: CheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckpointInclude<ExtArgs> | null
    where?: CheckpointWhereInput
  }

  /**
   * File.badge
   */
  export type File$badgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    where?: BadgeWhereInput
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    gameId: number | null
    userId: number | null
    fileId: number | null
  }

  export type ContractSumAggregateOutputType = {
    gameId: number | null
    userId: number | null
    fileId: number | null
  }

  export type ContractMinAggregateOutputType = {
    gameId: number | null
    userId: number | null
    fileId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    gameId: number | null
    userId: number | null
    fileId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    gameId: number
    userId: number
    fileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    gameId?: true
    userId?: true
    fileId?: true
  }

  export type ContractSumAggregateInputType = {
    gameId?: true
    userId?: true
    fileId?: true
  }

  export type ContractMinAggregateInputType = {
    gameId?: true
    userId?: true
    fileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    gameId?: true
    userId?: true
    fileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    gameId?: true
    userId?: true
    fileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    gameId: number
    userId: number
    fileId: number
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gameId?: boolean
    userId?: boolean
    fileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>


  export type ContractSelectScalar = {
    gameId?: boolean
    userId?: boolean
    fileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
      file: Prisma.$FilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gameId: number
      userId: number
      fileId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `gameId`
     * const contractWithGameIdOnly = await prisma.contract.findMany({ select: { gameId: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly gameId: FieldRef<"Contract", 'Int'>
    readonly userId: FieldRef<"Contract", 'Int'>
    readonly fileId: FieldRef<"Contract", 'Int'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    invoiceId: number | null
    gopayId: number | null
    fakturoidInvoiceId: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    invoiceId: number | null
    gopayId: number | null
    fakturoidInvoiceId: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    orderUuid: string | null
    userId: number | null
    invoiceId: number | null
    status: $Enums.OrderStatus | null
    gopayId: number | null
    gatewayUrl: string | null
    fakturoidInvoiceId: number | null
    hasInvoice: boolean | null
    emailsSent: boolean | null
    total: number | null
    accessCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    orderUuid: string | null
    userId: number | null
    invoiceId: number | null
    status: $Enums.OrderStatus | null
    gopayId: number | null
    gatewayUrl: string | null
    fakturoidInvoiceId: number | null
    hasInvoice: boolean | null
    emailsSent: boolean | null
    total: number | null
    accessCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderUuid: number
    userId: number
    invoiceId: number
    status: number
    gopayId: number
    gatewayUrl: number
    fakturoidInvoiceId: number
    hasInvoice: number
    emailsSent: number
    total: number
    emails: number
    products: number
    deliveryInfo: number
    accessCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    invoiceId?: true
    gopayId?: true
    fakturoidInvoiceId?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    invoiceId?: true
    gopayId?: true
    fakturoidInvoiceId?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderUuid?: true
    userId?: true
    invoiceId?: true
    status?: true
    gopayId?: true
    gatewayUrl?: true
    fakturoidInvoiceId?: true
    hasInvoice?: true
    emailsSent?: true
    total?: true
    accessCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderUuid?: true
    userId?: true
    invoiceId?: true
    status?: true
    gopayId?: true
    gatewayUrl?: true
    fakturoidInvoiceId?: true
    hasInvoice?: true
    emailsSent?: true
    total?: true
    accessCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderUuid?: true
    userId?: true
    invoiceId?: true
    status?: true
    gopayId?: true
    gatewayUrl?: true
    fakturoidInvoiceId?: true
    hasInvoice?: true
    emailsSent?: true
    total?: true
    emails?: true
    products?: true
    deliveryInfo?: true
    accessCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    orderUuid: string
    userId: number
    invoiceId: number | null
    status: $Enums.OrderStatus
    gopayId: number | null
    gatewayUrl: string | null
    fakturoidInvoiceId: number
    hasInvoice: boolean
    emailsSent: boolean
    total: number
    emails: JsonValue
    products: JsonValue
    deliveryInfo: JsonValue
    accessCode: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderUuid?: boolean
    userId?: boolean
    invoiceId?: boolean
    status?: boolean
    gopayId?: boolean
    gatewayUrl?: boolean
    fakturoidInvoiceId?: boolean
    hasInvoice?: boolean
    emailsSent?: boolean
    total?: boolean
    emails?: boolean
    products?: boolean
    deliveryInfo?: boolean
    accessCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>


  export type OrderSelectScalar = {
    id?: boolean
    orderUuid?: boolean
    userId?: boolean
    invoiceId?: boolean
    status?: boolean
    gopayId?: boolean
    gatewayUrl?: boolean
    fakturoidInvoiceId?: boolean
    hasInvoice?: boolean
    emailsSent?: boolean
    total?: boolean
    emails?: boolean
    products?: boolean
    deliveryInfo?: boolean
    accessCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderUuid: string
      userId: number
      invoiceId: number | null
      status: $Enums.OrderStatus
      gopayId: number | null
      gatewayUrl: string | null
      fakturoidInvoiceId: number
      hasInvoice: boolean
      emailsSent: boolean
      total: number
      emails: Prisma.JsonValue
      products: Prisma.JsonValue
      deliveryInfo: Prisma.JsonValue
      accessCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly orderUuid: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly invoiceId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly gopayId: FieldRef<"Order", 'Int'>
    readonly gatewayUrl: FieldRef<"Order", 'String'>
    readonly fakturoidInvoiceId: FieldRef<"Order", 'Int'>
    readonly hasInvoice: FieldRef<"Order", 'Boolean'>
    readonly emailsSent: FieldRef<"Order", 'Boolean'>
    readonly total: FieldRef<"Order", 'Int'>
    readonly emails: FieldRef<"Order", 'Json'>
    readonly products: FieldRef<"Order", 'Json'>
    readonly deliveryInfo: FieldRef<"Order", 'Json'>
    readonly accessCode: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    token: string
    userId: number
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>


  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userId: number
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
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


  export const BadgeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    minExperience: 'minExperience',
    imageId: 'imageId'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    role: 'role',
    isAlive: 'isAlive',
    photoId: 'photoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    experience: 'experience',
    coins: 'coins',
    badgeId: 'badgeId',
    deliveryInfo: 'deliveryInfo'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurchasedGamesScalarFieldEnum: {
    userId: 'userId',
    gameId: 'gameId',
    played: 'played',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchasedGamesScalarFieldEnum = (typeof PurchasedGamesScalarFieldEnum)[keyof typeof PurchasedGamesScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    place: 'place',
    difficultness: 'difficultness',
    startingCheckpointId: 'startingCheckpointId',
    endingCheckpointId: 'endingCheckpointId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageId: 'imageId',
    authorId: 'authorId',
    isActive: 'isActive',
    price: 'price',
    maxPoints: 'maxPoints'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameTagScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type GameTagScalarFieldEnum = (typeof GameTagScalarFieldEnum)[keyof typeof GameTagScalarFieldEnum]


  export const CheckpointScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    title: 'title',
    description: 'description',
    imageId: 'imageId',
    mapId: 'mapId',
    riddle: 'riddle',
    answer: 'answer',
    gpsCoordinates: 'gpsCoordinates',
    reachDescription: 'reachDescription',
    maxPoints: 'maxPoints',
    pointsPenalty: 'pointsPenalty',
    ordering: 'ordering'
  };

  export type CheckpointScalarFieldEnum = (typeof CheckpointScalarFieldEnum)[keyof typeof CheckpointScalarFieldEnum]


  export const HintScalarFieldEnum: {
    id: 'id',
    checkpointId: 'checkpointId',
    label: 'label',
    ordering: 'ordering'
  };

  export type HintScalarFieldEnum = (typeof HintScalarFieldEnum)[keyof typeof HintScalarFieldEnum]


  export const GameSessionScalarFieldEnum: {
    id: 'id',
    inviteCode: 'inviteCode',
    gameId: 'gameId',
    state: 'state',
    team: 'team',
    start: 'start',
    finish: 'finish',
    earnedPoints: 'earnedPoints',
    duration: 'duration',
    checkpointId: 'checkpointId',
    hints: 'hints',
    answers: 'answers'
  };

  export type GameSessionScalarFieldEnum = (typeof GameSessionScalarFieldEnum)[keyof typeof GameSessionScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    generatedName: 'generatedName',
    originalName: 'originalName',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    gameId: 'gameId',
    userId: 'userId',
    fileId: 'fileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderUuid: 'orderUuid',
    userId: 'userId',
    invoiceId: 'invoiceId',
    status: 'status',
    gopayId: 'gopayId',
    gatewayUrl: 'gatewayUrl',
    fakturoidInvoiceId: 'fakturoidInvoiceId',
    hasInvoice: 'hasInvoice',
    emailsSent: 'emailsSent',
    total: 'total',
    emails: 'emails',
    products: 'products',
    deliveryInfo: 'deliveryInfo',
    accessCode: 'accessCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const BadgeOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type BadgeOrderByRelevanceFieldEnum = (typeof BadgeOrderByRelevanceFieldEnum)[keyof typeof BadgeOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const GameOrderByRelevanceFieldEnum: {
    title: 'title',
    slug: 'slug',
    description: 'description',
    place: 'place'
  };

  export type GameOrderByRelevanceFieldEnum = (typeof GameOrderByRelevanceFieldEnum)[keyof typeof GameOrderByRelevanceFieldEnum]


  export const GameTagOrderByRelevanceFieldEnum: {
    label: 'label'
  };

  export type GameTagOrderByRelevanceFieldEnum = (typeof GameTagOrderByRelevanceFieldEnum)[keyof typeof GameTagOrderByRelevanceFieldEnum]


  export const CheckpointOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    riddle: 'riddle',
    gpsCoordinates: 'gpsCoordinates',
    reachDescription: 'reachDescription'
  };

  export type CheckpointOrderByRelevanceFieldEnum = (typeof CheckpointOrderByRelevanceFieldEnum)[keyof typeof CheckpointOrderByRelevanceFieldEnum]


  export const HintOrderByRelevanceFieldEnum: {
    label: 'label'
  };

  export type HintOrderByRelevanceFieldEnum = (typeof HintOrderByRelevanceFieldEnum)[keyof typeof HintOrderByRelevanceFieldEnum]


  export const GameSessionOrderByRelevanceFieldEnum: {
    inviteCode: 'inviteCode',
    team: 'team'
  };

  export type GameSessionOrderByRelevanceFieldEnum = (typeof GameSessionOrderByRelevanceFieldEnum)[keyof typeof GameSessionOrderByRelevanceFieldEnum]


  export const FileOrderByRelevanceFieldEnum: {
    generatedName: 'generatedName',
    originalName: 'originalName',
    path: 'path'
  };

  export type FileOrderByRelevanceFieldEnum = (typeof FileOrderByRelevanceFieldEnum)[keyof typeof FileOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    orderUuid: 'orderUuid',
    gatewayUrl: 'gatewayUrl',
    accessCode: 'accessCode'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'GameDifficulty'
   */
  export type EnumGameDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameDifficulty'>
    


  /**
   * Reference to a field of type 'GameState'
   */
  export type EnumGameStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameState'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: IntFilter<"Badge"> | number
    title?: StringFilter<"Badge"> | string
    minExperience?: IntFilter<"Badge"> | number
    imageId?: IntFilter<"Badge"> | number
    image?: XOR<FileRelationFilter, FileWhereInput>
    users?: UserListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    minExperience?: SortOrder
    imageId?: SortOrder
    image?: FileOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    _relevance?: BadgeOrderByRelevanceInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    imageId?: number
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    title?: StringFilter<"Badge"> | string
    minExperience?: IntFilter<"Badge"> | number
    image?: XOR<FileRelationFilter, FileWhereInput>
    users?: UserListRelationFilter
  }, "id" | "imageId">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    minExperience?: SortOrder
    imageId?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Badge"> | number
    title?: StringWithAggregatesFilter<"Badge"> | string
    minExperience?: IntWithAggregatesFilter<"Badge"> | number
    imageId?: IntWithAggregatesFilter<"Badge"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isAlive?: BoolFilter<"User"> | boolean
    photoId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    experience?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    badgeId?: IntFilter<"User"> | number
    deliveryInfo?: JsonNullableFilter<"User">
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
    photo?: XOR<FileNullableRelationFilter, FileWhereInput> | null
    contract?: ContractListRelationFilter
    participations?: GameSessionListRelationFilter
    orders?: OrderListRelationFilter
    purchasedGames?: PurchasedGamesListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isAlive?: SortOrder
    photoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    badgeId?: SortOrder
    deliveryInfo?: SortOrderInput | SortOrder
    badge?: BadgeOrderByWithRelationInput
    photo?: FileOrderByWithRelationInput
    contract?: ContractOrderByRelationAggregateInput
    participations?: GameSessionOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    purchasedGames?: PurchasedGamesOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    photoId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isAlive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    experience?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    badgeId?: IntFilter<"User"> | number
    deliveryInfo?: JsonNullableFilter<"User">
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
    photo?: XOR<FileNullableRelationFilter, FileWhereInput> | null
    contract?: ContractListRelationFilter
    participations?: GameSessionListRelationFilter
    orders?: OrderListRelationFilter
    purchasedGames?: PurchasedGamesListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email" | "photoId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isAlive?: SortOrder
    photoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    badgeId?: SortOrder
    deliveryInfo?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isAlive?: BoolWithAggregatesFilter<"User"> | boolean
    photoId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    experience?: IntWithAggregatesFilter<"User"> | number
    coins?: IntWithAggregatesFilter<"User"> | number
    badgeId?: IntWithAggregatesFilter<"User"> | number
    deliveryInfo?: JsonNullableWithAggregatesFilter<"User">
  }

  export type PurchasedGamesWhereInput = {
    AND?: PurchasedGamesWhereInput | PurchasedGamesWhereInput[]
    OR?: PurchasedGamesWhereInput[]
    NOT?: PurchasedGamesWhereInput | PurchasedGamesWhereInput[]
    userId?: IntFilter<"PurchasedGames"> | number
    gameId?: IntFilter<"PurchasedGames"> | number
    played?: BoolFilter<"PurchasedGames"> | boolean
    createdAt?: DateTimeFilter<"PurchasedGames"> | Date | string
    updatedAt?: DateTimeFilter<"PurchasedGames"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type PurchasedGamesOrderByWithRelationInput = {
    userId?: SortOrder
    gameId?: SortOrder
    played?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type PurchasedGamesWhereUniqueInput = Prisma.AtLeast<{
    userId_gameId?: PurchasedGamesUserIdGameIdCompoundUniqueInput
    AND?: PurchasedGamesWhereInput | PurchasedGamesWhereInput[]
    OR?: PurchasedGamesWhereInput[]
    NOT?: PurchasedGamesWhereInput | PurchasedGamesWhereInput[]
    userId?: IntFilter<"PurchasedGames"> | number
    gameId?: IntFilter<"PurchasedGames"> | number
    played?: BoolFilter<"PurchasedGames"> | boolean
    createdAt?: DateTimeFilter<"PurchasedGames"> | Date | string
    updatedAt?: DateTimeFilter<"PurchasedGames"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
  }, "userId_gameId">

  export type PurchasedGamesOrderByWithAggregationInput = {
    userId?: SortOrder
    gameId?: SortOrder
    played?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchasedGamesCountOrderByAggregateInput
    _avg?: PurchasedGamesAvgOrderByAggregateInput
    _max?: PurchasedGamesMaxOrderByAggregateInput
    _min?: PurchasedGamesMinOrderByAggregateInput
    _sum?: PurchasedGamesSumOrderByAggregateInput
  }

  export type PurchasedGamesScalarWhereWithAggregatesInput = {
    AND?: PurchasedGamesScalarWhereWithAggregatesInput | PurchasedGamesScalarWhereWithAggregatesInput[]
    OR?: PurchasedGamesScalarWhereWithAggregatesInput[]
    NOT?: PurchasedGamesScalarWhereWithAggregatesInput | PurchasedGamesScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"PurchasedGames"> | number
    gameId?: IntWithAggregatesFilter<"PurchasedGames"> | number
    played?: BoolWithAggregatesFilter<"PurchasedGames"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PurchasedGames"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchasedGames"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    title?: StringFilter<"Game"> | string
    slug?: StringFilter<"Game"> | string
    description?: StringFilter<"Game"> | string
    place?: StringFilter<"Game"> | string
    difficultness?: EnumGameDifficultyFilter<"Game"> | $Enums.GameDifficulty
    startingCheckpointId?: IntFilter<"Game"> | number
    endingCheckpointId?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    imageId?: IntFilter<"Game"> | number
    authorId?: IntFilter<"Game"> | number
    isActive?: BoolFilter<"Game"> | boolean
    price?: IntFilter<"Game"> | number
    maxPoints?: IntFilter<"Game"> | number
    image?: XOR<FileRelationFilter, FileWhereInput>
    checkpoints?: CheckpointListRelationFilter
    contract?: ContractListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    tags?: GameTagListRelationFilter
    purchases?: PurchasedGamesListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    place?: SortOrder
    difficultness?: SortOrder
    startingCheckpointId?: SortOrder
    endingCheckpointId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    authorId?: SortOrder
    isActive?: SortOrder
    price?: SortOrder
    maxPoints?: SortOrder
    image?: FileOrderByWithRelationInput
    checkpoints?: CheckpointOrderByRelationAggregateInput
    contract?: ContractOrderByRelationAggregateInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
    tags?: GameTagOrderByRelationAggregateInput
    purchases?: PurchasedGamesOrderByRelationAggregateInput
    _relevance?: GameOrderByRelevanceInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    slug?: string
    imageId?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    description?: StringFilter<"Game"> | string
    place?: StringFilter<"Game"> | string
    difficultness?: EnumGameDifficultyFilter<"Game"> | $Enums.GameDifficulty
    startingCheckpointId?: IntFilter<"Game"> | number
    endingCheckpointId?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    authorId?: IntFilter<"Game"> | number
    isActive?: BoolFilter<"Game"> | boolean
    price?: IntFilter<"Game"> | number
    maxPoints?: IntFilter<"Game"> | number
    image?: XOR<FileRelationFilter, FileWhereInput>
    checkpoints?: CheckpointListRelationFilter
    contract?: ContractListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    tags?: GameTagListRelationFilter
    purchases?: PurchasedGamesListRelationFilter
  }, "id" | "title" | "slug" | "imageId">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    place?: SortOrder
    difficultness?: SortOrder
    startingCheckpointId?: SortOrder
    endingCheckpointId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    authorId?: SortOrder
    isActive?: SortOrder
    price?: SortOrder
    maxPoints?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    title?: StringWithAggregatesFilter<"Game"> | string
    slug?: StringWithAggregatesFilter<"Game"> | string
    description?: StringWithAggregatesFilter<"Game"> | string
    place?: StringWithAggregatesFilter<"Game"> | string
    difficultness?: EnumGameDifficultyWithAggregatesFilter<"Game"> | $Enums.GameDifficulty
    startingCheckpointId?: IntWithAggregatesFilter<"Game"> | number
    endingCheckpointId?: IntWithAggregatesFilter<"Game"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    imageId?: IntWithAggregatesFilter<"Game"> | number
    authorId?: IntWithAggregatesFilter<"Game"> | number
    isActive?: BoolWithAggregatesFilter<"Game"> | boolean
    price?: IntWithAggregatesFilter<"Game"> | number
    maxPoints?: IntWithAggregatesFilter<"Game"> | number
  }

  export type GameTagWhereInput = {
    AND?: GameTagWhereInput | GameTagWhereInput[]
    OR?: GameTagWhereInput[]
    NOT?: GameTagWhereInput | GameTagWhereInput[]
    id?: IntFilter<"GameTag"> | number
    label?: StringFilter<"GameTag"> | string
    games?: GameListRelationFilter
  }

  export type GameTagOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    games?: GameOrderByRelationAggregateInput
    _relevance?: GameTagOrderByRelevanceInput
  }

  export type GameTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameTagWhereInput | GameTagWhereInput[]
    OR?: GameTagWhereInput[]
    NOT?: GameTagWhereInput | GameTagWhereInput[]
    label?: StringFilter<"GameTag"> | string
    games?: GameListRelationFilter
  }, "id">

  export type GameTagOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: GameTagCountOrderByAggregateInput
    _avg?: GameTagAvgOrderByAggregateInput
    _max?: GameTagMaxOrderByAggregateInput
    _min?: GameTagMinOrderByAggregateInput
    _sum?: GameTagSumOrderByAggregateInput
  }

  export type GameTagScalarWhereWithAggregatesInput = {
    AND?: GameTagScalarWhereWithAggregatesInput | GameTagScalarWhereWithAggregatesInput[]
    OR?: GameTagScalarWhereWithAggregatesInput[]
    NOT?: GameTagScalarWhereWithAggregatesInput | GameTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameTag"> | number
    label?: StringWithAggregatesFilter<"GameTag"> | string
  }

  export type CheckpointWhereInput = {
    AND?: CheckpointWhereInput | CheckpointWhereInput[]
    OR?: CheckpointWhereInput[]
    NOT?: CheckpointWhereInput | CheckpointWhereInput[]
    id?: IntFilter<"Checkpoint"> | number
    gameId?: IntFilter<"Checkpoint"> | number
    title?: StringFilter<"Checkpoint"> | string
    description?: StringFilter<"Checkpoint"> | string
    imageId?: IntFilter<"Checkpoint"> | number
    mapId?: IntFilter<"Checkpoint"> | number
    riddle?: StringFilter<"Checkpoint"> | string
    answer?: JsonFilter<"Checkpoint">
    gpsCoordinates?: StringFilter<"Checkpoint"> | string
    reachDescription?: StringFilter<"Checkpoint"> | string
    maxPoints?: IntFilter<"Checkpoint"> | number
    pointsPenalty?: IntFilter<"Checkpoint"> | number
    ordering?: IntFilter<"Checkpoint"> | number
    image?: XOR<FileRelationFilter, FileWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
    gameSessions?: GameSessionListRelationFilter
    hints?: HintListRelationFilter
  }

  export type CheckpointOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    mapId?: SortOrder
    riddle?: SortOrder
    answer?: SortOrder
    gpsCoordinates?: SortOrder
    reachDescription?: SortOrder
    maxPoints?: SortOrder
    pointsPenalty?: SortOrder
    ordering?: SortOrder
    image?: FileOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
    hints?: HintOrderByRelationAggregateInput
    _relevance?: CheckpointOrderByRelevanceInput
  }

  export type CheckpointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    imageId?: number
    mapId?: number
    AND?: CheckpointWhereInput | CheckpointWhereInput[]
    OR?: CheckpointWhereInput[]
    NOT?: CheckpointWhereInput | CheckpointWhereInput[]
    gameId?: IntFilter<"Checkpoint"> | number
    title?: StringFilter<"Checkpoint"> | string
    description?: StringFilter<"Checkpoint"> | string
    riddle?: StringFilter<"Checkpoint"> | string
    answer?: JsonFilter<"Checkpoint">
    gpsCoordinates?: StringFilter<"Checkpoint"> | string
    reachDescription?: StringFilter<"Checkpoint"> | string
    maxPoints?: IntFilter<"Checkpoint"> | number
    pointsPenalty?: IntFilter<"Checkpoint"> | number
    ordering?: IntFilter<"Checkpoint"> | number
    image?: XOR<FileRelationFilter, FileWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
    gameSessions?: GameSessionListRelationFilter
    hints?: HintListRelationFilter
  }, "id" | "imageId" | "mapId">

  export type CheckpointOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    mapId?: SortOrder
    riddle?: SortOrder
    answer?: SortOrder
    gpsCoordinates?: SortOrder
    reachDescription?: SortOrder
    maxPoints?: SortOrder
    pointsPenalty?: SortOrder
    ordering?: SortOrder
    _count?: CheckpointCountOrderByAggregateInput
    _avg?: CheckpointAvgOrderByAggregateInput
    _max?: CheckpointMaxOrderByAggregateInput
    _min?: CheckpointMinOrderByAggregateInput
    _sum?: CheckpointSumOrderByAggregateInput
  }

  export type CheckpointScalarWhereWithAggregatesInput = {
    AND?: CheckpointScalarWhereWithAggregatesInput | CheckpointScalarWhereWithAggregatesInput[]
    OR?: CheckpointScalarWhereWithAggregatesInput[]
    NOT?: CheckpointScalarWhereWithAggregatesInput | CheckpointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Checkpoint"> | number
    gameId?: IntWithAggregatesFilter<"Checkpoint"> | number
    title?: StringWithAggregatesFilter<"Checkpoint"> | string
    description?: StringWithAggregatesFilter<"Checkpoint"> | string
    imageId?: IntWithAggregatesFilter<"Checkpoint"> | number
    mapId?: IntWithAggregatesFilter<"Checkpoint"> | number
    riddle?: StringWithAggregatesFilter<"Checkpoint"> | string
    answer?: JsonWithAggregatesFilter<"Checkpoint">
    gpsCoordinates?: StringWithAggregatesFilter<"Checkpoint"> | string
    reachDescription?: StringWithAggregatesFilter<"Checkpoint"> | string
    maxPoints?: IntWithAggregatesFilter<"Checkpoint"> | number
    pointsPenalty?: IntWithAggregatesFilter<"Checkpoint"> | number
    ordering?: IntWithAggregatesFilter<"Checkpoint"> | number
  }

  export type HintWhereInput = {
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    id?: IntFilter<"Hint"> | number
    checkpointId?: IntFilter<"Hint"> | number
    label?: StringFilter<"Hint"> | string
    ordering?: IntFilter<"Hint"> | number
    checkpoint?: XOR<CheckpointRelationFilter, CheckpointWhereInput>
  }

  export type HintOrderByWithRelationInput = {
    id?: SortOrder
    checkpointId?: SortOrder
    label?: SortOrder
    ordering?: SortOrder
    checkpoint?: CheckpointOrderByWithRelationInput
    _relevance?: HintOrderByRelevanceInput
  }

  export type HintWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    checkpointId?: IntFilter<"Hint"> | number
    label?: StringFilter<"Hint"> | string
    ordering?: IntFilter<"Hint"> | number
    checkpoint?: XOR<CheckpointRelationFilter, CheckpointWhereInput>
  }, "id">

  export type HintOrderByWithAggregationInput = {
    id?: SortOrder
    checkpointId?: SortOrder
    label?: SortOrder
    ordering?: SortOrder
    _count?: HintCountOrderByAggregateInput
    _avg?: HintAvgOrderByAggregateInput
    _max?: HintMaxOrderByAggregateInput
    _min?: HintMinOrderByAggregateInput
    _sum?: HintSumOrderByAggregateInput
  }

  export type HintScalarWhereWithAggregatesInput = {
    AND?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    OR?: HintScalarWhereWithAggregatesInput[]
    NOT?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hint"> | number
    checkpointId?: IntWithAggregatesFilter<"Hint"> | number
    label?: StringWithAggregatesFilter<"Hint"> | string
    ordering?: IntWithAggregatesFilter<"Hint"> | number
  }

  export type GameSessionWhereInput = {
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    id?: IntFilter<"GameSession"> | number
    inviteCode?: StringFilter<"GameSession"> | string
    gameId?: IntFilter<"GameSession"> | number
    state?: EnumGameStateFilter<"GameSession"> | $Enums.GameState
    team?: StringFilter<"GameSession"> | string
    start?: DateTimeFilter<"GameSession"> | Date | string
    finish?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    earnedPoints?: IntFilter<"GameSession"> | number
    duration?: IntFilter<"GameSession"> | number
    checkpointId?: IntNullableFilter<"GameSession"> | number | null
    hints?: JsonNullableFilter<"GameSession">
    answers?: JsonNullableFilter<"GameSession">
    game?: XOR<GameRelationFilter, GameWhereInput>
    checkpoint?: XOR<CheckpointNullableRelationFilter, CheckpointWhereInput> | null
    participants?: UserListRelationFilter
  }

  export type GameSessionOrderByWithRelationInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    gameId?: SortOrder
    state?: SortOrder
    team?: SortOrder
    start?: SortOrder
    finish?: SortOrderInput | SortOrder
    earnedPoints?: SortOrder
    duration?: SortOrder
    checkpointId?: SortOrderInput | SortOrder
    hints?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    game?: GameOrderByWithRelationInput
    checkpoint?: CheckpointOrderByWithRelationInput
    participants?: UserOrderByRelationAggregateInput
    _relevance?: GameSessionOrderByRelevanceInput
  }

  export type GameSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    inviteCode?: StringFilter<"GameSession"> | string
    gameId?: IntFilter<"GameSession"> | number
    state?: EnumGameStateFilter<"GameSession"> | $Enums.GameState
    team?: StringFilter<"GameSession"> | string
    start?: DateTimeFilter<"GameSession"> | Date | string
    finish?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    earnedPoints?: IntFilter<"GameSession"> | number
    duration?: IntFilter<"GameSession"> | number
    checkpointId?: IntNullableFilter<"GameSession"> | number | null
    hints?: JsonNullableFilter<"GameSession">
    answers?: JsonNullableFilter<"GameSession">
    game?: XOR<GameRelationFilter, GameWhereInput>
    checkpoint?: XOR<CheckpointNullableRelationFilter, CheckpointWhereInput> | null
    participants?: UserListRelationFilter
  }, "id">

  export type GameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    gameId?: SortOrder
    state?: SortOrder
    team?: SortOrder
    start?: SortOrder
    finish?: SortOrderInput | SortOrder
    earnedPoints?: SortOrder
    duration?: SortOrder
    checkpointId?: SortOrderInput | SortOrder
    hints?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    _count?: GameSessionCountOrderByAggregateInput
    _avg?: GameSessionAvgOrderByAggregateInput
    _max?: GameSessionMaxOrderByAggregateInput
    _min?: GameSessionMinOrderByAggregateInput
    _sum?: GameSessionSumOrderByAggregateInput
  }

  export type GameSessionScalarWhereWithAggregatesInput = {
    AND?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    OR?: GameSessionScalarWhereWithAggregatesInput[]
    NOT?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameSession"> | number
    inviteCode?: StringWithAggregatesFilter<"GameSession"> | string
    gameId?: IntWithAggregatesFilter<"GameSession"> | number
    state?: EnumGameStateWithAggregatesFilter<"GameSession"> | $Enums.GameState
    team?: StringWithAggregatesFilter<"GameSession"> | string
    start?: DateTimeWithAggregatesFilter<"GameSession"> | Date | string
    finish?: DateTimeNullableWithAggregatesFilter<"GameSession"> | Date | string | null
    earnedPoints?: IntWithAggregatesFilter<"GameSession"> | number
    duration?: IntWithAggregatesFilter<"GameSession"> | number
    checkpointId?: IntNullableWithAggregatesFilter<"GameSession"> | number | null
    hints?: JsonNullableWithAggregatesFilter<"GameSession">
    answers?: JsonNullableWithAggregatesFilter<"GameSession">
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    generatedName?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    game?: XOR<GameNullableRelationFilter, GameWhereInput> | null
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
    checkpoint?: XOR<CheckpointNullableRelationFilter, CheckpointWhereInput> | null
    badge?: XOR<BadgeNullableRelationFilter, BadgeWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    generatedName?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
    contract?: ContractOrderByWithRelationInput
    checkpoint?: CheckpointOrderByWithRelationInput
    badge?: BadgeOrderByWithRelationInput
    _relevance?: FileOrderByRelevanceInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    generatedName?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    game?: XOR<GameNullableRelationFilter, GameWhereInput> | null
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
    checkpoint?: XOR<CheckpointNullableRelationFilter, CheckpointWhereInput> | null
    badge?: XOR<BadgeNullableRelationFilter, BadgeWhereInput> | null
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    generatedName?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    generatedName?: StringWithAggregatesFilter<"File"> | string
    originalName?: StringWithAggregatesFilter<"File"> | string
    path?: StringWithAggregatesFilter<"File"> | string
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    gameId?: IntFilter<"Contract"> | number
    userId?: IntFilter<"Contract"> | number
    fileId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
    file?: XOR<FileRelationFilter, FileWhereInput>
  }

  export type ContractOrderByWithRelationInput = {
    gameId?: SortOrder
    userId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
    file?: FileOrderByWithRelationInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    fileId?: number
    gameId_userId_fileId?: ContractGameIdUserIdFileIdCompoundUniqueInput
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    gameId?: IntFilter<"Contract"> | number
    userId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
    file?: XOR<FileRelationFilter, FileWhereInput>
  }, "gameId_userId_fileId" | "fileId">

  export type ContractOrderByWithAggregationInput = {
    gameId?: SortOrder
    userId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    gameId?: IntWithAggregatesFilter<"Contract"> | number
    userId?: IntWithAggregatesFilter<"Contract"> | number
    fileId?: IntWithAggregatesFilter<"Contract"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    orderUuid?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    invoiceId?: IntNullableFilter<"Order"> | number | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    gopayId?: IntNullableFilter<"Order"> | number | null
    gatewayUrl?: StringNullableFilter<"Order"> | string | null
    fakturoidInvoiceId?: IntFilter<"Order"> | number
    hasInvoice?: BoolFilter<"Order"> | boolean
    emailsSent?: BoolFilter<"Order"> | boolean
    total?: IntFilter<"Order"> | number
    emails?: JsonFilter<"Order">
    products?: JsonFilter<"Order">
    deliveryInfo?: JsonFilter<"Order">
    accessCode?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderUuid?: SortOrder
    userId?: SortOrder
    invoiceId?: SortOrderInput | SortOrder
    status?: SortOrder
    gopayId?: SortOrderInput | SortOrder
    gatewayUrl?: SortOrderInput | SortOrder
    fakturoidInvoiceId?: SortOrder
    hasInvoice?: SortOrder
    emailsSent?: SortOrder
    total?: SortOrder
    emails?: SortOrder
    products?: SortOrder
    deliveryInfo?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoiceId?: number
    accessCode?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderUuid?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    gopayId?: IntNullableFilter<"Order"> | number | null
    gatewayUrl?: StringNullableFilter<"Order"> | string | null
    fakturoidInvoiceId?: IntFilter<"Order"> | number
    hasInvoice?: BoolFilter<"Order"> | boolean
    emailsSent?: BoolFilter<"Order"> | boolean
    total?: IntFilter<"Order"> | number
    emails?: JsonFilter<"Order">
    products?: JsonFilter<"Order">
    deliveryInfo?: JsonFilter<"Order">
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "invoiceId" | "accessCode">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderUuid?: SortOrder
    userId?: SortOrder
    invoiceId?: SortOrderInput | SortOrder
    status?: SortOrder
    gopayId?: SortOrderInput | SortOrder
    gatewayUrl?: SortOrderInput | SortOrder
    fakturoidInvoiceId?: SortOrder
    hasInvoice?: SortOrder
    emailsSent?: SortOrder
    total?: SortOrder
    emails?: SortOrder
    products?: SortOrder
    deliveryInfo?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    orderUuid?: StringWithAggregatesFilter<"Order"> | string
    userId?: IntWithAggregatesFilter<"Order"> | number
    invoiceId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    gopayId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    gatewayUrl?: StringNullableWithAggregatesFilter<"Order"> | string | null
    fakturoidInvoiceId?: IntWithAggregatesFilter<"Order"> | number
    hasInvoice?: BoolWithAggregatesFilter<"Order"> | boolean
    emailsSent?: BoolWithAggregatesFilter<"Order"> | boolean
    total?: IntWithAggregatesFilter<"Order"> | number
    emails?: JsonWithAggregatesFilter<"Order">
    products?: JsonWithAggregatesFilter<"Order">
    deliveryInfo?: JsonWithAggregatesFilter<"Order">
    accessCode?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type BadgeCreateInput = {
    title: string
    minExperience: number
    image: FileCreateNestedOneWithoutBadgeInput
    users?: UserCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: number
    title: string
    minExperience: number
    imageId: number
    users?: UserUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutBadgeNestedInput
    users?: UserUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: number
    title: string
    minExperience: number
    imageId: number
  }

  export type BadgeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge: BadgeCreateNestedOneWithoutUsersInput
    photo?: FileCreateNestedOneWithoutUserInput
    contract?: ContractCreateNestedManyWithoutUserInput
    participations?: GameSessionCreateNestedManyWithoutParticipantsInput
    orders?: OrderCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
    participations?: GameSessionUncheckedCreateNestedManyWithoutParticipantsInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
    photo?: FileUpdateOneWithoutUserNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
    participations?: GameSessionUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
    participations?: GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PurchasedGamesCreateInput = {
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasedGamesInput
    game: GameCreateNestedOneWithoutPurchasesInput
  }

  export type PurchasedGamesUncheckedCreateInput = {
    userId: number
    gameId: number
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasedGamesUpdateInput = {
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasedGamesNestedInput
    game?: GameUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchasedGamesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedGamesCreateManyInput = {
    userId: number
    gameId: number
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasedGamesUpdateManyMutationInput = {
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedGamesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    image: FileCreateNestedOneWithoutGameInput
    checkpoints?: CheckpointCreateNestedManyWithoutGameInput
    contract?: ContractCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imageId: number
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    checkpoints?: CheckpointUncheckedCreateNestedManyWithoutGameInput
    contract?: ContractUncheckedCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutGameNestedInput
    checkpoints?: CheckpointUpdateManyWithoutGameNestedInput
    contract?: ContractUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    checkpoints?: CheckpointUncheckedUpdateManyWithoutGameNestedInput
    contract?: ContractUncheckedUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imageId: number
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
  }

  export type GameUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
  }

  export type GameTagCreateInput = {
    label: string
    games?: GameCreateNestedManyWithoutTagsInput
  }

  export type GameTagUncheckedCreateInput = {
    id?: number
    label: string
    games?: GameUncheckedCreateNestedManyWithoutTagsInput
  }

  export type GameTagUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    games?: GameUpdateManyWithoutTagsNestedInput
  }

  export type GameTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    games?: GameUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type GameTagCreateManyInput = {
    id?: number
    label: string
  }

  export type GameTagUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type GameTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CheckpointCreateInput = {
    title: string
    description: string
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    image: FileCreateNestedOneWithoutCheckpointInput
    game: GameCreateNestedOneWithoutCheckpointsInput
    gameSessions?: GameSessionCreateNestedManyWithoutCheckpointInput
    hints?: HintCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointUncheckedCreateInput = {
    id?: number
    gameId: number
    title: string
    description: string
    imageId: number
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutCheckpointInput
    hints?: HintUncheckedCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutCheckpointNestedInput
    game?: GameUpdateOneRequiredWithoutCheckpointsNestedInput
    gameSessions?: GameSessionUpdateManyWithoutCheckpointNestedInput
    hints?: HintUpdateManyWithoutCheckpointNestedInput
  }

  export type CheckpointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    gameSessions?: GameSessionUncheckedUpdateManyWithoutCheckpointNestedInput
    hints?: HintUncheckedUpdateManyWithoutCheckpointNestedInput
  }

  export type CheckpointCreateManyInput = {
    id?: number
    gameId: number
    title: string
    description: string
    imageId: number
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
  }

  export type CheckpointUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type CheckpointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type HintCreateInput = {
    label: string
    ordering: number
    checkpoint: CheckpointCreateNestedOneWithoutHintsInput
  }

  export type HintUncheckedCreateInput = {
    id?: number
    checkpointId: number
    label: string
    ordering: number
  }

  export type HintUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    ordering?: IntFieldUpdateOperationsInput | number
    checkpoint?: CheckpointUpdateOneRequiredWithoutHintsNestedInput
  }

  export type HintUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpointId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type HintCreateManyInput = {
    id?: number
    checkpointId: number
    label: string
    ordering: number
  }

  export type HintUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type HintUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpointId?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type GameSessionCreateInput = {
    inviteCode: string
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    game: GameCreateNestedOneWithoutGameSessionsInput
    checkpoint?: CheckpointCreateNestedOneWithoutGameSessionsInput
    participants?: UserCreateNestedManyWithoutParticipationsInput
  }

  export type GameSessionUncheckedCreateInput = {
    id?: number
    inviteCode: string
    gameId: number
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    checkpointId?: number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    participants?: UserUncheckedCreateNestedManyWithoutParticipationsInput
  }

  export type GameSessionUpdateInput = {
    inviteCode?: StringFieldUpdateOperationsInput | string
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    game?: GameUpdateOneRequiredWithoutGameSessionsNestedInput
    checkpoint?: CheckpointUpdateOneWithoutGameSessionsNestedInput
    participants?: UserUpdateManyWithoutParticipationsNestedInput
  }

  export type GameSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    checkpointId?: NullableIntFieldUpdateOperationsInput | number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    participants?: UserUncheckedUpdateManyWithoutParticipationsNestedInput
  }

  export type GameSessionCreateManyInput = {
    id?: number
    inviteCode: string
    gameId: number
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    checkpointId?: number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameSessionUpdateManyMutationInput = {
    inviteCode?: StringFieldUpdateOperationsInput | string
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    checkpointId?: NullableIntFieldUpdateOperationsInput | number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FileCreateInput = {
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPhotoInput
    game?: GameCreateNestedOneWithoutImageInput
    contract?: ContractCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointCreateNestedOneWithoutImageInput
    badge?: BadgeCreateNestedOneWithoutImageInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPhotoInput
    game?: GameUncheckedCreateNestedOneWithoutImageInput
    contract?: ContractUncheckedCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointUncheckedCreateNestedOneWithoutImageInput
    badge?: BadgeUncheckedCreateNestedOneWithoutImageInput
  }

  export type FileUpdateInput = {
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPhotoNestedInput
    game?: GameUpdateOneWithoutImageNestedInput
    contract?: ContractUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUpdateOneWithoutImageNestedInput
    badge?: BadgeUpdateOneWithoutImageNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPhotoNestedInput
    game?: GameUncheckedUpdateOneWithoutImageNestedInput
    contract?: ContractUncheckedUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUncheckedUpdateOneWithoutImageNestedInput
    badge?: BadgeUncheckedUpdateOneWithoutImageNestedInput
  }

  export type FileCreateManyInput = {
    id?: number
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractInput
    game: GameCreateNestedOneWithoutContractInput
    file: FileCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    gameId: number
    userId: number
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    game?: GameUpdateOneRequiredWithoutContractNestedInput
    file?: FileUpdateOneRequiredWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyInput = {
    gameId: number
    userId: number
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    orderUuid?: string
    invoiceId?: number | null
    status?: $Enums.OrderStatus
    gopayId?: number | null
    gatewayUrl?: string | null
    fakturoidInvoiceId: number
    hasInvoice?: boolean
    emailsSent?: boolean
    total: number
    emails: JsonNullValueInput | InputJsonValue
    products: JsonNullValueInput | InputJsonValue
    deliveryInfo: JsonNullValueInput | InputJsonValue
    accessCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    orderUuid?: string
    userId: number
    invoiceId?: number | null
    status?: $Enums.OrderStatus
    gopayId?: number | null
    gatewayUrl?: string | null
    fakturoidInvoiceId: number
    hasInvoice?: boolean
    emailsSent?: boolean
    total: number
    emails: JsonNullValueInput | InputJsonValue
    products: JsonNullValueInput | InputJsonValue
    deliveryInfo: JsonNullValueInput | InputJsonValue
    accessCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    orderUuid?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    gopayId?: NullableIntFieldUpdateOperationsInput | number | null
    gatewayUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fakturoidInvoiceId?: IntFieldUpdateOperationsInput | number
    hasInvoice?: BoolFieldUpdateOperationsInput | boolean
    emailsSent?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    emails?: JsonNullValueInput | InputJsonValue
    products?: JsonNullValueInput | InputJsonValue
    deliveryInfo?: JsonNullValueInput | InputJsonValue
    accessCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderUuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    gopayId?: NullableIntFieldUpdateOperationsInput | number | null
    gatewayUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fakturoidInvoiceId?: IntFieldUpdateOperationsInput | number
    hasInvoice?: BoolFieldUpdateOperationsInput | boolean
    emailsSent?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    emails?: JsonNullValueInput | InputJsonValue
    products?: JsonNullValueInput | InputJsonValue
    deliveryInfo?: JsonNullValueInput | InputJsonValue
    accessCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    orderUuid?: string
    userId: number
    invoiceId?: number | null
    status?: $Enums.OrderStatus
    gopayId?: number | null
    gatewayUrl?: string | null
    fakturoidInvoiceId: number
    hasInvoice?: boolean
    emailsSent?: boolean
    total: number
    emails: JsonNullValueInput | InputJsonValue
    products: JsonNullValueInput | InputJsonValue
    deliveryInfo: JsonNullValueInput | InputJsonValue
    accessCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    orderUuid?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    gopayId?: NullableIntFieldUpdateOperationsInput | number | null
    gatewayUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fakturoidInvoiceId?: IntFieldUpdateOperationsInput | number
    hasInvoice?: BoolFieldUpdateOperationsInput | boolean
    emailsSent?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    emails?: JsonNullValueInput | InputJsonValue
    products?: JsonNullValueInput | InputJsonValue
    deliveryInfo?: JsonNullValueInput | InputJsonValue
    accessCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderUuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    gopayId?: NullableIntFieldUpdateOperationsInput | number | null
    gatewayUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fakturoidInvoiceId?: IntFieldUpdateOperationsInput | number
    hasInvoice?: BoolFieldUpdateOperationsInput | boolean
    emailsSent?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    emails?: JsonNullValueInput | InputJsonValue
    products?: JsonNullValueInput | InputJsonValue
    deliveryInfo?: JsonNullValueInput | InputJsonValue
    accessCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    token: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    token: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FileRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BadgeOrderByRelevanceInput = {
    fields: BadgeOrderByRelevanceFieldEnum | BadgeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    minExperience?: SortOrder
    imageId?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    id?: SortOrder
    minExperience?: SortOrder
    imageId?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    minExperience?: SortOrder
    imageId?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    minExperience?: SortOrder
    imageId?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    id?: SortOrder
    minExperience?: SortOrder
    imageId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BadgeRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type FileNullableRelationFilter = {
    is?: FileWhereInput | null
    isNot?: FileWhereInput | null
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type GameSessionListRelationFilter = {
    every?: GameSessionWhereInput
    some?: GameSessionWhereInput
    none?: GameSessionWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PurchasedGamesListRelationFilter = {
    every?: PurchasedGamesWhereInput
    some?: PurchasedGamesWhereInput
    none?: PurchasedGamesWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasedGamesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAlive?: SortOrder
    photoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    badgeId?: SortOrder
    deliveryInfo?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    badgeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAlive?: SortOrder
    photoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    badgeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAlive?: SortOrder
    photoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    badgeId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
    experience?: SortOrder
    coins?: SortOrder
    badgeId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type PurchasedGamesUserIdGameIdCompoundUniqueInput = {
    userId: number
    gameId: number
  }

  export type PurchasedGamesCountOrderByAggregateInput = {
    userId?: SortOrder
    gameId?: SortOrder
    played?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchasedGamesAvgOrderByAggregateInput = {
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type PurchasedGamesMaxOrderByAggregateInput = {
    userId?: SortOrder
    gameId?: SortOrder
    played?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchasedGamesMinOrderByAggregateInput = {
    userId?: SortOrder
    gameId?: SortOrder
    played?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchasedGamesSumOrderByAggregateInput = {
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type EnumGameDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.GameDifficulty | EnumGameDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.GameDifficulty[]
    notIn?: $Enums.GameDifficulty[]
    not?: NestedEnumGameDifficultyFilter<$PrismaModel> | $Enums.GameDifficulty
  }

  export type CheckpointListRelationFilter = {
    every?: CheckpointWhereInput
    some?: CheckpointWhereInput
    none?: CheckpointWhereInput
  }

  export type GameTagListRelationFilter = {
    every?: GameTagWhereInput
    some?: GameTagWhereInput
    none?: GameTagWhereInput
  }

  export type CheckpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameOrderByRelevanceInput = {
    fields: GameOrderByRelevanceFieldEnum | GameOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    place?: SortOrder
    difficultness?: SortOrder
    startingCheckpointId?: SortOrder
    endingCheckpointId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    authorId?: SortOrder
    isActive?: SortOrder
    price?: SortOrder
    maxPoints?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    startingCheckpointId?: SortOrder
    endingCheckpointId?: SortOrder
    imageId?: SortOrder
    authorId?: SortOrder
    price?: SortOrder
    maxPoints?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    place?: SortOrder
    difficultness?: SortOrder
    startingCheckpointId?: SortOrder
    endingCheckpointId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    authorId?: SortOrder
    isActive?: SortOrder
    price?: SortOrder
    maxPoints?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    place?: SortOrder
    difficultness?: SortOrder
    startingCheckpointId?: SortOrder
    endingCheckpointId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    authorId?: SortOrder
    isActive?: SortOrder
    price?: SortOrder
    maxPoints?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    startingCheckpointId?: SortOrder
    endingCheckpointId?: SortOrder
    imageId?: SortOrder
    authorId?: SortOrder
    price?: SortOrder
    maxPoints?: SortOrder
  }

  export type EnumGameDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameDifficulty | EnumGameDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.GameDifficulty[]
    notIn?: $Enums.GameDifficulty[]
    not?: NestedEnumGameDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.GameDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameDifficultyFilter<$PrismaModel>
    _max?: NestedEnumGameDifficultyFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameTagOrderByRelevanceInput = {
    fields: GameTagOrderByRelevanceFieldEnum | GameTagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GameTagCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type GameTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameTagMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type GameTagMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type GameTagSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type HintListRelationFilter = {
    every?: HintWhereInput
    some?: HintWhereInput
    none?: HintWhereInput
  }

  export type HintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckpointOrderByRelevanceInput = {
    fields: CheckpointOrderByRelevanceFieldEnum | CheckpointOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CheckpointCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    mapId?: SortOrder
    riddle?: SortOrder
    answer?: SortOrder
    gpsCoordinates?: SortOrder
    reachDescription?: SortOrder
    maxPoints?: SortOrder
    pointsPenalty?: SortOrder
    ordering?: SortOrder
  }

  export type CheckpointAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    imageId?: SortOrder
    mapId?: SortOrder
    maxPoints?: SortOrder
    pointsPenalty?: SortOrder
    ordering?: SortOrder
  }

  export type CheckpointMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    mapId?: SortOrder
    riddle?: SortOrder
    gpsCoordinates?: SortOrder
    reachDescription?: SortOrder
    maxPoints?: SortOrder
    pointsPenalty?: SortOrder
    ordering?: SortOrder
  }

  export type CheckpointMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageId?: SortOrder
    mapId?: SortOrder
    riddle?: SortOrder
    gpsCoordinates?: SortOrder
    reachDescription?: SortOrder
    maxPoints?: SortOrder
    pointsPenalty?: SortOrder
    ordering?: SortOrder
  }

  export type CheckpointSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    imageId?: SortOrder
    mapId?: SortOrder
    maxPoints?: SortOrder
    pointsPenalty?: SortOrder
    ordering?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CheckpointRelationFilter = {
    is?: CheckpointWhereInput
    isNot?: CheckpointWhereInput
  }

  export type HintOrderByRelevanceInput = {
    fields: HintOrderByRelevanceFieldEnum | HintOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HintCountOrderByAggregateInput = {
    id?: SortOrder
    checkpointId?: SortOrder
    label?: SortOrder
    ordering?: SortOrder
  }

  export type HintAvgOrderByAggregateInput = {
    id?: SortOrder
    checkpointId?: SortOrder
    ordering?: SortOrder
  }

  export type HintMaxOrderByAggregateInput = {
    id?: SortOrder
    checkpointId?: SortOrder
    label?: SortOrder
    ordering?: SortOrder
  }

  export type HintMinOrderByAggregateInput = {
    id?: SortOrder
    checkpointId?: SortOrder
    label?: SortOrder
    ordering?: SortOrder
  }

  export type HintSumOrderByAggregateInput = {
    id?: SortOrder
    checkpointId?: SortOrder
    ordering?: SortOrder
  }

  export type EnumGameStateFilter<$PrismaModel = never> = {
    equals?: $Enums.GameState | EnumGameStateFieldRefInput<$PrismaModel>
    in?: $Enums.GameState[]
    notIn?: $Enums.GameState[]
    not?: NestedEnumGameStateFilter<$PrismaModel> | $Enums.GameState
  }

  export type CheckpointNullableRelationFilter = {
    is?: CheckpointWhereInput | null
    isNot?: CheckpointWhereInput | null
  }

  export type GameSessionOrderByRelevanceInput = {
    fields: GameSessionOrderByRelevanceFieldEnum | GameSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    gameId?: SortOrder
    state?: SortOrder
    team?: SortOrder
    start?: SortOrder
    finish?: SortOrder
    earnedPoints?: SortOrder
    duration?: SortOrder
    checkpointId?: SortOrder
    hints?: SortOrder
    answers?: SortOrder
  }

  export type GameSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    earnedPoints?: SortOrder
    duration?: SortOrder
    checkpointId?: SortOrder
  }

  export type GameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    gameId?: SortOrder
    state?: SortOrder
    team?: SortOrder
    start?: SortOrder
    finish?: SortOrder
    earnedPoints?: SortOrder
    duration?: SortOrder
    checkpointId?: SortOrder
  }

  export type GameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    gameId?: SortOrder
    state?: SortOrder
    team?: SortOrder
    start?: SortOrder
    finish?: SortOrder
    earnedPoints?: SortOrder
    duration?: SortOrder
    checkpointId?: SortOrder
  }

  export type GameSessionSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    earnedPoints?: SortOrder
    duration?: SortOrder
    checkpointId?: SortOrder
  }

  export type EnumGameStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameState | EnumGameStateFieldRefInput<$PrismaModel>
    in?: $Enums.GameState[]
    notIn?: $Enums.GameState[]
    not?: NestedEnumGameStateWithAggregatesFilter<$PrismaModel> | $Enums.GameState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStateFilter<$PrismaModel>
    _max?: NestedEnumGameStateFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GameNullableRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type ContractNullableRelationFilter = {
    is?: ContractWhereInput | null
    isNot?: ContractWhereInput | null
  }

  export type BadgeNullableRelationFilter = {
    is?: BadgeWhereInput | null
    isNot?: BadgeWhereInput | null
  }

  export type FileOrderByRelevanceInput = {
    fields: FileOrderByRelevanceFieldEnum | FileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    generatedName?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    generatedName?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    generatedName?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContractGameIdUserIdFileIdCompoundUniqueInput = {
    gameId: number
    userId: number
    fileId: number
  }

  export type ContractCountOrderByAggregateInput = {
    gameId?: SortOrder
    userId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    gameId?: SortOrder
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    gameId?: SortOrder
    userId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    gameId?: SortOrder
    userId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    gameId?: SortOrder
    userId?: SortOrder
    fileId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderUuid?: SortOrder
    userId?: SortOrder
    invoiceId?: SortOrder
    status?: SortOrder
    gopayId?: SortOrder
    gatewayUrl?: SortOrder
    fakturoidInvoiceId?: SortOrder
    hasInvoice?: SortOrder
    emailsSent?: SortOrder
    total?: SortOrder
    emails?: SortOrder
    products?: SortOrder
    deliveryInfo?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceId?: SortOrder
    gopayId?: SortOrder
    fakturoidInvoiceId?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderUuid?: SortOrder
    userId?: SortOrder
    invoiceId?: SortOrder
    status?: SortOrder
    gopayId?: SortOrder
    gatewayUrl?: SortOrder
    fakturoidInvoiceId?: SortOrder
    hasInvoice?: SortOrder
    emailsSent?: SortOrder
    total?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderUuid?: SortOrder
    userId?: SortOrder
    invoiceId?: SortOrder
    status?: SortOrder
    gopayId?: SortOrder
    gatewayUrl?: SortOrder
    fakturoidInvoiceId?: SortOrder
    hasInvoice?: SortOrder
    emailsSent?: SortOrder
    total?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceId?: SortOrder
    gopayId?: SortOrder
    fakturoidInvoiceId?: SortOrder
    total?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FileCreateNestedOneWithoutBadgeInput = {
    create?: XOR<FileCreateWithoutBadgeInput, FileUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: FileCreateOrConnectWithoutBadgeInput
    connect?: FileWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
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

  export type FileUpdateOneRequiredWithoutBadgeNestedInput = {
    create?: XOR<FileCreateWithoutBadgeInput, FileUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: FileCreateOrConnectWithoutBadgeInput
    upsert?: FileUpsertWithoutBadgeInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutBadgeInput, FileUpdateWithoutBadgeInput>, FileUncheckedUpdateWithoutBadgeInput>
  }

  export type UserUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBadgeInput | UserUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBadgeInput | UserUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBadgeInput | UserUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBadgeInput | UserUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBadgeInput | UserUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBadgeInput | UserUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BadgeCreateNestedOneWithoutUsersInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    connect?: BadgeWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FileCreateOrConnectWithoutUserInput
    connect?: FileWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<GameSessionCreateWithoutParticipantsInput, GameSessionUncheckedCreateWithoutParticipantsInput> | GameSessionCreateWithoutParticipantsInput[] | GameSessionUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutParticipantsInput | GameSessionCreateOrConnectWithoutParticipantsInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PurchasedGamesCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchasedGamesCreateWithoutUserInput, PurchasedGamesUncheckedCreateWithoutUserInput> | PurchasedGamesCreateWithoutUserInput[] | PurchasedGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutUserInput | PurchasedGamesCreateOrConnectWithoutUserInput[]
    createMany?: PurchasedGamesCreateManyUserInputEnvelope
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<GameSessionCreateWithoutParticipantsInput, GameSessionUncheckedCreateWithoutParticipantsInput> | GameSessionCreateWithoutParticipantsInput[] | GameSessionUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutParticipantsInput | GameSessionCreateOrConnectWithoutParticipantsInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PurchasedGamesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchasedGamesCreateWithoutUserInput, PurchasedGamesUncheckedCreateWithoutUserInput> | PurchasedGamesCreateWithoutUserInput[] | PurchasedGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutUserInput | PurchasedGamesCreateOrConnectWithoutUserInput[]
    createMany?: PurchasedGamesCreateManyUserInputEnvelope
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BadgeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    upsert?: BadgeUpsertWithoutUsersInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUsersInput, BadgeUpdateWithoutUsersInput>, BadgeUncheckedUpdateWithoutUsersInput>
  }

  export type FileUpdateOneWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FileCreateOrConnectWithoutUserInput
    upsert?: FileUpsertWithoutUserInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutUserInput, FileUpdateWithoutUserInput>, FileUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<GameSessionCreateWithoutParticipantsInput, GameSessionUncheckedCreateWithoutParticipantsInput> | GameSessionCreateWithoutParticipantsInput[] | GameSessionUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutParticipantsInput | GameSessionCreateOrConnectWithoutParticipantsInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutParticipantsInput | GameSessionUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutParticipantsInput | GameSessionUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutParticipantsInput | GameSessionUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PurchasedGamesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchasedGamesCreateWithoutUserInput, PurchasedGamesUncheckedCreateWithoutUserInput> | PurchasedGamesCreateWithoutUserInput[] | PurchasedGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutUserInput | PurchasedGamesCreateOrConnectWithoutUserInput[]
    upsert?: PurchasedGamesUpsertWithWhereUniqueWithoutUserInput | PurchasedGamesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchasedGamesCreateManyUserInputEnvelope
    set?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    disconnect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    delete?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    update?: PurchasedGamesUpdateWithWhereUniqueWithoutUserInput | PurchasedGamesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchasedGamesUpdateManyWithWhereWithoutUserInput | PurchasedGamesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchasedGamesScalarWhereInput | PurchasedGamesScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContractUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<GameSessionCreateWithoutParticipantsInput, GameSessionUncheckedCreateWithoutParticipantsInput> | GameSessionCreateWithoutParticipantsInput[] | GameSessionUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutParticipantsInput | GameSessionCreateOrConnectWithoutParticipantsInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutParticipantsInput | GameSessionUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutParticipantsInput | GameSessionUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutParticipantsInput | GameSessionUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchasedGamesCreateWithoutUserInput, PurchasedGamesUncheckedCreateWithoutUserInput> | PurchasedGamesCreateWithoutUserInput[] | PurchasedGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutUserInput | PurchasedGamesCreateOrConnectWithoutUserInput[]
    upsert?: PurchasedGamesUpsertWithWhereUniqueWithoutUserInput | PurchasedGamesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchasedGamesCreateManyUserInputEnvelope
    set?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    disconnect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    delete?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    update?: PurchasedGamesUpdateWithWhereUniqueWithoutUserInput | PurchasedGamesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchasedGamesUpdateManyWithWhereWithoutUserInput | PurchasedGamesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchasedGamesScalarWhereInput | PurchasedGamesScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchasedGamesInput = {
    create?: XOR<UserCreateWithoutPurchasedGamesInput, UserUncheckedCreateWithoutPurchasedGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedGamesInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: GameCreateOrConnectWithoutPurchasesInput
    connect?: GameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPurchasedGamesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasedGamesInput, UserUncheckedCreateWithoutPurchasedGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedGamesInput
    upsert?: UserUpsertWithoutPurchasedGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasedGamesInput, UserUpdateWithoutPurchasedGamesInput>, UserUncheckedUpdateWithoutPurchasedGamesInput>
  }

  export type GameUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: GameCreateOrConnectWithoutPurchasesInput
    upsert?: GameUpsertWithoutPurchasesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPurchasesInput, GameUpdateWithoutPurchasesInput>, GameUncheckedUpdateWithoutPurchasesInput>
  }

  export type FileCreateNestedOneWithoutGameInput = {
    create?: XOR<FileCreateWithoutGameInput, FileUncheckedCreateWithoutGameInput>
    connectOrCreate?: FileCreateOrConnectWithoutGameInput
    connect?: FileWhereUniqueInput
  }

  export type CheckpointCreateNestedManyWithoutGameInput = {
    create?: XOR<CheckpointCreateWithoutGameInput, CheckpointUncheckedCreateWithoutGameInput> | CheckpointCreateWithoutGameInput[] | CheckpointUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CheckpointCreateOrConnectWithoutGameInput | CheckpointCreateOrConnectWithoutGameInput[]
    createMany?: CheckpointCreateManyGameInputEnvelope
    connect?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutGameInput = {
    create?: XOR<ContractCreateWithoutGameInput, ContractUncheckedCreateWithoutGameInput> | ContractCreateWithoutGameInput[] | ContractUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutGameInput | ContractCreateOrConnectWithoutGameInput[]
    createMany?: ContractCreateManyGameInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutGameInput = {
    create?: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput> | GameSessionCreateWithoutGameInput[] | GameSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutGameInput | GameSessionCreateOrConnectWithoutGameInput[]
    createMany?: GameSessionCreateManyGameInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameTagCreateNestedManyWithoutGamesInput = {
    create?: XOR<GameTagCreateWithoutGamesInput, GameTagUncheckedCreateWithoutGamesInput> | GameTagCreateWithoutGamesInput[] | GameTagUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGamesInput | GameTagCreateOrConnectWithoutGamesInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
  }

  export type PurchasedGamesCreateNestedManyWithoutGameInput = {
    create?: XOR<PurchasedGamesCreateWithoutGameInput, PurchasedGamesUncheckedCreateWithoutGameInput> | PurchasedGamesCreateWithoutGameInput[] | PurchasedGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutGameInput | PurchasedGamesCreateOrConnectWithoutGameInput[]
    createMany?: PurchasedGamesCreateManyGameInputEnvelope
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
  }

  export type CheckpointUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<CheckpointCreateWithoutGameInput, CheckpointUncheckedCreateWithoutGameInput> | CheckpointCreateWithoutGameInput[] | CheckpointUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CheckpointCreateOrConnectWithoutGameInput | CheckpointCreateOrConnectWithoutGameInput[]
    createMany?: CheckpointCreateManyGameInputEnvelope
    connect?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<ContractCreateWithoutGameInput, ContractUncheckedCreateWithoutGameInput> | ContractCreateWithoutGameInput[] | ContractUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutGameInput | ContractCreateOrConnectWithoutGameInput[]
    createMany?: ContractCreateManyGameInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput> | GameSessionCreateWithoutGameInput[] | GameSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutGameInput | GameSessionCreateOrConnectWithoutGameInput[]
    createMany?: GameSessionCreateManyGameInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameTagUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<GameTagCreateWithoutGamesInput, GameTagUncheckedCreateWithoutGamesInput> | GameTagCreateWithoutGamesInput[] | GameTagUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGamesInput | GameTagCreateOrConnectWithoutGamesInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
  }

  export type PurchasedGamesUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PurchasedGamesCreateWithoutGameInput, PurchasedGamesUncheckedCreateWithoutGameInput> | PurchasedGamesCreateWithoutGameInput[] | PurchasedGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutGameInput | PurchasedGamesCreateOrConnectWithoutGameInput[]
    createMany?: PurchasedGamesCreateManyGameInputEnvelope
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
  }

  export type EnumGameDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.GameDifficulty
  }

  export type FileUpdateOneRequiredWithoutGameNestedInput = {
    create?: XOR<FileCreateWithoutGameInput, FileUncheckedCreateWithoutGameInput>
    connectOrCreate?: FileCreateOrConnectWithoutGameInput
    upsert?: FileUpsertWithoutGameInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutGameInput, FileUpdateWithoutGameInput>, FileUncheckedUpdateWithoutGameInput>
  }

  export type CheckpointUpdateManyWithoutGameNestedInput = {
    create?: XOR<CheckpointCreateWithoutGameInput, CheckpointUncheckedCreateWithoutGameInput> | CheckpointCreateWithoutGameInput[] | CheckpointUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CheckpointCreateOrConnectWithoutGameInput | CheckpointCreateOrConnectWithoutGameInput[]
    upsert?: CheckpointUpsertWithWhereUniqueWithoutGameInput | CheckpointUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CheckpointCreateManyGameInputEnvelope
    set?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    disconnect?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    delete?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    connect?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    update?: CheckpointUpdateWithWhereUniqueWithoutGameInput | CheckpointUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CheckpointUpdateManyWithWhereWithoutGameInput | CheckpointUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CheckpointScalarWhereInput | CheckpointScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutGameNestedInput = {
    create?: XOR<ContractCreateWithoutGameInput, ContractUncheckedCreateWithoutGameInput> | ContractCreateWithoutGameInput[] | ContractUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutGameInput | ContractCreateOrConnectWithoutGameInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutGameInput | ContractUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ContractCreateManyGameInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutGameInput | ContractUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutGameInput | ContractUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput> | GameSessionCreateWithoutGameInput[] | GameSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutGameInput | GameSessionCreateOrConnectWithoutGameInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutGameInput | GameSessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameSessionCreateManyGameInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutGameInput | GameSessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutGameInput | GameSessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GameTagUpdateManyWithoutGamesNestedInput = {
    create?: XOR<GameTagCreateWithoutGamesInput, GameTagUncheckedCreateWithoutGamesInput> | GameTagCreateWithoutGamesInput[] | GameTagUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGamesInput | GameTagCreateOrConnectWithoutGamesInput[]
    upsert?: GameTagUpsertWithWhereUniqueWithoutGamesInput | GameTagUpsertWithWhereUniqueWithoutGamesInput[]
    set?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    disconnect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    delete?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    update?: GameTagUpdateWithWhereUniqueWithoutGamesInput | GameTagUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: GameTagUpdateManyWithWhereWithoutGamesInput | GameTagUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
  }

  export type PurchasedGamesUpdateManyWithoutGameNestedInput = {
    create?: XOR<PurchasedGamesCreateWithoutGameInput, PurchasedGamesUncheckedCreateWithoutGameInput> | PurchasedGamesCreateWithoutGameInput[] | PurchasedGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutGameInput | PurchasedGamesCreateOrConnectWithoutGameInput[]
    upsert?: PurchasedGamesUpsertWithWhereUniqueWithoutGameInput | PurchasedGamesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PurchasedGamesCreateManyGameInputEnvelope
    set?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    disconnect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    delete?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    update?: PurchasedGamesUpdateWithWhereUniqueWithoutGameInput | PurchasedGamesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PurchasedGamesUpdateManyWithWhereWithoutGameInput | PurchasedGamesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PurchasedGamesScalarWhereInput | PurchasedGamesScalarWhereInput[]
  }

  export type CheckpointUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<CheckpointCreateWithoutGameInput, CheckpointUncheckedCreateWithoutGameInput> | CheckpointCreateWithoutGameInput[] | CheckpointUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CheckpointCreateOrConnectWithoutGameInput | CheckpointCreateOrConnectWithoutGameInput[]
    upsert?: CheckpointUpsertWithWhereUniqueWithoutGameInput | CheckpointUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CheckpointCreateManyGameInputEnvelope
    set?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    disconnect?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    delete?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    connect?: CheckpointWhereUniqueInput | CheckpointWhereUniqueInput[]
    update?: CheckpointUpdateWithWhereUniqueWithoutGameInput | CheckpointUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CheckpointUpdateManyWithWhereWithoutGameInput | CheckpointUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CheckpointScalarWhereInput | CheckpointScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<ContractCreateWithoutGameInput, ContractUncheckedCreateWithoutGameInput> | ContractCreateWithoutGameInput[] | ContractUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutGameInput | ContractCreateOrConnectWithoutGameInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutGameInput | ContractUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ContractCreateManyGameInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutGameInput | ContractUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutGameInput | ContractUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput> | GameSessionCreateWithoutGameInput[] | GameSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutGameInput | GameSessionCreateOrConnectWithoutGameInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutGameInput | GameSessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameSessionCreateManyGameInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutGameInput | GameSessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutGameInput | GameSessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GameTagUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<GameTagCreateWithoutGamesInput, GameTagUncheckedCreateWithoutGamesInput> | GameTagCreateWithoutGamesInput[] | GameTagUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GameTagCreateOrConnectWithoutGamesInput | GameTagCreateOrConnectWithoutGamesInput[]
    upsert?: GameTagUpsertWithWhereUniqueWithoutGamesInput | GameTagUpsertWithWhereUniqueWithoutGamesInput[]
    set?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    disconnect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    delete?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    connect?: GameTagWhereUniqueInput | GameTagWhereUniqueInput[]
    update?: GameTagUpdateWithWhereUniqueWithoutGamesInput | GameTagUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: GameTagUpdateManyWithWhereWithoutGamesInput | GameTagUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
  }

  export type PurchasedGamesUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PurchasedGamesCreateWithoutGameInput, PurchasedGamesUncheckedCreateWithoutGameInput> | PurchasedGamesCreateWithoutGameInput[] | PurchasedGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PurchasedGamesCreateOrConnectWithoutGameInput | PurchasedGamesCreateOrConnectWithoutGameInput[]
    upsert?: PurchasedGamesUpsertWithWhereUniqueWithoutGameInput | PurchasedGamesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PurchasedGamesCreateManyGameInputEnvelope
    set?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    disconnect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    delete?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    connect?: PurchasedGamesWhereUniqueInput | PurchasedGamesWhereUniqueInput[]
    update?: PurchasedGamesUpdateWithWhereUniqueWithoutGameInput | PurchasedGamesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PurchasedGamesUpdateManyWithWhereWithoutGameInput | PurchasedGamesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PurchasedGamesScalarWhereInput | PurchasedGamesScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutTagsInput = {
    create?: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput> | GameCreateWithoutTagsInput[] | GameUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTagsInput | GameCreateOrConnectWithoutTagsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput> | GameCreateWithoutTagsInput[] | GameUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTagsInput | GameCreateOrConnectWithoutTagsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutTagsNestedInput = {
    create?: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput> | GameCreateWithoutTagsInput[] | GameUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTagsInput | GameCreateOrConnectWithoutTagsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutTagsInput | GameUpsertWithWhereUniqueWithoutTagsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutTagsInput | GameUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutTagsInput | GameUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput> | GameCreateWithoutTagsInput[] | GameUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTagsInput | GameCreateOrConnectWithoutTagsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutTagsInput | GameUpsertWithWhereUniqueWithoutTagsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutTagsInput | GameUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutTagsInput | GameUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutCheckpointInput = {
    create?: XOR<FileCreateWithoutCheckpointInput, FileUncheckedCreateWithoutCheckpointInput>
    connectOrCreate?: FileCreateOrConnectWithoutCheckpointInput
    connect?: FileWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutCheckpointsInput = {
    create?: XOR<GameCreateWithoutCheckpointsInput, GameUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: GameCreateOrConnectWithoutCheckpointsInput
    connect?: GameWhereUniqueInput
  }

  export type GameSessionCreateNestedManyWithoutCheckpointInput = {
    create?: XOR<GameSessionCreateWithoutCheckpointInput, GameSessionUncheckedCreateWithoutCheckpointInput> | GameSessionCreateWithoutCheckpointInput[] | GameSessionUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCheckpointInput | GameSessionCreateOrConnectWithoutCheckpointInput[]
    createMany?: GameSessionCreateManyCheckpointInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type HintCreateNestedManyWithoutCheckpointInput = {
    create?: XOR<HintCreateWithoutCheckpointInput, HintUncheckedCreateWithoutCheckpointInput> | HintCreateWithoutCheckpointInput[] | HintUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: HintCreateOrConnectWithoutCheckpointInput | HintCreateOrConnectWithoutCheckpointInput[]
    createMany?: HintCreateManyCheckpointInputEnvelope
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutCheckpointInput = {
    create?: XOR<GameSessionCreateWithoutCheckpointInput, GameSessionUncheckedCreateWithoutCheckpointInput> | GameSessionCreateWithoutCheckpointInput[] | GameSessionUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCheckpointInput | GameSessionCreateOrConnectWithoutCheckpointInput[]
    createMany?: GameSessionCreateManyCheckpointInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type HintUncheckedCreateNestedManyWithoutCheckpointInput = {
    create?: XOR<HintCreateWithoutCheckpointInput, HintUncheckedCreateWithoutCheckpointInput> | HintCreateWithoutCheckpointInput[] | HintUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: HintCreateOrConnectWithoutCheckpointInput | HintCreateOrConnectWithoutCheckpointInput[]
    createMany?: HintCreateManyCheckpointInputEnvelope
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
  }

  export type FileUpdateOneRequiredWithoutCheckpointNestedInput = {
    create?: XOR<FileCreateWithoutCheckpointInput, FileUncheckedCreateWithoutCheckpointInput>
    connectOrCreate?: FileCreateOrConnectWithoutCheckpointInput
    upsert?: FileUpsertWithoutCheckpointInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutCheckpointInput, FileUpdateWithoutCheckpointInput>, FileUncheckedUpdateWithoutCheckpointInput>
  }

  export type GameUpdateOneRequiredWithoutCheckpointsNestedInput = {
    create?: XOR<GameCreateWithoutCheckpointsInput, GameUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: GameCreateOrConnectWithoutCheckpointsInput
    upsert?: GameUpsertWithoutCheckpointsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutCheckpointsInput, GameUpdateWithoutCheckpointsInput>, GameUncheckedUpdateWithoutCheckpointsInput>
  }

  export type GameSessionUpdateManyWithoutCheckpointNestedInput = {
    create?: XOR<GameSessionCreateWithoutCheckpointInput, GameSessionUncheckedCreateWithoutCheckpointInput> | GameSessionCreateWithoutCheckpointInput[] | GameSessionUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCheckpointInput | GameSessionCreateOrConnectWithoutCheckpointInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutCheckpointInput | GameSessionUpsertWithWhereUniqueWithoutCheckpointInput[]
    createMany?: GameSessionCreateManyCheckpointInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutCheckpointInput | GameSessionUpdateWithWhereUniqueWithoutCheckpointInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutCheckpointInput | GameSessionUpdateManyWithWhereWithoutCheckpointInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type HintUpdateManyWithoutCheckpointNestedInput = {
    create?: XOR<HintCreateWithoutCheckpointInput, HintUncheckedCreateWithoutCheckpointInput> | HintCreateWithoutCheckpointInput[] | HintUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: HintCreateOrConnectWithoutCheckpointInput | HintCreateOrConnectWithoutCheckpointInput[]
    upsert?: HintUpsertWithWhereUniqueWithoutCheckpointInput | HintUpsertWithWhereUniqueWithoutCheckpointInput[]
    createMany?: HintCreateManyCheckpointInputEnvelope
    set?: HintWhereUniqueInput | HintWhereUniqueInput[]
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[]
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    update?: HintUpdateWithWhereUniqueWithoutCheckpointInput | HintUpdateWithWhereUniqueWithoutCheckpointInput[]
    updateMany?: HintUpdateManyWithWhereWithoutCheckpointInput | HintUpdateManyWithWhereWithoutCheckpointInput[]
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutCheckpointNestedInput = {
    create?: XOR<GameSessionCreateWithoutCheckpointInput, GameSessionUncheckedCreateWithoutCheckpointInput> | GameSessionCreateWithoutCheckpointInput[] | GameSessionUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCheckpointInput | GameSessionCreateOrConnectWithoutCheckpointInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutCheckpointInput | GameSessionUpsertWithWhereUniqueWithoutCheckpointInput[]
    createMany?: GameSessionCreateManyCheckpointInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutCheckpointInput | GameSessionUpdateWithWhereUniqueWithoutCheckpointInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutCheckpointInput | GameSessionUpdateManyWithWhereWithoutCheckpointInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type HintUncheckedUpdateManyWithoutCheckpointNestedInput = {
    create?: XOR<HintCreateWithoutCheckpointInput, HintUncheckedCreateWithoutCheckpointInput> | HintCreateWithoutCheckpointInput[] | HintUncheckedCreateWithoutCheckpointInput[]
    connectOrCreate?: HintCreateOrConnectWithoutCheckpointInput | HintCreateOrConnectWithoutCheckpointInput[]
    upsert?: HintUpsertWithWhereUniqueWithoutCheckpointInput | HintUpsertWithWhereUniqueWithoutCheckpointInput[]
    createMany?: HintCreateManyCheckpointInputEnvelope
    set?: HintWhereUniqueInput | HintWhereUniqueInput[]
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[]
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    update?: HintUpdateWithWhereUniqueWithoutCheckpointInput | HintUpdateWithWhereUniqueWithoutCheckpointInput[]
    updateMany?: HintUpdateManyWithWhereWithoutCheckpointInput | HintUpdateManyWithWhereWithoutCheckpointInput[]
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[]
  }

  export type CheckpointCreateNestedOneWithoutHintsInput = {
    create?: XOR<CheckpointCreateWithoutHintsInput, CheckpointUncheckedCreateWithoutHintsInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutHintsInput
    connect?: CheckpointWhereUniqueInput
  }

  export type CheckpointUpdateOneRequiredWithoutHintsNestedInput = {
    create?: XOR<CheckpointCreateWithoutHintsInput, CheckpointUncheckedCreateWithoutHintsInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutHintsInput
    upsert?: CheckpointUpsertWithoutHintsInput
    connect?: CheckpointWhereUniqueInput
    update?: XOR<XOR<CheckpointUpdateToOneWithWhereWithoutHintsInput, CheckpointUpdateWithoutHintsInput>, CheckpointUncheckedUpdateWithoutHintsInput>
  }

  export type GameCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<GameCreateWithoutGameSessionsInput, GameUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameSessionsInput
    connect?: GameWhereUniqueInput
  }

  export type CheckpointCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<CheckpointCreateWithoutGameSessionsInput, CheckpointUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutGameSessionsInput
    connect?: CheckpointWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput> | UserCreateWithoutParticipationsInput[] | UserUncheckedCreateWithoutParticipationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput | UserCreateOrConnectWithoutParticipationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput> | UserCreateWithoutParticipationsInput[] | UserUncheckedCreateWithoutParticipationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput | UserCreateOrConnectWithoutParticipationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumGameStateFieldUpdateOperationsInput = {
    set?: $Enums.GameState
  }

  export type GameUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<GameCreateWithoutGameSessionsInput, GameUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameSessionsInput
    upsert?: GameUpsertWithoutGameSessionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameSessionsInput, GameUpdateWithoutGameSessionsInput>, GameUncheckedUpdateWithoutGameSessionsInput>
  }

  export type CheckpointUpdateOneWithoutGameSessionsNestedInput = {
    create?: XOR<CheckpointCreateWithoutGameSessionsInput, CheckpointUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutGameSessionsInput
    upsert?: CheckpointUpsertWithoutGameSessionsInput
    disconnect?: CheckpointWhereInput | boolean
    delete?: CheckpointWhereInput | boolean
    connect?: CheckpointWhereUniqueInput
    update?: XOR<XOR<CheckpointUpdateToOneWithWhereWithoutGameSessionsInput, CheckpointUpdateWithoutGameSessionsInput>, CheckpointUncheckedUpdateWithoutGameSessionsInput>
  }

  export type UserUpdateManyWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput> | UserCreateWithoutParticipationsInput[] | UserUncheckedCreateWithoutParticipationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput | UserCreateOrConnectWithoutParticipationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParticipationsInput | UserUpsertWithWhereUniqueWithoutParticipationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParticipationsInput | UserUpdateWithWhereUniqueWithoutParticipationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParticipationsInput | UserUpdateManyWithWhereWithoutParticipationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput> | UserCreateWithoutParticipationsInput[] | UserUncheckedCreateWithoutParticipationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput | UserCreateOrConnectWithoutParticipationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParticipationsInput | UserUpsertWithWhereUniqueWithoutParticipationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParticipationsInput | UserUpdateWithWhereUniqueWithoutParticipationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParticipationsInput | UserUpdateManyWithWhereWithoutParticipationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPhotoInput = {
    create?: XOR<UserCreateWithoutPhotoInput, UserUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutImageInput = {
    create?: XOR<GameCreateWithoutImageInput, GameUncheckedCreateWithoutImageInput>
    connectOrCreate?: GameCreateOrConnectWithoutImageInput
    connect?: GameWhereUniqueInput
  }

  export type ContractCreateNestedOneWithoutFileInput = {
    create?: XOR<ContractCreateWithoutFileInput, ContractUncheckedCreateWithoutFileInput>
    connectOrCreate?: ContractCreateOrConnectWithoutFileInput
    connect?: ContractWhereUniqueInput
  }

  export type CheckpointCreateNestedOneWithoutImageInput = {
    create?: XOR<CheckpointCreateWithoutImageInput, CheckpointUncheckedCreateWithoutImageInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutImageInput
    connect?: CheckpointWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutImageInput = {
    create?: XOR<BadgeCreateWithoutImageInput, BadgeUncheckedCreateWithoutImageInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutImageInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPhotoInput = {
    create?: XOR<UserCreateWithoutPhotoInput, UserUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoInput
    connect?: UserWhereUniqueInput
  }

  export type GameUncheckedCreateNestedOneWithoutImageInput = {
    create?: XOR<GameCreateWithoutImageInput, GameUncheckedCreateWithoutImageInput>
    connectOrCreate?: GameCreateOrConnectWithoutImageInput
    connect?: GameWhereUniqueInput
  }

  export type ContractUncheckedCreateNestedOneWithoutFileInput = {
    create?: XOR<ContractCreateWithoutFileInput, ContractUncheckedCreateWithoutFileInput>
    connectOrCreate?: ContractCreateOrConnectWithoutFileInput
    connect?: ContractWhereUniqueInput
  }

  export type CheckpointUncheckedCreateNestedOneWithoutImageInput = {
    create?: XOR<CheckpointCreateWithoutImageInput, CheckpointUncheckedCreateWithoutImageInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutImageInput
    connect?: CheckpointWhereUniqueInput
  }

  export type BadgeUncheckedCreateNestedOneWithoutImageInput = {
    create?: XOR<BadgeCreateWithoutImageInput, BadgeUncheckedCreateWithoutImageInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutImageInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUpdateOneWithoutPhotoNestedInput = {
    create?: XOR<UserCreateWithoutPhotoInput, UserUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoInput
    upsert?: UserUpsertWithoutPhotoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotoInput, UserUpdateWithoutPhotoInput>, UserUncheckedUpdateWithoutPhotoInput>
  }

  export type GameUpdateOneWithoutImageNestedInput = {
    create?: XOR<GameCreateWithoutImageInput, GameUncheckedCreateWithoutImageInput>
    connectOrCreate?: GameCreateOrConnectWithoutImageInput
    upsert?: GameUpsertWithoutImageInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutImageInput, GameUpdateWithoutImageInput>, GameUncheckedUpdateWithoutImageInput>
  }

  export type ContractUpdateOneWithoutFileNestedInput = {
    create?: XOR<ContractCreateWithoutFileInput, ContractUncheckedCreateWithoutFileInput>
    connectOrCreate?: ContractCreateOrConnectWithoutFileInput
    upsert?: ContractUpsertWithoutFileInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutFileInput, ContractUpdateWithoutFileInput>, ContractUncheckedUpdateWithoutFileInput>
  }

  export type CheckpointUpdateOneWithoutImageNestedInput = {
    create?: XOR<CheckpointCreateWithoutImageInput, CheckpointUncheckedCreateWithoutImageInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutImageInput
    upsert?: CheckpointUpsertWithoutImageInput
    disconnect?: CheckpointWhereInput | boolean
    delete?: CheckpointWhereInput | boolean
    connect?: CheckpointWhereUniqueInput
    update?: XOR<XOR<CheckpointUpdateToOneWithWhereWithoutImageInput, CheckpointUpdateWithoutImageInput>, CheckpointUncheckedUpdateWithoutImageInput>
  }

  export type BadgeUpdateOneWithoutImageNestedInput = {
    create?: XOR<BadgeCreateWithoutImageInput, BadgeUncheckedCreateWithoutImageInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutImageInput
    upsert?: BadgeUpsertWithoutImageInput
    disconnect?: BadgeWhereInput | boolean
    delete?: BadgeWhereInput | boolean
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutImageInput, BadgeUpdateWithoutImageInput>, BadgeUncheckedUpdateWithoutImageInput>
  }

  export type UserUncheckedUpdateOneWithoutPhotoNestedInput = {
    create?: XOR<UserCreateWithoutPhotoInput, UserUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoInput
    upsert?: UserUpsertWithoutPhotoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotoInput, UserUpdateWithoutPhotoInput>, UserUncheckedUpdateWithoutPhotoInput>
  }

  export type GameUncheckedUpdateOneWithoutImageNestedInput = {
    create?: XOR<GameCreateWithoutImageInput, GameUncheckedCreateWithoutImageInput>
    connectOrCreate?: GameCreateOrConnectWithoutImageInput
    upsert?: GameUpsertWithoutImageInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutImageInput, GameUpdateWithoutImageInput>, GameUncheckedUpdateWithoutImageInput>
  }

  export type ContractUncheckedUpdateOneWithoutFileNestedInput = {
    create?: XOR<ContractCreateWithoutFileInput, ContractUncheckedCreateWithoutFileInput>
    connectOrCreate?: ContractCreateOrConnectWithoutFileInput
    upsert?: ContractUpsertWithoutFileInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutFileInput, ContractUpdateWithoutFileInput>, ContractUncheckedUpdateWithoutFileInput>
  }

  export type CheckpointUncheckedUpdateOneWithoutImageNestedInput = {
    create?: XOR<CheckpointCreateWithoutImageInput, CheckpointUncheckedCreateWithoutImageInput>
    connectOrCreate?: CheckpointCreateOrConnectWithoutImageInput
    upsert?: CheckpointUpsertWithoutImageInput
    disconnect?: CheckpointWhereInput | boolean
    delete?: CheckpointWhereInput | boolean
    connect?: CheckpointWhereUniqueInput
    update?: XOR<XOR<CheckpointUpdateToOneWithWhereWithoutImageInput, CheckpointUpdateWithoutImageInput>, CheckpointUncheckedUpdateWithoutImageInput>
  }

  export type BadgeUncheckedUpdateOneWithoutImageNestedInput = {
    create?: XOR<BadgeCreateWithoutImageInput, BadgeUncheckedCreateWithoutImageInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutImageInput
    upsert?: BadgeUpsertWithoutImageInput
    disconnect?: BadgeWhereInput | boolean
    delete?: BadgeWhereInput | boolean
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutImageInput, BadgeUpdateWithoutImageInput>, BadgeUncheckedUpdateWithoutImageInput>
  }

  export type UserCreateNestedOneWithoutContractInput = {
    create?: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutContractInput = {
    create?: XOR<GameCreateWithoutContractInput, GameUncheckedCreateWithoutContractInput>
    connectOrCreate?: GameCreateOrConnectWithoutContractInput
    connect?: GameWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutContractInput = {
    create?: XOR<FileCreateWithoutContractInput, FileUncheckedCreateWithoutContractInput>
    connectOrCreate?: FileCreateOrConnectWithoutContractInput
    connect?: FileWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractInput
    upsert?: UserUpsertWithoutContractInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContractInput, UserUpdateWithoutContractInput>, UserUncheckedUpdateWithoutContractInput>
  }

  export type GameUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<GameCreateWithoutContractInput, GameUncheckedCreateWithoutContractInput>
    connectOrCreate?: GameCreateOrConnectWithoutContractInput
    upsert?: GameUpsertWithoutContractInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutContractInput, GameUpdateWithoutContractInput>, GameUncheckedUpdateWithoutContractInput>
  }

  export type FileUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<FileCreateWithoutContractInput, FileUncheckedCreateWithoutContractInput>
    connectOrCreate?: FileCreateOrConnectWithoutContractInput
    upsert?: FileUpsertWithoutContractInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutContractInput, FileUpdateWithoutContractInput>, FileUncheckedUpdateWithoutContractInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGameDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.GameDifficulty | EnumGameDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.GameDifficulty[]
    notIn?: $Enums.GameDifficulty[]
    not?: NestedEnumGameDifficultyFilter<$PrismaModel> | $Enums.GameDifficulty
  }

  export type NestedEnumGameDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameDifficulty | EnumGameDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.GameDifficulty[]
    notIn?: $Enums.GameDifficulty[]
    not?: NestedEnumGameDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.GameDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameDifficultyFilter<$PrismaModel>
    _max?: NestedEnumGameDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGameStateFilter<$PrismaModel = never> = {
    equals?: $Enums.GameState | EnumGameStateFieldRefInput<$PrismaModel>
    in?: $Enums.GameState[]
    notIn?: $Enums.GameState[]
    not?: NestedEnumGameStateFilter<$PrismaModel> | $Enums.GameState
  }

  export type NestedEnumGameStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameState | EnumGameStateFieldRefInput<$PrismaModel>
    in?: $Enums.GameState[]
    notIn?: $Enums.GameState[]
    not?: NestedEnumGameStateWithAggregatesFilter<$PrismaModel> | $Enums.GameState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStateFilter<$PrismaModel>
    _max?: NestedEnumGameStateFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FileCreateWithoutBadgeInput = {
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPhotoInput
    game?: GameCreateNestedOneWithoutImageInput
    contract?: ContractCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointCreateNestedOneWithoutImageInput
  }

  export type FileUncheckedCreateWithoutBadgeInput = {
    id?: number
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPhotoInput
    game?: GameUncheckedCreateNestedOneWithoutImageInput
    contract?: ContractUncheckedCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointUncheckedCreateNestedOneWithoutImageInput
  }

  export type FileCreateOrConnectWithoutBadgeInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutBadgeInput, FileUncheckedCreateWithoutBadgeInput>
  }

  export type UserCreateWithoutBadgeInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    photo?: FileCreateNestedOneWithoutUserInput
    contract?: ContractCreateNestedManyWithoutUserInput
    participations?: GameSessionCreateNestedManyWithoutParticipantsInput
    orders?: OrderCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgeInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
    participations?: GameSessionUncheckedCreateNestedManyWithoutParticipantsInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput>
  }

  export type UserCreateManyBadgeInputEnvelope = {
    data: UserCreateManyBadgeInput | UserCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithoutBadgeInput = {
    update: XOR<FileUpdateWithoutBadgeInput, FileUncheckedUpdateWithoutBadgeInput>
    create: XOR<FileCreateWithoutBadgeInput, FileUncheckedCreateWithoutBadgeInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutBadgeInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutBadgeInput, FileUncheckedUpdateWithoutBadgeInput>
  }

  export type FileUpdateWithoutBadgeInput = {
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPhotoNestedInput
    game?: GameUpdateOneWithoutImageNestedInput
    contract?: ContractUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUpdateOneWithoutImageNestedInput
  }

  export type FileUncheckedUpdateWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPhotoNestedInput
    game?: GameUncheckedUpdateOneWithoutImageNestedInput
    contract?: ContractUncheckedUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUncheckedUpdateOneWithoutImageNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBadgeInput, UserUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBadgeInput, UserUncheckedUpdateWithoutBadgeInput>
  }

  export type UserUpdateManyWithWhereWithoutBadgeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isAlive?: BoolFilter<"User"> | boolean
    photoId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    experience?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    badgeId?: IntFilter<"User"> | number
    deliveryInfo?: JsonNullableFilter<"User">
  }

  export type BadgeCreateWithoutUsersInput = {
    title: string
    minExperience: number
    image: FileCreateNestedOneWithoutBadgeInput
  }

  export type BadgeUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    minExperience: number
    imageId: number
  }

  export type BadgeCreateOrConnectWithoutUsersInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
  }

  export type FileCreateWithoutUserInput = {
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game?: GameCreateNestedOneWithoutImageInput
    contract?: ContractCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointCreateNestedOneWithoutImageInput
    badge?: BadgeCreateNestedOneWithoutImageInput
  }

  export type FileUncheckedCreateWithoutUserInput = {
    id?: number
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game?: GameUncheckedCreateNestedOneWithoutImageInput
    contract?: ContractUncheckedCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointUncheckedCreateNestedOneWithoutImageInput
    badge?: BadgeUncheckedCreateNestedOneWithoutImageInput
  }

  export type FileCreateOrConnectWithoutUserInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutContractInput
    file: FileCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutUserInput = {
    gameId: number
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutUserInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateManyUserInputEnvelope = {
    data: ContractCreateManyUserInput | ContractCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionCreateWithoutParticipantsInput = {
    inviteCode: string
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    game: GameCreateNestedOneWithoutGameSessionsInput
    checkpoint?: CheckpointCreateNestedOneWithoutGameSessionsInput
  }

  export type GameSessionUncheckedCreateWithoutParticipantsInput = {
    id?: number
    inviteCode: string
    gameId: number
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    checkpointId?: number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameSessionCreateOrConnectWithoutParticipantsInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutParticipantsInput, GameSessionUncheckedCreateWithoutParticipantsInput>
  }

  export type OrderCreateWithoutUserInput = {
    orderUuid?: string
    invoiceId?: number | null
    status?: $Enums.OrderStatus
    gopayId?: number | null
    gatewayUrl?: string | null
    fakturoidInvoiceId: number
    hasInvoice?: boolean
    emailsSent?: boolean
    total: number
    emails: JsonNullValueInput | InputJsonValue
    products: JsonNullValueInput | InputJsonValue
    deliveryInfo: JsonNullValueInput | InputJsonValue
    accessCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    orderUuid?: string
    invoiceId?: number | null
    status?: $Enums.OrderStatus
    gopayId?: number | null
    gatewayUrl?: string | null
    fakturoidInvoiceId: number
    hasInvoice?: boolean
    emailsSent?: boolean
    total: number
    emails: JsonNullValueInput | InputJsonValue
    products: JsonNullValueInput | InputJsonValue
    deliveryInfo: JsonNullValueInput | InputJsonValue
    accessCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchasedGamesCreateWithoutUserInput = {
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutPurchasesInput
  }

  export type PurchasedGamesUncheckedCreateWithoutUserInput = {
    gameId: number
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasedGamesCreateOrConnectWithoutUserInput = {
    where: PurchasedGamesWhereUniqueInput
    create: XOR<PurchasedGamesCreateWithoutUserInput, PurchasedGamesUncheckedCreateWithoutUserInput>
  }

  export type PurchasedGamesCreateManyUserInputEnvelope = {
    data: PurchasedGamesCreateManyUserInput | PurchasedGamesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BadgeUpsertWithoutUsersInput = {
    update: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUsersInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
  }

  export type BadgeUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type FileUpsertWithoutUserInput = {
    update: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutUserInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
  }

  export type FileUpdateWithoutUserInput = {
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneWithoutImageNestedInput
    contract?: ContractUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUpdateOneWithoutImageNestedInput
    badge?: BadgeUpdateOneWithoutImageNestedInput
  }

  export type FileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUncheckedUpdateOneWithoutImageNestedInput
    contract?: ContractUncheckedUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUncheckedUpdateOneWithoutImageNestedInput
    badge?: BadgeUncheckedUpdateOneWithoutImageNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithWhereWithoutUserInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutUserInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    gameId?: IntFilter<"Contract"> | number
    userId?: IntFilter<"Contract"> | number
    fileId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type GameSessionUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutParticipantsInput, GameSessionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<GameSessionCreateWithoutParticipantsInput, GameSessionUncheckedCreateWithoutParticipantsInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutParticipantsInput, GameSessionUncheckedUpdateWithoutParticipantsInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutParticipantsInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type GameSessionScalarWhereInput = {
    AND?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    OR?: GameSessionScalarWhereInput[]
    NOT?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    id?: IntFilter<"GameSession"> | number
    inviteCode?: StringFilter<"GameSession"> | string
    gameId?: IntFilter<"GameSession"> | number
    state?: EnumGameStateFilter<"GameSession"> | $Enums.GameState
    team?: StringFilter<"GameSession"> | string
    start?: DateTimeFilter<"GameSession"> | Date | string
    finish?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    earnedPoints?: IntFilter<"GameSession"> | number
    duration?: IntFilter<"GameSession"> | number
    checkpointId?: IntNullableFilter<"GameSession"> | number | null
    hints?: JsonNullableFilter<"GameSession">
    answers?: JsonNullableFilter<"GameSession">
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    orderUuid?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    invoiceId?: IntNullableFilter<"Order"> | number | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    gopayId?: IntNullableFilter<"Order"> | number | null
    gatewayUrl?: StringNullableFilter<"Order"> | string | null
    fakturoidInvoiceId?: IntFilter<"Order"> | number
    hasInvoice?: BoolFilter<"Order"> | boolean
    emailsSent?: BoolFilter<"Order"> | boolean
    total?: IntFilter<"Order"> | number
    emails?: JsonFilter<"Order">
    products?: JsonFilter<"Order">
    deliveryInfo?: JsonFilter<"Order">
    accessCode?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type PurchasedGamesUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchasedGamesWhereUniqueInput
    update: XOR<PurchasedGamesUpdateWithoutUserInput, PurchasedGamesUncheckedUpdateWithoutUserInput>
    create: XOR<PurchasedGamesCreateWithoutUserInput, PurchasedGamesUncheckedCreateWithoutUserInput>
  }

  export type PurchasedGamesUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchasedGamesWhereUniqueInput
    data: XOR<PurchasedGamesUpdateWithoutUserInput, PurchasedGamesUncheckedUpdateWithoutUserInput>
  }

  export type PurchasedGamesUpdateManyWithWhereWithoutUserInput = {
    where: PurchasedGamesScalarWhereInput
    data: XOR<PurchasedGamesUpdateManyMutationInput, PurchasedGamesUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchasedGamesScalarWhereInput = {
    AND?: PurchasedGamesScalarWhereInput | PurchasedGamesScalarWhereInput[]
    OR?: PurchasedGamesScalarWhereInput[]
    NOT?: PurchasedGamesScalarWhereInput | PurchasedGamesScalarWhereInput[]
    userId?: IntFilter<"PurchasedGames"> | number
    gameId?: IntFilter<"PurchasedGames"> | number
    played?: BoolFilter<"PurchasedGames"> | boolean
    createdAt?: DateTimeFilter<"PurchasedGames"> | Date | string
    updatedAt?: DateTimeFilter<"PurchasedGames"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutPurchasedGamesInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge: BadgeCreateNestedOneWithoutUsersInput
    photo?: FileCreateNestedOneWithoutUserInput
    contract?: ContractCreateNestedManyWithoutUserInput
    participations?: GameSessionCreateNestedManyWithoutParticipantsInput
    orders?: OrderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasedGamesInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
    participations?: GameSessionUncheckedCreateNestedManyWithoutParticipantsInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasedGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasedGamesInput, UserUncheckedCreateWithoutPurchasedGamesInput>
  }

  export type GameCreateWithoutPurchasesInput = {
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    image: FileCreateNestedOneWithoutGameInput
    checkpoints?: CheckpointCreateNestedManyWithoutGameInput
    contract?: ContractCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutPurchasesInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imageId: number
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    checkpoints?: CheckpointUncheckedCreateNestedManyWithoutGameInput
    contract?: ContractUncheckedCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGamesInput
  }

  export type GameCreateOrConnectWithoutPurchasesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutPurchasedGamesInput = {
    update: XOR<UserUpdateWithoutPurchasedGamesInput, UserUncheckedUpdateWithoutPurchasedGamesInput>
    create: XOR<UserCreateWithoutPurchasedGamesInput, UserUncheckedCreateWithoutPurchasedGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasedGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasedGamesInput, UserUncheckedUpdateWithoutPurchasedGamesInput>
  }

  export type UserUpdateWithoutPurchasedGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
    photo?: FileUpdateOneWithoutUserNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
    participations?: GameSessionUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasedGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
    participations?: GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutPurchasesInput = {
    update: XOR<GameUpdateWithoutPurchasesInput, GameUncheckedUpdateWithoutPurchasesInput>
    create: XOR<GameCreateWithoutPurchasesInput, GameUncheckedCreateWithoutPurchasesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPurchasesInput, GameUncheckedUpdateWithoutPurchasesInput>
  }

  export type GameUpdateWithoutPurchasesInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutGameNestedInput
    checkpoints?: CheckpointUpdateManyWithoutGameNestedInput
    contract?: ContractUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    checkpoints?: CheckpointUncheckedUpdateManyWithoutGameNestedInput
    contract?: ContractUncheckedUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type FileCreateWithoutGameInput = {
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPhotoInput
    contract?: ContractCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointCreateNestedOneWithoutImageInput
    badge?: BadgeCreateNestedOneWithoutImageInput
  }

  export type FileUncheckedCreateWithoutGameInput = {
    id?: number
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPhotoInput
    contract?: ContractUncheckedCreateNestedOneWithoutFileInput
    checkpoint?: CheckpointUncheckedCreateNestedOneWithoutImageInput
    badge?: BadgeUncheckedCreateNestedOneWithoutImageInput
  }

  export type FileCreateOrConnectWithoutGameInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutGameInput, FileUncheckedCreateWithoutGameInput>
  }

  export type CheckpointCreateWithoutGameInput = {
    title: string
    description: string
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    image: FileCreateNestedOneWithoutCheckpointInput
    gameSessions?: GameSessionCreateNestedManyWithoutCheckpointInput
    hints?: HintCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointUncheckedCreateWithoutGameInput = {
    id?: number
    title: string
    description: string
    imageId: number
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutCheckpointInput
    hints?: HintUncheckedCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointCreateOrConnectWithoutGameInput = {
    where: CheckpointWhereUniqueInput
    create: XOR<CheckpointCreateWithoutGameInput, CheckpointUncheckedCreateWithoutGameInput>
  }

  export type CheckpointCreateManyGameInputEnvelope = {
    data: CheckpointCreateManyGameInput | CheckpointCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutGameInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractInput
    file: FileCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutGameInput = {
    userId: number
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutGameInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutGameInput, ContractUncheckedCreateWithoutGameInput>
  }

  export type ContractCreateManyGameInputEnvelope = {
    data: ContractCreateManyGameInput | ContractCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionCreateWithoutGameInput = {
    inviteCode: string
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    checkpoint?: CheckpointCreateNestedOneWithoutGameSessionsInput
    participants?: UserCreateNestedManyWithoutParticipationsInput
  }

  export type GameSessionUncheckedCreateWithoutGameInput = {
    id?: number
    inviteCode: string
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    checkpointId?: number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    participants?: UserUncheckedCreateNestedManyWithoutParticipationsInput
  }

  export type GameSessionCreateOrConnectWithoutGameInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput>
  }

  export type GameSessionCreateManyGameInputEnvelope = {
    data: GameSessionCreateManyGameInput | GameSessionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameTagCreateWithoutGamesInput = {
    label: string
  }

  export type GameTagUncheckedCreateWithoutGamesInput = {
    id?: number
    label: string
  }

  export type GameTagCreateOrConnectWithoutGamesInput = {
    where: GameTagWhereUniqueInput
    create: XOR<GameTagCreateWithoutGamesInput, GameTagUncheckedCreateWithoutGamesInput>
  }

  export type PurchasedGamesCreateWithoutGameInput = {
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasedGamesInput
  }

  export type PurchasedGamesUncheckedCreateWithoutGameInput = {
    userId: number
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasedGamesCreateOrConnectWithoutGameInput = {
    where: PurchasedGamesWhereUniqueInput
    create: XOR<PurchasedGamesCreateWithoutGameInput, PurchasedGamesUncheckedCreateWithoutGameInput>
  }

  export type PurchasedGamesCreateManyGameInputEnvelope = {
    data: PurchasedGamesCreateManyGameInput | PurchasedGamesCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithoutGameInput = {
    update: XOR<FileUpdateWithoutGameInput, FileUncheckedUpdateWithoutGameInput>
    create: XOR<FileCreateWithoutGameInput, FileUncheckedCreateWithoutGameInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutGameInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutGameInput, FileUncheckedUpdateWithoutGameInput>
  }

  export type FileUpdateWithoutGameInput = {
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPhotoNestedInput
    contract?: ContractUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUpdateOneWithoutImageNestedInput
    badge?: BadgeUpdateOneWithoutImageNestedInput
  }

  export type FileUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPhotoNestedInput
    contract?: ContractUncheckedUpdateOneWithoutFileNestedInput
    checkpoint?: CheckpointUncheckedUpdateOneWithoutImageNestedInput
    badge?: BadgeUncheckedUpdateOneWithoutImageNestedInput
  }

  export type CheckpointUpsertWithWhereUniqueWithoutGameInput = {
    where: CheckpointWhereUniqueInput
    update: XOR<CheckpointUpdateWithoutGameInput, CheckpointUncheckedUpdateWithoutGameInput>
    create: XOR<CheckpointCreateWithoutGameInput, CheckpointUncheckedCreateWithoutGameInput>
  }

  export type CheckpointUpdateWithWhereUniqueWithoutGameInput = {
    where: CheckpointWhereUniqueInput
    data: XOR<CheckpointUpdateWithoutGameInput, CheckpointUncheckedUpdateWithoutGameInput>
  }

  export type CheckpointUpdateManyWithWhereWithoutGameInput = {
    where: CheckpointScalarWhereInput
    data: XOR<CheckpointUpdateManyMutationInput, CheckpointUncheckedUpdateManyWithoutGameInput>
  }

  export type CheckpointScalarWhereInput = {
    AND?: CheckpointScalarWhereInput | CheckpointScalarWhereInput[]
    OR?: CheckpointScalarWhereInput[]
    NOT?: CheckpointScalarWhereInput | CheckpointScalarWhereInput[]
    id?: IntFilter<"Checkpoint"> | number
    gameId?: IntFilter<"Checkpoint"> | number
    title?: StringFilter<"Checkpoint"> | string
    description?: StringFilter<"Checkpoint"> | string
    imageId?: IntFilter<"Checkpoint"> | number
    mapId?: IntFilter<"Checkpoint"> | number
    riddle?: StringFilter<"Checkpoint"> | string
    answer?: JsonFilter<"Checkpoint">
    gpsCoordinates?: StringFilter<"Checkpoint"> | string
    reachDescription?: StringFilter<"Checkpoint"> | string
    maxPoints?: IntFilter<"Checkpoint"> | number
    pointsPenalty?: IntFilter<"Checkpoint"> | number
    ordering?: IntFilter<"Checkpoint"> | number
  }

  export type ContractUpsertWithWhereUniqueWithoutGameInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutGameInput, ContractUncheckedUpdateWithoutGameInput>
    create: XOR<ContractCreateWithoutGameInput, ContractUncheckedCreateWithoutGameInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutGameInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutGameInput, ContractUncheckedUpdateWithoutGameInput>
  }

  export type ContractUpdateManyWithWhereWithoutGameInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutGameInput>
  }

  export type GameSessionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutGameInput, GameSessionUncheckedUpdateWithoutGameInput>
    create: XOR<GameSessionCreateWithoutGameInput, GameSessionUncheckedCreateWithoutGameInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutGameInput, GameSessionUncheckedUpdateWithoutGameInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutGameInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameTagUpsertWithWhereUniqueWithoutGamesInput = {
    where: GameTagWhereUniqueInput
    update: XOR<GameTagUpdateWithoutGamesInput, GameTagUncheckedUpdateWithoutGamesInput>
    create: XOR<GameTagCreateWithoutGamesInput, GameTagUncheckedCreateWithoutGamesInput>
  }

  export type GameTagUpdateWithWhereUniqueWithoutGamesInput = {
    where: GameTagWhereUniqueInput
    data: XOR<GameTagUpdateWithoutGamesInput, GameTagUncheckedUpdateWithoutGamesInput>
  }

  export type GameTagUpdateManyWithWhereWithoutGamesInput = {
    where: GameTagScalarWhereInput
    data: XOR<GameTagUpdateManyMutationInput, GameTagUncheckedUpdateManyWithoutGamesInput>
  }

  export type GameTagScalarWhereInput = {
    AND?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
    OR?: GameTagScalarWhereInput[]
    NOT?: GameTagScalarWhereInput | GameTagScalarWhereInput[]
    id?: IntFilter<"GameTag"> | number
    label?: StringFilter<"GameTag"> | string
  }

  export type PurchasedGamesUpsertWithWhereUniqueWithoutGameInput = {
    where: PurchasedGamesWhereUniqueInput
    update: XOR<PurchasedGamesUpdateWithoutGameInput, PurchasedGamesUncheckedUpdateWithoutGameInput>
    create: XOR<PurchasedGamesCreateWithoutGameInput, PurchasedGamesUncheckedCreateWithoutGameInput>
  }

  export type PurchasedGamesUpdateWithWhereUniqueWithoutGameInput = {
    where: PurchasedGamesWhereUniqueInput
    data: XOR<PurchasedGamesUpdateWithoutGameInput, PurchasedGamesUncheckedUpdateWithoutGameInput>
  }

  export type PurchasedGamesUpdateManyWithWhereWithoutGameInput = {
    where: PurchasedGamesScalarWhereInput
    data: XOR<PurchasedGamesUpdateManyMutationInput, PurchasedGamesUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutTagsInput = {
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    image: FileCreateNestedOneWithoutGameInput
    checkpoints?: CheckpointCreateNestedManyWithoutGameInput
    contract?: ContractCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionCreateNestedManyWithoutGameInput
    purchases?: PurchasedGamesCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imageId: number
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    checkpoints?: CheckpointUncheckedCreateNestedManyWithoutGameInput
    contract?: ContractUncheckedCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutGameInput
    purchases?: PurchasedGamesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTagsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput>
  }

  export type GameUpsertWithWhereUniqueWithoutTagsInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutTagsInput, GameUncheckedUpdateWithoutTagsInput>
    create: XOR<GameCreateWithoutTagsInput, GameUncheckedCreateWithoutTagsInput>
  }

  export type GameUpdateWithWhereUniqueWithoutTagsInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutTagsInput, GameUncheckedUpdateWithoutTagsInput>
  }

  export type GameUpdateManyWithWhereWithoutTagsInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutTagsInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    title?: StringFilter<"Game"> | string
    slug?: StringFilter<"Game"> | string
    description?: StringFilter<"Game"> | string
    place?: StringFilter<"Game"> | string
    difficultness?: EnumGameDifficultyFilter<"Game"> | $Enums.GameDifficulty
    startingCheckpointId?: IntFilter<"Game"> | number
    endingCheckpointId?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    imageId?: IntFilter<"Game"> | number
    authorId?: IntFilter<"Game"> | number
    isActive?: BoolFilter<"Game"> | boolean
    price?: IntFilter<"Game"> | number
    maxPoints?: IntFilter<"Game"> | number
  }

  export type FileCreateWithoutCheckpointInput = {
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPhotoInput
    game?: GameCreateNestedOneWithoutImageInput
    contract?: ContractCreateNestedOneWithoutFileInput
    badge?: BadgeCreateNestedOneWithoutImageInput
  }

  export type FileUncheckedCreateWithoutCheckpointInput = {
    id?: number
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPhotoInput
    game?: GameUncheckedCreateNestedOneWithoutImageInput
    contract?: ContractUncheckedCreateNestedOneWithoutFileInput
    badge?: BadgeUncheckedCreateNestedOneWithoutImageInput
  }

  export type FileCreateOrConnectWithoutCheckpointInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutCheckpointInput, FileUncheckedCreateWithoutCheckpointInput>
  }

  export type GameCreateWithoutCheckpointsInput = {
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    image: FileCreateNestedOneWithoutGameInput
    contract?: ContractCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutCheckpointsInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imageId: number
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    contract?: ContractUncheckedCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutCheckpointsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutCheckpointsInput, GameUncheckedCreateWithoutCheckpointsInput>
  }

  export type GameSessionCreateWithoutCheckpointInput = {
    inviteCode: string
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    game: GameCreateNestedOneWithoutGameSessionsInput
    participants?: UserCreateNestedManyWithoutParticipationsInput
  }

  export type GameSessionUncheckedCreateWithoutCheckpointInput = {
    id?: number
    inviteCode: string
    gameId: number
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    participants?: UserUncheckedCreateNestedManyWithoutParticipationsInput
  }

  export type GameSessionCreateOrConnectWithoutCheckpointInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutCheckpointInput, GameSessionUncheckedCreateWithoutCheckpointInput>
  }

  export type GameSessionCreateManyCheckpointInputEnvelope = {
    data: GameSessionCreateManyCheckpointInput | GameSessionCreateManyCheckpointInput[]
    skipDuplicates?: boolean
  }

  export type HintCreateWithoutCheckpointInput = {
    label: string
    ordering: number
  }

  export type HintUncheckedCreateWithoutCheckpointInput = {
    id?: number
    label: string
    ordering: number
  }

  export type HintCreateOrConnectWithoutCheckpointInput = {
    where: HintWhereUniqueInput
    create: XOR<HintCreateWithoutCheckpointInput, HintUncheckedCreateWithoutCheckpointInput>
  }

  export type HintCreateManyCheckpointInputEnvelope = {
    data: HintCreateManyCheckpointInput | HintCreateManyCheckpointInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithoutCheckpointInput = {
    update: XOR<FileUpdateWithoutCheckpointInput, FileUncheckedUpdateWithoutCheckpointInput>
    create: XOR<FileCreateWithoutCheckpointInput, FileUncheckedCreateWithoutCheckpointInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutCheckpointInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutCheckpointInput, FileUncheckedUpdateWithoutCheckpointInput>
  }

  export type FileUpdateWithoutCheckpointInput = {
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPhotoNestedInput
    game?: GameUpdateOneWithoutImageNestedInput
    contract?: ContractUpdateOneWithoutFileNestedInput
    badge?: BadgeUpdateOneWithoutImageNestedInput
  }

  export type FileUncheckedUpdateWithoutCheckpointInput = {
    id?: IntFieldUpdateOperationsInput | number
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPhotoNestedInput
    game?: GameUncheckedUpdateOneWithoutImageNestedInput
    contract?: ContractUncheckedUpdateOneWithoutFileNestedInput
    badge?: BadgeUncheckedUpdateOneWithoutImageNestedInput
  }

  export type GameUpsertWithoutCheckpointsInput = {
    update: XOR<GameUpdateWithoutCheckpointsInput, GameUncheckedUpdateWithoutCheckpointsInput>
    create: XOR<GameCreateWithoutCheckpointsInput, GameUncheckedCreateWithoutCheckpointsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutCheckpointsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutCheckpointsInput, GameUncheckedUpdateWithoutCheckpointsInput>
  }

  export type GameUpdateWithoutCheckpointsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutGameNestedInput
    contract?: ContractUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutCheckpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    contract?: ContractUncheckedUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameSessionUpsertWithWhereUniqueWithoutCheckpointInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutCheckpointInput, GameSessionUncheckedUpdateWithoutCheckpointInput>
    create: XOR<GameSessionCreateWithoutCheckpointInput, GameSessionUncheckedCreateWithoutCheckpointInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutCheckpointInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutCheckpointInput, GameSessionUncheckedUpdateWithoutCheckpointInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutCheckpointInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutCheckpointInput>
  }

  export type HintUpsertWithWhereUniqueWithoutCheckpointInput = {
    where: HintWhereUniqueInput
    update: XOR<HintUpdateWithoutCheckpointInput, HintUncheckedUpdateWithoutCheckpointInput>
    create: XOR<HintCreateWithoutCheckpointInput, HintUncheckedCreateWithoutCheckpointInput>
  }

  export type HintUpdateWithWhereUniqueWithoutCheckpointInput = {
    where: HintWhereUniqueInput
    data: XOR<HintUpdateWithoutCheckpointInput, HintUncheckedUpdateWithoutCheckpointInput>
  }

  export type HintUpdateManyWithWhereWithoutCheckpointInput = {
    where: HintScalarWhereInput
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyWithoutCheckpointInput>
  }

  export type HintScalarWhereInput = {
    AND?: HintScalarWhereInput | HintScalarWhereInput[]
    OR?: HintScalarWhereInput[]
    NOT?: HintScalarWhereInput | HintScalarWhereInput[]
    id?: IntFilter<"Hint"> | number
    checkpointId?: IntFilter<"Hint"> | number
    label?: StringFilter<"Hint"> | string
    ordering?: IntFilter<"Hint"> | number
  }

  export type CheckpointCreateWithoutHintsInput = {
    title: string
    description: string
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    image: FileCreateNestedOneWithoutCheckpointInput
    game: GameCreateNestedOneWithoutCheckpointsInput
    gameSessions?: GameSessionCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointUncheckedCreateWithoutHintsInput = {
    id?: number
    gameId: number
    title: string
    description: string
    imageId: number
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointCreateOrConnectWithoutHintsInput = {
    where: CheckpointWhereUniqueInput
    create: XOR<CheckpointCreateWithoutHintsInput, CheckpointUncheckedCreateWithoutHintsInput>
  }

  export type CheckpointUpsertWithoutHintsInput = {
    update: XOR<CheckpointUpdateWithoutHintsInput, CheckpointUncheckedUpdateWithoutHintsInput>
    create: XOR<CheckpointCreateWithoutHintsInput, CheckpointUncheckedCreateWithoutHintsInput>
    where?: CheckpointWhereInput
  }

  export type CheckpointUpdateToOneWithWhereWithoutHintsInput = {
    where?: CheckpointWhereInput
    data: XOR<CheckpointUpdateWithoutHintsInput, CheckpointUncheckedUpdateWithoutHintsInput>
  }

  export type CheckpointUpdateWithoutHintsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutCheckpointNestedInput
    game?: GameUpdateOneRequiredWithoutCheckpointsNestedInput
    gameSessions?: GameSessionUpdateManyWithoutCheckpointNestedInput
  }

  export type CheckpointUncheckedUpdateWithoutHintsInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    gameSessions?: GameSessionUncheckedUpdateManyWithoutCheckpointNestedInput
  }

  export type GameCreateWithoutGameSessionsInput = {
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    image: FileCreateNestedOneWithoutGameInput
    checkpoints?: CheckpointCreateNestedManyWithoutGameInput
    contract?: ContractCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameSessionsInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imageId: number
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    checkpoints?: CheckpointUncheckedCreateNestedManyWithoutGameInput
    contract?: ContractUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameSessionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameSessionsInput, GameUncheckedCreateWithoutGameSessionsInput>
  }

  export type CheckpointCreateWithoutGameSessionsInput = {
    title: string
    description: string
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    image: FileCreateNestedOneWithoutCheckpointInput
    game: GameCreateNestedOneWithoutCheckpointsInput
    hints?: HintCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointUncheckedCreateWithoutGameSessionsInput = {
    id?: number
    gameId: number
    title: string
    description: string
    imageId: number
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    hints?: HintUncheckedCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointCreateOrConnectWithoutGameSessionsInput = {
    where: CheckpointWhereUniqueInput
    create: XOR<CheckpointCreateWithoutGameSessionsInput, CheckpointUncheckedCreateWithoutGameSessionsInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge: BadgeCreateNestedOneWithoutUsersInput
    photo?: FileCreateNestedOneWithoutUserInput
    contract?: ContractCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type GameUpsertWithoutGameSessionsInput = {
    update: XOR<GameUpdateWithoutGameSessionsInput, GameUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<GameCreateWithoutGameSessionsInput, GameUncheckedCreateWithoutGameSessionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameSessionsInput, GameUncheckedUpdateWithoutGameSessionsInput>
  }

  export type GameUpdateWithoutGameSessionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutGameNestedInput
    checkpoints?: CheckpointUpdateManyWithoutGameNestedInput
    contract?: ContractUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    checkpoints?: CheckpointUncheckedUpdateManyWithoutGameNestedInput
    contract?: ContractUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type CheckpointUpsertWithoutGameSessionsInput = {
    update: XOR<CheckpointUpdateWithoutGameSessionsInput, CheckpointUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<CheckpointCreateWithoutGameSessionsInput, CheckpointUncheckedCreateWithoutGameSessionsInput>
    where?: CheckpointWhereInput
  }

  export type CheckpointUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: CheckpointWhereInput
    data: XOR<CheckpointUpdateWithoutGameSessionsInput, CheckpointUncheckedUpdateWithoutGameSessionsInput>
  }

  export type CheckpointUpdateWithoutGameSessionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutCheckpointNestedInput
    game?: GameUpdateOneRequiredWithoutCheckpointsNestedInput
    hints?: HintUpdateManyWithoutCheckpointNestedInput
  }

  export type CheckpointUncheckedUpdateWithoutGameSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    hints?: HintUncheckedUpdateManyWithoutCheckpointNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateManyWithWhereWithoutParticipationsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutParticipationsInput>
  }

  export type UserCreateWithoutPhotoInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge: BadgeCreateNestedOneWithoutUsersInput
    contract?: ContractCreateNestedManyWithoutUserInput
    participations?: GameSessionCreateNestedManyWithoutParticipantsInput
    orders?: OrderCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhotoInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
    participations?: GameSessionUncheckedCreateNestedManyWithoutParticipantsInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhotoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotoInput, UserUncheckedCreateWithoutPhotoInput>
  }

  export type GameCreateWithoutImageInput = {
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    checkpoints?: CheckpointCreateNestedManyWithoutGameInput
    contract?: ContractCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutImageInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    checkpoints?: CheckpointUncheckedCreateNestedManyWithoutGameInput
    contract?: ContractUncheckedCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutImageInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutImageInput, GameUncheckedCreateWithoutImageInput>
  }

  export type ContractCreateWithoutFileInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractInput
    game: GameCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutFileInput = {
    gameId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutFileInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutFileInput, ContractUncheckedCreateWithoutFileInput>
  }

  export type CheckpointCreateWithoutImageInput = {
    title: string
    description: string
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    game: GameCreateNestedOneWithoutCheckpointsInput
    gameSessions?: GameSessionCreateNestedManyWithoutCheckpointInput
    hints?: HintCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointUncheckedCreateWithoutImageInput = {
    id?: number
    gameId: number
    title: string
    description: string
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutCheckpointInput
    hints?: HintUncheckedCreateNestedManyWithoutCheckpointInput
  }

  export type CheckpointCreateOrConnectWithoutImageInput = {
    where: CheckpointWhereUniqueInput
    create: XOR<CheckpointCreateWithoutImageInput, CheckpointUncheckedCreateWithoutImageInput>
  }

  export type BadgeCreateWithoutImageInput = {
    title: string
    minExperience: number
    users?: UserCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateWithoutImageInput = {
    id?: number
    title: string
    minExperience: number
    users?: UserUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeCreateOrConnectWithoutImageInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutImageInput, BadgeUncheckedCreateWithoutImageInput>
  }

  export type UserUpsertWithoutPhotoInput = {
    update: XOR<UserUpdateWithoutPhotoInput, UserUncheckedUpdateWithoutPhotoInput>
    create: XOR<UserCreateWithoutPhotoInput, UserUncheckedCreateWithoutPhotoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotoInput, UserUncheckedUpdateWithoutPhotoInput>
  }

  export type UserUpdateWithoutPhotoInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
    participations?: GameSessionUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
    participations?: GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutImageInput = {
    update: XOR<GameUpdateWithoutImageInput, GameUncheckedUpdateWithoutImageInput>
    create: XOR<GameCreateWithoutImageInput, GameUncheckedCreateWithoutImageInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutImageInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutImageInput, GameUncheckedUpdateWithoutImageInput>
  }

  export type GameUpdateWithoutImageInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    checkpoints?: CheckpointUpdateManyWithoutGameNestedInput
    contract?: ContractUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    checkpoints?: CheckpointUncheckedUpdateManyWithoutGameNestedInput
    contract?: ContractUncheckedUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type ContractUpsertWithoutFileInput = {
    update: XOR<ContractUpdateWithoutFileInput, ContractUncheckedUpdateWithoutFileInput>
    create: XOR<ContractCreateWithoutFileInput, ContractUncheckedCreateWithoutFileInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutFileInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutFileInput, ContractUncheckedUpdateWithoutFileInput>
  }

  export type ContractUpdateWithoutFileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    game?: GameUpdateOneRequiredWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutFileInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckpointUpsertWithoutImageInput = {
    update: XOR<CheckpointUpdateWithoutImageInput, CheckpointUncheckedUpdateWithoutImageInput>
    create: XOR<CheckpointCreateWithoutImageInput, CheckpointUncheckedCreateWithoutImageInput>
    where?: CheckpointWhereInput
  }

  export type CheckpointUpdateToOneWithWhereWithoutImageInput = {
    where?: CheckpointWhereInput
    data: XOR<CheckpointUpdateWithoutImageInput, CheckpointUncheckedUpdateWithoutImageInput>
  }

  export type CheckpointUpdateWithoutImageInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutCheckpointsNestedInput
    gameSessions?: GameSessionUpdateManyWithoutCheckpointNestedInput
    hints?: HintUpdateManyWithoutCheckpointNestedInput
  }

  export type CheckpointUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    gameSessions?: GameSessionUncheckedUpdateManyWithoutCheckpointNestedInput
    hints?: HintUncheckedUpdateManyWithoutCheckpointNestedInput
  }

  export type BadgeUpsertWithoutImageInput = {
    update: XOR<BadgeUpdateWithoutImageInput, BadgeUncheckedUpdateWithoutImageInput>
    create: XOR<BadgeCreateWithoutImageInput, BadgeUncheckedCreateWithoutImageInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutImageInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutImageInput, BadgeUncheckedUpdateWithoutImageInput>
  }

  export type BadgeUpdateWithoutImageInput = {
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    minExperience?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type UserCreateWithoutContractInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge: BadgeCreateNestedOneWithoutUsersInput
    photo?: FileCreateNestedOneWithoutUserInput
    participations?: GameSessionCreateNestedManyWithoutParticipantsInput
    orders?: OrderCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContractInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    participations?: GameSessionUncheckedCreateNestedManyWithoutParticipantsInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContractInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
  }

  export type GameCreateWithoutContractInput = {
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    image: FileCreateNestedOneWithoutGameInput
    checkpoints?: CheckpointCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionCreateNestedManyWithoutGameInput
    tags?: GameTagCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutContractInput = {
    id?: number
    title: string
    slug: string
    description: string
    place: string
    difficultness?: $Enums.GameDifficulty
    startingCheckpointId: number
    endingCheckpointId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imageId: number
    authorId: number
    isActive?: boolean
    price?: number
    maxPoints: number
    checkpoints?: CheckpointUncheckedCreateNestedManyWithoutGameInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutGameInput
    tags?: GameTagUncheckedCreateNestedManyWithoutGamesInput
    purchases?: PurchasedGamesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutContractInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutContractInput, GameUncheckedCreateWithoutContractInput>
  }

  export type FileCreateWithoutContractInput = {
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPhotoInput
    game?: GameCreateNestedOneWithoutImageInput
    checkpoint?: CheckpointCreateNestedOneWithoutImageInput
    badge?: BadgeCreateNestedOneWithoutImageInput
  }

  export type FileUncheckedCreateWithoutContractInput = {
    id?: number
    generatedName: string
    originalName: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPhotoInput
    game?: GameUncheckedCreateNestedOneWithoutImageInput
    checkpoint?: CheckpointUncheckedCreateNestedOneWithoutImageInput
    badge?: BadgeUncheckedCreateNestedOneWithoutImageInput
  }

  export type FileCreateOrConnectWithoutContractInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutContractInput, FileUncheckedCreateWithoutContractInput>
  }

  export type UserUpsertWithoutContractInput = {
    update: XOR<UserUpdateWithoutContractInput, UserUncheckedUpdateWithoutContractInput>
    create: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContractInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContractInput, UserUncheckedUpdateWithoutContractInput>
  }

  export type UserUpdateWithoutContractInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
    photo?: FileUpdateOneWithoutUserNestedInput
    participations?: GameSessionUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    participations?: GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutContractInput = {
    update: XOR<GameUpdateWithoutContractInput, GameUncheckedUpdateWithoutContractInput>
    create: XOR<GameCreateWithoutContractInput, GameUncheckedCreateWithoutContractInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutContractInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutContractInput, GameUncheckedUpdateWithoutContractInput>
  }

  export type GameUpdateWithoutContractInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutGameNestedInput
    checkpoints?: CheckpointUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUpdateManyWithoutGameNestedInput
    tags?: GameTagUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    checkpoints?: CheckpointUncheckedUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
    tags?: GameTagUncheckedUpdateManyWithoutGamesNestedInput
    purchases?: PurchasedGamesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type FileUpsertWithoutContractInput = {
    update: XOR<FileUpdateWithoutContractInput, FileUncheckedUpdateWithoutContractInput>
    create: XOR<FileCreateWithoutContractInput, FileUncheckedCreateWithoutContractInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutContractInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutContractInput, FileUncheckedUpdateWithoutContractInput>
  }

  export type FileUpdateWithoutContractInput = {
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPhotoNestedInput
    game?: GameUpdateOneWithoutImageNestedInput
    checkpoint?: CheckpointUpdateOneWithoutImageNestedInput
    badge?: BadgeUpdateOneWithoutImageNestedInput
  }

  export type FileUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    generatedName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPhotoNestedInput
    game?: GameUncheckedUpdateOneWithoutImageNestedInput
    checkpoint?: CheckpointUncheckedUpdateOneWithoutImageNestedInput
    badge?: BadgeUncheckedUpdateOneWithoutImageNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge: BadgeCreateNestedOneWithoutUsersInput
    photo?: FileCreateNestedOneWithoutUserInput
    contract?: ContractCreateNestedManyWithoutUserInput
    participations?: GameSessionCreateNestedManyWithoutParticipantsInput
    purchasedGames?: PurchasedGamesCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
    participations?: GameSessionUncheckedCreateNestedManyWithoutParticipantsInput
    purchasedGames?: PurchasedGamesUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
    photo?: FileUpdateOneWithoutUserNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
    participations?: GameSessionUpdateManyWithoutParticipantsNestedInput
    purchasedGames?: PurchasedGamesUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
    participations?: GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput
    purchasedGames?: PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge: BadgeCreateNestedOneWithoutUsersInput
    photo?: FileCreateNestedOneWithoutUserInput
    contract?: ContractCreateNestedManyWithoutUserInput
    participations?: GameSessionCreateNestedManyWithoutParticipantsInput
    orders?: OrderCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    badgeId: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
    participations?: GameSessionUncheckedCreateNestedManyWithoutParticipantsInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    purchasedGames?: PurchasedGamesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
    photo?: FileUpdateOneWithoutUserNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
    participations?: GameSessionUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
    participations?: GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyBadgeInput = {
    id?: number
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.Role
    isAlive?: boolean
    photoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: number
    coins?: number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateWithoutBadgeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    photo?: FileUpdateOneWithoutUserNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
    participations?: GameSessionUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
    participations?: GameSessionUncheckedUpdateManyWithoutParticipantsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ContractCreateManyUserInput = {
    gameId: number
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    orderUuid?: string
    invoiceId?: number | null
    status?: $Enums.OrderStatus
    gopayId?: number | null
    gatewayUrl?: string | null
    fakturoidInvoiceId: number
    hasInvoice?: boolean
    emailsSent?: boolean
    total: number
    emails: JsonNullValueInput | InputJsonValue
    products: JsonNullValueInput | InputJsonValue
    deliveryInfo: JsonNullValueInput | InputJsonValue
    accessCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasedGamesCreateManyUserInput = {
    gameId: number
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutContractNestedInput
    file?: FileUpdateOneRequiredWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutUserInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyWithoutUserInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionUpdateWithoutParticipantsInput = {
    inviteCode?: StringFieldUpdateOperationsInput | string
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    game?: GameUpdateOneRequiredWithoutGameSessionsNestedInput
    checkpoint?: CheckpointUpdateOneWithoutGameSessionsNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    checkpointId?: NullableIntFieldUpdateOperationsInput | number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameSessionUncheckedUpdateManyWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    checkpointId?: NullableIntFieldUpdateOperationsInput | number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUpdateWithoutUserInput = {
    orderUuid?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    gopayId?: NullableIntFieldUpdateOperationsInput | number | null
    gatewayUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fakturoidInvoiceId?: IntFieldUpdateOperationsInput | number
    hasInvoice?: BoolFieldUpdateOperationsInput | boolean
    emailsSent?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    emails?: JsonNullValueInput | InputJsonValue
    products?: JsonNullValueInput | InputJsonValue
    deliveryInfo?: JsonNullValueInput | InputJsonValue
    accessCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderUuid?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    gopayId?: NullableIntFieldUpdateOperationsInput | number | null
    gatewayUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fakturoidInvoiceId?: IntFieldUpdateOperationsInput | number
    hasInvoice?: BoolFieldUpdateOperationsInput | boolean
    emailsSent?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    emails?: JsonNullValueInput | InputJsonValue
    products?: JsonNullValueInput | InputJsonValue
    deliveryInfo?: JsonNullValueInput | InputJsonValue
    accessCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderUuid?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    gopayId?: NullableIntFieldUpdateOperationsInput | number | null
    gatewayUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fakturoidInvoiceId?: IntFieldUpdateOperationsInput | number
    hasInvoice?: BoolFieldUpdateOperationsInput | boolean
    emailsSent?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    emails?: JsonNullValueInput | InputJsonValue
    products?: JsonNullValueInput | InputJsonValue
    deliveryInfo?: JsonNullValueInput | InputJsonValue
    accessCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedGamesUpdateWithoutUserInput = {
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchasedGamesUncheckedUpdateWithoutUserInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedGamesUncheckedUpdateManyWithoutUserInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckpointCreateManyGameInput = {
    id?: number
    title: string
    description: string
    imageId: number
    mapId: number
    riddle: string
    answer: JsonNullValueInput | InputJsonValue
    gpsCoordinates: string
    reachDescription: string
    maxPoints: number
    pointsPenalty: number
    ordering: number
  }

  export type ContractCreateManyGameInput = {
    userId: number
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSessionCreateManyGameInput = {
    id?: number
    inviteCode: string
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    checkpointId?: number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PurchasedGamesCreateManyGameInput = {
    userId: number
    played?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckpointUpdateWithoutGameInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutCheckpointNestedInput
    gameSessions?: GameSessionUpdateManyWithoutCheckpointNestedInput
    hints?: HintUpdateManyWithoutCheckpointNestedInput
  }

  export type CheckpointUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
    gameSessions?: GameSessionUncheckedUpdateManyWithoutCheckpointNestedInput
    hints?: HintUncheckedUpdateManyWithoutCheckpointNestedInput
  }

  export type CheckpointUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    mapId?: IntFieldUpdateOperationsInput | number
    riddle?: StringFieldUpdateOperationsInput | string
    answer?: JsonNullValueInput | InputJsonValue
    gpsCoordinates?: StringFieldUpdateOperationsInput | string
    reachDescription?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    pointsPenalty?: IntFieldUpdateOperationsInput | number
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type ContractUpdateWithoutGameInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    file?: FileUpdateOneRequiredWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutGameInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyWithoutGameInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionUpdateWithoutGameInput = {
    inviteCode?: StringFieldUpdateOperationsInput | string
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    checkpoint?: CheckpointUpdateOneWithoutGameSessionsNestedInput
    participants?: UserUpdateManyWithoutParticipationsNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    checkpointId?: NullableIntFieldUpdateOperationsInput | number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    participants?: UserUncheckedUpdateManyWithoutParticipationsNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    checkpointId?: NullableIntFieldUpdateOperationsInput | number | null
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameTagUpdateWithoutGamesInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type GameTagUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type GameTagUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type PurchasedGamesUpdateWithoutGameInput = {
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasedGamesNestedInput
  }

  export type PurchasedGamesUncheckedUpdateWithoutGameInput = {
    userId?: IntFieldUpdateOperationsInput | number
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedGamesUncheckedUpdateManyWithoutGameInput = {
    userId?: IntFieldUpdateOperationsInput | number
    played?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    image?: FileUpdateOneRequiredWithoutGameNestedInput
    checkpoints?: CheckpointUpdateManyWithoutGameNestedInput
    contract?: ContractUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUpdateManyWithoutGameNestedInput
    purchases?: PurchasedGamesUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
    checkpoints?: CheckpointUncheckedUpdateManyWithoutGameNestedInput
    contract?: ContractUncheckedUpdateManyWithoutGameNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutGameNestedInput
    purchases?: PurchasedGamesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    difficultness?: EnumGameDifficultyFieldUpdateOperationsInput | $Enums.GameDifficulty
    startingCheckpointId?: IntFieldUpdateOperationsInput | number
    endingCheckpointId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    maxPoints?: IntFieldUpdateOperationsInput | number
  }

  export type GameSessionCreateManyCheckpointInput = {
    id?: number
    inviteCode: string
    gameId: number
    state?: $Enums.GameState
    team: string
    start?: Date | string
    finish?: Date | string | null
    earnedPoints?: number
    duration?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HintCreateManyCheckpointInput = {
    id?: number
    label: string
    ordering: number
  }

  export type GameSessionUpdateWithoutCheckpointInput = {
    inviteCode?: StringFieldUpdateOperationsInput | string
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    game?: GameUpdateOneRequiredWithoutGameSessionsNestedInput
    participants?: UserUpdateManyWithoutParticipationsNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutCheckpointInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    participants?: UserUncheckedUpdateManyWithoutParticipationsNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutCheckpointInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    state?: EnumGameStateFieldUpdateOperationsInput | $Enums.GameState
    team?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    finish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedPoints?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HintUpdateWithoutCheckpointInput = {
    label?: StringFieldUpdateOperationsInput | string
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type HintUncheckedUpdateWithoutCheckpointInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type HintUncheckedUpdateManyWithoutCheckpointInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    ordering?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutParticipationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
    photo?: FileUpdateOneWithoutUserNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    purchasedGames?: PurchasedGamesUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutParticipationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAlive?: BoolFieldUpdateOperationsInput | boolean
    photoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    deliveryInfo?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BadgeCountOutputTypeDefaultArgs instead
     */
    export type BadgeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameCountOutputTypeDefaultArgs instead
     */
    export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameTagCountOutputTypeDefaultArgs instead
     */
    export type GameTagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameTagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckpointCountOutputTypeDefaultArgs instead
     */
    export type CheckpointCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckpointCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameSessionCountOutputTypeDefaultArgs instead
     */
    export type GameSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BadgeDefaultArgs instead
     */
    export type BadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchasedGamesDefaultArgs instead
     */
    export type PurchasedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchasedGamesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameDefaultArgs instead
     */
    export type GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameTagDefaultArgs instead
     */
    export type GameTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckpointDefaultArgs instead
     */
    export type CheckpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckpointDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HintDefaultArgs instead
     */
    export type HintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HintDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameSessionDefaultArgs instead
     */
    export type GameSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>

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