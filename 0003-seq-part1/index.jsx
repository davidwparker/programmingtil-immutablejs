import { Seq } from 'immutable';

console.log(Seq);
console.log('');

// Constructors
// Seq<K, V>(): Seq<K, V>
// Seq<K, V>(seq: Seq<K, V>): Seq<K, V>
// Seq<K, V>(iterable: Iterable<K, V>): Seq<K, V>
// Seq<T>(array: Array<T>): Seq.Indexed<T>
// Seq<V>(obj: {[key: string]: V}): Seq.Keyed<string, V>
// Seq<T>(iterator: Iterator<T>): Seq.Indexed<T>
// Seq<T>(iterable: Object): Seq.Indexed<T>
console.log('Constructors');
console.log(Seq());
var a = Seq({1: 'abc', 2:'def', 5:123, 'abc':455 });
console.log(a);

var b = Seq(a);
console.log(b);

var arr = [1,2,3,5,'abc'];
var c = Seq(arr);
console.log(c);
console.log('');

// Static methods
console.log('Static Methods');
console.log(Seq.isSeq(a));
console.log(Seq.of(1,2,4,'def'));
console.log('');

// Types
console.log('Types');
console.log(Seq.Keyed(a));
console.log(Seq.Indexed(a));
console.log(Seq.Set(a));
console.log('');

// Members
console.log('Members');
console.log(a.size);
console.log('');

// Force evaluation
console.log('Force Evaluation');
console.log(a.cacheResult());
// evaluates map 6 times
var squares = Seq.of(1,2,3).map(x => x * x);
console.log(squares.join() + ','+ squares.join());
// evaluates map 3 times
var squares2 = Seq.of(1,2,3).map(x => x * x).cacheResult();
console.log(squares2.join() + ',' + squares2.join());
console.log('');

// Values equality
console.log('Values Equality');
console.log(a.equals(a));
console.log(a.equals(b));
console.log(a.equals(c));
// True if this and the other Iterable have value equality, as defined by Immutable.is().

console.log(a.hashCode());
// If two values have the same hashCode, they are not guaranteed to be equal.
// If two values have different hashCodes, they must not be equal.
console.log('');
