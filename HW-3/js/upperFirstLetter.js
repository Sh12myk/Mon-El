const btnResult = document.querySelector('.btn-result')
const resultLabel = document.getElementById('result');

function upperFirstLetter() {
    const userName = document.getElementById('userName').value.toLowerCase()
    const redName = userName.charAt(0).toUpperCase() + userName.slice(1);
    document.getElementById("result").innerHTML = redName;
}
btnResult.addEventListener('click', upperFirstLetter)