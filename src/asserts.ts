function errorMsg(type: string, val: string, msg?: string) {
  const sawVal = val === null ? 'null' : typeof val;
  if (typeof msg === 'string') {
    return msg.replace(/%t/g, sawVal).replace(/%v/g, val);
  }
  return `Expected ${type}, saw ${sawVal}`;
}

function assertsString(val: any, msg?: string): asserts val is string {
  if (typeof val === 'string') return;
  throw new AssertsError(errorMsg('string', val, msg));
}

function assertsBoolean(val: any, msg?: string): asserts val is boolean {
  if (typeof val === 'boolean') return;
  throw new AssertsError(errorMsg('boolean', val, msg));
}

function assertsNumber(val: any, msg?: string): asserts val is number {
  if (typeof val === 'number') return;
  throw new AssertsError(errorMsg('number', val, msg));
}

function assertsUndefined(val: any, msg?: string): asserts val is undefined {
  if (val === undefined) return;
  throw new AssertsError(errorMsg('undefined', val, msg));
}

function assertsNull(val: any, msg?: string): asserts val is null {
  if (val === null) return;
  throw new AssertsError(errorMsg('null', val, msg));
}

function assertsInstanceof<T extends Function>(
  val: any,
  t: T,
  msg?: string
): asserts val is T {
  if (val instanceof t) return;
  throw new AssertsError(errorMsg(`instanceof ${t.name}`, val, msg));
}

function assertsNullish(
  val: any,
  msg?: string
): asserts val is null | undefined {
  if (val == null) return;
  throw new AssertsError(errorMsg('nullish', val, msg));
}

function isAssertsError(err: any, msg?: string): asserts err is AssertsError {
  if (err instanceof AssertsError) return;
  throw new AssertsError(errorMsg('AssertsError', err, msg));
}

export class AssertsError extends Error {}
AssertsError.prototype.name = 'AssertsError';
Object.defineProperty(AssertsError.prototype, 'name', { enumerable: false });

type Assertions = {
  string: typeof assertsString;
  boolean: typeof assertsBoolean;
  number: typeof assertsNumber;
  undefined: typeof assertsUndefined;
  null: typeof assertsNull;
  nullish: typeof assertsNullish;
  instanceof: typeof assertsInstanceof;
  isAssertsError: typeof isAssertsError;
  Error: typeof AssertsError;
};

export const asserts: Assertions = {
  string: assertsString,
  boolean: assertsBoolean,
  number: assertsNumber,
  undefined: assertsUndefined,
  null: assertsNull,
  nullish: assertsNullish,
  instanceof: assertsInstanceof,
  isAssertsError: isAssertsError,
  Error: AssertsError,
} as const;
