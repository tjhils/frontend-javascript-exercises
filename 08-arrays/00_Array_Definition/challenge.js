module.exports.newArray = function(a, b, c, d){
    var theArray = [a, b, c, d]
    return theArray;
};

module.exports.firstAndLast = function(inputArray){
    var lastElementIndex = inputArray.length - 1;
    var answerEnd = (inputArray[lastElementIndex]);
    var answerStart = (inputArray[0]);
    var finalArray = [answerStart, answerEnd];
    return finalArray;
    
};
