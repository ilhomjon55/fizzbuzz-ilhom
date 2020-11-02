var elFormNumber = document.querySelector('.form-main');
var elResultBox = elFormNumber.querySelector('.result-box');

elFormNumber.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elInputNumber = elFormNumber.querySelector('.input-number');
  elInputNumber = parseInt(elInputNumber.value.trim(), 10);

  var fizzValue = 3;
  var buzzValue = 5;

  var resultFizzBuzz = '';

  if (elInputNumber % fizzValue === 0) {
    resultFizzBuzz += 'Fizz';
  }

  if (elInputNumber % buzzValue === 0) {
    resultFizzBuzz += 'Buzz';
  }
  elResultBox.textContent = resultFizzBuzz || elInputNumber;
  elResultBox.classList.remove('d-none');

});