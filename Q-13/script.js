const button = document.querySelector("#btn")
const output = document.querySelector("#output")

const button2 = document.querySelector("#btn2")
button.addEventListener("click", () => {
    fetch("https://mystery-api.kushanksriraj.repl.co/get")
        .then(response => {

            if (response.status === 401) {
                output.innerHTML = "user not log in"
            } else if (response.status === 404) {
                output.innerHTMl = "use not found";
            } else {
                output.innerHTML = "too many log in"
            }


        }).catch(err => output.innerHTML = err)
})
button2.addEventListener("click", () => {
    fetch("https://employeedetails.free.beeceptor.com/my/api/path")
        .then(response => response.json())
        .catch(err => output.innerHTML = `${err}`)
})