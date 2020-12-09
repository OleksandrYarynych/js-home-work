const button = document.querySelectorAll(".item-button");
const resultFeld = document.querySelectorAll(".item-result");

const getMaxDigit = (number) =>
  Math.max(...Array.from(String(number)).map((item) => parseInt(item)));

button[0].addEventListener("click", () => {
  const number = +prompt("Введіть будь-яке число");
  resultFeld[0].innerHTML = `Введений параметр ${number}  Відповідь ${getMaxDigit(
    number
  )} `;
});

function numberToPower(number, powTo) {
  let result = number;
  if (powTo > 0) {
    for (let i = 1; i < powTo; i++) result *= number;
    return result;
  } else if (powTo < 0) {
    result = 1;
    for (let i = 0; i < Math.abs(powTo); i++) result /= number;
    return result;
  } else if (powTo === 0) return 1;
}

button[1].addEventListener("click", () => {
  const number = +prompt("Введіть число, яке потрібно піднести до степеня");
  const powTo = +prompt("Введіть степінь, до якого потріббно підняти число");
  resultFeld[1].innerText = ` Параметри (число та степінь) ${number}  ${powTo}   Відповідь ${numberToPower(
    number,
    powTo
  )}`;
});

const formatName = (nameString) =>
  nameString[0].toUpperCase() + nameString.slice(1).toLowerCase();

button[2].addEventListener("click", () => {
  const name = prompt("Введііть ім'я");
  resultFeld[2].innerText = `Введене ім'я ${name}    Відредаговане ім'я ${formatName(
    name
  )}`;
});

function countTax(salary) {
  return salary * ((100 - 19.5) / 100);
}

button[3].addEventListener("click", () => {
  const salary = +prompt("Введіть зарплату до відрахування податків");
  resultFeld[3].innerText = `зарплата до відрахування податків ${salary}   зарплата після відрахування податків ${countTax(
    salary
  )}`;
});

function getRandomValue(firstNumber, secondNumber) {
  return +(
    Math.random() * Math.abs(secondNumber - firstNumber) +
    (firstNumber > secondNumber ? secondNumber : firstNumber)
  ).toFixed(0);
}

button[4].addEventListener("click", () => {
  const firstNumber = +prompt("Введіть перше число з проміжку");
  const secondNumber = +prompt("Введіть друге число з проміжку");
  resultFeld[4].innerText = `Введені числа ${firstNumber} i ${secondNumber}   Рандомне число - ${getRandomValue(
    firstNumber,
    secondNumber
  )}`;
});

function countLetterRepeat(word, letter) {
  let countUserLetterInWord = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) countUserLetterInWord++;
  }
  return countUserLetterInWord;
}

button[5].addEventListener("click", () => {
  const usersWord = prompt("Введіть слово");
  const usersLetter = prompt(
    "Введіть букву, кількість входжень якої треба порахувати"
  );
  resultFeld[5].innerText = `Задана буква (${usersLetter}) зустрічалась в заданому слові ${usersWord}  стільки раз  ${countLetterRepeat(
    usersWord,
    usersLetter
  )} `;
});

function curencyConverter(userSum) {
  if (
    !userSum.includes("$") &&
    !userSum.includes("UAH") &&
    !userSum.includes("uah")
  ) {
    return "Введено не коректну валюту";
  } else {
    if (userSum.includes("UAH") || userSum.includes("uah")) {
      userSum = parseInt(userSum);
      return `Із ${userSum}гривень ви отримаєте ${(userSum / 25).toFixed(2)}$`;
    } else if (userSum.includes("$")) {
      userSum = parseInt(userSum);
      return ` Із ${userSum}$ ви отримааєте ${(userSum * 25).toFixed(
        2
      )}гривень`;
    }
  }
}

button[6].addEventListener("click", () => {
  const enteredSum = prompt("Введіть суму, яку потрібно обміняти");
  resultFeld[6].innerText = `${curencyConverter(enteredSum)}`;
});

function generatePassword(passwordSize) {
  let password = "";
  for (let i = 0; i < passwordSize; i++) {
    password += getRandomValue(0, 10);
  }
  return password;
}

button[7].addEventListener("click", () => {
  const passwordSize = +prompt(
    "Введіть розмір пароля (за замовчуванням 8 символів)",
    8
  );
  resultFeld[7].innerText = `Згенерований пароль ${generatePassword(
    passwordSize
  )}`;
});

function deleteLetterFromSentence(sentence, letter) {
  let finalString = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== letter) {
      finalString += sentence[i];
    }
  }
  return finalString;
}

button[8].addEventListener("click", () => {
  const userSentence = prompt("Введіть речення");
  const userLetter = prompt("Введіть букву, яку ви хочете видалити з речення");
  resultFeld[8].innerText = `Ваше речення ${userSentence}  буква,яку треба видалити '${userLetter}'  результат - ${deleteLetterFromSentence(
    userSentence,
    userLetter
  )}`;
});

function palindrome(userSentence) {
  let userSentenceCopy = deleteLetterFromSentence(
    userSentence,
    " "
  ).toLowerCase();
  const userSentenceReverce = userSentenceCopy.split("").reverse().join("");
  return userSentenceCopy === userSentenceReverce;
}

button[9].addEventListener("click", () => {
  const userSentence = prompt("Введіть слово або  речення");
  resultFeld[9].innerText = `Введене слово або речення ${userSentence}  це паліндром  ${palindrome(
    userSentence
  )}`;
});

function deleteTwoOrMoreLettersInSentence(usersSentence) {
  let userSentenceCopy = usersSentence.toLowerCase();
  let finalString = "";
  for (let i = 0; i < userSentenceCopy.length; i++) {
    let countLetterInSentence = 0;
    for (let j = 0; j < userSentenceCopy.length; j++) {
      if (userSentenceCopy[i] === userSentenceCopy[j]) countLetterInSentence++;
    }
    if (countLetterInSentence <= 1) finalString += usersSentence[i];
  }
  return finalString;
}

button[10].addEventListener("click", () => {
  const userSentence = prompt("Введіть речення");
  resultFeld[10].innerText = ` Ваше речення ${userSentence} відредаговане речення  ${deleteTwoOrMoreLettersInSentence(
    userSentence
  )}`;
});
