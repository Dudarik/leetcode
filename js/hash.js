/***705. Design HashSet */
/**https://leetcode.com/problems/design-hashset/ */
var MyHashSet = function () {
  this.store = new Map();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) this.store.set(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.store.delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.store.has(key);
};

// const myHashSet = new MyHashSet();
// console.log(myHashSet);
// myHashSet.add(1); // set = [1]
// console.log(myHashSet);
// myHashSet.add(2); // set = [1, 2]
// console.log(myHashSet);
// console.log(myHashSet.contains(1)); // return True
// console.log(myHashSet);
// myHashSet.contains(3); // return False, (not found)
// console.log(myHashSet);
// myHashSet.add(2); // set = [1, 2]
// console.log(myHashSet);
// myHashSet.contains(2); // return True
// console.log(myHashSet);
// myHashSet.remove(2); // set = [1]
// console.log(myHashSet);
// console.log(myHashSet.contains(2)); // return False, (already removed)
// console.log(myHashSet);

/**706. Design HashMap *****************************/
/**https://leetcode.com/problems/design-hashmap/ */

var MyHashMap = function () {
  this.store = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.store.set(key, [key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const value = this.store.get(key);
  return value ? value[1] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  this.store.delete(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// const myHashMap = new MyHashMap();
// myHashMap.put(1, 1); // The map is now [[1,1]]
// console.log(myHashMap);
// myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// console.log(myHashMap);
// console.log(myHashMap.get(1)); // return 1, The map is now [[1,1], [2,2]]
// console.log(myHashMap);
// console.log(myHashMap.get(3)); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// // console.log(myHashMap);
// myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// console.log(myHashMap);
// console.log(myHashMap.get(2)); // return 1, The map is now [[1,1], [2,1]]
// console.log(myHashMap);
// myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// console.log(myHashMap);
// console.log(myHashMap.get(2)); // return -1 (i.e., not found), The map is now [[1,1]]
// console.log(myHashMap);

/**535. Encode and Decode TinyURL */
/**https://leetcode.com/problems/encode-and-decode-tinyurl/ */

store = [];
var encode = (longUrl) => {
  const id = store.length;
  store.push(longUrl);
  return id.toString(36);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = (shortUrl) => {
  return store[parseInt(shortUrl, 36)];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
