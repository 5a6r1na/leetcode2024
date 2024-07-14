/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const object = {};
  this.forEach((item) => {
    const key = fn(item);
    if (object[key] === undefined) {
      object[key] = [];
    }
    object[key].push(item);
  });
  return object;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
