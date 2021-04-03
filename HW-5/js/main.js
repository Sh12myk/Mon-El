function randomInt(min, max) {
    return min + Math.round((max-min)*Math.random());
    }
    
const getRandomArray = (length, min, max)=> Array.from({length}).map(el=> randomInt(min, max));
const arn = [1, 23, 5, 7, 8, 4, 4, 4, 5, 6, 6, 6, 6, 6]
const getModa = (...numbers) =>{
	const arr = numbers.filter(number => Number.isInteger(number));
  const obj = {};
  arr.forEach(el => obj[el] = arr.filter(element => element===el).length)
  const max = Math.max(...Object.values(obj));
  return Object.keys(obj).filter(el => obj[el]===max).map(Number)
}
function getAverage(...numbers) {
    const newArr = numbers.filter(number => Number.isInteger(number));
    return Number(newArr.reduce((accumulator, number) => accumulator + number / newArr.length, 0).toFixed(2));
}
const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const result = getAverage(...arr);
function getMedian(...numbers) {
    const newArr = numbers.filter(number => Number.isInteger(number));
    newArr.sort((a, b) => a - b);
    const minMedian = Math.floor((newArr.length - 1) / 2);
    const maxMedian = Math.ceil((newArr.length - 1) / 2);
    return (newArr[minMedian] + newArr[maxMedian]) / 2;
}
const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number % 2 && Number.isInteger(number));
}
const oddNumbers = filterEvenNumbers(33, 24, "т1", -8, -1, 5.45, 4, "2", 6, 11, "6");
function countPositiveNumbers(...numbers) {
    return numbers.filter(number => number > 0 && typeof number === 'number').length;
}
const countPositive = countPositiveNumbers(0, 1, -2, 3, -4, -5, 6, 7, '8', 9.99, "1");
function getDividedByFive(...numbers) {
    return numbers.filter(number => number % 5 === 0 && Number.isInteger(number));
}
const dividedByFive = getDividedByFive(6, 2, 55, 100, 78, 2.44, 55, "5", 77, 57, 87, 23, 20.5, 56, 3, 2, "1");
