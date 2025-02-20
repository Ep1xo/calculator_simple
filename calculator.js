let calculation = '';

document.querySelector('.result').innerHTML = '';
function upadeCalculation(symbolNumber) {
  calculation += symbolNumber; 
  document.querySelector('.result').innerHTML = calculation;
}

function clearCalculation() {
  calculation = '';
  document.querySelector('.result').innerHTML = '';
}


/* optional

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

*/