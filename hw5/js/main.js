const button = document.querySelectorAll(".item-button");
const resultFeld = document.querySelectorAll(".item-result");

const makeIntArrFromStr = (strArr) =>
  strArr.split(" ").map((num) => parseFloat(num));

const filterArrr = (arr) =>
  arr.filter((num) => {
    if (num % 1 === 0) return true;
  });

const swapArrType = (userArr) => {
  let userArrCopy = [];
  if (typeof userArr === "string") {
    userArrCopy = makeIntArrFromStr(userArr);
    userArrCopy = filterArrr(userArrCopy);
  }
  if (typeof userArr === "object") {
    userArrCopy = [...userArr];
  }
  return userArrCopy;
};

const createWordsArrayByString = (userString) =>
  userString.split(" ").map((word) => word.toLowerCase());

const isEmptyString = (userSentence) => {
  if (!userSentence) alert("Ви ввели не коректне речення");
};

const getRandomArray = (length, min, max) => {
  const randomNumbersArr = [];
  for (let i = 0; i < length; i++) {
    randomNumbersArr.push(
      (Math.random() * Math.abs(max - min) + (max < min ? max : min)).toFixed(0)
    );
  }
  return randomNumbersArr;
};

button[0].addEventListener("click", () => {
  const length = +prompt(`Введіть довжину масиву (по замовчуванню 15)`, 15);
  const min = +prompt(`введіть мінімальне число (по замовчуванню 1)`, 1);
  const max = +prompt(`введіть максимальне число (по замовчуванню 100)`, 100);
  resultFeld[0].innerText = `${getRandomArray(length, min, max)}`;
});

const getModa = (userArr) => {
  const userArrCopy = swapArrType(userArr);
  const moda = [];
  let mostCommon = 0;
  userArrCopy.map((num) => {
    let counter = 0;
    for (let i = 0; i < userArrCopy.length; i++) {
      if (userArrCopy[i] === num) counter++;
    }
    if (counter > mostCommon) {
      mostCommon = counter;
      moda.push(num);
    }
    if (counter === mostCommon && !moda.includes(num)) moda.push(num);
  });
  return moda;
};

button[1].addEventListener("click", () => {
  let userArr = prompt(
    `Введіть Ваш масив (усі елементи потрібно вводити через пробіл) Для того, щоб згенерувати рандомний масив на 15 символів в межах від 1 до 100 натисніть кнопку "Скасувати"`
  );
  resultFeld[1].innerText = `Ваш масив  ${
    userArr ? userArr : (userArr = getRandomArray(5, 1, 10))
  }  Мода - ${getModa(userArr)}`;
});

const getAverageArrayValue = (userArr) => {
  const userArrCopy = [...swapArrType(userArr)];
  return +(
    userArrCopy.reduce((numberSum, num) => numberSum + num, 0) /
    userArrCopy.length
  ).toFixed(2);
};

button[2].addEventListener("click", () => {
  let userArr = prompt(
    `Введіть Ваш масив (усі елементи потрібно вводити через пробіл) Для того, щоб згенерувати рандомний масив на 15 символів в межах від 1 до 100 натисніть кнопку "Скасувати"`
  );
  resultFeld[2].innerText = `Ваш масив  ${
    userArr ? userArr : (userArr = getRandomArray(15, 1, 100))
  }  Середнє арифметичне - ${getAverageArrayValue(userArr)}`;
});

const getMedian = (userArr) => {
  const userArrCopy = [...swapArrType(userArr)];
  userArrCopy.sort((prevNum, nextNum) => prevNum - nextNum);
  let median = null;
  if (userArrCopy.length % 2 === 1) {
    median = userArrCopy[Math.round(userArrCopy.length / 2) - 1];
  } else if (userArrCopy.length % 2 === 0) {
    median = +(
      (userArrCopy[userArrCopy.length / 2 - 1] +
        userArrCopy[userArrCopy.length / 2]) /
      2
    ).toFixed(2);
  }
  return median;
};

