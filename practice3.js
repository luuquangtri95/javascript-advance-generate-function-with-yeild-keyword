debugger;
var x = 10;

one();

function one() {
  var y = 5;
  two();

  function two() {
    var z = 15;
    three();

    function three() {
      var t = x + y + z;
      console.log("x+y+z", t);
      four();
    }
  }
}

function four() {
  var t = 40;
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(t);
}

/**
 * ! global: x: 10 , one: function, four: function
 *    local one: y: 5, two: function
 *        local two: z: 15, three: function
 *            local three: t: 15 + 5 + 10 = 30, hàm four nó sẽ chạy ngược lên trên tìm, và four nằm ở global
 *
 * ! local four:  t: 40, kế thừa toàn bộ từ global(x: 10 , one: function, four: function)
 */
