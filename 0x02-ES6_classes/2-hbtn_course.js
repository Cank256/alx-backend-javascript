#!/usr/bin/node
class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this.name = name;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get length() {
    return this.length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this.length = length;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get students() {
    return this.students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      this.students = students;
    } else {
      throw new Error('Students must be an array');
    }
  }
}
