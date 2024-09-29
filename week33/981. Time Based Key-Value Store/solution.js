var TimeMap = function () {
  // [STEP]: Initiate Hashmap.
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  // [CASE]: If key does NOT exist in Hashmap, initiate empty array to key.
  if (!this.map[key]) {
    this.map[key] = [];
  }
  // [STEP]: Set pair into key in Hashmap.
  this.map[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let res = "";

  // [CASE]: If key does NOT exist in Hashmap, return empty string.
  if (!this.map[key]) return res;

  let left = 0;
  let right = this.map[key].length - 1;

  // [STEP]: Binary search setup.
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let [value, timestamp_prev] = this.map[key][mid];

    // [CASE]: If timestamp >= timestamp_prev, set value to the current largest timestamp_prev, move left pointer up.
    if (timestamp_prev <= timestamp) {
      res = value;
      left = mid + 1;
      // [CASE]: If timestamp < timestamp_prev, move right pointer down.
    } else {
      right = mid - 1;
    }
  }
  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
