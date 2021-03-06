/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example:
 * Given binary tree [1,null,2,3],
 *  1
    \
     2
    /
   3
   return [1,3,2].
 *
 * 求二叉树中序遍历各个元素的顺序
 */

/**
 * Note:
 * 理解中序遍历：
 * 对于每一个树节点，总是先遍历其左子节点，然后遍历根节点，最后右子节点
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/* ============================ Recursive Solution ============================ */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal_recursive = (root) => {
  const result = [];
  if (!root) return result;
  if (root.left) {
    result.push(...inorderTraversal_recursive(root.left));
  }
  result.push(root.val);
  if (root.right) {
    result.push(...inorderTraversal_recursive(root.right));
  }
  return result;
};

/* ============================ Iteratively Solution ============================ */
const inorderTraversal_iteratively = (root) => {
  const queue = []
  const result = []

  let node = root
  while (node || queue.length) {
    if (node) {
      queue.push(node)
      node = node.left
    } else {
      node = queue.pop()
      result.push(node.val)
      node = node.right
    }
  }
  return result
}

/* ============================ Morris Traversal Solution ============================ */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal_mirror = function(root) {
  let prev = null
  let node = root

  const result = []
  while (node) {
    if (!node.left) {
      result.push(node.val)
      node = node.right
    } else {
      prev = node.left
      while (prev.right && prev.right !== node) prev = prev.right
      if (!prev.right) {
        prev.right = node
        node = node.left
      } else {
        prev.right = null
        result.push(node.val)
        node = node.right
      }
    }
  }

  return result
}
