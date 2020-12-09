const infoSelect = document.getElementById("info-select");
const markSelect = document.getElementById("mark-select");
const addMarkSelect = document.getElementById("add-mark-select");
const dismissStudentSelect = document.getElementById("dismiss-student-select");
const recoverStudentSelect = document.getElementById("recover-student-select");

const univercityInputFeld = document.getElementById("input-univercity");
const courseInputFeld = document.getElementById("input-course");
const fullNameInputFeld = document.getElementById("input-full-name");
const marksInputFeld = document.getElementById("input-marks");
const markInputFeld = document.getElementById("input-mark");

const addStudentBtn = document.getElementById("add-student-button");
const showInfoButton = document.getElementById("show-info");
const getMarksBtn = document.getElementById("get-marks-button");
const addMarkBtn = document.getElementById("add-mark-button");
const deleteStudentBtn = document.getElementById("delete-student");
const recoverStudentBtn = document.getElementById("recover-student");

const addStudentsAnswer = document.getElementById("add-student-answer");
const infoAnswer = document.getElementById("info-answer");
const marksAnswer = document.getElementById("mark-answer");
const addMarkAnswer = document.getElementById("add-marks-answer");
const dismissStudentAnswer = document.getElementById("dismiss-student-answer");
const recoverStudentAnswer = document.getElementById("recover-student-answer");

const students = [];
const Ivan = new Student("NULP", 2, "Ivan Ivanov", [3, 3, 3, 2, 3, 5, 3]);
students.push(Ivan);
const Petro = new Student("KNUCAA", 3, "Petro Petrenko", [5, 4, 4, 4, 5, 5, 5]);
students.push(Petro);
const Ruslan = new Student("LNU of Ivan Franko", 1, "Ruslan Barakov", [
  5,
  4,
  3,
  2,
  5,
  4,
  5,
]);
students.push(Ruslan);

const createOption = (fullName) => {
  const option = document.createElement("option");
  option.value = fullName;
  option.text = fullName;
  return option;
};

const pushOptionIntoSelect = (fullName) => {
  infoSelect.append(createOption(fullName));
  markSelect.append(createOption(fullName));
  addMarkSelect.append(createOption(fullName));
  dismissStudentSelect.append(createOption(fullName));
  recoverStudentSelect.append(createOption(fullName));
};

const isEmptyString = (str) => str === "";

const isEmptyFelds = (
  univercityInput,
  courseInput,
  fullNameInput,
  marksInput
) => {
  if (
    isEmptyString(univercityInput) ||
    isEmptyString(courseInput) ||
    isEmptyString(fullNameInput) ||
    isEmptyString(marksInput)
  ) {
    alert("Ви заповнили не всі поля");
    return false;
  }
};

const checkMark = (mark) => mark > 0 && mark <= 5;

const returnMarksArr = (marksArray) => {
  marksArr = marksArray;
  marksArr = marksArr.split(" ");
  marksArr = marksArr.reduce((finalArr, mark) => {
    if (checkMark(mark) === true) finalArr.push(parseInt(mark));
    return finalArr;
  }, []);
  return marksArr;
};

const createAnsP = () => {
  let el = document.createElement("p");
  el.classList.add("answer-text");
  return el;
};

const writeAnswer = (answerBlock, answerelement) => {
  ansBlock = answerBlock;
  ansBlock.innerText = "";
  ansBlock.append(answerelement);
};

const takeStudentObjectFromSelectList = (selectValue) => {
  if (selectValue !== "not chosen") {
    for (let i = 0; i < students.length; i++) {
      if (students[i].fullName === selectValue) {
        return students[i];
      }
    }
  } else {
    alert("Ви не обрали жодного студента");
    return null;
  }
};

addStudentBtn.addEventListener("click", () => {
  const emptyFelds = isEmptyFelds(
    univercityInputFeld.value,
    courseInputFeld.value,
    fullNameInputFeld.value,
    marksInputFeld.value
  );
  const marks = returnMarksArr(marksInputFeld.value);
  if (emptyFelds !== false) {
    const newStudent = new Student(
      univercityInputFeld.value,
      courseInputFeld.value,
      fullNameInputFeld.value,
      marks
    );
    students.push(newStudent);
    const answer = createAnsP();
    answer.textContent = "Ви успішно додали студента";
    writeAnswer(addStudentsAnswer, answer);
    pushOptionIntoSelect(newStudent.fullName);
  }
});

showInfoButton.addEventListener("click", () => {
  const st = takeStudentObjectFromSelectList(infoSelect.value);
  if (st !== null) {
    const information = createAnsP();
    information.textContent = st.getInfo();
    writeAnswer(infoAnswer, information);
  }
});

getMarksBtn.addEventListener("click", () => {
  const st = takeStudentObjectFromSelectList(markSelect.value);
  if (st !== null) {
    const marks = createAnsP();
    marks.textContent = st.getMarks().join(" ");
    writeAnswer(marksAnswer, marks);
  }
});

addMarkBtn.addEventListener("click", () => {
  const st = takeStudentObjectFromSelectList(addMarkSelect.value);
  if (st !== null) {
    const newMark = markInputFeld.value;
    if (checkMark(newMark)) {
      st.setMark(newMark);
    } else alert("Ви ввели не коректну оцінку");
    const showMarksWithNewMark = createAnsP();
    showMarksWithNewMark.textContent = st.getMarks().join(" ");
    writeAnswer(addMarkAnswer, showMarksWithNewMark);
  }
});

deleteStudentBtn.addEventListener("click", () => {
  const st = takeStudentObjectFromSelectList(dismissStudentSelect.value);
  if (st !== null) {
    st.dismissStudent();
    const dismissSt = createAnsP();
    dismissSt.textContent = `Студента  ${st.getFullName()} було виключено з університету`;
    writeAnswer(dismissStudentAnswer, dismissSt);
  }
});

recoverStudentBtn.addEventListener("click", () => {
  const st = takeStudentObjectFromSelectList(recoverStudentSelect.value);
  if (st !== null) {
    if (st.getStudyingInUnivercity() === false) {
      st.recover();
      const recoverSt = createAnsP();
      recoverSt.textContent = `Студента ${st.getFullName()} було поновлено в  університеті ${st.getUnivercity()}`;
      writeAnswer(recoverStudentAnswer, recoverSt);
    } else {
      const recoverSt = createAnsP();
      recoverSt.textContent = `Студент вже навчається в одному з університетів`;
      writeAnswer(recoverStudentAnswer, recoverSt);
    }
  }
});

const budgetStudent = new BudgetStudent("LNU", 4, "Petruk Piatochkin", [
  4,
  4,
  4,
  4,
  4,
]);
console.log(budgetStudent.getInfo());
console.log(budgetStudent.getMarks());
console.log(
  "Для того, щоб поставити трійку студенту П'яточкіну  скопіюйте наступний рядок та введіть його в консоль"
);
console.log("budgetStudent.setMark(3)");
