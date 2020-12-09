const selectToGetSubjects = document.getElementById(
  "select-student-to-get-subjects"
);
const selectToGetAverageMark = document.getElementById(
  "select-student-for-average-mark"
);
const selectToSeInfo = document.getElementById(
  "select-student-to-see-information"
);
const selectCategory = document.getElementById("select-category");

const btn = document.querySelectorAll(".task__button");
const answerBlock = document.querySelectorAll(".answer-block");

const label = document.getElementById("label");
const labelTxet = document.querySelectorAll(".label-text");
const labelInputFeld = document.querySelectorAll(".label__input-fled");

const getStudentFromSelectValue = (selectValue) => {
  let student = null;
  switch (selectValue) {
    case "Tanya":
      student = students[0];
      break;
    case "Victor":
      student = students[1];
      break;
    case "Anton":
      student = students[2];
      break;
    default:
      alert("Оберіть студента");
      return "not chosen student";
  }
  return student;
};

const createAnswerParagraphs = () => {
  const elP = document.createElement("p");
  elP.classList.add("answer__text-feld");
  return elP;
};

const writeAnswer = (answerBlock, answer) => {
  answerBlock.innerHTML = "";
  answerBlock.append(answer);
};

const getFunctionFromCategorySelectList = (selectCategory) => {
  let result = "";
  if (selectCategory === "by-marks") {
    result = getBestStudent(students);
  } else if (selectCategory === "be-ABC") {
    result = getStudentsNames(students);
  } else if (selectCategory === "not-chosen-category") {
    alert("Ви не обрали категорію");
    result = "Ви не обрали категорію";
  }
  return result;
};

btn[0].addEventListener("click", () => {
  const stSubjects = createAnswerParagraphs();
  if (
    getStudentFromSelectValue(selectToGetSubjects.value) !==
    "not chosen student"
  ) {
    stSubjects.textContent=getSubjects(getStudentFromSelectValue(selectToGetSubjects.value));
  } else {
    stSubjects.textContent = "Ви не обрали студента";
  }
  writeAnswer(answerBlock[0], stSubjects);
});

btn[1].addEventListener("click", () => {
  const stAverageMark = createAnswerParagraphs();
  if (
    getStudentFromSelectValue(selectToGetAverageMark.value) !==
    "not chosen student"
  ) {
    stAverageMark.textContent = getAverageMark(getStudentFromSelectValue(selectToGetAverageMark.value));
  } else {
    stAverageMark.textContent = "Ви не обрали студента";
  }
  writeAnswer(answerBlock[1], stAverageMark);
});

btn[2].addEventListener("click", () => {
  const stInfo = createAnswerParagraphs();
  if (
    getStudentFromSelectValue(selectToSeInfo.value) !== "not chosen student"
  ) {
    stInfo.textContent = getStudentInfo(getStudentFromSelectValue(selectToSeInfo.value));
  } else {
    stInfo.textContent = "Ви не обрали студента";
  }
  writeAnswer(answerBlock[2], stInfo);
});

btn[3].addEventListener("click", () => {
  const answer = createAnswerParagraphs();
  answer.textContent = getFunctionFromCategorySelectList(selectCategory.value);
  writeAnswer(answerBlock[3], answer);
});

label.addEventListener("click", () => {
  labelTxet[0].style.top = "-8px";
});

const convertObjectToString = (ob) => {
  let str = "";
  for (let i = 0; i < Object.keys(ob).length; i++) {
    str += ` ${Object.keys(ob)[i]} = ${Object.values(ob)[i]} ; `;
  }
  return str;
};

btn[4].addEventListener("click", () => {
  const userWord = labelInputFeld[0].value;
  const answer = createAnswerParagraphs();
  let finalOb = {};
  if (userWord !== "") {
    finalOb = calculateWordLetters(userWord);
    answer.textContent = convertObjectToString(finalOb);
  } else {
    labelTxet[0].style.top = "17px";
    answer.textContent = "Ви не ввели жодного слоів";
  }
  writeAnswer(answerBlock[4], answer);
});
