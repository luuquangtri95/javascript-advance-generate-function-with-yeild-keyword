console.log("hello");

setTimeout(function marco() {
  console.log("marco task");
}, 0);

fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log("script");
