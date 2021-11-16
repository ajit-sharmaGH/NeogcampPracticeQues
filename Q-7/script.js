const btn = document.querySelector("#btn")
const output = document.querySelector("#output")
const text = "ajit sharma";
btn.addEventListener("click", () => {
    fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text)
        .then(response => response.json())
        .then(data => output.innerHTML = data.contents.text.toUpperCase())

})