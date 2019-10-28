# Code challenge - Class 05: Linked List Implementation

## Author: Hanna ALemu

## Intro
A linked list is a data structure that stores multiple values in a linear fashion. Each value in a linked list is contained in its own node, an object that contains the data along with a link to the next node in the list. The link is a pointer to another node object or null if there is no next node.

# Challenge

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List.

Write tests to prove the following functionality:

Can successfully instantiate an empty linked list
Can properly insert into the linked list
The head property will properly point to the first node in the linked list
Can properly insert multiple nodes into the linked list
Will return true when finding a value within the linked list that exists
Will return false when searching for a value in the linked list that does not exist
Can properly return a collection of all the values that exist in the linked list

## Approach and Efficiency

I approached this challenge by creating the node class and linked list class from scratch. I implemented the methods by manipulating the arrows that point to the next value of the nodes in the linked list. Most of the methods use while loops to travese through the linked list since all methods need to find the tail of the linked list if it is not empty. Efficency - insertion and other methods is O(1) time and space. ToString is O(n) space and time since I used an array which is a new variable that grows with input size. 

## Tests

run `Npm run test` to run tests.

## White board example
![Image of Whiteboard](whiteboard.jpg)

