function fakeGetData(url) {
  let fakeResponse = {
    "https://test.com/api/1": "data1",
    "https://test.com/api/2": "data2",
    "https://test.com/api/3": "data3",
  };

  let randomMilisecond = Math.floor(Math.random() * 5000) + 1000;

  console.log(`đang gọi api với url ${url} - thời gian ${randomMilisecond}`);

  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(fakeResponse[url]);
    }, randomMilisecond);
  });
}

// function* handleData() {
//   const response = yield fakeGetData("https://test.com/api/1");

//   console.log(response);
// }

// const genObj = handleData();

// genObj.next().value.then((result) => genObj.next(result));

// ! chuyển từ generate function sang async await
async function handleData() {
  const response = await fakeGetData("https://test.com/api/1");

  console.log(response);
}

const result = handleData();
console.log(result);
