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

function getPairsList(studentsPair, themes) {
    studentsPair = getPairs(students);
    let studentsPairsList = [];
    for (let i = 0; i < studentsPair.length; i++) {
        studentsPairsList.push([studentsPair[i].join(" i "), themes[i]]);
    }
    return studentsPairsList;

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


const pairs = getPairs(students);
console.log(JSON.stringify(pairs));
const pairsThemes = getPairsList(pairs, themes);
console.log(JSON.stringify(pairsThemes));

function getMarkStudentsThemes(pairs, themes, mark) {
    const studentsMarksThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        mark = Math.floor(Math.random() * 5) + 1;
        studentsMarksThemes[i] = [pairsThemes[i][0], themes[i], mark];
        console.log(pairsThemes);
    }
    return studentsMarksThemes;
}
const markStudents = getMarks(students, marks);
console.log(JSON.stringify(markStudents));
const markStudentsThemes = getMarkStudentsThemes(pairs, themes);
console.log(JSON.stringify(markStudentsThemes));
module.exports = {
    getMarkStudentsThemes
}