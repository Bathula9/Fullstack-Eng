Avoiding Common Mistakes
Promise composition allows for much more readable code than the nested callback syntax that preceded it. However, it can still be easy to make mistakes. In this exercise, we’ll go over two common mistakes with promise composition.

Mistake 1: Nesting promises instead of chaining them.

returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
Let’s break down what’s happening in the above code:

We invoke returnsFirstPromise() which returns a promise.
We invoke .then() with a success handler.
Inside the success handler, we invoke returnsSecondValue() with firstResolveVal which will return a new promise.
We invoke a second .then() to handle the logic for the second promise settling all inside the first then()!
Inside that second .then(), we have a success handler which will log the second promise’s resolved value to the console.
Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. Imagine if we were handling five or ten promises!

Mistake 2: Forgetting to return a promise.

returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
Let’s break down what’s happening in the example:

We invoke returnsFirstPromise() which returns a promise.
We invoke .then() with a success handler.
Inside the success handler, we create our second promise, but we forget to return it!
We invoke a second .then(). It’s supposed to handle the logic for the second promise, but since we didn’t return, this .then() is invoked on a promise with the same settled value as the original promise!
Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to debug!

Instructions
1.
The code in app.js works correctly, but it doesn’t follow best practices.

Type node app.js in the terminal and hit enter, so you can see what the program outputs.

When you’re ready, press the “Check Work” button.

Checkpoint 2 Passed
2.
Refactor, or rewrite, the code to avoid the two common mistakes: nesting and forgetting to return properly.


Hint
To use best practices, we can refactor this code:

returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal);
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    });
});
Into this code:

returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal);
})
.then((someVal) => {
  console.log(someVal);
});
3.
Type node app.js in the terminal and hit enter to make sure your program is still working as expected.

When you are ready to move on, press the “Check Work” button.

//app.js

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
});

//Library.js

const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};
