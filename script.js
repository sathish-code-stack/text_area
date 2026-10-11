
const message = document.getElementById("message")
const counter = document.getElementById("counter")
const warning = document.getElementById("warning")

const maxCharacters = 200

message.addEventListener("input", function () {
    const typed = message.value.length
    const remaining = maxCharacters - typed

    counter.textContent =`${typed}/${maxCharacters} characters | ${remaining} remaining`

    if (typed >= maxCharacters) {
        warning.textContent = "You have reached the character limit!"
    } else {
        warning.textContent = ""
    }
});