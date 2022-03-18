function handleButton(buttonContent) {
  if (isNaN(buttonContent)) {
    handleOperation(buttonContent)
  } else {
    handleNumber(buttonContent)
  }
}

let buffer = "0"

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number
  } else {
    buffer += number
  }
  console.log(buffer);
}


function handleOperation(operation) {}

function init() {
  document
    .querySelector(".buttons")
    .addEventListener("click", function (event) {
      let buttonContent = event.target.innerText
      handleButton(buttonContent)
    })
}

init()
