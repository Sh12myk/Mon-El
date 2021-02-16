const firstPrice = 15.678;
const secondPrice = 123.965;
const thirdPrice = 90.2345;


//Максимальне число
const maxNumber = Math.max(firstPrice, secondPrice, thirdPrice)
console.log(`Максимальна ціна: ${maxNumber}`);
//Мінімальне число
const minNumber = Math.min(firstPrice, secondPrice, thirdPrice)
console.log(`Мінімальна ціна: ${minNumber}`);
//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumPriceAll = firstPrice + secondPrice + thirdPrice;
console.log(`Сума всіх товарів: ${sumPriceAll}`);
//Без копійок
//Округлення в меншу сторону
const floorFirstPrice = Math.floor(firstPrice);
const floorSecondPrice = Math.floor(secondPrice);
const floorThirdPrice = Math.floor(thirdPrice);
const floorPriceAll = floorFirstPrice + floorSecondPrice + floorThirdPrice;
console.log(`Сума товарів з округленням в меншу сторону: ${floorPriceAll}`);

//Округлення вартості товарів до сотень
const sumAllNumber = Math.round(sumPriceAll / 100) * 100
console.log(`Сума товарів з округленням до сотень: ${sumAllNumber}`);

//Чи є сума всіх товарів парним чи непарним числом?
const result = floorPriceAll % 2
console.log(`Сума товарів є ${result? 'непарним' : 'парним'} числом`)

// Решта
const changeClient = 500 - sumPriceAll;
console.log(`Решта клієнта з 500 грн.: ${changeClient}`);

//Середнє значення
const averagePrice = sumPriceAll / 3;
const averageAllNumder = averagePrice.toFixed(2);
console.log(`Среднє значення: ${averageAllNumder}`);

// Знижка
const sale = Math.random() * sumPriceAll;
const toPay = sumPriceAll - sale;
const saleWithHundredth = sale.toFixed(2);
console.log(`Знижка: ${saleWithHundredth}`);
const toPayHundredth = toPay.toFixed(2)
console.log(`До сплати: ${toPayHundredth} `);
const noPat = sumPriceAll / 2 - sale;
const noPatHundredth = noPat.toFixed(2)
console.log(`Чистий прибуток: ${noPatHundredth}`);