var operation = [];
var eraseOne = [];
var isOperation = false;
var executed = false;
var executedPeriod = false;
var eraseOneDigit = document.getElementById("eraseOneDigit");

var firstValue;
var secondValue;
var result;

var input = document.getElementById("firstInput");
var prevOp = document.getElementById("prevOp");
var equal = document.getElementById("equal");
var erase = document.getElementById("erase");
var period = document.getElementById("period");

var operators = document.querySelectorAll(".op");

function getValue(event) {
  var value = event;
  value = value.innerText;
  value = prevOp.append(value);
  value = prevOp.innerText;
  operation.push(value);
}
function getPoint(event) {
  console.log(executedPeriod);
 
  if (prevOp.innerText != "" && executedPeriod == false) {
    executedPeriod = true;
    var value = event;
    value = value.innerText;
    value = prevOp.append(value);
    value = prevOp.innerText;
    operation.push(value);
  }
}
erase.addEventListener("click", () => {
  input.innerText = "";
  prevOp.innerText = "";
  isOperation = "";
  executedPeriod = "";
  operation = [];
});
eraseOneDigit.addEventListener("click", () => {
  eraseOne = prevOp.innerText;
  eraseOne = eraseOne.toString().slice(0, -1);
  eraseOne.toString().slice(0, -1);
  isOperation = "";
  executedPeriod = "";
  prevOp.innerHTML = eraseOne;
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    // console.log(operator.innerText);
    if (operation.length == 1) {
      isOperation = ' ';
    }
    executedPeriod = false;
    isOperation = true ? !isOperation : isOperation;
    console.log(isOperation);
    console.log(operation.length);
    if (isOperation == false && operation.length > 2) {
      operation.pop();
      var position = operation.length - 1;
      var lastOp = operation[position];
      equalTo(lastOp);
    }
  });
});
equal.addEventListener("click", () => {
  var position = operation.length - 1;
  var lastOp = operation[position];
  equalTo(lastOp);
});

function equalTo(lastOp) {
  isOperation = false;
  var includesSubs = lastOp.includes("-");

  //-

  if (includesSubs) {
    substraction();
  }

  function substraction() {
    firstValue = lastOp.split("-")[0];
    secondValue = lastOp.split("-")[1];
    result = parseInt(firstValue) - parseInt(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //+
  var includesSum = lastOp.includes("+");

  if (includesSum) {
    sum();
  }

  function sum() {
    var firstValue = lastOp.split("+")[0];
    var secondValue = lastOp.split("+")[1];
    var result = parseFloat(firstValue) + parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //÷
  var includesDiv = lastOp.includes("/");

  if (includesDiv) {
    div();
  }

  function div() {
    var firstValue = lastOp.split("/")[0];
    var secondValue = lastOp.split("/")[1];
    var result = parseFloat(firstValue) / parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //*

  var includesMul = lastOp.includes("*");
  if (includesMul) {
    mult();
  }

  function mult() {
    var firstValue = lastOp.split("*")[0];
    var secondValue = lastOp.split("*")[1];
    var result = parseFloat(firstValue) * parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //^
  var includesPercent = lastOp.includes("^");

  if (includesPercent) {
    pow();
  }

  function pow() {
    var firstValue = lastOp.split("^")[0];
    var secondValue = lastOp.split("^")[1];
    var result = parseFloat(firstValue) % parseFloat(secondValue);
    result = Math.pow(firstValue, secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //%
  var includesPer = lastOp.includes("%");
  if (includesPer) {
    percent();
  }

  function percent() {
    var firstValue = lastOp.split("%")[0];
    var secondValue = lastOp.split("%")[1];
    var result = parseFloat(firstValue) % parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  nan();
  infinity();
  zero();
}

function nan() {
  if (isNaN(prevOp.innerHTML)) {
    prevOp.innerHTML = "Invalid";
    input.innerHTML = "Invalid";
    setTimeout(() => {
      input.innerHTML = "";
      prevOp.innerHTML = "";
      isOperation = "";
      executedPeriod = "";
    }, 1000);
  }
}
function zero() {
  if (prevOp.innerHTML == 0) {
    prevOp.innerHTML = " ";
    operation = [];
    setTimeout(() => {
      input.innerHTML = "";
      prevOp.innerHTML = "";
      isOperation = "";
      executedPeriod = "";
    }, 1000);
  }
}
function infinity() {
  if (prevOp.innerHTML == "Infinity" && input.innerHTML == "Infinity") {
    input.innerHTML = "Cant divid by zero";
    prevOp.innerHTML = "Cant divid by zero";
    setTimeout(() => {
      input.innerHTML = "";
      prevOp.innerHTML = "";
      isOperation = "";
      executedPeriod = "";
    }, 1000);
  }
}
