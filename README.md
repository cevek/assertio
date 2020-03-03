# Assertio
Assertio is a tiny assertion library, similar to Node's built-in assert. 
It makes testing much easier by giving you lots of assertions you can run against your code.


## Assertations
* `assert(value: boolean, msg?)`
* `assertFn(value: () => boolean, msg?)`
* `ensureArray(value, msg?)`
* `ensureObject(value, msg?)`
* `ensureString(value, msg?)`
* `ensureNumber(value, msg?)`
* `ensureBoolean(value, msg?)`
* `ensureNonVoid(value, msg?)`
* `ensureNonNull(value, msg?)`
* `ensureNonNullable(value, msg?)`
* `nonVoid(value, msg?)`
* `nonNull(value, msg?)`
* `nonNullable(value, msg?)`
* `never(msg?)`
* `neverValue(value, msg?)`
* `castValue(value)`
* `cast(value)`
* `as(value)`
* `maybe(value)`


## TypeScript transformer plugin
Assertio has a typescript transformer plugin to remove all assertations on production. 
See how to use typescript plugins https://github.com/cevek/ttypescript

`tsconfig.json`
```
{
    "compilerOptions": {
        // ...
        "plugins": [
            { "transform": "assertio/transform" },
        ]
    }
}
```
