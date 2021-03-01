const btnResult = document.querySelector('.btn-result')
const resultLabel = document.getElementById('result');


function computePower() {
    const userNumber = document.getElementById('userNumber').value;
    const userExponent = document.getElementById('userExponent').value;
    if (userNumber % 1 !== 0 || userExponent % 1 !== 0) {
        document.getElementById("result").innerHTML = `Error, enter correct numbers`
    } else {
        let exponentiation = 1;
        for (let i = 0; i < userExponent; i++) {
            exponentiation *= userNumber;

        }
        document.getElementById("result").innerHTML = exponentiation;
    }
}
btnResult.addEventListener('click', computePower)