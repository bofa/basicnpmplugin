var chai = require('chai');
var assert = chai.assert;

var Dummy = require('./index').Dummy;

describe('filter', function() {
    describe('UKF', function () {
        
        it('should return argument', function () {
        
            var dummy = new Dummy();
            var a = 2;
            
            assert.equal(a, dummy.method(a));
            
        });
        
    });
});