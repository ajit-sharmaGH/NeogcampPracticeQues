const button = document.querySelector("#btn")
const output = document.querySelector("#output")

fetch("https://unitube-server.herokuapp.com/playlists")
    .then(res => {
        if (res.status === 401) {
            output.innerHTML = "not log in"
        } else if (res.status === 404) {
            output.innerHTML = "use not found"

        } else {
            output.innerHTML = "ERROR"

        }

    })



// })