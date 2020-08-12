let assert = require("assert");
let isFromGauteng = require("../countRegNumber");

describe (" The countRegNumber function", function() {

it('registration plates ending with GP should return true', function() {
assert.equal(true, isFromGauteng('GP'))
})

it('registration plates ending with CJ should return false', function() {
assert.equal(false, isFromGauteng('CJ'))
})

it('registration plates ending with CA should return false', function() {
assert.equal(false, isFromGauteng('CA'))
})
})
