//Відображення в Html
document.getElementById("max_price").innerHTML = `Максимальна ціна: ${maxNumber} грн.`;
document.getElementById("min_price").innerHTML = `Мінімальна ціна: ${minNumber} грн.`;
document.getElementById("total_price").innerHTML = `Сума всіх товарів: ${sumPriceAll}`;
document.getElementById("total_price_floor").innerHTML = `Сума товарів з округленням в меншу сторону: ${floorPriceAll} грн.`;
document.getElementById("total_price_hundredth").innerHTML = `Сума товарів з округленням до сотень: ${sumAllNumber} грн.`;
document.getElementById("even_or_odd").innerHTML = `Сума товарів є ${result? 'непарним' : 'парним'} числом`;
document.getElementById("client_change").innerHTML = `Решта клієнта з 500 грн.: ${changeClient} грн.`;
document.getElementById("average").innerHTML = `Среднє значення: ${averageAllNumder} грн.`;
document.getElementById("sale").innerHTML = `Знижка: ${saleWithHundredth} грн.`;
document.getElementById("to_pay").innerHTML = `До сплати: ${toPayHundredth} грн.`;
document.getElementById("no_pat").innerHTML = `Чистий прибуток: ${noPatHundredth} грн.`;