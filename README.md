# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections.  Asynchronous operations within request handlers can throw errors, leading to crashes if not properly managed.

## The Problem

The `bug.js` file shows an Express.js server with a route that simulates an asynchronous operation.  This operation randomly throws an error, causing an unhandled promise rejection if not properly caught. This can lead to unexpected application crashes.

## The Solution

The `bugSolution.js` file provides the solution by implementing proper error handling using `try...catch` blocks within the asynchronous operation or using `.catch()` on the promise. 

This example highlights the importance of robust error handling in Node.js applications, especially when dealing with asynchronous code.