var operation = [];
function getValue(event) {
  var value = event;
  value = value.innerText;
  operation.push(parseInt(value));
  console.log(operation);
  var firstInput = document.getElementById("firstInput");
  firstInput.innerHTML = operation;
}
function showInput() {}
