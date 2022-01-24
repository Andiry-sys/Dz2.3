function toABB(str) {
  let buf = [];
  let res = '';
  buf = str.split(' ');
  for (var i = 0; i < buf.length; ++i) {
    for (var j = 0; j === 0; ++j) {
      res += buf[i][j].toUpperCase();
    }
  }
  console.log(res);
}

toABB('cascading style sheets');
toABB('объектно ориентированное программирование');
