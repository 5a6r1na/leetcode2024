/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.pointer = 0;
  this.stream = [];
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  const chunk = [];
  this.stream[idKey - 1] = value;

  while (this.stream[this.pointer]) {
    chunk.push(this.stream[this.pointer]);
    this.pointer++;
  }

  return chunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
