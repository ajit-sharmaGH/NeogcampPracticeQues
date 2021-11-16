const inputText = document.querySelector("#input")
const btnGreen = document.querySelector("#green")
const btnRed = document.querySelector("#red")
const btnBlue = document.querySelector("#blue")
btnGreen.addEventListener("click", () => {
    input.style.color = "green";
})
btnRed.addEventListener("click", () => {
    input.style.color = "red";
})
btnBlue.addEventListener("click", () => {
    input.style.color = "blue";
})