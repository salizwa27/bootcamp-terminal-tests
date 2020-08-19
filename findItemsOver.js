module.exports = function findItemsOver (items,threshold){
    var array = [];

    for(var i=0; i<items.length; i++){
        var itemList = items[i];
      
        if (itemList['qty'] > threshold){
            array.push(itemList);
        }
    }
    return array
}