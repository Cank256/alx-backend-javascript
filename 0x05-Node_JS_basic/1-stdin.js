#!/usr/bin/node

// Display a welcome message and prompt the user to input their name
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit(0);
});
