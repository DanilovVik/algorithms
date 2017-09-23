/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two strings s and t which consist of only lowercase letters.
 * String t is generated by random shuffling string s and then add one more letter at a random position.
 * Find the letter that was added in t.
 *
 * Example:
 * Input:
 * s = "abcd"
 * t = "abcde"
 * Output:
 * e
 *
 * 已知一个字符串 s，将其打乱顺序以后再在任意位置插入一个字符，求插入的字符
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var S = s.split('').sort();
  var T = t.split('').sort();

  var character = null;
  for (var i = 0; i < S.length; i += 1) {
    if (S[i] !== T[i]) {
      character = T[i];
      break;
    }
  }
  if (!character) {
    character = T[T.length - 1];
  }
  return character;
};