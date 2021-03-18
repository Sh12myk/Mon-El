const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
function getSubjects(student) {
  const subjectsList = Object.keys(student.subjects);
  const result = subjectsList.map((subject) => {
    return (subject[0].toUpperCase() + subject.slice(1)).replaceAll('_', ' ');
  });

  return result;
}
function getAverage(...numbers) {
  const sum = numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return +(sum / numbers.length).toFixed(2);
}
function getAverageMark(student) {
  const studentMarks = Object.values(student.subjects);

  const studentMarksList = studentMarks.reduce((list, mark) => {
    return list.concat(...mark);
  }, []);

  return getAverage(...studentMarksList);
}
function getStudentInfo(student) {
  const infoStudent = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)}
  return infoStudent   
}
function getStudentsNames(students) {
  const names = students.map(student => {
    return student.name;
  });

  return names.sort();
}
function getBestStudent(students) {
  let bestMark = 0;
  let studentName = '';

  students.forEach((student) => {
    const currentMark = getAverageMark(student);
    if (bestMark < currentMark) {
      bestMark = currentMark;
      studentName = student.name;
    }
  });

  return studentName;
}
function calculateWordLetters(word) {
  return word.split('').reduce((accumulator, letter) => {
    const currentCount = accumulator[letter] || 0;

    return {
      ...accumulator,
      [letter]: currentCount + 1
    };
  }, {});
}
