const btnResult = document.querySelector('.btn-result')
const resultLabel = document.getElementById('result');

function convertCurrency() {
    const userInput = String(document.getElementById('userNumber').value);
    const reDol = /([0-9,]+(\.[0-9]{2}))?\$/;
    const reUah = /([0-9,]+(\.[0-9]{2})?)uah/;
    const dolToUah = 27.995;
    const uahToDol = 0.0358;

    if (reDol.test(userInput)) {
        const numDol = parseFloat(userInput.match(/([0-9,]+(\.[0-9]{2})?)/))
        const res = numDol * dolToUah;
        document.getElementById("result").innerHTML = res.toFixed(2) + ' грн';

    } else if (reUah.test(userInput)) {
        const numUah = parseFloat(userInput.match(/([0-9,]+(\.[0-9]{2})?)/))
        const res = numUah * uahToDol;
        document.getElementById("result").innerHTML = res.toFixed(2) + '$';
    } else {
        document.getElementById("result").innerHTML = 'Erorr(input uah or $)';
    }

}
btnResult.addEventListener('click', convertCurrency)