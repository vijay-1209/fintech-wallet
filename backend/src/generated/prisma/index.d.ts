
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
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model LedgerEntry
 * 
 */
export type LedgerEntry = $Result.DefaultSelection<Prisma.$LedgerEntryPayload>
/**
 * Model IdempotencyKey
 * 
 */
export type IdempotencyKey = $Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>
/**
 * Model PaymentRequest
 * 
 */
export type PaymentRequest = $Result.DefaultSelection<Prisma.$PaymentRequestPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model OtpCode
 * 
 */
export type OtpCode = $Result.DefaultSelection<Prisma.$OtpCodePayload>
/**
 * Model TopUp
 * 
 */
export type TopUp = $Result.DefaultSelection<Prisma.$TopUpPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const WalletStatus: {
  ACTIVE: 'ACTIVE',
  FROZEN: 'FROZEN',
  CLOSED: 'CLOSED'
};

export type WalletStatus = (typeof WalletStatus)[keyof typeof WalletStatus]


export const TransactionType: {
  PAYMENT: 'PAYMENT',
  TOPUP: 'TOPUP',
  WITHDRAWAL: 'WITHDRAWAL',
  REFUND: 'REFUND'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const LedgerEntryType: {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT'
};

export type LedgerEntryType = (typeof LedgerEntryType)[keyof typeof LedgerEntryType]


export const PaymentRequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type PaymentRequestStatus = (typeof PaymentRequestStatus)[keyof typeof PaymentRequestStatus]


export const NotificationType: {
  PAYMENT_SENT: 'PAYMENT_SENT',
  PAYMENT_RECEIVED: 'PAYMENT_RECEIVED',
  TOPUP_SUCCESS: 'TOPUP_SUCCESS',
  TOPUP_FAILED: 'TOPUP_FAILED',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  SECURITY: 'SECURITY',
  SYSTEM: 'SYSTEM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const NotificationChannel: {
  IN_APP: 'IN_APP',
  EMAIL: 'EMAIL'
};

export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel]


export const NotificationStatus: {
  UNREAD: 'UNREAD',
  READ: 'READ'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]


export const OtpPurpose: {
  LOGIN: 'LOGIN',
  ENABLE_2FA: 'ENABLE_2FA',
  DISABLE_2FA: 'DISABLE_2FA'
};

export type OtpPurpose = (typeof OtpPurpose)[keyof typeof OtpPurpose]


export const TopUpStatus: {
  CREATED: 'CREATED',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED'
};

