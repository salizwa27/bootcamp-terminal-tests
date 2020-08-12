let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe ("The isFromBellville function", function() {

it('registration plates starting with CY should return true', function() {
assert.equal(true, isFromBellville('CY'))
})

it('registration plates starting with CJ should return false', function() {
assert.equal(false, isFromBellville('CJ'))
})

it('registration plates starting with CA should return false', function() {
assert.equal(false, isFromBellville('CA'))
})
})
