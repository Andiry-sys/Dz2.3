function GetUrl(url) {
  let protocol;
  let domain;
  let way;
  let obj = new URL(url);

  protocol = obj.protocol;
  protocol = protocol.slice(0, protocol.length - 1);
  domain = obj.hostname;
  way = obj.pathname;
  way = way.slice(1);
  return (
    'Информация\nпротокол: ' +
    protocol +
    '\nдомен: ' +
    domain +
    '\nпуть: ' +
    way
  );
}

let url = 'https://itstep.org/ua/about';

console.log(GetUrl(url));
