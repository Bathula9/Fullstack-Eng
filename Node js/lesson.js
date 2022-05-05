/*Introduction
For a long time, the browser was the only place JavaScript code could be executed. Web developers had to use a different programming language on the front-end than the back-end. It also meant that, even as JavaScript evolved into a more robust and powerful language, it remained a front-end only language.

Though multiple attempts to create off-browser JavaScript environments have been attempted, Node.js, invented by Ryan Dahl in 2009, found unprecedented popularity and is currently being used by numerous top-tier companies including Netflix, Uber, Paypal, and eBay. Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. A “runtime” converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute.

Though Node was created with the goal of building web servers and web applications in JavaScript, it can also be used for creating command-line applications or desktop applications. In this lesson, we’ll explore some features of Node so you start to feel comfortable with running JavaScript in the Node environment and gain some familiarity with features unique to Node. For more advanced development, Node can be combined with any number of robust frameworks like the Express.js framework for creating effective web application back-ends.*/

/*The Node REPL
REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and the print state where the program prints out its evaluation to a console. Then it loops through these states again.

When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. A > character will show up in the terminal, indicating the REPL is running and prompting your input. The Node REPL will evaluate your input line by line.

By default, you indicate the input is ready for eval when you hit enter. If you’d like to type multiple lines and then have them evaluated at once, you can type .editor while in the REPL. Once in “editor” mode, you can type control + d when you’re ready for the input to be evaluated. Each session of the REPL has a single shared memory; you can access any variables or functions you define until you exit the REPL.

A REPL can be extremely useful for performing calculations, learning a language, and developing code. It’s a place where you can explore language features and try things out while receiving immediate feedback. Figuring out how to do this outside of the browser or a website can be really empowering.

The Node environment contains a number of Node-specific global elements in addition to those built into the JavaScript language. Every Node-specific global property sits inside the the Node global object. This object contains a number of useful properties and methods that are available anywhere in the Node environment.

Let’s try out the Node REPL. This will be a good way for you to explore the Node global object!

Instructions
1.
Let’s enter the Node REPL. Type node in the terminal and press enter.

2.
Experiment on your own within the REPL to get a better sense of it. Here are some suggestions for things to try:

Access the global object. You can console.log(global) or, since the REPL displays the return of each evaluated line, simply type global and then enter.
Woah… it looks huge. A lot of that is because of the global.process object. Check out an easier to read list of the properties on the global object with Object.keys(global).
The global object has a lot of useful properties and methods, and it’s not common to add any to it. However, it is just an object, so we can! Add a property to the global object, eg. global.cat = 'meow!'.
Now print or return the property you just added:
> console.log(global.cat)
'meow!'
If you’re familiar with running JavaScript on the browser, you’ve likely encountered the Window object. Here’s one major way that Node differs: try to access the Window object (this will throw an error). The Window object is the JavaScript object in the browser that holds the DOM, since we don’t have a DOM here, there’s no Window object.
You’ll learn more about the global object as you explore Node, but remember that, at its core, it’s just a JavaScript object!*/

Core Modules
Modularity is a software design technique where one program has distinct parts, each providing a single piece of the overall functionality. These separate modules come together to build a cohesive whole. Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns into manageable chunks. Essentially, a module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files based on the concerns they address. These files can then be included in other files by using the require() function.

To save developers from reinventing the wheel each time, Node.js has several built-in modules to perform common tasks efficiently. These are known as the core modules. The core modules are defined within Node.js’s source code and are located in the lib/ folder. Core modules can be required by passing a string with the name of the module into the require() function:

// Require in the 'events' core module:
const events = require('events');
The example above shows how the events module is required into a file and stored in an events variable. Understanding the specifics of this module isn’t necessary at this point, but the events module is a Node.js core module that provides key functions for working with, well… events. You’ll learn more about it in a later lesson.

Some core modules are actually used inside other core modules. For instance, the util module can be used in the console module to format messages. We’ll cover these two modules in this lesson, as well as two other commonly used core modules: process and os.

Node.js has several core modules, far too many to cover in this lesson. We’ll learn how to get the full list and then dive deeper into the aforementioned modules throughout the next few exercises.

Instructions
1.
Let’s start by listing all of the core modules built into Node.js. We can do this from the Node REPL. To enter the Node REPL, type node in the terminal and press enter or return.

Checkpoint 2 Passed

Stuck? Get a hint
2.
Once in the REPL, a complete list of core modules can be accessed by typing the command:

require('module').builtinModules
As you can see, there are many modules already built into Node.js and ready to be utilized! In the next few exercises, we’ll explore some of the more useful ones in further detail.

