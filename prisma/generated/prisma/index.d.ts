
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
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidosProdutos
 * 
 */
export type PedidosProdutos = $Result.DefaultSelection<Prisma.$PedidosProdutosPayload>
/**
 * Model Pessoa
 * 
 */
export type Pessoa = $Result.DefaultSelection<Prisma.$PessoaPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pedidos
 * const pedidos = await prisma.pedido.findMany()
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
   * // Fetch zero or more Pedidos
   * const pedidos = await prisma.pedido.findMany()
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
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidosProdutos`: Exposes CRUD operations for the **PedidosProdutos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidosProdutos
    * const pedidosProdutos = await prisma.pedidosProdutos.findMany()
    * ```
    */
  get pedidosProdutos(): Prisma.PedidosProdutosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pessoa`: Exposes CRUD operations for the **Pessoa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pessoas
    * const pessoas = await prisma.pessoa.findMany()
    * ```
    */
  get pessoa(): Prisma.PessoaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Pedido: 'Pedido',
    PedidosProdutos: 'PedidosProdutos',
    Pessoa: 'Pessoa',
    Produto: 'Produto'
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
      modelProps: "pedido" | "pedidosProdutos" | "pessoa" | "produto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidosProdutos: {
        payload: Prisma.$PedidosProdutosPayload<ExtArgs>
        fields: Prisma.PedidosProdutosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidosProdutosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidosProdutosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>
          }
          findFirst: {
            args: Prisma.PedidosProdutosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidosProdutosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>
          }
          findMany: {
            args: Prisma.PedidosProdutosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>[]
          }
          create: {
            args: Prisma.PedidosProdutosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>
          }
          createMany: {
            args: Prisma.PedidosProdutosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidosProdutosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>[]
          }
          delete: {
            args: Prisma.PedidosProdutosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>
          }
          update: {
            args: Prisma.PedidosProdutosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>
          }
          deleteMany: {
            args: Prisma.PedidosProdutosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidosProdutosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidosProdutosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>[]
          }
          upsert: {
            args: Prisma.PedidosProdutosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidosProdutosPayload>
          }
          aggregate: {
            args: Prisma.PedidosProdutosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidosProdutos>
          }
          groupBy: {
            args: Prisma.PedidosProdutosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidosProdutosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidosProdutosCountArgs<ExtArgs>
            result: $Utils.Optional<PedidosProdutosCountAggregateOutputType> | number
          }
        }
      }
      Pessoa: {
        payload: Prisma.$PessoaPayload<ExtArgs>
        fields: Prisma.PessoaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PessoaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PessoaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findFirst: {
            args: Prisma.PessoaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PessoaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findMany: {
            args: Prisma.PessoaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          create: {
            args: Prisma.PessoaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          createMany: {
            args: Prisma.PessoaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PessoaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          delete: {
            args: Prisma.PessoaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          update: {
            args: Prisma.PessoaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          deleteMany: {
            args: Prisma.PessoaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PessoaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PessoaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          upsert: {
            args: Prisma.PessoaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          aggregate: {
            args: Prisma.PessoaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePessoa>
          }
          groupBy: {
            args: Prisma.PessoaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PessoaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PessoaCountArgs<ExtArgs>
            result: $Utils.Optional<PessoaCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    pedido?: PedidoOmit
    pedidosProdutos?: PedidosProdutosOmit
    pessoa?: PessoaOmit
    produto?: ProdutoOmit
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
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    produtos: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | PedidoCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidosProdutosWhereInput
  }


  /**
   * Count Type PedidosProdutosCountOutputType
   */

  export type PedidosProdutosCountOutputType = {
    Pessoa: number
  }

  export type PedidosProdutosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pessoa?: boolean | PedidosProdutosCountOutputTypeCountPessoaArgs
  }

  // Custom InputTypes
  /**
   * PedidosProdutosCountOutputType without action
   */
  export type PedidosProdutosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutosCountOutputType
     */
    select?: PedidosProdutosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidosProdutosCountOutputType without action
   */
  export type PedidosProdutosCountOutputTypeCountPessoaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
  }


  /**
   * Count Type PessoaCountOutputType
   */

  export type PessoaCountOutputType = {
    pedidos: number
    pedidosProdutos: number
  }

  export type PessoaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | PessoaCountOutputTypeCountPedidosArgs
    pedidosProdutos?: boolean | PessoaCountOutputTypeCountPedidosProdutosArgs
  }

  // Custom InputTypes
  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaCountOutputType
     */
    select?: PessoaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeCountPedidosProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidosProdutosWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    pedidos: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ProdutoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidosProdutosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    pessoaId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    pessoaId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    pessoaId: number | null
    descricao: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    pessoaId: number | null
    descricao: string | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    pessoaId: number
    descricao: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    pessoaId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    pessoaId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    pessoaId?: true
    descricao?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    pessoaId?: true
    descricao?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    pessoaId?: true
    descricao?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    pessoaId: number
    descricao: string
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pessoaId?: boolean
    descricao?: boolean
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
    produtos?: boolean | Pedido$produtosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pessoaId?: boolean
    descricao?: boolean
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pessoaId?: boolean
    descricao?: boolean
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    pessoaId?: boolean
    descricao?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pessoaId" | "descricao", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
    produtos?: boolean | Pedido$produtosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      pessoa: Prisma.$PessoaPayload<ExtArgs>
      produtos: Prisma.$PedidosProdutosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pessoaId: number
      descricao: string
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pessoa<T extends PessoaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PessoaDefaultArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produtos<T extends Pedido$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly pessoaId: FieldRef<"Pedido", 'Int'>
    readonly descricao: FieldRef<"Pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.produtos
   */
  export type Pedido$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    where?: PedidosProdutosWhereInput
    orderBy?: PedidosProdutosOrderByWithRelationInput | PedidosProdutosOrderByWithRelationInput[]
    cursor?: PedidosProdutosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidosProdutosScalarFieldEnum | PedidosProdutosScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidosProdutos
   */

  export type AggregatePedidosProdutos = {
    _count: PedidosProdutosCountAggregateOutputType | null
    _avg: PedidosProdutosAvgAggregateOutputType | null
    _sum: PedidosProdutosSumAggregateOutputType | null
    _min: PedidosProdutosMinAggregateOutputType | null
    _max: PedidosProdutosMaxAggregateOutputType | null
  }

  export type PedidosProdutosAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type PedidosProdutosSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type PedidosProdutosMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type PedidosProdutosMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type PedidosProdutosCountAggregateOutputType = {
    id: number
    pedidoId: number
    produtoId: number
    _all: number
  }


  export type PedidosProdutosAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
  }

  export type PedidosProdutosSumAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
  }

  export type PedidosProdutosMinAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
  }

  export type PedidosProdutosMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
  }

  export type PedidosProdutosCountAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    _all?: true
  }

  export type PedidosProdutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidosProdutos to aggregate.
     */
    where?: PedidosProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosProdutos to fetch.
     */
    orderBy?: PedidosProdutosOrderByWithRelationInput | PedidosProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidosProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidosProdutos
    **/
    _count?: true | PedidosProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidosProdutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidosProdutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidosProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidosProdutosMaxAggregateInputType
  }

  export type GetPedidosProdutosAggregateType<T extends PedidosProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidosProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidosProdutos[P]>
      : GetScalarType<T[P], AggregatePedidosProdutos[P]>
  }




  export type PedidosProdutosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidosProdutosWhereInput
    orderBy?: PedidosProdutosOrderByWithAggregationInput | PedidosProdutosOrderByWithAggregationInput[]
    by: PedidosProdutosScalarFieldEnum[] | PedidosProdutosScalarFieldEnum
    having?: PedidosProdutosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidosProdutosCountAggregateInputType | true
    _avg?: PedidosProdutosAvgAggregateInputType
    _sum?: PedidosProdutosSumAggregateInputType
    _min?: PedidosProdutosMinAggregateInputType
    _max?: PedidosProdutosMaxAggregateInputType
  }

  export type PedidosProdutosGroupByOutputType = {
    id: number
    pedidoId: number
    produtoId: number
    _count: PedidosProdutosCountAggregateOutputType | null
    _avg: PedidosProdutosAvgAggregateOutputType | null
    _sum: PedidosProdutosSumAggregateOutputType | null
    _min: PedidosProdutosMinAggregateOutputType | null
    _max: PedidosProdutosMaxAggregateOutputType | null
  }

  type GetPedidosProdutosGroupByPayload<T extends PedidosProdutosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidosProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidosProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidosProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], PedidosProdutosGroupByOutputType[P]>
        }
      >
    >


  export type PedidosProdutosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Pessoa?: boolean | PedidosProdutos$PessoaArgs<ExtArgs>
    _count?: boolean | PedidosProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidosProdutos"]>

  export type PedidosProdutosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidosProdutos"]>

  export type PedidosProdutosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidosProdutos"]>

  export type PedidosProdutosSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
  }

  export type PedidosProdutosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "produtoId", ExtArgs["result"]["pedidosProdutos"]>
  export type PedidosProdutosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    Pessoa?: boolean | PedidosProdutos$PessoaArgs<ExtArgs>
    _count?: boolean | PedidosProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidosProdutosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type PedidosProdutosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $PedidosProdutosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidosProdutos"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
      Pessoa: Prisma.$PessoaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      produtoId: number
    }, ExtArgs["result"]["pedidosProdutos"]>
    composites: {}
  }

  type PedidosProdutosGetPayload<S extends boolean | null | undefined | PedidosProdutosDefaultArgs> = $Result.GetResult<Prisma.$PedidosProdutosPayload, S>

  type PedidosProdutosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidosProdutosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidosProdutosCountAggregateInputType | true
    }

  export interface PedidosProdutosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidosProdutos'], meta: { name: 'PedidosProdutos' } }
    /**
     * Find zero or one PedidosProdutos that matches the filter.
     * @param {PedidosProdutosFindUniqueArgs} args - Arguments to find a PedidosProdutos
     * @example
     * // Get one PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidosProdutosFindUniqueArgs>(args: SelectSubset<T, PedidosProdutosFindUniqueArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidosProdutos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidosProdutosFindUniqueOrThrowArgs} args - Arguments to find a PedidosProdutos
     * @example
     * // Get one PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidosProdutosFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidosProdutosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidosProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosProdutosFindFirstArgs} args - Arguments to find a PedidosProdutos
     * @example
     * // Get one PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidosProdutosFindFirstArgs>(args?: SelectSubset<T, PedidosProdutosFindFirstArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidosProdutos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosProdutosFindFirstOrThrowArgs} args - Arguments to find a PedidosProdutos
     * @example
     * // Get one PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidosProdutosFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidosProdutosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidosProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosProdutosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.findMany()
     * 
     * // Get first 10 PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidosProdutosWithIdOnly = await prisma.pedidosProdutos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidosProdutosFindManyArgs>(args?: SelectSubset<T, PedidosProdutosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidosProdutos.
     * @param {PedidosProdutosCreateArgs} args - Arguments to create a PedidosProdutos.
     * @example
     * // Create one PedidosProdutos
     * const PedidosProdutos = await prisma.pedidosProdutos.create({
     *   data: {
     *     // ... data to create a PedidosProdutos
     *   }
     * })
     * 
     */
    create<T extends PedidosProdutosCreateArgs>(args: SelectSubset<T, PedidosProdutosCreateArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidosProdutos.
     * @param {PedidosProdutosCreateManyArgs} args - Arguments to create many PedidosProdutos.
     * @example
     * // Create many PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidosProdutosCreateManyArgs>(args?: SelectSubset<T, PedidosProdutosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidosProdutos and returns the data saved in the database.
     * @param {PedidosProdutosCreateManyAndReturnArgs} args - Arguments to create many PedidosProdutos.
     * @example
     * // Create many PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidosProdutos and only return the `id`
     * const pedidosProdutosWithIdOnly = await prisma.pedidosProdutos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidosProdutosCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidosProdutosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidosProdutos.
     * @param {PedidosProdutosDeleteArgs} args - Arguments to delete one PedidosProdutos.
     * @example
     * // Delete one PedidosProdutos
     * const PedidosProdutos = await prisma.pedidosProdutos.delete({
     *   where: {
     *     // ... filter to delete one PedidosProdutos
     *   }
     * })
     * 
     */
    delete<T extends PedidosProdutosDeleteArgs>(args: SelectSubset<T, PedidosProdutosDeleteArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidosProdutos.
     * @param {PedidosProdutosUpdateArgs} args - Arguments to update one PedidosProdutos.
     * @example
     * // Update one PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidosProdutosUpdateArgs>(args: SelectSubset<T, PedidosProdutosUpdateArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidosProdutos.
     * @param {PedidosProdutosDeleteManyArgs} args - Arguments to filter PedidosProdutos to delete.
     * @example
     * // Delete a few PedidosProdutos
     * const { count } = await prisma.pedidosProdutos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidosProdutosDeleteManyArgs>(args?: SelectSubset<T, PedidosProdutosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidosProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosProdutosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidosProdutosUpdateManyArgs>(args: SelectSubset<T, PedidosProdutosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidosProdutos and returns the data updated in the database.
     * @param {PedidosProdutosUpdateManyAndReturnArgs} args - Arguments to update many PedidosProdutos.
     * @example
     * // Update many PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidosProdutos and only return the `id`
     * const pedidosProdutosWithIdOnly = await prisma.pedidosProdutos.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidosProdutosUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidosProdutosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidosProdutos.
     * @param {PedidosProdutosUpsertArgs} args - Arguments to update or create a PedidosProdutos.
     * @example
     * // Update or create a PedidosProdutos
     * const pedidosProdutos = await prisma.pedidosProdutos.upsert({
     *   create: {
     *     // ... data to create a PedidosProdutos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidosProdutos we want to update
     *   }
     * })
     */
    upsert<T extends PedidosProdutosUpsertArgs>(args: SelectSubset<T, PedidosProdutosUpsertArgs<ExtArgs>>): Prisma__PedidosProdutosClient<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidosProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosProdutosCountArgs} args - Arguments to filter PedidosProdutos to count.
     * @example
     * // Count the number of PedidosProdutos
     * const count = await prisma.pedidosProdutos.count({
     *   where: {
     *     // ... the filter for the PedidosProdutos we want to count
     *   }
     * })
    **/
    count<T extends PedidosProdutosCountArgs>(
      args?: Subset<T, PedidosProdutosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidosProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidosProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidosProdutosAggregateArgs>(args: Subset<T, PedidosProdutosAggregateArgs>): Prisma.PrismaPromise<GetPedidosProdutosAggregateType<T>>

    /**
     * Group by PedidosProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosProdutosGroupByArgs} args - Group by arguments.
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
      T extends PedidosProdutosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidosProdutosGroupByArgs['orderBy'] }
        : { orderBy?: PedidosProdutosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidosProdutosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidosProdutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidosProdutos model
   */
  readonly fields: PedidosProdutosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidosProdutos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidosProdutosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pessoa<T extends PedidosProdutos$PessoaArgs<ExtArgs> = {}>(args?: Subset<T, PedidosProdutos$PessoaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PedidosProdutos model
   */
  interface PedidosProdutosFieldRefs {
    readonly id: FieldRef<"PedidosProdutos", 'Int'>
    readonly pedidoId: FieldRef<"PedidosProdutos", 'Int'>
    readonly produtoId: FieldRef<"PedidosProdutos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidosProdutos findUnique
   */
  export type PedidosProdutosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * Filter, which PedidosProdutos to fetch.
     */
    where: PedidosProdutosWhereUniqueInput
  }

  /**
   * PedidosProdutos findUniqueOrThrow
   */
  export type PedidosProdutosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * Filter, which PedidosProdutos to fetch.
     */
    where: PedidosProdutosWhereUniqueInput
  }

  /**
   * PedidosProdutos findFirst
   */
  export type PedidosProdutosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * Filter, which PedidosProdutos to fetch.
     */
    where?: PedidosProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosProdutos to fetch.
     */
    orderBy?: PedidosProdutosOrderByWithRelationInput | PedidosProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidosProdutos.
     */
    cursor?: PedidosProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidosProdutos.
     */
    distinct?: PedidosProdutosScalarFieldEnum | PedidosProdutosScalarFieldEnum[]
  }

  /**
   * PedidosProdutos findFirstOrThrow
   */
  export type PedidosProdutosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * Filter, which PedidosProdutos to fetch.
     */
    where?: PedidosProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosProdutos to fetch.
     */
    orderBy?: PedidosProdutosOrderByWithRelationInput | PedidosProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidosProdutos.
     */
    cursor?: PedidosProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidosProdutos.
     */
    distinct?: PedidosProdutosScalarFieldEnum | PedidosProdutosScalarFieldEnum[]
  }

  /**
   * PedidosProdutos findMany
   */
  export type PedidosProdutosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * Filter, which PedidosProdutos to fetch.
     */
    where?: PedidosProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidosProdutos to fetch.
     */
    orderBy?: PedidosProdutosOrderByWithRelationInput | PedidosProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidosProdutos.
     */
    cursor?: PedidosProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidosProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidosProdutos.
     */
    skip?: number
    distinct?: PedidosProdutosScalarFieldEnum | PedidosProdutosScalarFieldEnum[]
  }

  /**
   * PedidosProdutos create
   */
  export type PedidosProdutosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidosProdutos.
     */
    data: XOR<PedidosProdutosCreateInput, PedidosProdutosUncheckedCreateInput>
  }

  /**
   * PedidosProdutos createMany
   */
  export type PedidosProdutosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidosProdutos.
     */
    data: PedidosProdutosCreateManyInput | PedidosProdutosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidosProdutos createManyAndReturn
   */
  export type PedidosProdutosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * The data used to create many PedidosProdutos.
     */
    data: PedidosProdutosCreateManyInput | PedidosProdutosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidosProdutos update
   */
  export type PedidosProdutosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidosProdutos.
     */
    data: XOR<PedidosProdutosUpdateInput, PedidosProdutosUncheckedUpdateInput>
    /**
     * Choose, which PedidosProdutos to update.
     */
    where: PedidosProdutosWhereUniqueInput
  }

  /**
   * PedidosProdutos updateMany
   */
  export type PedidosProdutosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidosProdutos.
     */
    data: XOR<PedidosProdutosUpdateManyMutationInput, PedidosProdutosUncheckedUpdateManyInput>
    /**
     * Filter which PedidosProdutos to update
     */
    where?: PedidosProdutosWhereInput
    /**
     * Limit how many PedidosProdutos to update.
     */
    limit?: number
  }

  /**
   * PedidosProdutos updateManyAndReturn
   */
  export type PedidosProdutosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * The data used to update PedidosProdutos.
     */
    data: XOR<PedidosProdutosUpdateManyMutationInput, PedidosProdutosUncheckedUpdateManyInput>
    /**
     * Filter which PedidosProdutos to update
     */
    where?: PedidosProdutosWhereInput
    /**
     * Limit how many PedidosProdutos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidosProdutos upsert
   */
  export type PedidosProdutosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidosProdutos to update in case it exists.
     */
    where: PedidosProdutosWhereUniqueInput
    /**
     * In case the PedidosProdutos found by the `where` argument doesn't exist, create a new PedidosProdutos with this data.
     */
    create: XOR<PedidosProdutosCreateInput, PedidosProdutosUncheckedCreateInput>
    /**
     * In case the PedidosProdutos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidosProdutosUpdateInput, PedidosProdutosUncheckedUpdateInput>
  }

  /**
   * PedidosProdutos delete
   */
  export type PedidosProdutosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    /**
     * Filter which PedidosProdutos to delete.
     */
    where: PedidosProdutosWhereUniqueInput
  }

  /**
   * PedidosProdutos deleteMany
   */
  export type PedidosProdutosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidosProdutos to delete
     */
    where?: PedidosProdutosWhereInput
    /**
     * Limit how many PedidosProdutos to delete.
     */
    limit?: number
  }

  /**
   * PedidosProdutos.Pessoa
   */
  export type PedidosProdutos$PessoaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    cursor?: PessoaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * PedidosProdutos without action
   */
  export type PedidosProdutosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
  }


  /**
   * Model Pessoa
   */

  export type AggregatePessoa = {
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  export type PessoaAvgAggregateOutputType = {
    id: number | null
  }

  export type PessoaSumAggregateOutputType = {
    id: number | null
  }

  export type PessoaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type PessoaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type PessoaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type PessoaAvgAggregateInputType = {
    id?: true
  }

  export type PessoaSumAggregateInputType = {
    id?: true
  }

  export type PessoaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type PessoaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type PessoaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type PessoaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoa to aggregate.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pessoas
    **/
    _count?: true | PessoaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PessoaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PessoaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PessoaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PessoaMaxAggregateInputType
  }

  export type GetPessoaAggregateType<T extends PessoaAggregateArgs> = {
        [P in keyof T & keyof AggregatePessoa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePessoa[P]>
      : GetScalarType<T[P], AggregatePessoa[P]>
  }




  export type PessoaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithAggregationInput | PessoaOrderByWithAggregationInput[]
    by: PessoaScalarFieldEnum[] | PessoaScalarFieldEnum
    having?: PessoaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PessoaCountAggregateInputType | true
    _avg?: PessoaAvgAggregateInputType
    _sum?: PessoaSumAggregateInputType
    _min?: PessoaMinAggregateInputType
    _max?: PessoaMaxAggregateInputType
  }

  export type PessoaGroupByOutputType = {
    id: number
    nome: string
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  type GetPessoaGroupByPayload<T extends PessoaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PessoaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PessoaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PessoaGroupByOutputType[P]>
            : GetScalarType<T[P], PessoaGroupByOutputType[P]>
        }
      >
    >


  export type PessoaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pedidos?: boolean | Pessoa$pedidosArgs<ExtArgs>
    pedidosProdutos?: boolean | Pessoa$pedidosProdutosArgs<ExtArgs>
    _count?: boolean | PessoaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type PessoaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["pessoa"]>
  export type PessoaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Pessoa$pedidosArgs<ExtArgs>
    pedidosProdutos?: boolean | Pessoa$pedidosProdutosArgs<ExtArgs>
    _count?: boolean | PessoaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PessoaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PessoaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PessoaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pessoa"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      pedidosProdutos: Prisma.$PedidosProdutosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["pessoa"]>
    composites: {}
  }

  type PessoaGetPayload<S extends boolean | null | undefined | PessoaDefaultArgs> = $Result.GetResult<Prisma.$PessoaPayload, S>

  type PessoaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PessoaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PessoaCountAggregateInputType | true
    }

  export interface PessoaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pessoa'], meta: { name: 'Pessoa' } }
    /**
     * Find zero or one Pessoa that matches the filter.
     * @param {PessoaFindUniqueArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PessoaFindUniqueArgs>(args: SelectSubset<T, PessoaFindUniqueArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pessoa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PessoaFindUniqueOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PessoaFindUniqueOrThrowArgs>(args: SelectSubset<T, PessoaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PessoaFindFirstArgs>(args?: SelectSubset<T, PessoaFindFirstArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PessoaFindFirstOrThrowArgs>(args?: SelectSubset<T, PessoaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pessoas
     * const pessoas = await prisma.pessoa.findMany()
     * 
     * // Get first 10 Pessoas
     * const pessoas = await prisma.pessoa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PessoaFindManyArgs>(args?: SelectSubset<T, PessoaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pessoa.
     * @param {PessoaCreateArgs} args - Arguments to create a Pessoa.
     * @example
     * // Create one Pessoa
     * const Pessoa = await prisma.pessoa.create({
     *   data: {
     *     // ... data to create a Pessoa
     *   }
     * })
     * 
     */
    create<T extends PessoaCreateArgs>(args: SelectSubset<T, PessoaCreateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pessoas.
     * @param {PessoaCreateManyArgs} args - Arguments to create many Pessoas.
     * @example
     * // Create many Pessoas
     * const pessoa = await prisma.pessoa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PessoaCreateManyArgs>(args?: SelectSubset<T, PessoaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pessoas and returns the data saved in the database.
     * @param {PessoaCreateManyAndReturnArgs} args - Arguments to create many Pessoas.
     * @example
     * // Create many Pessoas
     * const pessoa = await prisma.pessoa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pessoas and only return the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PessoaCreateManyAndReturnArgs>(args?: SelectSubset<T, PessoaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pessoa.
     * @param {PessoaDeleteArgs} args - Arguments to delete one Pessoa.
     * @example
     * // Delete one Pessoa
     * const Pessoa = await prisma.pessoa.delete({
     *   where: {
     *     // ... filter to delete one Pessoa
     *   }
     * })
     * 
     */
    delete<T extends PessoaDeleteArgs>(args: SelectSubset<T, PessoaDeleteArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pessoa.
     * @param {PessoaUpdateArgs} args - Arguments to update one Pessoa.
     * @example
     * // Update one Pessoa
     * const pessoa = await prisma.pessoa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PessoaUpdateArgs>(args: SelectSubset<T, PessoaUpdateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pessoas.
     * @param {PessoaDeleteManyArgs} args - Arguments to filter Pessoas to delete.
     * @example
     * // Delete a few Pessoas
     * const { count } = await prisma.pessoa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PessoaDeleteManyArgs>(args?: SelectSubset<T, PessoaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PessoaUpdateManyArgs>(args: SelectSubset<T, PessoaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas and returns the data updated in the database.
     * @param {PessoaUpdateManyAndReturnArgs} args - Arguments to update many Pessoas.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pessoas and only return the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.updateManyAndReturn({
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
    updateManyAndReturn<T extends PessoaUpdateManyAndReturnArgs>(args: SelectSubset<T, PessoaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pessoa.
     * @param {PessoaUpsertArgs} args - Arguments to update or create a Pessoa.
     * @example
     * // Update or create a Pessoa
     * const pessoa = await prisma.pessoa.upsert({
     *   create: {
     *     // ... data to create a Pessoa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pessoa we want to update
     *   }
     * })
     */
    upsert<T extends PessoaUpsertArgs>(args: SelectSubset<T, PessoaUpsertArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaCountArgs} args - Arguments to filter Pessoas to count.
     * @example
     * // Count the number of Pessoas
     * const count = await prisma.pessoa.count({
     *   where: {
     *     // ... the filter for the Pessoas we want to count
     *   }
     * })
    **/
    count<T extends PessoaCountArgs>(
      args?: Subset<T, PessoaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PessoaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PessoaAggregateArgs>(args: Subset<T, PessoaAggregateArgs>): Prisma.PrismaPromise<GetPessoaAggregateType<T>>

    /**
     * Group by Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaGroupByArgs} args - Group by arguments.
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
      T extends PessoaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PessoaGroupByArgs['orderBy'] }
        : { orderBy?: PessoaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pessoa model
   */
  readonly fields: PessoaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pessoa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PessoaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Pessoa$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Pessoa$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidosProdutos<T extends Pessoa$pedidosProdutosArgs<ExtArgs> = {}>(args?: Subset<T, Pessoa$pedidosProdutosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pessoa model
   */
  interface PessoaFieldRefs {
    readonly id: FieldRef<"Pessoa", 'Int'>
    readonly nome: FieldRef<"Pessoa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pessoa findUnique
   */
  export type PessoaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findUniqueOrThrow
   */
  export type PessoaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findFirst
   */
  export type PessoaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findFirstOrThrow
   */
  export type PessoaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findMany
   */
  export type PessoaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoas to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa create
   */
  export type PessoaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pessoa.
     */
    data: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
  }

  /**
   * Pessoa createMany
   */
  export type PessoaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pessoa createManyAndReturn
   */
  export type PessoaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pessoa update
   */
  export type PessoaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pessoa.
     */
    data: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
    /**
     * Choose, which Pessoa to update.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa updateMany
   */
  export type PessoaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to update.
     */
    limit?: number
  }

  /**
   * Pessoa updateManyAndReturn
   */
  export type PessoaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to update.
     */
    limit?: number
  }

  /**
   * Pessoa upsert
   */
  export type PessoaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pessoa to update in case it exists.
     */
    where: PessoaWhereUniqueInput
    /**
     * In case the Pessoa found by the `where` argument doesn't exist, create a new Pessoa with this data.
     */
    create: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
    /**
     * In case the Pessoa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
  }

  /**
   * Pessoa delete
   */
  export type PessoaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter which Pessoa to delete.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa deleteMany
   */
  export type PessoaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoas to delete
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to delete.
     */
    limit?: number
  }

  /**
   * Pessoa.pedidos
   */
  export type Pessoa$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pessoa.pedidosProdutos
   */
  export type Pessoa$pedidosProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    where?: PedidosProdutosWhereInput
    orderBy?: PedidosProdutosOrderByWithRelationInput | PedidosProdutosOrderByWithRelationInput[]
    cursor?: PedidosProdutosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidosProdutosScalarFieldEnum | PedidosProdutosScalarFieldEnum[]
  }

  /**
   * Pessoa without action
   */
  export type PessoaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    preco: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    preco: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    preco: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    preco: number
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    pedidos?: boolean | Produto$pedidosArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    preco?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "preco", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Produto$pedidosArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      pedidos: Prisma.$PedidosProdutosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      preco: number
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Produto$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Produto$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidosProdutosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.pedidos
   */
  export type Produto$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosProdutos
     */
    select?: PedidosProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidosProdutos
     */
    omit?: PedidosProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidosProdutosInclude<ExtArgs> | null
    where?: PedidosProdutosWhereInput
    orderBy?: PedidosProdutosOrderByWithRelationInput | PedidosProdutosOrderByWithRelationInput[]
    cursor?: PedidosProdutosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidosProdutosScalarFieldEnum | PedidosProdutosScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
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


  export const PedidoScalarFieldEnum: {
    id: 'id',
    pessoaId: 'pessoaId',
    descricao: 'descricao'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidosProdutosScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId'
  };

  export type PedidosProdutosScalarFieldEnum = (typeof PedidosProdutosScalarFieldEnum)[keyof typeof PedidosProdutosScalarFieldEnum]


  export const PessoaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type PessoaScalarFieldEnum = (typeof PessoaScalarFieldEnum)[keyof typeof PessoaScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    preco: 'preco'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


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


  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    pessoaId?: IntFilter<"Pedido"> | number
    descricao?: StringFilter<"Pedido"> | string
    pessoa?: XOR<PessoaScalarRelationFilter, PessoaWhereInput>
    produtos?: PedidosProdutosListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    pessoaId?: SortOrder
    descricao?: SortOrder
    pessoa?: PessoaOrderByWithRelationInput
    produtos?: PedidosProdutosOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    pessoaId?: IntFilter<"Pedido"> | number
    descricao?: StringFilter<"Pedido"> | string
    pessoa?: XOR<PessoaScalarRelationFilter, PessoaWhereInput>
    produtos?: PedidosProdutosListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    pessoaId?: SortOrder
    descricao?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    pessoaId?: IntWithAggregatesFilter<"Pedido"> | number
    descricao?: StringWithAggregatesFilter<"Pedido"> | string
  }

  export type PedidosProdutosWhereInput = {
    AND?: PedidosProdutosWhereInput | PedidosProdutosWhereInput[]
    OR?: PedidosProdutosWhereInput[]
    NOT?: PedidosProdutosWhereInput | PedidosProdutosWhereInput[]
    id?: IntFilter<"PedidosProdutos"> | number
    pedidoId?: IntFilter<"PedidosProdutos"> | number
    produtoId?: IntFilter<"PedidosProdutos"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    Pessoa?: PessoaListRelationFilter
  }

  export type PedidosProdutosOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
    Pessoa?: PessoaOrderByRelationAggregateInput
  }

  export type PedidosProdutosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId_produtoId?: PedidosProdutosPedidoIdProdutoIdCompoundUniqueInput
    AND?: PedidosProdutosWhereInput | PedidosProdutosWhereInput[]
    OR?: PedidosProdutosWhereInput[]
    NOT?: PedidosProdutosWhereInput | PedidosProdutosWhereInput[]
    pedidoId?: IntFilter<"PedidosProdutos"> | number
    produtoId?: IntFilter<"PedidosProdutos"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    Pessoa?: PessoaListRelationFilter
  }, "id" | "pedidoId_produtoId">

  export type PedidosProdutosOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    _count?: PedidosProdutosCountOrderByAggregateInput
    _avg?: PedidosProdutosAvgOrderByAggregateInput
    _max?: PedidosProdutosMaxOrderByAggregateInput
    _min?: PedidosProdutosMinOrderByAggregateInput
    _sum?: PedidosProdutosSumOrderByAggregateInput
  }

  export type PedidosProdutosScalarWhereWithAggregatesInput = {
    AND?: PedidosProdutosScalarWhereWithAggregatesInput | PedidosProdutosScalarWhereWithAggregatesInput[]
    OR?: PedidosProdutosScalarWhereWithAggregatesInput[]
    NOT?: PedidosProdutosScalarWhereWithAggregatesInput | PedidosProdutosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidosProdutos"> | number
    pedidoId?: IntWithAggregatesFilter<"PedidosProdutos"> | number
    produtoId?: IntWithAggregatesFilter<"PedidosProdutos"> | number
  }

  export type PessoaWhereInput = {
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    id?: IntFilter<"Pessoa"> | number
    nome?: StringFilter<"Pessoa"> | string
    pedidos?: PedidoListRelationFilter
    pedidosProdutos?: PedidosProdutosListRelationFilter
  }

  export type PessoaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
    pedidosProdutos?: PedidosProdutosOrderByRelationAggregateInput
  }

  export type PessoaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    nome?: StringFilter<"Pessoa"> | string
    pedidos?: PedidoListRelationFilter
    pedidosProdutos?: PedidosProdutosListRelationFilter
  }, "id">

  export type PessoaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: PessoaCountOrderByAggregateInput
    _avg?: PessoaAvgOrderByAggregateInput
    _max?: PessoaMaxOrderByAggregateInput
    _min?: PessoaMinOrderByAggregateInput
    _sum?: PessoaSumOrderByAggregateInput
  }

  export type PessoaScalarWhereWithAggregatesInput = {
    AND?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    OR?: PessoaScalarWhereWithAggregatesInput[]
    NOT?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pessoa"> | number
    nome?: StringWithAggregatesFilter<"Pessoa"> | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    preco?: FloatFilter<"Produto"> | number
    pedidos?: PedidosProdutosListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    pedidos?: PedidosProdutosOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    preco?: FloatFilter<"Produto"> | number
    pedidos?: PedidosProdutosListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    preco?: FloatWithAggregatesFilter<"Produto"> | number
  }

  export type PedidoCreateInput = {
    descricao: string
    pessoa: PessoaCreateNestedOneWithoutPedidosInput
    produtos?: PedidosProdutosCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    pessoaId: number
    descricao: string
    produtos?: PedidosProdutosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    pessoa?: PessoaUpdateOneRequiredWithoutPedidosNestedInput
    produtos?: PedidosProdutosUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pessoaId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    produtos?: PedidosProdutosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    pessoaId: number
    descricao: string
  }

  export type PedidoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pessoaId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PedidosProdutosCreateInput = {
    pedido: PedidoCreateNestedOneWithoutProdutosInput
    produto: ProdutoCreateNestedOneWithoutPedidosInput
    Pessoa?: PessoaCreateNestedManyWithoutPedidosProdutosInput
  }

  export type PedidosProdutosUncheckedCreateInput = {
    id?: number
    pedidoId: number
    produtoId: number
    Pessoa?: PessoaUncheckedCreateNestedManyWithoutPedidosProdutosInput
  }

  export type PedidosProdutosUpdateInput = {
    pedido?: PedidoUpdateOneRequiredWithoutProdutosNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutPedidosNestedInput
    Pessoa?: PessoaUpdateManyWithoutPedidosProdutosNestedInput
  }

  export type PedidosProdutosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    Pessoa?: PessoaUncheckedUpdateManyWithoutPedidosProdutosNestedInput
  }

  export type PedidosProdutosCreateManyInput = {
    id?: number
    pedidoId: number
    produtoId: number
  }

  export type PedidosProdutosUpdateManyMutationInput = {

  }

  export type PedidosProdutosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaCreateInput = {
    nome: string
    pedidos?: PedidoCreateNestedManyWithoutPessoaInput
    pedidosProdutos?: PedidosProdutosCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateInput = {
    id?: number
    nome: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutPessoaInput
    pedidosProdutos?: PedidosProdutosUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUpdateManyWithoutPessoaNestedInput
    pedidosProdutos?: PedidosProdutosUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutPessoaNestedInput
    pedidosProdutos?: PedidosProdutosUncheckedUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaCreateManyInput = {
    id?: number
    nome: string
  }

  export type PessoaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateInput = {
    nome: string
    preco: number
    pedidos?: PedidosProdutosCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    preco: number
    pedidos?: PedidosProdutosUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    pedidos?: PedidosProdutosUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    pedidos?: PedidosProdutosUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    preco: number
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
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

  export type PessoaScalarRelationFilter = {
    is?: PessoaWhereInput
    isNot?: PessoaWhereInput
  }

  export type PedidosProdutosListRelationFilter = {
    every?: PedidosProdutosWhereInput
    some?: PedidosProdutosWhereInput
    none?: PedidosProdutosWhereInput
  }

  export type PedidosProdutosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    pessoaId?: SortOrder
    descricao?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    pessoaId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    pessoaId?: SortOrder
    descricao?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    pessoaId?: SortOrder
    descricao?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    pessoaId?: SortOrder
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

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type PessoaListRelationFilter = {
    every?: PessoaWhereInput
    some?: PessoaWhereInput
    none?: PessoaWhereInput
  }

  export type PessoaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidosProdutosPedidoIdProdutoIdCompoundUniqueInput = {
    pedidoId: number
    produtoId: number
  }

  export type PedidosProdutosCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type PedidosProdutosAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type PedidosProdutosMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type PedidosProdutosMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type PedidosProdutosSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PessoaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PessoaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PessoaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PessoaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PessoaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
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

  export type PessoaCreateNestedOneWithoutPedidosInput = {
    create?: XOR<PessoaCreateWithoutPedidosInput, PessoaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutPedidosInput
    connect?: PessoaWhereUniqueInput
  }

  export type PedidosProdutosCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidosProdutosCreateWithoutPedidoInput, PedidosProdutosUncheckedCreateWithoutPedidoInput> | PedidosProdutosCreateWithoutPedidoInput[] | PedidosProdutosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPedidoInput | PedidosProdutosCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidosProdutosCreateManyPedidoInputEnvelope
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
  }

  export type PedidosProdutosUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidosProdutosCreateWithoutPedidoInput, PedidosProdutosUncheckedCreateWithoutPedidoInput> | PedidosProdutosCreateWithoutPedidoInput[] | PedidosProdutosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPedidoInput | PedidosProdutosCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidosProdutosCreateManyPedidoInputEnvelope
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PessoaUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<PessoaCreateWithoutPedidosInput, PessoaUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutPedidosInput
    upsert?: PessoaUpsertWithoutPedidosInput
    connect?: PessoaWhereUniqueInput
    update?: XOR<XOR<PessoaUpdateToOneWithWhereWithoutPedidosInput, PessoaUpdateWithoutPedidosInput>, PessoaUncheckedUpdateWithoutPedidosInput>
  }

  export type PedidosProdutosUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidosProdutosCreateWithoutPedidoInput, PedidosProdutosUncheckedCreateWithoutPedidoInput> | PedidosProdutosCreateWithoutPedidoInput[] | PedidosProdutosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPedidoInput | PedidosProdutosCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidosProdutosUpsertWithWhereUniqueWithoutPedidoInput | PedidosProdutosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidosProdutosCreateManyPedidoInputEnvelope
    set?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    disconnect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    delete?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    update?: PedidosProdutosUpdateWithWhereUniqueWithoutPedidoInput | PedidosProdutosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidosProdutosUpdateManyWithWhereWithoutPedidoInput | PedidosProdutosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidosProdutosUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidosProdutosCreateWithoutPedidoInput, PedidosProdutosUncheckedCreateWithoutPedidoInput> | PedidosProdutosCreateWithoutPedidoInput[] | PedidosProdutosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPedidoInput | PedidosProdutosCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidosProdutosUpsertWithWhereUniqueWithoutPedidoInput | PedidosProdutosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidosProdutosCreateManyPedidoInputEnvelope
    set?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    disconnect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    delete?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    update?: PedidosProdutosUpdateWithWhereUniqueWithoutPedidoInput | PedidosProdutosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidosProdutosUpdateManyWithWhereWithoutPedidoInput | PedidosProdutosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProdutosInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ProdutoCreateWithoutPedidosInput, ProdutoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidosInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PessoaCreateNestedManyWithoutPedidosProdutosInput = {
    create?: XOR<PessoaCreateWithoutPedidosProdutosInput, PessoaUncheckedCreateWithoutPedidosProdutosInput> | PessoaCreateWithoutPedidosProdutosInput[] | PessoaUncheckedCreateWithoutPedidosProdutosInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutPedidosProdutosInput | PessoaCreateOrConnectWithoutPedidosProdutosInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
  }

  export type PessoaUncheckedCreateNestedManyWithoutPedidosProdutosInput = {
    create?: XOR<PessoaCreateWithoutPedidosProdutosInput, PessoaUncheckedCreateWithoutPedidosProdutosInput> | PessoaCreateWithoutPedidosProdutosInput[] | PessoaUncheckedCreateWithoutPedidosProdutosInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutPedidosProdutosInput | PessoaCreateOrConnectWithoutPedidosProdutosInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
  }

  export type PedidoUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProdutosInput
    upsert?: PedidoUpsertWithoutProdutosInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutProdutosInput, PedidoUpdateWithoutProdutosInput>, PedidoUncheckedUpdateWithoutProdutosInput>
  }

  export type ProdutoUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ProdutoCreateWithoutPedidosInput, ProdutoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidosInput
    upsert?: ProdutoUpsertWithoutPedidosInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutPedidosInput, ProdutoUpdateWithoutPedidosInput>, ProdutoUncheckedUpdateWithoutPedidosInput>
  }

  export type PessoaUpdateManyWithoutPedidosProdutosNestedInput = {
    create?: XOR<PessoaCreateWithoutPedidosProdutosInput, PessoaUncheckedCreateWithoutPedidosProdutosInput> | PessoaCreateWithoutPedidosProdutosInput[] | PessoaUncheckedCreateWithoutPedidosProdutosInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutPedidosProdutosInput | PessoaCreateOrConnectWithoutPedidosProdutosInput[]
    upsert?: PessoaUpsertWithWhereUniqueWithoutPedidosProdutosInput | PessoaUpsertWithWhereUniqueWithoutPedidosProdutosInput[]
    set?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    disconnect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    delete?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    update?: PessoaUpdateWithWhereUniqueWithoutPedidosProdutosInput | PessoaUpdateWithWhereUniqueWithoutPedidosProdutosInput[]
    updateMany?: PessoaUpdateManyWithWhereWithoutPedidosProdutosInput | PessoaUpdateManyWithWhereWithoutPedidosProdutosInput[]
    deleteMany?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
  }

  export type PessoaUncheckedUpdateManyWithoutPedidosProdutosNestedInput = {
    create?: XOR<PessoaCreateWithoutPedidosProdutosInput, PessoaUncheckedCreateWithoutPedidosProdutosInput> | PessoaCreateWithoutPedidosProdutosInput[] | PessoaUncheckedCreateWithoutPedidosProdutosInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutPedidosProdutosInput | PessoaCreateOrConnectWithoutPedidosProdutosInput[]
    upsert?: PessoaUpsertWithWhereUniqueWithoutPedidosProdutosInput | PessoaUpsertWithWhereUniqueWithoutPedidosProdutosInput[]
    set?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    disconnect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    delete?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    update?: PessoaUpdateWithWhereUniqueWithoutPedidosProdutosInput | PessoaUpdateWithWhereUniqueWithoutPedidosProdutosInput[]
    updateMany?: PessoaUpdateManyWithWhereWithoutPedidosProdutosInput | PessoaUpdateManyWithWhereWithoutPedidosProdutosInput[]
    deleteMany?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
  }

  export type PedidoCreateNestedManyWithoutPessoaInput = {
    create?: XOR<PedidoCreateWithoutPessoaInput, PedidoUncheckedCreateWithoutPessoaInput> | PedidoCreateWithoutPessoaInput[] | PedidoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutPessoaInput | PedidoCreateOrConnectWithoutPessoaInput[]
    createMany?: PedidoCreateManyPessoaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidosProdutosCreateNestedManyWithoutPessoaInput = {
    create?: XOR<PedidosProdutosCreateWithoutPessoaInput, PedidosProdutosUncheckedCreateWithoutPessoaInput> | PedidosProdutosCreateWithoutPessoaInput[] | PedidosProdutosUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPessoaInput | PedidosProdutosCreateOrConnectWithoutPessoaInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: XOR<PedidoCreateWithoutPessoaInput, PedidoUncheckedCreateWithoutPessoaInput> | PedidoCreateWithoutPessoaInput[] | PedidoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutPessoaInput | PedidoCreateOrConnectWithoutPessoaInput[]
    createMany?: PedidoCreateManyPessoaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidosProdutosUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: XOR<PedidosProdutosCreateWithoutPessoaInput, PedidosProdutosUncheckedCreateWithoutPessoaInput> | PedidosProdutosCreateWithoutPessoaInput[] | PedidosProdutosUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPessoaInput | PedidosProdutosCreateOrConnectWithoutPessoaInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<PedidoCreateWithoutPessoaInput, PedidoUncheckedCreateWithoutPessoaInput> | PedidoCreateWithoutPessoaInput[] | PedidoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutPessoaInput | PedidoCreateOrConnectWithoutPessoaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutPessoaInput | PedidoUpsertWithWhereUniqueWithoutPessoaInput[]
    createMany?: PedidoCreateManyPessoaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutPessoaInput | PedidoUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutPessoaInput | PedidoUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidosProdutosUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<PedidosProdutosCreateWithoutPessoaInput, PedidosProdutosUncheckedCreateWithoutPessoaInput> | PedidosProdutosCreateWithoutPessoaInput[] | PedidosProdutosUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPessoaInput | PedidosProdutosCreateOrConnectWithoutPessoaInput[]
    upsert?: PedidosProdutosUpsertWithWhereUniqueWithoutPessoaInput | PedidosProdutosUpsertWithWhereUniqueWithoutPessoaInput[]
    set?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    disconnect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    delete?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    update?: PedidosProdutosUpdateWithWhereUniqueWithoutPessoaInput | PedidosProdutosUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: PedidosProdutosUpdateManyWithWhereWithoutPessoaInput | PedidosProdutosUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<PedidoCreateWithoutPessoaInput, PedidoUncheckedCreateWithoutPessoaInput> | PedidoCreateWithoutPessoaInput[] | PedidoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutPessoaInput | PedidoCreateOrConnectWithoutPessoaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutPessoaInput | PedidoUpsertWithWhereUniqueWithoutPessoaInput[]
    createMany?: PedidoCreateManyPessoaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutPessoaInput | PedidoUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutPessoaInput | PedidoUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidosProdutosUncheckedUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<PedidosProdutosCreateWithoutPessoaInput, PedidosProdutosUncheckedCreateWithoutPessoaInput> | PedidosProdutosCreateWithoutPessoaInput[] | PedidosProdutosUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutPessoaInput | PedidosProdutosCreateOrConnectWithoutPessoaInput[]
    upsert?: PedidosProdutosUpsertWithWhereUniqueWithoutPessoaInput | PedidosProdutosUpsertWithWhereUniqueWithoutPessoaInput[]
    set?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    disconnect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    delete?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    update?: PedidosProdutosUpdateWithWhereUniqueWithoutPessoaInput | PedidosProdutosUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: PedidosProdutosUpdateManyWithWhereWithoutPessoaInput | PedidosProdutosUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
  }

  export type PedidosProdutosCreateNestedManyWithoutProdutoInput = {
    create?: XOR<PedidosProdutosCreateWithoutProdutoInput, PedidosProdutosUncheckedCreateWithoutProdutoInput> | PedidosProdutosCreateWithoutProdutoInput[] | PedidosProdutosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutProdutoInput | PedidosProdutosCreateOrConnectWithoutProdutoInput[]
    createMany?: PedidosProdutosCreateManyProdutoInputEnvelope
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
  }

  export type PedidosProdutosUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<PedidosProdutosCreateWithoutProdutoInput, PedidosProdutosUncheckedCreateWithoutProdutoInput> | PedidosProdutosCreateWithoutProdutoInput[] | PedidosProdutosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutProdutoInput | PedidosProdutosCreateOrConnectWithoutProdutoInput[]
    createMany?: PedidosProdutosCreateManyProdutoInputEnvelope
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidosProdutosUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<PedidosProdutosCreateWithoutProdutoInput, PedidosProdutosUncheckedCreateWithoutProdutoInput> | PedidosProdutosCreateWithoutProdutoInput[] | PedidosProdutosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutProdutoInput | PedidosProdutosCreateOrConnectWithoutProdutoInput[]
    upsert?: PedidosProdutosUpsertWithWhereUniqueWithoutProdutoInput | PedidosProdutosUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: PedidosProdutosCreateManyProdutoInputEnvelope
    set?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    disconnect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    delete?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    update?: PedidosProdutosUpdateWithWhereUniqueWithoutProdutoInput | PedidosProdutosUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: PedidosProdutosUpdateManyWithWhereWithoutProdutoInput | PedidosProdutosUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
  }

  export type PedidosProdutosUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<PedidosProdutosCreateWithoutProdutoInput, PedidosProdutosUncheckedCreateWithoutProdutoInput> | PedidosProdutosCreateWithoutProdutoInput[] | PedidosProdutosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidosProdutosCreateOrConnectWithoutProdutoInput | PedidosProdutosCreateOrConnectWithoutProdutoInput[]
    upsert?: PedidosProdutosUpsertWithWhereUniqueWithoutProdutoInput | PedidosProdutosUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: PedidosProdutosCreateManyProdutoInputEnvelope
    set?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    disconnect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    delete?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    connect?: PedidosProdutosWhereUniqueInput | PedidosProdutosWhereUniqueInput[]
    update?: PedidosProdutosUpdateWithWhereUniqueWithoutProdutoInput | PedidosProdutosUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: PedidosProdutosUpdateManyWithWhereWithoutProdutoInput | PedidosProdutosUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
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

  export type PessoaCreateWithoutPedidosInput = {
    nome: string
    pedidosProdutos?: PedidosProdutosCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    pedidosProdutos?: PedidosProdutosUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaCreateOrConnectWithoutPedidosInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutPedidosInput, PessoaUncheckedCreateWithoutPedidosInput>
  }

  export type PedidosProdutosCreateWithoutPedidoInput = {
    produto: ProdutoCreateNestedOneWithoutPedidosInput
    Pessoa?: PessoaCreateNestedManyWithoutPedidosProdutosInput
  }

  export type PedidosProdutosUncheckedCreateWithoutPedidoInput = {
    id?: number
    produtoId: number
    Pessoa?: PessoaUncheckedCreateNestedManyWithoutPedidosProdutosInput
  }

  export type PedidosProdutosCreateOrConnectWithoutPedidoInput = {
    where: PedidosProdutosWhereUniqueInput
    create: XOR<PedidosProdutosCreateWithoutPedidoInput, PedidosProdutosUncheckedCreateWithoutPedidoInput>
  }

  export type PedidosProdutosCreateManyPedidoInputEnvelope = {
    data: PedidosProdutosCreateManyPedidoInput | PedidosProdutosCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type PessoaUpsertWithoutPedidosInput = {
    update: XOR<PessoaUpdateWithoutPedidosInput, PessoaUncheckedUpdateWithoutPedidosInput>
    create: XOR<PessoaCreateWithoutPedidosInput, PessoaUncheckedCreateWithoutPedidosInput>
    where?: PessoaWhereInput
  }

  export type PessoaUpdateToOneWithWhereWithoutPedidosInput = {
    where?: PessoaWhereInput
    data: XOR<PessoaUpdateWithoutPedidosInput, PessoaUncheckedUpdateWithoutPedidosInput>
  }

  export type PessoaUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pedidosProdutos?: PedidosProdutosUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pedidosProdutos?: PedidosProdutosUncheckedUpdateManyWithoutPessoaNestedInput
  }

  export type PedidosProdutosUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidosProdutosWhereUniqueInput
    update: XOR<PedidosProdutosUpdateWithoutPedidoInput, PedidosProdutosUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidosProdutosCreateWithoutPedidoInput, PedidosProdutosUncheckedCreateWithoutPedidoInput>
  }

  export type PedidosProdutosUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidosProdutosWhereUniqueInput
    data: XOR<PedidosProdutosUpdateWithoutPedidoInput, PedidosProdutosUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidosProdutosUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidosProdutosScalarWhereInput
    data: XOR<PedidosProdutosUpdateManyMutationInput, PedidosProdutosUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidosProdutosScalarWhereInput = {
    AND?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
    OR?: PedidosProdutosScalarWhereInput[]
    NOT?: PedidosProdutosScalarWhereInput | PedidosProdutosScalarWhereInput[]
    id?: IntFilter<"PedidosProdutos"> | number
    pedidoId?: IntFilter<"PedidosProdutos"> | number
    produtoId?: IntFilter<"PedidosProdutos"> | number
  }

  export type PedidoCreateWithoutProdutosInput = {
    descricao: string
    pessoa: PessoaCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutProdutosInput = {
    id?: number
    pessoaId: number
    descricao: string
  }

  export type PedidoCreateOrConnectWithoutProdutosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
  }

  export type ProdutoCreateWithoutPedidosInput = {
    nome: string
    preco: number
  }

  export type ProdutoUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    preco: number
  }

  export type ProdutoCreateOrConnectWithoutPedidosInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutPedidosInput, ProdutoUncheckedCreateWithoutPedidosInput>
  }

  export type PessoaCreateWithoutPedidosProdutosInput = {
    nome: string
    pedidos?: PedidoCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateWithoutPedidosProdutosInput = {
    id?: number
    nome: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaCreateOrConnectWithoutPedidosProdutosInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutPedidosProdutosInput, PessoaUncheckedCreateWithoutPedidosProdutosInput>
  }

  export type PedidoUpsertWithoutProdutosInput = {
    update: XOR<PedidoUpdateWithoutProdutosInput, PedidoUncheckedUpdateWithoutProdutosInput>
    create: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutProdutosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutProdutosInput, PedidoUncheckedUpdateWithoutProdutosInput>
  }

  export type PedidoUpdateWithoutProdutosInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    pessoa?: PessoaUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pessoaId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUpsertWithoutPedidosInput = {
    update: XOR<ProdutoUpdateWithoutPedidosInput, ProdutoUncheckedUpdateWithoutPedidosInput>
    create: XOR<ProdutoCreateWithoutPedidosInput, ProdutoUncheckedCreateWithoutPedidosInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutPedidosInput, ProdutoUncheckedUpdateWithoutPedidosInput>
  }

  export type ProdutoUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type PessoaUpsertWithWhereUniqueWithoutPedidosProdutosInput = {
    where: PessoaWhereUniqueInput
    update: XOR<PessoaUpdateWithoutPedidosProdutosInput, PessoaUncheckedUpdateWithoutPedidosProdutosInput>
    create: XOR<PessoaCreateWithoutPedidosProdutosInput, PessoaUncheckedCreateWithoutPedidosProdutosInput>
  }

  export type PessoaUpdateWithWhereUniqueWithoutPedidosProdutosInput = {
    where: PessoaWhereUniqueInput
    data: XOR<PessoaUpdateWithoutPedidosProdutosInput, PessoaUncheckedUpdateWithoutPedidosProdutosInput>
  }

  export type PessoaUpdateManyWithWhereWithoutPedidosProdutosInput = {
    where: PessoaScalarWhereInput
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyWithoutPedidosProdutosInput>
  }

  export type PessoaScalarWhereInput = {
    AND?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
    OR?: PessoaScalarWhereInput[]
    NOT?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
    id?: IntFilter<"Pessoa"> | number
    nome?: StringFilter<"Pessoa"> | string
  }

  export type PedidoCreateWithoutPessoaInput = {
    descricao: string
    produtos?: PedidosProdutosCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPessoaInput = {
    id?: number
    descricao: string
    produtos?: PedidosProdutosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutPessoaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPessoaInput, PedidoUncheckedCreateWithoutPessoaInput>
  }

  export type PedidoCreateManyPessoaInputEnvelope = {
    data: PedidoCreateManyPessoaInput | PedidoCreateManyPessoaInput[]
    skipDuplicates?: boolean
  }

  export type PedidosProdutosCreateWithoutPessoaInput = {
    pedido: PedidoCreateNestedOneWithoutProdutosInput
    produto: ProdutoCreateNestedOneWithoutPedidosInput
  }

  export type PedidosProdutosUncheckedCreateWithoutPessoaInput = {
    id?: number
    pedidoId: number
    produtoId: number
  }

  export type PedidosProdutosCreateOrConnectWithoutPessoaInput = {
    where: PedidosProdutosWhereUniqueInput
    create: XOR<PedidosProdutosCreateWithoutPessoaInput, PedidosProdutosUncheckedCreateWithoutPessoaInput>
  }

  export type PedidoUpsertWithWhereUniqueWithoutPessoaInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutPessoaInput, PedidoUncheckedUpdateWithoutPessoaInput>
    create: XOR<PedidoCreateWithoutPessoaInput, PedidoUncheckedCreateWithoutPessoaInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutPessoaInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutPessoaInput, PedidoUncheckedUpdateWithoutPessoaInput>
  }

  export type PedidoUpdateManyWithWhereWithoutPessoaInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutPessoaInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    pessoaId?: IntFilter<"Pedido"> | number
    descricao?: StringFilter<"Pedido"> | string
  }

  export type PedidosProdutosUpsertWithWhereUniqueWithoutPessoaInput = {
    where: PedidosProdutosWhereUniqueInput
    update: XOR<PedidosProdutosUpdateWithoutPessoaInput, PedidosProdutosUncheckedUpdateWithoutPessoaInput>
    create: XOR<PedidosProdutosCreateWithoutPessoaInput, PedidosProdutosUncheckedCreateWithoutPessoaInput>
  }

  export type PedidosProdutosUpdateWithWhereUniqueWithoutPessoaInput = {
    where: PedidosProdutosWhereUniqueInput
    data: XOR<PedidosProdutosUpdateWithoutPessoaInput, PedidosProdutosUncheckedUpdateWithoutPessoaInput>
  }

  export type PedidosProdutosUpdateManyWithWhereWithoutPessoaInput = {
    where: PedidosProdutosScalarWhereInput
    data: XOR<PedidosProdutosUpdateManyMutationInput, PedidosProdutosUncheckedUpdateManyWithoutPessoaInput>
  }

  export type PedidosProdutosCreateWithoutProdutoInput = {
    pedido: PedidoCreateNestedOneWithoutProdutosInput
    Pessoa?: PessoaCreateNestedManyWithoutPedidosProdutosInput
  }

  export type PedidosProdutosUncheckedCreateWithoutProdutoInput = {
    id?: number
    pedidoId: number
    Pessoa?: PessoaUncheckedCreateNestedManyWithoutPedidosProdutosInput
  }

  export type PedidosProdutosCreateOrConnectWithoutProdutoInput = {
    where: PedidosProdutosWhereUniqueInput
    create: XOR<PedidosProdutosCreateWithoutProdutoInput, PedidosProdutosUncheckedCreateWithoutProdutoInput>
  }

  export type PedidosProdutosCreateManyProdutoInputEnvelope = {
    data: PedidosProdutosCreateManyProdutoInput | PedidosProdutosCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type PedidosProdutosUpsertWithWhereUniqueWithoutProdutoInput = {
    where: PedidosProdutosWhereUniqueInput
    update: XOR<PedidosProdutosUpdateWithoutProdutoInput, PedidosProdutosUncheckedUpdateWithoutProdutoInput>
    create: XOR<PedidosProdutosCreateWithoutProdutoInput, PedidosProdutosUncheckedCreateWithoutProdutoInput>
  }

  export type PedidosProdutosUpdateWithWhereUniqueWithoutProdutoInput = {
    where: PedidosProdutosWhereUniqueInput
    data: XOR<PedidosProdutosUpdateWithoutProdutoInput, PedidosProdutosUncheckedUpdateWithoutProdutoInput>
  }

  export type PedidosProdutosUpdateManyWithWhereWithoutProdutoInput = {
    where: PedidosProdutosScalarWhereInput
    data: XOR<PedidosProdutosUpdateManyMutationInput, PedidosProdutosUncheckedUpdateManyWithoutProdutoInput>
  }

  export type PedidosProdutosCreateManyPedidoInput = {
    id?: number
    produtoId: number
  }

  export type PedidosProdutosUpdateWithoutPedidoInput = {
    produto?: ProdutoUpdateOneRequiredWithoutPedidosNestedInput
    Pessoa?: PessoaUpdateManyWithoutPedidosProdutosNestedInput
  }

  export type PedidosProdutosUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    Pessoa?: PessoaUncheckedUpdateManyWithoutPedidosProdutosNestedInput
  }

  export type PedidosProdutosUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaUpdateWithoutPedidosProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaUncheckedUpdateWithoutPedidosProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaUncheckedUpdateManyWithoutPedidosProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateManyPessoaInput = {
    id?: number
    descricao: string
  }

  export type PedidoUpdateWithoutPessoaInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    produtos?: PedidosProdutosUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    produtos?: PedidosProdutosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PedidosProdutosUpdateWithoutPessoaInput = {
    pedido?: PedidoUpdateOneRequiredWithoutProdutosNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidosProdutosUncheckedUpdateWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidosProdutosUncheckedUpdateManyWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidosProdutosCreateManyProdutoInput = {
    id?: number
    pedidoId: number
  }

  export type PedidosProdutosUpdateWithoutProdutoInput = {
    pedido?: PedidoUpdateOneRequiredWithoutProdutosNestedInput
    Pessoa?: PessoaUpdateManyWithoutPedidosProdutosNestedInput
  }

  export type PedidosProdutosUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    Pessoa?: PessoaUncheckedUpdateManyWithoutPedidosProdutosNestedInput
  }

  export type PedidosProdutosUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
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