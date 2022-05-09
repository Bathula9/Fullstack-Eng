The Timers Module
There are times when we want some of our code to be executed at a specified point in time. This is what the timers module is used for. Like the Buffer module, it is not necessary to use the require() import statement as the methods of the timer module are global.

You may already be familiar with some timer functions such as, setTimeout() and setInterval(). Timer functions in Node.js behave similarly to how they work in front-end JavaScript programs, but the difference is that they are added to the Node.js event loop. This means that the timer functions are scheduled and put into a queue. This queue is processed at every iteration of the event loop. If a timer function is executed outside of a module, the behavior will be random (non-deterministic).

The setImmediate() function is often compared with the setTimeout() function. When setImmediate() is called, it executes the specified callback function after the current (poll phase) is completed. The method accepts two parameters: the callback function (required) and arguments for the callback function (optional). If you instantiate multiple setImmediate() functions, they will be queued for execution in the order that they were created.

setImmediate(() => {
    console.log('Hello! My name is Codey.')
});
Instructions
1.
Use the setImmediate() function and pass an empty arrow function as its callback function.


Hint
You can pass an empty arrow function as an argument of another function like below:

functionName(() => {
 
})
2.
In the body of the arrow function that was created in the above step, log 'I got called right away!' to the console.

Try running app.js with the node command in the terminal!


Hint
What is passed to callback function will be called immediately.

setImmediate(() => {
    console.log('I got called right away!');
});

setImmediate(()=>{
  console.log('I got called right away!');
})
