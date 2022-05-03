ASYNC AWAIT
Writing async Functions
We’ve seen that the await keyword halts the execution of an async function until a promise is no longer pending. Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.

We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:

let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
Now we’ll write two async functions which invoke myPromise():

async function noAwait() {
 let value = myPromise();
 console.log(value);
}
 
async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}
 
noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
In the first async function, noAwait(), we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs Promise { <pending> } to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.

Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself.

Instructions
1.
Take a look at the provided code. We required in the shopForBeans() function from library.js which returns a promise with a resolved value of a string representing a type of bean, eg. ‘kidney’.

Next, we declared the getBeans() function. Let’s summarize its intended functionality:

Log '1. Heading to the store to buy beans...' to the console.
Capture the resolved value of the promise returned when we invoke shopForBeans().
The promise returned from shopForBeans() prints a string in the format '2. I bought [the resolved type of beans] beans because they were on sale.'
Finally, the function prints a string in the format '3. Great! I'm making [the bean type] beans for dinner tonight!' to the console.
Execute app.js in the terminal to see if getBeans() is working as intended.


Hint
To execute a file, we can type node someFileName.js in the terminal and press enter.

2.
Uh oh, getBeans() is logging '3. Great! I'm making [object Promise] beans for dinner tonight!' to the console. Take a moment to understand why this is happening, and then refactor getBeans() so it works as intended. Check your work when you’re ready to move on to the next step.


Hint
getBeans() is missing the keywords async and await. The keyword async should precede the function keyword, and the await operator precedes a promise. Remember that in our case, this is the promise returned from shopForBeans().

3.
To test that the code is now functioning properly, execute app.js in the terminal again.


Hint
To execute a file, we can type node someFileName.js in the terminal and press enter.

const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

//library.js
/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. The function returns a promise with a resolved value of a string representing a type of bean. It settles on a random beanType from the beanTypes array using Math.random().
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * beanTypes.length);
    let beanType = beanTypes[randomIndex];
    console.log(`2. I bought ${beanType} beans because they were on sale.`);
   resolve(beanType);
  }, 1000);
});
}
  
module.exports = shopForBeans;
