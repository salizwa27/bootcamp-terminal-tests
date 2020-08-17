let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment")

    
    describe("the mostProfitableDepartment function", function() {
      it("should give out the most profitable department", function() {
        assert.equal(0, mostProfitableDepartment('greaterDep'))
      })
    })