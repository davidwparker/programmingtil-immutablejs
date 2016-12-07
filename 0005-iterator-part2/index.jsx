import { Seq } from 'immutable';

var a = Seq({
  1: 'abc',
  5: 123,
  'abc':455,
  'hmm': undefined,
  'deep': Seq({ 'in': Seq({ 'here': 'yesss' }) }),
  'deep2': { 'in': { 'here': 'yesss' }},
});

// Conversion to Collections
console.log('Conversion to Collections');

// toMap(): Map<K, V>
console.log('toMap:', a.toMap());

// toOrderedMap(): OrderedMap<K, V>
console.log('toOrderedMap:', a.toOrderedMap());

// toSet(): Set<V>
console.log('toSet:', a.toSet());

// toOrderedSet(): OrderedSet<V>
console.log('toOrderedSet:', a.toOrderedSet());

// toList(): List<V>
console.log('toList:', a.toList());

// toStack(): List<V>
console.log('toStack:', a.toStack());

console.log('');

// Conversion to Seq
console.log('Conversion to Seq');
// toSeq(): Seq<K, V>
console.log('toSeq:', a.toSeq());

// toKeyedSeq(): Seq.Keyed<K, V>
console.log('toKeyedSeq:', a.toKeyedSeq());

// toIndexedSeq(): Seq.Indexed<V>
console.log('toIndexedSeq:', a.toIndexedSeq());

// toSetSeq(): Seq.Set<V>
console.log('toSetSeq:', a.toSetSeq());
console.log('');

// Iterators
// Note: these return an ES6 iterator which does not support Immutable JS sequence algorithms.
console.log('Iterators');
// keys(): Iterator<K>
console.log('keys:', a.keys());

// values(): Iterator<V>
console.log('values:', a.values());

// entries(): Iterator<Array<any>>
console.log('entries:', a.entries());
console.log('');

// Iterables (Seq)
console.log('Iterables');
// keySeq(): Iterator<K>
console.log('keySeq:', a.keySeq());

// valueSeq(): Iterator<V>
console.log('valueSeq:', a.valueSeq());

// entrySeq(): Iterator<Array<any>>
console.log('entrSeq:', a.entrySeq());
console.log('');
