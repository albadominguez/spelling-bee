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

let dayLetters = chooseLetter()

for (let i = 0; i <= dayLetters.length - 1; i++) {
  document.getElementById(`display-dayLetter${i + 1}`).textContent =
    dayLetters[i]
}
