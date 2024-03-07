#!/usr/bin/node
class ClassRoom {
  constructor(maxStudentsSize) {
    this.maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this.maxStudentsSize;
  }

  set maxStudentsSize(newSize) {
    if (typeof newSize === 'number') {
      this.maxStudentsSize = newSize;
    } else {
      console.log('Invalid value');
    }
  }
}

export default ClassRoom;
