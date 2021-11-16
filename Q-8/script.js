const btn = document.querySelector("#showError")
const output = document.querySelector("#output")
    //const text = "ERROR";
btn.addEventListener("click", () => {
    fetch("https://unitube-server.herokuapp.com/playlists")
        .then(response => response.json())
        .then(data => output.innerHTML = data.message)
})