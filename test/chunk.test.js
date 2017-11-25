import test from 'ava';
import chunk from '../src/chunk';
test('chunk test1', t => {
    t.deepEqual(chunk([1,2,3,4], 1), [[1], [2], [3], [4]]);
});

test('chunk test2', t => {
    t.deepEqual(chunk([1,2,3,4], 2), [[1, 2], [3, 4]]);
});

test('chunk test1', t => {
    t.deepEqual(chunk([1,2,3,4], 3), [[1,2,3], [4]]);
});

