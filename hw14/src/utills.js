const body=document.getElementsByTagName("body")[0];
const div=document.createElement("DIV");
div.classList.add("app");
body.append(div)

export function restFro500hrn(sumPrice) {
  return 500 - sumPrice;
}

export function sumAllNumbers(firstNumber, lastNumber, skipEvenNumbers) {
  let sum = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 2 === 1 || (i % 2 === 0 && skipEvenNumbers === "false")) sum += i;
  }
  return sum;
}

export function numberToPower(number, powTo) {
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

export const setMarksForThems = (students) => {
  const studentsWithMarks=students.reduce((studentsWithMarks,st)=>{
    const minMark=1,maxMark=6;
    const markForSt=`${st} ${(Math.random()*(maxMark-minMark)).toFixed(0)}`;
    studentsWithMarks.push(markForSt);
    return studentsWithMarks;
  },[])
  return studentsWithMarks;
};

export const countPositiveNumbers = (userArr) =>
userArr.filter((num) => num > 0).length;

export const getAverageMark = ({ subjects }) => {
  const size = Object.values(subjects).reduce(
    (size, subArrSize) => (size += subArrSize.length),
    0
  );
  const sumOfMarks = Object.values(subjects).reduce(
    (totalMarks, arrOfMarks) => {
      return (totalMarks += arrOfMarks.reduce(
        (sum, arrMarks) => (sum += arrMarks),
        0
      ));
    },
    0
  );
  return +(sumOfMarks / size).toFixed(2);
};

export const getMyTaxes = function (salary = 100) {
  return this?.tax * salary;
};

const wrapper=document.createElement("DIV");
wrapper.classList.add("wrapper");
div.append(wrapper)

const createBlock = () => {
  const div = document.createElement("div");
  div.classList.add("small-block");
  return div;
};

const createArr = () => {
  const divBlocks = [];
  for (let i = 0; i < 25; i++) {
    divBlocks.push(createBlock());
  }
  return divBlocks;
};

const generateRandomNumber=(min=0 , max=256)=>(Math.random()*((max-min)+min)).toFixed(0);

const generateColor = () => ("rgba("+generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber()+")")

export const fillBlocksInNewColor = () => {
  const divBlocks = [...wrapper.childNodes];
  for (let i = 0; i < 25; i++) {
    divBlocks[i].style.backgroundColor = generateColor();
  }
};

export const generateBlocksInterval = () => {
  const divBlocks = createArr();
  for (let i = 0; i < 25; i++) {
    divBlocks[i].style.background = generateColor();
    wrapper.append(divBlocks[i]);
  }
};