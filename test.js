const bundle = require('fs').readFileSync('./test/globals/bundle.js', 'utf8');
console.assert(bundle === `"use strict";
function assert(val) {
    throw 1;
}
function nonNull(val) {
    return val;
}
function x() {
    var y = 1 + 2;
    return 1;
}
`);

const example = require('fs').readFileSync('./test/imports/dist/example.js', 'utf8');
console.assert(example === `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function x() {
    var y = 1 + 2;
    return 1;
}
`);


console.log('All test passed');