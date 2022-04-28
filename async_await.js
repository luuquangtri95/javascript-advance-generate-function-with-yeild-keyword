let x = 0;

async function test() {
  x = x + (await 2); // x = 0 + await Promise.resolve(2)
  console.log("line 5", x); //2
}

test();

x += 1;
console.log("line 9", x); // 1

//

function fakeGetData() {
  setTimeout(() => console.log("7. timeout"));

  console.log("1. before promise");

  new Promise((resolve, reject) => {
    console.log("2. in promise");

    resolve(1);
  }).then((res) => {
    console.log("5. res then data", res);
  });

  console.log("3. after promise");
}

async function handleData() {
  /**
   * hàm fakeGetData trả về undefined
   * => await lúc này là => await undefined
   * mà await undefined tương đương => await Promise.resolve(undefined)
   */
  await fakeGetData();
  console.log("6. handleData");
}

handleData();
console.log("4. after handleData()");
