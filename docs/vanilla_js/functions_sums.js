// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

function sum(item) {
  let sum = 0;
  for (let items of item) {
    sum += items;
  }
  return sum;
}

{
  let sum_number = [1, 2, 3, 4, 5];
  let result = sum(item);
  console.log(result);
}
