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

export function nonUndefined<T>(value: T | undefined) {
    if (value === undefined) {
        throw createInvariant(value);
    }
    return value;
}

export function nonNull<T>(value: T | null) {
    if (value === null) {
        throw createInvariant(value);
    }
    return value;
}

export function nonNullable<T>(value: T | undefined | null) {
    if (value === null || value === undefined) {
        throw createInvariant(value);
    }
    return value;
}

export function ensureHTMLElement<T>(value: EventTarget) {
    if (!(value instanceof HTMLElement)) {
        throw createInvariant('node');
    }
    return value;
}

function createInvariant(value: unknown) {
    debugger;
    return new Error(`Value should not to be ${JSON.stringify(value)}`);
}
