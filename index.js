var operation = [];

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
});

equal.addEventListener("click", () => {
  var position = operation.length - 1;
  var lastOp = operation[position];

  var includesSubstraction = lastOp.includes("-");
  if (includesSubstraction) {
    var firstValue = lastOp.split("-")[0];
    var secondValue = lastOp.split("-")[1];
    var result = firstValue - secondValue;
    input.innerHTML = result;
  }
  var includesSum = lastOp.includes("+");
  if (includesSum) {
    var firstValue = lastOp.split("+")[0];
    var secondValue = lastOp.split("+")[1];
    var result = parseFloat(firstValue) + parseFloat(secondValue);
    input.innerHTML = result;
  }
  var includesSum = lastOp.includes("/");
  if (includesSum) {
    var firstValue = lastOp.split("/")[0];
    var secondValue = lastOp.split("/")[1];
    var result = parseFloat(firstValue) / parseFloat(secondValue);
    input.innerHTML = result;
  }
  var includesSum = lastOp.includes("*");
  if (includesSum) {
    var firstValue = lastOp.split("*")[0];
    var secondValue = lastOp.split("*")[1];
    var result = parseFloat(firstValue) * parseFloat(secondValue);
    input.innerHTML = result;
  }
});
