// Accept input from the command line in Node.js
// How to make a Node.js CLI program interactive?

// Node.js since version 7 provides the readline module to perform exactly this: get input from a readable stream such as the process.stdin stream, which during the execution of a Node.js program is the terminal input, one line at a time

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});

/*

This piece of code asks the user's name, and once the text is entered and the user presses enter, we send a greeting.

The question() method shows the first parameter (a question) and waits for the user input. It calls the callback function once enter is pressed.

In this callback function, we close the readline interface.

readline offers several other methods, please check them out on the package documentation linked above.

If you need to require a password, it's best not to echo it back, but instead show a * symbol.

The simplest way is to use the readline-sync package which is very similar in terms of the API and handles this out of the box.

A more complete and abstract solution is provided by the Inquirer.js package.

You can install it using npm install inquirer, and then you can replicate the above code like this:
*/
