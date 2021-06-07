/* unique_id
by @naseelniyas (http://github.com/naseelniyas)
MIT Licensed
Repo: http://github.com/naseelniyas/unique_id
*/

/**
 * Creates a random number takes one param (maximum number) defaults to 100
 */
module.exports.uniqueInt = (max = 100) => {
  let num = Math.floor(Math.random() * max) + 1;

  return num;
};

/**
 * Generates a random number between 0 and 1
 */
module.exports.zeroToOne = () => {
  return Math.random();
};

/**
 * Generates and returns a unique string
 */
module.exports.uniqueString = () => {
  let str = Math.random().toString(36).substring(2);
  return str;
};
/**
 * Picks and returns a random index from an array
 */
module.exports.uniqueFromArray = (arr) => {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num]
}