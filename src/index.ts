export function assert(value: boolean, msg?: string) {
    if (value !== true) {
        debugger;
        throw new Error(`Assertion failed${msg === undefined ? ': ' + msg : ''}`);
    }
}

export function ensureArray<T extends readonly any[]>(value: T) {
    if (!Array.isArray(value)) {
        throw createInvariant(value);
    }
    return value;
}

export function ensureObject<T extends object>(value: T) {
    if (typeof value !== 'object' || value === null) {
        throw createInvariant(value);
    }
    return value;
}

export function ensureString(value: string) {
    if (typeof value !== 'string') {
        throw createInvariant(value);
    }
    return value;
}

export function ensureNumber(value: number) {
    if (typeof value !== 'number') {
        throw createInvariant(value);
    }
    return value;
}

export function ensureBoolean(value: boolean) {
    if (typeof value !== 'boolean') {
        throw createInvariant(value);
    }
    return value;
}

export function nonUndefined<T extends CheckUnion<T, undefined, 'value should be undefined union'>>(value: T) {
    if (value === undefined) {
        throw createInvariant(value);
    }
    return value as NonUndefined<T>;
}

export function nonNull<T extends CheckUnion<T, null, 'value should be null union'>>(value: T) {
    if (value === null) {
        throw createInvariant(value);
    }
    return value as NonNull<T>;
}

export function nonNullable<T extends CheckUnion<T, undefined | null, 'value should be null | undefined union'>>(value: T) {
    if (value === null || value === undefined) {
        throw createInvariant(value);
    }
    return value as NonNullable<T>;
}

export function ensureHTMLElement<T>(value: EventTarget) {
    if (!(value instanceof HTMLElement)) {
        throw createInvariant('node');
    }
    return value;
}

export function never(): never;
export function never(value: never): never;
export function never(value?: unknown): never {
    debugger;
    throw new Error(`Never possible value: ${JSON.stringify(value)}`);
}

export function hardCast<T>(value: unknown): T {
    return value as T;
}

function createInvariant(value: unknown) {
    debugger;
    return new Error(`Value should not to be ${JSON.stringify(value)}`);
}

type CheckUnion<A, B, V> = B extends A ? unknown : V;
type NonUndefined<T> = T extends undefined ? never : T;
type NonNull<T> = T extends null ? never : T;