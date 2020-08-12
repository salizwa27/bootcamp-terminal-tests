module.exports = function transportFee (cost){
    if (cost == 'morning'){
        return 'R20'
        }else if (cost == 'afternoon'){
        return 'R10'
        }else if (cost == 'nightshift'){
        return 'free'
        }
  };