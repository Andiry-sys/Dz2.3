let changeString = function () {
  let str = prompt('Enter some text:');
  let buf = '';
  var regExp = /\d+/;

  for (var i = 0; i < str.length; ++i) {
    if (str[i].toUpperCase() === str[i]) {
      buf += str[i].toLowerCase();
    } else if (str === str.match(regExp)) {
      buf += '_';
    } else {
      buf += str[i].toUpperCase();
    }
  }
  return buf;
};

console.log(changeString());
