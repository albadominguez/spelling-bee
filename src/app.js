import { checkResult } from "./score.js"
import { initialDayLetters, possibleAnswers } from "./letters.js"

let dayLetters = initialDayLetters
let selectedLetters = ""
let foundAnswers = []

document.getElementById("delete-button").addEventListener("click", deleteLetter)
document.getElementById("check-button").addEventListener("click", () => {
  checkResult(selectedLetters, dayLetters, possibleAnswers, foundAnswers)
  clearSelectedLetters(selectedLetters)
})

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", function (event) {
    handleLetter(event.target.innerText)
  })
})

document
  .getElementById("shuffle-button")
  .addEventListener("click", shuffleArray)

// let dayLetters = chooseLetter()

for (let i = 0; i <= dayLetters.length - 1; i++) {
  document.getElementById(`display-dayLetter${i + 1}`).textContent =
    dayLetters[i]
}

function handleLetter(letter) {
  selectedLetters += letter
  document.getElementById(`input-word`).textContent = selectedLetters
}

function deleteLetter() {
  selectedLetters = selectedLetters.substring(0, selectedLetters.length - 1)
  document.getElementById(`input-word`).textContent = selectedLetters
}
function clearSelectedLetters() {
  selectedLetters = ""
  document.getElementById(`input-word`).textContent = selectedLetters
}

function shuffleArray() {
  let array = dayLetters
  let arrayFirst = array[0]
  array.shift()

  const shuffledArray = array.sort((a, b) => 0.5 - Math.random())

  dayLetters = [arrayFirst, ...shuffledArray]

  for (let i = 0; i <= dayLetters.length - 1; i++) {
    document.getElementById(`display-dayLetter${i + 1}`).textContent =
      dayLetters[i]
  }
}
