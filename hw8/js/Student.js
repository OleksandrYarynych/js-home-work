class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.studyingInUnivercity = true;
    this.marks = [...marks];
  }

  getFullName = () => this.fullName;

  getUnivercity = () => this.university;

  setMark(mark) {
    if(this.studyingInUnivercity){
      this.marks.push(mark);
    }
    else{
      alert("Цей студент відрахований тому ви не ожете поставити йому оцінку");
    }
  }
  getMarks = () => this.marks;
  getStudyingInUnivercity = () => this.studyingInUnivercity;

  getInfo = () =>
    `Студент ${this.fullName} навчається на ${this.course} курсі в університеті ${this.university}`;

  getAverageMark = () =>
    +(
      this.marks.reduce((marksSum, mark) => (marksSum += mark), 0) /
      this.marks.length
    ).toFixed(2);

  dismissStudent() {
    this.studyingInUnivercity = false;
  }

  recover() {
    if (!this.studyingInUnivercity) {
      this.studyingInUnivercity = true;
    } else {
      alert("Цей студент уже навчається в якомусь з університетів");
    }
  }
}
