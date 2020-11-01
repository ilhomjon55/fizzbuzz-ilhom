var elFormNumber = document.querySelector('.form-main');
var elResultBox = elFormNumber.querySelector('.result-box');


elFormNumber.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elInputNumber = elFormNumber.querySelector('.input-number');
  elInputNumber = parseInt(elInputNumber.value.trim(), 10);

  var fizzValue = 3;
  var buzzValue = 5;

  if (elInputNumber % fizzValue === 0 && elInputNumber % buzzValue === 0) {
    elResultBox.textContent = `FizzBuzz`;
  } else if (elInputNumber % fizzValue === 0) {
    elResultBox.textContent = `Fizz`;
  } else if (elInputNumber % buzzValue === 0) {
    elResultBox.textContent = `Buzz`;
  } else {
    elResultBox.textContent = `Raqam na ${fizzValue} ga, na ${buzzValue} ga bo'linadi :))`;
  }
  elResultBox.classList.remove('d-none');
});