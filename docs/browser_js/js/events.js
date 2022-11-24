function changeText(){
    let queryChangeText = document.querySelector('#changetext');
    queryChangeText.innerHTML = "Change on Me!";
}

let queryClickAlert = document.querySelector('#clickalert');
        // element.addEventListner(event, function, useCapture);
        queryClickAlert.addEventListener("click", clickAlert);
        function clickAlert() {
            alert("click on Me!")
        }

let queryButton = document.querySelector("#buttuonChangeText");
queryButton.addEventListener("click", targetText);

function targetText(event){
    let queryTargetText = document.querySelector("#targetText");
    queryTargetText.innerHTML = "Target Text!";
}