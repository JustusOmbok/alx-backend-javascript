// Define the Teacher interface
export interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

  // Define the Directors interface that extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacherFunction interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${fullLastName}`;
};


// Define the StudentInterface
export interface StudentInterface {
  firstName: string;
  lastName: string;
}

// Define the StudentClassInterface
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
export class StudentClass implements StudentInterface, StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
