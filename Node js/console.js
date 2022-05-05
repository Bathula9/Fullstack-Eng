//console.table,console.assert

//ProcessModule

The Process Module
In computer science, a process is the instance of a computer program that is being executed. You can open Task Manager if you’re on a Windows machine or Activity Monitor from a Mac to see information about the various processes running on your computer right now. Node has a global process object with useful methods and information about the current process.

The process.env property is an object which stores and controls information about the environment in which the process is currently running. For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located. It can be useful to have some if/else logic in a program depending on the current environment— a web application in a development phase might perform different tasks than when it’s live to users. We could store this information on the process.env. One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.

if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}
The process.memoryUsage() returns information on the CPU demands of the current process. It returns a property that looks similar to this:

{ rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772 }
Heap can mean different things in different contexts: a heap can refer to a specific data structure, but it can also refer to a block of computer memory. The process.memoryUsage().heapUsed method will return a number representing how many bytes of memory the current process is using.

The process.argv property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.

node myProgram.js testing several features
console.log(process.argv[3]); // Prints 'several'
We’ve only covered a few of the properties of the process object, so make sure to check out the documentation on the process object to learn more about it and explore some of its other methods and properties.

Let’s get some practice using the process object!

Instructions
1.
We want the program in app.js to store the starting amount of memory used (heapUsed), perform an operation, and then compare the final amount of memory used to the original amount. Right now, the initialMemory variable is assigned to null. Change this line, so that initialMemory is instead assigned the value of the heapUsed property on the object returned from invoking the process.memoryUsage() method.


Stuck? Get a hint
2.
We want the user of the program to be able to fill in their own word when they run the program. Right now word is assigned to null. Change the program so that when a user initiates the program with an additional command line argument, word will be assigned that value. For example, running the program with the command: node app.js Codecademy would result in word being assigned the value 'Codecademy'

let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

//OS Module

The OS Module
When developing or debugging an app, it can be helpful to have information about the computer, operating system, and network on which the program is running. Before Node, this information could not be retrieved using JavaScript due to the language being confined to the browser. However, Node.js is a JavaScript runtime, which means it can execute code outside of the browser, and we’re able to get access to much of this information through the os core module.

Unlike process and console, the os module is not global and needs to be included into the file in order to gain access to it’s methods. You can include the os module into your file by typing:

const os = require('os');
With the os module saved to the os variable, you can call methods like:

os.type() — to return the computer’s operating system.
os.arch() — to return the operating system CPU architecture.
os.networkInterfaces — to return information about the network interfaces of the computer, such as IP and MAC address.
os.homedir() — to return the current user’s home directory.
os.hostname() — to return the hostname of the operating system.
os.uptime() — to return the system uptime, in seconds.
Let’s take a look at an example:

const os = require('os');
 
const local = {  
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Last Reboot': os.uptime()
}
In the above example code, we first require the os module and store it in a variable, os. Below that, we have an object, local, that will hold some information about the user’s computer: the name of the home directory, the type of operating system, and the time since the computer was last rebooted.

  {
    'Home Directory': '/Users/luca',
    'Operating System': 'Darwin',
    'Time since reboot': 86997
  }
When we run the program, the local object stores all the requested information:

the user’s home directory — '/Users/luca',
the operating system — 'Darwin' (Darwin is the underlying operating system of macOS.),
and the time since the computer was last rebooted — 86997 seconds.
Feel free to try running some of the os module methods on your own computer to get more information about the hardware, OS, and network you’re on!

Note that in the exercises below, the os module will return information from the learning environment hosted by Codecademy, and not your local computer.

Instructions
1.
In app.js, using the const keyword, declare a variable, os, that stores the os module.

Use the require() function to save the os module to the os variable.

2.
Next, below the line requiring in the os module, use const to create an empty object named server.

3.
Inside server, add the keys: type, architecture, and uptime. Store their respective values using methods from the os module.

4.
Finally, console.log() the server object, and run the program by typing node app.js in the terminal.
