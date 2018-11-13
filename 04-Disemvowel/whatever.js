var expect = require("chai").expect;

var disemvowel = function (x) {
    if (typeof x !== "string"){
        throw new Error("x is not a string");
}
else return x;

};

assert.typeOf(x, 'string')