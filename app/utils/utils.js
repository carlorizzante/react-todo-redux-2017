const utils = {

  isString: str => typeof str == "string",

  isEmpty: val => val == "",

  isArray: arg => Object.prototype.toString.call(arg) == "[object Array]"

}

module.exports = utils;
