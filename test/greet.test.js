let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Salizwa correctly', function(){
        assert.equal('Hello, Salizwa', greet('Salizwa'));
    });
    it('should greet Endinako correctly', function(){
        assert.equal('Hello, Endinako', greet('Endinako'));
    });
});
