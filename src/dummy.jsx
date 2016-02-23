/**
 * @title Dummy
 * @overview This is a dummy class
 * @copyright (c) 2015 Tieto
 * @author Per-Erik Karlsson
 */

/** @class Dummy 
 */
export default class Dummy {

    /** Constructor
    * @param {int} a - This is a int.
    */
    constructor(a) {
        this.a = a;
    }
    
    /** 
    * @method clone
    * @param {int} a - Will return this.
    * @return {int} a - Identity method.
    */
    method(a) {
        return a;
    }
    
}