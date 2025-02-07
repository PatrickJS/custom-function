'use strict';
const {setPrototypeOf} = Object;

/**
 * @param {Function} Class any base class to extend without passing through it via super() call.
 * @returns {Function} an extensible class for the passed one.
 * @example
 *  // creating this very same module utility
 *  import custom from 'custom-function/factory';
 *  const CustomFunction = custom(Function);
 *  class MyFunction extends CustomFunction {}
 *  const mf = new MyFunction(() => {});
 */
module.exports = Class => {
  function Custom(target) {
    return setPrototypeOf(target, new.target.prototype);
  }
  Custom.prototype = Class.prototype;
  return Custom;
};
