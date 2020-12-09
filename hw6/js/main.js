const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

const getSubjects = ({ subjects }) =>
  Object.keys(subjects).map(
    (sub) =>
      sub[0].toUpperCase() +
      sub.slice(1).toLowerCase().split("_").join(" ") +
      "  "
  );

const getAverageMark = ({ subjects }) => {
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

const getStudentInfo = (student) =>
  `${Object.keys(student)[1]} : ${student.course},${
    Object.keys(student)[0]
  } : ${student.name}, "averageMark" : ${getAverageMark(student)}  `;

const getStudentsNames = (students) => 
   students
    .reduce((stNames, st) => {
      stNames.push(st.name);
      return stNames;
    }, [])
    .sort()
    .join(" ");


const getArrOfStAndTheirMarks = (students) => {
  const studentsAndTheirMarks = students.reduce((finalArr, st) => {
    finalArr.push(getAverageMark(st));
    finalArr.push(st.name);
    return finalArr;
  }, []);
  return studentsAndTheirMarks;
};

const getBestStudent = (students) => {
  const studentsAndTheirMarks = getArrOfStAndTheirMarks(students);
  let bestStudent = null;
  let bestMark = 0;
  for (let i = 0; i < studentsAndTheirMarks.length; i += 2) {
    if (studentsAndTheirMarks[i] > bestMark) {
      bestMark = studentsAndTheirMarks[i];
      bestStudent = studentsAndTheirMarks[i + 1];
    }
  }
  return bestStudent;
};

const countKeyLetterInWord = (word, letter) =>
  word.filter((wordLetter) => wordLetter === letter).length;
const deleteSpaces = (word) => word.split(" ").join("");

const calculateWordLetters = (word) => {
  const wordArray = [...deleteSpaces(word).split("")].map((letter) =>
    letter.toLowerCase()
  );
  return wordArray.reduce((wordObject, letter) => {
    if (!(letter in wordObject)) {
      wordObject[letter] = countKeyLetterInWord(wordArray, letter);
    }
    return wordObject;
  }, {});
};
