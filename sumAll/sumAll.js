const sumAll = function(num1, num2) {
  let total = 0;

  while((typeof num1 == "number") && (typeof num2 == "number")){
    if((num1 < 0) || (num2 < 0)){
      return "ERROR";
    } else if(num1 < num2) {
      for(var i = num1; i <= num2; i++){
        total += i;
      }
    } else {
      for (var i = num2; i <= num1; i++) {
        total += i;
      }
    }

    return total;
  }
  return "ERROR";
}

module.exports = sumAll
