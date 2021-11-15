const inputText = document.querySelector("#inputText");
const plusText = document.querySelector("#plus");
const minusText = document.querySelector("#minus");
// const outputResult=document.querySelector("#output");
let size = 20;

function increase() {
    size = size + 2;
    inputText.style.fontSize = `${size}px`;

}

function decrease() {
    size = size - 2;
    inputText.style.fontSize = `${size}px`;


}


plusText.addEventListener("click", increase)
minusText.addEventListener("click", decrease)