module.exports.favoriteNumber = function(fav, guess){
  if (guess > fav) {
      return "Too high";
  } else if (guess < fav) {
    return "Too low";
  } else {
    return "You got it!";
  }
};
  

module.exports.checkLock = function(first, second, third, fourth) {
  if (first == 3 || first == 5 || first == 7) {
    if (second == 2) {
      if (third >= 5 && 100 >= third) {
        if (fourth < 9 || 20 < fourth) {
          return "correct";
        } else {
          return "incorrect";
        }

      } else {
          return "incorrect";
      }

    } else {
      return "incorrect";
    }
  } else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, price){
  if (item == "MacBook Air" && price >= 999) {
    return true;
  } else if (item == "MacBook Pro" && price >= 1299) {
    return true;
  } else if (item == "Mac Pro" && price >= 2499) {
    return true;
  } else if (item == "Apple Sticker" && price >= 1) {
    return true;
  } else {
    return false;
  }
};