function toCamelCase(str) {
  let buf = ' ';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== '-') {
      buf += str[i];
    } else {
      i++;
      buf += str[i].toUpperCase();
    }
  }
  console.log(buf);
  return buf;
}

toCamelCase('font-size');
toCamelCase('background-color');
toCamelCase('text-align');
