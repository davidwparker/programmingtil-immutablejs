import { Record } from 'immutable';

console.log(Record);

const MyRecordType = Record({
  awesome:true,
  snap:"I've snapped"
});
const myRecord = new MyRecordType({special:false});
const unsnappedRecord = new MyRecordType({snap:"I didn't snap"});

console.log(myRecord);
console.log(myRecord.size);
console.log(myRecord.get('snap'));
console.log(unsnappedRecord.get('snap'));

// Removing a key sets the new returned instance back to the original value
const unsnappedRecordWithoutSnap = unsnappedRecord.remove('snap');
console.log(unsnappedRecordWithoutSnap.get('snap'));

// keys not defined by the original Record above are ignored
console.log(myRecord.get('special'));

// can use property access
console.log(myRecord.awesome);
