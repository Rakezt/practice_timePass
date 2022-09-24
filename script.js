var userInput = document.querySelector(".user-input")
var output = document.querySelector(".output")
var button = document.querySelector(".btn")

//button.addEventListener("click", checkChar)
userInput.addEventListener("change", updateValue)

function updateValue() {
    output.innerText=userInput.value
    if (userInput.value.length > 5) {
        output.style.color = "red";
        output.innerText = userInput.value

    } else {
        output.style.color = "green";
        output.innerText = userInput.value;

    }
}


updateValue()