# Code challenge - 07

## Linked Lists - Kth from end

## Author: Hanna ALemu

## Intro

A linked list is an efficient way of storing data in memory. Instead of using arrays which require consecutive space, linked lists store data dynamically. Each data can be stored anywhere, but each data ponts to the next data. Linked lists contain Nodes which can be described as placeholders or boxes that contain the data, also known as values. The linked list has a head, which is the first node and the most important part of the linked list. It also has a tail, which is the last node of the linked list.
 
 # Challenge

Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


## Approach and Efficiency

I solved the challenge by looping over the nodes in the linked list and keeping a counter for the number of nodes. I then added another pointer and looped for the number of K times.


## Tests

Run NPM test from console

## White board example


![Image of White Board](./assets/kth-from-end.jpg)
![Image of White Board](./assets/kth-from-end2.jpg)
