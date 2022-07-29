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

/**1396. Design Underground System */
/**https://leetcode.com/problems/design-underground-system/ */

var UndergroundSystem = function () {
  this.storePassangers = new Map();
  this.storeTravelTime = new Map();
};

UndergroundSystem.prototype.hashStation = function (startStation, endStation) {
  return `${startStation}-${endStation}`;
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.storePassangers.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let [startStation, startStationTime] = this.storePassangers.get(id);
  this.storePassangers.delete(id);
  const hashKey = this.hashStation(startStation, stationName);
  let currTime = t - startStationTime,
    cnt = 1;
  if (this.storeTravelTime.has(hashKey)) {
    currTime += this.storeTravelTime.get(hashKey)[0];
    cnt += this.storeTravelTime.get(hashKey)[1];
  }

  this.storeTravelTime.set(hashKey, [currTime, cnt]);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const hashKey = this.hashStation(startStation, endStation);
  const [result, cnt] = this.storeTravelTime.get(hashKey);

  return result / cnt;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

// undergroundSystem.checkIn(45, "Leyton", 3);
// undergroundSystem.checkIn(32, "Paradise", 8);
// undergroundSystem.checkIn(27, "Leyton", 10);
// undergroundSystem.checkOut(45, "Waterloo", 15); // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
// undergroundSystem.checkOut(27, "Waterloo", 20); // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
// undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14

// console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
// console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
// undergroundSystem.checkIn(10, "Leyton", 24);
// console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 11.00000
// undergroundSystem.checkOut(10, "Waterloo", 38); // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
// console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 12.00000.
// const undergroundSystem = new UndergroundSystem();

// const stat = [
//   "checkIn",
//   "checkIn",
//   "checkIn",
//   "checkOut",
//   "checkOut",
//   "checkOut",
//   // "getAverageTime",
//   // "getAverageTime",
//   // "checkIn",
//   // "getAverageTime",
//   // "checkOut",
//   // "getAverageTime",
// ];
// const exp = [
//   [45, "a", 3],
//   [32, "aa", 8],
//   [27, "a", 10],
//   [45, "ab", 15],
//   [27, "ab", 20],
//   [32, "b", 22],
//   // ["aa", "b"],
//   // ["a", "ab"],
//   // [10, "a", 24],
//   // ["a", "ab"],
//   // [10, "ab", 38],
//   // ["a", "ab"],
// ];

// for (let i = 0; i < stat.length; i++) {
//   undergroundSystem[stat[i]](exp[i][0], exp[i][1], exp[i][2]);
// }

// console.log(undergroundSystem.getAverageTime("aa", "b"));

/**890. Find and Replace Pattern */
/**https://leetcode.com/problems/find-and-replace-pattern/ */

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const compare = (word, pattern) => {
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < word.length; i++) {
      const w = word[i];
      const p = pattern[i];

      if (!map1.get(w)) map1.set(w, p);
      if (!map2.get(p)) map2.set(p, w);

      if (map1.get(w) !== p || map2.get(p) !== w) return false;
    }
    return true;
  };

  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (compare(words[i], pattern)) result.push(words[i]);
  }
  return result;
};

// let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
//   pattern = "abb";
// // Output: ["mee","aqq"]

// // (words = ["a", "b", "c"]), (pattern = "a");
// // Output: ["a","b","c"]

// console.log(findAndReplacePattern(words, pattern));
