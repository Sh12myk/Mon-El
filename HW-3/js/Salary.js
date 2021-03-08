const btnResult = document.querySelector('.btn-result')
const resultLabel = document.getElementById('result');

function calculateMySalary() {
    const userSalary = document.getElementById('userSalary').value;
    if ((userSalary % 1) || (Math.sign(userSalary) === -1)) {
        document.getElementById("result").innerHTML = `Error, enter correct numbers`
    } else {
        let salaryWithoutTax = userSalary - userSalary * 0.195;
        document.getElementById("result").innerHTML = `Salary after taxes = ${salaryWithoutTax}`
    }
}
btnResult.addEventListener('click', calculateMySalary)