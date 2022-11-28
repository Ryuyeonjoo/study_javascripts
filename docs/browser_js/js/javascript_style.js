let queryremove = document.querySelector("#remove");
queryremove.addEventListener("click", (event) => {
  removeEvent(event);
});

let queryhide = document.querySelector("#hide");
queryhide.addEventListener("click", (event) => {
  hideEvent(event);
});

let queryreset = document.querySelector("#reset");
queryreset.addEventListener("click", (event) => {
  resetEvent(event);
});

function removeEvent(event) {
  documentRemove = document.querySelector("#remove");
  documentRemove.style.display = "none";
}

function hideEvent(event) {
  documentHide = document.querySelector("#hide");
  documentHide.style.visibility = "hidden";
}

function resetEvent(event) {
  documentReset = document.querySelector("#reset");
  documentReset.style.display = "block";
  documentHide.style.visibility = "visible";
}