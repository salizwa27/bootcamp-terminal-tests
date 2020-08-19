let assert = require("assert");
let yearsAgo = require("../yearsAgo");

/*describe ("should return the number of years ago that was", function(){

it('should return years ago true', function(){
    assert.equal(yearsAgo('yearsAgo'), true);
})

})*/



describe("the yearsAgo function ", function() {

  it("should give out the years ", function() {
    assert.equal(20, yearsAgo("2000"))
    
  })

  it("should give out the years ", function() {
    assert.equal(19, yearsAgo("2001"))
    
  })
})
