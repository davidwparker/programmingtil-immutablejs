STARTING OFF:
Make sure you have npm installed.

Run:
```
$ npm install
$ npm start
```

View at: http://localhost:8080/

CONCEPTS:
ImmutableJS Seq - construction, static methods, types, members, force evaluation, values equality.

Seq:
* Represents a sequence of values, but may not be backed by a concrete data structure.
* Seq is immutable — Once a Seq is created, it cannot be changed, appended to, rearranged or otherwise modified. Instead, any mutative method called on a Seq will return a new Seq.
* Seq is lazy — Seq does as little work as necessary to respond to any method call. Values are often created during iteration, including implicit iteration when reducing or converting to a concrete data structure such as a List or JavaScript Array.

RESOURCES:
* https://github.com/davidwparker/programmingtil-immutablejs/tree/master/0003-seq-part-1
* https://facebook.github.io/immutable-js/docs/#/Seq
