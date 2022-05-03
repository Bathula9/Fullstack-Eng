JAVASCRIPT PROMISES
Using catch() with Promises
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more
readable code, we can use a different promise function: .catch().

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. 
Using .catch() accomplishes the same thing as using a .then() with only a failure handler.

Let’s look at an example using .catch():

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
Let’s break down what’s happening in the example code:

prom is a promise which randomly either resolves with 'Yay!' or rejects with 'Ohhh noooo!'.
We pass a success handler to .then() and a failure handler to .catch().
If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'.
If the promise rejects, .then() will return a promise with the same rejection reason as the original promise and .catch()‘s failure handler will be invoked with that 
rejection reason.
Let’s practice writing .catch() functions.

Instructions
1.
We’re going to refactor the functionality of the previous exercise but this time we’ll use .catch()! First invoke the checkInventory() function with the order. 
Remember, this function will return a promise.

2.
Add a .then() to the returned promise. Pass in the success handler handleSuccess().

Remember not to invoke the handleSuccess() when you pass it in as an argument to .then().

3.
Add a .catch() to the returned promise. Pass in the failure handler handleFailure().

In the previous exercise, we passed handleFailure() as a second argument to .then(). In this exercise we’ll chain a catch() function and pass handleFailure() in as an 
argument to catch(). Remember not to invoke the handleFailure() when you pass it in.

4.
We set our inventory of sunglasses to 0, so the order shouldn’t go through. Let’s make sure our code has the expected results. Type node app.js in the terminal and 
hit enter.

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:

checkInventory(order).then(handleSuccess).catch(handleFailure);

const inventory = {
  sunglasses: 0,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    });
};

module.exports = {checkInventory};
