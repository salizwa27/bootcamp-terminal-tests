let assert = require("assert")
let totalPhoneBill = require("../totalPhoneBill")

describe ("The totalPhoneBill function", function (){

    it("should return the total if call is made", function (){
        assert.equal("2.75", totalPhoneBill("call"))
    })

    it("should return the total if sms is made", function (){
        assert.equal("0.65", totalPhoneBill("sms"))
    })
})