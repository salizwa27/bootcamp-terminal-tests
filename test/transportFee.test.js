let assert = require("assert");
let transportFee = require("../transportFee")

describe("The tarnsportFee function", function(){

    it("should be able to return R20 if it's morning shift", function(){
        assert.equal("R20", transportFee("morning"));
    })

    it("should be able to return R10 if it's afternoon shift", function(){
        assert.equal("R10", transportFee("afternoon"));
    })
  
    it("should be able to return free if it's night shift", function(){
        assert.equal("free", transportFee("nightshift"));
    })


})