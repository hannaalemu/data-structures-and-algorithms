# Code challenge - 17

## Binary trees- find leaves of binary tree

## Author: Hanna ALemu

## Intro
A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.A Binary Tree node contains following parts.

* Data
* Pointer to left child
* Pointer to right child

A leaf is a node in a tree that doesn't have a left or right node.
# Challenge Summary

Write a function to write all the leaves in a binary tree.

## Approach & Efficiency
I used the same recursive approach and used a helper function to simplify the task. The recursive function keeps traversing the tree until it finds no more nodes and returns all  the leaves of the tree by pushing them into an array.

## Solution

## White board example

![Image of White Board](./IMG_0062.jpg)
