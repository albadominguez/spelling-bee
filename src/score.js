import { possibleAnswers } from "./letters.js"

let totalScore = punctuationWords(possibleAnswers)

function checkResult(letters, dayLetter, possibleAnswer, foundAnswer) {
  const sameWord = "You already enter this word"
  const wrongMessage = "The word is wrong"
  const missingCentralLetter = "The word is missing the central letter"
  setErrorMessage("")

  if (letters === "") {
    return
  }

  if (!letters.toLocaleLowerCase().includes(dayLetter[0])) {
    setErrorMessage(missingCentralLetter)
    return
  }

  const checkingAnswer = possibleAnswer.find(
    (answer) => answer.toLocaleLowerCase() === letters.toLocaleLowerCase()
  )

  if (checkingAnswer === undefined) {
    setErrorMessage(wrongMessage)
    return
  }

  if (foundAnswer.find((element) => element === checkingAnswer)) {
    setErrorMessage(sameWord)
    return
  }

  addFoundAnswer(checkingAnswer, foundAnswer)
  countWords(foundAnswer, possibleAnswer)
  let score = punctuationWords(foundAnswer)
  countPunctuation(score, totalScore)
}

function addFoundAnswer(answer, foundAnswers) {
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

function punctuationWords(wordsToScore) {
  let score = 0
  wordsToScore.forEach((element) => (score += element.length))
  return score
}

function countPunctuation(current, total) {
  let punctuation = `Punctuation: ${current} / ${total}`
  document.getElementById(`punctuation`).textContent = punctuation
}

export { checkResult, punctuationWords }
