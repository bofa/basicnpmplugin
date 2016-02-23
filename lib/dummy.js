"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @title Dummy
 * @overview This is a dummy class
 * @copyright (c) 2015 Tieto
 * @author Per-Erik Karlsson
 */

/** @class Dummy 
 */

var Dummy = function () {

    /** Constructor
    * @param {int} a - This is a int.
    */

    function Dummy(a) {
        _classCallCheck(this, Dummy);

        this.a = a;
    }

    /** 
    * @method clone
    * @param {int} a - Will return this.
    * @return {int} a - Identity method.
    */


    _createClass(Dummy, [{
        key: "method",
        value: function method(a) {
            return a;
        }
    }]);

    return Dummy;
}();

exports.default = Dummy;