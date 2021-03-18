const arrResult = [`Функція №1 : ${getRandomArray(1, 9, 35) }`,
 `Функція №2 : ${getModa(1,5,5,5,1,7,4,47,23,9,43,2,4,5,7,9,0,7,5,3)}`,
 `Функція №3 : ${result}`,
  `Функція №4 : ${median}`,
  `Функція №5 : ${oddNumbers}`,
  `Функція №6 : ${countPositive}`,
  `Функція №7 : ${dividedByFive}`]
  
  arrResult.forEach(el => console.log(el))
  
const elements = Array.from(document.querySelectorAll('.result'));
let i = 0;
elements.forEach(el => el.innerHTML = arrResult[i++]);