module.exports = function findItemsOver20(itemList) {
    var highQty = [];

    for (var i = 0; i < itemList.length; i++) {

        if (itemList[i].qty > 20) {
            highQty.push(itemList[i])
        }

    }
    return highQty
}