module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + "," + "\n\n" + message + "\n\nSincerely," + "\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var a = bigString.substring(startA, endA);
  var b = bigString.substring(startB, endB);
  return a+b;

};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var softStart = text.indexOf(searchString);
  var hardStart = softStart + searchString.length;
  var softStop = text.lastIndexOf(searchString);
  return text.substring(hardStart, softStop);
};