const inputOne = document.querySelector("#inputOne");
const inputTwo = document.querySelector("#inputTwo");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#sub");
const multiplication = document.querySelector("#multi");
const division = document.querySelector("#div");
const output = document.querySelector("#output");

function addFun() {

    output.innerText = Number(inputOne.value) + Number(inputTwo.value);
}

function subFun() {

    output.innerHTML = Number(inputOne.value) - Number(inputTwo.value);
}

function multiFun() {

    output.innerHTML = Number(inputOne.value) * Number(inputTwo.value);
}

function divFun() {

    output.innerHTML = Number(inputOne.value) / Number(inputTwo.value);
}

// inputOne.addEventListener("click", );
// inputTwo.addEventListener("click", );
addition.addEventListener("click", addFun);
multiplication.addEventListener("click", multiFun)
division.addEventListener("click", divFun);
subtraction.addEventListener("click", subFun);