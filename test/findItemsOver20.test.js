let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20")

describe("the findItemsOver20 function", function() {

  it("should give out those with quantity over 20 ", function() {
     
      var items = [
          {name: "apples", qty : 10},
          {name: "pears", qty : 7},
          {name: "grapes", qty : 27},
          {name: "apples", qty : 13}
      ];
    assert.deepEqual(findItemsOver20(items), [{name: "grapes", qty : 27}])
  })

  it("should give out those with quantity over 20 ", function() {
     
    var items = [
        {name: "apples", qty : 12},
        {name: "pears", qty : 7},
        {name: "grapes", qty : 21},
        {name: "peaches", qty : 30}
    ];
  assert.deepEqual(findItemsOver20(items), [{name: "grapes", qty : 21}, {name: "peaches", qty : 30}])
})

})