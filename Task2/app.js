function numberToString(number) {
  let first = [
    'Один',
    'Два',
    'Три',
    'Чотири',
    'Пять',
    'Шість',
    'Сім',
    'Вісім',
    'Девять',
  ];
  let second = [
    'Десять',
    'Одинадцять',
    'Дванадцять',
    'Тринадцять',
    'Чотирнадцять',
    'Пятнадцять',
    'Шістнадцять',
    'Сімнадцять',
    'Вісімнадцять',
    "Дев'ятнадцять",
  ];
  let third = [
    'Двадцять',
    'Тридцять',
    'Сорок',
    "П'ятдесят",
    'Шістдесят',
    'Сімдесят',
    'Вісімдесят',
    "Дев'яносто",
  ];
  if (number > 0 && number <= 9) {
    return first[number - 1];
  }
  if (number >= 10 && number <= 19) {
    return second[number - 10];
  }
  if (number >= 20 && number <= 99) {
    let str = `${number}`;
    str = str.split('');
    let firstNumber = str[0];
    let secondNumber = str[1];
    return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
  }
}
let firstExample = prompt('Enter number ( 0 - 99)');
alert(numberToString(firstExample));
