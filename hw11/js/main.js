const makeChinaCharacter = () =>
  new Promise((resolve) => {
    const now = Date.now().toString();
    const nowLastFiveChars = now.slice(now.length - 5);
    console.log(nowLastFiveChars);
    return resolve(String.fromCharCode(nowLastFiveChars));
  });

async function getRandomChinese(length) {
  let i = 0;
  let result = "";
  if (length <= 0) {
    return "your length is less than or equal to 0  Your length is " + length;
  }
  const makeAsyncChinaChar = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        return resolve(makeChinaCharacter());
      }, 50);
    });
  while (i < length) {
    result += await makeAsyncChinaChar();
    i++;
  }
  return result;
}

console.log(
  "Нижче будуть наведені результати виклику Date.now() та результат проміса"
);
getRandomChinese(4)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
getRandomChinese(-5)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
