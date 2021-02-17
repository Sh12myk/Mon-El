const priceNotebook = 15.678;
const priceWine = 123.965;
const priceDeodorant = 90.2345;
const сustomerMoney = 500;
const maxNumber = Math.max(priceNotebook, priceWine, priceDeodorant)
const minNumber = Math.min(priceNotebook, priceWine, priceDeodorant)
const sumPriceAll = priceNotebook + priceWine + priceDeodorant;
const floorpriceNotebook = Math.floor(priceNotebook);
const floorpriceWine = Math.floor(priceWine);
const floorpriceDeodorant = Math.floor(priceDeodorant);
const floorPriceAll = floorpriceNotebook + floorpriceWine + floorpriceDeodorant;
const sumAllNumber = Math.round(sumPriceAll / 100) * 100
const result = floorPriceAll % 2
const restClient = сustomerMoney - sumPriceAll;
const averagePrice = sumPriceAll / 3;
const averageAllNumder = parseFloat(averagePrice.toFixed(2));
const sale = Math.random() * sumPriceAll;
const toPay = sumPriceAll - sale;
const saleWithHundredth = parseFloat(sale.toFixed(2));
const toPayHundredth = parseFloat(toPay.toFixed(2))
const noPat = sumPriceAll / 2 - sale;
const noPatHundredth = parseFloat(noPat.toFixed(2))