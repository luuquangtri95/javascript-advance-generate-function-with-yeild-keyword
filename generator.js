/**
 * todo: từ kháo yeild gần giống như return
 */

debugger;

function* calcSum1() {
  const a = yield;
  const b = yield;

  return a + b;
}

const genObj1 = calcSum1();

const data1 = genObj1.next(); // {value:undefined, done: false}
const data2 = genObj1.next(20); //{value:undefined, done: false}
const data3 = genObj1.next(50); //{value:20 + 50, done: true}

console.log(data1);
console.log(data2);
console.log(data3);

console.log(genObj1);

// *************************************************************************************************

function* calcSum2() {
  const a = yield 30;
  const b = yield 60;

  return a + b;
}

const genObj2 = calcSum2();

const data4 = genObj2.next(); // {value:30, done: false}
const data5 = genObj2.next(20); //{value:60, done: false}
const data6 = genObj2.next(50); //{value:20 + 50, done: true}

console.log(data4);
console.log(data5);
console.log(data6);

console.log(genObj2);

function* calcSum3() {
  const a = (yield 30) + 200; // 220
  const b = (yield 60) + 100; // 150

  return a + b;
}

const genObj3 = calcSum3();

const data7 = genObj3.next(); // {value:30, done: false}
const data8 = genObj3.next(20); //{value:60, done: false}
const data9 = genObj3.next(50); //{value:220 + 150, done: true}

console.log(data7);
console.log(data8);
console.log(data9);

console.log(genObj3);

// *************************************************************************************************

function* calcSum() {
  const a = yield 30 + 200; // 20
  const b = yield 60 + 100; // 50

  return a + b;
}

const genObj = calcSum();

const data10 = genObj.next(); // {value:230, done: false}
const data11 = genObj.next(20); //{value:160, done: false}
const data12 = genObj.next(50); //{value:20 + 50, done: true}

console.log(data10);
console.log(data11);
console.log(data12);

console.log(genObj);
