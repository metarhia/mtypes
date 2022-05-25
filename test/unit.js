'use strict';

const metatests = require('metatests');
const mtypes = require('..');

metatests.test('Test', async (test) => {
  test.strictSame(typeof mtypes, 'object');
  test.end();
});
