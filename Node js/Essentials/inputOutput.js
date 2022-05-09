User Input/Output
If you’ve worked with JavaScript before, you’re likely familiar with the concept of input/output even if you haven’t heard it called that. At its most abstract, output is any data or feedback that a computer provides (like to a human user), while input is data provided to the computer. When we use console.log() we prompt the computer to output information to the console. In the Node environment, the console is the terminal, and the console.log() method is a “thin wrapper” on the .stdout.write() method of the process object. stdout stands for standard output.

In Node, we can also receive input from a user through the terminal using the stdin.on() method on the process object:

process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
Here, we were able to use .on() because under the hood process.stdin is an instance of EventEmitter. When a user enters text into the terminal and hits enter, a 'data' event will be fired and our anonymous listener callback will be invoked. The userInput we receive is an instance of the Node Buffer class, so we convert it to a string before printing.

Instructions
1.
We’ve gotten started making a number guessing game. We’ve written a function playGame() which expects a line of user input corresponding to a guess. Input read through the terminal is received as a Buffer object with a new line character at the end, so we’ve converted it to a string and trimmed off the unnecessary new line character. We then feed the processed input into the testNumber() function required in from game.js.

Read through the code and try to figure out what has been done and what is left to do to make this an interactive command line program (game.js includes the core game logic, but reading through it is optional).

2.
Everything about the game is complete except for reading input from the user. Based on what you’ve learned about getting user input from the terminal, complete the game.


Hint
We wrote the playGame() function, but it’s never invoked! Where should this happen?

We need to assign playGame() as the listener callback function so that it’s invoked any time process.stdin emits a 'data' event.

process.stdin.on('name of event', listenerCallbackFunction);

let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

process.stdin.on('data',playGame);