export type TopUpStatus = (typeof TopUpStatus)[keyof typeof TopUpStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type WalletStatus = $Enums.WalletStatus

export const WalletStatus: typeof $Enums.WalletStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type LedgerEntryType = $Enums.LedgerEntryType

export const LedgerEntryType: typeof $Enums.LedgerEntryType

export type PaymentRequestStatus = $Enums.PaymentRequestStatus

export const PaymentRequestStatus: typeof $Enums.PaymentRequestStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type NotificationChannel = $Enums.NotificationChannel

export const NotificationChannel: typeof $Enums.NotificationChannel

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

export type OtpPurpose = $Enums.OtpPurpose

export const OtpPurpose: typeof $Enums.OtpPurpose

export type TopUpStatus = $Enums.TopUpStatus

export const TopUpStatus: typeof $Enums.TopUpStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerEntry`: Exposes CRUD operations for the **LedgerEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerEntries
    * const ledgerEntries = await prisma.ledgerEntry.findMany()
    * ```
    */
  get ledgerEntry(): Prisma.LedgerEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idempotencyKey`: Exposes CRUD operations for the **IdempotencyKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdempotencyKeys
    * const idempotencyKeys = await prisma.idempotencyKey.findMany()
    * ```
    */
  get idempotencyKey(): Prisma.IdempotencyKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentRequest`: Exposes CRUD operations for the **PaymentRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRequests
    * const paymentRequests = await prisma.paymentRequest.findMany()
    * ```
    */
  get paymentRequest(): Prisma.PaymentRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpCode`: Exposes CRUD operations for the **OtpCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpCodes
    * const otpCodes = await prisma.otpCode.findMany()
    * ```
    */
  get otpCode(): Prisma.OtpCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topUp`: Exposes CRUD operations for the **TopUp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopUps
    * const topUps = await prisma.topUp.findMany()
    * ```
    */
  get topUp(): Prisma.TopUpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Wallet: 'Wallet',
    Transaction: 'Transaction',
    LedgerEntry: 'LedgerEntry',
    IdempotencyKey: 'IdempotencyKey',
    PaymentRequest: 'PaymentRequest',
    Notification: 'Notification',
    RefreshToken: 'RefreshToken',
    OtpCode: 'OtpCode',
    TopUp: 'TopUp',
    AuditLog: 'AuditLog'
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
      modelProps: "user" | "wallet" | "transaction" | "ledgerEntry" | "idempotencyKey" | "paymentRequest" | "notification" | "refreshToken" | "otpCode" | "topUp" | "auditLog"
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
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      LedgerEntry: {
        payload: Prisma.$LedgerEntryPayload<ExtArgs>
        fields: Prisma.LedgerEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findFirst: {
            args: Prisma.LedgerEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findMany: {
            args: Prisma.LedgerEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          create: {
            args: Prisma.LedgerEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          createMany: {
            args: Prisma.LedgerEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          delete: {
            args: Prisma.LedgerEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          update: {
            args: Prisma.LedgerEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          deleteMany: {
            args: Prisma.LedgerEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          upsert: {
            args: Prisma.LedgerEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          aggregate: {
            args: Prisma.LedgerEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerEntry>
          }
          groupBy: {
            args: Prisma.LedgerEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryCountAggregateOutputType> | number
          }
        }
      }
      IdempotencyKey: {
        payload: Prisma.$IdempotencyKeyPayload<ExtArgs>
        fields: Prisma.IdempotencyKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdempotencyKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findFirst: {
            args: Prisma.IdempotencyKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findMany: {
            args: Prisma.IdempotencyKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          create: {
            args: Prisma.IdempotencyKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          createMany: {
            args: Prisma.IdempotencyKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          delete: {
            args: Prisma.IdempotencyKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          update: {
            args: Prisma.IdempotencyKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          deleteMany: {
            args: Prisma.IdempotencyKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdempotencyKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          upsert: {
            args: Prisma.IdempotencyKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          aggregate: {
            args: Prisma.IdempotencyKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdempotencyKey>
          }
          groupBy: {
            args: Prisma.IdempotencyKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdempotencyKeyCountArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyCountAggregateOutputType> | number
          }
        }
      }
      PaymentRequest: {
        payload: Prisma.$PaymentRequestPayload<ExtArgs>
        fields: Prisma.PaymentRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          findFirst: {
            args: Prisma.PaymentRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          findMany: {
            args: Prisma.PaymentRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[]
          }
          create: {
            args: Prisma.PaymentRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          createMany: {
            args: Prisma.PaymentRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[]
          }
          delete: {
            args: Prisma.PaymentRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          update: {
            args: Prisma.PaymentRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[]
          }
          upsert: {
            args: Prisma.PaymentRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          aggregate: {
            args: Prisma.PaymentRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRequest>
          }
          groupBy: {
            args: Prisma.PaymentRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRequestCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
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
      OtpCode: {
        payload: Prisma.$OtpCodePayload<ExtArgs>
        fields: Prisma.OtpCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          findFirst: {
            args: Prisma.OtpCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          findMany: {
            args: Prisma.OtpCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>[]
          }
          create: {
            args: Prisma.OtpCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          createMany: {
            args: Prisma.OtpCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>[]
          }
          delete: {
            args: Prisma.OtpCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          update: {
            args: Prisma.OtpCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          deleteMany: {
            args: Prisma.OtpCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>[]
          }
          upsert: {
            args: Prisma.OtpCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          aggregate: {
            args: Prisma.OtpCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpCode>
          }
          groupBy: {
            args: Prisma.OtpCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCodeCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCodeCountAggregateOutputType> | number
          }
        }
      }
      TopUp: {
        payload: Prisma.$TopUpPayload<ExtArgs>
        fields: Prisma.TopUpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopUpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopUpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>
          }
          findFirst: {
            args: Prisma.TopUpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopUpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>
          }
          findMany: {
            args: Prisma.TopUpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>[]
          }
          create: {
            args: Prisma.TopUpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>
          }
          createMany: {
            args: Prisma.TopUpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopUpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>[]
          }
          delete: {
            args: Prisma.TopUpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>
          }
          update: {
            args: Prisma.TopUpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>
          }
          deleteMany: {
            args: Prisma.TopUpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopUpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopUpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>[]
          }
          upsert: {
            args: Prisma.TopUpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPayload>
          }
          aggregate: {
            args: Prisma.TopUpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopUp>
          }
          groupBy: {
            args: Prisma.TopUpGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopUpGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopUpCountArgs<ExtArgs>
            result: $Utils.Optional<TopUpCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    wallet?: WalletOmit
    transaction?: TransactionOmit
    ledgerEntry?: LedgerEntryOmit
    idempotencyKey?: IdempotencyKeyOmit
    paymentRequest?: PaymentRequestOmit
    notification?: NotificationOmit
    refreshToken?: RefreshTokenOmit
    otpCode?: OtpCodeOmit
    topUp?: TopUpOmit
    auditLog?: AuditLogOmit
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
    requesterPaymentRequests: number
    receiverPaymentRequests: number
    otpCodes: number
    topUps: number
    notifications: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requesterPaymentRequests?: boolean | UserCountOutputTypeCountRequesterPaymentRequestsArgs
    receiverPaymentRequests?: boolean | UserCountOutputTypeCountReceiverPaymentRequestsArgs
    otpCodes?: boolean | UserCountOutputTypeCountOtpCodesArgs
    topUps?: boolean | UserCountOutputTypeCountTopUpsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountRequesterPaymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverPaymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTopUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopUpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    senderTransactions: number
    receiverTransactions: number
    ledgerEntries: number
    topUps: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderTransactions?: boolean | WalletCountOutputTypeCountSenderTransactionsArgs
    receiverTransactions?: boolean | WalletCountOutputTypeCountReceiverTransactionsArgs
    ledgerEntries?: boolean | WalletCountOutputTypeCountLedgerEntriesArgs
    topUps?: boolean | WalletCountOutputTypeCountTopUpsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountSenderTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountReceiverTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTopUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopUpWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    ledgerEntries: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledgerEntries?: boolean | TransactionCountOutputTypeCountLedgerEntriesArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
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
    loginAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    loginAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    isEmailVerified: boolean | null
    twoFactorEnabled: boolean | null
    twoFactorSecret: string | null
    twoFactorEnabledAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    isEmailVerified: boolean | null
    twoFactorEnabled: boolean | null
    twoFactorSecret: string | null
    twoFactorEnabledAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    isEmailVerified: number
    twoFactorEnabled: number
    twoFactorSecret: number
    twoFactorEnabledAt: number
    loginAttempts: number
    lockedUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    loginAttempts?: true
  }

  export type UserSumAggregateInputType = {
    loginAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    isEmailVerified?: true
    twoFactorEnabled?: true
    twoFactorSecret?: true
    twoFactorEnabledAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    isEmailVerified?: true
    twoFactorEnabled?: true
    twoFactorSecret?: true
    twoFactorEnabledAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    isEmailVerified?: true
    twoFactorEnabled?: true
    twoFactorSecret?: true
    twoFactorEnabledAt?: true
    loginAttempts?: true
    lockedUntil?: true
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
    id: string
    fullName: string
    email: string
    password: string
    isEmailVerified: boolean
    twoFactorEnabled: boolean
    twoFactorSecret: string | null
    twoFactorEnabledAt: Date | null
    loginAttempts: number
    lockedUntil: Date | null
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
    fullName?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabledAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    requesterPaymentRequests?: boolean | User$requesterPaymentRequestsArgs<ExtArgs>
    receiverPaymentRequests?: boolean | User$receiverPaymentRequestsArgs<ExtArgs>
    otpCodes?: boolean | User$otpCodesArgs<ExtArgs>
    topUps?: boolean | User$topUpsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabledAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabledAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabledAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "isEmailVerified" | "twoFactorEnabled" | "twoFactorSecret" | "twoFactorEnabledAt" | "loginAttempts" | "lockedUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    requesterPaymentRequests?: boolean | User$requesterPaymentRequestsArgs<ExtArgs>
    receiverPaymentRequests?: boolean | User$receiverPaymentRequestsArgs<ExtArgs>
    otpCodes?: boolean | User$otpCodesArgs<ExtArgs>
    topUps?: boolean | User$topUpsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs> | null
      requesterPaymentRequests: Prisma.$PaymentRequestPayload<ExtArgs>[]
      receiverPaymentRequests: Prisma.$PaymentRequestPayload<ExtArgs>[]
      otpCodes: Prisma.$OtpCodePayload<ExtArgs>[]
      topUps: Prisma.$TopUpPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      isEmailVerified: boolean
      twoFactorEnabled: boolean
      twoFactorSecret: string | null
      twoFactorEnabledAt: Date | null
      loginAttempts: number
      lockedUntil: Date | null
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
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requesterPaymentRequests<T extends User$requesterPaymentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requesterPaymentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiverPaymentRequests<T extends User$receiverPaymentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverPaymentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otpCodes<T extends User$otpCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$otpCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topUps<T extends User$topUpsArgs<ExtArgs> = {}>(args?: Subset<T, User$topUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly twoFactorSecret: FieldRef<"User", 'String'>
    readonly twoFactorEnabledAt: FieldRef<"User", 'DateTime'>
    readonly loginAttempts: FieldRef<"User", 'Int'>
    readonly lockedUntil: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * User.requesterPaymentRequests
   */
  export type User$requesterPaymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    where?: PaymentRequestWhereInput
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    cursor?: PaymentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * User.receiverPaymentRequests
   */
  export type User$receiverPaymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    where?: PaymentRequestWhereInput
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    cursor?: PaymentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * User.otpCodes
   */
  export type User$otpCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    where?: OtpCodeWhereInput
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    cursor?: OtpCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * User.topUps
   */
  export type User$topUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    where?: TopUpWhereInput
    orderBy?: TopUpOrderByWithRelationInput | TopUpOrderByWithRelationInput[]
    cursor?: TopUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopUpScalarFieldEnum | TopUpScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type WalletSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: Decimal | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: Decimal | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    userId: string
    balance: Decimal
    currency: string
    createdAt: Date
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    senderTransactions?: boolean | Wallet$senderTransactionsArgs<ExtArgs>
    receiverTransactions?: boolean | Wallet$receiverTransactionsArgs<ExtArgs>
    ledgerEntries?: boolean | Wallet$ledgerEntriesArgs<ExtArgs>
    topUps?: boolean | Wallet$topUpsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance" | "currency" | "createdAt" | "updatedAt", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    senderTransactions?: boolean | Wallet$senderTransactionsArgs<ExtArgs>
    receiverTransactions?: boolean | Wallet$receiverTransactionsArgs<ExtArgs>
    ledgerEntries?: boolean | Wallet$ledgerEntriesArgs<ExtArgs>
    topUps?: boolean | Wallet$topUpsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      senderTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      receiverTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      ledgerEntries: Prisma.$LedgerEntryPayload<ExtArgs>[]
      topUps: Prisma.$TopUpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balance: Prisma.Decimal
      currency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    senderTransactions<T extends Wallet$senderTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$senderTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiverTransactions<T extends Wallet$receiverTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$receiverTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledgerEntries<T extends Wallet$ledgerEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topUps<T extends Wallet$topUpsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$topUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly userId: FieldRef<"Wallet", 'String'>
    readonly balance: FieldRef<"Wallet", 'Decimal'>
    readonly currency: FieldRef<"Wallet", 'String'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet.senderTransactions
   */
  export type Wallet$senderTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Wallet.receiverTransactions
   */
  export type Wallet$receiverTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Wallet.ledgerEntries
   */
  export type Wallet$ledgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    cursor?: LedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * Wallet.topUps
   */
  export type Wallet$topUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    where?: TopUpWhereInput
    orderBy?: TopUpOrderByWithRelationInput | TopUpOrderByWithRelationInput[]
    cursor?: TopUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopUpScalarFieldEnum | TopUpScalarFieldEnum[]
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    reference: string | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    amount: Decimal | null
    description: string | null
    senderWalletId: string | null
    receiverWalletId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idempotencyKey: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    amount: Decimal | null
    description: string | null
    senderWalletId: string | null
    receiverWalletId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idempotencyKey: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    reference: number
    type: number
    status: number
    amount: number
    description: number
    senderWalletId: number
    receiverWalletId: number
    createdAt: number
    updatedAt: number
    idempotencyKey: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    status?: true
    amount?: true
    description?: true
    senderWalletId?: true
    receiverWalletId?: true
    createdAt?: true
    updatedAt?: true
    idempotencyKey?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    status?: true
    amount?: true
    description?: true
    senderWalletId?: true
    receiverWalletId?: true
    createdAt?: true
    updatedAt?: true
    idempotencyKey?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    status?: true
    amount?: true
    description?: true
    senderWalletId?: true
    receiverWalletId?: true
    createdAt?: true
    updatedAt?: true
    idempotencyKey?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    reference: string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    amount: Decimal
    description: string | null
    senderWalletId: string | null
    receiverWalletId: string | null
    createdAt: Date
    updatedAt: Date
    idempotencyKey: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    description?: boolean
    senderWalletId?: boolean
    receiverWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idempotencyKey?: boolean
    senderWallet?: boolean | Transaction$senderWalletArgs<ExtArgs>
    receiverWallet?: boolean | Transaction$receiverWalletArgs<ExtArgs>
    ledgerEntries?: boolean | Transaction$ledgerEntriesArgs<ExtArgs>
    topUp?: boolean | Transaction$topUpArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    description?: boolean
    senderWalletId?: boolean
    receiverWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idempotencyKey?: boolean
    senderWallet?: boolean | Transaction$senderWalletArgs<ExtArgs>
    receiverWallet?: boolean | Transaction$receiverWalletArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    description?: boolean
    senderWalletId?: boolean
    receiverWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idempotencyKey?: boolean
    senderWallet?: boolean | Transaction$senderWalletArgs<ExtArgs>
    receiverWallet?: boolean | Transaction$receiverWalletArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    reference?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    description?: boolean
    senderWalletId?: boolean
    receiverWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idempotencyKey?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "type" | "status" | "amount" | "description" | "senderWalletId" | "receiverWalletId" | "createdAt" | "updatedAt" | "idempotencyKey", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderWallet?: boolean | Transaction$senderWalletArgs<ExtArgs>
    receiverWallet?: boolean | Transaction$receiverWalletArgs<ExtArgs>
    ledgerEntries?: boolean | Transaction$ledgerEntriesArgs<ExtArgs>
    topUp?: boolean | Transaction$topUpArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderWallet?: boolean | Transaction$senderWalletArgs<ExtArgs>
    receiverWallet?: boolean | Transaction$receiverWalletArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderWallet?: boolean | Transaction$senderWalletArgs<ExtArgs>
    receiverWallet?: boolean | Transaction$receiverWalletArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      senderWallet: Prisma.$WalletPayload<ExtArgs> | null
      receiverWallet: Prisma.$WalletPayload<ExtArgs> | null
      ledgerEntries: Prisma.$LedgerEntryPayload<ExtArgs>[]
      topUp: Prisma.$TopUpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      type: $Enums.TransactionType
      status: $Enums.TransactionStatus
      amount: Prisma.Decimal
      description: string | null
      senderWalletId: string | null
      receiverWalletId: string | null
      createdAt: Date
      updatedAt: Date
      idempotencyKey: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderWallet<T extends Transaction$senderWalletArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$senderWalletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receiverWallet<T extends Transaction$receiverWalletArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$receiverWalletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ledgerEntries<T extends Transaction$ledgerEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topUp<T extends Transaction$topUpArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$topUpArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly senderWalletId: FieldRef<"Transaction", 'String'>
    readonly receiverWalletId: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly idempotencyKey: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.senderWallet
   */
  export type Transaction$senderWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * Transaction.receiverWallet
   */
  export type Transaction$receiverWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * Transaction.ledgerEntries
   */
  export type Transaction$ledgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    cursor?: LedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * Transaction.topUp
   */
  export type Transaction$topUpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    where?: TopUpWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model LedgerEntry
   */

  export type AggregateLedgerEntry = {
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  export type LedgerEntryAvgAggregateOutputType = {
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
  }

  export type LedgerEntrySumAggregateOutputType = {
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
  }

  export type LedgerEntryMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    walletId: string | null
    type: $Enums.LedgerEntryType | null
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
    createdAt: Date | null
  }

  export type LedgerEntryMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    walletId: string | null
    type: $Enums.LedgerEntryType | null
    amount: Decimal | null
    balanceBefore: Decimal | null
    balanceAfter: Decimal | null
    createdAt: Date | null
  }

  export type LedgerEntryCountAggregateOutputType = {
    id: number
    transactionId: number
    walletId: number
    type: number
    amount: number
    balanceBefore: number
    balanceAfter: number
    createdAt: number
    _all: number
  }


  export type LedgerEntryAvgAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type LedgerEntrySumAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type LedgerEntryMinAggregateInputType = {
    id?: true
    transactionId?: true
    walletId?: true
    type?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    createdAt?: true
  }

  export type LedgerEntryMaxAggregateInputType = {
    id?: true
    transactionId?: true
    walletId?: true
    type?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    createdAt?: true
  }

  export type LedgerEntryCountAggregateInputType = {
    id?: true
    transactionId?: true
    walletId?: true
    type?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    createdAt?: true
    _all?: true
  }

  export type LedgerEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntry to aggregate.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerEntries
    **/
    _count?: true | LedgerEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type GetLedgerEntryAggregateType<T extends LedgerEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerEntry[P]>
      : GetScalarType<T[P], AggregateLedgerEntry[P]>
  }




  export type LedgerEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithAggregationInput | LedgerEntryOrderByWithAggregationInput[]
    by: LedgerEntryScalarFieldEnum[] | LedgerEntryScalarFieldEnum
    having?: LedgerEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerEntryCountAggregateInputType | true
    _avg?: LedgerEntryAvgAggregateInputType
    _sum?: LedgerEntrySumAggregateInputType
    _min?: LedgerEntryMinAggregateInputType
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type LedgerEntryGroupByOutputType = {
    id: string
    transactionId: string
    walletId: string
    type: $Enums.LedgerEntryType
    amount: Decimal
    balanceBefore: Decimal
    balanceAfter: Decimal
    createdAt: Date
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  type GetLedgerEntryGroupByPayload<T extends LedgerEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
        }
      >
    >


  export type LedgerEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectScalar = {
    id?: boolean
    transactionId?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
  }

  export type LedgerEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "walletId" | "type" | "amount" | "balanceBefore" | "balanceAfter" | "createdAt", ExtArgs["result"]["ledgerEntry"]>
  export type LedgerEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type LedgerEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type LedgerEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $LedgerEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerEntry"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
      wallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      walletId: string
      type: $Enums.LedgerEntryType
      amount: Prisma.Decimal
      balanceBefore: Prisma.Decimal
      balanceAfter: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["ledgerEntry"]>
    composites: {}
  }

  type LedgerEntryGetPayload<S extends boolean | null | undefined | LedgerEntryDefaultArgs> = $Result.GetResult<Prisma.$LedgerEntryPayload, S>

  type LedgerEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerEntryCountAggregateInputType | true
    }

  export interface LedgerEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntry'], meta: { name: 'LedgerEntry' } }
    /**
     * Find zero or one LedgerEntry that matches the filter.
     * @param {LedgerEntryFindUniqueArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerEntryFindUniqueArgs>(args: SelectSubset<T, LedgerEntryFindUniqueArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LedgerEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerEntryFindUniqueOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerEntryFindFirstArgs>(args?: SelectSubset<T, LedgerEntryFindFirstArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany()
     * 
     * // Get first 10 LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerEntryFindManyArgs>(args?: SelectSubset<T, LedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LedgerEntry.
     * @param {LedgerEntryCreateArgs} args - Arguments to create a LedgerEntry.
     * @example
     * // Create one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.create({
     *   data: {
     *     // ... data to create a LedgerEntry
     *   }
     * })
     * 
     */
    create<T extends LedgerEntryCreateArgs>(args: SelectSubset<T, LedgerEntryCreateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LedgerEntries.
     * @param {LedgerEntryCreateManyArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerEntryCreateManyArgs>(args?: SelectSubset<T, LedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerEntries and returns the data saved in the database.
     * @param {LedgerEntryCreateManyAndReturnArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LedgerEntry.
     * @param {LedgerEntryDeleteArgs} args - Arguments to delete one LedgerEntry.
     * @example
     * // Delete one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.delete({
     *   where: {
     *     // ... filter to delete one LedgerEntry
     *   }
     * })
     * 
     */
    delete<T extends LedgerEntryDeleteArgs>(args: SelectSubset<T, LedgerEntryDeleteArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LedgerEntry.
     * @param {LedgerEntryUpdateArgs} args - Arguments to update one LedgerEntry.
     * @example
     * // Update one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerEntryUpdateArgs>(args: SelectSubset<T, LedgerEntryUpdateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LedgerEntries.
     * @param {LedgerEntryDeleteManyArgs} args - Arguments to filter LedgerEntries to delete.
     * @example
     * // Delete a few LedgerEntries
     * const { count } = await prisma.ledgerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerEntryDeleteManyArgs>(args?: SelectSubset<T, LedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerEntryUpdateManyArgs>(args: SelectSubset<T, LedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries and returns the data updated in the database.
     * @param {LedgerEntryUpdateManyAndReturnArgs} args - Arguments to update many LedgerEntries.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends LedgerEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LedgerEntry.
     * @param {LedgerEntryUpsertArgs} args - Arguments to update or create a LedgerEntry.
     * @example
     * // Update or create a LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.upsert({
     *   create: {
     *     // ... data to create a LedgerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerEntry we want to update
     *   }
     * })
     */
    upsert<T extends LedgerEntryUpsertArgs>(args: SelectSubset<T, LedgerEntryUpsertArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryCountArgs} args - Arguments to filter LedgerEntries to count.
     * @example
     * // Count the number of LedgerEntries
     * const count = await prisma.ledgerEntry.count({
     *   where: {
     *     // ... the filter for the LedgerEntries we want to count
     *   }
     * })
    **/
    count<T extends LedgerEntryCountArgs>(
      args?: Subset<T, LedgerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LedgerEntryAggregateArgs>(args: Subset<T, LedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetLedgerEntryAggregateType<T>>

    /**
     * Group by LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryGroupByArgs} args - Group by arguments.
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
      T extends LedgerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerEntryGroupByArgs['orderBy'] }
        : { orderBy?: LedgerEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerEntry model
   */
  readonly fields: LedgerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LedgerEntry model
   */
  interface LedgerEntryFieldRefs {
    readonly id: FieldRef<"LedgerEntry", 'String'>
    readonly transactionId: FieldRef<"LedgerEntry", 'String'>
    readonly walletId: FieldRef<"LedgerEntry", 'String'>
    readonly type: FieldRef<"LedgerEntry", 'LedgerEntryType'>
    readonly amount: FieldRef<"LedgerEntry", 'Decimal'>
    readonly balanceBefore: FieldRef<"LedgerEntry", 'Decimal'>
    readonly balanceAfter: FieldRef<"LedgerEntry", 'Decimal'>
    readonly createdAt: FieldRef<"LedgerEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerEntry findUnique
   */
  export type LedgerEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findUniqueOrThrow
   */
  export type LedgerEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findFirst
   */
  export type LedgerEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findFirstOrThrow
   */
  export type LedgerEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findMany
   */
  export type LedgerEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry create
   */
  export type LedgerEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerEntry.
     */
    data: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
  }

  /**
   * LedgerEntry createMany
   */
  export type LedgerEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerEntry createManyAndReturn
   */
  export type LedgerEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntry update
   */
  export type LedgerEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerEntry.
     */
    data: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
    /**
     * Choose, which LedgerEntry to update.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry updateMany
   */
  export type LedgerEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number
  }

  /**
   * LedgerEntry updateManyAndReturn
   */
  export type LedgerEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntry upsert
   */
  export type LedgerEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerEntry to update in case it exists.
     */
    where: LedgerEntryWhereUniqueInput
    /**
     * In case the LedgerEntry found by the `where` argument doesn't exist, create a new LedgerEntry with this data.
     */
    create: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
    /**
     * In case the LedgerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
  }

  /**
   * LedgerEntry delete
   */
  export type LedgerEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter which LedgerEntry to delete.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry deleteMany
   */
  export type LedgerEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntries to delete
     */
    where?: LedgerEntryWhereInput
    /**
     * Limit how many LedgerEntries to delete.
     */
    limit?: number
  }

  /**
   * LedgerEntry without action
   */
  export type LedgerEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
  }


  /**
   * Model IdempotencyKey
   */

  export type AggregateIdempotencyKey = {
    _count: IdempotencyKeyCountAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  export type IdempotencyKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    userId: string | null
    transactionId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdempotencyKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    userId: string | null
    transactionId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdempotencyKeyCountAggregateOutputType = {
    id: number
    key: number
    userId: number
    transactionId: number
    status: number
    response: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IdempotencyKeyMinAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    transactionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdempotencyKeyMaxAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    transactionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdempotencyKeyCountAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    transactionId?: true
    status?: true
    response?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IdempotencyKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKey to aggregate.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdempotencyKeys
    **/
    _count?: true | IdempotencyKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdempotencyKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type GetIdempotencyKeyAggregateType<T extends IdempotencyKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateIdempotencyKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdempotencyKey[P]>
      : GetScalarType<T[P], AggregateIdempotencyKey[P]>
  }




  export type IdempotencyKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdempotencyKeyWhereInput
    orderBy?: IdempotencyKeyOrderByWithAggregationInput | IdempotencyKeyOrderByWithAggregationInput[]
    by: IdempotencyKeyScalarFieldEnum[] | IdempotencyKeyScalarFieldEnum
    having?: IdempotencyKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdempotencyKeyCountAggregateInputType | true
    _min?: IdempotencyKeyMinAggregateInputType
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type IdempotencyKeyGroupByOutputType = {
    id: string
    key: string
    userId: string
    transactionId: string | null
    status: string
    response: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: IdempotencyKeyCountAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  type GetIdempotencyKeyGroupByPayload<T extends IdempotencyKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdempotencyKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdempotencyKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
            : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
        }
      >
    >


  export type IdempotencyKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    userId?: boolean
    transactionId?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    userId?: boolean
    transactionId?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    userId?: boolean
    transactionId?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectScalar = {
    id?: boolean
    key?: boolean
    userId?: boolean
    transactionId?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IdempotencyKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "userId" | "transactionId" | "status" | "response" | "createdAt" | "updatedAt", ExtArgs["result"]["idempotencyKey"]>

  export type $IdempotencyKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdempotencyKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      userId: string
      transactionId: string | null
      status: string
      response: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["idempotencyKey"]>
    composites: {}
  }

  type IdempotencyKeyGetPayload<S extends boolean | null | undefined | IdempotencyKeyDefaultArgs> = $Result.GetResult<Prisma.$IdempotencyKeyPayload, S>

  type IdempotencyKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdempotencyKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdempotencyKeyCountAggregateInputType | true
    }

  export interface IdempotencyKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyKey'], meta: { name: 'IdempotencyKey' } }
    /**
     * Find zero or one IdempotencyKey that matches the filter.
     * @param {IdempotencyKeyFindUniqueArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdempotencyKeyFindUniqueArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdempotencyKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdempotencyKeyFindUniqueOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdempotencyKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdempotencyKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdempotencyKeyFindFirstArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdempotencyKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdempotencyKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdempotencyKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany()
     * 
     * // Get first 10 IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdempotencyKeyFindManyArgs>(args?: SelectSubset<T, IdempotencyKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdempotencyKey.
     * @param {IdempotencyKeyCreateArgs} args - Arguments to create a IdempotencyKey.
     * @example
     * // Create one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.create({
     *   data: {
     *     // ... data to create a IdempotencyKey
     *   }
     * })
     * 
     */
    create<T extends IdempotencyKeyCreateArgs>(args: SelectSubset<T, IdempotencyKeyCreateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdempotencyKeys.
     * @param {IdempotencyKeyCreateManyArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdempotencyKeyCreateManyArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdempotencyKeys and returns the data saved in the database.
     * @param {IdempotencyKeyCreateManyAndReturnArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdempotencyKeys and only return the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdempotencyKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdempotencyKey.
     * @param {IdempotencyKeyDeleteArgs} args - Arguments to delete one IdempotencyKey.
     * @example
     * // Delete one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.delete({
     *   where: {
     *     // ... filter to delete one IdempotencyKey
     *   }
     * })
     * 
     */
    delete<T extends IdempotencyKeyDeleteArgs>(args: SelectSubset<T, IdempotencyKeyDeleteArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdempotencyKey.
     * @param {IdempotencyKeyUpdateArgs} args - Arguments to update one IdempotencyKey.
     * @example
     * // Update one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdempotencyKeyUpdateArgs>(args: SelectSubset<T, IdempotencyKeyUpdateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdempotencyKeys.
     * @param {IdempotencyKeyDeleteManyArgs} args - Arguments to filter IdempotencyKeys to delete.
     * @example
     * // Delete a few IdempotencyKeys
     * const { count } = await prisma.idempotencyKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdempotencyKeyDeleteManyArgs>(args?: SelectSubset<T, IdempotencyKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdempotencyKeyUpdateManyArgs>(args: SelectSubset<T, IdempotencyKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdempotencyKeys and returns the data updated in the database.
     * @param {IdempotencyKeyUpdateManyAndReturnArgs} args - Arguments to update many IdempotencyKeys.
     * @example
     * // Update many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdempotencyKeys and only return the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends IdempotencyKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdempotencyKey.
     * @param {IdempotencyKeyUpsertArgs} args - Arguments to update or create a IdempotencyKey.
     * @example
     * // Update or create a IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.upsert({
     *   create: {
     *     // ... data to create a IdempotencyKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdempotencyKey we want to update
     *   }
     * })
     */
    upsert<T extends IdempotencyKeyUpsertArgs>(args: SelectSubset<T, IdempotencyKeyUpsertArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyCountArgs} args - Arguments to filter IdempotencyKeys to count.
     * @example
     * // Count the number of IdempotencyKeys
     * const count = await prisma.idempotencyKey.count({
     *   where: {
     *     // ... the filter for the IdempotencyKeys we want to count
     *   }
     * })
    **/
    count<T extends IdempotencyKeyCountArgs>(
      args?: Subset<T, IdempotencyKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdempotencyKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdempotencyKeyAggregateArgs>(args: Subset<T, IdempotencyKeyAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyKeyAggregateType<T>>

    /**
     * Group by IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyGroupByArgs} args - Group by arguments.
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
      T extends IdempotencyKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdempotencyKeyGroupByArgs['orderBy'] }
        : { orderBy?: IdempotencyKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdempotencyKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdempotencyKey model
   */
  readonly fields: IdempotencyKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdempotencyKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdempotencyKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IdempotencyKey model
   */
  interface IdempotencyKeyFieldRefs {
    readonly id: FieldRef<"IdempotencyKey", 'String'>
    readonly key: FieldRef<"IdempotencyKey", 'String'>
    readonly userId: FieldRef<"IdempotencyKey", 'String'>
    readonly transactionId: FieldRef<"IdempotencyKey", 'String'>
    readonly status: FieldRef<"IdempotencyKey", 'String'>
    readonly response: FieldRef<"IdempotencyKey", 'Json'>
    readonly createdAt: FieldRef<"IdempotencyKey", 'DateTime'>
    readonly updatedAt: FieldRef<"IdempotencyKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdempotencyKey findUnique
   */
  export type IdempotencyKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findUniqueOrThrow
   */
  export type IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findFirst
   */
  export type IdempotencyKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findFirstOrThrow
   */
  export type IdempotencyKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findMany
   */
  export type IdempotencyKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKeys to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey create
   */
  export type IdempotencyKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data needed to create a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
  }

  /**
   * IdempotencyKey createMany
   */
  export type IdempotencyKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdempotencyKey createManyAndReturn
   */
  export type IdempotencyKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdempotencyKey update
   */
  export type IdempotencyKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data needed to update a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
    /**
     * Choose, which IdempotencyKey to update.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey updateMany
   */
  export type IdempotencyKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdempotencyKeys.
     */
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyInput>
    /**
     * Filter which IdempotencyKeys to update
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to update.
     */
    limit?: number
  }

  /**
   * IdempotencyKey updateManyAndReturn
   */
  export type IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data used to update IdempotencyKeys.
     */
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyInput>
    /**
     * Filter which IdempotencyKeys to update
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to update.
     */
    limit?: number
  }

  /**
   * IdempotencyKey upsert
   */
  export type IdempotencyKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The filter to search for the IdempotencyKey to update in case it exists.
     */
    where: IdempotencyKeyWhereUniqueInput
    /**
     * In case the IdempotencyKey found by the `where` argument doesn't exist, create a new IdempotencyKey with this data.
     */
    create: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
    /**
     * In case the IdempotencyKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
  }

  /**
   * IdempotencyKey delete
   */
  export type IdempotencyKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter which IdempotencyKey to delete.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey deleteMany
   */
  export type IdempotencyKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKeys to delete
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to delete.
     */
    limit?: number
  }

  /**
   * IdempotencyKey without action
   */
  export type IdempotencyKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
  }


  /**
   * Model PaymentRequest
   */

  export type AggregatePaymentRequest = {
    _count: PaymentRequestCountAggregateOutputType | null
    _avg: PaymentRequestAvgAggregateOutputType | null
    _sum: PaymentRequestSumAggregateOutputType | null
    _min: PaymentRequestMinAggregateOutputType | null
    _max: PaymentRequestMaxAggregateOutputType | null
  }

  export type PaymentRequestAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentRequestSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentRequestMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    note: string | null
    status: $Enums.PaymentRequestStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: string | null
    receiverId: string | null
  }

  export type PaymentRequestMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    note: string | null
    status: $Enums.PaymentRequestStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: string | null
    receiverId: string | null
  }

  export type PaymentRequestCountAggregateOutputType = {
    id: number
    amount: number
    note: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    requesterId: number
    receiverId: number
    _all: number
  }


  export type PaymentRequestAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentRequestSumAggregateInputType = {
    amount?: true
  }

  export type PaymentRequestMinAggregateInputType = {
    id?: true
    amount?: true
    note?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    receiverId?: true
  }

  export type PaymentRequestMaxAggregateInputType = {
    id?: true
    amount?: true
    note?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    receiverId?: true
  }

  export type PaymentRequestCountAggregateInputType = {
    id?: true
    amount?: true
    note?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    receiverId?: true
    _all?: true
  }

  export type PaymentRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRequest to aggregate.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRequests
    **/
    _count?: true | PaymentRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRequestMaxAggregateInputType
  }

  export type GetPaymentRequestAggregateType<T extends PaymentRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRequest[P]>
      : GetScalarType<T[P], AggregatePaymentRequest[P]>
  }




  export type PaymentRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRequestWhereInput
    orderBy?: PaymentRequestOrderByWithAggregationInput | PaymentRequestOrderByWithAggregationInput[]
    by: PaymentRequestScalarFieldEnum[] | PaymentRequestScalarFieldEnum
    having?: PaymentRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRequestCountAggregateInputType | true
    _avg?: PaymentRequestAvgAggregateInputType
    _sum?: PaymentRequestSumAggregateInputType
    _min?: PaymentRequestMinAggregateInputType
    _max?: PaymentRequestMaxAggregateInputType
  }

  export type PaymentRequestGroupByOutputType = {
    id: string
    amount: Decimal
    note: string | null
    status: $Enums.PaymentRequestStatus
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    requesterId: string
    receiverId: string
    _count: PaymentRequestCountAggregateOutputType | null
    _avg: PaymentRequestAvgAggregateOutputType | null
    _sum: PaymentRequestSumAggregateOutputType | null
    _min: PaymentRequestMinAggregateOutputType | null
    _max: PaymentRequestMaxAggregateOutputType | null
  }

  type GetPaymentRequestGroupByPayload<T extends PaymentRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRequestGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    receiverId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRequest"]>

  export type PaymentRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    receiverId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRequest"]>

  export type PaymentRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    receiverId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRequest"]>

  export type PaymentRequestSelectScalar = {
    id?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    receiverId?: boolean
  }

  export type PaymentRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "note" | "status" | "expiresAt" | "createdAt" | "updatedAt" | "requesterId" | "receiverId", ExtArgs["result"]["paymentRequest"]>
  export type PaymentRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRequest"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      note: string | null
      status: $Enums.PaymentRequestStatus
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
      requesterId: string
      receiverId: string
    }, ExtArgs["result"]["paymentRequest"]>
    composites: {}
  }

  type PaymentRequestGetPayload<S extends boolean | null | undefined | PaymentRequestDefaultArgs> = $Result.GetResult<Prisma.$PaymentRequestPayload, S>

  type PaymentRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentRequestCountAggregateInputType | true
    }

  export interface PaymentRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRequest'], meta: { name: 'PaymentRequest' } }
    /**
     * Find zero or one PaymentRequest that matches the filter.
     * @param {PaymentRequestFindUniqueArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRequestFindUniqueArgs>(args: SelectSubset<T, PaymentRequestFindUniqueArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentRequestFindUniqueOrThrowArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindFirstArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRequestFindFirstArgs>(args?: SelectSubset<T, PaymentRequestFindFirstArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindFirstOrThrowArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRequests
     * const paymentRequests = await prisma.paymentRequest.findMany()
     * 
     * // Get first 10 PaymentRequests
     * const paymentRequests = await prisma.paymentRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRequestWithIdOnly = await prisma.paymentRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRequestFindManyArgs>(args?: SelectSubset<T, PaymentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentRequest.
     * @param {PaymentRequestCreateArgs} args - Arguments to create a PaymentRequest.
     * @example
     * // Create one PaymentRequest
     * const PaymentRequest = await prisma.paymentRequest.create({
     *   data: {
     *     // ... data to create a PaymentRequest
     *   }
     * })
     * 
     */
    create<T extends PaymentRequestCreateArgs>(args: SelectSubset<T, PaymentRequestCreateArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentRequests.
     * @param {PaymentRequestCreateManyArgs} args - Arguments to create many PaymentRequests.
     * @example
     * // Create many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRequestCreateManyArgs>(args?: SelectSubset<T, PaymentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentRequests and returns the data saved in the database.
     * @param {PaymentRequestCreateManyAndReturnArgs} args - Arguments to create many PaymentRequests.
     * @example
     * // Create many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentRequests and only return the `id`
     * const paymentRequestWithIdOnly = await prisma.paymentRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentRequest.
     * @param {PaymentRequestDeleteArgs} args - Arguments to delete one PaymentRequest.
     * @example
     * // Delete one PaymentRequest
     * const PaymentRequest = await prisma.paymentRequest.delete({
     *   where: {
     *     // ... filter to delete one PaymentRequest
     *   }
     * })
     * 
     */
    delete<T extends PaymentRequestDeleteArgs>(args: SelectSubset<T, PaymentRequestDeleteArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentRequest.
     * @param {PaymentRequestUpdateArgs} args - Arguments to update one PaymentRequest.
     * @example
     * // Update one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRequestUpdateArgs>(args: SelectSubset<T, PaymentRequestUpdateArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentRequests.
     * @param {PaymentRequestDeleteManyArgs} args - Arguments to filter PaymentRequests to delete.
     * @example
     * // Delete a few PaymentRequests
     * const { count } = await prisma.paymentRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRequestDeleteManyArgs>(args?: SelectSubset<T, PaymentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRequestUpdateManyArgs>(args: SelectSubset<T, PaymentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRequests and returns the data updated in the database.
     * @param {PaymentRequestUpdateManyAndReturnArgs} args - Arguments to update many PaymentRequests.
     * @example
     * // Update many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentRequests and only return the `id`
     * const paymentRequestWithIdOnly = await prisma.paymentRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentRequest.
     * @param {PaymentRequestUpsertArgs} args - Arguments to update or create a PaymentRequest.
     * @example
     * // Update or create a PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.upsert({
     *   create: {
     *     // ... data to create a PaymentRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRequest we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRequestUpsertArgs>(args: SelectSubset<T, PaymentRequestUpsertArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestCountArgs} args - Arguments to filter PaymentRequests to count.
     * @example
     * // Count the number of PaymentRequests
     * const count = await prisma.paymentRequest.count({
     *   where: {
     *     // ... the filter for the PaymentRequests we want to count
     *   }
     * })
    **/
    count<T extends PaymentRequestCountArgs>(
      args?: Subset<T, PaymentRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentRequestAggregateArgs>(args: Subset<T, PaymentRequestAggregateArgs>): Prisma.PrismaPromise<GetPaymentRequestAggregateType<T>>

    /**
     * Group by PaymentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestGroupByArgs} args - Group by arguments.
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
      T extends PaymentRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRequestGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRequest model
   */
  readonly fields: PaymentRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentRequest model
   */
  interface PaymentRequestFieldRefs {
    readonly id: FieldRef<"PaymentRequest", 'String'>
    readonly amount: FieldRef<"PaymentRequest", 'Decimal'>
    readonly note: FieldRef<"PaymentRequest", 'String'>
    readonly status: FieldRef<"PaymentRequest", 'PaymentRequestStatus'>
    readonly expiresAt: FieldRef<"PaymentRequest", 'DateTime'>
    readonly createdAt: FieldRef<"PaymentRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentRequest", 'DateTime'>
    readonly requesterId: FieldRef<"PaymentRequest", 'String'>
    readonly receiverId: FieldRef<"PaymentRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRequest findUnique
   */
  export type PaymentRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest findUniqueOrThrow
   */
  export type PaymentRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest findFirst
   */
  export type PaymentRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRequests.
     */
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * PaymentRequest findFirstOrThrow
   */
  export type PaymentRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRequests.
     */
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * PaymentRequest findMany
   */
  export type PaymentRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequests to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRequests.
     */
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * PaymentRequest create
   */
  export type PaymentRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRequest.
     */
    data: XOR<PaymentRequestCreateInput, PaymentRequestUncheckedCreateInput>
  }

  /**
   * PaymentRequest createMany
   */
  export type PaymentRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRequests.
     */
    data: PaymentRequestCreateManyInput | PaymentRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRequest createManyAndReturn
   */
  export type PaymentRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentRequests.
     */
    data: PaymentRequestCreateManyInput | PaymentRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRequest update
   */
  export type PaymentRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRequest.
     */
    data: XOR<PaymentRequestUpdateInput, PaymentRequestUncheckedUpdateInput>
    /**
     * Choose, which PaymentRequest to update.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest updateMany
   */
  export type PaymentRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRequests.
     */
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRequests to update
     */
    where?: PaymentRequestWhereInput
    /**
     * Limit how many PaymentRequests to update.
     */
    limit?: number
  }

  /**
   * PaymentRequest updateManyAndReturn
   */
  export type PaymentRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * The data used to update PaymentRequests.
     */
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRequests to update
     */
    where?: PaymentRequestWhereInput
    /**
     * Limit how many PaymentRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRequest upsert
   */
  export type PaymentRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRequest to update in case it exists.
     */
    where: PaymentRequestWhereUniqueInput
    /**
     * In case the PaymentRequest found by the `where` argument doesn't exist, create a new PaymentRequest with this data.
     */
    create: XOR<PaymentRequestCreateInput, PaymentRequestUncheckedCreateInput>
    /**
     * In case the PaymentRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRequestUpdateInput, PaymentRequestUncheckedUpdateInput>
  }

  /**
   * PaymentRequest delete
   */
  export type PaymentRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter which PaymentRequest to delete.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest deleteMany
   */
  export type PaymentRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRequests to delete
     */
    where?: PaymentRequestWhereInput
    /**
     * Limit how many PaymentRequests to delete.
     */
    limit?: number
  }

  /**
   * PaymentRequest without action
   */
  export type PaymentRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    channel: $Enums.NotificationChannel | null
    status: $Enums.NotificationStatus | null
    title: string | null
    message: string | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    channel: $Enums.NotificationChannel | null
    status: $Enums.NotificationStatus | null
    title: string | null
    message: string | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    channel: number
    status: number
    title: number
    message: number
    data: number
    readAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    channel?: true
    status?: true
    title?: true
    message?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    channel?: true
    status?: true
    title?: true
    message?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    channel?: true
    status?: true
    title?: true
    message?: true
    data?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    status: $Enums.NotificationStatus
    title: string
    message: string
    data: JsonValue | null
    readAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    channel?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "channel" | "status" | "title" | "message" | "data" | "readAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      channel: $Enums.NotificationChannel
      status: $Enums.NotificationStatus
      title: string
      message: string
      data: Prisma.JsonValue | null
      readAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly channel: FieldRef<"Notification", 'NotificationChannel'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
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
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    createdAt: Date
    userId: string
    _count: RefreshTokenCountAggregateOutputType | null
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
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "createdAt" | "userId", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
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
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model OtpCode
   */

  export type AggregateOtpCode = {
    _count: OtpCodeCountAggregateOutputType | null
    _avg: OtpCodeAvgAggregateOutputType | null
    _sum: OtpCodeSumAggregateOutputType | null
    _min: OtpCodeMinAggregateOutputType | null
    _max: OtpCodeMaxAggregateOutputType | null
  }

  export type OtpCodeAvgAggregateOutputType = {
    attempts: number | null
  }

  export type OtpCodeSumAggregateOutputType = {
    attempts: number | null
  }

  export type OtpCodeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    codeHash: string | null
    purpose: $Enums.OtpPurpose | null
    expiresAt: Date | null
    attempts: number | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type OtpCodeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    codeHash: string | null
    purpose: $Enums.OtpPurpose | null
    expiresAt: Date | null
    attempts: number | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type OtpCodeCountAggregateOutputType = {
    id: number
    userId: number
    codeHash: number
    purpose: number
    expiresAt: number
    attempts: number
    verifiedAt: number
    createdAt: number
    _all: number
  }


  export type OtpCodeAvgAggregateInputType = {
    attempts?: true
  }

  export type OtpCodeSumAggregateInputType = {
    attempts?: true
  }

  export type OtpCodeMinAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    purpose?: true
    expiresAt?: true
    attempts?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type OtpCodeMaxAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    purpose?: true
    expiresAt?: true
    attempts?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type OtpCodeCountAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    purpose?: true
    expiresAt?: true
    attempts?: true
    verifiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type OtpCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpCode to aggregate.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpCodes
    **/
    _count?: true | OtpCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpCodeMaxAggregateInputType
  }

  export type GetOtpCodeAggregateType<T extends OtpCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpCode[P]>
      : GetScalarType<T[P], AggregateOtpCode[P]>
  }




  export type OtpCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpCodeWhereInput
    orderBy?: OtpCodeOrderByWithAggregationInput | OtpCodeOrderByWithAggregationInput[]
    by: OtpCodeScalarFieldEnum[] | OtpCodeScalarFieldEnum
    having?: OtpCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCodeCountAggregateInputType | true
    _avg?: OtpCodeAvgAggregateInputType
    _sum?: OtpCodeSumAggregateInputType
    _min?: OtpCodeMinAggregateInputType
    _max?: OtpCodeMaxAggregateInputType
  }

  export type OtpCodeGroupByOutputType = {
    id: string
    userId: string
    codeHash: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date
    attempts: number
    verifiedAt: Date | null
    createdAt: Date
    _count: OtpCodeCountAggregateOutputType | null
    _avg: OtpCodeAvgAggregateOutputType | null
    _sum: OtpCodeSumAggregateOutputType | null
    _min: OtpCodeMinAggregateOutputType | null
    _max: OtpCodeMaxAggregateOutputType | null
  }

  type GetOtpCodeGroupByPayload<T extends OtpCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpCodeGroupByOutputType[P]>
            : GetScalarType<T[P], OtpCodeGroupByOutputType[P]>
        }
      >
    >


  export type OtpCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    attempts?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpCode"]>

  export type OtpCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    attempts?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpCode"]>

  export type OtpCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    attempts?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpCode"]>

  export type OtpCodeSelectScalar = {
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    attempts?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }

  export type OtpCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "codeHash" | "purpose" | "expiresAt" | "attempts" | "verifiedAt" | "createdAt", ExtArgs["result"]["otpCode"]>
  export type OtpCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      codeHash: string
      purpose: $Enums.OtpPurpose
      expiresAt: Date
      attempts: number
      verifiedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["otpCode"]>
    composites: {}
  }

  type OtpCodeGetPayload<S extends boolean | null | undefined | OtpCodeDefaultArgs> = $Result.GetResult<Prisma.$OtpCodePayload, S>

  type OtpCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCodeCountAggregateInputType | true
    }

  export interface OtpCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpCode'], meta: { name: 'OtpCode' } }
    /**
     * Find zero or one OtpCode that matches the filter.
     * @param {OtpCodeFindUniqueArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpCodeFindUniqueArgs>(args: SelectSubset<T, OtpCodeFindUniqueArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpCodeFindUniqueOrThrowArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindFirstArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpCodeFindFirstArgs>(args?: SelectSubset<T, OtpCodeFindFirstArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindFirstOrThrowArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpCodes
     * const otpCodes = await prisma.otpCode.findMany()
     * 
     * // Get first 10 OtpCodes
     * const otpCodes = await prisma.otpCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpCodeWithIdOnly = await prisma.otpCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpCodeFindManyArgs>(args?: SelectSubset<T, OtpCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpCode.
     * @param {OtpCodeCreateArgs} args - Arguments to create a OtpCode.
     * @example
     * // Create one OtpCode
     * const OtpCode = await prisma.otpCode.create({
     *   data: {
     *     // ... data to create a OtpCode
     *   }
     * })
     * 
     */
    create<T extends OtpCodeCreateArgs>(args: SelectSubset<T, OtpCodeCreateArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpCodes.
     * @param {OtpCodeCreateManyArgs} args - Arguments to create many OtpCodes.
     * @example
     * // Create many OtpCodes
     * const otpCode = await prisma.otpCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCodeCreateManyArgs>(args?: SelectSubset<T, OtpCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpCodes and returns the data saved in the database.
     * @param {OtpCodeCreateManyAndReturnArgs} args - Arguments to create many OtpCodes.
     * @example
     * // Create many OtpCodes
     * const otpCode = await prisma.otpCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpCodes and only return the `id`
     * const otpCodeWithIdOnly = await prisma.otpCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpCode.
     * @param {OtpCodeDeleteArgs} args - Arguments to delete one OtpCode.
     * @example
     * // Delete one OtpCode
     * const OtpCode = await prisma.otpCode.delete({
     *   where: {
     *     // ... filter to delete one OtpCode
     *   }
     * })
     * 
     */
    delete<T extends OtpCodeDeleteArgs>(args: SelectSubset<T, OtpCodeDeleteArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpCode.
     * @param {OtpCodeUpdateArgs} args - Arguments to update one OtpCode.
     * @example
     * // Update one OtpCode
     * const otpCode = await prisma.otpCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpCodeUpdateArgs>(args: SelectSubset<T, OtpCodeUpdateArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpCodes.
     * @param {OtpCodeDeleteManyArgs} args - Arguments to filter OtpCodes to delete.
     * @example
     * // Delete a few OtpCodes
     * const { count } = await prisma.otpCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpCodeDeleteManyArgs>(args?: SelectSubset<T, OtpCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpCodes
     * const otpCode = await prisma.otpCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpCodeUpdateManyArgs>(args: SelectSubset<T, OtpCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpCodes and returns the data updated in the database.
     * @param {OtpCodeUpdateManyAndReturnArgs} args - Arguments to update many OtpCodes.
     * @example
     * // Update many OtpCodes
     * const otpCode = await prisma.otpCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpCodes and only return the `id`
     * const otpCodeWithIdOnly = await prisma.otpCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpCode.
     * @param {OtpCodeUpsertArgs} args - Arguments to update or create a OtpCode.
     * @example
     * // Update or create a OtpCode
     * const otpCode = await prisma.otpCode.upsert({
     *   create: {
     *     // ... data to create a OtpCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpCode we want to update
     *   }
     * })
     */
    upsert<T extends OtpCodeUpsertArgs>(args: SelectSubset<T, OtpCodeUpsertArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeCountArgs} args - Arguments to filter OtpCodes to count.
     * @example
     * // Count the number of OtpCodes
     * const count = await prisma.otpCode.count({
     *   where: {
     *     // ... the filter for the OtpCodes we want to count
     *   }
     * })
    **/
    count<T extends OtpCodeCountArgs>(
      args?: Subset<T, OtpCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpCodeAggregateArgs>(args: Subset<T, OtpCodeAggregateArgs>): Prisma.PrismaPromise<GetOtpCodeAggregateType<T>>

    /**
     * Group by OtpCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeGroupByArgs} args - Group by arguments.
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
      T extends OtpCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpCodeGroupByArgs['orderBy'] }
        : { orderBy?: OtpCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpCode model
   */
  readonly fields: OtpCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OtpCode model
   */
  interface OtpCodeFieldRefs {
    readonly id: FieldRef<"OtpCode", 'String'>
    readonly userId: FieldRef<"OtpCode", 'String'>
    readonly codeHash: FieldRef<"OtpCode", 'String'>
    readonly purpose: FieldRef<"OtpCode", 'OtpPurpose'>
    readonly expiresAt: FieldRef<"OtpCode", 'DateTime'>
    readonly attempts: FieldRef<"OtpCode", 'Int'>
    readonly verifiedAt: FieldRef<"OtpCode", 'DateTime'>
    readonly createdAt: FieldRef<"OtpCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpCode findUnique
   */
  export type OtpCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode findUniqueOrThrow
   */
  export type OtpCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode findFirst
   */
  export type OtpCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpCodes.
     */
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode findFirstOrThrow
   */
  export type OtpCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpCodes.
     */
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode findMany
   */
  export type OtpCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter, which OtpCodes to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpCodes.
     */
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode create
   */
  export type OtpCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a OtpCode.
     */
    data: XOR<OtpCodeCreateInput, OtpCodeUncheckedCreateInput>
  }

  /**
   * OtpCode createMany
   */
  export type OtpCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpCodes.
     */
    data: OtpCodeCreateManyInput | OtpCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpCode createManyAndReturn
   */
  export type OtpCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * The data used to create many OtpCodes.
     */
    data: OtpCodeCreateManyInput | OtpCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpCode update
   */
  export type OtpCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a OtpCode.
     */
    data: XOR<OtpCodeUpdateInput, OtpCodeUncheckedUpdateInput>
    /**
     * Choose, which OtpCode to update.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode updateMany
   */
  export type OtpCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpCodes.
     */
    data: XOR<OtpCodeUpdateManyMutationInput, OtpCodeUncheckedUpdateManyInput>
    /**
     * Filter which OtpCodes to update
     */
    where?: OtpCodeWhereInput
    /**
     * Limit how many OtpCodes to update.
     */
    limit?: number
  }

  /**
   * OtpCode updateManyAndReturn
   */
  export type OtpCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * The data used to update OtpCodes.
     */
    data: XOR<OtpCodeUpdateManyMutationInput, OtpCodeUncheckedUpdateManyInput>
    /**
     * Filter which OtpCodes to update
     */
    where?: OtpCodeWhereInput
    /**
     * Limit how many OtpCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpCode upsert
   */
  export type OtpCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the OtpCode to update in case it exists.
     */
    where: OtpCodeWhereUniqueInput
    /**
     * In case the OtpCode found by the `where` argument doesn't exist, create a new OtpCode with this data.
     */
    create: XOR<OtpCodeCreateInput, OtpCodeUncheckedCreateInput>
    /**
     * In case the OtpCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpCodeUpdateInput, OtpCodeUncheckedUpdateInput>
  }

  /**
   * OtpCode delete
   */
  export type OtpCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
    /**
     * Filter which OtpCode to delete.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode deleteMany
   */
  export type OtpCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpCodes to delete
     */
    where?: OtpCodeWhereInput
    /**
     * Limit how many OtpCodes to delete.
     */
    limit?: number
  }

  /**
   * OtpCode without action
   */
  export type OtpCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpCode
     */
    omit?: OtpCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpCodeInclude<ExtArgs> | null
  }


  /**
   * Model TopUp
   */

  export type AggregateTopUp = {
    _count: TopUpCountAggregateOutputType | null
    _avg: TopUpAvgAggregateOutputType | null
    _sum: TopUpSumAggregateOutputType | null
    _min: TopUpMinAggregateOutputType | null
    _max: TopUpMaxAggregateOutputType | null
  }

  export type TopUpAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TopUpSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TopUpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.TopUpStatus | null
    gateway: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    gatewaySignature: string | null
    failureReason: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopUpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.TopUpStatus | null
    gateway: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    gatewaySignature: string | null
    failureReason: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopUpCountAggregateOutputType = {
    id: number
    userId: number
    walletId: number
    amount: number
    currency: number
    status: number
    gateway: number
    gatewayOrderId: number
    gatewayPaymentId: number
    gatewaySignature: number
    failureReason: number
    transactionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopUpAvgAggregateInputType = {
    amount?: true
  }

  export type TopUpSumAggregateInputType = {
    amount?: true
  }

  export type TopUpMinAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    amount?: true
    currency?: true
    status?: true
    gateway?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    gatewaySignature?: true
    failureReason?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopUpMaxAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    amount?: true
    currency?: true
    status?: true
    gateway?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    gatewaySignature?: true
    failureReason?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopUpCountAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    amount?: true
    currency?: true
    status?: true
    gateway?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    gatewaySignature?: true
    failureReason?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopUpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopUp to aggregate.
     */
    where?: TopUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUps to fetch.
     */
    orderBy?: TopUpOrderByWithRelationInput | TopUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopUps
    **/
    _count?: true | TopUpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopUpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopUpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopUpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopUpMaxAggregateInputType
  }

  export type GetTopUpAggregateType<T extends TopUpAggregateArgs> = {
        [P in keyof T & keyof AggregateTopUp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopUp[P]>
      : GetScalarType<T[P], AggregateTopUp[P]>
  }




  export type TopUpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopUpWhereInput
    orderBy?: TopUpOrderByWithAggregationInput | TopUpOrderByWithAggregationInput[]
    by: TopUpScalarFieldEnum[] | TopUpScalarFieldEnum
    having?: TopUpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopUpCountAggregateInputType | true
    _avg?: TopUpAvgAggregateInputType
    _sum?: TopUpSumAggregateInputType
    _min?: TopUpMinAggregateInputType
    _max?: TopUpMaxAggregateInputType
  }

  export type TopUpGroupByOutputType = {
    id: string
    userId: string
    walletId: string
    amount: Decimal
    currency: string
    status: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId: string | null
    gatewaySignature: string | null
    failureReason: string | null
    transactionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TopUpCountAggregateOutputType | null
    _avg: TopUpAvgAggregateOutputType | null
    _sum: TopUpSumAggregateOutputType | null
    _min: TopUpMinAggregateOutputType | null
    _max: TopUpMaxAggregateOutputType | null
  }

  type GetTopUpGroupByPayload<T extends TopUpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopUpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopUpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopUpGroupByOutputType[P]>
            : GetScalarType<T[P], TopUpGroupByOutputType[P]>
        }
      >
    >


  export type TopUpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gateway?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewaySignature?: boolean
    failureReason?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TopUp$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["topUp"]>

  export type TopUpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gateway?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewaySignature?: boolean
    failureReason?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TopUp$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["topUp"]>

  export type TopUpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gateway?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewaySignature?: boolean
    failureReason?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TopUp$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["topUp"]>

  export type TopUpSelectScalar = {
    id?: boolean
    userId?: boolean
    walletId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gateway?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewaySignature?: boolean
    failureReason?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopUpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "walletId" | "amount" | "currency" | "status" | "gateway" | "gatewayOrderId" | "gatewayPaymentId" | "gatewaySignature" | "failureReason" | "transactionId" | "createdAt" | "updatedAt", ExtArgs["result"]["topUp"]>
  export type TopUpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TopUp$transactionArgs<ExtArgs>
  }
  export type TopUpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TopUp$transactionArgs<ExtArgs>
  }
  export type TopUpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TopUp$transactionArgs<ExtArgs>
  }

  export type $TopUpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopUp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      wallet: Prisma.$WalletPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletId: string
      amount: Prisma.Decimal
      currency: string
      status: $Enums.TopUpStatus
      gateway: string
      gatewayOrderId: string
      gatewayPaymentId: string | null
      gatewaySignature: string | null
      failureReason: string | null
      transactionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topUp"]>
    composites: {}
  }

  type TopUpGetPayload<S extends boolean | null | undefined | TopUpDefaultArgs> = $Result.GetResult<Prisma.$TopUpPayload, S>

  type TopUpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopUpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopUpCountAggregateInputType | true
    }

  export interface TopUpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopUp'], meta: { name: 'TopUp' } }
    /**
     * Find zero or one TopUp that matches the filter.
     * @param {TopUpFindUniqueArgs} args - Arguments to find a TopUp
     * @example
     * // Get one TopUp
     * const topUp = await prisma.topUp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopUpFindUniqueArgs>(args: SelectSubset<T, TopUpFindUniqueArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopUp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopUpFindUniqueOrThrowArgs} args - Arguments to find a TopUp
     * @example
     * // Get one TopUp
     * const topUp = await prisma.topUp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopUpFindUniqueOrThrowArgs>(args: SelectSubset<T, TopUpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopUp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpFindFirstArgs} args - Arguments to find a TopUp
     * @example
     * // Get one TopUp
     * const topUp = await prisma.topUp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopUpFindFirstArgs>(args?: SelectSubset<T, TopUpFindFirstArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopUp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpFindFirstOrThrowArgs} args - Arguments to find a TopUp
     * @example
     * // Get one TopUp
     * const topUp = await prisma.topUp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopUpFindFirstOrThrowArgs>(args?: SelectSubset<T, TopUpFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopUps
     * const topUps = await prisma.topUp.findMany()
     * 
     * // Get first 10 TopUps
     * const topUps = await prisma.topUp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topUpWithIdOnly = await prisma.topUp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopUpFindManyArgs>(args?: SelectSubset<T, TopUpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopUp.
     * @param {TopUpCreateArgs} args - Arguments to create a TopUp.
     * @example
     * // Create one TopUp
     * const TopUp = await prisma.topUp.create({
     *   data: {
     *     // ... data to create a TopUp
     *   }
     * })
     * 
     */
    create<T extends TopUpCreateArgs>(args: SelectSubset<T, TopUpCreateArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopUps.
     * @param {TopUpCreateManyArgs} args - Arguments to create many TopUps.
     * @example
     * // Create many TopUps
     * const topUp = await prisma.topUp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopUpCreateManyArgs>(args?: SelectSubset<T, TopUpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TopUps and returns the data saved in the database.
     * @param {TopUpCreateManyAndReturnArgs} args - Arguments to create many TopUps.
     * @example
     * // Create many TopUps
     * const topUp = await prisma.topUp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TopUps and only return the `id`
     * const topUpWithIdOnly = await prisma.topUp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopUpCreateManyAndReturnArgs>(args?: SelectSubset<T, TopUpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TopUp.
     * @param {TopUpDeleteArgs} args - Arguments to delete one TopUp.
     * @example
     * // Delete one TopUp
     * const TopUp = await prisma.topUp.delete({
     *   where: {
     *     // ... filter to delete one TopUp
     *   }
     * })
     * 
     */
    delete<T extends TopUpDeleteArgs>(args: SelectSubset<T, TopUpDeleteArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopUp.
     * @param {TopUpUpdateArgs} args - Arguments to update one TopUp.
     * @example
     * // Update one TopUp
     * const topUp = await prisma.topUp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopUpUpdateArgs>(args: SelectSubset<T, TopUpUpdateArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopUps.
     * @param {TopUpDeleteManyArgs} args - Arguments to filter TopUps to delete.
     * @example
     * // Delete a few TopUps
     * const { count } = await prisma.topUp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopUpDeleteManyArgs>(args?: SelectSubset<T, TopUpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopUps
     * const topUp = await prisma.topUp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopUpUpdateManyArgs>(args: SelectSubset<T, TopUpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopUps and returns the data updated in the database.
     * @param {TopUpUpdateManyAndReturnArgs} args - Arguments to update many TopUps.
     * @example
     * // Update many TopUps
     * const topUp = await prisma.topUp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TopUps and only return the `id`
     * const topUpWithIdOnly = await prisma.topUp.updateManyAndReturn({
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
    updateManyAndReturn<T extends TopUpUpdateManyAndReturnArgs>(args: SelectSubset<T, TopUpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TopUp.
     * @param {TopUpUpsertArgs} args - Arguments to update or create a TopUp.
     * @example
     * // Update or create a TopUp
     * const topUp = await prisma.topUp.upsert({
     *   create: {
     *     // ... data to create a TopUp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopUp we want to update
     *   }
     * })
     */
    upsert<T extends TopUpUpsertArgs>(args: SelectSubset<T, TopUpUpsertArgs<ExtArgs>>): Prisma__TopUpClient<$Result.GetResult<Prisma.$TopUpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpCountArgs} args - Arguments to filter TopUps to count.
     * @example
     * // Count the number of TopUps
     * const count = await prisma.topUp.count({
     *   where: {
     *     // ... the filter for the TopUps we want to count
     *   }
     * })
    **/
    count<T extends TopUpCountArgs>(
      args?: Subset<T, TopUpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopUpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopUpAggregateArgs>(args: Subset<T, TopUpAggregateArgs>): Prisma.PrismaPromise<GetTopUpAggregateType<T>>

    /**
     * Group by TopUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpGroupByArgs} args - Group by arguments.
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
      T extends TopUpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopUpGroupByArgs['orderBy'] }
        : { orderBy?: TopUpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopUpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopUpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopUp model
   */
  readonly fields: TopUpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopUp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopUpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends TopUp$transactionArgs<ExtArgs> = {}>(args?: Subset<T, TopUp$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TopUp model
   */
  interface TopUpFieldRefs {
    readonly id: FieldRef<"TopUp", 'String'>
    readonly userId: FieldRef<"TopUp", 'String'>
    readonly walletId: FieldRef<"TopUp", 'String'>
    readonly amount: FieldRef<"TopUp", 'Decimal'>
    readonly currency: FieldRef<"TopUp", 'String'>
    readonly status: FieldRef<"TopUp", 'TopUpStatus'>
    readonly gateway: FieldRef<"TopUp", 'String'>
    readonly gatewayOrderId: FieldRef<"TopUp", 'String'>
    readonly gatewayPaymentId: FieldRef<"TopUp", 'String'>
    readonly gatewaySignature: FieldRef<"TopUp", 'String'>
    readonly failureReason: FieldRef<"TopUp", 'String'>
    readonly transactionId: FieldRef<"TopUp", 'String'>
    readonly createdAt: FieldRef<"TopUp", 'DateTime'>
    readonly updatedAt: FieldRef<"TopUp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TopUp findUnique
   */
  export type TopUpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * Filter, which TopUp to fetch.
     */
    where: TopUpWhereUniqueInput
  }

  /**
   * TopUp findUniqueOrThrow
   */
  export type TopUpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * Filter, which TopUp to fetch.
     */
    where: TopUpWhereUniqueInput
  }

  /**
   * TopUp findFirst
   */
  export type TopUpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * Filter, which TopUp to fetch.
     */
    where?: TopUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUps to fetch.
     */
    orderBy?: TopUpOrderByWithRelationInput | TopUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopUps.
     */
    cursor?: TopUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopUps.
     */
    distinct?: TopUpScalarFieldEnum | TopUpScalarFieldEnum[]
  }

  /**
   * TopUp findFirstOrThrow
   */
  export type TopUpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * Filter, which TopUp to fetch.
     */
    where?: TopUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUps to fetch.
     */
    orderBy?: TopUpOrderByWithRelationInput | TopUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopUps.
     */
    cursor?: TopUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopUps.
     */
    distinct?: TopUpScalarFieldEnum | TopUpScalarFieldEnum[]
  }

  /**
   * TopUp findMany
   */
  export type TopUpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * Filter, which TopUps to fetch.
     */
    where?: TopUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUps to fetch.
     */
    orderBy?: TopUpOrderByWithRelationInput | TopUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopUps.
     */
    cursor?: TopUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopUps.
     */
    distinct?: TopUpScalarFieldEnum | TopUpScalarFieldEnum[]
  }

  /**
   * TopUp create
   */
  export type TopUpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * The data needed to create a TopUp.
     */
    data: XOR<TopUpCreateInput, TopUpUncheckedCreateInput>
  }

  /**
   * TopUp createMany
   */
  export type TopUpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopUps.
     */
    data: TopUpCreateManyInput | TopUpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopUp createManyAndReturn
   */
  export type TopUpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * The data used to create many TopUps.
     */
    data: TopUpCreateManyInput | TopUpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopUp update
   */
  export type TopUpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * The data needed to update a TopUp.
     */
    data: XOR<TopUpUpdateInput, TopUpUncheckedUpdateInput>
    /**
     * Choose, which TopUp to update.
     */
    where: TopUpWhereUniqueInput
  }

  /**
   * TopUp updateMany
   */
  export type TopUpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopUps.
     */
    data: XOR<TopUpUpdateManyMutationInput, TopUpUncheckedUpdateManyInput>
    /**
     * Filter which TopUps to update
     */
    where?: TopUpWhereInput
    /**
     * Limit how many TopUps to update.
     */
    limit?: number
  }

  /**
   * TopUp updateManyAndReturn
   */
  export type TopUpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * The data used to update TopUps.
     */
    data: XOR<TopUpUpdateManyMutationInput, TopUpUncheckedUpdateManyInput>
    /**
     * Filter which TopUps to update
     */
    where?: TopUpWhereInput
    /**
     * Limit how many TopUps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopUp upsert
   */
  export type TopUpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * The filter to search for the TopUp to update in case it exists.
     */
    where: TopUpWhereUniqueInput
    /**
     * In case the TopUp found by the `where` argument doesn't exist, create a new TopUp with this data.
     */
    create: XOR<TopUpCreateInput, TopUpUncheckedCreateInput>
    /**
     * In case the TopUp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopUpUpdateInput, TopUpUncheckedUpdateInput>
  }

  /**
   * TopUp delete
   */
  export type TopUpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
    /**
     * Filter which TopUp to delete.
     */
    where: TopUpWhereUniqueInput
  }

  /**
   * TopUp deleteMany
   */
  export type TopUpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopUps to delete
     */
    where?: TopUpWhereInput
    /**
     * Limit how many TopUps to delete.
     */
    limit?: number
  }

  /**
   * TopUp.transaction
   */
  export type TopUp$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * TopUp without action
   */
  export type TopUpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUp
     */
    select?: TopUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUp
     */
    omit?: TopUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    resource: number
    resourceId: number
    ipAddress: number
    userAgent: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "resource" | "resourceId" | "ipAddress" | "userAgent" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      resource: string | null
      resourceId: string | null
      ipAddress: string | null
      userAgent: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resource: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
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
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    isEmailVerified: 'isEmailVerified',
    twoFactorEnabled: 'twoFactorEnabled',
    twoFactorSecret: 'twoFactorSecret',
    twoFactorEnabledAt: 'twoFactorEnabledAt',
    loginAttempts: 'loginAttempts',
    lockedUntil: 'lockedUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    type: 'type',
    status: 'status',
    amount: 'amount',
    description: 'description',
    senderWalletId: 'senderWalletId',
    receiverWalletId: 'receiverWalletId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    idempotencyKey: 'idempotencyKey'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const LedgerEntryScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    walletId: 'walletId',
    type: 'type',
    amount: 'amount',
    balanceBefore: 'balanceBefore',
    balanceAfter: 'balanceAfter',
    createdAt: 'createdAt'
  };

  export type LedgerEntryScalarFieldEnum = (typeof LedgerEntryScalarFieldEnum)[keyof typeof LedgerEntryScalarFieldEnum]


  export const IdempotencyKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    userId: 'userId',
    transactionId: 'transactionId',
    status: 'status',
    response: 'response',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum]


  export const PaymentRequestScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    note: 'note',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requesterId: 'requesterId',
    receiverId: 'receiverId'
  };

  export type PaymentRequestScalarFieldEnum = (typeof PaymentRequestScalarFieldEnum)[keyof typeof PaymentRequestScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    channel: 'channel',
    status: 'status',
    title: 'title',
    message: 'message',
    data: 'data',
    readAt: 'readAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const OtpCodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    codeHash: 'codeHash',
    purpose: 'purpose',
    expiresAt: 'expiresAt',
    attempts: 'attempts',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt'
  };

  export type OtpCodeScalarFieldEnum = (typeof OtpCodeScalarFieldEnum)[keyof typeof OtpCodeScalarFieldEnum]


  export const TopUpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletId: 'walletId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    gateway: 'gateway',
    gatewayOrderId: 'gatewayOrderId',
    gatewayPaymentId: 'gatewayPaymentId',
    gatewaySignature: 'gatewaySignature',
    failureReason: 'failureReason',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopUpScalarFieldEnum = (typeof TopUpScalarFieldEnum)[keyof typeof TopUpScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    resourceId: 'resourceId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'LedgerEntryType'
   */
  export type EnumLedgerEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerEntryType'>
    


  /**
   * Reference to a field of type 'LedgerEntryType[]'
   */
  export type ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerEntryType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PaymentRequestStatus'
   */
  export type EnumPaymentRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentRequestStatus'>
    


  /**
   * Reference to a field of type 'PaymentRequestStatus[]'
   */
  export type ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentRequestStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationChannel'
   */
  export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>
    


  /**
   * Reference to a field of type 'NotificationChannel[]'
   */
  export type ListEnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel[]'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'NotificationStatus[]'
   */
  export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>
    


  /**
   * Reference to a field of type 'OtpPurpose'
   */
  export type EnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose'>
    


  /**
   * Reference to a field of type 'OtpPurpose[]'
   */
  export type ListEnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose[]'>
    


  /**
   * Reference to a field of type 'TopUpStatus'
   */
  export type EnumTopUpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TopUpStatus'>
    


  /**
   * Reference to a field of type 'TopUpStatus[]'
   */
  export type ListEnumTopUpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TopUpStatus[]'>
    


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
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    twoFactorEnabledAt?: DateTimeNullableFilter<"User"> | Date | string | null
    loginAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    requesterPaymentRequests?: PaymentRequestListRelationFilter
    receiverPaymentRequests?: PaymentRequestListRelationFilter
    otpCodes?: OtpCodeListRelationFilter
    topUps?: TopUpListRelationFilter
    notifications?: NotificationListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    twoFactorEnabledAt?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    requesterPaymentRequests?: PaymentRequestOrderByRelationAggregateInput
    receiverPaymentRequests?: PaymentRequestOrderByRelationAggregateInput
    otpCodes?: OtpCodeOrderByRelationAggregateInput
    topUps?: TopUpOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    twoFactorEnabledAt?: DateTimeNullableFilter<"User"> | Date | string | null
    loginAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    requesterPaymentRequests?: PaymentRequestListRelationFilter
    receiverPaymentRequests?: PaymentRequestListRelationFilter
    otpCodes?: OtpCodeListRelationFilter
    topUps?: TopUpListRelationFilter
    notifications?: NotificationListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    twoFactorEnabledAt?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    twoFactorSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorEnabledAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    loginAttempts?: IntWithAggregatesFilter<"User"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    userId?: StringFilter<"Wallet"> | string
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    senderTransactions?: TransactionListRelationFilter
    receiverTransactions?: TransactionListRelationFilter
    ledgerEntries?: LedgerEntryListRelationFilter
    topUps?: TopUpListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    senderTransactions?: TransactionOrderByRelationAggregateInput
    receiverTransactions?: TransactionOrderByRelationAggregateInput
    ledgerEntries?: LedgerEntryOrderByRelationAggregateInput
    topUps?: TopUpOrderByRelationAggregateInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    senderTransactions?: TransactionListRelationFilter
    receiverTransactions?: TransactionListRelationFilter
    ledgerEntries?: LedgerEntryListRelationFilter
    topUps?: TopUpListRelationFilter
  }, "id" | "userId">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    userId?: StringWithAggregatesFilter<"Wallet"> | string
    balance?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Wallet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    reference?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    senderWalletId?: StringNullableFilter<"Transaction"> | string | null
    receiverWalletId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    idempotencyKey?: StringNullableFilter<"Transaction"> | string | null
    senderWallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    receiverWallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    ledgerEntries?: LedgerEntryListRelationFilter
    topUp?: XOR<TopUpNullableScalarRelationFilter, TopUpWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    senderWalletId?: SortOrderInput | SortOrder
    receiverWalletId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    senderWallet?: WalletOrderByWithRelationInput
    receiverWallet?: WalletOrderByWithRelationInput
    ledgerEntries?: LedgerEntryOrderByRelationAggregateInput
    topUp?: TopUpOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    senderWalletId?: StringNullableFilter<"Transaction"> | string | null
    receiverWalletId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    idempotencyKey?: StringNullableFilter<"Transaction"> | string | null
    senderWallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    receiverWallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    ledgerEntries?: LedgerEntryListRelationFilter
    topUp?: XOR<TopUpNullableScalarRelationFilter, TopUpWhereInput> | null
  }, "id" | "reference">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    senderWalletId?: SortOrderInput | SortOrder
    receiverWalletId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    reference?: StringWithAggregatesFilter<"Transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    senderWalletId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    receiverWalletId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    idempotencyKey?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type LedgerEntryWhereInput = {
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    transactionId?: StringFilter<"LedgerEntry"> | string
    walletId?: StringFilter<"LedgerEntry"> | string
    type?: EnumLedgerEntryTypeFilter<"LedgerEntry"> | $Enums.LedgerEntryType
    amount?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }

  export type LedgerEntryOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
    wallet?: WalletOrderByWithRelationInput
  }

  export type LedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    transactionId?: StringFilter<"LedgerEntry"> | string
    walletId?: StringFilter<"LedgerEntry"> | string
    type?: EnumLedgerEntryTypeFilter<"LedgerEntry"> | $Enums.LedgerEntryType
    amount?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }, "id">

  export type LedgerEntryOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
    _count?: LedgerEntryCountOrderByAggregateInput
    _avg?: LedgerEntryAvgOrderByAggregateInput
    _max?: LedgerEntryMaxOrderByAggregateInput
    _min?: LedgerEntryMinOrderByAggregateInput
    _sum?: LedgerEntrySumOrderByAggregateInput
  }

  export type LedgerEntryScalarWhereWithAggregatesInput = {
    AND?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    OR?: LedgerEntryScalarWhereWithAggregatesInput[]
    NOT?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerEntry"> | string
    transactionId?: StringWithAggregatesFilter<"LedgerEntry"> | string
    walletId?: StringWithAggregatesFilter<"LedgerEntry"> | string
    type?: EnumLedgerEntryTypeWithAggregatesFilter<"LedgerEntry"> | $Enums.LedgerEntryType
    amount?: DecimalWithAggregatesFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalWithAggregatesFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalWithAggregatesFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"LedgerEntry"> | Date | string
  }

  export type IdempotencyKeyWhereInput = {
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    id?: StringFilter<"IdempotencyKey"> | string
    key?: StringFilter<"IdempotencyKey"> | string
    userId?: StringFilter<"IdempotencyKey"> | string
    transactionId?: StringNullableFilter<"IdempotencyKey"> | string | null
    status?: StringFilter<"IdempotencyKey"> | string
    response?: JsonNullableFilter<"IdempotencyKey">
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
    updatedAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }

  export type IdempotencyKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdempotencyKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    userId?: StringFilter<"IdempotencyKey"> | string
    transactionId?: StringNullableFilter<"IdempotencyKey"> | string | null
    status?: StringFilter<"IdempotencyKey"> | string
    response?: JsonNullableFilter<"IdempotencyKey">
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
    updatedAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }, "id" | "key">

  export type IdempotencyKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IdempotencyKeyCountOrderByAggregateInput
    _max?: IdempotencyKeyMaxOrderByAggregateInput
    _min?: IdempotencyKeyMinOrderByAggregateInput
  }

  export type IdempotencyKeyScalarWhereWithAggregatesInput = {
    AND?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    OR?: IdempotencyKeyScalarWhereWithAggregatesInput[]
    NOT?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    key?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    userId?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    transactionId?: StringNullableWithAggregatesFilter<"IdempotencyKey"> | string | null
    status?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    response?: JsonNullableWithAggregatesFilter<"IdempotencyKey">
    createdAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
  }

  export type PaymentRequestWhereInput = {
    AND?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    OR?: PaymentRequestWhereInput[]
    NOT?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    id?: StringFilter<"PaymentRequest"> | string
    amount?: DecimalFilter<"PaymentRequest"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"PaymentRequest"> | string | null
    status?: EnumPaymentRequestStatusFilter<"PaymentRequest"> | $Enums.PaymentRequestStatus
    expiresAt?: DateTimeNullableFilter<"PaymentRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    requesterId?: StringFilter<"PaymentRequest"> | string
    receiverId?: StringFilter<"PaymentRequest"> | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentRequestOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
    requester?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type PaymentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    OR?: PaymentRequestWhereInput[]
    NOT?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    amount?: DecimalFilter<"PaymentRequest"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"PaymentRequest"> | string | null
    status?: EnumPaymentRequestStatusFilter<"PaymentRequest"> | $Enums.PaymentRequestStatus
    expiresAt?: DateTimeNullableFilter<"PaymentRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    requesterId?: StringFilter<"PaymentRequest"> | string
    receiverId?: StringFilter<"PaymentRequest"> | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentRequestOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
    _count?: PaymentRequestCountOrderByAggregateInput
    _avg?: PaymentRequestAvgOrderByAggregateInput
    _max?: PaymentRequestMaxOrderByAggregateInput
    _min?: PaymentRequestMinOrderByAggregateInput
    _sum?: PaymentRequestSumOrderByAggregateInput
  }

  export type PaymentRequestScalarWhereWithAggregatesInput = {
    AND?: PaymentRequestScalarWhereWithAggregatesInput | PaymentRequestScalarWhereWithAggregatesInput[]
    OR?: PaymentRequestScalarWhereWithAggregatesInput[]
    NOT?: PaymentRequestScalarWhereWithAggregatesInput | PaymentRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentRequest"> | string
    amount?: DecimalWithAggregatesFilter<"PaymentRequest"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableWithAggregatesFilter<"PaymentRequest"> | string | null
    status?: EnumPaymentRequestStatusWithAggregatesFilter<"PaymentRequest"> | $Enums.PaymentRequestStatus
    expiresAt?: DateTimeNullableWithAggregatesFilter<"PaymentRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentRequest"> | Date | string
    requesterId?: StringWithAggregatesFilter<"PaymentRequest"> | string
    receiverId?: StringWithAggregatesFilter<"PaymentRequest"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelWithAggregatesFilter<"Notification"> | $Enums.NotificationChannel
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    data?: JsonNullableWithAggregatesFilter<"Notification">
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
  }

  export type OtpCodeWhereInput = {
    AND?: OtpCodeWhereInput | OtpCodeWhereInput[]
    OR?: OtpCodeWhereInput[]
    NOT?: OtpCodeWhereInput | OtpCodeWhereInput[]
    id?: StringFilter<"OtpCode"> | string
    userId?: StringFilter<"OtpCode"> | string
    codeHash?: StringFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    attempts?: IntFilter<"OtpCode"> | number
    verifiedAt?: DateTimeNullableFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OtpCodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpCodeWhereInput | OtpCodeWhereInput[]
    OR?: OtpCodeWhereInput[]
    NOT?: OtpCodeWhereInput | OtpCodeWhereInput[]
    userId?: StringFilter<"OtpCode"> | string
    codeHash?: StringFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    attempts?: IntFilter<"OtpCode"> | number
    verifiedAt?: DateTimeNullableFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OtpCodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OtpCodeCountOrderByAggregateInput
    _avg?: OtpCodeAvgOrderByAggregateInput
    _max?: OtpCodeMaxOrderByAggregateInput
    _min?: OtpCodeMinOrderByAggregateInput
    _sum?: OtpCodeSumOrderByAggregateInput
  }

  export type OtpCodeScalarWhereWithAggregatesInput = {
    AND?: OtpCodeScalarWhereWithAggregatesInput | OtpCodeScalarWhereWithAggregatesInput[]
    OR?: OtpCodeScalarWhereWithAggregatesInput[]
    NOT?: OtpCodeScalarWhereWithAggregatesInput | OtpCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpCode"> | string
    userId?: StringWithAggregatesFilter<"OtpCode"> | string
    codeHash?: StringWithAggregatesFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeWithAggregatesFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeWithAggregatesFilter<"OtpCode"> | Date | string
    attempts?: IntWithAggregatesFilter<"OtpCode"> | number
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OtpCode"> | Date | string
  }

  export type TopUpWhereInput = {
    AND?: TopUpWhereInput | TopUpWhereInput[]
    OR?: TopUpWhereInput[]
    NOT?: TopUpWhereInput | TopUpWhereInput[]
    id?: StringFilter<"TopUp"> | string
    userId?: StringFilter<"TopUp"> | string
    walletId?: StringFilter<"TopUp"> | string
    amount?: DecimalFilter<"TopUp"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"TopUp"> | string
    status?: EnumTopUpStatusFilter<"TopUp"> | $Enums.TopUpStatus
    gateway?: StringFilter<"TopUp"> | string
    gatewayOrderId?: StringFilter<"TopUp"> | string
    gatewayPaymentId?: StringNullableFilter<"TopUp"> | string | null
    gatewaySignature?: StringNullableFilter<"TopUp"> | string | null
    failureReason?: StringNullableFilter<"TopUp"> | string | null
    transactionId?: StringNullableFilter<"TopUp"> | string | null
    createdAt?: DateTimeFilter<"TopUp"> | Date | string
    updatedAt?: DateTimeFilter<"TopUp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type TopUpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewaySignature?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    wallet?: WalletOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type TopUpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gatewayOrderId?: string
    gatewayPaymentId?: string
    transactionId?: string
    AND?: TopUpWhereInput | TopUpWhereInput[]
    OR?: TopUpWhereInput[]
    NOT?: TopUpWhereInput | TopUpWhereInput[]
    userId?: StringFilter<"TopUp"> | string
    walletId?: StringFilter<"TopUp"> | string
    amount?: DecimalFilter<"TopUp"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"TopUp"> | string
    status?: EnumTopUpStatusFilter<"TopUp"> | $Enums.TopUpStatus
    gateway?: StringFilter<"TopUp"> | string
    gatewaySignature?: StringNullableFilter<"TopUp"> | string | null
    failureReason?: StringNullableFilter<"TopUp"> | string | null
    createdAt?: DateTimeFilter<"TopUp"> | Date | string
    updatedAt?: DateTimeFilter<"TopUp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id" | "gatewayOrderId" | "gatewayPaymentId" | "transactionId">

  export type TopUpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewaySignature?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopUpCountOrderByAggregateInput
    _avg?: TopUpAvgOrderByAggregateInput
    _max?: TopUpMaxOrderByAggregateInput
    _min?: TopUpMinOrderByAggregateInput
    _sum?: TopUpSumOrderByAggregateInput
  }

  export type TopUpScalarWhereWithAggregatesInput = {
    AND?: TopUpScalarWhereWithAggregatesInput | TopUpScalarWhereWithAggregatesInput[]
    OR?: TopUpScalarWhereWithAggregatesInput[]
    NOT?: TopUpScalarWhereWithAggregatesInput | TopUpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopUp"> | string
    userId?: StringWithAggregatesFilter<"TopUp"> | string
    walletId?: StringWithAggregatesFilter<"TopUp"> | string
    amount?: DecimalWithAggregatesFilter<"TopUp"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"TopUp"> | string
    status?: EnumTopUpStatusWithAggregatesFilter<"TopUp"> | $Enums.TopUpStatus
    gateway?: StringWithAggregatesFilter<"TopUp"> | string
    gatewayOrderId?: StringWithAggregatesFilter<"TopUp"> | string
    gatewayPaymentId?: StringNullableWithAggregatesFilter<"TopUp"> | string | null
    gatewaySignature?: StringNullableWithAggregatesFilter<"TopUp"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"TopUp"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"TopUp"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TopUp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TopUp"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resource?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    topUps?: TopUpCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    topUps?: TopUpUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    senderTransactions?: TransactionCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutWalletInput
    topUps?: TopUpCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionUncheckedCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    senderTransactions?: TransactionUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderTransactions?: TransactionUncheckedUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUncheckedUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletCreateManyInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    senderWallet?: WalletCreateNestedOneWithoutSenderTransactionsInput
    receiverWallet?: WalletCreateNestedOneWithoutReceiverTransactionsInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionInput
    topUp?: TopUpCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    senderWalletId?: string | null
    receiverWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput
    topUp?: TopUpUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    senderWallet?: WalletUpdateOneWithoutSenderTransactionsNestedInput
    receiverWallet?: WalletUpdateOneWithoutReceiverTransactionsNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionNestedInput
    topUp?: TopUpUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    senderWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput
    topUp?: TopUpUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    senderWalletId?: string | null
    receiverWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    senderWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LedgerEntryCreateInput = {
    id?: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutLedgerEntriesInput
    wallet: WalletCreateNestedOneWithoutLedgerEntriesInput
  }

  export type LedgerEntryUncheckedCreateInput = {
    id?: string
    transactionId: string
    walletId: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutLedgerEntriesNestedInput
    wallet?: WalletUpdateOneRequiredWithoutLedgerEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateManyInput = {
    id?: string
    transactionId: string
    walletId: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateInput = {
    id?: string
    key: string
    userId: string
    transactionId?: string | null
    status?: string
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdempotencyKeyUncheckedCreateInput = {
    id?: string
    key: string
    userId: string
    transactionId?: string | null
    status?: string
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdempotencyKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateManyInput = {
    id?: string
    key: string
    userId: string
    transactionId?: string | null
    status?: string
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdempotencyKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRequestCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutRequesterPaymentRequestsInput
    receiver: UserCreateNestedOneWithoutReceiverPaymentRequestsInput
  }

  export type PaymentRequestUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: string
    receiverId: string
  }

  export type PaymentRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequesterPaymentRequestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceiverPaymentRequestsNestedInput
  }

  export type PaymentRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRequestCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: string
    receiverId: string
  }

  export type PaymentRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    channel?: $Enums.NotificationChannel
    status?: $Enums.NotificationStatus
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    channel?: $Enums.NotificationChannel
    status?: $Enums.NotificationStatus
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    channel?: $Enums.NotificationChannel
    status?: $Enums.NotificationStatus
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OtpCodeCreateInput = {
    id?: string
    codeHash: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date | string
    attempts?: number
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtpCodesInput
  }

  export type OtpCodeUncheckedCreateInput = {
    id?: string
    userId: string
    codeHash: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date | string
    attempts?: number
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpCodesNestedInput
  }

  export type OtpCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeCreateManyInput = {
    id?: string
    userId: string
    codeHash: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date | string
    attempts?: number
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTopUpsInput
    wallet: WalletCreateNestedOneWithoutTopUpsInput
    transaction?: TransactionCreateNestedOneWithoutTopUpInput
  }

  export type TopUpUncheckedCreateInput = {
    id?: string
    userId: string
    walletId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopUpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTopUpsNestedInput
    wallet?: WalletUpdateOneRequiredWithoutTopUpsNestedInput
    transaction?: TransactionUpdateOneWithoutTopUpNestedInput
  }

  export type TopUpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpCreateManyInput = {
    id?: string
    userId: string
    walletId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopUpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    userId?: string | null
    action: string
    resource?: string | null
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    resource?: string | null
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    resource?: string | null
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type PaymentRequestListRelationFilter = {
    every?: PaymentRequestWhereInput
    some?: PaymentRequestWhereInput
    none?: PaymentRequestWhereInput
  }

  export type OtpCodeListRelationFilter = {
    every?: OtpCodeWhereInput
    some?: OtpCodeWhereInput
    none?: OtpCodeWhereInput
  }

  export type TopUpListRelationFilter = {
    every?: TopUpWhereInput
    some?: TopUpWhereInput
    none?: TopUpWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
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

  export type PaymentRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtpCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopUpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabledAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabledAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabledAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    loginAttempts?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type LedgerEntryListRelationFilter = {
    every?: LedgerEntryWhereInput
    some?: LedgerEntryWhereInput
    none?: LedgerEntryWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TopUpNullableScalarRelationFilter = {
    is?: TopUpWhereInput | null
    isNot?: TopUpWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idempotencyKey?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumLedgerEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeFilter<$PrismaModel> | $Enums.LedgerEntryType
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type WalletScalarRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type LedgerEntryCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type LedgerEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntrySumOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
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

  export type IdempotencyKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdempotencyKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdempotencyKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumPaymentRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentRequestStatus | EnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentRequestStatusFilter<$PrismaModel> | $Enums.PaymentRequestStatus
  }

  export type PaymentRequestCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
  }

  export type PaymentRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
  }

  export type PaymentRequestMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
  }

  export type PaymentRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentRequestStatus | EnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentRequestStatusFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumOtpPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeFilter<$PrismaModel> | $Enums.OtpPurpose
  }

  export type OtpCodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type OtpCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type EnumOtpPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel> | $Enums.OtpPurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpPurposeFilter<$PrismaModel>
    _max?: NestedEnumOtpPurposeFilter<$PrismaModel>
  }

  export type EnumTopUpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TopUpStatus | EnumTopUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTopUpStatusFilter<$PrismaModel> | $Enums.TopUpStatus
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type TopUpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewaySignature?: SortOrder
    failureReason?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopUpAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TopUpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewaySignature?: SortOrder
    failureReason?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopUpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewaySignature?: SortOrder
    failureReason?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopUpSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTopUpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TopUpStatus | EnumTopUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTopUpStatusWithAggregatesFilter<$PrismaModel> | $Enums.TopUpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTopUpStatusFilter<$PrismaModel>
    _max?: NestedEnumTopUpStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type PaymentRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<PaymentRequestCreateWithoutRequesterInput, PaymentRequestUncheckedCreateWithoutRequesterInput> | PaymentRequestCreateWithoutRequesterInput[] | PaymentRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutRequesterInput | PaymentRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: PaymentRequestCreateManyRequesterInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type PaymentRequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PaymentRequestCreateWithoutReceiverInput, PaymentRequestUncheckedCreateWithoutReceiverInput> | PaymentRequestCreateWithoutReceiverInput[] | PaymentRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutReceiverInput | PaymentRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: PaymentRequestCreateManyReceiverInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type OtpCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
  }

  export type TopUpCreateNestedManyWithoutUserInput = {
    create?: XOR<TopUpCreateWithoutUserInput, TopUpUncheckedCreateWithoutUserInput> | TopUpCreateWithoutUserInput[] | TopUpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutUserInput | TopUpCreateOrConnectWithoutUserInput[]
    createMany?: TopUpCreateManyUserInputEnvelope
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<PaymentRequestCreateWithoutRequesterInput, PaymentRequestUncheckedCreateWithoutRequesterInput> | PaymentRequestCreateWithoutRequesterInput[] | PaymentRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutRequesterInput | PaymentRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: PaymentRequestCreateManyRequesterInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PaymentRequestCreateWithoutReceiverInput, PaymentRequestUncheckedCreateWithoutReceiverInput> | PaymentRequestCreateWithoutReceiverInput[] | PaymentRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutReceiverInput | PaymentRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: PaymentRequestCreateManyReceiverInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type OtpCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
  }

  export type TopUpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TopUpCreateWithoutUserInput, TopUpUncheckedCreateWithoutUserInput> | TopUpCreateWithoutUserInput[] | TopUpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutUserInput | TopUpCreateOrConnectWithoutUserInput[]
    createMany?: TopUpCreateManyUserInputEnvelope
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type PaymentRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutRequesterInput, PaymentRequestUncheckedCreateWithoutRequesterInput> | PaymentRequestCreateWithoutRequesterInput[] | PaymentRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutRequesterInput | PaymentRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutRequesterInput | PaymentRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: PaymentRequestCreateManyRequesterInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutRequesterInput | PaymentRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutRequesterInput | PaymentRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type PaymentRequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutReceiverInput, PaymentRequestUncheckedCreateWithoutReceiverInput> | PaymentRequestCreateWithoutReceiverInput[] | PaymentRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutReceiverInput | PaymentRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutReceiverInput | PaymentRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PaymentRequestCreateManyReceiverInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutReceiverInput | PaymentRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutReceiverInput | PaymentRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type OtpCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    upsert?: OtpCodeUpsertWithWhereUniqueWithoutUserInput | OtpCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    set?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    disconnect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    delete?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    update?: OtpCodeUpdateWithWhereUniqueWithoutUserInput | OtpCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpCodeUpdateManyWithWhereWithoutUserInput | OtpCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
  }

  export type TopUpUpdateManyWithoutUserNestedInput = {
    create?: XOR<TopUpCreateWithoutUserInput, TopUpUncheckedCreateWithoutUserInput> | TopUpCreateWithoutUserInput[] | TopUpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutUserInput | TopUpCreateOrConnectWithoutUserInput[]
    upsert?: TopUpUpsertWithWhereUniqueWithoutUserInput | TopUpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TopUpCreateManyUserInputEnvelope
    set?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    disconnect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    delete?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    update?: TopUpUpdateWithWhereUniqueWithoutUserInput | TopUpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TopUpUpdateManyWithWhereWithoutUserInput | TopUpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TopUpScalarWhereInput | TopUpScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
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

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutRequesterInput, PaymentRequestUncheckedCreateWithoutRequesterInput> | PaymentRequestCreateWithoutRequesterInput[] | PaymentRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutRequesterInput | PaymentRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutRequesterInput | PaymentRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: PaymentRequestCreateManyRequesterInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutRequesterInput | PaymentRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutRequesterInput | PaymentRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutReceiverInput, PaymentRequestUncheckedCreateWithoutReceiverInput> | PaymentRequestCreateWithoutReceiverInput[] | PaymentRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutReceiverInput | PaymentRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutReceiverInput | PaymentRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PaymentRequestCreateManyReceiverInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutReceiverInput | PaymentRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutReceiverInput | PaymentRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type OtpCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput> | OtpCodeCreateWithoutUserInput[] | OtpCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCodeCreateOrConnectWithoutUserInput | OtpCodeCreateOrConnectWithoutUserInput[]
    upsert?: OtpCodeUpsertWithWhereUniqueWithoutUserInput | OtpCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCodeCreateManyUserInputEnvelope
    set?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    disconnect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    delete?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    connect?: OtpCodeWhereUniqueInput | OtpCodeWhereUniqueInput[]
    update?: OtpCodeUpdateWithWhereUniqueWithoutUserInput | OtpCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpCodeUpdateManyWithWhereWithoutUserInput | OtpCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
  }

  export type TopUpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TopUpCreateWithoutUserInput, TopUpUncheckedCreateWithoutUserInput> | TopUpCreateWithoutUserInput[] | TopUpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutUserInput | TopUpCreateOrConnectWithoutUserInput[]
    upsert?: TopUpUpsertWithWhereUniqueWithoutUserInput | TopUpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TopUpCreateManyUserInputEnvelope
    set?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    disconnect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    delete?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    update?: TopUpUpdateWithWhereUniqueWithoutUserInput | TopUpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TopUpUpdateManyWithWhereWithoutUserInput | TopUpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TopUpScalarWhereInput | TopUpScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutSenderWalletInput = {
    create?: XOR<TransactionCreateWithoutSenderWalletInput, TransactionUncheckedCreateWithoutSenderWalletInput> | TransactionCreateWithoutSenderWalletInput[] | TransactionUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderWalletInput | TransactionCreateOrConnectWithoutSenderWalletInput[]
    createMany?: TransactionCreateManySenderWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutReceiverWalletInput = {
    create?: XOR<TransactionCreateWithoutReceiverWalletInput, TransactionUncheckedCreateWithoutReceiverWalletInput> | TransactionCreateWithoutReceiverWalletInput[] | TransactionUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverWalletInput | TransactionCreateOrConnectWithoutReceiverWalletInput[]
    createMany?: TransactionCreateManyReceiverWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type LedgerEntryCreateNestedManyWithoutWalletInput = {
    create?: XOR<LedgerEntryCreateWithoutWalletInput, LedgerEntryUncheckedCreateWithoutWalletInput> | LedgerEntryCreateWithoutWalletInput[] | LedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutWalletInput | LedgerEntryCreateOrConnectWithoutWalletInput[]
    createMany?: LedgerEntryCreateManyWalletInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type TopUpCreateNestedManyWithoutWalletInput = {
    create?: XOR<TopUpCreateWithoutWalletInput, TopUpUncheckedCreateWithoutWalletInput> | TopUpCreateWithoutWalletInput[] | TopUpUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutWalletInput | TopUpCreateOrConnectWithoutWalletInput[]
    createMany?: TopUpCreateManyWalletInputEnvelope
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSenderWalletInput = {
    create?: XOR<TransactionCreateWithoutSenderWalletInput, TransactionUncheckedCreateWithoutSenderWalletInput> | TransactionCreateWithoutSenderWalletInput[] | TransactionUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderWalletInput | TransactionCreateOrConnectWithoutSenderWalletInput[]
    createMany?: TransactionCreateManySenderWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutReceiverWalletInput = {
    create?: XOR<TransactionCreateWithoutReceiverWalletInput, TransactionUncheckedCreateWithoutReceiverWalletInput> | TransactionCreateWithoutReceiverWalletInput[] | TransactionUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverWalletInput | TransactionCreateOrConnectWithoutReceiverWalletInput[]
    createMany?: TransactionCreateManyReceiverWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type LedgerEntryUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<LedgerEntryCreateWithoutWalletInput, LedgerEntryUncheckedCreateWithoutWalletInput> | LedgerEntryCreateWithoutWalletInput[] | LedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutWalletInput | LedgerEntryCreateOrConnectWithoutWalletInput[]
    createMany?: LedgerEntryCreateManyWalletInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type TopUpUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TopUpCreateWithoutWalletInput, TopUpUncheckedCreateWithoutWalletInput> | TopUpCreateWithoutWalletInput[] | TopUpUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutWalletInput | TopUpCreateOrConnectWithoutWalletInput[]
    createMany?: TopUpCreateManyWalletInputEnvelope
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionUpdateManyWithoutSenderWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderWalletInput, TransactionUncheckedCreateWithoutSenderWalletInput> | TransactionCreateWithoutSenderWalletInput[] | TransactionUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderWalletInput | TransactionCreateOrConnectWithoutSenderWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderWalletInput | TransactionUpsertWithWhereUniqueWithoutSenderWalletInput[]
    createMany?: TransactionCreateManySenderWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderWalletInput | TransactionUpdateWithWhereUniqueWithoutSenderWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderWalletInput | TransactionUpdateManyWithWhereWithoutSenderWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutReceiverWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutReceiverWalletInput, TransactionUncheckedCreateWithoutReceiverWalletInput> | TransactionCreateWithoutReceiverWalletInput[] | TransactionUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverWalletInput | TransactionCreateOrConnectWithoutReceiverWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutReceiverWalletInput | TransactionUpsertWithWhereUniqueWithoutReceiverWalletInput[]
    createMany?: TransactionCreateManyReceiverWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutReceiverWalletInput | TransactionUpdateWithWhereUniqueWithoutReceiverWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutReceiverWalletInput | TransactionUpdateManyWithWhereWithoutReceiverWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LedgerEntryUpdateManyWithoutWalletNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutWalletInput, LedgerEntryUncheckedCreateWithoutWalletInput> | LedgerEntryCreateWithoutWalletInput[] | LedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutWalletInput | LedgerEntryCreateOrConnectWithoutWalletInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutWalletInput | LedgerEntryUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: LedgerEntryCreateManyWalletInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutWalletInput | LedgerEntryUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutWalletInput | LedgerEntryUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type TopUpUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TopUpCreateWithoutWalletInput, TopUpUncheckedCreateWithoutWalletInput> | TopUpCreateWithoutWalletInput[] | TopUpUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutWalletInput | TopUpCreateOrConnectWithoutWalletInput[]
    upsert?: TopUpUpsertWithWhereUniqueWithoutWalletInput | TopUpUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TopUpCreateManyWalletInputEnvelope
    set?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    disconnect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    delete?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    update?: TopUpUpdateWithWhereUniqueWithoutWalletInput | TopUpUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TopUpUpdateManyWithWhereWithoutWalletInput | TopUpUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TopUpScalarWhereInput | TopUpScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSenderWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderWalletInput, TransactionUncheckedCreateWithoutSenderWalletInput> | TransactionCreateWithoutSenderWalletInput[] | TransactionUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderWalletInput | TransactionCreateOrConnectWithoutSenderWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderWalletInput | TransactionUpsertWithWhereUniqueWithoutSenderWalletInput[]
    createMany?: TransactionCreateManySenderWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderWalletInput | TransactionUpdateWithWhereUniqueWithoutSenderWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderWalletInput | TransactionUpdateManyWithWhereWithoutSenderWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutReceiverWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutReceiverWalletInput, TransactionUncheckedCreateWithoutReceiverWalletInput> | TransactionCreateWithoutReceiverWalletInput[] | TransactionUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverWalletInput | TransactionCreateOrConnectWithoutReceiverWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutReceiverWalletInput | TransactionUpsertWithWhereUniqueWithoutReceiverWalletInput[]
    createMany?: TransactionCreateManyReceiverWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutReceiverWalletInput | TransactionUpdateWithWhereUniqueWithoutReceiverWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutReceiverWalletInput | TransactionUpdateManyWithWhereWithoutReceiverWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LedgerEntryUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutWalletInput, LedgerEntryUncheckedCreateWithoutWalletInput> | LedgerEntryCreateWithoutWalletInput[] | LedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutWalletInput | LedgerEntryCreateOrConnectWithoutWalletInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutWalletInput | LedgerEntryUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: LedgerEntryCreateManyWalletInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutWalletInput | LedgerEntryUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutWalletInput | LedgerEntryUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type TopUpUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TopUpCreateWithoutWalletInput, TopUpUncheckedCreateWithoutWalletInput> | TopUpCreateWithoutWalletInput[] | TopUpUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TopUpCreateOrConnectWithoutWalletInput | TopUpCreateOrConnectWithoutWalletInput[]
    upsert?: TopUpUpsertWithWhereUniqueWithoutWalletInput | TopUpUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TopUpCreateManyWalletInputEnvelope
    set?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    disconnect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    delete?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    connect?: TopUpWhereUniqueInput | TopUpWhereUniqueInput[]
    update?: TopUpUpdateWithWhereUniqueWithoutWalletInput | TopUpUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TopUpUpdateManyWithWhereWithoutWalletInput | TopUpUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TopUpScalarWhereInput | TopUpScalarWhereInput[]
  }

  export type WalletCreateNestedOneWithoutSenderTransactionsInput = {
    create?: XOR<WalletCreateWithoutSenderTransactionsInput, WalletUncheckedCreateWithoutSenderTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutSenderTransactionsInput
    connect?: WalletWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutReceiverTransactionsInput = {
    create?: XOR<WalletCreateWithoutReceiverTransactionsInput, WalletUncheckedCreateWithoutReceiverTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutReceiverTransactionsInput
    connect?: WalletWhereUniqueInput
  }

  export type LedgerEntryCreateNestedManyWithoutTransactionInput = {
    create?: XOR<LedgerEntryCreateWithoutTransactionInput, LedgerEntryUncheckedCreateWithoutTransactionInput> | LedgerEntryCreateWithoutTransactionInput[] | LedgerEntryUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutTransactionInput | LedgerEntryCreateOrConnectWithoutTransactionInput[]
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type TopUpCreateNestedOneWithoutTransactionInput = {
    create?: XOR<TopUpCreateWithoutTransactionInput, TopUpUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TopUpCreateOrConnectWithoutTransactionInput
    connect?: TopUpWhereUniqueInput
  }

  export type LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<LedgerEntryCreateWithoutTransactionInput, LedgerEntryUncheckedCreateWithoutTransactionInput> | LedgerEntryCreateWithoutTransactionInput[] | LedgerEntryUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutTransactionInput | LedgerEntryCreateOrConnectWithoutTransactionInput[]
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type TopUpUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<TopUpCreateWithoutTransactionInput, TopUpUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TopUpCreateOrConnectWithoutTransactionInput
    connect?: TopUpWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type WalletUpdateOneWithoutSenderTransactionsNestedInput = {
    create?: XOR<WalletCreateWithoutSenderTransactionsInput, WalletUncheckedCreateWithoutSenderTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutSenderTransactionsInput
    upsert?: WalletUpsertWithoutSenderTransactionsInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutSenderTransactionsInput, WalletUpdateWithoutSenderTransactionsInput>, WalletUncheckedUpdateWithoutSenderTransactionsInput>
  }

  export type WalletUpdateOneWithoutReceiverTransactionsNestedInput = {
    create?: XOR<WalletCreateWithoutReceiverTransactionsInput, WalletUncheckedCreateWithoutReceiverTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutReceiverTransactionsInput
    upsert?: WalletUpsertWithoutReceiverTransactionsInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutReceiverTransactionsInput, WalletUpdateWithoutReceiverTransactionsInput>, WalletUncheckedUpdateWithoutReceiverTransactionsInput>
  }

  export type LedgerEntryUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutTransactionInput, LedgerEntryUncheckedCreateWithoutTransactionInput> | LedgerEntryCreateWithoutTransactionInput[] | LedgerEntryUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutTransactionInput | LedgerEntryCreateOrConnectWithoutTransactionInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput | LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput | LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutTransactionInput | LedgerEntryUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type TopUpUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<TopUpCreateWithoutTransactionInput, TopUpUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TopUpCreateOrConnectWithoutTransactionInput
    upsert?: TopUpUpsertWithoutTransactionInput
    disconnect?: TopUpWhereInput | boolean
    delete?: TopUpWhereInput | boolean
    connect?: TopUpWhereUniqueInput
    update?: XOR<XOR<TopUpUpdateToOneWithWhereWithoutTransactionInput, TopUpUpdateWithoutTransactionInput>, TopUpUncheckedUpdateWithoutTransactionInput>
  }

  export type LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutTransactionInput, LedgerEntryUncheckedCreateWithoutTransactionInput> | LedgerEntryCreateWithoutTransactionInput[] | LedgerEntryUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutTransactionInput | LedgerEntryCreateOrConnectWithoutTransactionInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput | LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: LedgerEntryCreateManyTransactionInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput | LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutTransactionInput | LedgerEntryUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type TopUpUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<TopUpCreateWithoutTransactionInput, TopUpUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TopUpCreateOrConnectWithoutTransactionInput
    upsert?: TopUpUpsertWithoutTransactionInput
    disconnect?: TopUpWhereInput | boolean
    delete?: TopUpWhereInput | boolean
    connect?: TopUpWhereUniqueInput
    update?: XOR<XOR<TopUpUpdateToOneWithWhereWithoutTransactionInput, TopUpUpdateWithoutTransactionInput>, TopUpUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionCreateNestedOneWithoutLedgerEntriesInput = {
    create?: XOR<TransactionCreateWithoutLedgerEntriesInput, TransactionUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLedgerEntriesInput
    connect?: TransactionWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutLedgerEntriesInput = {
    create?: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: WalletCreateOrConnectWithoutLedgerEntriesInput
    connect?: WalletWhereUniqueInput
  }

  export type EnumLedgerEntryTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerEntryType
  }

  export type TransactionUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: XOR<TransactionCreateWithoutLedgerEntriesInput, TransactionUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLedgerEntriesInput
    upsert?: TransactionUpsertWithoutLedgerEntriesInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutLedgerEntriesInput, TransactionUpdateWithoutLedgerEntriesInput>, TransactionUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type WalletUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: WalletCreateOrConnectWithoutLedgerEntriesInput
    upsert?: WalletUpsertWithoutLedgerEntriesInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutLedgerEntriesInput, WalletUpdateWithoutLedgerEntriesInput>, WalletUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type UserCreateNestedOneWithoutRequesterPaymentRequestsInput = {
    create?: XOR<UserCreateWithoutRequesterPaymentRequestsInput, UserUncheckedCreateWithoutRequesterPaymentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequesterPaymentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiverPaymentRequestsInput = {
    create?: XOR<UserCreateWithoutReceiverPaymentRequestsInput, UserUncheckedCreateWithoutReceiverPaymentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverPaymentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentRequestStatus
  }

  export type UserUpdateOneRequiredWithoutRequesterPaymentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequesterPaymentRequestsInput, UserUncheckedCreateWithoutRequesterPaymentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequesterPaymentRequestsInput
    upsert?: UserUpsertWithoutRequesterPaymentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequesterPaymentRequestsInput, UserUpdateWithoutRequesterPaymentRequestsInput>, UserUncheckedUpdateWithoutRequesterPaymentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceiverPaymentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceiverPaymentRequestsInput, UserUncheckedCreateWithoutReceiverPaymentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverPaymentRequestsInput
    upsert?: UserUpsertWithoutReceiverPaymentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverPaymentRequestsInput, UserUpdateWithoutReceiverPaymentRequestsInput>, UserUncheckedUpdateWithoutReceiverPaymentRequestsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumNotificationChannelFieldUpdateOperationsInput = {
    set?: $Enums.NotificationChannel
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type UserCreateNestedOneWithoutOtpCodesInput = {
    create?: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpCodesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOtpPurposeFieldUpdateOperationsInput = {
    set?: $Enums.OtpPurpose
  }

  export type UserUpdateOneRequiredWithoutOtpCodesNestedInput = {
    create?: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpCodesInput
    upsert?: UserUpsertWithoutOtpCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpCodesInput, UserUpdateWithoutOtpCodesInput>, UserUncheckedUpdateWithoutOtpCodesInput>
  }

  export type UserCreateNestedOneWithoutTopUpsInput = {
    create?: XOR<UserCreateWithoutTopUpsInput, UserUncheckedCreateWithoutTopUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopUpsInput
    connect?: UserWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutTopUpsInput = {
    create?: XOR<WalletCreateWithoutTopUpsInput, WalletUncheckedCreateWithoutTopUpsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTopUpsInput
    connect?: WalletWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutTopUpInput = {
    create?: XOR<TransactionCreateWithoutTopUpInput, TransactionUncheckedCreateWithoutTopUpInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTopUpInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumTopUpStatusFieldUpdateOperationsInput = {
    set?: $Enums.TopUpStatus
  }

  export type UserUpdateOneRequiredWithoutTopUpsNestedInput = {
    create?: XOR<UserCreateWithoutTopUpsInput, UserUncheckedCreateWithoutTopUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopUpsInput
    upsert?: UserUpsertWithoutTopUpsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTopUpsInput, UserUpdateWithoutTopUpsInput>, UserUncheckedUpdateWithoutTopUpsInput>
  }

  export type WalletUpdateOneRequiredWithoutTopUpsNestedInput = {
    create?: XOR<WalletCreateWithoutTopUpsInput, WalletUncheckedCreateWithoutTopUpsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTopUpsInput
    upsert?: WalletUpsertWithoutTopUpsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTopUpsInput, WalletUpdateWithoutTopUpsInput>, WalletUncheckedUpdateWithoutTopUpsInput>
  }

  export type TransactionUpdateOneWithoutTopUpNestedInput = {
    create?: XOR<TransactionCreateWithoutTopUpInput, TransactionUncheckedCreateWithoutTopUpInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTopUpInput
    upsert?: TransactionUpsertWithoutTopUpInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutTopUpInput, TransactionUpdateWithoutTopUpInput>, TransactionUncheckedUpdateWithoutTopUpInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumLedgerEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeFilter<$PrismaModel> | $Enums.LedgerEntryType
  }

  export type NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
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

  export type NestedEnumPaymentRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentRequestStatus | EnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentRequestStatusFilter<$PrismaModel> | $Enums.PaymentRequestStatus
  }

  export type NestedEnumPaymentRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentRequestStatus | EnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentRequestStatus[] | ListEnumPaymentRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumOtpPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeFilter<$PrismaModel> | $Enums.OtpPurpose
  }

  export type NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | EnumOtpPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpPurpose[] | ListEnumOtpPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel> | $Enums.OtpPurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpPurposeFilter<$PrismaModel>
    _max?: NestedEnumOtpPurposeFilter<$PrismaModel>
  }

  export type NestedEnumTopUpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TopUpStatus | EnumTopUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTopUpStatusFilter<$PrismaModel> | $Enums.TopUpStatus
  }

  export type NestedEnumTopUpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TopUpStatus | EnumTopUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TopUpStatus[] | ListEnumTopUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTopUpStatusWithAggregatesFilter<$PrismaModel> | $Enums.TopUpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTopUpStatusFilter<$PrismaModel>
    _max?: NestedEnumTopUpStatusFilter<$PrismaModel>
  }

  export type WalletCreateWithoutUserInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderTransactions?: TransactionCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutWalletInput
    topUps?: TopUpCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionUncheckedCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type PaymentRequestCreateWithoutRequesterInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceiverPaymentRequestsInput
  }

  export type PaymentRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverId: string
  }

  export type PaymentRequestCreateOrConnectWithoutRequesterInput = {
    where: PaymentRequestWhereUniqueInput
    create: XOR<PaymentRequestCreateWithoutRequesterInput, PaymentRequestUncheckedCreateWithoutRequesterInput>
  }

  export type PaymentRequestCreateManyRequesterInputEnvelope = {
    data: PaymentRequestCreateManyRequesterInput | PaymentRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRequestCreateWithoutReceiverInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutRequesterPaymentRequestsInput
  }

  export type PaymentRequestUncheckedCreateWithoutReceiverInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: string
  }

  export type PaymentRequestCreateOrConnectWithoutReceiverInput = {
    where: PaymentRequestWhereUniqueInput
    create: XOR<PaymentRequestCreateWithoutReceiverInput, PaymentRequestUncheckedCreateWithoutReceiverInput>
  }

  export type PaymentRequestCreateManyReceiverInputEnvelope = {
    data: PaymentRequestCreateManyReceiverInput | PaymentRequestCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type OtpCodeCreateWithoutUserInput = {
    id?: string
    codeHash: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date | string
    attempts?: number
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeUncheckedCreateWithoutUserInput = {
    id?: string
    codeHash: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date | string
    attempts?: number
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OtpCodeCreateOrConnectWithoutUserInput = {
    where: OtpCodeWhereUniqueInput
    create: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput>
  }

  export type OtpCodeCreateManyUserInputEnvelope = {
    data: OtpCodeCreateManyUserInput | OtpCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TopUpCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTopUpsInput
    transaction?: TransactionCreateNestedOneWithoutTopUpInput
  }

  export type TopUpUncheckedCreateWithoutUserInput = {
    id?: string
    walletId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopUpCreateOrConnectWithoutUserInput = {
    where: TopUpWhereUniqueInput
    create: XOR<TopUpCreateWithoutUserInput, TopUpUncheckedCreateWithoutUserInput>
  }

  export type TopUpCreateManyUserInputEnvelope = {
    data: TopUpCreateManyUserInput | TopUpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    channel?: $Enums.NotificationChannel
    status?: $Enums.NotificationStatus
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    channel?: $Enums.NotificationChannel
    status?: $Enums.NotificationStatus
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderTransactions?: TransactionUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderTransactions?: TransactionUncheckedUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUncheckedUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type PaymentRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: PaymentRequestWhereUniqueInput
    update: XOR<PaymentRequestUpdateWithoutRequesterInput, PaymentRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<PaymentRequestCreateWithoutRequesterInput, PaymentRequestUncheckedCreateWithoutRequesterInput>
  }

  export type PaymentRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: PaymentRequestWhereUniqueInput
    data: XOR<PaymentRequestUpdateWithoutRequesterInput, PaymentRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type PaymentRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: PaymentRequestScalarWhereInput
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type PaymentRequestScalarWhereInput = {
    AND?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
    OR?: PaymentRequestScalarWhereInput[]
    NOT?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
    id?: StringFilter<"PaymentRequest"> | string
    amount?: DecimalFilter<"PaymentRequest"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"PaymentRequest"> | string | null
    status?: EnumPaymentRequestStatusFilter<"PaymentRequest"> | $Enums.PaymentRequestStatus
    expiresAt?: DateTimeNullableFilter<"PaymentRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    requesterId?: StringFilter<"PaymentRequest"> | string
    receiverId?: StringFilter<"PaymentRequest"> | string
  }

  export type PaymentRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PaymentRequestWhereUniqueInput
    update: XOR<PaymentRequestUpdateWithoutReceiverInput, PaymentRequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<PaymentRequestCreateWithoutReceiverInput, PaymentRequestUncheckedCreateWithoutReceiverInput>
  }

  export type PaymentRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PaymentRequestWhereUniqueInput
    data: XOR<PaymentRequestUpdateWithoutReceiverInput, PaymentRequestUncheckedUpdateWithoutReceiverInput>
  }

  export type PaymentRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: PaymentRequestScalarWhereInput
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type OtpCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpCodeWhereUniqueInput
    update: XOR<OtpCodeUpdateWithoutUserInput, OtpCodeUncheckedUpdateWithoutUserInput>
    create: XOR<OtpCodeCreateWithoutUserInput, OtpCodeUncheckedCreateWithoutUserInput>
  }

  export type OtpCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpCodeWhereUniqueInput
    data: XOR<OtpCodeUpdateWithoutUserInput, OtpCodeUncheckedUpdateWithoutUserInput>
  }

  export type OtpCodeUpdateManyWithWhereWithoutUserInput = {
    where: OtpCodeScalarWhereInput
    data: XOR<OtpCodeUpdateManyMutationInput, OtpCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type OtpCodeScalarWhereInput = {
    AND?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
    OR?: OtpCodeScalarWhereInput[]
    NOT?: OtpCodeScalarWhereInput | OtpCodeScalarWhereInput[]
    id?: StringFilter<"OtpCode"> | string
    userId?: StringFilter<"OtpCode"> | string
    codeHash?: StringFilter<"OtpCode"> | string
    purpose?: EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    attempts?: IntFilter<"OtpCode"> | number
    verifiedAt?: DateTimeNullableFilter<"OtpCode"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
  }

  export type TopUpUpsertWithWhereUniqueWithoutUserInput = {
    where: TopUpWhereUniqueInput
    update: XOR<TopUpUpdateWithoutUserInput, TopUpUncheckedUpdateWithoutUserInput>
    create: XOR<TopUpCreateWithoutUserInput, TopUpUncheckedCreateWithoutUserInput>
  }

  export type TopUpUpdateWithWhereUniqueWithoutUserInput = {
    where: TopUpWhereUniqueInput
    data: XOR<TopUpUpdateWithoutUserInput, TopUpUncheckedUpdateWithoutUserInput>
  }

  export type TopUpUpdateManyWithWhereWithoutUserInput = {
    where: TopUpScalarWhereInput
    data: XOR<TopUpUpdateManyMutationInput, TopUpUncheckedUpdateManyWithoutUserInput>
  }

  export type TopUpScalarWhereInput = {
    AND?: TopUpScalarWhereInput | TopUpScalarWhereInput[]
    OR?: TopUpScalarWhereInput[]
    NOT?: TopUpScalarWhereInput | TopUpScalarWhereInput[]
    id?: StringFilter<"TopUp"> | string
    userId?: StringFilter<"TopUp"> | string
    walletId?: StringFilter<"TopUp"> | string
    amount?: DecimalFilter<"TopUp"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"TopUp"> | string
    status?: EnumTopUpStatusFilter<"TopUp"> | $Enums.TopUpStatus
    gateway?: StringFilter<"TopUp"> | string
    gatewayOrderId?: StringFilter<"TopUp"> | string
    gatewayPaymentId?: StringNullableFilter<"TopUp"> | string | null
    gatewaySignature?: StringNullableFilter<"TopUp"> | string | null
    failureReason?: StringNullableFilter<"TopUp"> | string | null
    transactionId?: StringNullableFilter<"TopUp"> | string | null
    createdAt?: DateTimeFilter<"TopUp"> | Date | string
    updatedAt?: DateTimeFilter<"TopUp"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
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
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterPaymentRequests?: PaymentRequestCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    topUps?: TopUpCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type TransactionCreateWithoutSenderWalletInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    receiverWallet?: WalletCreateNestedOneWithoutReceiverTransactionsInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionInput
    topUp?: TopUpCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutSenderWalletInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    receiverWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput
    topUp?: TopUpUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutSenderWalletInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSenderWalletInput, TransactionUncheckedCreateWithoutSenderWalletInput>
  }

  export type TransactionCreateManySenderWalletInputEnvelope = {
    data: TransactionCreateManySenderWalletInput | TransactionCreateManySenderWalletInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutReceiverWalletInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    senderWallet?: WalletCreateNestedOneWithoutSenderTransactionsInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionInput
    topUp?: TopUpCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutReceiverWalletInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    senderWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput
    topUp?: TopUpUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutReceiverWalletInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutReceiverWalletInput, TransactionUncheckedCreateWithoutReceiverWalletInput>
  }

  export type TransactionCreateManyReceiverWalletInputEnvelope = {
    data: TransactionCreateManyReceiverWalletInput | TransactionCreateManyReceiverWalletInput[]
    skipDuplicates?: boolean
  }

  export type LedgerEntryCreateWithoutWalletInput = {
    id?: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutLedgerEntriesInput
  }

  export type LedgerEntryUncheckedCreateWithoutWalletInput = {
    id?: string
    transactionId: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LedgerEntryCreateOrConnectWithoutWalletInput = {
    where: LedgerEntryWhereUniqueInput
    create: XOR<LedgerEntryCreateWithoutWalletInput, LedgerEntryUncheckedCreateWithoutWalletInput>
  }

  export type LedgerEntryCreateManyWalletInputEnvelope = {
    data: LedgerEntryCreateManyWalletInput | LedgerEntryCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type TopUpCreateWithoutWalletInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTopUpsInput
    transaction?: TransactionCreateNestedOneWithoutTopUpInput
  }

  export type TopUpUncheckedCreateWithoutWalletInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopUpCreateOrConnectWithoutWalletInput = {
    where: TopUpWhereUniqueInput
    create: XOR<TopUpCreateWithoutWalletInput, TopUpUncheckedCreateWithoutWalletInput>
  }

  export type TopUpCreateManyWalletInputEnvelope = {
    data: TopUpCreateManyWalletInput | TopUpCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterPaymentRequests?: PaymentRequestUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    topUps?: TopUpUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutSenderWalletInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSenderWalletInput, TransactionUncheckedUpdateWithoutSenderWalletInput>
    create: XOR<TransactionCreateWithoutSenderWalletInput, TransactionUncheckedCreateWithoutSenderWalletInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSenderWalletInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSenderWalletInput, TransactionUncheckedUpdateWithoutSenderWalletInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSenderWalletInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSenderWalletInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    reference?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    senderWalletId?: StringNullableFilter<"Transaction"> | string | null
    receiverWalletId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    idempotencyKey?: StringNullableFilter<"Transaction"> | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutReceiverWalletInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutReceiverWalletInput, TransactionUncheckedUpdateWithoutReceiverWalletInput>
    create: XOR<TransactionCreateWithoutReceiverWalletInput, TransactionUncheckedCreateWithoutReceiverWalletInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutReceiverWalletInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutReceiverWalletInput, TransactionUncheckedUpdateWithoutReceiverWalletInput>
  }

  export type TransactionUpdateManyWithWhereWithoutReceiverWalletInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutReceiverWalletInput>
  }

  export type LedgerEntryUpsertWithWhereUniqueWithoutWalletInput = {
    where: LedgerEntryWhereUniqueInput
    update: XOR<LedgerEntryUpdateWithoutWalletInput, LedgerEntryUncheckedUpdateWithoutWalletInput>
    create: XOR<LedgerEntryCreateWithoutWalletInput, LedgerEntryUncheckedCreateWithoutWalletInput>
  }

  export type LedgerEntryUpdateWithWhereUniqueWithoutWalletInput = {
    where: LedgerEntryWhereUniqueInput
    data: XOR<LedgerEntryUpdateWithoutWalletInput, LedgerEntryUncheckedUpdateWithoutWalletInput>
  }

  export type LedgerEntryUpdateManyWithWhereWithoutWalletInput = {
    where: LedgerEntryScalarWhereInput
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyWithoutWalletInput>
  }

  export type LedgerEntryScalarWhereInput = {
    AND?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    OR?: LedgerEntryScalarWhereInput[]
    NOT?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    transactionId?: StringFilter<"LedgerEntry"> | string
    walletId?: StringFilter<"LedgerEntry"> | string
    type?: EnumLedgerEntryTypeFilter<"LedgerEntry"> | $Enums.LedgerEntryType
    amount?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
  }

  export type TopUpUpsertWithWhereUniqueWithoutWalletInput = {
    where: TopUpWhereUniqueInput
    update: XOR<TopUpUpdateWithoutWalletInput, TopUpUncheckedUpdateWithoutWalletInput>
    create: XOR<TopUpCreateWithoutWalletInput, TopUpUncheckedCreateWithoutWalletInput>
  }

  export type TopUpUpdateWithWhereUniqueWithoutWalletInput = {
    where: TopUpWhereUniqueInput
    data: XOR<TopUpUpdateWithoutWalletInput, TopUpUncheckedUpdateWithoutWalletInput>
  }

  export type TopUpUpdateManyWithWhereWithoutWalletInput = {
    where: TopUpScalarWhereInput
    data: XOR<TopUpUpdateManyMutationInput, TopUpUncheckedUpdateManyWithoutWalletInput>
  }

  export type WalletCreateWithoutSenderTransactionsInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    receiverTransactions?: TransactionCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutWalletInput
    topUps?: TopUpCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutSenderTransactionsInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverTransactions?: TransactionUncheckedCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutSenderTransactionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutSenderTransactionsInput, WalletUncheckedCreateWithoutSenderTransactionsInput>
  }

  export type WalletCreateWithoutReceiverTransactionsInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    senderTransactions?: TransactionCreateNestedManyWithoutSenderWalletInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutWalletInput
    topUps?: TopUpCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutReceiverTransactionsInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderWalletInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutReceiverTransactionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutReceiverTransactionsInput, WalletUncheckedCreateWithoutReceiverTransactionsInput>
  }

  export type LedgerEntryCreateWithoutTransactionInput = {
    id?: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    wallet: WalletCreateNestedOneWithoutLedgerEntriesInput
  }

  export type LedgerEntryUncheckedCreateWithoutTransactionInput = {
    id?: string
    walletId: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LedgerEntryCreateOrConnectWithoutTransactionInput = {
    where: LedgerEntryWhereUniqueInput
    create: XOR<LedgerEntryCreateWithoutTransactionInput, LedgerEntryUncheckedCreateWithoutTransactionInput>
  }

  export type LedgerEntryCreateManyTransactionInputEnvelope = {
    data: LedgerEntryCreateManyTransactionInput | LedgerEntryCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type TopUpCreateWithoutTransactionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTopUpsInput
    wallet: WalletCreateNestedOneWithoutTopUpsInput
  }

  export type TopUpUncheckedCreateWithoutTransactionInput = {
    id?: string
    userId: string
    walletId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopUpCreateOrConnectWithoutTransactionInput = {
    where: TopUpWhereUniqueInput
    create: XOR<TopUpCreateWithoutTransactionInput, TopUpUncheckedCreateWithoutTransactionInput>
  }

  export type WalletUpsertWithoutSenderTransactionsInput = {
    update: XOR<WalletUpdateWithoutSenderTransactionsInput, WalletUncheckedUpdateWithoutSenderTransactionsInput>
    create: XOR<WalletCreateWithoutSenderTransactionsInput, WalletUncheckedCreateWithoutSenderTransactionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutSenderTransactionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutSenderTransactionsInput, WalletUncheckedUpdateWithoutSenderTransactionsInput>
  }

  export type WalletUpdateWithoutSenderTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    receiverTransactions?: TransactionUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutSenderTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverTransactions?: TransactionUncheckedUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletUpsertWithoutReceiverTransactionsInput = {
    update: XOR<WalletUpdateWithoutReceiverTransactionsInput, WalletUncheckedUpdateWithoutReceiverTransactionsInput>
    create: XOR<WalletCreateWithoutReceiverTransactionsInput, WalletUncheckedCreateWithoutReceiverTransactionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutReceiverTransactionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutReceiverTransactionsInput, WalletUncheckedUpdateWithoutReceiverTransactionsInput>
  }

  export type WalletUpdateWithoutReceiverTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    senderTransactions?: TransactionUpdateManyWithoutSenderWalletNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutReceiverTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderTransactions?: TransactionUncheckedUpdateManyWithoutSenderWalletNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type LedgerEntryUpsertWithWhereUniqueWithoutTransactionInput = {
    where: LedgerEntryWhereUniqueInput
    update: XOR<LedgerEntryUpdateWithoutTransactionInput, LedgerEntryUncheckedUpdateWithoutTransactionInput>
    create: XOR<LedgerEntryCreateWithoutTransactionInput, LedgerEntryUncheckedCreateWithoutTransactionInput>
  }

  export type LedgerEntryUpdateWithWhereUniqueWithoutTransactionInput = {
    where: LedgerEntryWhereUniqueInput
    data: XOR<LedgerEntryUpdateWithoutTransactionInput, LedgerEntryUncheckedUpdateWithoutTransactionInput>
  }

  export type LedgerEntryUpdateManyWithWhereWithoutTransactionInput = {
    where: LedgerEntryScalarWhereInput
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TopUpUpsertWithoutTransactionInput = {
    update: XOR<TopUpUpdateWithoutTransactionInput, TopUpUncheckedUpdateWithoutTransactionInput>
    create: XOR<TopUpCreateWithoutTransactionInput, TopUpUncheckedCreateWithoutTransactionInput>
    where?: TopUpWhereInput
  }

  export type TopUpUpdateToOneWithWhereWithoutTransactionInput = {
    where?: TopUpWhereInput
    data: XOR<TopUpUpdateWithoutTransactionInput, TopUpUncheckedUpdateWithoutTransactionInput>
  }

  export type TopUpUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTopUpsNestedInput
    wallet?: WalletUpdateOneRequiredWithoutTopUpsNestedInput
  }

  export type TopUpUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateWithoutLedgerEntriesInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    senderWallet?: WalletCreateNestedOneWithoutSenderTransactionsInput
    receiverWallet?: WalletCreateNestedOneWithoutReceiverTransactionsInput
    topUp?: TopUpCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    senderWalletId?: string | null
    receiverWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    topUp?: TopUpUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutLedgerEntriesInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutLedgerEntriesInput, TransactionUncheckedCreateWithoutLedgerEntriesInput>
  }

  export type WalletCreateWithoutLedgerEntriesInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    senderTransactions?: TransactionCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionCreateNestedManyWithoutReceiverWalletInput
    topUps?: TopUpCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionUncheckedCreateNestedManyWithoutReceiverWalletInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutLedgerEntriesInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
  }

  export type TransactionUpsertWithoutLedgerEntriesInput = {
    update: XOR<TransactionUpdateWithoutLedgerEntriesInput, TransactionUncheckedUpdateWithoutLedgerEntriesInput>
    create: XOR<TransactionCreateWithoutLedgerEntriesInput, TransactionUncheckedCreateWithoutLedgerEntriesInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutLedgerEntriesInput, TransactionUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type TransactionUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    senderWallet?: WalletUpdateOneWithoutSenderTransactionsNestedInput
    receiverWallet?: WalletUpdateOneWithoutReceiverTransactionsNestedInput
    topUp?: TopUpUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    senderWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    topUp?: TopUpUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type WalletUpsertWithoutLedgerEntriesInput = {
    update: XOR<WalletUpdateWithoutLedgerEntriesInput, WalletUncheckedUpdateWithoutLedgerEntriesInput>
    create: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutLedgerEntriesInput, WalletUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type WalletUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    senderTransactions?: TransactionUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUpdateManyWithoutReceiverWalletNestedInput
    topUps?: TopUpUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderTransactions?: TransactionUncheckedUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUncheckedUpdateManyWithoutReceiverWalletNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type UserCreateWithoutRequesterPaymentRequestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    receiverPaymentRequests?: PaymentRequestCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    topUps?: TopUpCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequesterPaymentRequestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    receiverPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequesterPaymentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequesterPaymentRequestsInput, UserUncheckedCreateWithoutRequesterPaymentRequestsInput>
  }

  export type UserCreateWithoutReceiverPaymentRequestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestCreateNestedManyWithoutRequesterInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    topUps?: TopUpCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceiverPaymentRequestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceiverPaymentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverPaymentRequestsInput, UserUncheckedCreateWithoutReceiverPaymentRequestsInput>
  }

  export type UserUpsertWithoutRequesterPaymentRequestsInput = {
    update: XOR<UserUpdateWithoutRequesterPaymentRequestsInput, UserUncheckedUpdateWithoutRequesterPaymentRequestsInput>
    create: XOR<UserCreateWithoutRequesterPaymentRequestsInput, UserUncheckedCreateWithoutRequesterPaymentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequesterPaymentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequesterPaymentRequestsInput, UserUncheckedUpdateWithoutRequesterPaymentRequestsInput>
  }

  export type UserUpdateWithoutRequesterPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    receiverPaymentRequests?: PaymentRequestUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    topUps?: TopUpUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequesterPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    receiverPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceiverPaymentRequestsInput = {
    update: XOR<UserUpdateWithoutReceiverPaymentRequestsInput, UserUncheckedUpdateWithoutReceiverPaymentRequestsInput>
    create: XOR<UserCreateWithoutReceiverPaymentRequestsInput, UserUncheckedCreateWithoutReceiverPaymentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverPaymentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverPaymentRequestsInput, UserUncheckedUpdateWithoutReceiverPaymentRequestsInput>
  }

  export type UserUpdateWithoutReceiverPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUpdateManyWithoutRequesterNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    topUps?: TopUpUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    topUps?: TopUpCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    topUps?: TopUpUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    topUps?: TopUpCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
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
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    topUps?: TopUpUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpCodesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestCreateNestedManyWithoutReceiverInput
    topUps?: TopUpCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpCodesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput
    topUps?: TopUpUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
  }

  export type UserUpsertWithoutOtpCodesInput = {
    update: XOR<UserUpdateWithoutOtpCodesInput, UserUncheckedUpdateWithoutOtpCodesInput>
    create: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpCodesInput, UserUncheckedUpdateWithoutOtpCodesInput>
  }

  export type UserUpdateWithoutOtpCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUpdateManyWithoutReceiverNestedInput
    topUps?: TopUpUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput
    topUps?: TopUpUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTopUpsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTopUpsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    isEmailVerified?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    twoFactorEnabledAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    requesterPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutRequesterInput
    receiverPaymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutReceiverInput
    otpCodes?: OtpCodeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTopUpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTopUpsInput, UserUncheckedCreateWithoutTopUpsInput>
  }

  export type WalletCreateWithoutTopUpsInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    senderTransactions?: TransactionCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutTopUpsInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderWalletInput
    receiverTransactions?: TransactionUncheckedCreateNestedManyWithoutReceiverWalletInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutTopUpsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTopUpsInput, WalletUncheckedCreateWithoutTopUpsInput>
  }

  export type TransactionCreateWithoutTopUpInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    senderWallet?: WalletCreateNestedOneWithoutSenderTransactionsInput
    receiverWallet?: WalletCreateNestedOneWithoutReceiverTransactionsInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutTopUpInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    senderWalletId?: string | null
    receiverWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutTopUpInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTopUpInput, TransactionUncheckedCreateWithoutTopUpInput>
  }

  export type UserUpsertWithoutTopUpsInput = {
    update: XOR<UserUpdateWithoutTopUpsInput, UserUncheckedUpdateWithoutTopUpsInput>
    create: XOR<UserCreateWithoutTopUpsInput, UserUncheckedCreateWithoutTopUpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTopUpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTopUpsInput, UserUncheckedUpdateWithoutTopUpsInput>
  }

  export type UserUpdateWithoutTopUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTopUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    requesterPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutRequesterNestedInput
    receiverPaymentRequests?: PaymentRequestUncheckedUpdateManyWithoutReceiverNestedInput
    otpCodes?: OtpCodeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WalletUpsertWithoutTopUpsInput = {
    update: XOR<WalletUpdateWithoutTopUpsInput, WalletUncheckedUpdateWithoutTopUpsInput>
    create: XOR<WalletCreateWithoutTopUpsInput, WalletUncheckedCreateWithoutTopUpsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTopUpsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTopUpsInput, WalletUncheckedUpdateWithoutTopUpsInput>
  }

  export type WalletUpdateWithoutTopUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    senderTransactions?: TransactionUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTopUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderTransactions?: TransactionUncheckedUpdateManyWithoutSenderWalletNestedInput
    receiverTransactions?: TransactionUncheckedUpdateManyWithoutReceiverWalletNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type TransactionUpsertWithoutTopUpInput = {
    update: XOR<TransactionUpdateWithoutTopUpInput, TransactionUncheckedUpdateWithoutTopUpInput>
    create: XOR<TransactionCreateWithoutTopUpInput, TransactionUncheckedCreateWithoutTopUpInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutTopUpInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutTopUpInput, TransactionUncheckedUpdateWithoutTopUpInput>
  }

  export type TransactionUpdateWithoutTopUpInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    senderWallet?: WalletUpdateOneWithoutSenderTransactionsNestedInput
    receiverWallet?: WalletUpdateOneWithoutReceiverTransactionsNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTopUpInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    senderWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type PaymentRequestCreateManyRequesterInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverId: string
  }

  export type PaymentRequestCreateManyReceiverInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: $Enums.PaymentRequestStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: string
  }

  export type OtpCodeCreateManyUserInput = {
    id?: string
    codeHash: string
    purpose: $Enums.OtpPurpose
    expiresAt: Date | string
    attempts?: number
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TopUpCreateManyUserInput = {
    id?: string
    walletId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    channel?: $Enums.NotificationChannel
    status?: $Enums.NotificationStatus
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PaymentRequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceiverPaymentRequestsNestedInput
  }

  export type PaymentRequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRequestUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequesterPaymentRequestsNestedInput
  }

  export type PaymentRequestUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentRequestStatusFieldUpdateOperationsInput | $Enums.PaymentRequestStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: StringFieldUpdateOperationsInput | string
  }

  export type OtpCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTopUpsNestedInput
    transaction?: TransactionUpdateOneWithoutTopUpNestedInput
  }

  export type TopUpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManySenderWalletInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    receiverWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type TransactionCreateManyReceiverWalletInput = {
    id?: string
    reference: string
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    senderWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idempotencyKey?: string | null
  }

  export type LedgerEntryCreateManyWalletInput = {
    id?: string
    transactionId: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TopUpCreateManyWalletInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.TopUpStatus
    gateway: string
    gatewayOrderId: string
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    failureReason?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutSenderWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    receiverWallet?: WalletUpdateOneWithoutReceiverTransactionsNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionNestedInput
    topUp?: TopUpUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSenderWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiverWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput
    topUp?: TopUpUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutSenderWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiverWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutReceiverWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    senderWallet?: WalletUpdateOneWithoutSenderTransactionsNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionNestedInput
    topUp?: TopUpUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutReceiverWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    senderWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutTransactionNestedInput
    topUp?: TopUpUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutReceiverWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    senderWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LedgerEntryUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutLedgerEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTopUpsNestedInput
    transaction?: TransactionUpdateOneWithoutTopUpNestedInput
  }

  export type TopUpUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTopUpStatusFieldUpdateOperationsInput | $Enums.TopUpStatus
    gateway?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: StringFieldUpdateOperationsInput | string
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateManyTransactionInput = {
    id?: string
    walletId: string
    type: $Enums.LedgerEntryType
    amount: Decimal | DecimalJsLike | number | string
    balanceBefore: Decimal | DecimalJsLike | number | string
    balanceAfter: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutLedgerEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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