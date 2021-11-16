const input = document.querySelector("#input")
const buttonPassword = document.querySelector("#password")
const output = document.querySelector("#output")
buttonPassword.addEventListener("click", () => {
    if (input.value.length > 10) {
        output.innerHTML = "SUCCESS";
        input.style.backgroundColor = "green";
    } else if (input.value.length < 10) {
        output.innerHTML = "ERROR";
        input.style.backgroundColor = "red";
    } else(
        output.innerHTML = ""
    )
})