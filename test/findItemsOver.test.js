let assert = require("assert");
let findItemsOver = require("../findItemsOver")

describe("the findItemsOver function", function() {

    it("should give out those with quantity over 20 according to threshold", function() {
         var threshold = 20;
         var items = [
            {name: "apples", qty : 10},
             {name: "pears", qty : 7},
             {name: "grapes", qty : 27},
             {name: "apples", qty : 13}
         ];

         var results = [
          {name: "grapes", qty : 27},
          
      ];



       assert.deepEqual(findItemsOver(items,threshold), results)
     })

    it("should give out those with quantity over 40 according to threshold", function() {
        var threshold = 40;
        var items = [
            {name: "apples", qty : 10},
            {name: "pears", qty : 47},
            {name: "grapes", qty : 5},
            {name: "apples", qty : 43}
        ];

  
        var results = [
            {name: "pears", qty : 47},
            {name: "apples", qty : 43}
        ];
        

      assert.deepEqual(findItemsOver(items,threshold), results)
    })

  })