button[3].addEventListener("click", () => {
  let userArr = prompt(
    `Введіть Ваш масив (усі елементи потрібно вводити через пробіл) Для того, щоб згенерувати рандомний масив на 15 символів в межах від 1 до 100 натисніть кнопку "Скасувати"`
  );
  resultFeld[3].innerText = `Ваш масив  ${
    userArr ? userArr : (userArr = getRandomArray(15, 1, 100))
  } Медіана - ${getMedian(userArr)}`;
});

const filterEvenNumbers = (userArr) =>
  [...swapArrType(userArr)].filter((num) => num % 2 === 1);

button[4].addEventListener("click", () => {
  let userArr = prompt(
    `Введіть Ваш масив (усі елементи потрібно вводити через пробіл) Для того, щоб згенерувати рандомний масив на 15 символів в межах від 1 до 100 натисніть кнопку "Скасувати"`
  );
  resultFeld[4].innerText = `Ваш масив  ${
    userArr ? userArr : (userArr = getRandomArray(15, 1, 100))
  } Не парні числа з масиву - ${filterEvenNumbers(userArr)}`;
});

const countPositiveNumbers = (userArr) =>
  userArr.filter((num) => num > 0).length;

button[5].addEventListener("click", () => {
  let userArr = prompt(
    `Введіть Ваш масив (усі елементи потрібно вводити через пробіл) Для того, щоб згенерувати рандомний масив на 15 символів в межах від -50 до 50 натисніть кнопку "Скасувати"`
  );
  resultFeld[5].innerText = `Ваш масив  ${
    userArr ? userArr : (userArr = getRandomArray(15, -50, 50))
  } Кількість чисел >0    ${countPositiveNumbers(userArr)}`;
});

const getDividedByFive = (userArr) =>
  [...swapArrType(userArr)].filter((num) => num % 5 === 0);

button[6].addEventListener("click", () => {
  let userArr = prompt(
    `Введіть Ваш масив (усі елементи потрібно вводити через пробіл) Для того, щоб згенерувати рандомний масив на 15 символів в межах від -50 до 50 натисніть кнопку "Скасувати"`
  );
  resultFeld[6].innerText = `Ваш масив  ${
    userArr ? userArr : (userArr = getRandomArray(15, -50, 50))
  } Числа які на ціло діляться на 5  =   ${getDividedByFive(userArr)}`;
});

const badWordsArray = ["shit", "fuck"];

const replaceBadWords = (userSentence) => {
  const userSentenceCopy = [...createWordsArrayByString(userSentence)];
  for (let i = 0; i < badWordsArray.length; i++) {
    const badWordIndex = userSentenceCopy.findIndex(
      (word) => badWordsArray[i] === word
    );
    userSentenceCopy[badWordIndex] = "****";
  }
  return userSentenceCopy.join(" ");
};

button[7].addEventListener("click", () => {
  userSentence = prompt(`Введіть своє речення`);
  if (userSentence !== null) {
    resultFeld[7].innerText = `Ваше речення = ${userSentence}  Відредаговане речення =  ${replaceBadWords(
      userSentence
    )}`;
  }
});

const divideByThree = (userSentence) => {
  let userSentenceCopy = [...createWordsArrayByString(userSentence)];
  userSentenceCopy = userSentenceCopy.reduce((destroyedWordArray, word) => {
    let destroyWord = word.split("");
    while (destroyWord.length > 0) {
      const cutLetters = destroyWord.splice(0, 3);
      destroyedWordArray.push(cutLetters.join(""));
    }
    return destroyedWordArray;
  }, []);
  return userSentenceCopy;
};

button[8].addEventListener("click", () => {
  userSentence = prompt(`Введіть своє речення`);
  isEmptyString(userSentence);
  if (userSentence !== null) {
    resultFeld[8].innerText = `Ваше речення = ${userSentence}  Речення розкладене на склади =  ${divideByThree(
      userSentence
    )}`;
  }
});
