var operation = [];

var input = document.getElementById("firstInput");
var equal = document.getElementById("equal");
var erase = document.getElementById("erase");

function getValue(event) {
  var value = event;
  value = value.innerText;
  value = input.append(value);
  value = input.innerText;
  operation.push(value);
}
equal.addEventListener("click", () => {
  var position = operation.length - 1;
  var lastOp = operation[position];
  var result = Math.round(eval(lastOp))
  input.innerHTML = result;
});

erase.addEventListener("click", () => {
  input.innerText = "";
});
