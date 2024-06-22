setTimeout(() => {
    // runs after 2 seconds
    console.log(2000)
  }, 2000);
  
  setTimeout(() => {
    // runs after 50 milliseconds
    console.log(50)
  }, 50);
  

//   setTimeout returns the timer id. This is generally not used, but you can store this id, and clear it
//if you want to delete this scheduled function execution:
const id = setTimeout(() => {
    //  console.log(id)
}, 2000);
 
// I changed my mind
// clearTimeout(id);


// Zero delay
// If you specify the timeout delay to 0, the callback function will be executed as soon as possible, but after the current function execution:

setTimeout(() => {
    console.log('after ');
  }, 0);
  
  console.log(' before ');


//   Recursive setTimeout
// setInterval starts a function every n milliseconds, without any consideration about when a function finished its execution.

// If a function always takes the same amount of time, it's all fine:

setInterval(() => {
    let i =0;
    console.log(i = + 1 + i);
}, 1000);

// Node.js also provides setImmediate(), which is equivalent to using setTimeout(() => {}, 0), mostly used to work with the Node.js Event Loop.
  