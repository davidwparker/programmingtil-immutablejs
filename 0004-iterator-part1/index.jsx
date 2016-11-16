import { Seq } from 'immutable';

// Reading Values
var a = Seq({
  1: 'abc',
  2:'def',
  5:123,
  'abc':455,
  'hmm': undefined,
  'deep': Seq({ 'in': Seq({ 'here': 'yesss' }) }),
  'deep2': { 'in': { 'here': 'yesss' }},
});
console.log('Reading Values');

// get(key: K, notSetValue?: V): V
console.log('get:', a.get(1));
console.log('get:', a.get('abc'));
console.log('get:', a.get('hmm'));
console.log('get:', a.get('hmm', true));
console.log('get:', a.get('hmm2', false));

// has(key: K): boolean
console.log('has:', a.has(1));
console.log('has:', a.has('abc'));
console.log('has:', a.has('hmm2'));

// includes(value: V): boolean
console.log('includes:', a.includes(123));
console.log('includes:', a.includes(456));

// first(): V
console.log('first:', a.includes());

// last(): V
console.log('last:', a.last());
console.log('');

// Reading Deep Values
console.log('Reading Deep Values');
// getIn(searchKeyPath: Array<any>, notSetValue?: any): any
// getIn(searchKeyPath: Iterable<any, any>, notSetValue?: any): any
console.log('getIn:', a.getIn(['abc']));
console.log('getIn:', a.getIn(['cde', 'abc']));
console.log('getIn:', a.getIn(['deep']));
console.log('getIn:', a.getIn(['deep', 'in']));
console.log('getIn:', a.getIn(['deep', 'in', 'here']));
console.log('getIn:', a.getIn(['deep2']));
console.log('getIn:', a.getIn(['deep2', 'in']));

// hasIn(searchKeyPath: Array<any>): boolean
// hasIn(searchKeyPath: Iterable<any, any>): boolean
console.log('hasIn:', a.hasIn(['abc']));
console.log('hasIn:', a.hasIn(['cde', 'abc']));
console.log('hasIn:', a.hasIn(['deep']));
console.log('hasIn:', a.hasIn(['deep', 'in']));
console.log('hasIn:', a.hasIn(['deep', 'in', 'here']));
console.log('hasIn:', a.hasIn(['deep2']));
console.log('hasIn:', a.hasIn(['deep2', 'in']));
console.log('');

// // Conversion to JavaScript types
console.log('Conversion to JavaScript types');
console.log(a.toJS());
console.log(a.toArray());
console.log(a.toObject());
console.log('');
