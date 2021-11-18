const buttonApi = document.querySelector("#btn")
const output = document.querySelector("#output")


buttonApi.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                output.innerHTML += `<p>${ data[i].title }</p>`;
                // console.log(data[i].title)
            }
        })
})