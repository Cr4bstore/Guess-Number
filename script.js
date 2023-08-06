const checkBtn = document.querySelector("button.check")
const againBtn = document.querySelector("button.again")
const message = document.querySelector(".message")
const score = document.querySelector(".score")
const body = document.querySelector("body")
const number = document.querySelector(".number")
const guess = document.querySelector(".guess")
const highscore = document.querySelector(".highscore")
let randomNumber
let scoring = 20
let highestScore = 0

generateNumber()

checkBtn.addEventListener("click", function () {
    const inputValue = guess.value
    if (inputValue !== "") {
        const verifiedInput = Number(inputValue);
        if (verifiedInput === randomNumber) {
            message.textContent = "🎉 Correct Number!"
            body.style.backgroundColor = "rgb(96, 179, 71) "
            number.textContent = verifiedInput
            if (scoring > highestScore) {
                highestScore = scoring
            }
            highscore.textContent = highestScore
        } else if (verifiedInput < randomNumber) {
            message.textContent = "📉 Too low!"
            scoring -= 1
            if (scoring <= 0) {
                message.textContent = "💥 You lost the game!"
                score.textContent = 0
            } else {
                score.textContent = scoring
            }
        } else {
            message.textContent = "📈 Too high!"
            scoring -= 1
            if (scoring <= 0) {
                message.textContent = "💥 You lost the game!"
                score.textContent = 0
            } else {
                score.textContent = scoring
            }
        }
    } else {
        message.textContent = "⛔️ No number!"
    }
})

againBtn.addEventListener("click", function () {
    generateNumber()
    body.style.backgroundColor = "rgb(34, 34, 34)"
    guess.value = ""
    number.textContent = "?"
    message.textContent = "Start guessing..."
    scoring = 20
    score.textContent = scoring
})

function generateNumber() {
    randomNumber = Math.floor(Math.random() * 20) + 1
    console.log(randomNumber)
