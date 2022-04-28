debugger;

function _useState(initialValue) {
  let val = initialValue;

  function setState(newVal) {
    if (typeof newVal === "function") {
      val = newVal(val);
    } else {
      val = newVal;
    }

    return val;
  }

  return [val, setState];
}

const [foo, setFoo] = _useState(2);

setFoo((prevState) => prevState + 2);
setFoo((prevState) => prevState + 2);
setFoo((prevState) => prevState + 2);

/**
 * vì sao khi setState cần dùng callback
 *
 * nếu setState là dạng number thông thường ví dụ:
 * setFoo(foo + 2) => lúc này foo giá trị là 2 và công thêm 2 = 4, và có gọi n lần như v thì giá trị vẫn là 4
 *
 * nếu setState là dạng callback
 * setFoo((prevState) => prevState + 2); => tại hàm cha trong closure sẽ truyền argument cho hàm callback, và hàm này thực hiện tính toán từ giá
 * trị cũ và return về giá trị mới => và update vào biến val, lúc này biến val lúc nào giá trị cũng là mới nhất
 *
 * ! vậy khi nào dùng callback và không dùng callback
 * không dùng callback khi state mới hoàn toàn k phụ thuộc state cũ
 * trường hợp phụ thuốc state cũ phải dùng callback
 */
