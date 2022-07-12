module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.map(item => item.join('')); 
  while (config.length) {
    let i = 0;
    for (let item of config) {
      if (str.includes(item)) {
        str = str.replace(item, '');
      } else {
        i++;}
    }
    if (i === config.length) {
      config.length = 0;
    }  
  }
  return !str;
};

