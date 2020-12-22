function* createIdGenerator() {
  let id = 0;

  while (1 === 1) {
    yield ++id;
  }
}

const IdGenerator = createIdGenerator();
console.log(IdGenerator.next().value);
console.log(IdGenerator.next().value);
console.log(IdGenerator.next().value);
console.log(IdGenerator.next().value);

const h1 = document.getElementById("h1");

function* changeFontSize(initialValue) {
  let size = initialValue;
  while (true) {
    const char = yield size;
    if (char === "+") size += 2;
    if (char === "-") size -= 2;
  }
}

let changeTitleSize = changeFontSize(14);
console.log(changeTitleSize.next("+").value);
console.log(changeTitleSize.next("+").value);
console.log(changeTitleSize.next("-").value);

function changeText() {
  const makeFontSizeBigger = setInterval(() => {
    h1.style.fontSize = `${changeTitleSize.next("+").value}px`;
  }, 1000);
  setTimeout(() => {
    window.clearInterval(makeFontSizeBigger);
  }, 15000);
}
changeText();
