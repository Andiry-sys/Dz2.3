function task6(...strings) {
  let n = strings.length;
  let newText = '';
  for (let i = 0; i < n; i++) {
    let text = strings[i];
    newText += text;
  }
  return newText;
}

function task66() {
  let n = prompt('Ввести количество строк, которое нужно добавить: ');
  let strings = [];
  for (let i = 1; i <= n; i++) {
    let text = prompt('Ввод строки №' + i + ' : ');
    strings.push(text);
  }
  alert(task6(...strings));
}

task66();
