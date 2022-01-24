const str = 'sdfASfsAFgbd1232b3b2j3b5b23hb5';
const sumNumbers = str.match(/\d+/g).join('').length;
const sumLetters = str.match(/[a-z]/gi).join('').length;
console.log(`Sum numbers ${sumNumbers}\nSum letters ${sumLetters}`);
