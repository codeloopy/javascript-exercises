const ftoc = function(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9;
  return celsius == 0 ? parseFloat(0) : parseFloat(celsius.toFixed(1));
}

const ctof = function(celsius) {
  var fahrenheit = parseFloat((9/5 * celsius) + 32);
  return fahrenheit == 0 ? parseFloat(0) : parseFloat(fahrenheit.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
