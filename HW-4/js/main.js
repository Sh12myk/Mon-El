const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
    const studentsMans = [students[0], students[1], students[4]];
    const studentsWomans = [students[2], students[3], students[5]];
    let studentsPairs = [];
    for (let i = 0; i < studentsMans.length; i++) {
        studentsPairs[i] = [studentsMans[i], studentsWomans[i]];
    }
    return studentsPairs;
}

function getThemes(pairs, themes) {
    let studentsPairsThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        studentsPairsThemes[i] = [pairs[i], themes[i]];
    }
    return studentsPairsThemes;
}

function getMarks(students, marks) {
    let studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsMarks[i] = [students[i], marks[i]];
    }
    return studentsMarks;
}

function getMarkStudentsThemes(studentsPairs, themes) {
    const studentsMarksThemes = [];
    for (let i = 0; i < studentsPairs.length; i++) {
        mark = Math.floor(Math.random() * 5) + 1;
        studentsMarksThemes[i] = [studentsPairs[i], themes[i], mark];
    }
    return studentsMarksThemes;
}
const pairs = getPairs(students);
console.log(JSON.stringify(pairs));
const pairsThemes = getThemes(pairs, themes);
console.log(JSON.stringify(pairsThemes));
const markStudents = getMarks(students, marks);
console.log(JSON.stringify(markStudents));
const markStudentsThemes = getMarkStudentsThemes(pairs, themes);
console.log(JSON.stringify(markStudentsThemes));