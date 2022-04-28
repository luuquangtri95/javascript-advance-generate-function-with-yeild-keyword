function* testApi() {
  const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = yield res.json();
  console.log(data);
}

const genObj = testApi();
genObj.next().value.then((res) => {
  genObj.next(res).value.then((data) => {
    genObj.next(data);
  });
});
