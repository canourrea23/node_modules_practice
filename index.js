// import { nutriScore } from "nutri-score";

// const nutriScoreResult = nutriScore.calculateClass(
//     {
//       energy: 0,
//       fibers: 4,
//       fruit_percentage: 60,
//       proteins: 2,
//       saturated_fats: 2,
//       sodium: 500,
//       sugar: 10
//     },
//     "solid"
//   );
   
//   console.log(nutriScoreResult);
//module not working


const { favFoods } = require ('./app.js')

function printFood (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printFood(favFoods);

const {favFoods} = require("./nodeModule")
const chalk = require('chalk')
const beep = require('beepbeep')
const classNames = require('classnames')
