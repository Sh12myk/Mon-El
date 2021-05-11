const btnResult = document.querySelector('.btn-result')
const resultLabel = document.getElementById('result');

function randomInteger() {
    const userFirstNumber = document.getElementById('userFirstNumber').value;
    const userSecondNumber = document.getElementById('userSecondNumber').value;
    const rand = +userFirstNumber + Math.random() * (+userSecondNumber + 1 - +userFirstNumber);
    return Math.floor(rand);
}

function showResult() {
    const randomNumber = randomInteger()
    document.getElementById("result").innerHTML = randomNumber
}

btnResult.addEventListener('click', showResult)
btnResult.addEventListener('click', randomInteger)

module.exports = {
    randomInteger
}
