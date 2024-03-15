// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`
}

interface StudentClassInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string){}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
