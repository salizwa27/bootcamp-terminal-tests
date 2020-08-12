let assert = require("assert");
let isFromCapeTown = require("../regCheck");

describe ("The regCheck function", function() {

it('registration plates starting with CA should return true', function() {
assert.equal(true, isFromCapeTown('CA'))
})

it('registration plates starting with CJ should return false', function() {
assert.equal(false, isFromCapeTown('CJ'))
})

it('registration plates starting with CY should return false', function() {
assert.equal(false, isFromCapeTown('CY'))
})
})
