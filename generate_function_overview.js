/**
 * - generate object là 1 object đặc biệt được return từ một generate function
 * - generate function là 1 hàm đặc biệt trong javascript được khai báo bằng từ khóa function*
 *
 * - phương thức này được gọi sẽ return 1 generate object
 *
 * - phương thức có tính năng tạm dừng tại 1 dòng lệnh bất kì trong khoảng tg theo ý muốn
 * sau đó có thể tiếp tục thực thi chương trình và giữ nguyên đc các trạng thái và ngữ cảnh (state and context) trong
 * lần chạy trước đó
 *
 * - các state và context sẽ được lưu vào generate Object dưới dạng hidden properties
 *
 * [[generatorLocation]] : vị trí code đã tạm dừng trước đó
 * [[generateState]] : trạng thái của hàm
 * [[generateFunction]]
 * [[generateReceiver]]
 * [[generateScope]]: scope của các biến môi trường xung quanh
 *
 *
 * ! =>> để tạm dừng hàm ở dòng bất kì dùng từ khóa "yeild" (hiểu nôm na yeild vừa là hàm return + tạm dừng hàm)
 *
 * todo: để quay trở lại hàm thực thi tiếp thì gọi genObj.next()
 *
 * một geneator Object vừa là iterator , vừa là iterable
 *
 * iterator: thực hiện hàm next() và trả về {value, done}
 * iterable: thực hiện method Symbol.iterator
 */

function* generateFunction() {
  console.log("gen function 1");
  yield 30;

  console.log("gen function 2");
  yield 100;

  console.log("gen function 3");
  yield [
    {
      id: 1,
      name: "tri",
    },
    {
      id: 2,
      name: "hoang",
    },
  ];

  console.log("gen function 4");
}

const genObj = generateFunction(); // ! trả về chỗ này là "generate object" chưa thực thi ngay

console.log(genObj.next()); // !=> khi gọi hàm next() hàm mới bắt đầu chạy bên trong

const data1 = genObj.next(); // {value: 30, done: false}

console.log("...................3s....................");
const data2 = genObj.next(); // {value: 100, done: false}

console.log("...................5s....................");
const data3 = genObj.next(); // {value: 100, done: false}
const data4 = genObj.next(); // {value: undefined, done: true}

// function normalGenerator() {
//   console.log("a");
// }

// const test = normalGenerator();
