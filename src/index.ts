let runAssertFns = true;

export function setConfig(options: {runAssertFns: boolean}) {
    runAssertFns = options.runAssertFns;
}

export function assert(value: boolean, msg = `Assertion failed`) {
    if (value !== true) {
        throw new Error(msg);
    }
}

export function assertFn(value: () => boolean, msg = `Assertion failed`) {
    if (runAssertFns) {
        if (value() !== true) {
            throw new Error(msg);
        }
    }
}

export function ensureArray(value: unknown, msg = `Expected array but got ${value}`): asserts value is unknown[] {
    if (!Array.isArray(value)) {
        throw new Error(msg);
    }
}

export function ensureObject<T extends object>(
    value: unknown,
    msg = `Expected object but got ${value}`,
): asserts value is T {
    if (typeof value !== 'object' || value === null) {
        throw new Error(msg);
    }
}

export function ensureString(value: unknown, msg = `Expected string but got ${value}`): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error(msg);
    }
}

export function ensureNumber(value: unknown, msg = `Expected number but got ${value}`): asserts value is number {
    if (typeof value !== 'number') {
        throw new Error(msg);
    }
}

export function ensureBoolean(value: unknown, msg = `Expected boolean but got ${value}`): asserts value is boolean {
    if (typeof value !== 'boolean') {
        throw new Error(msg);
    }
}

export function ensureNonVoid<T>(value: T, msg = `Expected non undefined value`): asserts value is NonUndefined<T> {
    if (value === undefined) {
        throw new Error(msg);
    }
}

export function ensureNonNull<T>(value: T, msg = `Expected non null value`): asserts value is NonNull<T> {
    if (value === null) {
        throw new Error(msg);
    }
}

export function ensureNonNullable<T>(value: T, msg = `Expected non nullable value`): asserts value is NonNullable<T> {
    if (value === undefined || value === null) {
        throw new Error(msg);
    }
}

export function nonVoid<T extends CheckUnion<T, undefined, 'value should be undefined union'>>(
    value: T,
    msg = `Expected non undefined value`,
) {
    if (value === undefined) {
        throw new Error(msg);
    }
    return value as NonUndefined<T>;
}

export function nonNull<T extends CheckUnion<T, null, 'value should be null union'>>(
    value: T,
    msg = `Expected non null value`,
) {
    if (value === null) {
        throw new Error(msg);
    }
    return value as NonNull<T>;
}

export function nonNullable<T extends CheckUnion<T, undefined | null, 'value should be null | undefined union'>>(
    value: T,
    msg = `Expected non nullable value`,
) {
    if (value === null || value === undefined) {
        throw new Error(msg);
    }
    return value as NonNullable<T>;
}

export function never(msg = `Never call`): never {
    throw new Error(msg);
}

export function neverValue(value: never, msg = `Never possible value: ${JSON.stringify(value)}`): never {
    throw new Error(msg);
}

export function castValue<T>(value: unknown): asserts value is T {}

export function cast<T>(value: unknown): T {
    return value as T;
}

export function as<T>(value: T): T {
    return value;
}

type CheckUnion<A, B, V> = B extends A ? unknown : V;
type NonUndefined<T> = T extends undefined ? never : T;
type NonNull<T> = T extends null ? never : T;
