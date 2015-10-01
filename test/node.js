var test = require('ava');
var isBabel = require('../index.es5');

test('should return true', function (t) {
  t.plan(1);
  t.false(isBabel);
});
