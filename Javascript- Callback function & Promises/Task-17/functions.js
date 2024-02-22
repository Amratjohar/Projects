function add(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function calculate(x, y, operation) {
  return operation(x, y);
}
console.log(calculate(4, 2, add));

console.log(calculate(4, 2, divide));
