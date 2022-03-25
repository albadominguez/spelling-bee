let initialDayLetters = ["c", "p", "b", "y", "l", "i", "o"]

const possibleAnswers = [
  "policy",
  "piccy",
  "bocci",
  "cyclo",
  "cibol",
  "colic",
  "copy",
  "pyic",
  "bloc",
  "clip",
  "clop",
  "cloy",
  "coly",
  "coil",
  "coli",
  "loci",
  "cop",
  "cob",
  "pic",
  "coy",
  "icy",
  "col",
]

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

export { initialDayLetters, possibleAnswers }
