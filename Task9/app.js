function GetLongString(str1, str2, str3) {
  return str1.concat(str2, str3);
}
let a = 'строка';
let b = ' очень';
let c = ' длинная';

console.log(GetLongString(a, b, c));
