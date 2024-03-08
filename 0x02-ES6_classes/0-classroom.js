#!/usr/bin/node
// 0-classroom.js
export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number' || maxStudentsSize <= 0) {
      throw new Error('maxStudentsSize must be a positive number');
    }
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
