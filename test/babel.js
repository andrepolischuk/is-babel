import test from 'ava';
import isBabel from '../index';

test('should return true', t => {
  t.plan(1);
  t.true(isBabel);
});
