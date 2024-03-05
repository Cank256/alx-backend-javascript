#!/usr/bin/node
export default function createIteratorObject(report) {
  // This is a generator function that yields every employee from every department
  return (function* () {
    for (const department of Object.keys(report.allEmployees)) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }());
}
