## STARTING OFF:

Make sure you have npm installed.

Run:
```
$ npm install
$ npm start
```

View in console.

## CONCEPTS:

ImmutableJS List -

Lists are immutable and fully persistent with O(log32 N) gets and sets, and O(1) push and pop.

Lists implement Deque, with efficient addition and removal from both the end (push, pop) and beginning (unshift, shift).

Unlike a JavaScript Array, there is no distinction between an "unset" index and an index set to undefined. List#forEach visits all indices from 0 to size, regardless of whether they were explicitly defined.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-immutablejs/tree/master/0008-list-part-1
* https://facebook.github.io/immutable-js/docs/#/List
* https://facebook.github.io/immutable-js/docs/#/Map
