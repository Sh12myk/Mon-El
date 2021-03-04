const studentsName = Array.from(document.querySelectorAll('.student_name'));
const studentsMarks = Array.from(document.querySelectorAll('.student_mark'));
const pairNames = Array.from(document.querySelectorAll('.pair_name'));
const pairSubject = Array.from(document.querySelectorAll('.pair_subject'));
const pairMark = Array.from(document.querySelectorAll('.pair_mark'));
let i = 0;
studentsName.forEach(el => el.innerHTML = markStudents[i++][0]);
let i1 = 0;
studentsMarks.forEach(el => el.innerHTML = markStudents[i1++][1]);
let i2 = 0;
pairNames.forEach(el => el.innerHTML = markStudentsThemes[i2++][0]);
let i3 = 0;
pairSubject.forEach(el => el.innerHTML = markStudentsThemes[i3++][1]);
let i4 = 0;
pairMark.forEach(el => el.innerHTML = markStudentsThemes[i4++][2]);

const btnName = document.querySelector('.name');
const btnMarks = document.querySelector('.marks');
const btnNamePairs = document.querySelector('.name_pairs');
const btnSubjectPairs = document.querySelector('.subject_pairs');
const btnMarksPairs = document.querySelector('.marks_pairs');
const studentsNames = document.querySelector('.students');
const soloMarks = document.querySelector('.solo_marks');
const studentsPairs = document.querySelector('.students_pairs');
const subjects = document.querySelector('.subjects');
const groupMarks = document.querySelector('.group_marks');

function useBtnName(event) {
    event.preventDefault();
    btnName.classList.toggle('active');
    btnName.classList.toggle('no-active');
    studentsNames.classList.toggle('view');
    studentsNames.classList.toggle('no-view');
}
btnName.addEventListener('click', useBtnName);

function useBtnMarks(event) {
    event.preventDefault();
    btnMarks.classList.toggle('active');
    btnMarks.classList.toggle('no-active');
    soloMarks.classList.toggle('view');
    soloMarks.classList.toggle('no-view');
}
btnMarks.addEventListener('click', useBtnMarks);

function useBtnPairsNames(event) {
    event.preventDefault();
    btnNamePairs.classList.toggle('active');
    btnNamePairs.classList.toggle('no-active');
    studentsPairs.classList.toggle('view');
    studentsPairs.classList.toggle('no-view');
}
btnNamePairs.addEventListener('click', useBtnPairsNames);

function useBtnSubjectPairs(event) {
    event.preventDefault();
    btnSubjectPairs.classList.toggle('active');
    btnSubjectPairs.classList.toggle('no-active');
    subjects.classList.toggle('view');
    subjects.classList.toggle('no-view');
}
btnSubjectPairs.addEventListener('click', useBtnSubjectPairs);

function useMarksPairs(event) {
    event.preventDefault();
    btnMarksPairs.classList.toggle('active');
    btnMarksPairs.classList.toggle('no-active');
    groupMarks.classList.toggle('view');
    groupMarks.classList.toggle('no-view');
}
btnMarksPairs.addEventListener('click', useMarksPairs);