var operation = [];
var eraseOneDigit = document.getElementById("eraseOneDigit");
var eraseOne = [];

var input = document.getElementById("firstInput");
var prevOp = document.getElementById("prevOp");
var equal = document.getElementById("equal");
var erase = document.getElementById("erase");

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
  console.log(eraseOne);
  prevOp.innerHTML = eraseOne;
});
prevOp.addEventListener("", () => {
  //make that i doesnt that more than operation per time
});
//Calculations
equal.addEventListener("click", () => {
  var position = operation.length - 1;
  var lastOp = operation[position];
  //-
  var includesSubstraction = lastOp.includes("-");
  if (includesSubstraction) {
    var firstValue = lastOp.split("-")[0];
    var secondValue = lastOp.split("-")[1];
  } else if ((secondValue = Symbol)) {
    input.innerHTML = "invalid";
  } else {
    var result = parseFloat(firstValue) + parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //+
  var includesSum = lastOp.includes("+");
  if (includesSum) {
    var firstValue = lastOp.split("+")[0];
    var secondValue = lastOp.split("+")[1];
  } else if ((secondValue = Symbol)) {
    input.innerHTML = "invalid";
  } else {
    var result = parseFloat(firstValue) + parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //÷
  var includesSum = lastOp.includes("/");
  if (includesSum) {
    var firstValue = lastOp.split("/")[0];
    var secondValue = lastOp.split("/")[1];
    if (secondValue == "0") {
      input.innerHTML = "Cant divide by zero";
    } else if ((secondValue = Symbol)) {
      input.innerHTML = "invalid";
    } else {
      var result = parseFloat(firstValue) / parseFloat(secondValue);
      input.innerHTML = result;
      prevOp.innerHTML = result;
    }
  }
  //*
  var includesSum = lastOp.includes("*");
  if (includesSum) {
    var firstValue = lastOp.split("*")[0];
    var secondValue = lastOp.split("*")[1];
  } else if ((secondValue = Symbol)) {
    input.innerHTML = "invalid";
  } else {
    var result = parseFloat(firstValue) * parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
});
