#!/usr/bin/node

// import { readDatabase } from '../utils';
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase('database.csv');
      res.status(200).send('This is the list of our students\n' + Object.entries(fields).map(([field, students]) =>
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      ).join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      const fields = await readDatabase('database.csv');
      if (!fields[major]) {
        throw new Error(`No students found in ${major}`);
      }
      res.status(200).send(`List: ${fields[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
