let dayLetters = ["c", "p", "b", "y", "l", "i", "o"]
let selectedLetters = ""
let answers = ["policy", "cibol", "copy", "bloc", "clip", "boil", "oily", "oil"]

function chooseLetter() {
  let text = ""
  let possible = Array.from("abcdefghijklmnopqrstuvwxyz")
  let vowels = Array.from("aeiou")

  for (let i = 0; i < 6; i++) {
    let letterPositon = Math.floor(Math.random() * possible.length)
    text += possible[letterPositon]
    possible.splice(letterPositon, 1)
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

function checkAnswer(word, arrayResults) {
  //Passar la variable selectedLetters
  //buscar el valor a l'string answers
  // mostrar la paraula a words-list
  // sumar al contador la paraula si es certa
  // mostrar un missatge en vermell si no es correcte
}
