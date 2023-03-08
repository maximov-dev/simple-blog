/* eslint-disable @typescript-eslint/ban-types */
import { CamelCase } from 'type-fest';
import { z, ZodTypeAny } from 'zod';

// example: https://github.com/sindresorhus/camelcase-keys/blob/main/index.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export type SerializedResponse<
  T extends ZodTypeAny,

  StopPaths extends readonly string[] = [],
> = CamelCasedPropertiesDeep<z.infer<T>>;

export type CamelCaseOptions = {
  preserveConsecutiveUppercase?: boolean;
};

export type CamelCasedPropertiesDeep<
  Value,
  Options extends CamelCaseOptions = { preserveConsecutiveUppercase: true },
> = Value extends Function | Date | RegExp
  ? Value
  : Value extends Array<infer U>
    ? Array<CamelCasedPropertiesDeep<U, Options>>
    : Value extends Set<infer U>
      ? Set<CamelCasedPropertiesDeep<U, Options>>
      : {
        [K in keyof Value as CamelCase<K, Options>]: CamelCasedPropertiesDeep<
          Value[K],
          Options
        >;
      };
