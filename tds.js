//  start TDZ
// cannot access age variable before initialization
// debugger;
let age = 20;

{
  // start TDZ
  // không thể truy cập name khi chưa được thực thi
  debugger;
  let name = "tri";
  let fullName;
}
