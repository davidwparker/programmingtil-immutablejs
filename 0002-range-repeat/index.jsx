import { Range, Repeat } from 'immutable';

console.log(Range);
console.log(Range());
console.log(Range(10));
console.log(Range(10, 20));
console.log(Range(10, 20, 3));
console.log(Range(20, 10));
console.log(Range(20, 10, 3));
console.log(Range(20, 20));
console.log(Range(20, 20, 2));
console.log('');

const someRange = Range(10, 20, 3);
console.log('size', someRange.size);
console.log('toSeq', someRange.toSeq());
console.log('toKeyedSeq', someRange.toKeyedSeq());
console.log('toIndexedSeq', someRange.toIndexedSeq());
console.log('toSetSeq', someRange.toSetSeq());
console.log('cacheResult', someRange.cacheResult());
console.log('get', someRange.get(13));
console.log('has', someRange.has(13));
console.log('includes', someRange.includes(13));
console.log('first', someRange.first());
console.log('last', someRange.last());
console.log('toArray', someRange.toArray());
console.log('');

console.log(Repeat);
console.log(Repeat());
console.log(Repeat("oh hai"));
console.log(Repeat("oh hai", 3));
console.log('');

const someRepeat = Repeat("oh hai", 3)
console.log('size', someRepeat.size);
console.log('toSeq', someRepeat.toSeq());
console.log('toKeyedSeq', someRepeat.toKeyedSeq());
console.log('toIndexedSeq', someRepeat.toIndexedSeq());
console.log('toSetSeq', someRepeat.toSetSeq());
console.log('cacheResult', someRepeat.cacheResult());
console.log('get', someRepeat.get("oh hai"));
console.log('has', someRepeat.has("oh hai"));
console.log('includes', someRepeat.includes("oh hai"));
console.log('first', someRepeat.first());
console.log('last', someRepeat.last());
console.log('toArray', someRepeat.toArray());
console.log('');
