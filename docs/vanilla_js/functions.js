// rest parameters 가변적으로 값을 넣어줄 수 있음
// printRestParams(parameter1, parameter2, parameter3)
function printRestParams(...args) {
  // args는 변수 이름
  let restParam = (arg) => {
    if (typeof arg == "object") {
    }
    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, [4, 3, 2], 5, 6, 7);
}
