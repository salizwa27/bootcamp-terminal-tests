let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function", function(){

    it ("should return all the registration numbers that are from Paarl", function(){
        assert.equal(countAllPaarl("CJ 123, CJ 345 123, CL 123 894, CA 569"), "2")
    })

   // it ("should return 'No Registration' registration numbers that are not from Paarl", function(){
   //     assert.equal(countAllPaarl("CA 123 589, CY 456, CK 789542, CA 4569"), "No Registration")
   // })
})