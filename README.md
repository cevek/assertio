# Assertio
Assertio is a tiny assertion library, similar to Node's built-in assert. 
It makes testing much easier by giving you lots of assertions you can run against your code.


## Assertations
* `assert(value: boolean, msg?: string)`
* `ensureArray(value)`
* `ensureObject(value)`
* `ensureString(value)`
* `ensureNumber(value)`
* `ensureBoolean(value)`
* `nonUndefined(value)`
* `nonNull(value)`
* `nonNullable(value)` - non null and non undefined


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
