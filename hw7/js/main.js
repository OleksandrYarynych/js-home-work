const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function (salary = 100) {
  return this?.tax * salary;
};
const getMiddleTaxes = function () {
  return this?.tax * this?.middleSalary;
};
const getTotalTaxes = function () {
  return this?.tax * this?.middleSalary * this?.vacancies;
};

const getRandomSalary = (min = 1500, max = 2000) =>
  +(Math.random() * Math.abs(max - min) + (max < min ? max : min)).toFixed(0);

function timeFunction() {
  let objectIteration = 0;
  return function writeInConsole() {
    objectIteration++;
    let ob = choseObject(objectIteration);
    const generatesalary = getRandomSalary();
    // console.log(
    //   `salary : ${salary},tax : ${ob?.tax},profit : ${
    //     salary - ob?.tax * salary
    //   }`
    // );
    const salaryInCountries={
      salary:generatesalary,
      tax:ob?.tax,
      profit:generatesalary-ob?.tax*generatesalary
    }
    console.log(salaryInCountries);
  };
}

const choseObject = (objectIteration) => {
  if (objectIteration % 3 === 1) return ukraine;
  if (objectIteration % 3 === 2) return latvia;
  if (objectIteration % 3 === 0) return litva;
};

const obInConsole = timeFunction();
setInterval(obInConsole, 5000);
