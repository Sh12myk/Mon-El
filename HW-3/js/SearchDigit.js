const btnResult = document.querySelector('.btn-result')
const resultLargeLabel = document.getElementById('large');
const resultSmallLabel = document.getElementById('small');
const userNumber = document.getElementById('userNumber')


const getMaxDigit = (number) => {
    number = userNumber.value;
    let maxNum = 0;
    for (let i = 0; i <= number.length; i++) {
        if (+number[i] > +maxNum) {
            maxNum = number[i];
        }
    }
    resultLargeLabel.innerHTML = `Largest digit: ${maxNum}`;
    return maxNum;
}
btnResult.addEventListener('click', getMaxDigit)

function getMinNum(number) {
    number = userNumber.value;
    let minNum = Math.min(...number.split(''))
    resultSmallLabel.innerHTML = `Smallest digit: ${minNum}`;
    return minNum;
}

btnResult.addEventListener('click', getMinNum)