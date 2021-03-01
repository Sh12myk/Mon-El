const btnResult = document.querySelector('.btn-result')
const resultLabel = document.getElementById('result');

function calculateSameLetters() {
    const userText = document.getElementById('userText').value.toLowerCase();
    const userLetter = document.getElementById('userLetter').value.toLowerCase();
    let number = 0;
    const intoArray = userText.split("")
    for (const i of intoArray) {
        if (i === userLetter) {
            number++;

        }
    }

    document.getElementById("result").innerHTML = `${number} letters`;
}
btnResult.addEventListener('click', calculateSameLetters)