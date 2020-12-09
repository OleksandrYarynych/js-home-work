const breadPrice = 15.678;
const dieselPrice = 123.965;
const iphonePrice = 90.2345;
const makeRandomDiscount = Math.random().toFixed(2);

function maxPrice() {
  return Math.max(breadPrice, dieselPrice, iphonePrice);
}

function minPrice() {
  return Math.min(breadPrice, dieselPrice, iphonePrice);
}

function sumPrice() {
  return breadPrice + dieselPrice + iphonePrice;
}

function roundDown() {
  return (
    Math.floor(breadPrice) + Math.floor(dieselPrice) + Math.floor(iphonePrice)
  );
}

function roundPriceFunction() {
  const priceSum = sumPrice() / 100;
  return Math.round(priceSum) * 100;
}

function isPriceAnEvenNumber() {
  return  Math.floor(sumPrice()) % 2 === 0;;
}

function restFro500hrn() {
  return 500 - sumPrice();
}

function middlePrice() {
  return (sumPrice() / 3).toFixed(2);
}

function countSumToPay() {
  if (makeRandomDiscount != 0 && makeRandomDiscount != 1) {
    return (sumPrice() * (1 - makeRandomDiscount)).toFixed(2);
  } else if (makeRandomDiscount == 0) {
    return sumPrice().toFixed(2);
  } else if (makeRandomDiscount == 1) {
    return 0;
  }
}

function countProfit() {
  return (countSumToPay() - sumPrice() / 2).toFixed(2);
}

function templateString(descripeString, result) {
  document.writeln(`${descripeString} : ${result} <br>`);
}

function writeInConsole() {
  console.log(`Максимальна ціна - ${maxPrice()}`);
  console.log(`Мінімальна ціна - ${minPrice()}`);
  console.log(`Сума всіх цін - ${sumPrice()}`);
  console.log(`Сума без копійок округлена в меншу сторону - ${roundDown()}`);
  console.log(`Сума товарів округлена до сотень - ${roundPriceFunction()}`);
  console.log(
    `Сума всіх товарів округлена в меншу сторону є парною - ${isPriceAnEvenNumber()}`
  );
  console.log(`Решта з 500 гривень - ${restFro500hrn()}`);
  console.log(
    `Середнє арифметичне всіх цін округлене до 2х знаків після коми - ${middlePrice()}`
  );
  console.log(`Знижка (в відсотках) - ${makeRandomDiscount * 100}`);
  console.log(`Сума до оплати (знижку враховано) ${countSumToPay()}`);
  console.log(`Прибуток - ${countProfit()}`);

  templateString("Максимальна ціна", maxPrice());
  templateString("Мінімальна ціна", minPrice());
  templateString("Сума всіх цін", sumPrice());
  templateString("Сума без копійок округлена в меншу сторону", roundDown());
  templateString("Сума товарів округлена до сотень ", roundPriceFunction());
  templateString(
    "Сума всіх товарів округлена в меншу сторону є парною",
    isPriceAnEvenNumber()
  );
  templateString("Решта з 500 гривень", restFro500hrn());
  templateString(
    "Середнє арифметичне всіх цін округлене до 2х знаків після коми",
    middlePrice()
  );
  templateString("Знижка (в відсотках) ", makeRandomDiscount * 100);
  templateString("Сума до оплати (знижку враховано)", countSumToPay());
  templateString("Прибуток", countProfit());
}

writeInConsole();
