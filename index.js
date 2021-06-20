var operation;
var input = document.getElementById("firstInput");
var equal = document.getElementById("equal");

function getValue(event) {
  var value = event;
  value = value.innerText;
  input.value = input.append(value);

  equal.addEventListener("click", () => {
    operation = input.innerText;
    var eval = operation;
    console.log(eval);
  });
}
function showInput() {}
