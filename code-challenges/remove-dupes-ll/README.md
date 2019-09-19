# Code challenge - 28- Delete duplicates in a linked list


## Author: Hanna ALemu

## Intro

A linked list is an efficient way of storing data in memory. Instead of using arrays which require consecutive space, linked lists store data dynamically. Each data can be stored anywhere, but each data ponts to the next data. Linked lists contain Nodes which can be described as placeholders or boxes that contain the data, also known as values. The linked list has a head, which is the first node and the most important part of the linked list. It also has a tail, which is the last node of the linked list.

# Challenge Summary
Write a function that finds duplicate numbers in a linnked list and removes the duplicate ones

## Approach & Efficiency

During white-boarding I approached this challenge by manipulating the arrows in the linked lists to remove the duplicates.But this method only removes the first dupe. So now I am using a hash map to store the results and only store unique values. This method will ake O(N) spaca and O(N) time as we are looping over the linked list and we are creating a new space for the hash map.

## Solution

## White board example


![Image of White Board](./IMG_0104 (1).jpg)

