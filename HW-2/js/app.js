
    const stepAll = document.querySelectorAll('.step')
    const btnNext = document.querySelector('.btn-submit')
    const formAll = document.querySelectorAll('form')
    const btnBack = document.querySelector('.btn-back')
    const form = document.getElementById('evenChoice');
    const resultLabel = document.getElementById('result');


    let activeStep = 0
    btnNext.addEventListener('click', setStatus)
    btnBack.addEventListener('click', setBackStatus)


    const style = 'background: white; border: 1px solid gold; color: black; font-size: 30px; margin: 20px; padding: 20px;'

function checkTheEnteredUserNumber() {
        btnNext.addEventListener('click', checkTheEnteredUserNumber);
        btnNext.removeEventListener('click', checkTheEnteredUserNumber);
        const startNumber = Math.min(firstNumber.value, secondNumber.value);
        const endNumber = Math.max(firstNumber.value, secondNumber.value);
        console.log(`%cYou want to know the sum of all numbers from  ${ startNumber } to ${endNumber}`, style)
        btnNext.addEventListener('click', mathSum);
        return [startNumber, endNumber]

    }
    btnNext.removeEventListener('click', checkTheEnteredUserNumber);



    function mathSum() {
        btnNext.removeEventListener('click', checkTheEnteredUserNumber);
        const ourNumbers = checkTheEnteredUserNumber()
        const skipEven = document.querySelector("input[name=choice]:checked").value;
        const startNumber = ourNumbers[0]
        const endNumber = ourNumbers[1]
        let result = 0
        for (let loopNumbers = startNumber; loopNumbers <= endNumber; loopNumbers++) {
            {
                if (skipEven === `true` && !(loopNumbers % 2)) {
                    continue;
                }
                result += loopNumbers;

            }
        }
        return [result, skipEven]
    }



    evenChoice.onsubmit = (e) => {
        e.preventDefault();
        const arrMathSum = mathSum()
        const result = arrMathSum[0]
        const skipEven = arrMathSum[1]
        console.log(`%cWant to skip even numbers? ${skipEven}`, style);
        console.log(`%cYoure result: ${result}`, style)
        resultLabel.innerHTML = `Result: ${result}`;
        btnNext.addEventListener('click', addNewHistoryEntry);
        btnNext.removeEventListener('click', checkTheEnteredUserNumber);
        btnNext.addEventListener('click', fillTable);
    }



    function setStatus(event) {
        event.preventDefault()
        if (activeStep < stepAll.length) {
            stepAll[activeStep].classList.add('done')
            formAll[activeStep].classList.toggle('hidden')
        } else
            return
        if (activeStep < stepAll.length - 1) {
            stepAll[activeStep + 1].classList.add('active')
            formAll[activeStep + 1].classList.toggle('hidden')
        }
        activeStep++
    }

    function setBackStatus() {
        if (activeStep < stepAll.length) {
            stepAll[activeStep].classList.remove('done')
            formAll[activeStep].classList.toggle('hidden')
        } else
            return

            activeStep--
    }


    function addNewHistoryEntry() {
        btnNext.addEventListener('click', fillTable);
        btnNext.removeEventListener('click', checkTheEnteredUserNumber);
        const history = []
        const arrMathSum = mathSum()
        const result = arrMathSum[0]
        const ourNumbers = checkTheEnteredUserNumber()
        const startNumber = ourNumbers[0]
        const endNumber = ourNumbers[1]
        const newEntry = [startNumber, endNumber, result]
        history.push(newEntry)

        return history
    }


    const table = document.querySelector('table')

    function fillTable() {
        const myHistory = addNewHistoryEntry()
        for (let i = 0; i < myHistory.length; i++) {
            const tr = document.createElement('tr')
            for (let j = 0; j < myHistory[i]; j++) {
                td.innerHTML = myHistory[i][j]
                const td = document.createElement('td')
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }

    }

 module.exports.activeStep = activeStep
 


