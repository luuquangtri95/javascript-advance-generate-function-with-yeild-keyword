/**
 * ! iterator: Iterators là một bộ duyệt dùng để duyệt qua một mảng, một danh sách hoặc một collection mà qua mỗi lần duyệt sẽ ghi lại vị trí đã duyệt để từ đó có thể biết và lấy vị trí tiếp theo.

Trong Javascript thì iterators có chung cấp phương thức next() và phương thức này sẽ return về phần tử kết tiếp, đồng thời ghi nhận luôn phần tử đã lặp là phần tử next(). Phương thức next() sẽ return về một Object gồm hai thuộc tính là value và done.
 */

/**
 * Iterable:  là khả năng cho phép các đối tượng trong Javascript sử dụng các kỹ thuật xử lý dữ liệu như for of loop, toán tử ba chấm ....
 * =>> Với ES6 thì các đối tượng như Array, Object, Map, WeakMap, Set, WeakSet đều là đối tượng Iterable
 */

/**
 * requirement:
 * lập từng phần tử của array theo thời gian không cố định
 * khi nào gọi hàm next() sẽ lập 1 lần
 * next()tra về 1 object có value và done
 *  - value: giá trị mỗi phần tử
 *  - done là giá trị boolean cho biết có còn lập đc nữa hay k
 */

function createIterator(arr) {
  let index = 0;
  return {
    next() {
      let value = arr[index];
      let done = value !== undefined ? false : true;

      index++;

      return {
        value,
        done,
      };
    },
  };
}

const arrayList = [1, 2, 3];
const iterator = createIterator(arrayList);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// overwrite cách chạy của 1 vòng for

let arr = [1, 2, 3];

arr[Symbol.iterator] = function () {
  let count = 0;
  return {
    next() {
      let value = count;
      let done = count > 10 ? true : false;
      count++;
      return {
        value,
        done,
      };
    },
  };
};

for (const item of arr) {
  console.log(item);
}

// iterator với object
const objJoin = {
  firstName: "join",
  lastName: "Smith",
  age: 30,
  className: "12a7",
};

objJoin[Symbol.iterator] = function () {
  let thisJoin = this;
  let keys = Object.keys(thisJoin);
  let index = -1;
  return {
    next: () => {
      index++;
      const key = keys[index];
      const value = thisJoin[key];
      const done = index > keys.length - 1 ? true : false;
      return {
        value,
        done,
      };
    },
  };
};

for (const item of objJoin) {
  console.log(item);
}
