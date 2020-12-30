import  './style.css';

import {restFro500hrn} from "./utills.js"
import {sumAllNumbers} from "./utills.js"
import {numberToPower} from "./utills.js"
import {setMarksForThems} from "./utills.js"
import {countPositiveNumbers} from "./utills.js"
import {getAverageMark} from "./utills.js"
import {getMyTaxes} from "./utills.js"
import {generateBlocksInterval} from "./utills.js"
import {fillBlocksInNewColor} from "./utills.js"

console.log("hw1")
console.log(restFro500hrn(264))
console.log("hw2")
console.log(sumAllNumbers(1,15,"true"))
console.log("hw3")
console.log(numberToPower(2,10))
console.log("hw4")
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
console.log(setMarksForThems(students))
console.log("hw5")
const numbers=[5,5,-9,-9,8,-9,-9,8];
console.log(countPositiveNumbers(numbers))
console.log("hw6")
const st={
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5],
  },
}
console.log(getAverageMark(st))
console.log("hw7")
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
console.log(getMyTaxes.call(ukraine))


generateBlocksInterval();
const interval=1000;
setInterval(fillBlocksInNewColor, interval);