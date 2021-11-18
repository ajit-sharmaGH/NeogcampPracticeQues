const button = document.querySelector("#btn")
const output = document.querySelector("#output")
var arr = [{
        name: "ajit",
        age: 21,
        course: "BCA"
    },
    {
        name: "mohasin",
        age: 20,
        course: "BCA honour"
    }

]
button.addEventListener("click", () => {
    var age = 0;
    for (let i = 0; i < arr.length; i++) {

        if (age < arr[i].age) {
            age = arr[i].age;
        }

    }
    output.innerHTML = "max age is " +
        `<p> ${age} </p>`
})