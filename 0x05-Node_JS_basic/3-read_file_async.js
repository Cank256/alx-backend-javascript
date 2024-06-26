#!/usr/bin/node
const fs = require('fs').promises;

/**
 * Reads the database file asynchronously and logs the number of students in each field.
 * @param {string} path - The path to the database file.
 * @returns {Promise} A promise that resolves when the database is read.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(Boolean); // Remove empty lines
    const fields = {};
    lines.slice(1).forEach((line) => {
      const [firstName, field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].total}. List: ${fields[field].firstNames.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
