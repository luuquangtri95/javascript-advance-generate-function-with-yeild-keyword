// function App() {
//   let postList;
//   let callbackSaved = null;
//   const pagination = {
//     _page: 1,
//     _limit: 10,
//     _totalRows: 1,
//   };
//   const filters = { _page: 1, _limit: 10 };

//   (async function useEffect2() {
//     const jsonString = JSON.stringify(filters);
//     const url = `https://js-post-api.herokuapp.com/api/posts?${jsonString}`;
//     const resData = await fetch(url);
//     const fullData = await resData.json();

//     postList = fullData;
//     if (callbackSaved !== null) {
//       callbackSaved(postList);
//     } else {
//       postList = fullData;
//     }
//   })();

//   function getPostList(callback) {
//     if (postList !== undefined) {
//       callback(postList);
//     } else {
//       callbackSaved = callback;
//     }
//   }

//   return {
//     getPostList,
//   };
// }

// const app2 = App();

// app2.getPostList((res) => console.log(res));
// debugger;
function App() {
  let postList;
  let callbackFunc;
  const pagination = {
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  };
  const filters = { _page: 1, _limit: 10 };

  (async function useEffect2() {
    const jsonString = JSON.stringify(filters);
    const url = `https://js-post-api.herokuapp.com/api/posts?${jsonString}`;
    const resData = await fetch(url);
    const fullData = await resData.json();

    if (callbackFunc !== undefined) {
      callbackFunc(fullData);
    } else {
      postList = fullData;
    }
  })();

  function getPostList(callback) {
    if (callbackFunc !== undefined) {
      callback(postList);
    } else {
      callbackFunc = callback;
    }
  }

  return {
    getPostList,
  };
}

const app2 = App(); // {getPostList}
app2.getPostList((res) => console.log(res));

//
