#!/usr/bin/node

// Display a welcome message and prompt the user to input their name
process.stdout.write('Welcome to Holberton School, what is your name?\n')

// Listen for data input from the user
process.stdin.on('data', (data) => {
  // Convert the input data to a string and remove any leading or trailing whitespace
  let name = data.toString().trim()

  // Display the user's name
  process.stdout.write(`Your name is: ${name}\n`)
  
  // Display a closing message and exit the process
  process.stdout.write('This important software is now closing\n')
  process.exit()
})
