let assert = require("assert");
let fromWhere = require("../fromWhere");

describe ("The fromWhere function", function() {

it('should return the place where the registration number is from', function() {
assert.equal('Bellville', fromWhere('CY'))
})

it('should return the place where the registration number is from', function() {
    assert.equal('Paarl', fromWhere('CJ'))
    })

    it('should return the place where the registration number is from', function() {
        assert.equal('Cape Town', fromWhere('CA'))
        })

})