let assert = require("assert");
let isWeekday = require("../isWeekday");

describe ("The isWeekDay function", function(){

it('should return weekend days false', function(){
    assert.equal(isWeekday('Saturday'), false);
})

it('week days should return true', function(){
    assert.equal(isWeekday('Monday'), true);
})

})