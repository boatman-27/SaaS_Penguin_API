
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model PasswordResets
 * 
 */
export type PasswordResets = $Result.DefaultSelection<Prisma.$PasswordResetsPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model PricingTier
 * 
 */
export type PricingTier = $Result.DefaultSelection<Prisma.$PricingTierPayload>
/**
 * Model Species
 * 
 */
export type Species = $Result.DefaultSelection<Prisma.$SpeciesPayload>
/**
 * Model Distribution
 * 
 */
export type Distribution = $Result.DefaultSelection<Prisma.$DistributionPayload>
/**
 * Model DietItem
 * 
 */
export type DietItem = $Result.DefaultSelection<Prisma.$DietItemPayload>
/**
 * Model Migration
 * 
 */
export type Migration = $Result.DefaultSelection<Prisma.$MigrationPayload>
/**
 * Model Facts
 * 
 */
export type Facts = $Result.DefaultSelection<Prisma.$FactsPayload>
/**
 * Model ApiUsage
 * 
 */
export type ApiUsage = $Result.DefaultSelection<Prisma.$ApiUsagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResets`: Exposes CRUD operations for the **PasswordResets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordResets.findMany()
    * ```
    */
  get passwordResets(): Prisma.PasswordResetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingTier`: Exposes CRUD operations for the **PricingTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingTiers
    * const pricingTiers = await prisma.pricingTier.findMany()
    * ```
    */
  get pricingTier(): Prisma.PricingTierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.species`: Exposes CRUD operations for the **Species** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Species
    * const species = await prisma.species.findMany()
    * ```
    */
  get species(): Prisma.SpeciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distribution`: Exposes CRUD operations for the **Distribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distributions
    * const distributions = await prisma.distribution.findMany()
    * ```
    */
  get distribution(): Prisma.DistributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dietItem`: Exposes CRUD operations for the **DietItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DietItems
    * const dietItems = await prisma.dietItem.findMany()
    * ```
    */
  get dietItem(): Prisma.DietItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.migration`: Exposes CRUD operations for the **Migration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migration.findMany()
    * ```
    */
  get migration(): Prisma.MigrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facts`: Exposes CRUD operations for the **Facts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facts
    * const facts = await prisma.facts.findMany()
    * ```
    */
  get facts(): Prisma.FactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiUsage`: Exposes CRUD operations for the **ApiUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiUsages
    * const apiUsages = await prisma.apiUsage.findMany()
    * ```
    */
  get apiUsage(): Prisma.ApiUsageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Users: 'Users',
    PasswordResets: 'PasswordResets',
    ApiKey: 'ApiKey',
    PricingTier: 'PricingTier',
    Species: 'Species',
    Distribution: 'Distribution',
    DietItem: 'DietItem',
    Migration: 'Migration',
    Facts: 'Facts',
    ApiUsage: 'ApiUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "passwordResets" | "apiKey" | "pricingTier" | "species" | "distribution" | "dietItem" | "migration" | "facts" | "apiUsage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      PasswordResets: {
        payload: Prisma.$PasswordResetsPayload<ExtArgs>
        fields: Prisma.PasswordResetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>
          }
          findMany: {
            args: Prisma.PasswordResetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>[]
          }
          create: {
            args: Prisma.PasswordResetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>
          }
          createMany: {
            args: Prisma.PasswordResetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>
          }
          update: {
            args: Prisma.PasswordResetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetsPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResets>
          }
          groupBy: {
            args: Prisma.PasswordResetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetsCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetsCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      PricingTier: {
        payload: Prisma.$PricingTierPayload<ExtArgs>
        fields: Prisma.PricingTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingTierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingTierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          findFirst: {
            args: Prisma.PricingTierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingTierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          findMany: {
            args: Prisma.PricingTierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>[]
          }
          create: {
            args: Prisma.PricingTierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          createMany: {
            args: Prisma.PricingTierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingTierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>[]
          }
          delete: {
            args: Prisma.PricingTierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          update: {
            args: Prisma.PricingTierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          deleteMany: {
            args: Prisma.PricingTierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingTierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingTierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>[]
          }
          upsert: {
            args: Prisma.PricingTierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          aggregate: {
            args: Prisma.PricingTierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingTier>
          }
          groupBy: {
            args: Prisma.PricingTierGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingTierCountArgs<ExtArgs>
            result: $Utils.Optional<PricingTierCountAggregateOutputType> | number
          }
        }
      }
      Species: {
        payload: Prisma.$SpeciesPayload<ExtArgs>
        fields: Prisma.SpeciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findFirst: {
            args: Prisma.SpeciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findMany: {
            args: Prisma.SpeciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          create: {
            args: Prisma.SpeciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          createMany: {
            args: Prisma.SpeciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          delete: {
            args: Prisma.SpeciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          update: {
            args: Prisma.SpeciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          deleteMany: {
            args: Prisma.SpeciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpeciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          upsert: {
            args: Prisma.SpeciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          aggregate: {
            args: Prisma.SpeciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecies>
          }
          groupBy: {
            args: Prisma.SpeciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeciesCountArgs<ExtArgs>
            result: $Utils.Optional<SpeciesCountAggregateOutputType> | number
          }
        }
      }
      Distribution: {
        payload: Prisma.$DistributionPayload<ExtArgs>
        fields: Prisma.DistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          findFirst: {
            args: Prisma.DistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          findMany: {
            args: Prisma.DistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>[]
          }
          create: {
            args: Prisma.DistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          createMany: {
            args: Prisma.DistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>[]
          }
          delete: {
            args: Prisma.DistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          update: {
            args: Prisma.DistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          deleteMany: {
            args: Prisma.DistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>[]
          }
          upsert: {
            args: Prisma.DistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          aggregate: {
            args: Prisma.DistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistribution>
          }
          groupBy: {
            args: Prisma.DistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributionCountArgs<ExtArgs>
            result: $Utils.Optional<DistributionCountAggregateOutputType> | number
          }
        }
      }
      DietItem: {
        payload: Prisma.$DietItemPayload<ExtArgs>
        fields: Prisma.DietItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DietItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DietItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>
          }
          findFirst: {
            args: Prisma.DietItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DietItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>
          }
          findMany: {
            args: Prisma.DietItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>[]
          }
          create: {
            args: Prisma.DietItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>
          }
          createMany: {
            args: Prisma.DietItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DietItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>[]
          }
          delete: {
            args: Prisma.DietItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>
          }
          update: {
            args: Prisma.DietItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>
          }
          deleteMany: {
            args: Prisma.DietItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DietItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DietItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>[]
          }
          upsert: {
            args: Prisma.DietItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietItemPayload>
          }
          aggregate: {
            args: Prisma.DietItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDietItem>
          }
          groupBy: {
            args: Prisma.DietItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DietItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DietItemCountArgs<ExtArgs>
            result: $Utils.Optional<DietItemCountAggregateOutputType> | number
          }
        }
      }
      Migration: {
        payload: Prisma.$MigrationPayload<ExtArgs>
        fields: Prisma.MigrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MigrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MigrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>
          }
          findFirst: {
            args: Prisma.MigrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MigrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>
          }
          findMany: {
            args: Prisma.MigrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>[]
          }
          create: {
            args: Prisma.MigrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>
          }
          createMany: {
            args: Prisma.MigrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MigrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>[]
          }
          delete: {
            args: Prisma.MigrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>
          }
          update: {
            args: Prisma.MigrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>
          }
          deleteMany: {
            args: Prisma.MigrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MigrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MigrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>[]
          }
          upsert: {
            args: Prisma.MigrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationPayload>
          }
          aggregate: {
            args: Prisma.MigrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigration>
          }
          groupBy: {
            args: Prisma.MigrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MigrationCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationCountAggregateOutputType> | number
          }
        }
      }
      Facts: {
        payload: Prisma.$FactsPayload<ExtArgs>
        fields: Prisma.FactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>
          }
          findFirst: {
            args: Prisma.FactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>
          }
          findMany: {
            args: Prisma.FactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>[]
          }
          create: {
            args: Prisma.FactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>
          }
          createMany: {
            args: Prisma.FactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>[]
          }
          delete: {
            args: Prisma.FactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>
          }
          update: {
            args: Prisma.FactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>
          }
          deleteMany: {
            args: Prisma.FactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>[]
          }
          upsert: {
            args: Prisma.FactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactsPayload>
          }
          aggregate: {
            args: Prisma.FactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacts>
          }
          groupBy: {
            args: Prisma.FactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactsCountArgs<ExtArgs>
            result: $Utils.Optional<FactsCountAggregateOutputType> | number
          }
        }
      }
      ApiUsage: {
        payload: Prisma.$ApiUsagePayload<ExtArgs>
        fields: Prisma.ApiUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          findFirst: {
            args: Prisma.ApiUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          findMany: {
            args: Prisma.ApiUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[]
          }
          create: {
            args: Prisma.ApiUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          createMany: {
            args: Prisma.ApiUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[]
          }
          delete: {
            args: Prisma.ApiUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          update: {
            args: Prisma.ApiUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          deleteMany: {
            args: Prisma.ApiUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[]
          }
          upsert: {
            args: Prisma.ApiUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          aggregate: {
            args: Prisma.ApiUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiUsage>
          }
          groupBy: {
            args: Prisma.ApiUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    passwordResets?: PasswordResetsOmit
    apiKey?: ApiKeyOmit
    pricingTier?: PricingTierOmit
    species?: SpeciesOmit
    distribution?: DistributionOmit
    dietItem?: DietItemOmit
    migration?: MigrationOmit
    facts?: FactsOmit
    apiUsage?: ApiUsageOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    ApiKey: number
    ApiUsage: number
    passwordResets: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ApiKey?: boolean | UsersCountOutputTypeCountApiKeyArgs
    ApiUsage?: boolean | UsersCountOutputTypeCountApiUsageArgs
    passwordResets?: boolean | UsersCountOutputTypeCountPasswordResetsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApiUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetsWhereInput
  }


  /**
   * Count Type SpeciesCountOutputType
   */

  export type SpeciesCountOutputType = {
    distribution: number
    dietItems: number
    migrationPatterns: number
  }

  export type SpeciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distribution?: boolean | SpeciesCountOutputTypeCountDistributionArgs
    dietItems?: boolean | SpeciesCountOutputTypeCountDietItemsArgs
    migrationPatterns?: boolean | SpeciesCountOutputTypeCountMigrationPatternsArgs
  }

  // Custom InputTypes
  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesCountOutputType
     */
    select?: SpeciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeCountDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributionWhereInput
  }

  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeCountDietItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietItemWhereInput
  }

  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeCountMigrationPatternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MigrationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    userId: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    company: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    userId?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    company?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    company?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    company?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ApiKey?: boolean | Users$ApiKeyArgs<ExtArgs>
    ApiUsage?: boolean | Users$ApiUsageArgs<ExtArgs>
    passwordResets?: boolean | Users$passwordResetsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userId?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "passwordHash" | "firstName" | "lastName" | "company" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ApiKey?: boolean | Users$ApiKeyArgs<ExtArgs>
    ApiUsage?: boolean | Users$ApiUsageArgs<ExtArgs>
    passwordResets?: boolean | Users$passwordResetsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      ApiKey: Prisma.$ApiKeyPayload<ExtArgs>[]
      ApiUsage: Prisma.$ApiUsagePayload<ExtArgs>[]
      passwordResets: Prisma.$PasswordResetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      company: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const usersWithUserIdOnly = await prisma.users.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const usersWithUserIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ApiKey<T extends Users$ApiKeyArgs<ExtArgs> = {}>(args?: Subset<T, Users$ApiKeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ApiUsage<T extends Users$ApiUsageArgs<ExtArgs> = {}>(args?: Subset<T, Users$ApiUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResets<T extends Users$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, Users$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly passwordHash: FieldRef<"Users", 'String'>
    readonly firstName: FieldRef<"Users", 'String'>
    readonly lastName: FieldRef<"Users", 'String'>
    readonly company: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.ApiKey
   */
  export type Users$ApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Users.ApiUsage
   */
  export type Users$ApiUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    where?: ApiUsageWhereInput
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    cursor?: ApiUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * Users.passwordResets
   */
  export type Users$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    where?: PasswordResetsWhereInput
    orderBy?: PasswordResetsOrderByWithRelationInput | PasswordResetsOrderByWithRelationInput[]
    cursor?: PasswordResetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetsScalarFieldEnum | PasswordResetsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResets
   */

  export type AggregatePasswordResets = {
    _count: PasswordResetsCountAggregateOutputType | null
    _min: PasswordResetsMinAggregateOutputType | null
    _max: PasswordResetsMaxAggregateOutputType | null
  }

  export type PasswordResetsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetsCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetsMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetsMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetsCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to aggregate.
     */
    where?: PasswordResetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetsOrderByWithRelationInput | PasswordResetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetsMaxAggregateInputType
  }

  export type GetPasswordResetsAggregateType<T extends PasswordResetsAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResets[P]>
      : GetScalarType<T[P], AggregatePasswordResets[P]>
  }




  export type PasswordResetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetsWhereInput
    orderBy?: PasswordResetsOrderByWithAggregationInput | PasswordResetsOrderByWithAggregationInput[]
    by: PasswordResetsScalarFieldEnum[] | PasswordResetsScalarFieldEnum
    having?: PasswordResetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetsCountAggregateInputType | true
    _min?: PasswordResetsMinAggregateInputType
    _max?: PasswordResetsMaxAggregateInputType
  }

  export type PasswordResetsGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: PasswordResetsCountAggregateOutputType | null
    _min: PasswordResetsMinAggregateOutputType | null
    _max: PasswordResetsMaxAggregateOutputType | null
  }

  type GetPasswordResetsGroupByPayload<T extends PasswordResetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetsGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetsGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResets"]>

  export type PasswordResetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResets"]>

  export type PasswordResetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResets"]>

  export type PasswordResetsSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["passwordResets"]>
  export type PasswordResetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PasswordResetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PasswordResetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PasswordResetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResets"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["passwordResets"]>
    composites: {}
  }

  type PasswordResetsGetPayload<S extends boolean | null | undefined | PasswordResetsDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetsPayload, S>

  type PasswordResetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetsCountAggregateInputType | true
    }

  export interface PasswordResetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResets'], meta: { name: 'PasswordResets' } }
    /**
     * Find zero or one PasswordResets that matches the filter.
     * @param {PasswordResetsFindUniqueArgs} args - Arguments to find a PasswordResets
     * @example
     * // Get one PasswordResets
     * const passwordResets = await prisma.passwordResets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetsFindUniqueArgs>(args: SelectSubset<T, PasswordResetsFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetsFindUniqueOrThrowArgs} args - Arguments to find a PasswordResets
     * @example
     * // Get one PasswordResets
     * const passwordResets = await prisma.passwordResets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetsFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetsFindFirstArgs} args - Arguments to find a PasswordResets
     * @example
     * // Get one PasswordResets
     * const passwordResets = await prisma.passwordResets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetsFindFirstArgs>(args?: SelectSubset<T, PasswordResetsFindFirstArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetsFindFirstOrThrowArgs} args - Arguments to find a PasswordResets
     * @example
     * // Get one PasswordResets
     * const passwordResets = await prisma.passwordResets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetsFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordResets.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordResets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetsWithIdOnly = await prisma.passwordResets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetsFindManyArgs>(args?: SelectSubset<T, PasswordResetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResets.
     * @param {PasswordResetsCreateArgs} args - Arguments to create a PasswordResets.
     * @example
     * // Create one PasswordResets
     * const PasswordResets = await prisma.passwordResets.create({
     *   data: {
     *     // ... data to create a PasswordResets
     *   }
     * })
     * 
     */
    create<T extends PasswordResetsCreateArgs>(args: SelectSubset<T, PasswordResetsCreateArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetsCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordResets = await prisma.passwordResets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetsCreateManyArgs>(args?: SelectSubset<T, PasswordResetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetsCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordResets = await prisma.passwordResets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetsWithIdOnly = await prisma.passwordResets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetsCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResets.
     * @param {PasswordResetsDeleteArgs} args - Arguments to delete one PasswordResets.
     * @example
     * // Delete one PasswordResets
     * const PasswordResets = await prisma.passwordResets.delete({
     *   where: {
     *     // ... filter to delete one PasswordResets
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetsDeleteArgs>(args: SelectSubset<T, PasswordResetsDeleteArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResets.
     * @param {PasswordResetsUpdateArgs} args - Arguments to update one PasswordResets.
     * @example
     * // Update one PasswordResets
     * const passwordResets = await prisma.passwordResets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetsUpdateArgs>(args: SelectSubset<T, PasswordResetsUpdateArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetsDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordResets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetsDeleteManyArgs>(args?: SelectSubset<T, PasswordResetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordResets = await prisma.passwordResets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetsUpdateManyArgs>(args: SelectSubset<T, PasswordResetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetsUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordResets = await prisma.passwordResets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetsWithIdOnly = await prisma.passwordResets.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordResetsUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResets.
     * @param {PasswordResetsUpsertArgs} args - Arguments to update or create a PasswordResets.
     * @example
     * // Update or create a PasswordResets
     * const passwordResets = await prisma.passwordResets.upsert({
     *   create: {
     *     // ... data to create a PasswordResets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResets we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetsUpsertArgs>(args: SelectSubset<T, PasswordResetsUpsertArgs<ExtArgs>>): Prisma__PasswordResetsClient<$Result.GetResult<Prisma.$PasswordResetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetsCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordResets.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetsCountArgs>(
      args?: Subset<T, PasswordResetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetsAggregateArgs>(args: Subset<T, PasswordResetsAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetsAggregateType<T>>

    /**
     * Group by PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetsGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetsGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResets model
   */
  readonly fields: PasswordResetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordResets model
   */
  interface PasswordResetsFieldRefs {
    readonly id: FieldRef<"PasswordResets", 'String'>
    readonly userId: FieldRef<"PasswordResets", 'String'>
    readonly token: FieldRef<"PasswordResets", 'String'>
    readonly expiresAt: FieldRef<"PasswordResets", 'DateTime'>
    readonly usedAt: FieldRef<"PasswordResets", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResets findUnique
   */
  export type PasswordResetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where: PasswordResetsWhereUniqueInput
  }

  /**
   * PasswordResets findUniqueOrThrow
   */
  export type PasswordResetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where: PasswordResetsWhereUniqueInput
  }

  /**
   * PasswordResets findFirst
   */
  export type PasswordResetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetsOrderByWithRelationInput | PasswordResetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetsScalarFieldEnum | PasswordResetsScalarFieldEnum[]
  }

  /**
   * PasswordResets findFirstOrThrow
   */
  export type PasswordResetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetsOrderByWithRelationInput | PasswordResetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetsScalarFieldEnum | PasswordResetsScalarFieldEnum[]
  }

  /**
   * PasswordResets findMany
   */
  export type PasswordResetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetsOrderByWithRelationInput | PasswordResetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetsScalarFieldEnum | PasswordResetsScalarFieldEnum[]
  }

  /**
   * PasswordResets create
   */
  export type PasswordResetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResets.
     */
    data: XOR<PasswordResetsCreateInput, PasswordResetsUncheckedCreateInput>
  }

  /**
   * PasswordResets createMany
   */
  export type PasswordResetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetsCreateManyInput | PasswordResetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResets createManyAndReturn
   */
  export type PasswordResetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetsCreateManyInput | PasswordResetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResets update
   */
  export type PasswordResetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResets.
     */
    data: XOR<PasswordResetsUpdateInput, PasswordResetsUncheckedUpdateInput>
    /**
     * Choose, which PasswordResets to update.
     */
    where: PasswordResetsWhereUniqueInput
  }

  /**
   * PasswordResets updateMany
   */
  export type PasswordResetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetsUpdateManyMutationInput, PasswordResetsUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetsWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordResets updateManyAndReturn
   */
  export type PasswordResetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetsUpdateManyMutationInput, PasswordResetsUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetsWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResets upsert
   */
  export type PasswordResetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResets to update in case it exists.
     */
    where: PasswordResetsWhereUniqueInput
    /**
     * In case the PasswordResets found by the `where` argument doesn't exist, create a new PasswordResets with this data.
     */
    create: XOR<PasswordResetsCreateInput, PasswordResetsUncheckedCreateInput>
    /**
     * In case the PasswordResets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetsUpdateInput, PasswordResetsUncheckedUpdateInput>
  }

  /**
   * PasswordResets delete
   */
  export type PasswordResetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
    /**
     * Filter which PasswordResets to delete.
     */
    where: PasswordResetsWhereUniqueInput
  }

  /**
   * PasswordResets deleteMany
   */
  export type PasswordResetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetsWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordResets without action
   */
  export type PasswordResetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResets
     */
    select?: PasswordResetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResets
     */
    omit?: PasswordResetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetsInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyAvgAggregateOutputType = {
    rateLimit: number | null
    usageCount: number | null
  }

  export type ApiKeySumAggregateOutputType = {
    rateLimit: number | null
    usageCount: number | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    keyHash: string | null
    keyLookup: string | null
    name: string | null
    lastUsedAt: Date | null
    createdAt: Date | null
    rateLimit: number | null
    usageCount: number | null
    isActive: boolean | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    keyHash: string | null
    keyLookup: string | null
    name: string | null
    lastUsedAt: Date | null
    createdAt: Date | null
    rateLimit: number | null
    usageCount: number | null
    isActive: boolean | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    userId: number
    keyHash: number
    keyLookup: number
    name: number
    lastUsedAt: number
    createdAt: number
    rateLimit: number
    usageCount: number
    isActive: number
    _all: number
  }


  export type ApiKeyAvgAggregateInputType = {
    rateLimit?: true
    usageCount?: true
  }

  export type ApiKeySumAggregateInputType = {
    rateLimit?: true
    usageCount?: true
  }

  export type ApiKeyMinAggregateInputType = {
    id?: true
    userId?: true
    keyHash?: true
    keyLookup?: true
    name?: true
    lastUsedAt?: true
    createdAt?: true
    rateLimit?: true
    usageCount?: true
    isActive?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    keyHash?: true
    keyLookup?: true
    name?: true
    lastUsedAt?: true
    createdAt?: true
    rateLimit?: true
    usageCount?: true
    isActive?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    userId?: true
    keyHash?: true
    keyLookup?: true
    name?: true
    lastUsedAt?: true
    createdAt?: true
    rateLimit?: true
    usageCount?: true
    isActive?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _avg?: ApiKeyAvgAggregateInputType
    _sum?: ApiKeySumAggregateInputType
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    userId: string
    keyHash: string
    keyLookup: string
    name: string
    lastUsedAt: Date | null
    createdAt: Date
    rateLimit: number
    usageCount: number
    isActive: boolean
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    keyHash?: boolean
    keyLookup?: boolean
    name?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    rateLimit?: boolean
    usageCount?: boolean
    isActive?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    keyHash?: boolean
    keyLookup?: boolean
    name?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    rateLimit?: boolean
    usageCount?: boolean
    isActive?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    keyHash?: boolean
    keyLookup?: boolean
    name?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    rateLimit?: boolean
    usageCount?: boolean
    isActive?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    userId?: boolean
    keyHash?: boolean
    keyLookup?: boolean
    name?: boolean
    lastUsedAt?: boolean
    createdAt?: boolean
    rateLimit?: boolean
    usageCount?: boolean
    isActive?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "keyHash" | "keyLookup" | "name" | "lastUsedAt" | "createdAt" | "rateLimit" | "usageCount" | "isActive", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      keyHash: string
      keyLookup: string
      name: string
      lastUsedAt: Date | null
      createdAt: Date
      rateLimit: number
      usageCount: number
      isActive: boolean
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly keyLookup: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly rateLimit: FieldRef<"ApiKey", 'Int'>
    readonly usageCount: FieldRef<"ApiKey", 'Int'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model PricingTier
   */

  export type AggregatePricingTier = {
    _count: PricingTierCountAggregateOutputType | null
    _avg: PricingTierAvgAggregateOutputType | null
    _sum: PricingTierSumAggregateOutputType | null
    _min: PricingTierMinAggregateOutputType | null
    _max: PricingTierMaxAggregateOutputType | null
  }

  export type PricingTierAvgAggregateOutputType = {
    price: number | null
    requestsPerDay: number | null
  }

  export type PricingTierSumAggregateOutputType = {
    price: number | null
    requestsPerDay: number | null
  }

  export type PricingTierMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    requestsPerDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingTierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    requestsPerDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingTierCountAggregateOutputType = {
    id: number
    name: number
    price: number
    requestsPerDay: number
    features: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingTierAvgAggregateInputType = {
    price?: true
    requestsPerDay?: true
  }

  export type PricingTierSumAggregateInputType = {
    price?: true
    requestsPerDay?: true
  }

  export type PricingTierMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    requestsPerDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingTierMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    requestsPerDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingTierCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    requestsPerDay?: true
    features?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingTier to aggregate.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingTiers
    **/
    _count?: true | PricingTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingTierMaxAggregateInputType
  }

  export type GetPricingTierAggregateType<T extends PricingTierAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingTier[P]>
      : GetScalarType<T[P], AggregatePricingTier[P]>
  }




  export type PricingTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingTierWhereInput
    orderBy?: PricingTierOrderByWithAggregationInput | PricingTierOrderByWithAggregationInput[]
    by: PricingTierScalarFieldEnum[] | PricingTierScalarFieldEnum
    having?: PricingTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingTierCountAggregateInputType | true
    _avg?: PricingTierAvgAggregateInputType
    _sum?: PricingTierSumAggregateInputType
    _min?: PricingTierMinAggregateInputType
    _max?: PricingTierMaxAggregateInputType
  }

  export type PricingTierGroupByOutputType = {
    id: string
    name: string
    price: number
    requestsPerDay: number
    features: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PricingTierCountAggregateOutputType | null
    _avg: PricingTierAvgAggregateOutputType | null
    _sum: PricingTierSumAggregateOutputType | null
    _min: PricingTierMinAggregateOutputType | null
    _max: PricingTierMaxAggregateOutputType | null
  }

  type GetPricingTierGroupByPayload<T extends PricingTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingTierGroupByOutputType[P]>
            : GetScalarType<T[P], PricingTierGroupByOutputType[P]>
        }
      >
    >


  export type PricingTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    requestsPerDay?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingTier"]>

  export type PricingTierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    requestsPerDay?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingTier"]>

  export type PricingTierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    requestsPerDay?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingTier"]>

  export type PricingTierSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    requestsPerDay?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingTierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "requestsPerDay" | "features" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingTier"]>

  export type $PricingTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingTier"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      requestsPerDay: number
      features: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingTier"]>
    composites: {}
  }

  type PricingTierGetPayload<S extends boolean | null | undefined | PricingTierDefaultArgs> = $Result.GetResult<Prisma.$PricingTierPayload, S>

  type PricingTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingTierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingTierCountAggregateInputType | true
    }

  export interface PricingTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingTier'], meta: { name: 'PricingTier' } }
    /**
     * Find zero or one PricingTier that matches the filter.
     * @param {PricingTierFindUniqueArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingTierFindUniqueArgs>(args: SelectSubset<T, PricingTierFindUniqueArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingTier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingTierFindUniqueOrThrowArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingTierFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingTierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindFirstArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingTierFindFirstArgs>(args?: SelectSubset<T, PricingTierFindFirstArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindFirstOrThrowArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingTierFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingTierFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingTiers
     * const pricingTiers = await prisma.pricingTier.findMany()
     * 
     * // Get first 10 PricingTiers
     * const pricingTiers = await prisma.pricingTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingTierWithIdOnly = await prisma.pricingTier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingTierFindManyArgs>(args?: SelectSubset<T, PricingTierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingTier.
     * @param {PricingTierCreateArgs} args - Arguments to create a PricingTier.
     * @example
     * // Create one PricingTier
     * const PricingTier = await prisma.pricingTier.create({
     *   data: {
     *     // ... data to create a PricingTier
     *   }
     * })
     * 
     */
    create<T extends PricingTierCreateArgs>(args: SelectSubset<T, PricingTierCreateArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingTiers.
     * @param {PricingTierCreateManyArgs} args - Arguments to create many PricingTiers.
     * @example
     * // Create many PricingTiers
     * const pricingTier = await prisma.pricingTier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingTierCreateManyArgs>(args?: SelectSubset<T, PricingTierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingTiers and returns the data saved in the database.
     * @param {PricingTierCreateManyAndReturnArgs} args - Arguments to create many PricingTiers.
     * @example
     * // Create many PricingTiers
     * const pricingTier = await prisma.pricingTier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingTiers and only return the `id`
     * const pricingTierWithIdOnly = await prisma.pricingTier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingTierCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingTierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingTier.
     * @param {PricingTierDeleteArgs} args - Arguments to delete one PricingTier.
     * @example
     * // Delete one PricingTier
     * const PricingTier = await prisma.pricingTier.delete({
     *   where: {
     *     // ... filter to delete one PricingTier
     *   }
     * })
     * 
     */
    delete<T extends PricingTierDeleteArgs>(args: SelectSubset<T, PricingTierDeleteArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingTier.
     * @param {PricingTierUpdateArgs} args - Arguments to update one PricingTier.
     * @example
     * // Update one PricingTier
     * const pricingTier = await prisma.pricingTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingTierUpdateArgs>(args: SelectSubset<T, PricingTierUpdateArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingTiers.
     * @param {PricingTierDeleteManyArgs} args - Arguments to filter PricingTiers to delete.
     * @example
     * // Delete a few PricingTiers
     * const { count } = await prisma.pricingTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingTierDeleteManyArgs>(args?: SelectSubset<T, PricingTierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingTiers
     * const pricingTier = await prisma.pricingTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingTierUpdateManyArgs>(args: SelectSubset<T, PricingTierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingTiers and returns the data updated in the database.
     * @param {PricingTierUpdateManyAndReturnArgs} args - Arguments to update many PricingTiers.
     * @example
     * // Update many PricingTiers
     * const pricingTier = await prisma.pricingTier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingTiers and only return the `id`
     * const pricingTierWithIdOnly = await prisma.pricingTier.updateManyAndReturn({
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
    updateManyAndReturn<T extends PricingTierUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingTierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingTier.
     * @param {PricingTierUpsertArgs} args - Arguments to update or create a PricingTier.
     * @example
     * // Update or create a PricingTier
     * const pricingTier = await prisma.pricingTier.upsert({
     *   create: {
     *     // ... data to create a PricingTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingTier we want to update
     *   }
     * })
     */
    upsert<T extends PricingTierUpsertArgs>(args: SelectSubset<T, PricingTierUpsertArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierCountArgs} args - Arguments to filter PricingTiers to count.
     * @example
     * // Count the number of PricingTiers
     * const count = await prisma.pricingTier.count({
     *   where: {
     *     // ... the filter for the PricingTiers we want to count
     *   }
     * })
    **/
    count<T extends PricingTierCountArgs>(
      args?: Subset<T, PricingTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingTierAggregateArgs>(args: Subset<T, PricingTierAggregateArgs>): Prisma.PrismaPromise<GetPricingTierAggregateType<T>>

    /**
     * Group by PricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierGroupByArgs} args - Group by arguments.
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
      T extends PricingTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingTierGroupByArgs['orderBy'] }
        : { orderBy?: PricingTierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingTier model
   */
  readonly fields: PricingTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PricingTier model
   */
  interface PricingTierFieldRefs {
    readonly id: FieldRef<"PricingTier", 'String'>
    readonly name: FieldRef<"PricingTier", 'String'>
    readonly price: FieldRef<"PricingTier", 'Float'>
    readonly requestsPerDay: FieldRef<"PricingTier", 'Int'>
    readonly features: FieldRef<"PricingTier", 'Json'>
    readonly createdAt: FieldRef<"PricingTier", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingTier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingTier findUnique
   */
  export type PricingTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier findUniqueOrThrow
   */
  export type PricingTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier findFirst
   */
  export type PricingTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingTiers.
     */
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }

  /**
   * PricingTier findFirstOrThrow
   */
  export type PricingTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingTiers.
     */
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }

  /**
   * PricingTier findMany
   */
  export type PricingTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * Filter, which PricingTiers to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }

  /**
   * PricingTier create
   */
  export type PricingTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * The data needed to create a PricingTier.
     */
    data: XOR<PricingTierCreateInput, PricingTierUncheckedCreateInput>
  }

  /**
   * PricingTier createMany
   */
  export type PricingTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingTiers.
     */
    data: PricingTierCreateManyInput | PricingTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingTier createManyAndReturn
   */
  export type PricingTierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * The data used to create many PricingTiers.
     */
    data: PricingTierCreateManyInput | PricingTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingTier update
   */
  export type PricingTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * The data needed to update a PricingTier.
     */
    data: XOR<PricingTierUpdateInput, PricingTierUncheckedUpdateInput>
    /**
     * Choose, which PricingTier to update.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier updateMany
   */
  export type PricingTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingTiers.
     */
    data: XOR<PricingTierUpdateManyMutationInput, PricingTierUncheckedUpdateManyInput>
    /**
     * Filter which PricingTiers to update
     */
    where?: PricingTierWhereInput
    /**
     * Limit how many PricingTiers to update.
     */
    limit?: number
  }

  /**
   * PricingTier updateManyAndReturn
   */
  export type PricingTierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * The data used to update PricingTiers.
     */
    data: XOR<PricingTierUpdateManyMutationInput, PricingTierUncheckedUpdateManyInput>
    /**
     * Filter which PricingTiers to update
     */
    where?: PricingTierWhereInput
    /**
     * Limit how many PricingTiers to update.
     */
    limit?: number
  }

  /**
   * PricingTier upsert
   */
  export type PricingTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * The filter to search for the PricingTier to update in case it exists.
     */
    where: PricingTierWhereUniqueInput
    /**
     * In case the PricingTier found by the `where` argument doesn't exist, create a new PricingTier with this data.
     */
    create: XOR<PricingTierCreateInput, PricingTierUncheckedCreateInput>
    /**
     * In case the PricingTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingTierUpdateInput, PricingTierUncheckedUpdateInput>
  }

  /**
   * PricingTier delete
   */
  export type PricingTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
    /**
     * Filter which PricingTier to delete.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier deleteMany
   */
  export type PricingTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingTiers to delete
     */
    where?: PricingTierWhereInput
    /**
     * Limit how many PricingTiers to delete.
     */
    limit?: number
  }

  /**
   * PricingTier without action
   */
  export type PricingTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingTier
     */
    omit?: PricingTierOmit<ExtArgs> | null
  }


  /**
   * Model Species
   */

  export type AggregateSpecies = {
    _count: SpeciesCountAggregateOutputType | null
    _avg: SpeciesAvgAggregateOutputType | null
    _sum: SpeciesSumAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  export type SpeciesAvgAggregateOutputType = {
    weightMale: number | null
    weightFemale: number | null
  }

  export type SpeciesSumAggregateOutputType = {
    weightMale: number | null
    weightFemale: number | null
  }

  export type SpeciesMinAggregateOutputType = {
    id: string | null
    commonName: string | null
    scientificName: string | null
    species: string | null
    weightMale: number | null
    weightFemale: number | null
    nestType: string | null
    favouriteFood: string | null
    conservationStatus: string | null
    identification: string | null
    habits: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeciesMaxAggregateOutputType = {
    id: string | null
    commonName: string | null
    scientificName: string | null
    species: string | null
    weightMale: number | null
    weightFemale: number | null
    nestType: string | null
    favouriteFood: string | null
    conservationStatus: string | null
    identification: string | null
    habits: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeciesCountAggregateOutputType = {
    id: number
    commonName: number
    scientificName: number
    species: number
    weightMale: number
    weightFemale: number
    nestType: number
    favouriteFood: number
    conservationStatus: number
    identification: number
    habits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpeciesAvgAggregateInputType = {
    weightMale?: true
    weightFemale?: true
  }

  export type SpeciesSumAggregateInputType = {
    weightMale?: true
    weightFemale?: true
  }

  export type SpeciesMinAggregateInputType = {
    id?: true
    commonName?: true
    scientificName?: true
    species?: true
    weightMale?: true
    weightFemale?: true
    nestType?: true
    favouriteFood?: true
    conservationStatus?: true
    identification?: true
    habits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeciesMaxAggregateInputType = {
    id?: true
    commonName?: true
    scientificName?: true
    species?: true
    weightMale?: true
    weightFemale?: true
    nestType?: true
    favouriteFood?: true
    conservationStatus?: true
    identification?: true
    habits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeciesCountAggregateInputType = {
    id?: true
    commonName?: true
    scientificName?: true
    species?: true
    weightMale?: true
    weightFemale?: true
    nestType?: true
    favouriteFood?: true
    conservationStatus?: true
    identification?: true
    habits?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpeciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to aggregate.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Species
    **/
    _count?: true | SpeciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeciesMaxAggregateInputType
  }

  export type GetSpeciesAggregateType<T extends SpeciesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecies[P]>
      : GetScalarType<T[P], AggregateSpecies[P]>
  }




  export type SpeciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeciesWhereInput
    orderBy?: SpeciesOrderByWithAggregationInput | SpeciesOrderByWithAggregationInput[]
    by: SpeciesScalarFieldEnum[] | SpeciesScalarFieldEnum
    having?: SpeciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeciesCountAggregateInputType | true
    _avg?: SpeciesAvgAggregateInputType
    _sum?: SpeciesSumAggregateInputType
    _min?: SpeciesMinAggregateInputType
    _max?: SpeciesMaxAggregateInputType
  }

  export type SpeciesGroupByOutputType = {
    id: string
    commonName: string
    scientificName: string
    species: string
    weightMale: number | null
    weightFemale: number | null
    nestType: string | null
    favouriteFood: string | null
    conservationStatus: string | null
    identification: string | null
    habits: string | null
    createdAt: Date
    updatedAt: Date
    _count: SpeciesCountAggregateOutputType | null
    _avg: SpeciesAvgAggregateOutputType | null
    _sum: SpeciesSumAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  type GetSpeciesGroupByPayload<T extends SpeciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
            : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
        }
      >
    >


  export type SpeciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commonName?: boolean
    scientificName?: boolean
    species?: boolean
    weightMale?: boolean
    weightFemale?: boolean
    nestType?: boolean
    favouriteFood?: boolean
    conservationStatus?: boolean
    identification?: boolean
    habits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distribution?: boolean | Species$distributionArgs<ExtArgs>
    dietItems?: boolean | Species$dietItemsArgs<ExtArgs>
    migrationPatterns?: boolean | Species$migrationPatternsArgs<ExtArgs>
    _count?: boolean | SpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commonName?: boolean
    scientificName?: boolean
    species?: boolean
    weightMale?: boolean
    weightFemale?: boolean
    nestType?: boolean
    favouriteFood?: boolean
    conservationStatus?: boolean
    identification?: boolean
    habits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commonName?: boolean
    scientificName?: boolean
    species?: boolean
    weightMale?: boolean
    weightFemale?: boolean
    nestType?: boolean
    favouriteFood?: boolean
    conservationStatus?: boolean
    identification?: boolean
    habits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectScalar = {
    id?: boolean
    commonName?: boolean
    scientificName?: boolean
    species?: boolean
    weightMale?: boolean
    weightFemale?: boolean
    nestType?: boolean
    favouriteFood?: boolean
    conservationStatus?: boolean
    identification?: boolean
    habits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpeciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commonName" | "scientificName" | "species" | "weightMale" | "weightFemale" | "nestType" | "favouriteFood" | "conservationStatus" | "identification" | "habits" | "createdAt" | "updatedAt", ExtArgs["result"]["species"]>
  export type SpeciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distribution?: boolean | Species$distributionArgs<ExtArgs>
    dietItems?: boolean | Species$dietItemsArgs<ExtArgs>
    migrationPatterns?: boolean | Species$migrationPatternsArgs<ExtArgs>
    _count?: boolean | SpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpeciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpeciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpeciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Species"
    objects: {
      distribution: Prisma.$DistributionPayload<ExtArgs>[]
      dietItems: Prisma.$DietItemPayload<ExtArgs>[]
      migrationPatterns: Prisma.$MigrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commonName: string
      scientificName: string
      species: string
      weightMale: number | null
      weightFemale: number | null
      nestType: string | null
      favouriteFood: string | null
      conservationStatus: string | null
      identification: string | null
      habits: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["species"]>
    composites: {}
  }

  type SpeciesGetPayload<S extends boolean | null | undefined | SpeciesDefaultArgs> = $Result.GetResult<Prisma.$SpeciesPayload, S>

  type SpeciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeciesCountAggregateInputType | true
    }

  export interface SpeciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Species'], meta: { name: 'Species' } }
    /**
     * Find zero or one Species that matches the filter.
     * @param {SpeciesFindUniqueArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeciesFindUniqueArgs>(args: SelectSubset<T, SpeciesFindUniqueArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Species that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeciesFindUniqueOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeciesFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeciesFindFirstArgs>(args?: SelectSubset<T, SpeciesFindFirstArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Species that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeciesFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Species
     * const species = await prisma.species.findMany()
     * 
     * // Get first 10 Species
     * const species = await prisma.species.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speciesWithIdOnly = await prisma.species.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeciesFindManyArgs>(args?: SelectSubset<T, SpeciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Species.
     * @param {SpeciesCreateArgs} args - Arguments to create a Species.
     * @example
     * // Create one Species
     * const Species = await prisma.species.create({
     *   data: {
     *     // ... data to create a Species
     *   }
     * })
     * 
     */
    create<T extends SpeciesCreateArgs>(args: SelectSubset<T, SpeciesCreateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Species.
     * @param {SpeciesCreateManyArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const species = await prisma.species.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeciesCreateManyArgs>(args?: SelectSubset<T, SpeciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Species and returns the data saved in the database.
     * @param {SpeciesCreateManyAndReturnArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const species = await prisma.species.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Species and only return the `id`
     * const speciesWithIdOnly = await prisma.species.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeciesCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Species.
     * @param {SpeciesDeleteArgs} args - Arguments to delete one Species.
     * @example
     * // Delete one Species
     * const Species = await prisma.species.delete({
     *   where: {
     *     // ... filter to delete one Species
     *   }
     * })
     * 
     */
    delete<T extends SpeciesDeleteArgs>(args: SelectSubset<T, SpeciesDeleteArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Species.
     * @param {SpeciesUpdateArgs} args - Arguments to update one Species.
     * @example
     * // Update one Species
     * const species = await prisma.species.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeciesUpdateArgs>(args: SelectSubset<T, SpeciesUpdateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Species.
     * @param {SpeciesDeleteManyArgs} args - Arguments to filter Species to delete.
     * @example
     * // Delete a few Species
     * const { count } = await prisma.species.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeciesDeleteManyArgs>(args?: SelectSubset<T, SpeciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Species
     * const species = await prisma.species.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeciesUpdateManyArgs>(args: SelectSubset<T, SpeciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Species and returns the data updated in the database.
     * @param {SpeciesUpdateManyAndReturnArgs} args - Arguments to update many Species.
     * @example
     * // Update many Species
     * const species = await prisma.species.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Species and only return the `id`
     * const speciesWithIdOnly = await prisma.species.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpeciesUpdateManyAndReturnArgs>(args: SelectSubset<T, SpeciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Species.
     * @param {SpeciesUpsertArgs} args - Arguments to update or create a Species.
     * @example
     * // Update or create a Species
     * const species = await prisma.species.upsert({
     *   create: {
     *     // ... data to create a Species
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Species we want to update
     *   }
     * })
     */
    upsert<T extends SpeciesUpsertArgs>(args: SelectSubset<T, SpeciesUpsertArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesCountArgs} args - Arguments to filter Species to count.
     * @example
     * // Count the number of Species
     * const count = await prisma.species.count({
     *   where: {
     *     // ... the filter for the Species we want to count
     *   }
     * })
    **/
    count<T extends SpeciesCountArgs>(
      args?: Subset<T, SpeciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpeciesAggregateArgs>(args: Subset<T, SpeciesAggregateArgs>): Prisma.PrismaPromise<GetSpeciesAggregateType<T>>

    /**
     * Group by Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesGroupByArgs} args - Group by arguments.
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
      T extends SpeciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeciesGroupByArgs['orderBy'] }
        : { orderBy?: SpeciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpeciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Species model
   */
  readonly fields: SpeciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Species.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distribution<T extends Species$distributionArgs<ExtArgs> = {}>(args?: Subset<T, Species$distributionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dietItems<T extends Species$dietItemsArgs<ExtArgs> = {}>(args?: Subset<T, Species$dietItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    migrationPatterns<T extends Species$migrationPatternsArgs<ExtArgs> = {}>(args?: Subset<T, Species$migrationPatternsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Species model
   */
  interface SpeciesFieldRefs {
    readonly id: FieldRef<"Species", 'String'>
    readonly commonName: FieldRef<"Species", 'String'>
    readonly scientificName: FieldRef<"Species", 'String'>
    readonly species: FieldRef<"Species", 'String'>
    readonly weightMale: FieldRef<"Species", 'Float'>
    readonly weightFemale: FieldRef<"Species", 'Float'>
    readonly nestType: FieldRef<"Species", 'String'>
    readonly favouriteFood: FieldRef<"Species", 'String'>
    readonly conservationStatus: FieldRef<"Species", 'String'>
    readonly identification: FieldRef<"Species", 'String'>
    readonly habits: FieldRef<"Species", 'String'>
    readonly createdAt: FieldRef<"Species", 'DateTime'>
    readonly updatedAt: FieldRef<"Species", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Species findUnique
   */
  export type SpeciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findUniqueOrThrow
   */
  export type SpeciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findFirst
   */
  export type SpeciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findFirstOrThrow
   */
  export type SpeciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findMany
   */
  export type SpeciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species create
   */
  export type SpeciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The data needed to create a Species.
     */
    data: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
  }

  /**
   * Species createMany
   */
  export type SpeciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Species.
     */
    data: SpeciesCreateManyInput | SpeciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Species createManyAndReturn
   */
  export type SpeciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * The data used to create many Species.
     */
    data: SpeciesCreateManyInput | SpeciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Species update
   */
  export type SpeciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The data needed to update a Species.
     */
    data: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
    /**
     * Choose, which Species to update.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species updateMany
   */
  export type SpeciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Species.
     */
    data: XOR<SpeciesUpdateManyMutationInput, SpeciesUncheckedUpdateManyInput>
    /**
     * Filter which Species to update
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to update.
     */
    limit?: number
  }

  /**
   * Species updateManyAndReturn
   */
  export type SpeciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * The data used to update Species.
     */
    data: XOR<SpeciesUpdateManyMutationInput, SpeciesUncheckedUpdateManyInput>
    /**
     * Filter which Species to update
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to update.
     */
    limit?: number
  }

  /**
   * Species upsert
   */
  export type SpeciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The filter to search for the Species to update in case it exists.
     */
    where: SpeciesWhereUniqueInput
    /**
     * In case the Species found by the `where` argument doesn't exist, create a new Species with this data.
     */
    create: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
    /**
     * In case the Species was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
  }

  /**
   * Species delete
   */
  export type SpeciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter which Species to delete.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species deleteMany
   */
  export type SpeciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to delete
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to delete.
     */
    limit?: number
  }

  /**
   * Species.distribution
   */
  export type Species$distributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    where?: DistributionWhereInput
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    cursor?: DistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Species.dietItems
   */
  export type Species$dietItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    where?: DietItemWhereInput
    orderBy?: DietItemOrderByWithRelationInput | DietItemOrderByWithRelationInput[]
    cursor?: DietItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietItemScalarFieldEnum | DietItemScalarFieldEnum[]
  }

  /**
   * Species.migrationPatterns
   */
  export type Species$migrationPatternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    where?: MigrationWhereInput
    orderBy?: MigrationOrderByWithRelationInput | MigrationOrderByWithRelationInput[]
    cursor?: MigrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MigrationScalarFieldEnum | MigrationScalarFieldEnum[]
  }

  /**
   * Species without action
   */
  export type SpeciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
  }


  /**
   * Model Distribution
   */

  export type AggregateDistribution = {
    _count: DistributionCountAggregateOutputType | null
    _avg: DistributionAvgAggregateOutputType | null
    _sum: DistributionSumAggregateOutputType | null
    _min: DistributionMinAggregateOutputType | null
    _max: DistributionMaxAggregateOutputType | null
  }

  export type DistributionAvgAggregateOutputType = {
    populationEstimate: number | null
  }

  export type DistributionSumAggregateOutputType = {
    populationEstimate: number | null
  }

  export type DistributionMinAggregateOutputType = {
    id: string | null
    speciesId: string | null
    region: string | null
    location: string | null
    habitat: string | null
    populationEstimate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistributionMaxAggregateOutputType = {
    id: string | null
    speciesId: string | null
    region: string | null
    location: string | null
    habitat: string | null
    populationEstimate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistributionCountAggregateOutputType = {
    id: number
    speciesId: number
    region: number
    location: number
    breedingMonths: number
    habitat: number
    populationEstimate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DistributionAvgAggregateInputType = {
    populationEstimate?: true
  }

  export type DistributionSumAggregateInputType = {
    populationEstimate?: true
  }

  export type DistributionMinAggregateInputType = {
    id?: true
    speciesId?: true
    region?: true
    location?: true
    habitat?: true
    populationEstimate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistributionMaxAggregateInputType = {
    id?: true
    speciesId?: true
    region?: true
    location?: true
    habitat?: true
    populationEstimate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistributionCountAggregateInputType = {
    id?: true
    speciesId?: true
    region?: true
    location?: true
    breedingMonths?: true
    habitat?: true
    populationEstimate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribution to aggregate.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distributions
    **/
    _count?: true | DistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributionMaxAggregateInputType
  }

  export type GetDistributionAggregateType<T extends DistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistribution[P]>
      : GetScalarType<T[P], AggregateDistribution[P]>
  }




  export type DistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributionWhereInput
    orderBy?: DistributionOrderByWithAggregationInput | DistributionOrderByWithAggregationInput[]
    by: DistributionScalarFieldEnum[] | DistributionScalarFieldEnum
    having?: DistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributionCountAggregateInputType | true
    _avg?: DistributionAvgAggregateInputType
    _sum?: DistributionSumAggregateInputType
    _min?: DistributionMinAggregateInputType
    _max?: DistributionMaxAggregateInputType
  }

  export type DistributionGroupByOutputType = {
    id: string
    speciesId: string
    region: string
    location: string
    breedingMonths: JsonValue | null
    habitat: string | null
    populationEstimate: number | null
    createdAt: Date
    updatedAt: Date
    _count: DistributionCountAggregateOutputType | null
    _avg: DistributionAvgAggregateOutputType | null
    _sum: DistributionSumAggregateOutputType | null
    _min: DistributionMinAggregateOutputType | null
    _max: DistributionMaxAggregateOutputType | null
  }

  type GetDistributionGroupByPayload<T extends DistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributionGroupByOutputType[P]>
            : GetScalarType<T[P], DistributionGroupByOutputType[P]>
        }
      >
    >


  export type DistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    region?: boolean
    location?: boolean
    breedingMonths?: boolean
    habitat?: boolean
    populationEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribution"]>

  export type DistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    region?: boolean
    location?: boolean
    breedingMonths?: boolean
    habitat?: boolean
    populationEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribution"]>

  export type DistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    region?: boolean
    location?: boolean
    breedingMonths?: boolean
    habitat?: boolean
    populationEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribution"]>

  export type DistributionSelectScalar = {
    id?: boolean
    speciesId?: boolean
    region?: boolean
    location?: boolean
    breedingMonths?: boolean
    habitat?: boolean
    populationEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "speciesId" | "region" | "location" | "breedingMonths" | "habitat" | "populationEstimate" | "createdAt" | "updatedAt", ExtArgs["result"]["distribution"]>
  export type DistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }
  export type DistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }
  export type DistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }

  export type $DistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distribution"
    objects: {
      species: Prisma.$SpeciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      speciesId: string
      region: string
      location: string
      breedingMonths: Prisma.JsonValue | null
      habitat: string | null
      populationEstimate: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["distribution"]>
    composites: {}
  }

  type DistributionGetPayload<S extends boolean | null | undefined | DistributionDefaultArgs> = $Result.GetResult<Prisma.$DistributionPayload, S>

  type DistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributionCountAggregateInputType | true
    }

  export interface DistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distribution'], meta: { name: 'Distribution' } }
    /**
     * Find zero or one Distribution that matches the filter.
     * @param {DistributionFindUniqueArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributionFindUniqueArgs>(args: SelectSubset<T, DistributionFindUniqueArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributionFindUniqueOrThrowArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionFindFirstArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributionFindFirstArgs>(args?: SelectSubset<T, DistributionFindFirstArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionFindFirstOrThrowArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distributions
     * const distributions = await prisma.distribution.findMany()
     * 
     * // Get first 10 Distributions
     * const distributions = await prisma.distribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributionWithIdOnly = await prisma.distribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributionFindManyArgs>(args?: SelectSubset<T, DistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distribution.
     * @param {DistributionCreateArgs} args - Arguments to create a Distribution.
     * @example
     * // Create one Distribution
     * const Distribution = await prisma.distribution.create({
     *   data: {
     *     // ... data to create a Distribution
     *   }
     * })
     * 
     */
    create<T extends DistributionCreateArgs>(args: SelectSubset<T, DistributionCreateArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distributions.
     * @param {DistributionCreateManyArgs} args - Arguments to create many Distributions.
     * @example
     * // Create many Distributions
     * const distribution = await prisma.distribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributionCreateManyArgs>(args?: SelectSubset<T, DistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distributions and returns the data saved in the database.
     * @param {DistributionCreateManyAndReturnArgs} args - Arguments to create many Distributions.
     * @example
     * // Create many Distributions
     * const distribution = await prisma.distribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distributions and only return the `id`
     * const distributionWithIdOnly = await prisma.distribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distribution.
     * @param {DistributionDeleteArgs} args - Arguments to delete one Distribution.
     * @example
     * // Delete one Distribution
     * const Distribution = await prisma.distribution.delete({
     *   where: {
     *     // ... filter to delete one Distribution
     *   }
     * })
     * 
     */
    delete<T extends DistributionDeleteArgs>(args: SelectSubset<T, DistributionDeleteArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distribution.
     * @param {DistributionUpdateArgs} args - Arguments to update one Distribution.
     * @example
     * // Update one Distribution
     * const distribution = await prisma.distribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributionUpdateArgs>(args: SelectSubset<T, DistributionUpdateArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distributions.
     * @param {DistributionDeleteManyArgs} args - Arguments to filter Distributions to delete.
     * @example
     * // Delete a few Distributions
     * const { count } = await prisma.distribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributionDeleteManyArgs>(args?: SelectSubset<T, DistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distributions
     * const distribution = await prisma.distribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributionUpdateManyArgs>(args: SelectSubset<T, DistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributions and returns the data updated in the database.
     * @param {DistributionUpdateManyAndReturnArgs} args - Arguments to update many Distributions.
     * @example
     * // Update many Distributions
     * const distribution = await prisma.distribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distributions and only return the `id`
     * const distributionWithIdOnly = await prisma.distribution.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distribution.
     * @param {DistributionUpsertArgs} args - Arguments to update or create a Distribution.
     * @example
     * // Update or create a Distribution
     * const distribution = await prisma.distribution.upsert({
     *   create: {
     *     // ... data to create a Distribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distribution we want to update
     *   }
     * })
     */
    upsert<T extends DistributionUpsertArgs>(args: SelectSubset<T, DistributionUpsertArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionCountArgs} args - Arguments to filter Distributions to count.
     * @example
     * // Count the number of Distributions
     * const count = await prisma.distribution.count({
     *   where: {
     *     // ... the filter for the Distributions we want to count
     *   }
     * })
    **/
    count<T extends DistributionCountArgs>(
      args?: Subset<T, DistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistributionAggregateArgs>(args: Subset<T, DistributionAggregateArgs>): Prisma.PrismaPromise<GetDistributionAggregateType<T>>

    /**
     * Group by Distribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionGroupByArgs} args - Group by arguments.
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
      T extends DistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributionGroupByArgs['orderBy'] }
        : { orderBy?: DistributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distribution model
   */
  readonly fields: DistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    species<T extends SpeciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpeciesDefaultArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Distribution model
   */
  interface DistributionFieldRefs {
    readonly id: FieldRef<"Distribution", 'String'>
    readonly speciesId: FieldRef<"Distribution", 'String'>
    readonly region: FieldRef<"Distribution", 'String'>
    readonly location: FieldRef<"Distribution", 'String'>
    readonly breedingMonths: FieldRef<"Distribution", 'Json'>
    readonly habitat: FieldRef<"Distribution", 'String'>
    readonly populationEstimate: FieldRef<"Distribution", 'Int'>
    readonly createdAt: FieldRef<"Distribution", 'DateTime'>
    readonly updatedAt: FieldRef<"Distribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Distribution findUnique
   */
  export type DistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution findUniqueOrThrow
   */
  export type DistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution findFirst
   */
  export type DistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributions.
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributions.
     */
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Distribution findFirstOrThrow
   */
  export type DistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributions.
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributions.
     */
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Distribution findMany
   */
  export type DistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distributions to fetch.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distributions.
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Distribution create
   */
  export type DistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a Distribution.
     */
    data: XOR<DistributionCreateInput, DistributionUncheckedCreateInput>
  }

  /**
   * Distribution createMany
   */
  export type DistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distributions.
     */
    data: DistributionCreateManyInput | DistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distribution createManyAndReturn
   */
  export type DistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * The data used to create many Distributions.
     */
    data: DistributionCreateManyInput | DistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distribution update
   */
  export type DistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a Distribution.
     */
    data: XOR<DistributionUpdateInput, DistributionUncheckedUpdateInput>
    /**
     * Choose, which Distribution to update.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution updateMany
   */
  export type DistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distributions.
     */
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyInput>
    /**
     * Filter which Distributions to update
     */
    where?: DistributionWhereInput
    /**
     * Limit how many Distributions to update.
     */
    limit?: number
  }

  /**
   * Distribution updateManyAndReturn
   */
  export type DistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * The data used to update Distributions.
     */
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyInput>
    /**
     * Filter which Distributions to update
     */
    where?: DistributionWhereInput
    /**
     * Limit how many Distributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distribution upsert
   */
  export type DistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the Distribution to update in case it exists.
     */
    where: DistributionWhereUniqueInput
    /**
     * In case the Distribution found by the `where` argument doesn't exist, create a new Distribution with this data.
     */
    create: XOR<DistributionCreateInput, DistributionUncheckedCreateInput>
    /**
     * In case the Distribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributionUpdateInput, DistributionUncheckedUpdateInput>
  }

  /**
   * Distribution delete
   */
  export type DistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter which Distribution to delete.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution deleteMany
   */
  export type DistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributions to delete
     */
    where?: DistributionWhereInput
    /**
     * Limit how many Distributions to delete.
     */
    limit?: number
  }

  /**
   * Distribution without action
   */
  export type DistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
  }


  /**
   * Model DietItem
   */

  export type AggregateDietItem = {
    _count: DietItemCountAggregateOutputType | null
    _avg: DietItemAvgAggregateOutputType | null
    _sum: DietItemSumAggregateOutputType | null
    _min: DietItemMinAggregateOutputType | null
    _max: DietItemMaxAggregateOutputType | null
  }

  export type DietItemAvgAggregateOutputType = {
    percentage: number | null
  }

  export type DietItemSumAggregateOutputType = {
    percentage: number | null
  }

  export type DietItemMinAggregateOutputType = {
    id: string | null
    speciesId: string | null
    foodType: string | null
    scientificName: string | null
    commonName: string | null
    percentage: number | null
    seasonal: boolean | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DietItemMaxAggregateOutputType = {
    id: string | null
    speciesId: string | null
    foodType: string | null
    scientificName: string | null
    commonName: string | null
    percentage: number | null
    seasonal: boolean | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DietItemCountAggregateOutputType = {
    id: number
    speciesId: number
    foodType: number
    scientificName: number
    commonName: number
    percentage: number
    seasonal: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DietItemAvgAggregateInputType = {
    percentage?: true
  }

  export type DietItemSumAggregateInputType = {
    percentage?: true
  }

  export type DietItemMinAggregateInputType = {
    id?: true
    speciesId?: true
    foodType?: true
    scientificName?: true
    commonName?: true
    percentage?: true
    seasonal?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DietItemMaxAggregateInputType = {
    id?: true
    speciesId?: true
    foodType?: true
    scientificName?: true
    commonName?: true
    percentage?: true
    seasonal?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DietItemCountAggregateInputType = {
    id?: true
    speciesId?: true
    foodType?: true
    scientificName?: true
    commonName?: true
    percentage?: true
    seasonal?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DietItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietItem to aggregate.
     */
    where?: DietItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietItems to fetch.
     */
    orderBy?: DietItemOrderByWithRelationInput | DietItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DietItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DietItems
    **/
    _count?: true | DietItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DietItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DietItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietItemMaxAggregateInputType
  }

  export type GetDietItemAggregateType<T extends DietItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDietItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDietItem[P]>
      : GetScalarType<T[P], AggregateDietItem[P]>
  }




  export type DietItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietItemWhereInput
    orderBy?: DietItemOrderByWithAggregationInput | DietItemOrderByWithAggregationInput[]
    by: DietItemScalarFieldEnum[] | DietItemScalarFieldEnum
    having?: DietItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietItemCountAggregateInputType | true
    _avg?: DietItemAvgAggregateInputType
    _sum?: DietItemSumAggregateInputType
    _min?: DietItemMinAggregateInputType
    _max?: DietItemMaxAggregateInputType
  }

  export type DietItemGroupByOutputType = {
    id: string
    speciesId: string
    foodType: string
    scientificName: string | null
    commonName: string | null
    percentage: number | null
    seasonal: boolean
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: DietItemCountAggregateOutputType | null
    _avg: DietItemAvgAggregateOutputType | null
    _sum: DietItemSumAggregateOutputType | null
    _min: DietItemMinAggregateOutputType | null
    _max: DietItemMaxAggregateOutputType | null
  }

  type GetDietItemGroupByPayload<T extends DietItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietItemGroupByOutputType[P]>
            : GetScalarType<T[P], DietItemGroupByOutputType[P]>
        }
      >
    >


  export type DietItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    foodType?: boolean
    scientificName?: boolean
    commonName?: boolean
    percentage?: boolean
    seasonal?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietItem"]>

  export type DietItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    foodType?: boolean
    scientificName?: boolean
    commonName?: boolean
    percentage?: boolean
    seasonal?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietItem"]>

  export type DietItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    foodType?: boolean
    scientificName?: boolean
    commonName?: boolean
    percentage?: boolean
    seasonal?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietItem"]>

  export type DietItemSelectScalar = {
    id?: boolean
    speciesId?: boolean
    foodType?: boolean
    scientificName?: boolean
    commonName?: boolean
    percentage?: boolean
    seasonal?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DietItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "speciesId" | "foodType" | "scientificName" | "commonName" | "percentage" | "seasonal" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["dietItem"]>
  export type DietItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }
  export type DietItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }
  export type DietItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }

  export type $DietItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DietItem"
    objects: {
      species: Prisma.$SpeciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      speciesId: string
      foodType: string
      scientificName: string | null
      commonName: string | null
      percentage: number | null
      seasonal: boolean
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dietItem"]>
    composites: {}
  }

  type DietItemGetPayload<S extends boolean | null | undefined | DietItemDefaultArgs> = $Result.GetResult<Prisma.$DietItemPayload, S>

  type DietItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DietItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DietItemCountAggregateInputType | true
    }

  export interface DietItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DietItem'], meta: { name: 'DietItem' } }
    /**
     * Find zero or one DietItem that matches the filter.
     * @param {DietItemFindUniqueArgs} args - Arguments to find a DietItem
     * @example
     * // Get one DietItem
     * const dietItem = await prisma.dietItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DietItemFindUniqueArgs>(args: SelectSubset<T, DietItemFindUniqueArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DietItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DietItemFindUniqueOrThrowArgs} args - Arguments to find a DietItem
     * @example
     * // Get one DietItem
     * const dietItem = await prisma.dietItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DietItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DietItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DietItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietItemFindFirstArgs} args - Arguments to find a DietItem
     * @example
     * // Get one DietItem
     * const dietItem = await prisma.dietItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DietItemFindFirstArgs>(args?: SelectSubset<T, DietItemFindFirstArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DietItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietItemFindFirstOrThrowArgs} args - Arguments to find a DietItem
     * @example
     * // Get one DietItem
     * const dietItem = await prisma.dietItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DietItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DietItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DietItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DietItems
     * const dietItems = await prisma.dietItem.findMany()
     * 
     * // Get first 10 DietItems
     * const dietItems = await prisma.dietItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietItemWithIdOnly = await prisma.dietItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DietItemFindManyArgs>(args?: SelectSubset<T, DietItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DietItem.
     * @param {DietItemCreateArgs} args - Arguments to create a DietItem.
     * @example
     * // Create one DietItem
     * const DietItem = await prisma.dietItem.create({
     *   data: {
     *     // ... data to create a DietItem
     *   }
     * })
     * 
     */
    create<T extends DietItemCreateArgs>(args: SelectSubset<T, DietItemCreateArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DietItems.
     * @param {DietItemCreateManyArgs} args - Arguments to create many DietItems.
     * @example
     * // Create many DietItems
     * const dietItem = await prisma.dietItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DietItemCreateManyArgs>(args?: SelectSubset<T, DietItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DietItems and returns the data saved in the database.
     * @param {DietItemCreateManyAndReturnArgs} args - Arguments to create many DietItems.
     * @example
     * // Create many DietItems
     * const dietItem = await prisma.dietItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DietItems and only return the `id`
     * const dietItemWithIdOnly = await prisma.dietItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DietItemCreateManyAndReturnArgs>(args?: SelectSubset<T, DietItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DietItem.
     * @param {DietItemDeleteArgs} args - Arguments to delete one DietItem.
     * @example
     * // Delete one DietItem
     * const DietItem = await prisma.dietItem.delete({
     *   where: {
     *     // ... filter to delete one DietItem
     *   }
     * })
     * 
     */
    delete<T extends DietItemDeleteArgs>(args: SelectSubset<T, DietItemDeleteArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DietItem.
     * @param {DietItemUpdateArgs} args - Arguments to update one DietItem.
     * @example
     * // Update one DietItem
     * const dietItem = await prisma.dietItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DietItemUpdateArgs>(args: SelectSubset<T, DietItemUpdateArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DietItems.
     * @param {DietItemDeleteManyArgs} args - Arguments to filter DietItems to delete.
     * @example
     * // Delete a few DietItems
     * const { count } = await prisma.dietItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DietItemDeleteManyArgs>(args?: SelectSubset<T, DietItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DietItems
     * const dietItem = await prisma.dietItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DietItemUpdateManyArgs>(args: SelectSubset<T, DietItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietItems and returns the data updated in the database.
     * @param {DietItemUpdateManyAndReturnArgs} args - Arguments to update many DietItems.
     * @example
     * // Update many DietItems
     * const dietItem = await prisma.dietItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DietItems and only return the `id`
     * const dietItemWithIdOnly = await prisma.dietItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends DietItemUpdateManyAndReturnArgs>(args: SelectSubset<T, DietItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DietItem.
     * @param {DietItemUpsertArgs} args - Arguments to update or create a DietItem.
     * @example
     * // Update or create a DietItem
     * const dietItem = await prisma.dietItem.upsert({
     *   create: {
     *     // ... data to create a DietItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DietItem we want to update
     *   }
     * })
     */
    upsert<T extends DietItemUpsertArgs>(args: SelectSubset<T, DietItemUpsertArgs<ExtArgs>>): Prisma__DietItemClient<$Result.GetResult<Prisma.$DietItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DietItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietItemCountArgs} args - Arguments to filter DietItems to count.
     * @example
     * // Count the number of DietItems
     * const count = await prisma.dietItem.count({
     *   where: {
     *     // ... the filter for the DietItems we want to count
     *   }
     * })
    **/
    count<T extends DietItemCountArgs>(
      args?: Subset<T, DietItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DietItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DietItemAggregateArgs>(args: Subset<T, DietItemAggregateArgs>): Prisma.PrismaPromise<GetDietItemAggregateType<T>>

    /**
     * Group by DietItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietItemGroupByArgs} args - Group by arguments.
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
      T extends DietItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DietItemGroupByArgs['orderBy'] }
        : { orderBy?: DietItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DietItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DietItem model
   */
  readonly fields: DietItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DietItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DietItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    species<T extends SpeciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpeciesDefaultArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DietItem model
   */
  interface DietItemFieldRefs {
    readonly id: FieldRef<"DietItem", 'String'>
    readonly speciesId: FieldRef<"DietItem", 'String'>
    readonly foodType: FieldRef<"DietItem", 'String'>
    readonly scientificName: FieldRef<"DietItem", 'String'>
    readonly commonName: FieldRef<"DietItem", 'String'>
    readonly percentage: FieldRef<"DietItem", 'Float'>
    readonly seasonal: FieldRef<"DietItem", 'Boolean'>
    readonly location: FieldRef<"DietItem", 'String'>
    readonly createdAt: FieldRef<"DietItem", 'DateTime'>
    readonly updatedAt: FieldRef<"DietItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DietItem findUnique
   */
  export type DietItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * Filter, which DietItem to fetch.
     */
    where: DietItemWhereUniqueInput
  }

  /**
   * DietItem findUniqueOrThrow
   */
  export type DietItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * Filter, which DietItem to fetch.
     */
    where: DietItemWhereUniqueInput
  }

  /**
   * DietItem findFirst
   */
  export type DietItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * Filter, which DietItem to fetch.
     */
    where?: DietItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietItems to fetch.
     */
    orderBy?: DietItemOrderByWithRelationInput | DietItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietItems.
     */
    cursor?: DietItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietItems.
     */
    distinct?: DietItemScalarFieldEnum | DietItemScalarFieldEnum[]
  }

  /**
   * DietItem findFirstOrThrow
   */
  export type DietItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * Filter, which DietItem to fetch.
     */
    where?: DietItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietItems to fetch.
     */
    orderBy?: DietItemOrderByWithRelationInput | DietItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietItems.
     */
    cursor?: DietItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietItems.
     */
    distinct?: DietItemScalarFieldEnum | DietItemScalarFieldEnum[]
  }

  /**
   * DietItem findMany
   */
  export type DietItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * Filter, which DietItems to fetch.
     */
    where?: DietItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietItems to fetch.
     */
    orderBy?: DietItemOrderByWithRelationInput | DietItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DietItems.
     */
    cursor?: DietItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietItems.
     */
    skip?: number
    distinct?: DietItemScalarFieldEnum | DietItemScalarFieldEnum[]
  }

  /**
   * DietItem create
   */
  export type DietItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DietItem.
     */
    data: XOR<DietItemCreateInput, DietItemUncheckedCreateInput>
  }

  /**
   * DietItem createMany
   */
  export type DietItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DietItems.
     */
    data: DietItemCreateManyInput | DietItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DietItem createManyAndReturn
   */
  export type DietItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * The data used to create many DietItems.
     */
    data: DietItemCreateManyInput | DietItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DietItem update
   */
  export type DietItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DietItem.
     */
    data: XOR<DietItemUpdateInput, DietItemUncheckedUpdateInput>
    /**
     * Choose, which DietItem to update.
     */
    where: DietItemWhereUniqueInput
  }

  /**
   * DietItem updateMany
   */
  export type DietItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DietItems.
     */
    data: XOR<DietItemUpdateManyMutationInput, DietItemUncheckedUpdateManyInput>
    /**
     * Filter which DietItems to update
     */
    where?: DietItemWhereInput
    /**
     * Limit how many DietItems to update.
     */
    limit?: number
  }

  /**
   * DietItem updateManyAndReturn
   */
  export type DietItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * The data used to update DietItems.
     */
    data: XOR<DietItemUpdateManyMutationInput, DietItemUncheckedUpdateManyInput>
    /**
     * Filter which DietItems to update
     */
    where?: DietItemWhereInput
    /**
     * Limit how many DietItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DietItem upsert
   */
  export type DietItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DietItem to update in case it exists.
     */
    where: DietItemWhereUniqueInput
    /**
     * In case the DietItem found by the `where` argument doesn't exist, create a new DietItem with this data.
     */
    create: XOR<DietItemCreateInput, DietItemUncheckedCreateInput>
    /**
     * In case the DietItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DietItemUpdateInput, DietItemUncheckedUpdateInput>
  }

  /**
   * DietItem delete
   */
  export type DietItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
    /**
     * Filter which DietItem to delete.
     */
    where: DietItemWhereUniqueInput
  }

  /**
   * DietItem deleteMany
   */
  export type DietItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietItems to delete
     */
    where?: DietItemWhereInput
    /**
     * Limit how many DietItems to delete.
     */
    limit?: number
  }

  /**
   * DietItem without action
   */
  export type DietItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietItem
     */
    select?: DietItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietItem
     */
    omit?: DietItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietItemInclude<ExtArgs> | null
  }


  /**
   * Model Migration
   */

  export type AggregateMigration = {
    _count: MigrationCountAggregateOutputType | null
    _avg: MigrationAvgAggregateOutputType | null
    _sum: MigrationSumAggregateOutputType | null
    _min: MigrationMinAggregateOutputType | null
    _max: MigrationMaxAggregateOutputType | null
  }

  export type MigrationAvgAggregateOutputType = {
    distanceKm: number | null
  }

  export type MigrationSumAggregateOutputType = {
    distanceKm: number | null
  }

  export type MigrationMinAggregateOutputType = {
    id: string | null
    speciesId: string | null
    migrationPeriod: string | null
    fromLocation: string | null
    toLocation: string | null
    distanceKm: number | null
    duration: string | null
    ageGroup: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MigrationMaxAggregateOutputType = {
    id: string | null
    speciesId: string | null
    migrationPeriod: string | null
    fromLocation: string | null
    toLocation: string | null
    distanceKm: number | null
    duration: string | null
    ageGroup: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MigrationCountAggregateOutputType = {
    id: number
    speciesId: number
    migrationPeriod: number
    fromLocation: number
    toLocation: number
    distanceKm: number
    duration: number
    ageGroup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MigrationAvgAggregateInputType = {
    distanceKm?: true
  }

  export type MigrationSumAggregateInputType = {
    distanceKm?: true
  }

  export type MigrationMinAggregateInputType = {
    id?: true
    speciesId?: true
    migrationPeriod?: true
    fromLocation?: true
    toLocation?: true
    distanceKm?: true
    duration?: true
    ageGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MigrationMaxAggregateInputType = {
    id?: true
    speciesId?: true
    migrationPeriod?: true
    fromLocation?: true
    toLocation?: true
    distanceKm?: true
    duration?: true
    ageGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MigrationCountAggregateInputType = {
    id?: true
    speciesId?: true
    migrationPeriod?: true
    fromLocation?: true
    toLocation?: true
    distanceKm?: true
    duration?: true
    ageGroup?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MigrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Migration to aggregate.
     */
    where?: MigrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationOrderByWithRelationInput | MigrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MigrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Migrations
    **/
    _count?: true | MigrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationMaxAggregateInputType
  }

  export type GetMigrationAggregateType<T extends MigrationAggregateArgs> = {
        [P in keyof T & keyof AggregateMigration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigration[P]>
      : GetScalarType<T[P], AggregateMigration[P]>
  }




  export type MigrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MigrationWhereInput
    orderBy?: MigrationOrderByWithAggregationInput | MigrationOrderByWithAggregationInput[]
    by: MigrationScalarFieldEnum[] | MigrationScalarFieldEnum
    having?: MigrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationCountAggregateInputType | true
    _avg?: MigrationAvgAggregateInputType
    _sum?: MigrationSumAggregateInputType
    _min?: MigrationMinAggregateInputType
    _max?: MigrationMaxAggregateInputType
  }

  export type MigrationGroupByOutputType = {
    id: string
    speciesId: string
    migrationPeriod: string
    fromLocation: string
    toLocation: string | null
    distanceKm: number | null
    duration: string | null
    ageGroup: string | null
    createdAt: Date
    updatedAt: Date
    _count: MigrationCountAggregateOutputType | null
    _avg: MigrationAvgAggregateOutputType | null
    _sum: MigrationSumAggregateOutputType | null
    _min: MigrationMinAggregateOutputType | null
    _max: MigrationMaxAggregateOutputType | null
  }

  type GetMigrationGroupByPayload<T extends MigrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationGroupByOutputType[P]>
        }
      >
    >


  export type MigrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    migrationPeriod?: boolean
    fromLocation?: boolean
    toLocation?: boolean
    distanceKm?: boolean
    duration?: boolean
    ageGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["migration"]>

  export type MigrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    migrationPeriod?: boolean
    fromLocation?: boolean
    toLocation?: boolean
    distanceKm?: boolean
    duration?: boolean
    ageGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["migration"]>

  export type MigrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    speciesId?: boolean
    migrationPeriod?: boolean
    fromLocation?: boolean
    toLocation?: boolean
    distanceKm?: boolean
    duration?: boolean
    ageGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["migration"]>

  export type MigrationSelectScalar = {
    id?: boolean
    speciesId?: boolean
    migrationPeriod?: boolean
    fromLocation?: boolean
    toLocation?: boolean
    distanceKm?: boolean
    duration?: boolean
    ageGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MigrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "speciesId" | "migrationPeriod" | "fromLocation" | "toLocation" | "distanceKm" | "duration" | "ageGroup" | "createdAt" | "updatedAt", ExtArgs["result"]["migration"]>
  export type MigrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }
  export type MigrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }
  export type MigrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    species?: boolean | SpeciesDefaultArgs<ExtArgs>
  }

  export type $MigrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Migration"
    objects: {
      species: Prisma.$SpeciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      speciesId: string
      migrationPeriod: string
      fromLocation: string
      toLocation: string | null
      distanceKm: number | null
      duration: string | null
      ageGroup: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["migration"]>
    composites: {}
  }

  type MigrationGetPayload<S extends boolean | null | undefined | MigrationDefaultArgs> = $Result.GetResult<Prisma.$MigrationPayload, S>

  type MigrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MigrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationCountAggregateInputType | true
    }

  export interface MigrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Migration'], meta: { name: 'Migration' } }
    /**
     * Find zero or one Migration that matches the filter.
     * @param {MigrationFindUniqueArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MigrationFindUniqueArgs>(args: SelectSubset<T, MigrationFindUniqueArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MigrationFindUniqueOrThrowArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MigrationFindUniqueOrThrowArgs>(args: SelectSubset<T, MigrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFindFirstArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MigrationFindFirstArgs>(args?: SelectSubset<T, MigrationFindFirstArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFindFirstOrThrowArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MigrationFindFirstOrThrowArgs>(args?: SelectSubset<T, MigrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migration.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationWithIdOnly = await prisma.migration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MigrationFindManyArgs>(args?: SelectSubset<T, MigrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migration.
     * @param {MigrationCreateArgs} args - Arguments to create a Migration.
     * @example
     * // Create one Migration
     * const Migration = await prisma.migration.create({
     *   data: {
     *     // ... data to create a Migration
     *   }
     * })
     * 
     */
    create<T extends MigrationCreateArgs>(args: SelectSubset<T, MigrationCreateArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {MigrationCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migration = await prisma.migration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MigrationCreateManyArgs>(args?: SelectSubset<T, MigrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Migrations and returns the data saved in the database.
     * @param {MigrationCreateManyAndReturnArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migration = await prisma.migration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Migrations and only return the `id`
     * const migrationWithIdOnly = await prisma.migration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MigrationCreateManyAndReturnArgs>(args?: SelectSubset<T, MigrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Migration.
     * @param {MigrationDeleteArgs} args - Arguments to delete one Migration.
     * @example
     * // Delete one Migration
     * const Migration = await prisma.migration.delete({
     *   where: {
     *     // ... filter to delete one Migration
     *   }
     * })
     * 
     */
    delete<T extends MigrationDeleteArgs>(args: SelectSubset<T, MigrationDeleteArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migration.
     * @param {MigrationUpdateArgs} args - Arguments to update one Migration.
     * @example
     * // Update one Migration
     * const migration = await prisma.migration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MigrationUpdateArgs>(args: SelectSubset<T, MigrationUpdateArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {MigrationDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MigrationDeleteManyArgs>(args?: SelectSubset<T, MigrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migration = await prisma.migration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MigrationUpdateManyArgs>(args: SelectSubset<T, MigrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations and returns the data updated in the database.
     * @param {MigrationUpdateManyAndReturnArgs} args - Arguments to update many Migrations.
     * @example
     * // Update many Migrations
     * const migration = await prisma.migration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Migrations and only return the `id`
     * const migrationWithIdOnly = await prisma.migration.updateManyAndReturn({
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
    updateManyAndReturn<T extends MigrationUpdateManyAndReturnArgs>(args: SelectSubset<T, MigrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Migration.
     * @param {MigrationUpsertArgs} args - Arguments to update or create a Migration.
     * @example
     * // Update or create a Migration
     * const migration = await prisma.migration.upsert({
     *   create: {
     *     // ... data to create a Migration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migration we want to update
     *   }
     * })
     */
    upsert<T extends MigrationUpsertArgs>(args: SelectSubset<T, MigrationUpsertArgs<ExtArgs>>): Prisma__MigrationClient<$Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migration.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends MigrationCountArgs>(
      args?: Subset<T, MigrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationAggregateArgs>(args: Subset<T, MigrationAggregateArgs>): Prisma.PrismaPromise<GetMigrationAggregateType<T>>

    /**
     * Group by Migration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationGroupByArgs} args - Group by arguments.
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
      T extends MigrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MigrationGroupByArgs['orderBy'] }
        : { orderBy?: MigrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MigrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Migration model
   */
  readonly fields: MigrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Migration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MigrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    species<T extends SpeciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpeciesDefaultArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Migration model
   */
  interface MigrationFieldRefs {
    readonly id: FieldRef<"Migration", 'String'>
    readonly speciesId: FieldRef<"Migration", 'String'>
    readonly migrationPeriod: FieldRef<"Migration", 'String'>
    readonly fromLocation: FieldRef<"Migration", 'String'>
    readonly toLocation: FieldRef<"Migration", 'String'>
    readonly distanceKm: FieldRef<"Migration", 'Int'>
    readonly duration: FieldRef<"Migration", 'String'>
    readonly ageGroup: FieldRef<"Migration", 'String'>
    readonly createdAt: FieldRef<"Migration", 'DateTime'>
    readonly updatedAt: FieldRef<"Migration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Migration findUnique
   */
  export type MigrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * Filter, which Migration to fetch.
     */
    where: MigrationWhereUniqueInput
  }

  /**
   * Migration findUniqueOrThrow
   */
  export type MigrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * Filter, which Migration to fetch.
     */
    where: MigrationWhereUniqueInput
  }

  /**
   * Migration findFirst
   */
  export type MigrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * Filter, which Migration to fetch.
     */
    where?: MigrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationOrderByWithRelationInput | MigrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Migrations.
     */
    cursor?: MigrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Migrations.
     */
    distinct?: MigrationScalarFieldEnum | MigrationScalarFieldEnum[]
  }

  /**
   * Migration findFirstOrThrow
   */
  export type MigrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * Filter, which Migration to fetch.
     */
    where?: MigrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationOrderByWithRelationInput | MigrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Migrations.
     */
    cursor?: MigrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Migrations.
     */
    distinct?: MigrationScalarFieldEnum | MigrationScalarFieldEnum[]
  }

  /**
   * Migration findMany
   */
  export type MigrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * Filter, which Migrations to fetch.
     */
    where?: MigrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationOrderByWithRelationInput | MigrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Migrations.
     */
    cursor?: MigrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    distinct?: MigrationScalarFieldEnum | MigrationScalarFieldEnum[]
  }

  /**
   * Migration create
   */
  export type MigrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Migration.
     */
    data: XOR<MigrationCreateInput, MigrationUncheckedCreateInput>
  }

  /**
   * Migration createMany
   */
  export type MigrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Migrations.
     */
    data: MigrationCreateManyInput | MigrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Migration createManyAndReturn
   */
  export type MigrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * The data used to create many Migrations.
     */
    data: MigrationCreateManyInput | MigrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Migration update
   */
  export type MigrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Migration.
     */
    data: XOR<MigrationUpdateInput, MigrationUncheckedUpdateInput>
    /**
     * Choose, which Migration to update.
     */
    where: MigrationWhereUniqueInput
  }

  /**
   * Migration updateMany
   */
  export type MigrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Migrations.
     */
    data: XOR<MigrationUpdateManyMutationInput, MigrationUncheckedUpdateManyInput>
    /**
     * Filter which Migrations to update
     */
    where?: MigrationWhereInput
    /**
     * Limit how many Migrations to update.
     */
    limit?: number
  }

  /**
   * Migration updateManyAndReturn
   */
  export type MigrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * The data used to update Migrations.
     */
    data: XOR<MigrationUpdateManyMutationInput, MigrationUncheckedUpdateManyInput>
    /**
     * Filter which Migrations to update
     */
    where?: MigrationWhereInput
    /**
     * Limit how many Migrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Migration upsert
   */
  export type MigrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Migration to update in case it exists.
     */
    where: MigrationWhereUniqueInput
    /**
     * In case the Migration found by the `where` argument doesn't exist, create a new Migration with this data.
     */
    create: XOR<MigrationCreateInput, MigrationUncheckedCreateInput>
    /**
     * In case the Migration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MigrationUpdateInput, MigrationUncheckedUpdateInput>
  }

  /**
   * Migration delete
   */
  export type MigrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
    /**
     * Filter which Migration to delete.
     */
    where: MigrationWhereUniqueInput
  }

  /**
   * Migration deleteMany
   */
  export type MigrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Migrations to delete
     */
    where?: MigrationWhereInput
    /**
     * Limit how many Migrations to delete.
     */
    limit?: number
  }

  /**
   * Migration without action
   */
  export type MigrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: MigrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Migration
     */
    omit?: MigrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MigrationInclude<ExtArgs> | null
  }


  /**
   * Model Facts
   */

  export type AggregateFacts = {
    _count: FactsCountAggregateOutputType | null
    _avg: FactsAvgAggregateOutputType | null
    _sum: FactsSumAggregateOutputType | null
    _min: FactsMinAggregateOutputType | null
    _max: FactsMaxAggregateOutputType | null
  }

  export type FactsAvgAggregateOutputType = {
    id: number | null
  }

  export type FactsSumAggregateOutputType = {
    id: number | null
  }

  export type FactsMinAggregateOutputType = {
    id: number | null
    fact: string | null
    source: string | null
    createdAt: Date | null
  }

  export type FactsMaxAggregateOutputType = {
    id: number | null
    fact: string | null
    source: string | null
    createdAt: Date | null
  }

  export type FactsCountAggregateOutputType = {
    id: number
    fact: number
    source: number
    createdAt: number
    _all: number
  }


  export type FactsAvgAggregateInputType = {
    id?: true
  }

  export type FactsSumAggregateInputType = {
    id?: true
  }

  export type FactsMinAggregateInputType = {
    id?: true
    fact?: true
    source?: true
    createdAt?: true
  }

  export type FactsMaxAggregateInputType = {
    id?: true
    fact?: true
    source?: true
    createdAt?: true
  }

  export type FactsCountAggregateInputType = {
    id?: true
    fact?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type FactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facts to aggregate.
     */
    where?: FactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactsOrderByWithRelationInput | FactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facts
    **/
    _count?: true | FactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactsMaxAggregateInputType
  }

  export type GetFactsAggregateType<T extends FactsAggregateArgs> = {
        [P in keyof T & keyof AggregateFacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacts[P]>
      : GetScalarType<T[P], AggregateFacts[P]>
  }




  export type FactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactsWhereInput
    orderBy?: FactsOrderByWithAggregationInput | FactsOrderByWithAggregationInput[]
    by: FactsScalarFieldEnum[] | FactsScalarFieldEnum
    having?: FactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactsCountAggregateInputType | true
    _avg?: FactsAvgAggregateInputType
    _sum?: FactsSumAggregateInputType
    _min?: FactsMinAggregateInputType
    _max?: FactsMaxAggregateInputType
  }

  export type FactsGroupByOutputType = {
    id: number
    fact: string
    source: string
    createdAt: Date
    _count: FactsCountAggregateOutputType | null
    _avg: FactsAvgAggregateOutputType | null
    _sum: FactsSumAggregateOutputType | null
    _min: FactsMinAggregateOutputType | null
    _max: FactsMaxAggregateOutputType | null
  }

  type GetFactsGroupByPayload<T extends FactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactsGroupByOutputType[P]>
            : GetScalarType<T[P], FactsGroupByOutputType[P]>
        }
      >
    >


  export type FactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fact?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["facts"]>

  export type FactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fact?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["facts"]>

  export type FactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fact?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["facts"]>

  export type FactsSelectScalar = {
    id?: boolean
    fact?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type FactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fact" | "source" | "createdAt", ExtArgs["result"]["facts"]>

  export type $FactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fact: string
      source: string
      createdAt: Date
    }, ExtArgs["result"]["facts"]>
    composites: {}
  }

  type FactsGetPayload<S extends boolean | null | undefined | FactsDefaultArgs> = $Result.GetResult<Prisma.$FactsPayload, S>

  type FactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactsCountAggregateInputType | true
    }

  export interface FactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facts'], meta: { name: 'Facts' } }
    /**
     * Find zero or one Facts that matches the filter.
     * @param {FactsFindUniqueArgs} args - Arguments to find a Facts
     * @example
     * // Get one Facts
     * const facts = await prisma.facts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactsFindUniqueArgs>(args: SelectSubset<T, FactsFindUniqueArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactsFindUniqueOrThrowArgs} args - Arguments to find a Facts
     * @example
     * // Get one Facts
     * const facts = await prisma.facts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactsFindUniqueOrThrowArgs>(args: SelectSubset<T, FactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactsFindFirstArgs} args - Arguments to find a Facts
     * @example
     * // Get one Facts
     * const facts = await prisma.facts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactsFindFirstArgs>(args?: SelectSubset<T, FactsFindFirstArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactsFindFirstOrThrowArgs} args - Arguments to find a Facts
     * @example
     * // Get one Facts
     * const facts = await prisma.facts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactsFindFirstOrThrowArgs>(args?: SelectSubset<T, FactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facts
     * const facts = await prisma.facts.findMany()
     * 
     * // Get first 10 Facts
     * const facts = await prisma.facts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factsWithIdOnly = await prisma.facts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactsFindManyArgs>(args?: SelectSubset<T, FactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facts.
     * @param {FactsCreateArgs} args - Arguments to create a Facts.
     * @example
     * // Create one Facts
     * const Facts = await prisma.facts.create({
     *   data: {
     *     // ... data to create a Facts
     *   }
     * })
     * 
     */
    create<T extends FactsCreateArgs>(args: SelectSubset<T, FactsCreateArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facts.
     * @param {FactsCreateManyArgs} args - Arguments to create many Facts.
     * @example
     * // Create many Facts
     * const facts = await prisma.facts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactsCreateManyArgs>(args?: SelectSubset<T, FactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facts and returns the data saved in the database.
     * @param {FactsCreateManyAndReturnArgs} args - Arguments to create many Facts.
     * @example
     * // Create many Facts
     * const facts = await prisma.facts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facts and only return the `id`
     * const factsWithIdOnly = await prisma.facts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactsCreateManyAndReturnArgs>(args?: SelectSubset<T, FactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facts.
     * @param {FactsDeleteArgs} args - Arguments to delete one Facts.
     * @example
     * // Delete one Facts
     * const Facts = await prisma.facts.delete({
     *   where: {
     *     // ... filter to delete one Facts
     *   }
     * })
     * 
     */
    delete<T extends FactsDeleteArgs>(args: SelectSubset<T, FactsDeleteArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facts.
     * @param {FactsUpdateArgs} args - Arguments to update one Facts.
     * @example
     * // Update one Facts
     * const facts = await prisma.facts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactsUpdateArgs>(args: SelectSubset<T, FactsUpdateArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facts.
     * @param {FactsDeleteManyArgs} args - Arguments to filter Facts to delete.
     * @example
     * // Delete a few Facts
     * const { count } = await prisma.facts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactsDeleteManyArgs>(args?: SelectSubset<T, FactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facts
     * const facts = await prisma.facts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactsUpdateManyArgs>(args: SelectSubset<T, FactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facts and returns the data updated in the database.
     * @param {FactsUpdateManyAndReturnArgs} args - Arguments to update many Facts.
     * @example
     * // Update many Facts
     * const facts = await prisma.facts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facts and only return the `id`
     * const factsWithIdOnly = await prisma.facts.updateManyAndReturn({
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
    updateManyAndReturn<T extends FactsUpdateManyAndReturnArgs>(args: SelectSubset<T, FactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facts.
     * @param {FactsUpsertArgs} args - Arguments to update or create a Facts.
     * @example
     * // Update or create a Facts
     * const facts = await prisma.facts.upsert({
     *   create: {
     *     // ... data to create a Facts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facts we want to update
     *   }
     * })
     */
    upsert<T extends FactsUpsertArgs>(args: SelectSubset<T, FactsUpsertArgs<ExtArgs>>): Prisma__FactsClient<$Result.GetResult<Prisma.$FactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactsCountArgs} args - Arguments to filter Facts to count.
     * @example
     * // Count the number of Facts
     * const count = await prisma.facts.count({
     *   where: {
     *     // ... the filter for the Facts we want to count
     *   }
     * })
    **/
    count<T extends FactsCountArgs>(
      args?: Subset<T, FactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FactsAggregateArgs>(args: Subset<T, FactsAggregateArgs>): Prisma.PrismaPromise<GetFactsAggregateType<T>>

    /**
     * Group by Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactsGroupByArgs} args - Group by arguments.
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
      T extends FactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactsGroupByArgs['orderBy'] }
        : { orderBy?: FactsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facts model
   */
  readonly fields: FactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Facts model
   */
  interface FactsFieldRefs {
    readonly id: FieldRef<"Facts", 'Int'>
    readonly fact: FieldRef<"Facts", 'String'>
    readonly source: FieldRef<"Facts", 'String'>
    readonly createdAt: FieldRef<"Facts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Facts findUnique
   */
  export type FactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * Filter, which Facts to fetch.
     */
    where: FactsWhereUniqueInput
  }

  /**
   * Facts findUniqueOrThrow
   */
  export type FactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * Filter, which Facts to fetch.
     */
    where: FactsWhereUniqueInput
  }

  /**
   * Facts findFirst
   */
  export type FactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * Filter, which Facts to fetch.
     */
    where?: FactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactsOrderByWithRelationInput | FactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facts.
     */
    cursor?: FactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facts.
     */
    distinct?: FactsScalarFieldEnum | FactsScalarFieldEnum[]
  }

  /**
   * Facts findFirstOrThrow
   */
  export type FactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * Filter, which Facts to fetch.
     */
    where?: FactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactsOrderByWithRelationInput | FactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facts.
     */
    cursor?: FactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facts.
     */
    distinct?: FactsScalarFieldEnum | FactsScalarFieldEnum[]
  }

  /**
   * Facts findMany
   */
  export type FactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * Filter, which Facts to fetch.
     */
    where?: FactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactsOrderByWithRelationInput | FactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facts.
     */
    cursor?: FactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    distinct?: FactsScalarFieldEnum | FactsScalarFieldEnum[]
  }

  /**
   * Facts create
   */
  export type FactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * The data needed to create a Facts.
     */
    data: XOR<FactsCreateInput, FactsUncheckedCreateInput>
  }

  /**
   * Facts createMany
   */
  export type FactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facts.
     */
    data: FactsCreateManyInput | FactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facts createManyAndReturn
   */
  export type FactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * The data used to create many Facts.
     */
    data: FactsCreateManyInput | FactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facts update
   */
  export type FactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * The data needed to update a Facts.
     */
    data: XOR<FactsUpdateInput, FactsUncheckedUpdateInput>
    /**
     * Choose, which Facts to update.
     */
    where: FactsWhereUniqueInput
  }

  /**
   * Facts updateMany
   */
  export type FactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facts.
     */
    data: XOR<FactsUpdateManyMutationInput, FactsUncheckedUpdateManyInput>
    /**
     * Filter which Facts to update
     */
    where?: FactsWhereInput
    /**
     * Limit how many Facts to update.
     */
    limit?: number
  }

  /**
   * Facts updateManyAndReturn
   */
  export type FactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * The data used to update Facts.
     */
    data: XOR<FactsUpdateManyMutationInput, FactsUncheckedUpdateManyInput>
    /**
     * Filter which Facts to update
     */
    where?: FactsWhereInput
    /**
     * Limit how many Facts to update.
     */
    limit?: number
  }

  /**
   * Facts upsert
   */
  export type FactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * The filter to search for the Facts to update in case it exists.
     */
    where: FactsWhereUniqueInput
    /**
     * In case the Facts found by the `where` argument doesn't exist, create a new Facts with this data.
     */
    create: XOR<FactsCreateInput, FactsUncheckedCreateInput>
    /**
     * In case the Facts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactsUpdateInput, FactsUncheckedUpdateInput>
  }

  /**
   * Facts delete
   */
  export type FactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
    /**
     * Filter which Facts to delete.
     */
    where: FactsWhereUniqueInput
  }

  /**
   * Facts deleteMany
   */
  export type FactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facts to delete
     */
    where?: FactsWhereInput
    /**
     * Limit how many Facts to delete.
     */
    limit?: number
  }

  /**
   * Facts without action
   */
  export type FactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facts
     */
    select?: FactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facts
     */
    omit?: FactsOmit<ExtArgs> | null
  }


  /**
   * Model ApiUsage
   */

  export type AggregateApiUsage = {
    _count: ApiUsageCountAggregateOutputType | null
    _avg: ApiUsageAvgAggregateOutputType | null
    _sum: ApiUsageSumAggregateOutputType | null
    _min: ApiUsageMinAggregateOutputType | null
    _max: ApiUsageMaxAggregateOutputType | null
  }

  export type ApiUsageAvgAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiUsageSumAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiUsageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    apiKey: string | null
    endpoint: string | null
    method: string | null
    ipAddress: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type ApiUsageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    apiKey: string | null
    endpoint: string | null
    method: string | null
    ipAddress: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type ApiUsageCountAggregateOutputType = {
    id: number
    userId: number
    apiKey: number
    endpoint: number
    method: number
    ipAddress: number
    statusCode: number
    createdAt: number
    _all: number
  }


  export type ApiUsageAvgAggregateInputType = {
    statusCode?: true
  }

  export type ApiUsageSumAggregateInputType = {
    statusCode?: true
  }

  export type ApiUsageMinAggregateInputType = {
    id?: true
    userId?: true
    apiKey?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    statusCode?: true
    createdAt?: true
  }

  export type ApiUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    apiKey?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    statusCode?: true
    createdAt?: true
  }

  export type ApiUsageCountAggregateInputType = {
    id?: true
    userId?: true
    apiKey?: true
    endpoint?: true
    method?: true
    ipAddress?: true
    statusCode?: true
    createdAt?: true
    _all?: true
  }

  export type ApiUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsage to aggregate.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiUsages
    **/
    _count?: true | ApiUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiUsageMaxAggregateInputType
  }

  export type GetApiUsageAggregateType<T extends ApiUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateApiUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiUsage[P]>
      : GetScalarType<T[P], AggregateApiUsage[P]>
  }




  export type ApiUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageWhereInput
    orderBy?: ApiUsageOrderByWithAggregationInput | ApiUsageOrderByWithAggregationInput[]
    by: ApiUsageScalarFieldEnum[] | ApiUsageScalarFieldEnum
    having?: ApiUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiUsageCountAggregateInputType | true
    _avg?: ApiUsageAvgAggregateInputType
    _sum?: ApiUsageSumAggregateInputType
    _min?: ApiUsageMinAggregateInputType
    _max?: ApiUsageMaxAggregateInputType
  }

  export type ApiUsageGroupByOutputType = {
    id: string
    userId: string
    apiKey: string
    endpoint: string
    method: string
    ipAddress: string | null
    statusCode: number
    createdAt: Date
    _count: ApiUsageCountAggregateOutputType | null
    _avg: ApiUsageAvgAggregateOutputType | null
    _sum: ApiUsageSumAggregateOutputType | null
    _min: ApiUsageMinAggregateOutputType | null
    _max: ApiUsageMaxAggregateOutputType | null
  }

  type GetApiUsageGroupByPayload<T extends ApiUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ApiUsageGroupByOutputType[P]>
        }
      >
    >


  export type ApiUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    statusCode?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsage"]>

  export type ApiUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    statusCode?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsage"]>

  export type ApiUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    statusCode?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsage"]>

  export type ApiUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    apiKey?: boolean
    endpoint?: boolean
    method?: boolean
    ipAddress?: boolean
    statusCode?: boolean
    createdAt?: boolean
  }

  export type ApiUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "apiKey" | "endpoint" | "method" | "ipAddress" | "statusCode" | "createdAt", ExtArgs["result"]["apiUsage"]>
  export type ApiUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ApiUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ApiUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ApiUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiUsage"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      apiKey: string
      endpoint: string
      method: string
      ipAddress: string | null
      statusCode: number
      createdAt: Date
    }, ExtArgs["result"]["apiUsage"]>
    composites: {}
  }

  type ApiUsageGetPayload<S extends boolean | null | undefined | ApiUsageDefaultArgs> = $Result.GetResult<Prisma.$ApiUsagePayload, S>

  type ApiUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiUsageCountAggregateInputType | true
    }

  export interface ApiUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiUsage'], meta: { name: 'ApiUsage' } }
    /**
     * Find zero or one ApiUsage that matches the filter.
     * @param {ApiUsageFindUniqueArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiUsageFindUniqueArgs>(args: SelectSubset<T, ApiUsageFindUniqueArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiUsageFindUniqueOrThrowArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindFirstArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiUsageFindFirstArgs>(args?: SelectSubset<T, ApiUsageFindFirstArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindFirstOrThrowArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiUsages
     * const apiUsages = await prisma.apiUsage.findMany()
     * 
     * // Get first 10 ApiUsages
     * const apiUsages = await prisma.apiUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiUsageFindManyArgs>(args?: SelectSubset<T, ApiUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiUsage.
     * @param {ApiUsageCreateArgs} args - Arguments to create a ApiUsage.
     * @example
     * // Create one ApiUsage
     * const ApiUsage = await prisma.apiUsage.create({
     *   data: {
     *     // ... data to create a ApiUsage
     *   }
     * })
     * 
     */
    create<T extends ApiUsageCreateArgs>(args: SelectSubset<T, ApiUsageCreateArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiUsages.
     * @param {ApiUsageCreateManyArgs} args - Arguments to create many ApiUsages.
     * @example
     * // Create many ApiUsages
     * const apiUsage = await prisma.apiUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiUsageCreateManyArgs>(args?: SelectSubset<T, ApiUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiUsages and returns the data saved in the database.
     * @param {ApiUsageCreateManyAndReturnArgs} args - Arguments to create many ApiUsages.
     * @example
     * // Create many ApiUsages
     * const apiUsage = await prisma.apiUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiUsages and only return the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiUsage.
     * @param {ApiUsageDeleteArgs} args - Arguments to delete one ApiUsage.
     * @example
     * // Delete one ApiUsage
     * const ApiUsage = await prisma.apiUsage.delete({
     *   where: {
     *     // ... filter to delete one ApiUsage
     *   }
     * })
     * 
     */
    delete<T extends ApiUsageDeleteArgs>(args: SelectSubset<T, ApiUsageDeleteArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiUsage.
     * @param {ApiUsageUpdateArgs} args - Arguments to update one ApiUsage.
     * @example
     * // Update one ApiUsage
     * const apiUsage = await prisma.apiUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUsageUpdateArgs>(args: SelectSubset<T, ApiUsageUpdateArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiUsages.
     * @param {ApiUsageDeleteManyArgs} args - Arguments to filter ApiUsages to delete.
     * @example
     * // Delete a few ApiUsages
     * const { count } = await prisma.apiUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiUsageDeleteManyArgs>(args?: SelectSubset<T, ApiUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiUsages
     * const apiUsage = await prisma.apiUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUsageUpdateManyArgs>(args: SelectSubset<T, ApiUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsages and returns the data updated in the database.
     * @param {ApiUsageUpdateManyAndReturnArgs} args - Arguments to update many ApiUsages.
     * @example
     * // Update many ApiUsages
     * const apiUsage = await prisma.apiUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiUsages and only return the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiUsage.
     * @param {ApiUsageUpsertArgs} args - Arguments to update or create a ApiUsage.
     * @example
     * // Update or create a ApiUsage
     * const apiUsage = await prisma.apiUsage.upsert({
     *   create: {
     *     // ... data to create a ApiUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiUsage we want to update
     *   }
     * })
     */
    upsert<T extends ApiUsageUpsertArgs>(args: SelectSubset<T, ApiUsageUpsertArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageCountArgs} args - Arguments to filter ApiUsages to count.
     * @example
     * // Count the number of ApiUsages
     * const count = await prisma.apiUsage.count({
     *   where: {
     *     // ... the filter for the ApiUsages we want to count
     *   }
     * })
    **/
    count<T extends ApiUsageCountArgs>(
      args?: Subset<T, ApiUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiUsageAggregateArgs>(args: Subset<T, ApiUsageAggregateArgs>): Prisma.PrismaPromise<GetApiUsageAggregateType<T>>

    /**
     * Group by ApiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageGroupByArgs} args - Group by arguments.
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
      T extends ApiUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiUsageGroupByArgs['orderBy'] }
        : { orderBy?: ApiUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiUsage model
   */
  readonly fields: ApiUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiUsage model
   */
  interface ApiUsageFieldRefs {
    readonly id: FieldRef<"ApiUsage", 'String'>
    readonly userId: FieldRef<"ApiUsage", 'String'>
    readonly apiKey: FieldRef<"ApiUsage", 'String'>
    readonly endpoint: FieldRef<"ApiUsage", 'String'>
    readonly method: FieldRef<"ApiUsage", 'String'>
    readonly ipAddress: FieldRef<"ApiUsage", 'String'>
    readonly statusCode: FieldRef<"ApiUsage", 'Int'>
    readonly createdAt: FieldRef<"ApiUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiUsage findUnique
   */
  export type ApiUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage findUniqueOrThrow
   */
  export type ApiUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage findFirst
   */
  export type ApiUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsages.
     */
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * ApiUsage findFirstOrThrow
   */
  export type ApiUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsages.
     */
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * ApiUsage findMany
   */
  export type ApiUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsages to fetch.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * ApiUsage create
   */
  export type ApiUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiUsage.
     */
    data: XOR<ApiUsageCreateInput, ApiUsageUncheckedCreateInput>
  }

  /**
   * ApiUsage createMany
   */
  export type ApiUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiUsages.
     */
    data: ApiUsageCreateManyInput | ApiUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiUsage createManyAndReturn
   */
  export type ApiUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ApiUsages.
     */
    data: ApiUsageCreateManyInput | ApiUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsage update
   */
  export type ApiUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiUsage.
     */
    data: XOR<ApiUsageUpdateInput, ApiUsageUncheckedUpdateInput>
    /**
     * Choose, which ApiUsage to update.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage updateMany
   */
  export type ApiUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiUsages.
     */
    data: XOR<ApiUsageUpdateManyMutationInput, ApiUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsages to update
     */
    where?: ApiUsageWhereInput
    /**
     * Limit how many ApiUsages to update.
     */
    limit?: number
  }

  /**
   * ApiUsage updateManyAndReturn
   */
  export type ApiUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * The data used to update ApiUsages.
     */
    data: XOR<ApiUsageUpdateManyMutationInput, ApiUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsages to update
     */
    where?: ApiUsageWhereInput
    /**
     * Limit how many ApiUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsage upsert
   */
  export type ApiUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiUsage to update in case it exists.
     */
    where: ApiUsageWhereUniqueInput
    /**
     * In case the ApiUsage found by the `where` argument doesn't exist, create a new ApiUsage with this data.
     */
    create: XOR<ApiUsageCreateInput, ApiUsageUncheckedCreateInput>
    /**
     * In case the ApiUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUsageUpdateInput, ApiUsageUncheckedUpdateInput>
  }

  /**
   * ApiUsage delete
   */
  export type ApiUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter which ApiUsage to delete.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage deleteMany
   */
  export type ApiUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsages to delete
     */
    where?: ApiUsageWhereInput
    /**
     * Limit how many ApiUsages to delete.
     */
    limit?: number
  }

  /**
   * ApiUsage without action
   */
  export type ApiUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    company: 'company',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PasswordResetsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetsScalarFieldEnum = (typeof PasswordResetsScalarFieldEnum)[keyof typeof PasswordResetsScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    keyHash: 'keyHash',
    keyLookup: 'keyLookup',
    name: 'name',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt',
    rateLimit: 'rateLimit',
    usageCount: 'usageCount',
    isActive: 'isActive'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const PricingTierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    requestsPerDay: 'requestsPerDay',
    features: 'features',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingTierScalarFieldEnum = (typeof PricingTierScalarFieldEnum)[keyof typeof PricingTierScalarFieldEnum]


  export const SpeciesScalarFieldEnum: {
    id: 'id',
    commonName: 'commonName',
    scientificName: 'scientificName',
    species: 'species',
    weightMale: 'weightMale',
    weightFemale: 'weightFemale',
    nestType: 'nestType',
    favouriteFood: 'favouriteFood',
    conservationStatus: 'conservationStatus',
    identification: 'identification',
    habits: 'habits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpeciesScalarFieldEnum = (typeof SpeciesScalarFieldEnum)[keyof typeof SpeciesScalarFieldEnum]


  export const DistributionScalarFieldEnum: {
    id: 'id',
    speciesId: 'speciesId',
    region: 'region',
    location: 'location',
    breedingMonths: 'breedingMonths',
    habitat: 'habitat',
    populationEstimate: 'populationEstimate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DistributionScalarFieldEnum = (typeof DistributionScalarFieldEnum)[keyof typeof DistributionScalarFieldEnum]


  export const DietItemScalarFieldEnum: {
    id: 'id',
    speciesId: 'speciesId',
    foodType: 'foodType',
    scientificName: 'scientificName',
    commonName: 'commonName',
    percentage: 'percentage',
    seasonal: 'seasonal',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DietItemScalarFieldEnum = (typeof DietItemScalarFieldEnum)[keyof typeof DietItemScalarFieldEnum]


  export const MigrationScalarFieldEnum: {
    id: 'id',
    speciesId: 'speciesId',
    migrationPeriod: 'migrationPeriod',
    fromLocation: 'fromLocation',
    toLocation: 'toLocation',
    distanceKm: 'distanceKm',
    duration: 'duration',
    ageGroup: 'ageGroup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MigrationScalarFieldEnum = (typeof MigrationScalarFieldEnum)[keyof typeof MigrationScalarFieldEnum]


  export const FactsScalarFieldEnum: {
    id: 'id',
    fact: 'fact',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type FactsScalarFieldEnum = (typeof FactsScalarFieldEnum)[keyof typeof FactsScalarFieldEnum]


  export const ApiUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    apiKey: 'apiKey',
    endpoint: 'endpoint',
    method: 'method',
    ipAddress: 'ipAddress',
    statusCode: 'statusCode',
    createdAt: 'createdAt'
  };

  export type ApiUsageScalarFieldEnum = (typeof ApiUsageScalarFieldEnum)[keyof typeof ApiUsageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    company?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    ApiKey?: ApiKeyListRelationFilter
    ApiUsage?: ApiUsageListRelationFilter
    passwordResets?: PasswordResetsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ApiKey?: ApiKeyOrderByRelationAggregateInput
    ApiUsage?: ApiUsageOrderByRelationAggregateInput
    passwordResets?: PasswordResetsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    passwordHash?: StringFilter<"Users"> | string
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    company?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    ApiKey?: ApiKeyListRelationFilter
    ApiUsage?: ApiUsageListRelationFilter
    passwordResets?: PasswordResetsListRelationFilter
  }, "userId" | "email">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    passwordHash?: StringWithAggregatesFilter<"Users"> | string
    firstName?: StringWithAggregatesFilter<"Users"> | string
    lastName?: StringWithAggregatesFilter<"Users"> | string
    company?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type PasswordResetsWhereInput = {
    AND?: PasswordResetsWhereInput | PasswordResetsWhereInput[]
    OR?: PasswordResetsWhereInput[]
    NOT?: PasswordResetsWhereInput | PasswordResetsWhereInput[]
    id?: StringFilter<"PasswordResets"> | string
    userId?: StringFilter<"PasswordResets"> | string
    token?: StringFilter<"PasswordResets"> | string
    expiresAt?: DateTimeFilter<"PasswordResets"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResets"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResets"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PasswordResetsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type PasswordResetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetsWhereInput | PasswordResetsWhereInput[]
    OR?: PasswordResetsWhereInput[]
    NOT?: PasswordResetsWhereInput | PasswordResetsWhereInput[]
    userId?: StringFilter<"PasswordResets"> | string
    expiresAt?: DateTimeFilter<"PasswordResets"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResets"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResets"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "token">

  export type PasswordResetsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetsCountOrderByAggregateInput
    _max?: PasswordResetsMaxOrderByAggregateInput
    _min?: PasswordResetsMinOrderByAggregateInput
  }

  export type PasswordResetsScalarWhereWithAggregatesInput = {
    AND?: PasswordResetsScalarWhereWithAggregatesInput | PasswordResetsScalarWhereWithAggregatesInput[]
    OR?: PasswordResetsScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetsScalarWhereWithAggregatesInput | PasswordResetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResets"> | string
    userId?: StringWithAggregatesFilter<"PasswordResets"> | string
    token?: StringWithAggregatesFilter<"PasswordResets"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResets"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResets"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResets"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    keyLookup?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    rateLimit?: IntFilter<"ApiKey"> | number
    usageCount?: IntFilter<"ApiKey"> | number
    isActive?: BoolFilter<"ApiKey"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    keyHash?: SortOrder
    keyLookup?: SortOrder
    name?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rateLimit?: SortOrder
    usageCount?: SortOrder
    isActive?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    keyLookup?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    userId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    rateLimit?: IntFilter<"ApiKey"> | number
    usageCount?: IntFilter<"ApiKey"> | number
    isActive?: BoolFilter<"ApiKey"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "keyHash" | "keyLookup">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    keyHash?: SortOrder
    keyLookup?: SortOrder
    name?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rateLimit?: SortOrder
    usageCount?: SortOrder
    isActive?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _avg?: ApiKeyAvgOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
    _sum?: ApiKeySumOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    keyLookup?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    rateLimit?: IntWithAggregatesFilter<"ApiKey"> | number
    usageCount?: IntWithAggregatesFilter<"ApiKey"> | number
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
  }

  export type PricingTierWhereInput = {
    AND?: PricingTierWhereInput | PricingTierWhereInput[]
    OR?: PricingTierWhereInput[]
    NOT?: PricingTierWhereInput | PricingTierWhereInput[]
    id?: StringFilter<"PricingTier"> | string
    name?: StringFilter<"PricingTier"> | string
    price?: FloatFilter<"PricingTier"> | number
    requestsPerDay?: IntFilter<"PricingTier"> | number
    features?: JsonFilter<"PricingTier">
    createdAt?: DateTimeFilter<"PricingTier"> | Date | string
    updatedAt?: DateTimeFilter<"PricingTier"> | Date | string
  }

  export type PricingTierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    requestsPerDay?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingTierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PricingTierWhereInput | PricingTierWhereInput[]
    OR?: PricingTierWhereInput[]
    NOT?: PricingTierWhereInput | PricingTierWhereInput[]
    price?: FloatFilter<"PricingTier"> | number
    requestsPerDay?: IntFilter<"PricingTier"> | number
    features?: JsonFilter<"PricingTier">
    createdAt?: DateTimeFilter<"PricingTier"> | Date | string
    updatedAt?: DateTimeFilter<"PricingTier"> | Date | string
  }, "id" | "name">

  export type PricingTierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    requestsPerDay?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingTierCountOrderByAggregateInput
    _avg?: PricingTierAvgOrderByAggregateInput
    _max?: PricingTierMaxOrderByAggregateInput
    _min?: PricingTierMinOrderByAggregateInput
    _sum?: PricingTierSumOrderByAggregateInput
  }

  export type PricingTierScalarWhereWithAggregatesInput = {
    AND?: PricingTierScalarWhereWithAggregatesInput | PricingTierScalarWhereWithAggregatesInput[]
    OR?: PricingTierScalarWhereWithAggregatesInput[]
    NOT?: PricingTierScalarWhereWithAggregatesInput | PricingTierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingTier"> | string
    name?: StringWithAggregatesFilter<"PricingTier"> | string
    price?: FloatWithAggregatesFilter<"PricingTier"> | number
    requestsPerDay?: IntWithAggregatesFilter<"PricingTier"> | number
    features?: JsonWithAggregatesFilter<"PricingTier">
    createdAt?: DateTimeWithAggregatesFilter<"PricingTier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingTier"> | Date | string
  }

  export type SpeciesWhereInput = {
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    id?: StringFilter<"Species"> | string
    commonName?: StringFilter<"Species"> | string
    scientificName?: StringFilter<"Species"> | string
    species?: StringFilter<"Species"> | string
    weightMale?: FloatNullableFilter<"Species"> | number | null
    weightFemale?: FloatNullableFilter<"Species"> | number | null
    nestType?: StringNullableFilter<"Species"> | string | null
    favouriteFood?: StringNullableFilter<"Species"> | string | null
    conservationStatus?: StringNullableFilter<"Species"> | string | null
    identification?: StringNullableFilter<"Species"> | string | null
    habits?: StringNullableFilter<"Species"> | string | null
    createdAt?: DateTimeFilter<"Species"> | Date | string
    updatedAt?: DateTimeFilter<"Species"> | Date | string
    distribution?: DistributionListRelationFilter
    dietItems?: DietItemListRelationFilter
    migrationPatterns?: MigrationListRelationFilter
  }

  export type SpeciesOrderByWithRelationInput = {
    id?: SortOrder
    commonName?: SortOrder
    scientificName?: SortOrder
    species?: SortOrder
    weightMale?: SortOrderInput | SortOrder
    weightFemale?: SortOrderInput | SortOrder
    nestType?: SortOrderInput | SortOrder
    favouriteFood?: SortOrderInput | SortOrder
    conservationStatus?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    habits?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distribution?: DistributionOrderByRelationAggregateInput
    dietItems?: DietItemOrderByRelationAggregateInput
    migrationPatterns?: MigrationOrderByRelationAggregateInput
  }

  export type SpeciesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commonName?: string
    scientificName?: string
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    species?: StringFilter<"Species"> | string
    weightMale?: FloatNullableFilter<"Species"> | number | null
    weightFemale?: FloatNullableFilter<"Species"> | number | null
    nestType?: StringNullableFilter<"Species"> | string | null
    favouriteFood?: StringNullableFilter<"Species"> | string | null
    conservationStatus?: StringNullableFilter<"Species"> | string | null
    identification?: StringNullableFilter<"Species"> | string | null
    habits?: StringNullableFilter<"Species"> | string | null
    createdAt?: DateTimeFilter<"Species"> | Date | string
    updatedAt?: DateTimeFilter<"Species"> | Date | string
    distribution?: DistributionListRelationFilter
    dietItems?: DietItemListRelationFilter
    migrationPatterns?: MigrationListRelationFilter
  }, "id" | "commonName" | "scientificName">

  export type SpeciesOrderByWithAggregationInput = {
    id?: SortOrder
    commonName?: SortOrder
    scientificName?: SortOrder
    species?: SortOrder
    weightMale?: SortOrderInput | SortOrder
    weightFemale?: SortOrderInput | SortOrder
    nestType?: SortOrderInput | SortOrder
    favouriteFood?: SortOrderInput | SortOrder
    conservationStatus?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    habits?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpeciesCountOrderByAggregateInput
    _avg?: SpeciesAvgOrderByAggregateInput
    _max?: SpeciesMaxOrderByAggregateInput
    _min?: SpeciesMinOrderByAggregateInput
    _sum?: SpeciesSumOrderByAggregateInput
  }

  export type SpeciesScalarWhereWithAggregatesInput = {
    AND?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    OR?: SpeciesScalarWhereWithAggregatesInput[]
    NOT?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Species"> | string
    commonName?: StringWithAggregatesFilter<"Species"> | string
    scientificName?: StringWithAggregatesFilter<"Species"> | string
    species?: StringWithAggregatesFilter<"Species"> | string
    weightMale?: FloatNullableWithAggregatesFilter<"Species"> | number | null
    weightFemale?: FloatNullableWithAggregatesFilter<"Species"> | number | null
    nestType?: StringNullableWithAggregatesFilter<"Species"> | string | null
    favouriteFood?: StringNullableWithAggregatesFilter<"Species"> | string | null
    conservationStatus?: StringNullableWithAggregatesFilter<"Species"> | string | null
    identification?: StringNullableWithAggregatesFilter<"Species"> | string | null
    habits?: StringNullableWithAggregatesFilter<"Species"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Species"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Species"> | Date | string
  }

  export type DistributionWhereInput = {
    AND?: DistributionWhereInput | DistributionWhereInput[]
    OR?: DistributionWhereInput[]
    NOT?: DistributionWhereInput | DistributionWhereInput[]
    id?: StringFilter<"Distribution"> | string
    speciesId?: StringFilter<"Distribution"> | string
    region?: StringFilter<"Distribution"> | string
    location?: StringFilter<"Distribution"> | string
    breedingMonths?: JsonNullableFilter<"Distribution">
    habitat?: StringNullableFilter<"Distribution"> | string | null
    populationEstimate?: IntNullableFilter<"Distribution"> | number | null
    createdAt?: DateTimeFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeFilter<"Distribution"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
  }

  export type DistributionOrderByWithRelationInput = {
    id?: SortOrder
    speciesId?: SortOrder
    region?: SortOrder
    location?: SortOrder
    breedingMonths?: SortOrderInput | SortOrder
    habitat?: SortOrderInput | SortOrder
    populationEstimate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    species?: SpeciesOrderByWithRelationInput
  }

  export type DistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DistributionWhereInput | DistributionWhereInput[]
    OR?: DistributionWhereInput[]
    NOT?: DistributionWhereInput | DistributionWhereInput[]
    speciesId?: StringFilter<"Distribution"> | string
    region?: StringFilter<"Distribution"> | string
    location?: StringFilter<"Distribution"> | string
    breedingMonths?: JsonNullableFilter<"Distribution">
    habitat?: StringNullableFilter<"Distribution"> | string | null
    populationEstimate?: IntNullableFilter<"Distribution"> | number | null
    createdAt?: DateTimeFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeFilter<"Distribution"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
  }, "id">

  export type DistributionOrderByWithAggregationInput = {
    id?: SortOrder
    speciesId?: SortOrder
    region?: SortOrder
    location?: SortOrder
    breedingMonths?: SortOrderInput | SortOrder
    habitat?: SortOrderInput | SortOrder
    populationEstimate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DistributionCountOrderByAggregateInput
    _avg?: DistributionAvgOrderByAggregateInput
    _max?: DistributionMaxOrderByAggregateInput
    _min?: DistributionMinOrderByAggregateInput
    _sum?: DistributionSumOrderByAggregateInput
  }

  export type DistributionScalarWhereWithAggregatesInput = {
    AND?: DistributionScalarWhereWithAggregatesInput | DistributionScalarWhereWithAggregatesInput[]
    OR?: DistributionScalarWhereWithAggregatesInput[]
    NOT?: DistributionScalarWhereWithAggregatesInput | DistributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Distribution"> | string
    speciesId?: StringWithAggregatesFilter<"Distribution"> | string
    region?: StringWithAggregatesFilter<"Distribution"> | string
    location?: StringWithAggregatesFilter<"Distribution"> | string
    breedingMonths?: JsonNullableWithAggregatesFilter<"Distribution">
    habitat?: StringNullableWithAggregatesFilter<"Distribution"> | string | null
    populationEstimate?: IntNullableWithAggregatesFilter<"Distribution"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Distribution"> | Date | string
  }

  export type DietItemWhereInput = {
    AND?: DietItemWhereInput | DietItemWhereInput[]
    OR?: DietItemWhereInput[]
    NOT?: DietItemWhereInput | DietItemWhereInput[]
    id?: StringFilter<"DietItem"> | string
    speciesId?: StringFilter<"DietItem"> | string
    foodType?: StringFilter<"DietItem"> | string
    scientificName?: StringNullableFilter<"DietItem"> | string | null
    commonName?: StringNullableFilter<"DietItem"> | string | null
    percentage?: FloatNullableFilter<"DietItem"> | number | null
    seasonal?: BoolFilter<"DietItem"> | boolean
    location?: StringNullableFilter<"DietItem"> | string | null
    createdAt?: DateTimeFilter<"DietItem"> | Date | string
    updatedAt?: DateTimeFilter<"DietItem"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
  }

  export type DietItemOrderByWithRelationInput = {
    id?: SortOrder
    speciesId?: SortOrder
    foodType?: SortOrder
    scientificName?: SortOrderInput | SortOrder
    commonName?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    seasonal?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    species?: SpeciesOrderByWithRelationInput
  }

  export type DietItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DietItemWhereInput | DietItemWhereInput[]
    OR?: DietItemWhereInput[]
    NOT?: DietItemWhereInput | DietItemWhereInput[]
    speciesId?: StringFilter<"DietItem"> | string
    foodType?: StringFilter<"DietItem"> | string
    scientificName?: StringNullableFilter<"DietItem"> | string | null
    commonName?: StringNullableFilter<"DietItem"> | string | null
    percentage?: FloatNullableFilter<"DietItem"> | number | null
    seasonal?: BoolFilter<"DietItem"> | boolean
    location?: StringNullableFilter<"DietItem"> | string | null
    createdAt?: DateTimeFilter<"DietItem"> | Date | string
    updatedAt?: DateTimeFilter<"DietItem"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
  }, "id">

  export type DietItemOrderByWithAggregationInput = {
    id?: SortOrder
    speciesId?: SortOrder
    foodType?: SortOrder
    scientificName?: SortOrderInput | SortOrder
    commonName?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    seasonal?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DietItemCountOrderByAggregateInput
    _avg?: DietItemAvgOrderByAggregateInput
    _max?: DietItemMaxOrderByAggregateInput
    _min?: DietItemMinOrderByAggregateInput
    _sum?: DietItemSumOrderByAggregateInput
  }

  export type DietItemScalarWhereWithAggregatesInput = {
    AND?: DietItemScalarWhereWithAggregatesInput | DietItemScalarWhereWithAggregatesInput[]
    OR?: DietItemScalarWhereWithAggregatesInput[]
    NOT?: DietItemScalarWhereWithAggregatesInput | DietItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DietItem"> | string
    speciesId?: StringWithAggregatesFilter<"DietItem"> | string
    foodType?: StringWithAggregatesFilter<"DietItem"> | string
    scientificName?: StringNullableWithAggregatesFilter<"DietItem"> | string | null
    commonName?: StringNullableWithAggregatesFilter<"DietItem"> | string | null
    percentage?: FloatNullableWithAggregatesFilter<"DietItem"> | number | null
    seasonal?: BoolWithAggregatesFilter<"DietItem"> | boolean
    location?: StringNullableWithAggregatesFilter<"DietItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DietItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DietItem"> | Date | string
  }

  export type MigrationWhereInput = {
    AND?: MigrationWhereInput | MigrationWhereInput[]
    OR?: MigrationWhereInput[]
    NOT?: MigrationWhereInput | MigrationWhereInput[]
    id?: StringFilter<"Migration"> | string
    speciesId?: StringFilter<"Migration"> | string
    migrationPeriod?: StringFilter<"Migration"> | string
    fromLocation?: StringFilter<"Migration"> | string
    toLocation?: StringNullableFilter<"Migration"> | string | null
    distanceKm?: IntNullableFilter<"Migration"> | number | null
    duration?: StringNullableFilter<"Migration"> | string | null
    ageGroup?: StringNullableFilter<"Migration"> | string | null
    createdAt?: DateTimeFilter<"Migration"> | Date | string
    updatedAt?: DateTimeFilter<"Migration"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
  }

  export type MigrationOrderByWithRelationInput = {
    id?: SortOrder
    speciesId?: SortOrder
    migrationPeriod?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrderInput | SortOrder
    distanceKm?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    ageGroup?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    species?: SpeciesOrderByWithRelationInput
  }

  export type MigrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MigrationWhereInput | MigrationWhereInput[]
    OR?: MigrationWhereInput[]
    NOT?: MigrationWhereInput | MigrationWhereInput[]
    speciesId?: StringFilter<"Migration"> | string
    migrationPeriod?: StringFilter<"Migration"> | string
    fromLocation?: StringFilter<"Migration"> | string
    toLocation?: StringNullableFilter<"Migration"> | string | null
    distanceKm?: IntNullableFilter<"Migration"> | number | null
    duration?: StringNullableFilter<"Migration"> | string | null
    ageGroup?: StringNullableFilter<"Migration"> | string | null
    createdAt?: DateTimeFilter<"Migration"> | Date | string
    updatedAt?: DateTimeFilter<"Migration"> | Date | string
    species?: XOR<SpeciesScalarRelationFilter, SpeciesWhereInput>
  }, "id">

  export type MigrationOrderByWithAggregationInput = {
    id?: SortOrder
    speciesId?: SortOrder
    migrationPeriod?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrderInput | SortOrder
    distanceKm?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    ageGroup?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MigrationCountOrderByAggregateInput
    _avg?: MigrationAvgOrderByAggregateInput
    _max?: MigrationMaxOrderByAggregateInput
    _min?: MigrationMinOrderByAggregateInput
    _sum?: MigrationSumOrderByAggregateInput
  }

  export type MigrationScalarWhereWithAggregatesInput = {
    AND?: MigrationScalarWhereWithAggregatesInput | MigrationScalarWhereWithAggregatesInput[]
    OR?: MigrationScalarWhereWithAggregatesInput[]
    NOT?: MigrationScalarWhereWithAggregatesInput | MigrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Migration"> | string
    speciesId?: StringWithAggregatesFilter<"Migration"> | string
    migrationPeriod?: StringWithAggregatesFilter<"Migration"> | string
    fromLocation?: StringWithAggregatesFilter<"Migration"> | string
    toLocation?: StringNullableWithAggregatesFilter<"Migration"> | string | null
    distanceKm?: IntNullableWithAggregatesFilter<"Migration"> | number | null
    duration?: StringNullableWithAggregatesFilter<"Migration"> | string | null
    ageGroup?: StringNullableWithAggregatesFilter<"Migration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Migration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Migration"> | Date | string
  }

  export type FactsWhereInput = {
    AND?: FactsWhereInput | FactsWhereInput[]
    OR?: FactsWhereInput[]
    NOT?: FactsWhereInput | FactsWhereInput[]
    id?: IntFilter<"Facts"> | number
    fact?: StringFilter<"Facts"> | string
    source?: StringFilter<"Facts"> | string
    createdAt?: DateTimeFilter<"Facts"> | Date | string
  }

  export type FactsOrderByWithRelationInput = {
    id?: SortOrder
    fact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type FactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FactsWhereInput | FactsWhereInput[]
    OR?: FactsWhereInput[]
    NOT?: FactsWhereInput | FactsWhereInput[]
    fact?: StringFilter<"Facts"> | string
    source?: StringFilter<"Facts"> | string
    createdAt?: DateTimeFilter<"Facts"> | Date | string
  }, "id">

  export type FactsOrderByWithAggregationInput = {
    id?: SortOrder
    fact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: FactsCountOrderByAggregateInput
    _avg?: FactsAvgOrderByAggregateInput
    _max?: FactsMaxOrderByAggregateInput
    _min?: FactsMinOrderByAggregateInput
    _sum?: FactsSumOrderByAggregateInput
  }

  export type FactsScalarWhereWithAggregatesInput = {
    AND?: FactsScalarWhereWithAggregatesInput | FactsScalarWhereWithAggregatesInput[]
    OR?: FactsScalarWhereWithAggregatesInput[]
    NOT?: FactsScalarWhereWithAggregatesInput | FactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facts"> | number
    fact?: StringWithAggregatesFilter<"Facts"> | string
    source?: StringWithAggregatesFilter<"Facts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Facts"> | Date | string
  }

  export type ApiUsageWhereInput = {
    AND?: ApiUsageWhereInput | ApiUsageWhereInput[]
    OR?: ApiUsageWhereInput[]
    NOT?: ApiUsageWhereInput | ApiUsageWhereInput[]
    id?: StringFilter<"ApiUsage"> | string
    userId?: StringFilter<"ApiUsage"> | string
    apiKey?: StringFilter<"ApiUsage"> | string
    endpoint?: StringFilter<"ApiUsage"> | string
    method?: StringFilter<"ApiUsage"> | string
    ipAddress?: StringNullableFilter<"ApiUsage"> | string | null
    statusCode?: IntFilter<"ApiUsage"> | number
    createdAt?: DateTimeFilter<"ApiUsage"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ApiUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type ApiUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiUsageWhereInput | ApiUsageWhereInput[]
    OR?: ApiUsageWhereInput[]
    NOT?: ApiUsageWhereInput | ApiUsageWhereInput[]
    userId?: StringFilter<"ApiUsage"> | string
    apiKey?: StringFilter<"ApiUsage"> | string
    endpoint?: StringFilter<"ApiUsage"> | string
    method?: StringFilter<"ApiUsage"> | string
    ipAddress?: StringNullableFilter<"ApiUsage"> | string | null
    statusCode?: IntFilter<"ApiUsage"> | number
    createdAt?: DateTimeFilter<"ApiUsage"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ApiUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
    _count?: ApiUsageCountOrderByAggregateInput
    _avg?: ApiUsageAvgOrderByAggregateInput
    _max?: ApiUsageMaxOrderByAggregateInput
    _min?: ApiUsageMinOrderByAggregateInput
    _sum?: ApiUsageSumOrderByAggregateInput
  }

  export type ApiUsageScalarWhereWithAggregatesInput = {
    AND?: ApiUsageScalarWhereWithAggregatesInput | ApiUsageScalarWhereWithAggregatesInput[]
    OR?: ApiUsageScalarWhereWithAggregatesInput[]
    NOT?: ApiUsageScalarWhereWithAggregatesInput | ApiUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiUsage"> | string
    userId?: StringWithAggregatesFilter<"ApiUsage"> | string
    apiKey?: StringWithAggregatesFilter<"ApiUsage"> | string
    endpoint?: StringWithAggregatesFilter<"ApiUsage"> | string
    method?: StringWithAggregatesFilter<"ApiUsage"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"ApiUsage"> | string | null
    statusCode?: IntWithAggregatesFilter<"ApiUsage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ApiUsage"> | Date | string
  }

  export type UsersCreateInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiKey?: ApiKeyCreateNestedManyWithoutUserInput
    ApiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    ApiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUpdateManyWithoutUserNestedInput
    ApiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    ApiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetsCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutPasswordResetsInput
  }

  export type PasswordResetsUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPasswordResetsNestedInput
  }

  export type PasswordResetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetsCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    keyHash: string
    keyLookup: string
    name: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    rateLimit?: number
    usageCount?: number
    isActive?: boolean
    user: UsersCreateNestedOneWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    userId: string
    keyHash: string
    keyLookup: string
    name: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    rateLimit?: number
    usageCount?: number
    isActive?: boolean
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyLookup?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateLimit?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyLookup?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateLimit?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    userId: string
    keyHash: string
    keyLookup: string
    name: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    rateLimit?: number
    usageCount?: number
    isActive?: boolean
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyLookup?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateLimit?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyLookup?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateLimit?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingTierCreateInput = {
    id?: string
    name: string
    price: number
    requestsPerDay: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    requestsPerDay: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierCreateManyInput = {
    id?: string
    name: string
    price: number
    requestsPerDay: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    requestsPerDay?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesCreateInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribution?: DistributionCreateNestedManyWithoutSpeciesInput
    dietItems?: DietItemCreateNestedManyWithoutSpeciesInput
    migrationPatterns?: MigrationCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribution?: DistributionUncheckedCreateNestedManyWithoutSpeciesInput
    dietItems?: DietItemUncheckedCreateNestedManyWithoutSpeciesInput
    migrationPatterns?: MigrationUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribution?: DistributionUpdateManyWithoutSpeciesNestedInput
    dietItems?: DietItemUpdateManyWithoutSpeciesNestedInput
    migrationPatterns?: MigrationUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribution?: DistributionUncheckedUpdateManyWithoutSpeciesNestedInput
    dietItems?: DietItemUncheckedUpdateManyWithoutSpeciesNestedInput
    migrationPatterns?: MigrationUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesCreateManyInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeciesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionCreateInput = {
    id?: string
    region: string
    location: string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: string | null
    populationEstimate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    species: SpeciesCreateNestedOneWithoutDistributionInput
  }

  export type DistributionUncheckedCreateInput = {
    id?: string
    speciesId: string
    region: string
    location: string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: string | null
    populationEstimate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    populationEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutDistributionNestedInput
  }

  export type DistributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    populationEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionCreateManyInput = {
    id?: string
    speciesId: string
    region: string
    location: string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: string | null
    populationEstimate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    populationEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    populationEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietItemCreateInput = {
    id?: string
    foodType: string
    scientificName?: string | null
    commonName?: string | null
    percentage?: number | null
    seasonal?: boolean
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    species: SpeciesCreateNestedOneWithoutDietItemsInput
  }

  export type DietItemUncheckedCreateInput = {
    id?: string
    speciesId: string
    foodType: string
    scientificName?: string | null
    commonName?: string | null
    percentage?: number | null
    seasonal?: boolean
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    seasonal?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutDietItemsNestedInput
  }

  export type DietItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    seasonal?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietItemCreateManyInput = {
    id?: string
    speciesId: string
    foodType: string
    scientificName?: string | null
    commonName?: string | null
    percentage?: number | null
    seasonal?: boolean
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    seasonal?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    seasonal?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationCreateInput = {
    id?: string
    migrationPeriod: string
    fromLocation: string
    toLocation?: string | null
    distanceKm?: number | null
    duration?: string | null
    ageGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    species: SpeciesCreateNestedOneWithoutMigrationPatternsInput
  }

  export type MigrationUncheckedCreateInput = {
    id?: string
    speciesId: string
    migrationPeriod: string
    fromLocation: string
    toLocation?: string | null
    distanceKm?: number | null
    duration?: string | null
    ageGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MigrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    migrationPeriod?: StringFieldUpdateOperationsInput | string
    fromLocation?: StringFieldUpdateOperationsInput | string
    toLocation?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneRequiredWithoutMigrationPatternsNestedInput
  }

  export type MigrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: StringFieldUpdateOperationsInput | string
    migrationPeriod?: StringFieldUpdateOperationsInput | string
    fromLocation?: StringFieldUpdateOperationsInput | string
    toLocation?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationCreateManyInput = {
    id?: string
    speciesId: string
    migrationPeriod: string
    fromLocation: string
    toLocation?: string | null
    distanceKm?: number | null
    duration?: string | null
    ageGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MigrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    migrationPeriod?: StringFieldUpdateOperationsInput | string
    fromLocation?: StringFieldUpdateOperationsInput | string
    toLocation?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: StringFieldUpdateOperationsInput | string
    migrationPeriod?: StringFieldUpdateOperationsInput | string
    fromLocation?: StringFieldUpdateOperationsInput | string
    toLocation?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactsCreateInput = {
    fact: string
    source: string
    createdAt?: Date | string
  }

  export type FactsUncheckedCreateInput = {
    id?: number
    fact: string
    source: string
    createdAt?: Date | string
  }

  export type FactsUpdateInput = {
    fact?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fact?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactsCreateManyInput = {
    id?: number
    fact: string
    source: string
    createdAt?: Date | string
  }

  export type FactsUpdateManyMutationInput = {
    fact?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fact?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageCreateInput = {
    id?: string
    apiKey: string
    endpoint: string
    method: string
    ipAddress?: string | null
    statusCode: number
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutApiUsageInput
  }

  export type ApiUsageUncheckedCreateInput = {
    id?: string
    userId: string
    apiKey: string
    endpoint: string
    method: string
    ipAddress?: string | null
    statusCode: number
    createdAt?: Date | string
  }

  export type ApiUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutApiUsageNestedInput
  }

  export type ApiUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageCreateManyInput = {
    id?: string
    userId: string
    apiKey: string
    endpoint: string
    method: string
    ipAddress?: string | null
    statusCode: number
    createdAt?: Date | string
  }

  export type ApiUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ApiUsageListRelationFilter = {
    every?: ApiUsageWhereInput
    some?: ApiUsageWhereInput
    none?: ApiUsageWhereInput
  }

  export type PasswordResetsListRelationFilter = {
    every?: PasswordResetsWhereInput
    some?: PasswordResetsWhereInput
    none?: PasswordResetsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PasswordResetsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyHash?: SortOrder
    keyLookup?: SortOrder
    name?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    rateLimit?: SortOrder
    usageCount?: SortOrder
    isActive?: SortOrder
  }

  export type ApiKeyAvgOrderByAggregateInput = {
    rateLimit?: SortOrder
    usageCount?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyHash?: SortOrder
    keyLookup?: SortOrder
    name?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    rateLimit?: SortOrder
    usageCount?: SortOrder
    isActive?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyHash?: SortOrder
    keyLookup?: SortOrder
    name?: SortOrder
    lastUsedAt?: SortOrder
    createdAt?: SortOrder
    rateLimit?: SortOrder
    usageCount?: SortOrder
    isActive?: SortOrder
  }

  export type ApiKeySumOrderByAggregateInput = {
    rateLimit?: SortOrder
    usageCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PricingTierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    requestsPerDay?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingTierAvgOrderByAggregateInput = {
    price?: SortOrder
    requestsPerDay?: SortOrder
  }

  export type PricingTierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    requestsPerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingTierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    requestsPerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingTierSumOrderByAggregateInput = {
    price?: SortOrder
    requestsPerDay?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DistributionListRelationFilter = {
    every?: DistributionWhereInput
    some?: DistributionWhereInput
    none?: DistributionWhereInput
  }

  export type DietItemListRelationFilter = {
    every?: DietItemWhereInput
    some?: DietItemWhereInput
    none?: DietItemWhereInput
  }

  export type MigrationListRelationFilter = {
    every?: MigrationWhereInput
    some?: MigrationWhereInput
    none?: MigrationWhereInput
  }

  export type DistributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DietItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MigrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpeciesCountOrderByAggregateInput = {
    id?: SortOrder
    commonName?: SortOrder
    scientificName?: SortOrder
    species?: SortOrder
    weightMale?: SortOrder
    weightFemale?: SortOrder
    nestType?: SortOrder
    favouriteFood?: SortOrder
    conservationStatus?: SortOrder
    identification?: SortOrder
    habits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeciesAvgOrderByAggregateInput = {
    weightMale?: SortOrder
    weightFemale?: SortOrder
  }

  export type SpeciesMaxOrderByAggregateInput = {
    id?: SortOrder
    commonName?: SortOrder
    scientificName?: SortOrder
    species?: SortOrder
    weightMale?: SortOrder
    weightFemale?: SortOrder
    nestType?: SortOrder
    favouriteFood?: SortOrder
    conservationStatus?: SortOrder
    identification?: SortOrder
    habits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeciesMinOrderByAggregateInput = {
    id?: SortOrder
    commonName?: SortOrder
    scientificName?: SortOrder
    species?: SortOrder
    weightMale?: SortOrder
    weightFemale?: SortOrder
    nestType?: SortOrder
    favouriteFood?: SortOrder
    conservationStatus?: SortOrder
    identification?: SortOrder
    habits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeciesSumOrderByAggregateInput = {
    weightMale?: SortOrder
    weightFemale?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type SpeciesScalarRelationFilter = {
    is?: SpeciesWhereInput
    isNot?: SpeciesWhereInput
  }

  export type DistributionCountOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    region?: SortOrder
    location?: SortOrder
    breedingMonths?: SortOrder
    habitat?: SortOrder
    populationEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributionAvgOrderByAggregateInput = {
    populationEstimate?: SortOrder
  }

  export type DistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    region?: SortOrder
    location?: SortOrder
    habitat?: SortOrder
    populationEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributionMinOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    region?: SortOrder
    location?: SortOrder
    habitat?: SortOrder
    populationEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributionSumOrderByAggregateInput = {
    populationEstimate?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type DietItemCountOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    foodType?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    percentage?: SortOrder
    seasonal?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DietItemAvgOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type DietItemMaxOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    foodType?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    percentage?: SortOrder
    seasonal?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DietItemMinOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    foodType?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    percentage?: SortOrder
    seasonal?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DietItemSumOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type MigrationCountOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    migrationPeriod?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrder
    distanceKm?: SortOrder
    duration?: SortOrder
    ageGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MigrationAvgOrderByAggregateInput = {
    distanceKm?: SortOrder
  }

  export type MigrationMaxOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    migrationPeriod?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrder
    distanceKm?: SortOrder
    duration?: SortOrder
    ageGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MigrationMinOrderByAggregateInput = {
    id?: SortOrder
    speciesId?: SortOrder
    migrationPeriod?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrder
    distanceKm?: SortOrder
    duration?: SortOrder
    ageGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MigrationSumOrderByAggregateInput = {
    distanceKm?: SortOrder
  }

  export type FactsCountOrderByAggregateInput = {
    id?: SortOrder
    fact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type FactsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FactsMaxOrderByAggregateInput = {
    id?: SortOrder
    fact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type FactsMinOrderByAggregateInput = {
    id?: SortOrder
    fact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type FactsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApiUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiUsageAvgOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type ApiUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiKey?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    ipAddress?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiUsageSumOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
  }

  export type PasswordResetsCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetsCreateWithoutUserInput, PasswordResetsUncheckedCreateWithoutUserInput> | PasswordResetsCreateWithoutUserInput[] | PasswordResetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetsCreateOrConnectWithoutUserInput | PasswordResetsCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetsCreateManyUserInputEnvelope
    connect?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
  }

  export type PasswordResetsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetsCreateWithoutUserInput, PasswordResetsUncheckedCreateWithoutUserInput> | PasswordResetsCreateWithoutUserInput[] | PasswordResetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetsCreateOrConnectWithoutUserInput | PasswordResetsCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetsCreateManyUserInputEnvelope
    connect?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ApiUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageUpsertWithWhereUniqueWithoutUserInput | ApiUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    set?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    disconnect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    delete?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    update?: ApiUsageUpdateWithWhereUniqueWithoutUserInput | ApiUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageUpdateManyWithWhereWithoutUserInput | ApiUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
  }

  export type PasswordResetsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetsCreateWithoutUserInput, PasswordResetsUncheckedCreateWithoutUserInput> | PasswordResetsCreateWithoutUserInput[] | PasswordResetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetsCreateOrConnectWithoutUserInput | PasswordResetsCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetsUpsertWithWhereUniqueWithoutUserInput | PasswordResetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetsCreateManyUserInputEnvelope
    set?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    disconnect?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    delete?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    connect?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    update?: PasswordResetsUpdateWithWhereUniqueWithoutUserInput | PasswordResetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetsUpdateManyWithWhereWithoutUserInput | PasswordResetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetsScalarWhereInput | PasswordResetsScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ApiUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageUpsertWithWhereUniqueWithoutUserInput | ApiUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    set?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    disconnect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    delete?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    update?: ApiUsageUpdateWithWhereUniqueWithoutUserInput | ApiUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageUpdateManyWithWhereWithoutUserInput | ApiUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
  }

  export type PasswordResetsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetsCreateWithoutUserInput, PasswordResetsUncheckedCreateWithoutUserInput> | PasswordResetsCreateWithoutUserInput[] | PasswordResetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetsCreateOrConnectWithoutUserInput | PasswordResetsCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetsUpsertWithWhereUniqueWithoutUserInput | PasswordResetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetsCreateManyUserInputEnvelope
    set?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    disconnect?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    delete?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    connect?: PasswordResetsWhereUniqueInput | PasswordResetsWhereUniqueInput[]
    update?: PasswordResetsUpdateWithWhereUniqueWithoutUserInput | PasswordResetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetsUpdateManyWithWhereWithoutUserInput | PasswordResetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetsScalarWhereInput | PasswordResetsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<UsersCreateWithoutPasswordResetsInput, UsersUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPasswordResetsInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<UsersCreateWithoutPasswordResetsInput, UsersUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPasswordResetsInput
    upsert?: UsersUpsertWithoutPasswordResetsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPasswordResetsInput, UsersUpdateWithoutPasswordResetsInput>, UsersUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UsersCreateNestedOneWithoutApiKeyInput = {
    create?: XOR<UsersCreateWithoutApiKeyInput, UsersUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApiKeyInput
    connect?: UsersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneRequiredWithoutApiKeyNestedInput = {
    create?: XOR<UsersCreateWithoutApiKeyInput, UsersUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApiKeyInput
    upsert?: UsersUpsertWithoutApiKeyInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutApiKeyInput, UsersUpdateWithoutApiKeyInput>, UsersUncheckedUpdateWithoutApiKeyInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DistributionCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<DistributionCreateWithoutSpeciesInput, DistributionUncheckedCreateWithoutSpeciesInput> | DistributionCreateWithoutSpeciesInput[] | DistributionUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutSpeciesInput | DistributionCreateOrConnectWithoutSpeciesInput[]
    createMany?: DistributionCreateManySpeciesInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type DietItemCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<DietItemCreateWithoutSpeciesInput, DietItemUncheckedCreateWithoutSpeciesInput> | DietItemCreateWithoutSpeciesInput[] | DietItemUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DietItemCreateOrConnectWithoutSpeciesInput | DietItemCreateOrConnectWithoutSpeciesInput[]
    createMany?: DietItemCreateManySpeciesInputEnvelope
    connect?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
  }

  export type MigrationCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<MigrationCreateWithoutSpeciesInput, MigrationUncheckedCreateWithoutSpeciesInput> | MigrationCreateWithoutSpeciesInput[] | MigrationUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: MigrationCreateOrConnectWithoutSpeciesInput | MigrationCreateOrConnectWithoutSpeciesInput[]
    createMany?: MigrationCreateManySpeciesInputEnvelope
    connect?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
  }

  export type DistributionUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<DistributionCreateWithoutSpeciesInput, DistributionUncheckedCreateWithoutSpeciesInput> | DistributionCreateWithoutSpeciesInput[] | DistributionUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutSpeciesInput | DistributionCreateOrConnectWithoutSpeciesInput[]
    createMany?: DistributionCreateManySpeciesInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type DietItemUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<DietItemCreateWithoutSpeciesInput, DietItemUncheckedCreateWithoutSpeciesInput> | DietItemCreateWithoutSpeciesInput[] | DietItemUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DietItemCreateOrConnectWithoutSpeciesInput | DietItemCreateOrConnectWithoutSpeciesInput[]
    createMany?: DietItemCreateManySpeciesInputEnvelope
    connect?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
  }

  export type MigrationUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<MigrationCreateWithoutSpeciesInput, MigrationUncheckedCreateWithoutSpeciesInput> | MigrationCreateWithoutSpeciesInput[] | MigrationUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: MigrationCreateOrConnectWithoutSpeciesInput | MigrationCreateOrConnectWithoutSpeciesInput[]
    createMany?: MigrationCreateManySpeciesInputEnvelope
    connect?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DistributionUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<DistributionCreateWithoutSpeciesInput, DistributionUncheckedCreateWithoutSpeciesInput> | DistributionCreateWithoutSpeciesInput[] | DistributionUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutSpeciesInput | DistributionCreateOrConnectWithoutSpeciesInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutSpeciesInput | DistributionUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: DistributionCreateManySpeciesInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutSpeciesInput | DistributionUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutSpeciesInput | DistributionUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type DietItemUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<DietItemCreateWithoutSpeciesInput, DietItemUncheckedCreateWithoutSpeciesInput> | DietItemCreateWithoutSpeciesInput[] | DietItemUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DietItemCreateOrConnectWithoutSpeciesInput | DietItemCreateOrConnectWithoutSpeciesInput[]
    upsert?: DietItemUpsertWithWhereUniqueWithoutSpeciesInput | DietItemUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: DietItemCreateManySpeciesInputEnvelope
    set?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    disconnect?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    delete?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    connect?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    update?: DietItemUpdateWithWhereUniqueWithoutSpeciesInput | DietItemUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: DietItemUpdateManyWithWhereWithoutSpeciesInput | DietItemUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: DietItemScalarWhereInput | DietItemScalarWhereInput[]
  }

  export type MigrationUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<MigrationCreateWithoutSpeciesInput, MigrationUncheckedCreateWithoutSpeciesInput> | MigrationCreateWithoutSpeciesInput[] | MigrationUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: MigrationCreateOrConnectWithoutSpeciesInput | MigrationCreateOrConnectWithoutSpeciesInput[]
    upsert?: MigrationUpsertWithWhereUniqueWithoutSpeciesInput | MigrationUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: MigrationCreateManySpeciesInputEnvelope
    set?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    disconnect?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    delete?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    connect?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    update?: MigrationUpdateWithWhereUniqueWithoutSpeciesInput | MigrationUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: MigrationUpdateManyWithWhereWithoutSpeciesInput | MigrationUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: MigrationScalarWhereInput | MigrationScalarWhereInput[]
  }

  export type DistributionUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<DistributionCreateWithoutSpeciesInput, DistributionUncheckedCreateWithoutSpeciesInput> | DistributionCreateWithoutSpeciesInput[] | DistributionUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutSpeciesInput | DistributionCreateOrConnectWithoutSpeciesInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutSpeciesInput | DistributionUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: DistributionCreateManySpeciesInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutSpeciesInput | DistributionUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutSpeciesInput | DistributionUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type DietItemUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<DietItemCreateWithoutSpeciesInput, DietItemUncheckedCreateWithoutSpeciesInput> | DietItemCreateWithoutSpeciesInput[] | DietItemUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: DietItemCreateOrConnectWithoutSpeciesInput | DietItemCreateOrConnectWithoutSpeciesInput[]
    upsert?: DietItemUpsertWithWhereUniqueWithoutSpeciesInput | DietItemUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: DietItemCreateManySpeciesInputEnvelope
    set?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    disconnect?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    delete?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    connect?: DietItemWhereUniqueInput | DietItemWhereUniqueInput[]
    update?: DietItemUpdateWithWhereUniqueWithoutSpeciesInput | DietItemUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: DietItemUpdateManyWithWhereWithoutSpeciesInput | DietItemUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: DietItemScalarWhereInput | DietItemScalarWhereInput[]
  }

  export type MigrationUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<MigrationCreateWithoutSpeciesInput, MigrationUncheckedCreateWithoutSpeciesInput> | MigrationCreateWithoutSpeciesInput[] | MigrationUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: MigrationCreateOrConnectWithoutSpeciesInput | MigrationCreateOrConnectWithoutSpeciesInput[]
    upsert?: MigrationUpsertWithWhereUniqueWithoutSpeciesInput | MigrationUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: MigrationCreateManySpeciesInputEnvelope
    set?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    disconnect?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    delete?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    connect?: MigrationWhereUniqueInput | MigrationWhereUniqueInput[]
    update?: MigrationUpdateWithWhereUniqueWithoutSpeciesInput | MigrationUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: MigrationUpdateManyWithWhereWithoutSpeciesInput | MigrationUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: MigrationScalarWhereInput | MigrationScalarWhereInput[]
  }

  export type SpeciesCreateNestedOneWithoutDistributionInput = {
    create?: XOR<SpeciesCreateWithoutDistributionInput, SpeciesUncheckedCreateWithoutDistributionInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutDistributionInput
    connect?: SpeciesWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SpeciesUpdateOneRequiredWithoutDistributionNestedInput = {
    create?: XOR<SpeciesCreateWithoutDistributionInput, SpeciesUncheckedCreateWithoutDistributionInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutDistributionInput
    upsert?: SpeciesUpsertWithoutDistributionInput
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutDistributionInput, SpeciesUpdateWithoutDistributionInput>, SpeciesUncheckedUpdateWithoutDistributionInput>
  }

  export type SpeciesCreateNestedOneWithoutDietItemsInput = {
    create?: XOR<SpeciesCreateWithoutDietItemsInput, SpeciesUncheckedCreateWithoutDietItemsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutDietItemsInput
    connect?: SpeciesWhereUniqueInput
  }

  export type SpeciesUpdateOneRequiredWithoutDietItemsNestedInput = {
    create?: XOR<SpeciesCreateWithoutDietItemsInput, SpeciesUncheckedCreateWithoutDietItemsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutDietItemsInput
    upsert?: SpeciesUpsertWithoutDietItemsInput
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutDietItemsInput, SpeciesUpdateWithoutDietItemsInput>, SpeciesUncheckedUpdateWithoutDietItemsInput>
  }

  export type SpeciesCreateNestedOneWithoutMigrationPatternsInput = {
    create?: XOR<SpeciesCreateWithoutMigrationPatternsInput, SpeciesUncheckedCreateWithoutMigrationPatternsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutMigrationPatternsInput
    connect?: SpeciesWhereUniqueInput
  }

  export type SpeciesUpdateOneRequiredWithoutMigrationPatternsNestedInput = {
    create?: XOR<SpeciesCreateWithoutMigrationPatternsInput, SpeciesUncheckedCreateWithoutMigrationPatternsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutMigrationPatternsInput
    upsert?: SpeciesUpsertWithoutMigrationPatternsInput
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutMigrationPatternsInput, SpeciesUpdateWithoutMigrationPatternsInput>, SpeciesUncheckedUpdateWithoutMigrationPatternsInput>
  }

  export type UsersCreateNestedOneWithoutApiUsageInput = {
    create?: XOR<UsersCreateWithoutApiUsageInput, UsersUncheckedCreateWithoutApiUsageInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApiUsageInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutApiUsageNestedInput = {
    create?: XOR<UsersCreateWithoutApiUsageInput, UsersUncheckedCreateWithoutApiUsageInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApiUsageInput
    upsert?: UsersUpsertWithoutApiUsageInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutApiUsageInput, UsersUpdateWithoutApiUsageInput>, UsersUncheckedUpdateWithoutApiUsageInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    keyHash: string
    keyLookup: string
    name: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    rateLimit?: number
    usageCount?: number
    isActive?: boolean
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    keyHash: string
    keyLookup: string
    name: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    rateLimit?: number
    usageCount?: number
    isActive?: boolean
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiUsageCreateWithoutUserInput = {
    id?: string
    apiKey: string
    endpoint: string
    method: string
    ipAddress?: string | null
    statusCode: number
    createdAt?: Date | string
  }

  export type ApiUsageUncheckedCreateWithoutUserInput = {
    id?: string
    apiKey: string
    endpoint: string
    method: string
    ipAddress?: string | null
    statusCode: number
    createdAt?: Date | string
  }

  export type ApiUsageCreateOrConnectWithoutUserInput = {
    where: ApiUsageWhereUniqueInput
    create: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageCreateManyUserInputEnvelope = {
    data: ApiUsageCreateManyUserInput | ApiUsageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetsCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetsUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetsCreateOrConnectWithoutUserInput = {
    where: PasswordResetsWhereUniqueInput
    create: XOR<PasswordResetsCreateWithoutUserInput, PasswordResetsUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetsCreateManyUserInputEnvelope = {
    data: PasswordResetsCreateManyUserInput | PasswordResetsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    keyLookup?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    rateLimit?: IntFilter<"ApiKey"> | number
    usageCount?: IntFilter<"ApiKey"> | number
    isActive?: BoolFilter<"ApiKey"> | boolean
  }

  export type ApiUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiUsageWhereUniqueInput
    update: XOR<ApiUsageUpdateWithoutUserInput, ApiUsageUncheckedUpdateWithoutUserInput>
    create: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiUsageWhereUniqueInput
    data: XOR<ApiUsageUpdateWithoutUserInput, ApiUsageUncheckedUpdateWithoutUserInput>
  }

  export type ApiUsageUpdateManyWithWhereWithoutUserInput = {
    where: ApiUsageScalarWhereInput
    data: XOR<ApiUsageUpdateManyMutationInput, ApiUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiUsageScalarWhereInput = {
    AND?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
    OR?: ApiUsageScalarWhereInput[]
    NOT?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
    id?: StringFilter<"ApiUsage"> | string
    userId?: StringFilter<"ApiUsage"> | string
    apiKey?: StringFilter<"ApiUsage"> | string
    endpoint?: StringFilter<"ApiUsage"> | string
    method?: StringFilter<"ApiUsage"> | string
    ipAddress?: StringNullableFilter<"ApiUsage"> | string | null
    statusCode?: IntFilter<"ApiUsage"> | number
    createdAt?: DateTimeFilter<"ApiUsage"> | Date | string
  }

  export type PasswordResetsUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetsWhereUniqueInput
    update: XOR<PasswordResetsUpdateWithoutUserInput, PasswordResetsUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetsCreateWithoutUserInput, PasswordResetsUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetsUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetsWhereUniqueInput
    data: XOR<PasswordResetsUpdateWithoutUserInput, PasswordResetsUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetsUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetsScalarWhereInput
    data: XOR<PasswordResetsUpdateManyMutationInput, PasswordResetsUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetsScalarWhereInput = {
    AND?: PasswordResetsScalarWhereInput | PasswordResetsScalarWhereInput[]
    OR?: PasswordResetsScalarWhereInput[]
    NOT?: PasswordResetsScalarWhereInput | PasswordResetsScalarWhereInput[]
    id?: StringFilter<"PasswordResets"> | string
    userId?: StringFilter<"PasswordResets"> | string
    token?: StringFilter<"PasswordResets"> | string
    expiresAt?: DateTimeFilter<"PasswordResets"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResets"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResets"> | Date | string
  }

  export type UsersCreateWithoutPasswordResetsInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiKey?: ApiKeyCreateNestedManyWithoutUserInput
    ApiUsage?: ApiUsageCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPasswordResetsInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    ApiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPasswordResetsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPasswordResetsInput, UsersUncheckedCreateWithoutPasswordResetsInput>
  }

  export type UsersUpsertWithoutPasswordResetsInput = {
    update: XOR<UsersUpdateWithoutPasswordResetsInput, UsersUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<UsersCreateWithoutPasswordResetsInput, UsersUncheckedCreateWithoutPasswordResetsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPasswordResetsInput, UsersUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UsersUpdateWithoutPasswordResetsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUpdateManyWithoutUserNestedInput
    ApiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPasswordResetsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    ApiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutApiKeyInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutApiKeyInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutApiKeyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutApiKeyInput, UsersUncheckedCreateWithoutApiKeyInput>
  }

  export type UsersUpsertWithoutApiKeyInput = {
    update: XOR<UsersUpdateWithoutApiKeyInput, UsersUncheckedUpdateWithoutApiKeyInput>
    create: XOR<UsersCreateWithoutApiKeyInput, UsersUncheckedCreateWithoutApiKeyInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutApiKeyInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutApiKeyInput, UsersUncheckedUpdateWithoutApiKeyInput>
  }

  export type UsersUpdateWithoutApiKeyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutApiKeyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DistributionCreateWithoutSpeciesInput = {
    id?: string
    region: string
    location: string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: string | null
    populationEstimate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributionUncheckedCreateWithoutSpeciesInput = {
    id?: string
    region: string
    location: string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: string | null
    populationEstimate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributionCreateOrConnectWithoutSpeciesInput = {
    where: DistributionWhereUniqueInput
    create: XOR<DistributionCreateWithoutSpeciesInput, DistributionUncheckedCreateWithoutSpeciesInput>
  }

  export type DistributionCreateManySpeciesInputEnvelope = {
    data: DistributionCreateManySpeciesInput | DistributionCreateManySpeciesInput[]
    skipDuplicates?: boolean
  }

  export type DietItemCreateWithoutSpeciesInput = {
    id?: string
    foodType: string
    scientificName?: string | null
    commonName?: string | null
    percentage?: number | null
    seasonal?: boolean
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietItemUncheckedCreateWithoutSpeciesInput = {
    id?: string
    foodType: string
    scientificName?: string | null
    commonName?: string | null
    percentage?: number | null
    seasonal?: boolean
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietItemCreateOrConnectWithoutSpeciesInput = {
    where: DietItemWhereUniqueInput
    create: XOR<DietItemCreateWithoutSpeciesInput, DietItemUncheckedCreateWithoutSpeciesInput>
  }

  export type DietItemCreateManySpeciesInputEnvelope = {
    data: DietItemCreateManySpeciesInput | DietItemCreateManySpeciesInput[]
    skipDuplicates?: boolean
  }

  export type MigrationCreateWithoutSpeciesInput = {
    id?: string
    migrationPeriod: string
    fromLocation: string
    toLocation?: string | null
    distanceKm?: number | null
    duration?: string | null
    ageGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MigrationUncheckedCreateWithoutSpeciesInput = {
    id?: string
    migrationPeriod: string
    fromLocation: string
    toLocation?: string | null
    distanceKm?: number | null
    duration?: string | null
    ageGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MigrationCreateOrConnectWithoutSpeciesInput = {
    where: MigrationWhereUniqueInput
    create: XOR<MigrationCreateWithoutSpeciesInput, MigrationUncheckedCreateWithoutSpeciesInput>
  }

  export type MigrationCreateManySpeciesInputEnvelope = {
    data: MigrationCreateManySpeciesInput | MigrationCreateManySpeciesInput[]
    skipDuplicates?: boolean
  }

  export type DistributionUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: DistributionWhereUniqueInput
    update: XOR<DistributionUpdateWithoutSpeciesInput, DistributionUncheckedUpdateWithoutSpeciesInput>
    create: XOR<DistributionCreateWithoutSpeciesInput, DistributionUncheckedCreateWithoutSpeciesInput>
  }

  export type DistributionUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: DistributionWhereUniqueInput
    data: XOR<DistributionUpdateWithoutSpeciesInput, DistributionUncheckedUpdateWithoutSpeciesInput>
  }

  export type DistributionUpdateManyWithWhereWithoutSpeciesInput = {
    where: DistributionScalarWhereInput
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyWithoutSpeciesInput>
  }

  export type DistributionScalarWhereInput = {
    AND?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
    OR?: DistributionScalarWhereInput[]
    NOT?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
    id?: StringFilter<"Distribution"> | string
    speciesId?: StringFilter<"Distribution"> | string
    region?: StringFilter<"Distribution"> | string
    location?: StringFilter<"Distribution"> | string
    breedingMonths?: JsonNullableFilter<"Distribution">
    habitat?: StringNullableFilter<"Distribution"> | string | null
    populationEstimate?: IntNullableFilter<"Distribution"> | number | null
    createdAt?: DateTimeFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeFilter<"Distribution"> | Date | string
  }

  export type DietItemUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: DietItemWhereUniqueInput
    update: XOR<DietItemUpdateWithoutSpeciesInput, DietItemUncheckedUpdateWithoutSpeciesInput>
    create: XOR<DietItemCreateWithoutSpeciesInput, DietItemUncheckedCreateWithoutSpeciesInput>
  }

  export type DietItemUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: DietItemWhereUniqueInput
    data: XOR<DietItemUpdateWithoutSpeciesInput, DietItemUncheckedUpdateWithoutSpeciesInput>
  }

  export type DietItemUpdateManyWithWhereWithoutSpeciesInput = {
    where: DietItemScalarWhereInput
    data: XOR<DietItemUpdateManyMutationInput, DietItemUncheckedUpdateManyWithoutSpeciesInput>
  }

  export type DietItemScalarWhereInput = {
    AND?: DietItemScalarWhereInput | DietItemScalarWhereInput[]
    OR?: DietItemScalarWhereInput[]
    NOT?: DietItemScalarWhereInput | DietItemScalarWhereInput[]
    id?: StringFilter<"DietItem"> | string
    speciesId?: StringFilter<"DietItem"> | string
    foodType?: StringFilter<"DietItem"> | string
    scientificName?: StringNullableFilter<"DietItem"> | string | null
    commonName?: StringNullableFilter<"DietItem"> | string | null
    percentage?: FloatNullableFilter<"DietItem"> | number | null
    seasonal?: BoolFilter<"DietItem"> | boolean
    location?: StringNullableFilter<"DietItem"> | string | null
    createdAt?: DateTimeFilter<"DietItem"> | Date | string
    updatedAt?: DateTimeFilter<"DietItem"> | Date | string
  }

  export type MigrationUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: MigrationWhereUniqueInput
    update: XOR<MigrationUpdateWithoutSpeciesInput, MigrationUncheckedUpdateWithoutSpeciesInput>
    create: XOR<MigrationCreateWithoutSpeciesInput, MigrationUncheckedCreateWithoutSpeciesInput>
  }

  export type MigrationUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: MigrationWhereUniqueInput
    data: XOR<MigrationUpdateWithoutSpeciesInput, MigrationUncheckedUpdateWithoutSpeciesInput>
  }

  export type MigrationUpdateManyWithWhereWithoutSpeciesInput = {
    where: MigrationScalarWhereInput
    data: XOR<MigrationUpdateManyMutationInput, MigrationUncheckedUpdateManyWithoutSpeciesInput>
  }

  export type MigrationScalarWhereInput = {
    AND?: MigrationScalarWhereInput | MigrationScalarWhereInput[]
    OR?: MigrationScalarWhereInput[]
    NOT?: MigrationScalarWhereInput | MigrationScalarWhereInput[]
    id?: StringFilter<"Migration"> | string
    speciesId?: StringFilter<"Migration"> | string
    migrationPeriod?: StringFilter<"Migration"> | string
    fromLocation?: StringFilter<"Migration"> | string
    toLocation?: StringNullableFilter<"Migration"> | string | null
    distanceKm?: IntNullableFilter<"Migration"> | number | null
    duration?: StringNullableFilter<"Migration"> | string | null
    ageGroup?: StringNullableFilter<"Migration"> | string | null
    createdAt?: DateTimeFilter<"Migration"> | Date | string
    updatedAt?: DateTimeFilter<"Migration"> | Date | string
  }

  export type SpeciesCreateWithoutDistributionInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dietItems?: DietItemCreateNestedManyWithoutSpeciesInput
    migrationPatterns?: MigrationCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateWithoutDistributionInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dietItems?: DietItemUncheckedCreateNestedManyWithoutSpeciesInput
    migrationPatterns?: MigrationUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesCreateOrConnectWithoutDistributionInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutDistributionInput, SpeciesUncheckedCreateWithoutDistributionInput>
  }

  export type SpeciesUpsertWithoutDistributionInput = {
    update: XOR<SpeciesUpdateWithoutDistributionInput, SpeciesUncheckedUpdateWithoutDistributionInput>
    create: XOR<SpeciesCreateWithoutDistributionInput, SpeciesUncheckedCreateWithoutDistributionInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutDistributionInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutDistributionInput, SpeciesUncheckedUpdateWithoutDistributionInput>
  }

  export type SpeciesUpdateWithoutDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dietItems?: DietItemUpdateManyWithoutSpeciesNestedInput
    migrationPatterns?: MigrationUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateWithoutDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dietItems?: DietItemUncheckedUpdateManyWithoutSpeciesNestedInput
    migrationPatterns?: MigrationUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesCreateWithoutDietItemsInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribution?: DistributionCreateNestedManyWithoutSpeciesInput
    migrationPatterns?: MigrationCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateWithoutDietItemsInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribution?: DistributionUncheckedCreateNestedManyWithoutSpeciesInput
    migrationPatterns?: MigrationUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesCreateOrConnectWithoutDietItemsInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutDietItemsInput, SpeciesUncheckedCreateWithoutDietItemsInput>
  }

  export type SpeciesUpsertWithoutDietItemsInput = {
    update: XOR<SpeciesUpdateWithoutDietItemsInput, SpeciesUncheckedUpdateWithoutDietItemsInput>
    create: XOR<SpeciesCreateWithoutDietItemsInput, SpeciesUncheckedCreateWithoutDietItemsInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutDietItemsInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutDietItemsInput, SpeciesUncheckedUpdateWithoutDietItemsInput>
  }

  export type SpeciesUpdateWithoutDietItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribution?: DistributionUpdateManyWithoutSpeciesNestedInput
    migrationPatterns?: MigrationUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateWithoutDietItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribution?: DistributionUncheckedUpdateManyWithoutSpeciesNestedInput
    migrationPatterns?: MigrationUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesCreateWithoutMigrationPatternsInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribution?: DistributionCreateNestedManyWithoutSpeciesInput
    dietItems?: DietItemCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateWithoutMigrationPatternsInput = {
    id?: string
    commonName: string
    scientificName: string
    species: string
    weightMale?: number | null
    weightFemale?: number | null
    nestType?: string | null
    favouriteFood?: string | null
    conservationStatus?: string | null
    identification?: string | null
    habits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribution?: DistributionUncheckedCreateNestedManyWithoutSpeciesInput
    dietItems?: DietItemUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesCreateOrConnectWithoutMigrationPatternsInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutMigrationPatternsInput, SpeciesUncheckedCreateWithoutMigrationPatternsInput>
  }

  export type SpeciesUpsertWithoutMigrationPatternsInput = {
    update: XOR<SpeciesUpdateWithoutMigrationPatternsInput, SpeciesUncheckedUpdateWithoutMigrationPatternsInput>
    create: XOR<SpeciesCreateWithoutMigrationPatternsInput, SpeciesUncheckedCreateWithoutMigrationPatternsInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutMigrationPatternsInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutMigrationPatternsInput, SpeciesUncheckedUpdateWithoutMigrationPatternsInput>
  }

  export type SpeciesUpdateWithoutMigrationPatternsInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribution?: DistributionUpdateManyWithoutSpeciesNestedInput
    dietItems?: DietItemUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateWithoutMigrationPatternsInput = {
    id?: StringFieldUpdateOperationsInput | string
    commonName?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    weightMale?: NullableFloatFieldUpdateOperationsInput | number | null
    weightFemale?: NullableFloatFieldUpdateOperationsInput | number | null
    nestType?: NullableStringFieldUpdateOperationsInput | string | null
    favouriteFood?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribution?: DistributionUncheckedUpdateManyWithoutSpeciesNestedInput
    dietItems?: DietItemUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type UsersCreateWithoutApiUsageInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiKey?: ApiKeyCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutApiUsageInput = {
    userId?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutApiUsageInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutApiUsageInput, UsersUncheckedCreateWithoutApiUsageInput>
  }

  export type UsersUpsertWithoutApiUsageInput = {
    update: XOR<UsersUpdateWithoutApiUsageInput, UsersUncheckedUpdateWithoutApiUsageInput>
    create: XOR<UsersCreateWithoutApiUsageInput, UsersUncheckedCreateWithoutApiUsageInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutApiUsageInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutApiUsageInput, UsersUncheckedUpdateWithoutApiUsageInput>
  }

  export type UsersUpdateWithoutApiUsageInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutApiUsageInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    keyHash: string
    keyLookup: string
    name: string
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    rateLimit?: number
    usageCount?: number
    isActive?: boolean
  }

  export type ApiUsageCreateManyUserInput = {
    id?: string
    apiKey: string
    endpoint: string
    method: string
    ipAddress?: string | null
    statusCode: number
    createdAt?: Date | string
  }

  export type PasswordResetsCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyLookup?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateLimit?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyLookup?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateLimit?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyLookup?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rateLimit?: IntFieldUpdateOperationsInput | number
    usageCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApiUsageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionCreateManySpeciesInput = {
    id?: string
    region: string
    location: string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: string | null
    populationEstimate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietItemCreateManySpeciesInput = {
    id?: string
    foodType: string
    scientificName?: string | null
    commonName?: string | null
    percentage?: number | null
    seasonal?: boolean
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MigrationCreateManySpeciesInput = {
    id?: string
    migrationPeriod: string
    fromLocation: string
    toLocation?: string | null
    distanceKm?: number | null
    duration?: string | null
    ageGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributionUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    populationEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionUncheckedUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    populationEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionUncheckedUpdateManyWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    breedingMonths?: NullableJsonNullValueInput | InputJsonValue
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    populationEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietItemUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    seasonal?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietItemUncheckedUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    seasonal?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietItemUncheckedUpdateManyWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    seasonal?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    migrationPeriod?: StringFieldUpdateOperationsInput | string
    fromLocation?: StringFieldUpdateOperationsInput | string
    toLocation?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationUncheckedUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    migrationPeriod?: StringFieldUpdateOperationsInput | string
    fromLocation?: StringFieldUpdateOperationsInput | string
    toLocation?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationUncheckedUpdateManyWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    migrationPeriod?: StringFieldUpdateOperationsInput | string
    fromLocation?: StringFieldUpdateOperationsInput | string
    toLocation?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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