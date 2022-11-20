// 화면 정의서 대로 출력
// datatypes는 object와 array 이용
// function은 최소 3개 만들기
// 입력방식 console로 받는게 아닌 filesync로 받기 (답변은 미리 file에 저장된 것을 사용.)

// 프로세스 입력 - 처리 - 출력
// 입력 :
// option: orders가 현재 표시된 상태를 순서대로 만들기
// +문항에 대한 사항 : object in array - [{object}, {문항}]
// +설문 답항에 대한 사항 : [{설문 답항}, {설문 답항}, {설문 답항}]
// +답변에 대한 사항 : [1, 2, 4, 3]  -> 외부에서 받아온 답변

// 처리
// 문항, 설문 답항, 답변을 매칭을 해서 화면정의서와 같이 출력

// 출력
// 매칭 출력
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/javascriptWithPoll.txt";

let inputs = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);

let input_answers = [];
for (let i = 0; i < 5; i++) {
  input_answers[i] = input[i];
}


// =======================================입력=======================================
// 문항
const questions_list = [
  {questions_uid: "Q1", question: "해당 매장을 방문시 매장은 청결 하였습니까?", orders: 1},
  {questions_uid: "Q4", question: "직원이 제조한 음료에 대해 맛은 좋았습니까?", orders: 4},
  {questions_uid: "Q2", question: "주문시 직원은 고객님께 친절 하였습니까?", orders: 2},
  {questions_uid: "Q5", question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?", orders: 5},
  {questions_uid: "Q3", question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?", orders: 3},
];

//설문 답항
const example_list = [
  { example_uid: "E5", example: "매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "그렇다", orders: 4 },
  { example_uid: "E2", example: "아니다", orders: 2 },
  { example_uid: "E3", example: "보통이다", orders: 3 },
];

const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];


let idx;
let compare;
for(idx = 0; idx < answers.length; idx++) {
  if(compare != answers[idx]["questions_uid"] ){
  console.log(`!= : ${answers[idx]["questions_uid"]}`);
  console.log(`!= ${answers[idx]["example_uid"]}`);
} else {
  console.log(`== ${answers[idx]["example_uid"]}`);
}
compare = answers[idx]["questions_uid"];
}

console.log(`answers.length : ${answers.length}, index: ${idx}`);