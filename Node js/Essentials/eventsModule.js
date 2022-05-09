NODE.JS ESSENTIALS
The Events Module
Node is often described as having event-driven architecture. Let’s explore what that means.

In traditional imperative programming, we give the computer a series of instructions to execute in a pre-defined order. In contrast, when we write web applications, we often need to write logic to handle situations without knowing exactly when they’ll occur. For example, when programming a website, we might provide functionality for a click event without knowing when a user will trigger it. When Node was created, it applied this same concept of event-driven principles to the back-end environment.

Node provides an EventEmitter class which we can access by requiring in the events core module:

// Require in the 'events' core module
let events = require('events');
 
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
Each event emitter instance has an .on() method which assigns a listener callback function to a named event. The .on() method takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.

Each event emitter instance also has an .emit() method which announces a named event has occurred. The .emit() method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function.

let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};
 
// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)
 
// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'
Let’s create an event emitter!

Instructions
1.
In app.js, we’ve required in the events core module and written a function listenerCallback which expects to be passed data and will log a string to the console which incorporates that data. Now it’s time to create an event emitter. Create a new variable, myEmitter and assign as its value a new instance of the event emitter class.

You’ll do this by invoking EventEmitter():

let myEmitter = new events.EventEmitter();
2.
Invoke myEmitter‘s .on() method passing in 'celebration' as the event name and listenerCallback as the listener callback function.

An event emitter’s .on() method takes as its the name of the event as a string as its first argument and, the listener callback function as its second argument.

someEmitter.on('name of event', callbackFunction);
3.
Let’s emit a 'celebration' event! Invoke myEmitter‘s .emit() method passing in 'celebration' as the event name and a string of your choice as the second argument.

If you like to celebrate good times, you might want to pass in 'good times, come on!' as your second argument:

myEmitter.emit('celebration', 'good times, come on!');
4.
Let’s see this program run! Use the node command to run app.js from the terminal.

// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

let myEmitter = new events.EventEmitter();

myEmitter.on('celebration',listenerCallback);

myEmitter.emit('celebration', 'good times, come on!');
