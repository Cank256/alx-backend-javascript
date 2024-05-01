#!/usr/bin/node
const fs = require('fs');

/**
 * Reads the database file synchronously and logs the number of students in each field.
 * @param {string} path - The path to the database file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(Boolean); // Remove empty lines
    const fields = {};
    lines.slice(1).forEach((line) => {
      const [firstName, field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field of Object.keys(fields)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
