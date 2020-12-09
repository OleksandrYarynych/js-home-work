class BudgetStudent extends Student {
  constructor(university, course, fullName, mark) {
    super(university, course, fullName, mark);
    this.haveScholarship = this.checkDoesStudentHasScholarship();
    setInterval(() => {
      console.log(this.getScholarship());
    }, 30000);
  }

  getHaveScholarship = () => this.haveScholarship;

  getScholarship = () => {
    if (this.checkDoesStudentHasScholarship()) {
      return "Ви отримали 1400 грн. стипендії";
    }
    return "В двоюшників стипендії нема))";
  };

  checkDoesStudentHasScholarship = () =>
    this.getAverageMark() >= 4 && this.getStudyingInUnivercity();
}
