{
    const stepAll = document.querySelectorAll('.step')
    const btnNext = document.querySelector('.btn-submit')
    const formAll = document.querySelectorAll('form')
    const btnBack = document.querySelector('.btn-back')


    let activeStep = 0
    btnNext.addEventListener('click', setStatus)
    btnBack.addEventListener('click', setBackStatus)

    btnNext.addEventListener('click', userNumber);


    function userNumber() {
        const startNumber = Math.min(firstNumber.value, secondNumber.value);
        const endNumber = Math.max(firstNumber.value, secondNumber.value);
        console.log(`You want to know the sum of all numbers from  ${ startNumber } to ${endNumber}`)
        btnNext.removeEventListener('click', userNumber);

    }
    const form = document.getElementById('evenChoice');
    const resultLabel = document.getElementById('result');


    form.onsubmit = (e) => {
        e.preventDefault();
        const startNumber = Math.min(firstNumber.value, secondNumber.value);
        const endNumber = Math.max(firstNumber.value, secondNumber.value);
        const skipEven = document.querySelector("input[name=choice]:checked").value;
        let result = 0;
        for (let loopNumbers = startNumber; loopNumbers <= endNumber; loopNumbers++) {
            {
                if (skipEven === `true` && loopNumbers % 2 === 0) {
                    continue;
                }
                result += loopNumbers;

            }
        }
        console.log(`Want to skip even numbers? ${skipEven}`);
        console.log(`Youre result: ${result}`)
        resultLabel.innerHTML = `result: ${result}`;
    }

    function setStatus(event) {
        event.preventDefault()
        if (activeStep < stepAll.length) {
            stepAll[activeStep].classList.add('done')
            formAll[activeStep].classList.toggle('hidden')
        }
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
    let history = []


}