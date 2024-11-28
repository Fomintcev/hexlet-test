import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert(capitalize('') === '');
assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены');
