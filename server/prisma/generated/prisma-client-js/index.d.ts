
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model students
 * 
 */
export type students = $Result.DefaultSelection<Prisma.$studentsPayload>
/**
 * Model admins
 * 
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model event_attendances
 * 
 */
export type event_attendances = $Result.DefaultSelection<Prisma.$event_attendancesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  student: 'student'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Program: {
  BSCS: 'BSCS',
  BSIT: 'BSIT',
  BSIS: 'BSIS'
};

export type Program = (typeof Program)[keyof typeof Program]


export const Status: {
  ongoing: 'ongoing',
  upcoming: 'upcoming',
  not_approved: 'not_approved',
  completed: 'completed'
};

export type Status = (typeof Status)[keyof typeof Status]


export const AttStatus: {
  absent: 'absent',
  pending: 'pending',
  approved: 'approved'
};

export type AttStatus = (typeof AttStatus)[keyof typeof AttStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Program = $Enums.Program

export const Program: typeof $Enums.Program

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type AttStatus = $Enums.AttStatus

export const AttStatus: typeof $Enums.AttStatus

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<ExtArgs>;

  /**
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.adminsDelegate<ExtArgs>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs>;

  /**
   * `prisma.event_attendances`: Exposes CRUD operations for the **event_attendances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_attendances
    * const event_attendances = await prisma.event_attendances.findMany()
    * ```
    */
  get event_attendances(): Prisma.event_attendancesDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
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
    users: 'users',
    students: 'students',
    admins: 'admins',
    events: 'events',
    event_attendances: 'event_attendances'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'students' | 'admins' | 'events' | 'event_attendances'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      students: {
        payload: Prisma.$studentsPayload<ExtArgs>
        fields: Prisma.studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findFirst: {
            args: Prisma.studentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findMany: {
            args: Prisma.studentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          create: {
            args: Prisma.studentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          createMany: {
            args: Prisma.studentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.studentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          update: {
            args: Prisma.studentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          deleteMany: {
            args: Prisma.studentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.studentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.studentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.studentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentsCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>
        fields: Prisma.adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>,
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      event_attendances: {
        payload: Prisma.$event_attendancesPayload<ExtArgs>
        fields: Prisma.event_attendancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_attendancesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_attendancesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload>
          }
          findFirst: {
            args: Prisma.event_attendancesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_attendancesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload>
          }
          findMany: {
            args: Prisma.event_attendancesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload>[]
          }
          create: {
            args: Prisma.event_attendancesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload>
          }
          createMany: {
            args: Prisma.event_attendancesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.event_attendancesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload>
          }
          update: {
            args: Prisma.event_attendancesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload>
          }
          deleteMany: {
            args: Prisma.event_attendancesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.event_attendancesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.event_attendancesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$event_attendancesPayload>
          }
          aggregate: {
            args: Prisma.Event_attendancesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvent_attendances>
          }
          groupBy: {
            args: Prisma.event_attendancesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Event_attendancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_attendancesCountArgs<ExtArgs>,
            result: $Utils.Optional<Event_attendancesCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    events: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | StudentsCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_attendancesWhereInput
  }



  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    attendances: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | EventsCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_attendancesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    last_name: string | null
    first_name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    last_name: string | null
    first_name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    last_name: number
    first_name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    last_name?: true
    first_name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    last_name?: true
    first_name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    last_name?: true
    first_name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    last_name: string
    first_name: string
    email: string
    password: string
    role: $Enums.Role
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
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


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    last_name?: boolean
    first_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    students?: boolean | users$studentsArgs<ExtArgs>
    admins?: boolean | users$adminsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    last_name?: boolean
    first_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | users$studentsArgs<ExtArgs>
    admins?: boolean | users$adminsArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      students: Prisma.$studentsPayload<ExtArgs> | null
      admins: Prisma.$adminsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      last_name: string
      first_name: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
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
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
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
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
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
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    students<T extends users$studentsArgs<ExtArgs> = {}>(args?: Subset<T, users$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    admins<T extends users$adminsArgs<ExtArgs> = {}>(args?: Subset<T, users$adminsArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.students
   */
  export type users$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }


  /**
   * users.admins
   */
  export type users$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    where?: adminsWhereInput
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    year: number | null
    points: number | null
  }

  export type StudentsSumAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    year: number | null
    points: number | null
  }

  export type StudentsMinAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    program: $Enums.Program | null
    year: number | null
    points: number | null
  }

  export type StudentsMaxAggregateOutputType = {
    student_id: number | null
    user_id: number | null
    program: $Enums.Program | null
    year: number | null
    points: number | null
  }

  export type StudentsCountAggregateOutputType = {
    student_id: number
    user_id: number
    program: number
    year: number
    points: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    student_id?: true
    user_id?: true
    year?: true
    points?: true
  }

  export type StudentsSumAggregateInputType = {
    student_id?: true
    user_id?: true
    year?: true
    points?: true
  }

  export type StudentsMinAggregateInputType = {
    student_id?: true
    user_id?: true
    program?: true
    year?: true
    points?: true
  }

  export type StudentsMaxAggregateInputType = {
    student_id?: true
    user_id?: true
    program?: true
    year?: true
    points?: true
  }

  export type StudentsCountAggregateInputType = {
    student_id?: true
    user_id?: true
    program?: true
    year?: true
    points?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithAggregationInput | studentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    student_id: number
    user_id: number
    program: $Enums.Program
    year: number
    points: number
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    user_id?: boolean
    program?: boolean
    year?: boolean
    points?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | students$eventsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectScalar = {
    student_id?: boolean
    user_id?: boolean
    program?: boolean
    year?: boolean
    points?: boolean
  }

  export type studentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | students$eventsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      events: Prisma.$event_attendancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      user_id: number
      program: $Enums.Program
      year: number
      points: number
    }, ExtArgs["result"]["students"]>
    composites: {}
  }


  type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = $Result.GetResult<Prisma.$studentsPayload, S>

  type studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students'], meta: { name: 'students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends studentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Students that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends studentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindFirstArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const studentsWithStudent_idOnly = await prisma.students.findMany({ select: { student_id: true } })
     * 
    **/
    findMany<T extends studentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
    **/
    create<T extends studentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, studentsCreateArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {studentsCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const students = await prisma.students.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends studentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
    **/
    delete<T extends studentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, studentsDeleteArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends studentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, studentsUpdateArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends studentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends studentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
    **/
    upsert<T extends studentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, studentsUpsertArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
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
      T extends studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentsGroupByArgs['orderBy'] }
        : { orderBy?: studentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students model
   */
  readonly fields: studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    events<T extends students$eventsArgs<ExtArgs> = {}>(args?: Subset<T, students$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the students model
   */ 
  interface studentsFieldRefs {
    readonly student_id: FieldRef<"students", 'Int'>
    readonly user_id: FieldRef<"students", 'Int'>
    readonly program: FieldRef<"students", 'Program'>
    readonly year: FieldRef<"students", 'Int'>
    readonly points: FieldRef<"students", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * students findUnique
   */
  export type studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students findFirst
   */
  export type studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }


  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }


  /**
   * students findMany
   */
  export type studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }


  /**
   * students create
   */
  export type studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }


  /**
   * students createMany
   */
  export type studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * students update
   */
  export type studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
  }


  /**
   * students upsert
   */
  export type studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }


  /**
   * students delete
   */
  export type studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
  }


  /**
   * students.events
   */
  export type students$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    where?: event_attendancesWhereInput
    orderBy?: event_attendancesOrderByWithRelationInput | event_attendancesOrderByWithRelationInput[]
    cursor?: event_attendancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_attendancesScalarFieldEnum | Event_attendancesScalarFieldEnum[]
  }


  /**
   * students without action
   */
  export type studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
  }



  /**
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
  }

  export type AdminsSumAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
  }

  export type AdminsMinAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
  }

  export type AdminsMaxAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
  }

  export type AdminsCountAggregateOutputType = {
    admin_id: number
    user_id: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    admin_id?: true
    user_id?: true
  }

  export type AdminsSumAggregateInputType = {
    admin_id?: true
    user_id?: true
  }

  export type AdminsMinAggregateInputType = {
    admin_id?: true
    user_id?: true
  }

  export type AdminsMaxAggregateInputType = {
    admin_id?: true
    user_id?: true
  }

  export type AdminsCountAggregateInputType = {
    admin_id?: true
    user_id?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminsWhereInput
    orderBy?: adminsOrderByWithAggregationInput | adminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    admin_id: number
    user_id: number
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectScalar = {
    admin_id?: boolean
    user_id?: boolean
  }

  export type adminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admins"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_id: number
      user_id: number
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }


  type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = $Result.GetResult<Prisma.$adminsPayload, S>

  type adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admins'], meta: { name: 'admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admins that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminsWithAdmin_idOnly = await prisma.admins.findMany({ select: { admin_id: true } })
     * 
    **/
    findMany<T extends adminsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
    **/
    create<T extends adminsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adminsCreateArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admins = await prisma.admins.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adminsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
    **/
    delete<T extends adminsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
    **/
    upsert<T extends adminsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>
    ): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
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
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admins model
   */
  readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admins model
   */ 
  interface adminsFieldRefs {
    readonly admin_id: FieldRef<"admins", 'Int'>
    readonly user_id: FieldRef<"admins", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }


  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }


  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }


  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }


  /**
   * admins findMany
   */
  export type adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }


  /**
   * admins create
   */
  export type adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>
  }


  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * admins update
   */
  export type adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput
  }


  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
  }


  /**
   * admins upsert
   */
  export type adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
  }


  /**
   * admins delete
   */
  export type adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput
  }


  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput
  }


  /**
   * admins without action
   */
  export type adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminsInclude<ExtArgs> | null
  }



  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    event_id: number | null
    no_of_reg: number | null
    no_of_att: number | null
    CES_points: number | null
  }

  export type EventsSumAggregateOutputType = {
    event_id: number | null
    no_of_reg: number | null
    no_of_att: number | null
    CES_points: number | null
  }

  export type EventsMinAggregateOutputType = {
    event_id: number | null
    status: $Enums.Status | null
    event_title: string | null
    event_desc: string | null
    event_loc: string | null
    event_date: Date | null
    no_of_reg: number | null
    no_of_att: number | null
    CES_points: number | null
  }

  export type EventsMaxAggregateOutputType = {
    event_id: number | null
    status: $Enums.Status | null
    event_title: string | null
    event_desc: string | null
    event_loc: string | null
    event_date: Date | null
    no_of_reg: number | null
    no_of_att: number | null
    CES_points: number | null
  }

  export type EventsCountAggregateOutputType = {
    event_id: number
    status: number
    event_title: number
    event_desc: number
    event_loc: number
    event_date: number
    no_of_reg: number
    no_of_att: number
    CES_points: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    event_id?: true
    no_of_reg?: true
    no_of_att?: true
    CES_points?: true
  }

  export type EventsSumAggregateInputType = {
    event_id?: true
    no_of_reg?: true
    no_of_att?: true
    CES_points?: true
  }

  export type EventsMinAggregateInputType = {
    event_id?: true
    status?: true
    event_title?: true
    event_desc?: true
    event_loc?: true
    event_date?: true
    no_of_reg?: true
    no_of_att?: true
    CES_points?: true
  }

  export type EventsMaxAggregateInputType = {
    event_id?: true
    status?: true
    event_title?: true
    event_desc?: true
    event_loc?: true
    event_date?: true
    no_of_reg?: true
    no_of_att?: true
    CES_points?: true
  }

  export type EventsCountAggregateInputType = {
    event_id?: true
    status?: true
    event_title?: true
    event_desc?: true
    event_loc?: true
    event_date?: true
    no_of_reg?: true
    no_of_att?: true
    CES_points?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    event_id: number
    status: $Enums.Status
    event_title: string
    event_desc: string
    event_loc: string
    event_date: Date
    no_of_reg: number
    no_of_att: number
    CES_points: number
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    status?: boolean
    event_title?: boolean
    event_desc?: boolean
    event_loc?: boolean
    event_date?: boolean
    no_of_reg?: boolean
    no_of_att?: boolean
    CES_points?: boolean
    attendances?: boolean | events$attendancesArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    event_id?: boolean
    status?: boolean
    event_title?: boolean
    event_desc?: boolean
    event_loc?: boolean
    event_date?: boolean
    no_of_reg?: boolean
    no_of_att?: boolean
    CES_points?: boolean
  }

  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | events$attendancesArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      attendances: Prisma.$event_attendancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      event_id: number
      status: $Enums.Status
      event_title: string
      event_desc: string
      event_loc: string
      event_date: Date
      no_of_reg: number
      no_of_att: number
      CES_points: number
    }, ExtArgs["result"]["events"]>
    composites: {}
  }


  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends eventsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Events that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends eventsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `event_id`
     * const eventsWithEvent_idOnly = await prisma.events.findMany({ select: { event_id: true } })
     * 
    **/
    findMany<T extends eventsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
    **/
    create<T extends eventsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, eventsCreateArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Events.
     *     @param {eventsCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const events = await prisma.events.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends eventsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
    **/
    delete<T extends eventsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends eventsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends eventsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends eventsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
    **/
    upsert<T extends eventsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
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
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attendances<T extends events$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, events$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the events model
   */ 
  interface eventsFieldRefs {
    readonly event_id: FieldRef<"events", 'Int'>
    readonly status: FieldRef<"events", 'Status'>
    readonly event_title: FieldRef<"events", 'String'>
    readonly event_desc: FieldRef<"events", 'String'>
    readonly event_loc: FieldRef<"events", 'String'>
    readonly event_date: FieldRef<"events", 'DateTime'>
    readonly no_of_reg: FieldRef<"events", 'Int'>
    readonly no_of_att: FieldRef<"events", 'Int'>
    readonly CES_points: FieldRef<"events", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }


  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
  }


  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }


  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
  }


  /**
   * events.attendances
   */
  export type events$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    where?: event_attendancesWhereInput
    orderBy?: event_attendancesOrderByWithRelationInput | event_attendancesOrderByWithRelationInput[]
    cursor?: event_attendancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_attendancesScalarFieldEnum | Event_attendancesScalarFieldEnum[]
  }


  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
  }



  /**
   * Model event_attendances
   */

  export type AggregateEvent_attendances = {
    _count: Event_attendancesCountAggregateOutputType | null
    _avg: Event_attendancesAvgAggregateOutputType | null
    _sum: Event_attendancesSumAggregateOutputType | null
    _min: Event_attendancesMinAggregateOutputType | null
    _max: Event_attendancesMaxAggregateOutputType | null
  }

  export type Event_attendancesAvgAggregateOutputType = {
    att_id: number | null
    student_id: number | null
    event_id: number | null
  }

  export type Event_attendancesSumAggregateOutputType = {
    att_id: number | null
    student_id: number | null
    event_id: number | null
  }

  export type Event_attendancesMinAggregateOutputType = {
    att_id: number | null
    att_status: $Enums.AttStatus | null
    student_id: number | null
    event_id: number | null
  }

  export type Event_attendancesMaxAggregateOutputType = {
    att_id: number | null
    att_status: $Enums.AttStatus | null
    student_id: number | null
    event_id: number | null
  }

  export type Event_attendancesCountAggregateOutputType = {
    att_id: number
    att_status: number
    student_id: number
    event_id: number
    _all: number
  }


  export type Event_attendancesAvgAggregateInputType = {
    att_id?: true
    student_id?: true
    event_id?: true
  }

  export type Event_attendancesSumAggregateInputType = {
    att_id?: true
    student_id?: true
    event_id?: true
  }

  export type Event_attendancesMinAggregateInputType = {
    att_id?: true
    att_status?: true
    student_id?: true
    event_id?: true
  }

  export type Event_attendancesMaxAggregateInputType = {
    att_id?: true
    att_status?: true
    student_id?: true
    event_id?: true
  }

  export type Event_attendancesCountAggregateInputType = {
    att_id?: true
    att_status?: true
    student_id?: true
    event_id?: true
    _all?: true
  }

  export type Event_attendancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_attendances to aggregate.
     */
    where?: event_attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_attendances to fetch.
     */
    orderBy?: event_attendancesOrderByWithRelationInput | event_attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_attendances
    **/
    _count?: true | Event_attendancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_attendancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_attendancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_attendancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_attendancesMaxAggregateInputType
  }

  export type GetEvent_attendancesAggregateType<T extends Event_attendancesAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_attendances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_attendances[P]>
      : GetScalarType<T[P], AggregateEvent_attendances[P]>
  }




  export type event_attendancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_attendancesWhereInput
    orderBy?: event_attendancesOrderByWithAggregationInput | event_attendancesOrderByWithAggregationInput[]
    by: Event_attendancesScalarFieldEnum[] | Event_attendancesScalarFieldEnum
    having?: event_attendancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_attendancesCountAggregateInputType | true
    _avg?: Event_attendancesAvgAggregateInputType
    _sum?: Event_attendancesSumAggregateInputType
    _min?: Event_attendancesMinAggregateInputType
    _max?: Event_attendancesMaxAggregateInputType
  }

  export type Event_attendancesGroupByOutputType = {
    att_id: number
    att_status: $Enums.AttStatus
    student_id: number
    event_id: number
    _count: Event_attendancesCountAggregateOutputType | null
    _avg: Event_attendancesAvgAggregateOutputType | null
    _sum: Event_attendancesSumAggregateOutputType | null
    _min: Event_attendancesMinAggregateOutputType | null
    _max: Event_attendancesMaxAggregateOutputType | null
  }

  type GetEvent_attendancesGroupByPayload<T extends event_attendancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_attendancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_attendancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_attendancesGroupByOutputType[P]>
            : GetScalarType<T[P], Event_attendancesGroupByOutputType[P]>
        }
      >
    >


  export type event_attendancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    att_id?: boolean
    att_status?: boolean
    student_id?: boolean
    event_id?: boolean
    student?: boolean | studentsDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event_attendances"]>

  export type event_attendancesSelectScalar = {
    att_id?: boolean
    att_status?: boolean
    student_id?: boolean
    event_id?: boolean
  }

  export type event_attendancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentsDefaultArgs<ExtArgs>
    events?: boolean | eventsDefaultArgs<ExtArgs>
  }


  export type $event_attendancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_attendances"
    objects: {
      student: Prisma.$studentsPayload<ExtArgs>
      events: Prisma.$eventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      att_id: number
      att_status: $Enums.AttStatus
      student_id: number
      event_id: number
    }, ExtArgs["result"]["event_attendances"]>
    composites: {}
  }


  type event_attendancesGetPayload<S extends boolean | null | undefined | event_attendancesDefaultArgs> = $Result.GetResult<Prisma.$event_attendancesPayload, S>

  type event_attendancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<event_attendancesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Event_attendancesCountAggregateInputType | true
    }

  export interface event_attendancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_attendances'], meta: { name: 'event_attendances' } }
    /**
     * Find zero or one Event_attendances that matches the filter.
     * @param {event_attendancesFindUniqueArgs} args - Arguments to find a Event_attendances
     * @example
     * // Get one Event_attendances
     * const event_attendances = await prisma.event_attendances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends event_attendancesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, event_attendancesFindUniqueArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Event_attendances that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {event_attendancesFindUniqueOrThrowArgs} args - Arguments to find a Event_attendances
     * @example
     * // Get one Event_attendances
     * const event_attendances = await prisma.event_attendances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends event_attendancesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, event_attendancesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Event_attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_attendancesFindFirstArgs} args - Arguments to find a Event_attendances
     * @example
     * // Get one Event_attendances
     * const event_attendances = await prisma.event_attendances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends event_attendancesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, event_attendancesFindFirstArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Event_attendances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_attendancesFindFirstOrThrowArgs} args - Arguments to find a Event_attendances
     * @example
     * // Get one Event_attendances
     * const event_attendances = await prisma.event_attendances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends event_attendancesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, event_attendancesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Event_attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_attendancesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_attendances
     * const event_attendances = await prisma.event_attendances.findMany()
     * 
     * // Get first 10 Event_attendances
     * const event_attendances = await prisma.event_attendances.findMany({ take: 10 })
     * 
     * // Only select the `att_id`
     * const event_attendancesWithAtt_idOnly = await prisma.event_attendances.findMany({ select: { att_id: true } })
     * 
    **/
    findMany<T extends event_attendancesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, event_attendancesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Event_attendances.
     * @param {event_attendancesCreateArgs} args - Arguments to create a Event_attendances.
     * @example
     * // Create one Event_attendances
     * const Event_attendances = await prisma.event_attendances.create({
     *   data: {
     *     // ... data to create a Event_attendances
     *   }
     * })
     * 
    **/
    create<T extends event_attendancesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, event_attendancesCreateArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Event_attendances.
     *     @param {event_attendancesCreateManyArgs} args - Arguments to create many Event_attendances.
     *     @example
     *     // Create many Event_attendances
     *     const event_attendances = await prisma.event_attendances.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends event_attendancesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, event_attendancesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event_attendances.
     * @param {event_attendancesDeleteArgs} args - Arguments to delete one Event_attendances.
     * @example
     * // Delete one Event_attendances
     * const Event_attendances = await prisma.event_attendances.delete({
     *   where: {
     *     // ... filter to delete one Event_attendances
     *   }
     * })
     * 
    **/
    delete<T extends event_attendancesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, event_attendancesDeleteArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Event_attendances.
     * @param {event_attendancesUpdateArgs} args - Arguments to update one Event_attendances.
     * @example
     * // Update one Event_attendances
     * const event_attendances = await prisma.event_attendances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends event_attendancesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, event_attendancesUpdateArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Event_attendances.
     * @param {event_attendancesDeleteManyArgs} args - Arguments to filter Event_attendances to delete.
     * @example
     * // Delete a few Event_attendances
     * const { count } = await prisma.event_attendances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends event_attendancesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, event_attendancesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_attendancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_attendances
     * const event_attendances = await prisma.event_attendances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends event_attendancesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, event_attendancesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_attendances.
     * @param {event_attendancesUpsertArgs} args - Arguments to update or create a Event_attendances.
     * @example
     * // Update or create a Event_attendances
     * const event_attendances = await prisma.event_attendances.upsert({
     *   create: {
     *     // ... data to create a Event_attendances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_attendances we want to update
     *   }
     * })
    **/
    upsert<T extends event_attendancesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, event_attendancesUpsertArgs<ExtArgs>>
    ): Prisma__event_attendancesClient<$Result.GetResult<Prisma.$event_attendancesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Event_attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_attendancesCountArgs} args - Arguments to filter Event_attendances to count.
     * @example
     * // Count the number of Event_attendances
     * const count = await prisma.event_attendances.count({
     *   where: {
     *     // ... the filter for the Event_attendances we want to count
     *   }
     * })
    **/
    count<T extends event_attendancesCountArgs>(
      args?: Subset<T, event_attendancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_attendancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_attendancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Event_attendancesAggregateArgs>(args: Subset<T, Event_attendancesAggregateArgs>): Prisma.PrismaPromise<GetEvent_attendancesAggregateType<T>>

    /**
     * Group by Event_attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_attendancesGroupByArgs} args - Group by arguments.
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
      T extends event_attendancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_attendancesGroupByArgs['orderBy'] }
        : { orderBy?: event_attendancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, event_attendancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_attendancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_attendances model
   */
  readonly fields: event_attendancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_attendances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_attendancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends studentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentsDefaultArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the event_attendances model
   */ 
  interface event_attendancesFieldRefs {
    readonly att_id: FieldRef<"event_attendances", 'Int'>
    readonly att_status: FieldRef<"event_attendances", 'AttStatus'>
    readonly student_id: FieldRef<"event_attendances", 'Int'>
    readonly event_id: FieldRef<"event_attendances", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * event_attendances findUnique
   */
  export type event_attendancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * Filter, which event_attendances to fetch.
     */
    where: event_attendancesWhereUniqueInput
  }


  /**
   * event_attendances findUniqueOrThrow
   */
  export type event_attendancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * Filter, which event_attendances to fetch.
     */
    where: event_attendancesWhereUniqueInput
  }


  /**
   * event_attendances findFirst
   */
  export type event_attendancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * Filter, which event_attendances to fetch.
     */
    where?: event_attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_attendances to fetch.
     */
    orderBy?: event_attendancesOrderByWithRelationInput | event_attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_attendances.
     */
    cursor?: event_attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_attendances.
     */
    distinct?: Event_attendancesScalarFieldEnum | Event_attendancesScalarFieldEnum[]
  }


  /**
   * event_attendances findFirstOrThrow
   */
  export type event_attendancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * Filter, which event_attendances to fetch.
     */
    where?: event_attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_attendances to fetch.
     */
    orderBy?: event_attendancesOrderByWithRelationInput | event_attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_attendances.
     */
    cursor?: event_attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_attendances.
     */
    distinct?: Event_attendancesScalarFieldEnum | Event_attendancesScalarFieldEnum[]
  }


  /**
   * event_attendances findMany
   */
  export type event_attendancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * Filter, which event_attendances to fetch.
     */
    where?: event_attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_attendances to fetch.
     */
    orderBy?: event_attendancesOrderByWithRelationInput | event_attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_attendances.
     */
    cursor?: event_attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_attendances.
     */
    skip?: number
    distinct?: Event_attendancesScalarFieldEnum | Event_attendancesScalarFieldEnum[]
  }


  /**
   * event_attendances create
   */
  export type event_attendancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * The data needed to create a event_attendances.
     */
    data: XOR<event_attendancesCreateInput, event_attendancesUncheckedCreateInput>
  }


  /**
   * event_attendances createMany
   */
  export type event_attendancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_attendances.
     */
    data: event_attendancesCreateManyInput | event_attendancesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * event_attendances update
   */
  export type event_attendancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * The data needed to update a event_attendances.
     */
    data: XOR<event_attendancesUpdateInput, event_attendancesUncheckedUpdateInput>
    /**
     * Choose, which event_attendances to update.
     */
    where: event_attendancesWhereUniqueInput
  }


  /**
   * event_attendances updateMany
   */
  export type event_attendancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_attendances.
     */
    data: XOR<event_attendancesUpdateManyMutationInput, event_attendancesUncheckedUpdateManyInput>
    /**
     * Filter which event_attendances to update
     */
    where?: event_attendancesWhereInput
  }


  /**
   * event_attendances upsert
   */
  export type event_attendancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * The filter to search for the event_attendances to update in case it exists.
     */
    where: event_attendancesWhereUniqueInput
    /**
     * In case the event_attendances found by the `where` argument doesn't exist, create a new event_attendances with this data.
     */
    create: XOR<event_attendancesCreateInput, event_attendancesUncheckedCreateInput>
    /**
     * In case the event_attendances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_attendancesUpdateInput, event_attendancesUncheckedUpdateInput>
  }


  /**
   * event_attendances delete
   */
  export type event_attendancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
    /**
     * Filter which event_attendances to delete.
     */
    where: event_attendancesWhereUniqueInput
  }


  /**
   * event_attendances deleteMany
   */
  export type event_attendancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_attendances to delete
     */
    where?: event_attendancesWhereInput
  }


  /**
   * event_attendances without action
   */
  export type event_attendancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_attendances
     */
    select?: event_attendancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: event_attendancesInclude<ExtArgs> | null
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
    user_id: 'user_id',
    last_name: 'last_name',
    first_name: 'first_name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    student_id: 'student_id',
    user_id: 'user_id',
    program: 'program',
    year: 'year',
    points: 'points'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const AdminsScalarFieldEnum: {
    admin_id: 'admin_id',
    user_id: 'user_id'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    event_id: 'event_id',
    status: 'status',
    event_title: 'event_title',
    event_desc: 'event_desc',
    event_loc: 'event_loc',
    event_date: 'event_date',
    no_of_reg: 'no_of_reg',
    no_of_att: 'no_of_att',
    CES_points: 'CES_points'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const Event_attendancesScalarFieldEnum: {
    att_id: 'att_id',
    att_status: 'att_status',
    student_id: 'student_id',
    event_id: 'event_id'
  };

  export type Event_attendancesScalarFieldEnum = (typeof Event_attendancesScalarFieldEnum)[keyof typeof Event_attendancesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Program'
   */
  export type EnumProgramFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Program'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AttStatus'
   */
  export type EnumAttStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    last_name?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    admins?: XOR<AdminsNullableRelationFilter, adminsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    students?: studentsOrderByWithRelationInput
    admins?: adminsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    last_name?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    admins?: XOR<AdminsNullableRelationFilter, adminsWhereInput> | null
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    last_name?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
  }

  export type studentsWhereInput = {
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    student_id?: IntFilter<"students"> | number
    user_id?: IntFilter<"students"> | number
    program?: EnumProgramFilter<"students"> | $Enums.Program
    year?: IntFilter<"students"> | number
    points?: IntFilter<"students"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
    events?: Event_attendancesListRelationFilter
  }

  export type studentsOrderByWithRelationInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    program?: SortOrder
    year?: SortOrder
    points?: SortOrder
    user?: usersOrderByWithRelationInput
    events?: event_attendancesOrderByRelationAggregateInput
  }

  export type studentsWhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    user_id?: number
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    program?: EnumProgramFilter<"students"> | $Enums.Program
    year?: IntFilter<"students"> | number
    points?: IntFilter<"students"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
    events?: Event_attendancesListRelationFilter
  }, "student_id" | "user_id">

  export type studentsOrderByWithAggregationInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    program?: SortOrder
    year?: SortOrder
    points?: SortOrder
    _count?: studentsCountOrderByAggregateInput
    _avg?: studentsAvgOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
    _sum?: studentsSumOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    OR?: studentsScalarWhereWithAggregatesInput[]
    NOT?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"students"> | number
    user_id?: IntWithAggregatesFilter<"students"> | number
    program?: EnumProgramWithAggregatesFilter<"students"> | $Enums.Program
    year?: IntWithAggregatesFilter<"students"> | number
    points?: IntWithAggregatesFilter<"students"> | number
  }

  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    admin_id?: IntFilter<"admins"> | number
    user_id?: IntFilter<"admins"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type adminsOrderByWithRelationInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type adminsWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number
    user_id?: number
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }, "admin_id" | "user_id">

  export type adminsOrderByWithAggregationInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
    _count?: adminsCountOrderByAggregateInput
    _avg?: adminsAvgOrderByAggregateInput
    _max?: adminsMaxOrderByAggregateInput
    _min?: adminsMinOrderByAggregateInput
    _sum?: adminsSumOrderByAggregateInput
  }

  export type adminsScalarWhereWithAggregatesInput = {
    AND?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    OR?: adminsScalarWhereWithAggregatesInput[]
    NOT?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    admin_id?: IntWithAggregatesFilter<"admins"> | number
    user_id?: IntWithAggregatesFilter<"admins"> | number
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    event_id?: IntFilter<"events"> | number
    status?: EnumStatusFilter<"events"> | $Enums.Status
    event_title?: StringFilter<"events"> | string
    event_desc?: StringFilter<"events"> | string
    event_loc?: StringFilter<"events"> | string
    event_date?: DateTimeFilter<"events"> | Date | string
    no_of_reg?: IntFilter<"events"> | number
    no_of_att?: IntFilter<"events"> | number
    CES_points?: IntFilter<"events"> | number
    attendances?: Event_attendancesListRelationFilter
  }

  export type eventsOrderByWithRelationInput = {
    event_id?: SortOrder
    status?: SortOrder
    event_title?: SortOrder
    event_desc?: SortOrder
    event_loc?: SortOrder
    event_date?: SortOrder
    no_of_reg?: SortOrder
    no_of_att?: SortOrder
    CES_points?: SortOrder
    attendances?: event_attendancesOrderByRelationAggregateInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    event_id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    status?: EnumStatusFilter<"events"> | $Enums.Status
    event_title?: StringFilter<"events"> | string
    event_desc?: StringFilter<"events"> | string
    event_loc?: StringFilter<"events"> | string
    event_date?: DateTimeFilter<"events"> | Date | string
    no_of_reg?: IntFilter<"events"> | number
    no_of_att?: IntFilter<"events"> | number
    CES_points?: IntFilter<"events"> | number
    attendances?: Event_attendancesListRelationFilter
  }, "event_id">

  export type eventsOrderByWithAggregationInput = {
    event_id?: SortOrder
    status?: SortOrder
    event_title?: SortOrder
    event_desc?: SortOrder
    event_loc?: SortOrder
    event_date?: SortOrder
    no_of_reg?: SortOrder
    no_of_att?: SortOrder
    CES_points?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    event_id?: IntWithAggregatesFilter<"events"> | number
    status?: EnumStatusWithAggregatesFilter<"events"> | $Enums.Status
    event_title?: StringWithAggregatesFilter<"events"> | string
    event_desc?: StringWithAggregatesFilter<"events"> | string
    event_loc?: StringWithAggregatesFilter<"events"> | string
    event_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    no_of_reg?: IntWithAggregatesFilter<"events"> | number
    no_of_att?: IntWithAggregatesFilter<"events"> | number
    CES_points?: IntWithAggregatesFilter<"events"> | number
  }

  export type event_attendancesWhereInput = {
    AND?: event_attendancesWhereInput | event_attendancesWhereInput[]
    OR?: event_attendancesWhereInput[]
    NOT?: event_attendancesWhereInput | event_attendancesWhereInput[]
    att_id?: IntFilter<"event_attendances"> | number
    att_status?: EnumAttStatusFilter<"event_attendances"> | $Enums.AttStatus
    student_id?: IntFilter<"event_attendances"> | number
    event_id?: IntFilter<"event_attendances"> | number
    student?: XOR<StudentsRelationFilter, studentsWhereInput>
    events?: XOR<EventsRelationFilter, eventsWhereInput>
  }

  export type event_attendancesOrderByWithRelationInput = {
    att_id?: SortOrder
    att_status?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
    student?: studentsOrderByWithRelationInput
    events?: eventsOrderByWithRelationInput
  }

  export type event_attendancesWhereUniqueInput = Prisma.AtLeast<{
    att_id?: number
    AND?: event_attendancesWhereInput | event_attendancesWhereInput[]
    OR?: event_attendancesWhereInput[]
    NOT?: event_attendancesWhereInput | event_attendancesWhereInput[]
    att_status?: EnumAttStatusFilter<"event_attendances"> | $Enums.AttStatus
    student_id?: IntFilter<"event_attendances"> | number
    event_id?: IntFilter<"event_attendances"> | number
    student?: XOR<StudentsRelationFilter, studentsWhereInput>
    events?: XOR<EventsRelationFilter, eventsWhereInput>
  }, "att_id">

  export type event_attendancesOrderByWithAggregationInput = {
    att_id?: SortOrder
    att_status?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
    _count?: event_attendancesCountOrderByAggregateInput
    _avg?: event_attendancesAvgOrderByAggregateInput
    _max?: event_attendancesMaxOrderByAggregateInput
    _min?: event_attendancesMinOrderByAggregateInput
    _sum?: event_attendancesSumOrderByAggregateInput
  }

  export type event_attendancesScalarWhereWithAggregatesInput = {
    AND?: event_attendancesScalarWhereWithAggregatesInput | event_attendancesScalarWhereWithAggregatesInput[]
    OR?: event_attendancesScalarWhereWithAggregatesInput[]
    NOT?: event_attendancesScalarWhereWithAggregatesInput | event_attendancesScalarWhereWithAggregatesInput[]
    att_id?: IntWithAggregatesFilter<"event_attendances"> | number
    att_status?: EnumAttStatusWithAggregatesFilter<"event_attendances"> | $Enums.AttStatus
    student_id?: IntWithAggregatesFilter<"event_attendances"> | number
    event_id?: IntWithAggregatesFilter<"event_attendances"> | number
  }

  export type usersCreateInput = {
    last_name: string
    first_name: string
    email: string
    password: string
    role?: $Enums.Role
    students?: studentsCreateNestedOneWithoutUserInput
    admins?: adminsCreateNestedOneWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    last_name: string
    first_name: string
    email: string
    password: string
    role?: $Enums.Role
    students?: studentsUncheckedCreateNestedOneWithoutUserInput
    admins?: adminsUncheckedCreateNestedOneWithoutUserInput
  }

  export type usersUpdateInput = {
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    students?: studentsUpdateOneWithoutUserNestedInput
    admins?: adminsUpdateOneWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    students?: studentsUncheckedUpdateOneWithoutUserNestedInput
    admins?: adminsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    last_name: string
    first_name: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type usersUpdateManyMutationInput = {
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type studentsCreateInput = {
    program?: $Enums.Program
    year: number
    points?: number
    user: usersCreateNestedOneWithoutStudentsInput
    events?: event_attendancesCreateNestedManyWithoutStudentInput
  }

  export type studentsUncheckedCreateInput = {
    student_id?: number
    user_id: number
    program?: $Enums.Program
    year: number
    points?: number
    events?: event_attendancesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentsUpdateInput = {
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutStudentsNestedInput
    events?: event_attendancesUpdateManyWithoutStudentNestedInput
  }

  export type studentsUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    events?: event_attendancesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentsCreateManyInput = {
    student_id?: number
    user_id: number
    program?: $Enums.Program
    year: number
    points?: number
  }

  export type studentsUpdateManyMutationInput = {
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type studentsUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type adminsCreateInput = {
    user: usersCreateNestedOneWithoutAdminsInput
  }

  export type adminsUncheckedCreateInput = {
    admin_id?: number
    user_id: number
  }

  export type adminsUpdateInput = {
    user?: usersUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type adminsUncheckedUpdateInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type adminsCreateManyInput = {
    admin_id?: number
    user_id: number
  }

  export type adminsUpdateManyMutationInput = {

  }

  export type adminsUncheckedUpdateManyInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type eventsCreateInput = {
    status: $Enums.Status
    event_title: string
    event_desc: string
    event_loc: string
    event_date: Date | string
    no_of_reg?: number
    no_of_att?: number
    CES_points?: number
    attendances?: event_attendancesCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    event_id?: number
    status: $Enums.Status
    event_title: string
    event_desc: string
    event_loc: string
    event_date: Date | string
    no_of_reg?: number
    no_of_att?: number
    CES_points?: number
    attendances?: event_attendancesUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    event_title?: StringFieldUpdateOperationsInput | string
    event_desc?: StringFieldUpdateOperationsInput | string
    event_loc?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_reg?: IntFieldUpdateOperationsInput | number
    no_of_att?: IntFieldUpdateOperationsInput | number
    CES_points?: IntFieldUpdateOperationsInput | number
    attendances?: event_attendancesUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    event_title?: StringFieldUpdateOperationsInput | string
    event_desc?: StringFieldUpdateOperationsInput | string
    event_loc?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_reg?: IntFieldUpdateOperationsInput | number
    no_of_att?: IntFieldUpdateOperationsInput | number
    CES_points?: IntFieldUpdateOperationsInput | number
    attendances?: event_attendancesUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateManyInput = {
    event_id?: number
    status: $Enums.Status
    event_title: string
    event_desc: string
    event_loc: string
    event_date: Date | string
    no_of_reg?: number
    no_of_att?: number
    CES_points?: number
  }

  export type eventsUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    event_title?: StringFieldUpdateOperationsInput | string
    event_desc?: StringFieldUpdateOperationsInput | string
    event_loc?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_reg?: IntFieldUpdateOperationsInput | number
    no_of_att?: IntFieldUpdateOperationsInput | number
    CES_points?: IntFieldUpdateOperationsInput | number
  }

  export type eventsUncheckedUpdateManyInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    event_title?: StringFieldUpdateOperationsInput | string
    event_desc?: StringFieldUpdateOperationsInput | string
    event_loc?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_reg?: IntFieldUpdateOperationsInput | number
    no_of_att?: IntFieldUpdateOperationsInput | number
    CES_points?: IntFieldUpdateOperationsInput | number
  }

  export type event_attendancesCreateInput = {
    att_status?: $Enums.AttStatus
    student: studentsCreateNestedOneWithoutEventsInput
    events: eventsCreateNestedOneWithoutAttendancesInput
  }

  export type event_attendancesUncheckedCreateInput = {
    att_id?: number
    att_status?: $Enums.AttStatus
    student_id: number
    event_id: number
  }

  export type event_attendancesUpdateInput = {
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    student?: studentsUpdateOneRequiredWithoutEventsNestedInput
    events?: eventsUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type event_attendancesUncheckedUpdateInput = {
    att_id?: IntFieldUpdateOperationsInput | number
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    student_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type event_attendancesCreateManyInput = {
    att_id?: number
    att_status?: $Enums.AttStatus
    student_id: number
    event_id: number
  }

  export type event_attendancesUpdateManyMutationInput = {
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
  }

  export type event_attendancesUncheckedUpdateManyInput = {
    att_id?: IntFieldUpdateOperationsInput | number
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    student_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StudentsNullableRelationFilter = {
    is?: studentsWhereInput | null
    isNot?: studentsWhereInput | null
  }

  export type AdminsNullableRelationFilter = {
    is?: adminsWhereInput | null
    isNot?: adminsWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumProgramFilter<$PrismaModel = never> = {
    equals?: $Enums.Program | EnumProgramFieldRefInput<$PrismaModel>
    in?: $Enums.Program[]
    notIn?: $Enums.Program[]
    not?: NestedEnumProgramFilter<$PrismaModel> | $Enums.Program
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Event_attendancesListRelationFilter = {
    every?: event_attendancesWhereInput
    some?: event_attendancesWhereInput
    none?: event_attendancesWhereInput
  }

  export type event_attendancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentsCountOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    program?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type studentsAvgOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    program?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    program?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type studentsSumOrderByAggregateInput = {
    student_id?: SortOrder
    user_id?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type EnumProgramWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Program | EnumProgramFieldRefInput<$PrismaModel>
    in?: $Enums.Program[]
    notIn?: $Enums.Program[]
    not?: NestedEnumProgramWithAggregatesFilter<$PrismaModel> | $Enums.Program
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramFilter<$PrismaModel>
    _max?: NestedEnumProgramFilter<$PrismaModel>
  }

  export type adminsCountOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
  }

  export type adminsAvgOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
  }

  export type adminsMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
  }

  export type adminsMinOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
  }

  export type adminsSumOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type eventsCountOrderByAggregateInput = {
    event_id?: SortOrder
    status?: SortOrder
    event_title?: SortOrder
    event_desc?: SortOrder
    event_loc?: SortOrder
    event_date?: SortOrder
    no_of_reg?: SortOrder
    no_of_att?: SortOrder
    CES_points?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    event_id?: SortOrder
    no_of_reg?: SortOrder
    no_of_att?: SortOrder
    CES_points?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    event_id?: SortOrder
    status?: SortOrder
    event_title?: SortOrder
    event_desc?: SortOrder
    event_loc?: SortOrder
    event_date?: SortOrder
    no_of_reg?: SortOrder
    no_of_att?: SortOrder
    CES_points?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    event_id?: SortOrder
    status?: SortOrder
    event_title?: SortOrder
    event_desc?: SortOrder
    event_loc?: SortOrder
    event_date?: SortOrder
    no_of_reg?: SortOrder
    no_of_att?: SortOrder
    CES_points?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    event_id?: SortOrder
    no_of_reg?: SortOrder
    no_of_att?: SortOrder
    CES_points?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type EnumAttStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttStatus | EnumAttStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttStatus[]
    notIn?: $Enums.AttStatus[]
    not?: NestedEnumAttStatusFilter<$PrismaModel> | $Enums.AttStatus
  }

  export type StudentsRelationFilter = {
    is?: studentsWhereInput
    isNot?: studentsWhereInput
  }

  export type EventsRelationFilter = {
    is?: eventsWhereInput
    isNot?: eventsWhereInput
  }

  export type event_attendancesCountOrderByAggregateInput = {
    att_id?: SortOrder
    att_status?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
  }

  export type event_attendancesAvgOrderByAggregateInput = {
    att_id?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
  }

  export type event_attendancesMaxOrderByAggregateInput = {
    att_id?: SortOrder
    att_status?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
  }

  export type event_attendancesMinOrderByAggregateInput = {
    att_id?: SortOrder
    att_status?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
  }

  export type event_attendancesSumOrderByAggregateInput = {
    att_id?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
  }

  export type EnumAttStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttStatus | EnumAttStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttStatus[]
    notIn?: $Enums.AttStatus[]
    not?: NestedEnumAttStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttStatusFilter<$PrismaModel>
    _max?: NestedEnumAttStatusFilter<$PrismaModel>
  }

  export type studentsCreateNestedOneWithoutUserInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput
    connect?: studentsWhereUniqueInput
  }

  export type adminsCreateNestedOneWithoutUserInput = {
    create?: XOR<adminsCreateWithoutUserInput, adminsUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUserInput
    connect?: adminsWhereUniqueInput
  }

  export type studentsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput
    connect?: studentsWhereUniqueInput
  }

  export type adminsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<adminsCreateWithoutUserInput, adminsUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUserInput
    connect?: adminsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type studentsUpdateOneWithoutUserNestedInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput
    upsert?: studentsUpsertWithoutUserInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutUserInput, studentsUpdateWithoutUserInput>, studentsUncheckedUpdateWithoutUserInput>
  }

  export type adminsUpdateOneWithoutUserNestedInput = {
    create?: XOR<adminsCreateWithoutUserInput, adminsUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUserInput
    upsert?: adminsUpsertWithoutUserInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutUserInput, adminsUpdateWithoutUserInput>, adminsUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type studentsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput
    upsert?: studentsUpsertWithoutUserInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutUserInput, studentsUpdateWithoutUserInput>, studentsUncheckedUpdateWithoutUserInput>
  }

  export type adminsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<adminsCreateWithoutUserInput, adminsUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUserInput
    upsert?: adminsUpsertWithoutUserInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutUserInput, adminsUpdateWithoutUserInput>, adminsUncheckedUpdateWithoutUserInput>
  }

  export type usersCreateNestedOneWithoutStudentsInput = {
    create?: XOR<usersCreateWithoutStudentsInput, usersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutStudentsInput
    connect?: usersWhereUniqueInput
  }

  export type event_attendancesCreateNestedManyWithoutStudentInput = {
    create?: XOR<event_attendancesCreateWithoutStudentInput, event_attendancesUncheckedCreateWithoutStudentInput> | event_attendancesCreateWithoutStudentInput[] | event_attendancesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutStudentInput | event_attendancesCreateOrConnectWithoutStudentInput[]
    createMany?: event_attendancesCreateManyStudentInputEnvelope
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
  }

  export type event_attendancesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<event_attendancesCreateWithoutStudentInput, event_attendancesUncheckedCreateWithoutStudentInput> | event_attendancesCreateWithoutStudentInput[] | event_attendancesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutStudentInput | event_attendancesCreateOrConnectWithoutStudentInput[]
    createMany?: event_attendancesCreateManyStudentInputEnvelope
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
  }

  export type EnumProgramFieldUpdateOperationsInput = {
    set?: $Enums.Program
  }

  export type usersUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<usersCreateWithoutStudentsInput, usersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutStudentsInput
    upsert?: usersUpsertWithoutStudentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStudentsInput, usersUpdateWithoutStudentsInput>, usersUncheckedUpdateWithoutStudentsInput>
  }

  export type event_attendancesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<event_attendancesCreateWithoutStudentInput, event_attendancesUncheckedCreateWithoutStudentInput> | event_attendancesCreateWithoutStudentInput[] | event_attendancesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutStudentInput | event_attendancesCreateOrConnectWithoutStudentInput[]
    upsert?: event_attendancesUpsertWithWhereUniqueWithoutStudentInput | event_attendancesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: event_attendancesCreateManyStudentInputEnvelope
    set?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    disconnect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    delete?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    update?: event_attendancesUpdateWithWhereUniqueWithoutStudentInput | event_attendancesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: event_attendancesUpdateManyWithWhereWithoutStudentInput | event_attendancesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: event_attendancesScalarWhereInput | event_attendancesScalarWhereInput[]
  }

  export type event_attendancesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<event_attendancesCreateWithoutStudentInput, event_attendancesUncheckedCreateWithoutStudentInput> | event_attendancesCreateWithoutStudentInput[] | event_attendancesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutStudentInput | event_attendancesCreateOrConnectWithoutStudentInput[]
    upsert?: event_attendancesUpsertWithWhereUniqueWithoutStudentInput | event_attendancesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: event_attendancesCreateManyStudentInputEnvelope
    set?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    disconnect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    delete?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    update?: event_attendancesUpdateWithWhereUniqueWithoutStudentInput | event_attendancesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: event_attendancesUpdateManyWithWhereWithoutStudentInput | event_attendancesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: event_attendancesScalarWhereInput | event_attendancesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutAdminsInput = {
    create?: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminsInput
    upsert?: usersUpsertWithoutAdminsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAdminsInput, usersUpdateWithoutAdminsInput>, usersUncheckedUpdateWithoutAdminsInput>
  }

  export type event_attendancesCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_attendancesCreateWithoutEventsInput, event_attendancesUncheckedCreateWithoutEventsInput> | event_attendancesCreateWithoutEventsInput[] | event_attendancesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutEventsInput | event_attendancesCreateOrConnectWithoutEventsInput[]
    createMany?: event_attendancesCreateManyEventsInputEnvelope
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
  }

  export type event_attendancesUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_attendancesCreateWithoutEventsInput, event_attendancesUncheckedCreateWithoutEventsInput> | event_attendancesCreateWithoutEventsInput[] | event_attendancesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutEventsInput | event_attendancesCreateOrConnectWithoutEventsInput[]
    createMany?: event_attendancesCreateManyEventsInputEnvelope
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type event_attendancesUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_attendancesCreateWithoutEventsInput, event_attendancesUncheckedCreateWithoutEventsInput> | event_attendancesCreateWithoutEventsInput[] | event_attendancesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutEventsInput | event_attendancesCreateOrConnectWithoutEventsInput[]
    upsert?: event_attendancesUpsertWithWhereUniqueWithoutEventsInput | event_attendancesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_attendancesCreateManyEventsInputEnvelope
    set?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    disconnect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    delete?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    update?: event_attendancesUpdateWithWhereUniqueWithoutEventsInput | event_attendancesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_attendancesUpdateManyWithWhereWithoutEventsInput | event_attendancesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_attendancesScalarWhereInput | event_attendancesScalarWhereInput[]
  }

  export type event_attendancesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_attendancesCreateWithoutEventsInput, event_attendancesUncheckedCreateWithoutEventsInput> | event_attendancesCreateWithoutEventsInput[] | event_attendancesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_attendancesCreateOrConnectWithoutEventsInput | event_attendancesCreateOrConnectWithoutEventsInput[]
    upsert?: event_attendancesUpsertWithWhereUniqueWithoutEventsInput | event_attendancesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_attendancesCreateManyEventsInputEnvelope
    set?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    disconnect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    delete?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    connect?: event_attendancesWhereUniqueInput | event_attendancesWhereUniqueInput[]
    update?: event_attendancesUpdateWithWhereUniqueWithoutEventsInput | event_attendancesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_attendancesUpdateManyWithWhereWithoutEventsInput | event_attendancesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_attendancesScalarWhereInput | event_attendancesScalarWhereInput[]
  }

  export type studentsCreateNestedOneWithoutEventsInput = {
    create?: XOR<studentsCreateWithoutEventsInput, studentsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutEventsInput
    connect?: studentsWhereUniqueInput
  }

  export type eventsCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<eventsCreateWithoutAttendancesInput, eventsUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAttendancesInput
    connect?: eventsWhereUniqueInput
  }

  export type EnumAttStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttStatus
  }

  export type studentsUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<studentsCreateWithoutEventsInput, studentsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutEventsInput
    upsert?: studentsUpsertWithoutEventsInput
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutEventsInput, studentsUpdateWithoutEventsInput>, studentsUncheckedUpdateWithoutEventsInput>
  }

  export type eventsUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<eventsCreateWithoutAttendancesInput, eventsUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAttendancesInput
    upsert?: eventsUpsertWithoutAttendancesInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutAttendancesInput, eventsUpdateWithoutAttendancesInput>, eventsUncheckedUpdateWithoutAttendancesInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumProgramFilter<$PrismaModel = never> = {
    equals?: $Enums.Program | EnumProgramFieldRefInput<$PrismaModel>
    in?: $Enums.Program[]
    notIn?: $Enums.Program[]
    not?: NestedEnumProgramFilter<$PrismaModel> | $Enums.Program
  }

  export type NestedEnumProgramWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Program | EnumProgramFieldRefInput<$PrismaModel>
    in?: $Enums.Program[]
    notIn?: $Enums.Program[]
    not?: NestedEnumProgramWithAggregatesFilter<$PrismaModel> | $Enums.Program
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramFilter<$PrismaModel>
    _max?: NestedEnumProgramFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedEnumAttStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttStatus | EnumAttStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttStatus[]
    notIn?: $Enums.AttStatus[]
    not?: NestedEnumAttStatusFilter<$PrismaModel> | $Enums.AttStatus
  }

  export type NestedEnumAttStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttStatus | EnumAttStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttStatus[]
    notIn?: $Enums.AttStatus[]
    not?: NestedEnumAttStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttStatusFilter<$PrismaModel>
    _max?: NestedEnumAttStatusFilter<$PrismaModel>
  }

  export type studentsCreateWithoutUserInput = {
    program?: $Enums.Program
    year: number
    points?: number
    events?: event_attendancesCreateNestedManyWithoutStudentInput
  }

  export type studentsUncheckedCreateWithoutUserInput = {
    student_id?: number
    program?: $Enums.Program
    year: number
    points?: number
    events?: event_attendancesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentsCreateOrConnectWithoutUserInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
  }

  export type adminsCreateWithoutUserInput = {

  }

  export type adminsUncheckedCreateWithoutUserInput = {
    admin_id?: number
  }

  export type adminsCreateOrConnectWithoutUserInput = {
    where: adminsWhereUniqueInput
    create: XOR<adminsCreateWithoutUserInput, adminsUncheckedCreateWithoutUserInput>
  }

  export type studentsUpsertWithoutUserInput = {
    update: XOR<studentsUpdateWithoutUserInput, studentsUncheckedUpdateWithoutUserInput>
    create: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutUserInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutUserInput, studentsUncheckedUpdateWithoutUserInput>
  }

  export type studentsUpdateWithoutUserInput = {
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    events?: event_attendancesUpdateManyWithoutStudentNestedInput
  }

  export type studentsUncheckedUpdateWithoutUserInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    events?: event_attendancesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type adminsUpsertWithoutUserInput = {
    update: XOR<adminsUpdateWithoutUserInput, adminsUncheckedUpdateWithoutUserInput>
    create: XOR<adminsCreateWithoutUserInput, adminsUncheckedCreateWithoutUserInput>
    where?: adminsWhereInput
  }

  export type adminsUpdateToOneWithWhereWithoutUserInput = {
    where?: adminsWhereInput
    data: XOR<adminsUpdateWithoutUserInput, adminsUncheckedUpdateWithoutUserInput>
  }

  export type adminsUpdateWithoutUserInput = {

  }

  export type adminsUncheckedUpdateWithoutUserInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateWithoutStudentsInput = {
    last_name: string
    first_name: string
    email: string
    password: string
    role?: $Enums.Role
    admins?: adminsCreateNestedOneWithoutUserInput
  }

  export type usersUncheckedCreateWithoutStudentsInput = {
    user_id?: number
    last_name: string
    first_name: string
    email: string
    password: string
    role?: $Enums.Role
    admins?: adminsUncheckedCreateNestedOneWithoutUserInput
  }

  export type usersCreateOrConnectWithoutStudentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStudentsInput, usersUncheckedCreateWithoutStudentsInput>
  }

  export type event_attendancesCreateWithoutStudentInput = {
    att_status?: $Enums.AttStatus
    events: eventsCreateNestedOneWithoutAttendancesInput
  }

  export type event_attendancesUncheckedCreateWithoutStudentInput = {
    att_id?: number
    att_status?: $Enums.AttStatus
    event_id: number
  }

  export type event_attendancesCreateOrConnectWithoutStudentInput = {
    where: event_attendancesWhereUniqueInput
    create: XOR<event_attendancesCreateWithoutStudentInput, event_attendancesUncheckedCreateWithoutStudentInput>
  }

  export type event_attendancesCreateManyStudentInputEnvelope = {
    data: event_attendancesCreateManyStudentInput | event_attendancesCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutStudentsInput = {
    update: XOR<usersUpdateWithoutStudentsInput, usersUncheckedUpdateWithoutStudentsInput>
    create: XOR<usersCreateWithoutStudentsInput, usersUncheckedCreateWithoutStudentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStudentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStudentsInput, usersUncheckedUpdateWithoutStudentsInput>
  }

  export type usersUpdateWithoutStudentsInput = {
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    admins?: adminsUpdateOneWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutStudentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    admins?: adminsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type event_attendancesUpsertWithWhereUniqueWithoutStudentInput = {
    where: event_attendancesWhereUniqueInput
    update: XOR<event_attendancesUpdateWithoutStudentInput, event_attendancesUncheckedUpdateWithoutStudentInput>
    create: XOR<event_attendancesCreateWithoutStudentInput, event_attendancesUncheckedCreateWithoutStudentInput>
  }

  export type event_attendancesUpdateWithWhereUniqueWithoutStudentInput = {
    where: event_attendancesWhereUniqueInput
    data: XOR<event_attendancesUpdateWithoutStudentInput, event_attendancesUncheckedUpdateWithoutStudentInput>
  }

  export type event_attendancesUpdateManyWithWhereWithoutStudentInput = {
    where: event_attendancesScalarWhereInput
    data: XOR<event_attendancesUpdateManyMutationInput, event_attendancesUncheckedUpdateManyWithoutStudentInput>
  }

  export type event_attendancesScalarWhereInput = {
    AND?: event_attendancesScalarWhereInput | event_attendancesScalarWhereInput[]
    OR?: event_attendancesScalarWhereInput[]
    NOT?: event_attendancesScalarWhereInput | event_attendancesScalarWhereInput[]
    att_id?: IntFilter<"event_attendances"> | number
    att_status?: EnumAttStatusFilter<"event_attendances"> | $Enums.AttStatus
    student_id?: IntFilter<"event_attendances"> | number
    event_id?: IntFilter<"event_attendances"> | number
  }

  export type usersCreateWithoutAdminsInput = {
    last_name: string
    first_name: string
    email: string
    password: string
    role?: $Enums.Role
    students?: studentsCreateNestedOneWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAdminsInput = {
    user_id?: number
    last_name: string
    first_name: string
    email: string
    password: string
    role?: $Enums.Role
    students?: studentsUncheckedCreateNestedOneWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAdminsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
  }

  export type usersUpsertWithoutAdminsInput = {
    update: XOR<usersUpdateWithoutAdminsInput, usersUncheckedUpdateWithoutAdminsInput>
    create: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAdminsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAdminsInput, usersUncheckedUpdateWithoutAdminsInput>
  }

  export type usersUpdateWithoutAdminsInput = {
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    students?: studentsUpdateOneWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAdminsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    students?: studentsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type event_attendancesCreateWithoutEventsInput = {
    att_status?: $Enums.AttStatus
    student: studentsCreateNestedOneWithoutEventsInput
  }

  export type event_attendancesUncheckedCreateWithoutEventsInput = {
    att_id?: number
    att_status?: $Enums.AttStatus
    student_id: number
  }

  export type event_attendancesCreateOrConnectWithoutEventsInput = {
    where: event_attendancesWhereUniqueInput
    create: XOR<event_attendancesCreateWithoutEventsInput, event_attendancesUncheckedCreateWithoutEventsInput>
  }

  export type event_attendancesCreateManyEventsInputEnvelope = {
    data: event_attendancesCreateManyEventsInput | event_attendancesCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type event_attendancesUpsertWithWhereUniqueWithoutEventsInput = {
    where: event_attendancesWhereUniqueInput
    update: XOR<event_attendancesUpdateWithoutEventsInput, event_attendancesUncheckedUpdateWithoutEventsInput>
    create: XOR<event_attendancesCreateWithoutEventsInput, event_attendancesUncheckedCreateWithoutEventsInput>
  }

  export type event_attendancesUpdateWithWhereUniqueWithoutEventsInput = {
    where: event_attendancesWhereUniqueInput
    data: XOR<event_attendancesUpdateWithoutEventsInput, event_attendancesUncheckedUpdateWithoutEventsInput>
  }

  export type event_attendancesUpdateManyWithWhereWithoutEventsInput = {
    where: event_attendancesScalarWhereInput
    data: XOR<event_attendancesUpdateManyMutationInput, event_attendancesUncheckedUpdateManyWithoutEventsInput>
  }

  export type studentsCreateWithoutEventsInput = {
    program?: $Enums.Program
    year: number
    points?: number
    user: usersCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutEventsInput = {
    student_id?: number
    user_id: number
    program?: $Enums.Program
    year: number
    points?: number
  }

  export type studentsCreateOrConnectWithoutEventsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutEventsInput, studentsUncheckedCreateWithoutEventsInput>
  }

  export type eventsCreateWithoutAttendancesInput = {
    status: $Enums.Status
    event_title: string
    event_desc: string
    event_loc: string
    event_date: Date | string
    no_of_reg?: number
    no_of_att?: number
    CES_points?: number
  }

  export type eventsUncheckedCreateWithoutAttendancesInput = {
    event_id?: number
    status: $Enums.Status
    event_title: string
    event_desc: string
    event_loc: string
    event_date: Date | string
    no_of_reg?: number
    no_of_att?: number
    CES_points?: number
  }

  export type eventsCreateOrConnectWithoutAttendancesInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutAttendancesInput, eventsUncheckedCreateWithoutAttendancesInput>
  }

  export type studentsUpsertWithoutEventsInput = {
    update: XOR<studentsUpdateWithoutEventsInput, studentsUncheckedUpdateWithoutEventsInput>
    create: XOR<studentsCreateWithoutEventsInput, studentsUncheckedCreateWithoutEventsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutEventsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutEventsInput, studentsUncheckedUpdateWithoutEventsInput>
  }

  export type studentsUpdateWithoutEventsInput = {
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutEventsInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    program?: EnumProgramFieldUpdateOperationsInput | $Enums.Program
    year?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type eventsUpsertWithoutAttendancesInput = {
    update: XOR<eventsUpdateWithoutAttendancesInput, eventsUncheckedUpdateWithoutAttendancesInput>
    create: XOR<eventsCreateWithoutAttendancesInput, eventsUncheckedCreateWithoutAttendancesInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutAttendancesInput, eventsUncheckedUpdateWithoutAttendancesInput>
  }

  export type eventsUpdateWithoutAttendancesInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    event_title?: StringFieldUpdateOperationsInput | string
    event_desc?: StringFieldUpdateOperationsInput | string
    event_loc?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_reg?: IntFieldUpdateOperationsInput | number
    no_of_att?: IntFieldUpdateOperationsInput | number
    CES_points?: IntFieldUpdateOperationsInput | number
  }

  export type eventsUncheckedUpdateWithoutAttendancesInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    event_title?: StringFieldUpdateOperationsInput | string
    event_desc?: StringFieldUpdateOperationsInput | string
    event_loc?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_reg?: IntFieldUpdateOperationsInput | number
    no_of_att?: IntFieldUpdateOperationsInput | number
    CES_points?: IntFieldUpdateOperationsInput | number
  }

  export type event_attendancesCreateManyStudentInput = {
    att_id?: number
    att_status?: $Enums.AttStatus
    event_id: number
  }

  export type event_attendancesUpdateWithoutStudentInput = {
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    events?: eventsUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type event_attendancesUncheckedUpdateWithoutStudentInput = {
    att_id?: IntFieldUpdateOperationsInput | number
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type event_attendancesUncheckedUpdateManyWithoutStudentInput = {
    att_id?: IntFieldUpdateOperationsInput | number
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type event_attendancesCreateManyEventsInput = {
    att_id?: number
    att_status?: $Enums.AttStatus
    student_id: number
  }

  export type event_attendancesUpdateWithoutEventsInput = {
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    student?: studentsUpdateOneRequiredWithoutEventsNestedInput
  }

  export type event_attendancesUncheckedUpdateWithoutEventsInput = {
    att_id?: IntFieldUpdateOperationsInput | number
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type event_attendancesUncheckedUpdateManyWithoutEventsInput = {
    att_id?: IntFieldUpdateOperationsInput | number
    att_status?: EnumAttStatusFieldUpdateOperationsInput | $Enums.AttStatus
    student_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentsCountOutputTypeDefaultArgs instead
     */
    export type StudentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventsCountOutputTypeDefaultArgs instead
     */
    export type EventsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use studentsDefaultArgs instead
     */
    export type studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = studentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminsDefaultArgs instead
     */
    export type adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use eventsDefaultArgs instead
     */
    export type eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = eventsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use event_attendancesDefaultArgs instead
     */
    export type event_attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = event_attendancesDefaultArgs<ExtArgs>

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