module.exports = function check(str, bracketsConfig) {
  
  const steak = [];

  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < bracketsConfig.length; j++){

      if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]){
        (steak[steak.length - 1] !== str[i]) ? steak.push(str[i]) : steak.pop();
        break;
      }


      if (str[i] === bracketsConfig[j][0]){
        steak.push(str[i]);
        break;
      }


      if (str[i] === bracketsConfig[j][1]){
        if (steak.length === 0) return false;
        if (steak[steak.length - 1] !== bracketsConfig[j][0]) return false;
        steak.pop();
        break;
      }

    }

  }

  if (steak.length > 0) return false;
  return true;
}
