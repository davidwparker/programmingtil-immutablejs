## STARTING OFF:

Make sure you have npm installed.

Run:
```
$ npm install
$ npm start
```

View in console.

## CONCEPTS:

ImmutableJS Set and OrderedSet -

Set: A Collection of unique values with O(log32 N) adds and has.
When iterating a Set, the entries will be (value, value) pairs.
Iteration order of a Set is undefined, however is stable.
Multiple iterations of the same Set will iterate in the same order.

OrderedSet: A type of Set that has the additional guarantee that the iteration
order of values will be the order in which they were added.

Note that OrderedSet are more expensive than non-ordered Set and may consume more memory.
OrderedSet#add is amortized O(log32 N), but not stable.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-immutablejs/tree/master/0011-sets
* https://facebook.github.io/immutable-js/docs/#/Set
* https://facebook.github.io/immutable-js/docs/#/OrderedSet
