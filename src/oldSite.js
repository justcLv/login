'use strict';

require('../public/index.html');
import 'babel-polyfill';
import './global.scss';

console.log('           1.beginning of the script     ');

const add = function (stuff) { // eslint-disable-line no-unused-vars
  console.log('pused the button', stuff);
  display.value += stuff;
  calculation.push(display.value);
  console.log(calculation);
  // calculationWindow.value = calculation;
};

const clear = function () {
  console.log('cleared');
  display.value = ' ';
};

const equal = function () {
  console.log('pushed equal');

  // return display.value;
};
// function equal () {
//   result.toString();
//   result.parse();
//   console.log(result);
//   return result;
// }
// const results = function () {
//     // math.displayValue;
//     // var displayValue = display.value.toString();
//   // var displayValue = parseInt(display.value);
//   // eval(display.value); // eslint-disable-line no-eval
//    // eslint-disable-line no-eval
//   // return display.value;
//   var displayValue = eval(display.value); // eslint-disable-line no-eval
//   display.value = displayValue;
//   console.log(displayValue);
// };
const calculation = [];
const display = document.getElementById('display');
// const calculationWindow = document.getElementsByClassName('calculationWindow');
// const result = display.value;
// const displayValue = display.value.toString();
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');
// seven.addEventListener('click', (ev) => {
//   ev.preventDefault();
//   // add(7);
//   add(ev.target.value);
// });
// eight.addEventListener('click', (ev) => {
//   ev.preventDefault();
//   // add(8);
//   add(ev.target.value);
// });

// const allButtons = document.querySelectorAll('.yolo-btns');
// console.log('allButtons', allButtons);
// for (let idx = 0; idx < allButtons.length; ++idx) {
//   console.log('allButtons[idx]', allButtons[idx]);
//   allButtons[idx].addEventListener('click', (ev) => {
//     ev.preventDefault();
//     add(ev.target.value);
//   });
// }

console.log('             2.start of query selectors');
// butons
document.querySelectorAll('.calculator-btns').forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    add(ev.target.value);
  });
});
// clear button
document.querySelectorAll('.calculator-btns_cls').forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    clear();
  });
});

document.querySelectorAll('.calculator-btns_equal').forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    equal();
  });
});

// document.querySelectorAll('.calculator-btns').forEach((el) => {
//   el.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     // console.log(calculation.value);
//     calculation.value = calculationWindow.value;
//   });
// });
console.log('         3.script went through till the end      ');
