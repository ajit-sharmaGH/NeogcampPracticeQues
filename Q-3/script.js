const input = document.querySelector("#input")
const buttonOne = document.querySelector("#btnOne")
const buttonTwo = document.querySelector("#btnTwo")
    //const outputDiv = document.querySelector("#output")

let size = 6;
buttonOne.addEventListener("click", () => {

    size = size + 2;
    input.style.fontSize = `${size}px`;
    input.style.border = "solid 5px";
    console.log("click")
})
buttonTwo.addEventListener("click", () => {

    size = size - 2;
    input.style.fontSize = `${size}px`;
    input.style.border = "solid 2px";
})