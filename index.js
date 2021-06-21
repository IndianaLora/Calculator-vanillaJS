var operation = [];
var eraseOne = [];
var eraseOneDigit = document.getElementById("eraseOneDigit");

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
  //if includes in the 3rd position
  //add event to --<-- button
  //
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
    var result = parseFloat(firstValue) - parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //+
  var includesSum = lastOp.includes("+");
  if (includesSum) {
    var firstValue = lastOp.split("+")[0];
    var secondValue = lastOp.split("+")[1];
    var result = parseFloat(firstValue) + parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //÷
  var includesSum = lastOp.includes("/");
  if (includesSum) {
    var firstValue = lastOp.split("/")[0];
    var secondValue = lastOp.split("/")[1];
    var result = parseFloat(firstValue) / parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  //*
  var includesSum = lastOp.includes("*");
  if (includesSum) {
    var firstValue = lastOp.split("*")[0];
    var secondValue = lastOp.split("*")[1];
    var result = parseFloat(firstValue) * parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  var includesSum = lastOp.includes("%");
  if (includesSum) {
    var firstValue = lastOp.split("%")[0];
    var secondValue = lastOp.split("%")[1];
    var result = parseFloat(firstValue) % parseFloat(secondValue);
    input.innerHTML = result;
    prevOp.innerHTML = result;
  }
  if (isNaN(prevOp.innerHTML)) {
    prevOp.innerHTML = "Invalid";
    input.innerHTML = "Invalid";
    setTimeout(() => {
      input.innerHTML = "";
      prevOp.innerHTML = "";
    }, 1000);
  }
  if (result == "Infinity") {
    input.innerHTML = "Cant divid by zero";
    prevOp.innerHTML = "Cant divid by zero";
  }
  if (input.innerHTML == "" || prevOp.innerHTML == "") {
    //do something
  }
});
