#!/usr/bin/node

// Display a welcome message and prompt the user to input their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data input from the user
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
