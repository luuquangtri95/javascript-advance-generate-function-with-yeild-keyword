function fakeGetData(url, callback) {
  const fakeData = {
    "https://zendvn.com/api/1": "Data1",
    "https://zendvn.com/api/2": "Data2",
    "https://zendvn.com/api/3": "Data3",
  };

  let randomMilisecond = Math.floor(Math.random() * 5000) + 1000;

  console.log(`đang gọi api với url: ${url} - thời gian ${randomMilisecond}`);

  setTimeout(() => {
    callback(fakeData[url]);
  }, randomMilisecond);
}

// fakeGetData("https://zendvn.com/api/1", (res1) => {
//   fakeGetData("https://zendvn.com/api/2", (res2) => {
//     fakeGetData("https://zendvn.com/api/3", (res3) => {
//       console.log(res1);
//       console.log(res2);
//       console.log(res3);
//     });
//   });
// });

function startRunApi(url) {
  let response;
  let callbackSaved = null;

  fakeGetData(url, (data) => {
    if (callbackSaved !== null) {
      callbackSaved(data);
    } else {
      response = data;
    }
  });

  return function getData(callback) {
    if (response !== undefined) {
      callback(response);
    } else {
      callbackSaved = callback;
    }
  };
}

const getData1 = startRunApi("https://zendvn.com/api/1");
const getData2 = startRunApi("https://zendvn.com/api/2");
const getData3 = startRunApi("https://zendvn.com/api/3");

getData1((res1) => {
  console.log(res1);
  getData2((res2) => {
    console.log(res2);
    getData3((res3) => {
      console.log(res3);
    });
  });
});
