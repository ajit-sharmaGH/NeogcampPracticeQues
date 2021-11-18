const increase = document.querySelector("#btnOne")
const decrease = document.querySelector("#btnTwo")
const output = document.querySelector("#output")

let likeCounter = 0;

increase.addEventListener("click", () => {
    likeCounter += 1;
    output.innerText = likeCounter;
    if (likeCounter === 0) {
        decrease.disabled = true;

    }else{
        decrease.disabled=false;
    }

})
decrease.addEventListener("click", () => {
    likeCounter -= 1;
    output.innerText = likeCounter;
    if (likeCounter === 0) {
        decrease.disabled = true;

    }else{
        decrease.disabled=false;
    }
})