let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment")

    
    describe("the mostProfitableDepartment function", function() {
      it("should give out the most profitable department", function() {

       var list = [{"department":"hardware","sales":4500,"day":"Monday"},
        {"department":"outdoor","sales":1500,"day":"Monday"},
        {"department":"carpentry","sales":5500,"day":"Monday"},
        {"department":"hardware","sales":7500,"day":"Tuesday"},
        {"department":"outdoor","sales":2505,"day":"Tuesday"},
        {"department":"carpentry","sales":1540,"day":"Tuesday"},
        {"department":"hardware","sales":1500,"day":"Wednesday"},
        {"department":"outdoor","sales":8507,"day":"Wednesday"},
        {"department":"carpentry","sales":8009,"day":"Wednesday"},
        {"department":"hardware","sales":12000,"day":"Thursday"},
        {"department":"outdoor","sales":18007,"day":"Thursday"},
        {"department":"carpentry","sales":6109,"day":"Thursday"},
        {"department":"hardware","sales":7005,"day":"Friday"},
        {"department":"outdoor","sales":12006,"day":"Friday"},
        {"department":"carpentry","sales":16109,"day":"Friday"}]

        assert.deepEqual("outdoor", mostProfitableDepartment(list))
      })

      it("should give out the most profitable department", function() {

      var list = [{"department":"hardware","sales":4500,"day":"Monday"},
      {"department":"outdoor","sales":1500,"day":"Monday"},
      {"department":"carpentry","sales":5500,"day":"Monday"},
      {"department":"hardware","sales":7500,"day":"Tuesday"},
      {"department":"outdoor","sales":2505,"day":"Tuesday"},
      {"department":"carpentry","sales":11540,"day":"Tuesday"},
      {"department":"hardware","sales":1500,"day":"Wednesday"},
      {"department":"outdoor","sales":8507,"day":"Wednesday"},
      {"department":"carpentry","sales":18009,"day":"Wednesday"},
      {"department":"hardware","sales":12000,"day":"Thursday"},
      {"department":"outdoor","sales":18007,"day":"Thursday"},
      {"department":"carpentry","sales":16109,"day":"Thursday"},
      {"department":"hardware","sales":7005,"day":"Friday"},
      {"department":"outdoor","sales":12006,"day":"Friday"},
      {"department":"carpentry","sales":16109,"day":"Friday"}]

      assert.deepEqual("carpentry", mostProfitableDepartment(list))
    })

    it("should give out the most profitable department", function() {

      var list = [{"department":"hardware","sales":4500,"day":"Monday"},
       {"department":"outdoor","sales":1500,"day":"Monday"},
       {"department":"carpentry","sales":5500,"day":"Monday"},
       {"department":"hardware","sales":17500,"day":"Tuesday"},
       {"department":"outdoor","sales":2505,"day":"Tuesday"},
       {"department":"carpentry","sales":1540,"day":"Tuesday"},
       {"department":"hardware","sales":21500,"day":"Wednesday"},
       {"department":"outdoor","sales":8507,"day":"Wednesday"},
       {"department":"carpentry","sales":8009,"day":"Wednesday"},
       {"department":"hardware","sales":12000,"day":"Thursday"},
       {"department":"outdoor","sales":18007,"day":"Thursday"},
       {"department":"carpentry","sales":6109,"day":"Thursday"},
       {"department":"hardware","sales":17005,"day":"Friday"},
       {"department":"outdoor","sales":12006,"day":"Friday"},
       {"department":"carpentry","sales":16109,"day":"Friday"}]

       assert.deepEqual("hardware", mostProfitableDepartment(list))
     })
  
    })