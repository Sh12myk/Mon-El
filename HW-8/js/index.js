
class Student {
    constructor(university, course, fullName, studentMarks = [5, 4, 4, 5], studentStatus = true) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = studentMarks;
        this.studentStatus = studentStatus;
    }
    get getInfo() {
        return `Студент ${this.course}го курсу університету ${this.university}, ${this.fullName}`;
    }
    get marks() {
        if(this.studentStatus != false) {
            return this.studentMarks
        } else {
            return null;
        }
    }
    set setMarks(mark) {
        if(this.studentStatus != false) {
            return this.studentMarks.push(mark);
        } else {
            return null;
        }
    }
    getAverageMark() {
        const sum = this.studentMarks.reduce((sum, number) => {
            return sum + number;
          }, 0);
      
          return +(sum / this.studentMarks.length).toFixed(2);
    }
    dismiss() {
        this.studentStatus = false;
    }
    recover() {
        this.studentStatus = true;
    }
}
class BudgetStudent extends Student {
    constructor(university, course, fullName) {
      super(university, course, fullName);
      setInterval(() => this.getScholarship(), 30000);
    }
  
    getScholarship() {
      if (!this.dismissed && this.getAverageMark() >= 4) {
        console.log('Ви отримали 1400 грн. стипендії');
      }
    }
  }
const ostap = new Student(
    'Вищої Школи Психотерапії м.Одеса', 
    '1',
    'Остап Бендер',
    [5, 4, 4, 5]
    );
  
const mykola = new BudgetStudent(
    'ЛНУ ім.Івана Франка м.Львів', 
    '5',
    'Шостак Микола',
    [4, 4, 4, 4]
);
console.log(ostap.getInfo);
console.log(ostap.marks)
ostap.setMarks = 5;
console.log(ostap.marks);
console.log(ostap.getAverageMark())
ostap.dismiss();
console.log(ostap.marks);
ostap.setMarks = 5;
console.log(ostap.marks);
ostap.recover();
ostap.setMarks = 5;
console.log(ostap.marks);

console.log(mykola.getInfo);
mykola.dismiss();
mykola.getScholarship();
mykola.recover();
mykola.getScholarship();
mykola.setMarks = 5;
mykola.getScholarship();