let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20")

describe("the findItemsOver20 function", function() {
    it("should give out those with quantity over 20", function() {
      assert.equal(0, findItemsOver20(20))
    })
  })