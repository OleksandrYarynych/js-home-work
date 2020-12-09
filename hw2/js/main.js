const getFirstValue = document.getElementById("first-number");
const getSecondValue = document.getElementById("last-number");
const withoutEvenNumbers = document.getElementById("app__input-block__select");
const saveDataButton = document.getElementById("app__submit-button");
const resultFeld = document.getElementById("app__result");

function sumAllNumbers(firstNumber, lastNumber, skipEvenNumbers) {
  let sum = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 2 === 1 || (i % 2 === 0 && skipEvenNumbers === "false")) sum += i;
    console.log(` ${i}    ${sum}    ${skipEvenNumbers}`);
  }
  return sum;
}

saveDataButton.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNumber = Math.round(getFirstValue.value);
  const secondNumber = Math.round(getSecondValue.value);
  const skipEvenNumbers = withoutEvenNumbers.value;
  resultFeld.innerText = `Відповідь : ${sumAllNumbers(
    firstNumber,
    secondNumber,
    skipEvenNumbers
  )}`;
});
