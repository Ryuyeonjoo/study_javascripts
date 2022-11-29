// 텍스트 입력하면 화면에 띄우기

let queryInputTexts = document.querySelector("#inputId");
let querybtnId = document.querySelector("#btnid");
let querylistId = document.querySelector("#listid");

// 텍스트 추가
querybtnId.addEventListener("click", (event) => {
  newText(event);
});

//enter키 입력시 문구 추가
queryInputTexts.addEventListener("keydown", ({ key, isComposing }) => {
  if (isComposing === "true") {
    return;
  }
  if (key == "Enter") {
    newText();
  }
});

// 문구 추가
let newText = () => {
  if (queryInputTexts.value != "" && queryInputTexts.value != "undefined") {
    let newitem = `<div class="inputbox" >
    <div class="inputtext" id="newtext"> ${queryInputTexts.value} </div>
    <span> <i class="material-icons" id="like">favorite_border</i></span>
    <span> <i class="material-icons" id="delete">delete</i></span>
    </div>`;
    // 문구 추가
    querylistId.insertAdjacentHTML("beforeend", newitem);
  } else {
    alert(`내용을 입력하세요.`);
  }
};
// 좋아요, 삭제버튼
querylistId.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.remove();
  }
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
    return;
  }
  if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
    return;
  }
});