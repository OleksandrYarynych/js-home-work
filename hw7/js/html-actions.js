const btn = document.querySelectorAll(".task__button");
const answerBlock = document.querySelectorAll(".answer-block");

const countrySelectFirstList = document.getElementById("first-task");
const countrySelectSecondList = document.getElementById("second-task");
const countrySelectThirdList = document.getElementById("third-task");

const createAnswerParagraphs = () => {
  const elP = document.createElement("p");
  elP.classList.add("answer__text-feld");
  return elP;
};

const writeAnswer = (answerBlock, answer) => {
  answerBlock.innerHTML = "";
  answerBlock.append(answer);
};

const getCountryObject = (selectionn) => {
  let ob;
  switch (selectionn) {
    case "ukraine":
      ob = { ...ukraine };
      break;
    case "latvia":
      ob = { ...latvia };
      break;
    case "litva":
      ob = { ...litva };
      break;
    default:
      ob = "Ви не обрали країну";
      break;
  }
  return ob;
};

const getSalary = () => +prompt("Введіть свою зарплату");

btn[0].addEventListener("click", () => {
  const taxFeld = createAnswerParagraphs();
  if (
    getCountryObject(countrySelectFirstList.value) !== "Ви не обрали країну"
  ) {
    taxFeld.textContent = getMyTaxes.call(
      getCountryObject(countrySelectFirstList.value),
      getSalary()
    );
  } else {
    taxFeld.textContent = getCountryObject(countrySelectFirstList.value);
  }
  writeAnswer(answerBlock[0], taxFeld);
});

btn[1].addEventListener("click", () => {
  const middleTaxFeld = createAnswerParagraphs();
  if (
    getCountryObject(countrySelectSecondList.value) !== "Ви не обрали країну"
  ) {
    middleTaxFeld.textContent = getMiddleTaxes.call(
      getCountryObject(countrySelectSecondList.value)
    );
  } else {
    middleTaxFeld.textContent = getCountryObject(countrySelectFirstList.value);
  }
  writeAnswer(answerBlock[1], middleTaxFeld);
});

btn[2].addEventListener("click", () => {
  const fullTaxSumFromIt = createAnswerParagraphs();
  if (
    getCountryObject(countrySelectThirdList.value) !== "Ви не обрали країну"
  ) {
    fullTaxSumFromIt.textContent = getTotalTaxes.call(
      getCountryObject(countrySelectThirdList.value)
    );
  } else {
    fullTaxSumFromIt.textContent = getCountryObject(
      countrySelectFirstList.value
    );
  }
  writeAnswer(answerBlock[2], fullTaxSumFromIt);
});
