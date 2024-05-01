#!/usr/bin/node

import fs from 'fs';

/**
 * Reads the database file asynchronously and returns an object of arrays of first names per field.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise} A promise that resolves with an object containing arrays of first
 *                     names per field.
 */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(Boolean); // Remove empty lines
        const fields = {};
        lines.slice(1).forEach((line) => {
          const [firstName, field] = line.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        });
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
