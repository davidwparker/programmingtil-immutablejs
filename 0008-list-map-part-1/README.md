## STARTING OFF:

Make sure you have npm installed.

Run:
```
$ npm install
$ npm start
```

View in console.

## CONCEPTS:

ImmutableJS List - Constructors, Static Methods, Members, Deep persistent changes

Lists are immutable and fully persistent with O(log32 N) gets and sets, and O(1) push and pop.

Lists implement Deque, with efficient addition and removal from both the end (push, pop) and beginning (unshift, shift).

Unlike a JavaScript Array, there is no distinction between an "unset" index and an index set to undefined. List#forEach visits all indices from 0 to size, regardless of whether they were explicitly defined.

Immutable Map is an unordered Iterable.Keyed of (key, value) pairs with O(log32 N) gets and O(log32 N) persistent sets.
class Map<K, V> extends Collection.Keyed<K, V>

Iteration order of a Map is undefined, however is stable. Multiple iterations of the same Map will iterate in the same order.

Map's keys can be of any type, and use Immutable.is() to determine key equality. This allows the use of any value (including NaN) as a key.

Because Immutable.is returns equality based on value semantics, and Immutable collections are treated as values, any Immutable collection may be used as a key.

Map().set(List.of(1), 'listofone').get(List.of(1));
// 'listofone'
Any JavaScript object may be used as a key, however strict identity is used to evaluate key equality. Two similar looking objects will represent two different keys.

Implemented by a hash-array mapped trie.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-immutablejs/tree/master/0008-list-part-1
* https://facebook.github.io/immutable-js/docs/#/List
* https://facebook.github.io/immutable-js/docs/#/Map
