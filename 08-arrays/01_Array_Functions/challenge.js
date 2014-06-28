module.exports.reversePlusOne = function(inputArray){
  inputArray.push(1);
  return inputArray.reverse();
};

module.exports.plusesEverywhere = function(someArray){
  var plusesArray = someArray.join("+");
  return plusesArray;
};

module.exports.arrayQuantityPlusOne = function(quantity) {
  return quantity.length + 1
};
