let dayLetters = ["c", "p", "b", "y", "l", "i", "o"]
let selectedLetters = ""
let possibleAnswers = [
  "policy",
  "cibol",
  "copy",
  "bloc",
  "clip",
  "boil",
  "oily",
  "oil",
]

let foundAnswers = []

function chooseLetter() {
  let text = ""
  let possible = Array.from("abcdefghijklmnopqrstuvwxyz")
  let vowels = Array.from("aeiou")

  for (let i = 0; i < 6; i++) {
    let letterPosition = Math.floor(Math.random() * possible.length)
    text += possible[letterPosition]
    possible.splice(letterPosition, 1)
  }

  if (
    text.includes("a") ||
    text.includes("e") ||
    text.includes("i") ||
    text.includes("o") ||
    text.includes("u")
  ) {
    let letterPositon = Math.floor(Math.random() * possible.length)
    text += possible[letterPositon]
  } else {
    text += vowels[Math.floor(Math.random() * vowels.length)]
  }

  return Array.from(text)
}

// let dayLetters = chooseLetter()

for (let i = 0; i <= dayLetters.length - 1; i++) {
  document.getElementById(`display-dayLetter${i + 1}`).textContent =
    dayLetters[i]
}

function handleLetter(letter) {
  selectedLetters += letter
  document.getElementById(`input-word`).textContent = selectedLetters
}

function getLetter() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", function (event) {
      handleLetter(event.target.innerText)
    })
  })
}

getLetter()

function deleteLetter() {
  selectedLetters = selectedLetters.substring(0, selectedLetters.length - 1)
  document.getElementById(`input-word`).textContent = selectedLetters
}

function clearSelectedLetters() {
  selectedLetters = ""
  document.getElementById(`input-word`).textContent = selectedLetters
}

function checkResult() {
  const sameWord = "You already enter this word"
  const wrongMessage = "The word is wrong"
  const missingCentralLetter = "The word is missing the central letter"
  setErrorMessage("")

  if (selectedLetters === "") {
    return
  }

  if (!selectedLetters.toLocaleLowerCase().includes(dayLetters[0])) {
    setErrorMessage(missingCentralLetter)
    clearSelectedLetters()
    return
  }

  const checkingAnswer = possibleAnswers.find(
    (answer) =>
      answer.toLocaleLowerCase() === selectedLetters.toLocaleLowerCase()
  )

  if (checkingAnswer === undefined) {
    setErrorMessage(wrongMessage)
    clearSelectedLetters()
    return
  }

  if (foundAnswers.find((element) => element === checkingAnswer)) {
    setErrorMessage(sameWord)
    clearSelectedLetters()
    return
  }

  addFoundAnswer(checkingAnswer)
  clearSelectedLetters()
  countWords(foundAnswers, possibleAnswers)
}

function addFoundAnswer(answer) {
  foundAnswers.push(answer)
  document.getElementById("words-list").textContent = foundAnswers.join(", ")
}

function setErrorMessage(message) {
  document.getElementById(`wrong-word`).textContent = message
}

function countWords(actualWords, totalWords) {
  let numberWords = `You have found: ${actualWords.length} / ${totalWords.length} words`
  document.getElementById(`number-words`).textContent = numberWords
}
