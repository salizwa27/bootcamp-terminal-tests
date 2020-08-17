module.exports = function totalPhoneBill (phoneBill){
    var bill = phoneBill.split(',');
    var total = 0;
    for(let i = 0; i < bill.length; i++) {
        var billList = bill[i].trim();
        if (billList === "call") {
            total += 2.75;
        }

        else if (billList === "sms") {
            total += 0.65;
        }
    }
    return total.toFixed(2);
}