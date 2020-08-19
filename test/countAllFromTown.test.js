let assert = require("assert");
let countAllFromTown = require("../countAllFromTown")

describe("The countAllFromTown function", function() {

    it("should return the correct registration number for specific town", function() {
        assert.equal(2, countAllFromTown("CA 1234, CA 555, CY 00001", "CA"))
        assert.equal(3, countAllFromTown("CA 1335, CY 8523, CY 0001, CY 9635", "CY"))
        assert.equal(1, countAllFromTown("CA 1335, CY 8523, GP 0001, CY 9635", "GP"))
    })

    it("should return the correct registration number for specific town", function() {
        assert.equal(2, countAllFromTown("GP 1234, CA 555, GP 00001", "GP"))
    })
})