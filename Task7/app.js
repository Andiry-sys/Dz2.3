var myMath = {
  '+': function (a, b) {
    return a + b;
  },
  '-': function (a, b) {
    return a - b;
  },
  '*': function (a, b) {
    return a * b;
  },
  '/': function (a, b) {
    return a / b;
  },
  calc: function (a, b, op) {
    return this[op](a, b);
  },
};

console.log(myMath.calc(5, 6, '+'));
