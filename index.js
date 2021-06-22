var operation = [];
var isOperation = false;
var eraseOne = [];
var a = [];
var eraseOneDigit = document.getElementById("eraseOneDigit");

var firstValue;
var secondValue;
var result;

var input = document.getElementById("firstInput");
var prevOp = document.getElementById("prevOp");
var equal = document.getElementById("equal");
var erase = document.getElementById("erase");

var operators = document.querySelectorAll(".op");

function getValue(event) {
  var value = event;
  value = value.innerText;
  value = prevOp.append(value);
  value = prevOp.innerText;
  operation.push(value);
}
erase.addEventListener("click", () => {
  input.innerText = "";
  prevOp.innerText = "";
});
eraseOneDigit.addEventListener("click", () => {
  eraseOne = prevOp.innerText;
  eraseOne = eraseOne.toString().slice(0, -1);
  prevOp.innerHTML = eraseOne;
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    isOperation = true ? !isOperation : isOperation;
    if (isOperation == true && operation.length > 1) {
      operation.pop();
      var position = operation.length - 1;
      var lastOp = operation[position];
      console.log(lastOp);
      prevOp.innerText = lastOp;
      equalTo();
    }
  });
});
equal.addEventListener("click", equalTo);

function equalTo() {
  var position = operation.length - 1;
  var lastOp = operation[position];

  //-
  var includesSubs = lastOp.includes("-");
  if (includesSubs) {
    substraction();
  }

  function substraction() {
    firstValue = lastOp.split("-")[0];
    secondValue = lastOp.split("-")[1];
    result = parseFloat(firstValue) - parseFloat(secondValue);
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
}

function nan() {
  if (isNaN(prevOp.innerHTML)) {
    prevOp.innerHTML = "Invalid";
    input.innerHTML = "Invalid";
    setTimeout(() => {
      input.innerHTML = "";
      prevOp.innerHTML = "";
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
    }, 1000);
  }
}
