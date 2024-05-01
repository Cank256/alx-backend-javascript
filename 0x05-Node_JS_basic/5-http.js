#!/usr/bin/node
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((students) => {
        console.log(students);
        res.end(`This is the list of our students\n${students}`);
      }).catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
}).listen(1245);

module.exports = app;
