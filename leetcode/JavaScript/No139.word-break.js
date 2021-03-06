/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * You may assume the dictionary does not contain duplicate words.
 *
 * Example:
 * Given
 * s = "leetcode",
 * dict = ["leet", "code"].
 * Return true because "leetcode" can be segmented as "leet code".
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 说明：
 * 1. 拆分时可以重复使用字典中的单词。
 * 2. 你可以假设字典中没有重复的单词
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * 自顶向下，带备忘录的 DFS
 */
var wordBreak_1 = function(s, wordDict) {
  const set = new Set(wordDict)
  const tmp = {}

  const check = (index) => {
    if (tmp[index] !== undefined) return tmp[index]
    if (index >= s.length) return true

    for (let i = index; i < s.length; i += 1) {
      if (set.has(s.slice(index, i + 1))) {
        tmp[i + 1] = check(i + 1)
        if (tmp[i + 1]) {
          return true
        }
      }
    }
    tmp[index] = false
    return false
  }

  return check(0)
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * 自低向上 动态规划
 */
var wordBreak_2 = function(s, wordDict) {
  const set = new Set(wordDict)
  const dp = [true]

  for (let i = 1; i <= s.length; i += 1) {
    dp[i] = false
    for (let j = i - 1; j >= 0; j -= 1) {
      dp[i] = set.has(s.slice(j, i)) && (j === 0 ? true : dp[j])
      if (dp[i]) break
    }
  }
  return dp[s.length]
}
