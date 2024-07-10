# 83. 删除排序链表中的重复元素

[83. 删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/)

给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

## 示例

### 示例1

> 输入：head = [1,1,2]
>
> 输出：[1,2]

### 示例2

> 输入：head = [1,1,2,3,3]
>
> 输出：[1,2,3]

## 提示

1. 链表中节点数目在范围 [0, 300] 内
2. -100 <= Node.val <= 100
3. 题目数据保证链表已经按升序 排列

## 代码

::: code-group

<<< ../../src/utilsJs/ListNode.js#ListNodeJs{javascript} [javascript]

<<< ../../src/utils/ListNode.ts#ListNode{typescript} [typescript]

:::

::: code-group

<<< ../../src/leetcode/removeDuplicatesFromSortedList/javascript.js{javascript} [javascript]

<<< ../../src/leetcode/removeDuplicatesFromSortedList/typescript.ts{typescript} [typescript]

:::