ASYNC AWAIT
Handling Dependent Promises
The true beauty of async...await is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:

function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}
Let’s break down what’s happening in the nativePromiseVersion() function:

Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().
We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then().
In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).
We use another .then() to print the second promise’s resolved value to the console.
Here’s how we’d write an async function to accomplish the same thing:

async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
Let’s break down what’s happening in our asyncAwaitVersion() function:

We mark our function as async.
Inside our function, we create a variable firstValue assigned await returnsFirstPromise(). This means firstValue is assigned the resolved value of the awaited promise.
Next, we log firstValue to the console.
Then, we create a variable secondValue assigned to await returnsSecondPromise(firstValue). Therefore, secondValue is assigned this promise’s resolved value.
Finally, we log secondValue to the console.
Though using the async...await syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code. The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax. Let’s create some async functions with multiple await statements!

Instructions
1.
Take a look at the provided code. We require in three functions: shopForBeans(), soakTheBeans(), and cookTheBeans(). These functions each return a promise.

shopForBeans() expects no arguments and returns a promise which will resolve to a string of a bean type.
soakTheBeans() expects a bean type string as an argument and returns a promise which resolves to a boolean indicating whether or not the beans are softened.
cookTheBeans() expects a boolean as an argument and, if that value is true, returns a promise which will resolve to a string announcing that dinner is ready.
If you’d like, look at the library.js file to see how these functions work. Press “Check Work” to move on to the next step.

2.
In the following checkpoints, you’ll create an async function that handles the three dependent promises we just walked through. It will simulate shopping for, soaking, and then cooking the beans. To get started, declare an async function, makeBeans(). You can leave the function body blank for now.

Check your work to move on to the next step.


Hint
To declare an async function:

async function funcName() {
 
}
 
3.
Inside your function, declare a variable, type, assigned to the resolved value of shopForBeans(). This must be accomplished in one statement.


Hint
This is the syntax for using the await operator:

const variableName = await returnsPromise();
4.
Next inside your function, declare a variable, isSoft, assigned to the resolved value of soakTheBeans(). Don’t forget: the soakTheBeans() function expects an argument. Make sure to pass the expected value into soakTheBeans().


Hint
The soakTheBeans() function expects a bean type string which is exactly what the shopForBeans() function’s promise resolves to! You should pass your type variable into soakTheBeans().

let isSoft = soakTheBeans(type);
5.
Next inside your function, declare a variable, dinner, assigned to the resolved of cookTheBeans(). Don’t forget: the cookTheBeans() function also expects an argument. Make sure to pass the expected value into cookTheBeans().


Hint
The cookTheBeans() function expects a boolean which is exactly what the soakTheBeans() function’s promise resolves to! You should pass your isSoft variable into cookTheBeans() when you invoke it.

let dinner = cookTheBeans(isSoft);
6.
Next inside your function, log your dinner variable to the console.

7.
Beneath your function declaration, invoke the makeBeans() function.

8.
Let’s see your async function in action! In the terminal, type node app.js and press enter to execute the code. 

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans(){
const type = await shopForBeans();
let isSoft = await soakTheBeans(type);
let dinner = await cookTheBeans(isSoft);
console.log(dinner);
}

makeBeans();

//library.js

/*
This is the shopForBeans function from the last exercise
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5);
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`);
   resolve(beanType);
  }, 1000)
})
}

let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.');
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
      }, 1000);
  });
}

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.');
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, 1000);
  });
}

  
module.exports = {shopForBeans, soakTheBeans, cookTheBeans};
