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

export {
  addFoundAnswer,
  setErrorMessage,
  countWords,
  punctuationWords,
  countPunctuation,
}
