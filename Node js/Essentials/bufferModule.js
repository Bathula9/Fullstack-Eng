The Buffer Module
In Node.js, the Buffer module is used to handle binary data. The Buffer module is within the global scope, which means that Buffer objects can be accessed anywhere in the environment without importing the module with require().

A Buffer object represents a fixed amount of memory that can’t be resized. Buffer objects are similar to an array of integers where each element in the array represents a byte of data. The buffer object will have a range of integers from 0 to 255 inclusive.

The Buffer module provides a variety of methods to handle the binary data such as .alloc(), .toString(), .from(), and .concat().

The .alloc() method creates a new Buffer object with the size specified as the first parameter. .alloc() accepts three arguments:

Size: Required. The size of the buffer
Fill: Optional. A value to fill the buffer with. Default is 0.
Encoding: Optional. Default is UTF-8.
const buffer = Buffer.alloc(5);
console.log(buffer); // Ouput: [0, 0, 0, 0, 0]
The .toString() method translates the Buffer object into a human-readable string. It accepts three optional arguments:

Encoding: Default is UTF-8.
Start: The byte offset to begin translating in the Buffer object. Default is 0.
End: The byte offset to end translating in the Buffer object. Default is the length of the buffer. The start and end of the buffer are similar to the start and end of an array, where the first element is 0 and increments upwards.
const buffer = Buffer.alloc(5, 'a');
console.log(buffer.toString()); // Output: aaaaa
The .from() method is provided to create a new Buffer object from the specified string, array, or buffer. The method accepts two arguments:

Object: Required. An object to fill the buffer with.
Encoding: Optional. Default is UTF-8.
const buffer = Buffer.from('hello');
console.log(buffer); // Output: [104, 101, 108, 108, 111]
The .concat() method joins all buffer objects passed in an array into one Buffer object. .concat() comes in handy because a Buffer object can’t be resized. This method accepts two arguments:

Array: Required. An array containing Buffer objects.
Length: Optional. Specifies the length of the concatenated buffer.
const buffer1 = Buffer.from('hello'); // Output: [104, 101, 108, 108, 111]
const buffer2 = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const array = [buffer1, buffer2];
const bufferConcat = Buffer.concat(array);
 
console.log(bufferConcat); // Output: [104, 101, 108, 108, 111, 119, 111, 114, 108, 100]
Instructions
1.
In buffer.js, use the .alloc() method with a size of ‘15’ and a fill value of 'b'. Save the created Buffer object to a const variable named bufferAlloc.


Hint
Remember that you can create a Buffer object of size 10 and filled with 'c' using the .alloc() method like below:

const buffer = Buffer.alloc(10, 'c');
2.
In buffer.js, create two const variables buffer1 and buffer2. Instantiate two Buffer objects using the .from() method. Pass the string 'hello' into buffer1 and 'world' into buffer2.


Hint
Buffer objects can be created using a string, object, or a previous buffer.

const buffer1 = Buffer.from('apples');
const buffer2 = Buffer.from('oranges');
3.
Create a variable named bufferArray and set it equal to an array that contains buffer1 and buffer2. Then, pass bufferArray to the .concat() method to combine the two buffers into a new Buffer object. Save the result to a const variable named bufferConcat.


Hint
The .concat() method requires an array that contains the Buffer objects to join.

const buffer1 = Buffer.from('apples');
const buffer2 = Buffer.from('to');
const buffer3 = Buffer.from('oranges');
const bufferArray = [buffer1, buffer2, buffer3];
const bufferConcat = Buffer.concat(bufferArray);
4.
Using the .toString() method, save the string translation of bufferConcat to a variable named bufferString, then log the value of bufferString to the console.

Remember that you can run buffer.js by running the command:

node buffer.js

Hint
Remember to append .toString() to what you want to be translated to string.

const bufferString = bufferConcat.toString();
console.log(bufferString);

// Allocate buffer of size 15 filled with 'b'

const bufferAlloc = Buffer.alloc(15, 'b');
// Create buffer1 with 'hello' and buffer2 with 'world'


  
// Combine buffer1 and buffer2
const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');


// Translate buffer to string
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);
const bufferString = bufferConcat.toString();
console.log(bufferString);

// Uncomment the apropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
console.log(bufferConcat);
console.log(bufferString);
