const divideIntoPairs = (students) => {
  const pairs = [];
  const womArr = [];
  const manArr = [];
  for (let i = 0; i < students.length; i++) {
    if (womansNamesFromStudentsArray.includes(students[i])) womArr.push(students[i]);
    else if (manNamesFromStudentsArray.includes(students[i])) manArr.push(students[i]);
  }
  for (let i = 0; i < students.length / 2; i++) {
    pairs.push([manArr[i], womArr[i]]);
  }
  return pairs;
};

const createElemWithPairsOfStudents = (pairs) => {
  for (let i = 0; i < pairs.length; i++)
    pairs[i] = pairs[i] = `${pairs[i][0]} i ${pairs[i][1]}`;
  return pairs;
};

const addSubjects = (students, themes) => {
  const pairs = [...divideIntoPairs(students)];
  const pairsArr = createElemWithPairsOfStudents(pairs);
  const finalArr = [];
  for (let i = 0; i < pairsArr.length; i++) {
    finalArr.push([pairsArr[i], themes[i]]);
  }
  return finalArr;
};

const setMarks = (students, marks) => {
  const studentsList = [];
  for (let i = 0; i < students.length; i++) {
    studentsList.push([students[i], marks[i]]);
  }
  return studentsList;
};

const setMarksForThems = (students, themes) => {
  const setMarksForThems = addSubjects(students, themes);
  const minMark=1,maxMark=6;
  for (let i = 0; i < setMarksForThems.length; i++) {
    setMarksForThems[i].push((Math.random() * (maxMark - minMark)).toFixed(0));
  }
  return setMarksForThems;
};

const manNamesFromStudentsArray = ["Олександр", "Ігор", "Олексій"];
const womansNamesFromStudentsArray = ["Олена", "Іра", "Світлана"];
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

console.log(students);
console.log(themes);
console.log(marks);

console.log(divideIntoPairs(students));
console.log(addSubjects(students, themes));
console.log(setMarks(students, marks));
console.log(setMarksForThems(students, themes));
