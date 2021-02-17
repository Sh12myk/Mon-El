//Відображення в Html
const allCalculations = [`Максимальна ціна: ${maxNumber} грн.`,
    `Мінімальна ціна: ${minNumber} грн.`, `Сума всіх товарів: ${sumPriceAll}`,
    `Сума товарів з округленням в меншу сторону: ${floorPriceAll} грн.`,
    `Сума товарів з округленням до сотень: ${sumAllNumber} грн.`,
    `Сума товарів є ${result? 'непарним' : 'парним'} числом`,
    `Решта клієнта з 500 грн.: ${restClient} грн.`,
    `Среднє значення: ${averageAllNumder} грн.`,
    `Знижка: ${saleWithHundredth} грн.`,
    `До сплати: ${toPayHundredth} грн.`,
    `Чистий прибуток: ${noPatHundredth} грн.`
]
allCalculations.forEach(el => console.log(el))
const elements = Array.from(document.querySelectorAll('.сalculation'));
console.log(elements);
let i = 0;
elements.forEach(el => el.innerHTML = allCalculations[i++]);