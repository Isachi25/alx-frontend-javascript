class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }

  // Getter for yearsOfExperience
  getYearsOfExperience(): number | undefined {
    return this.yearsOfExperience;
  }

  // Setter for yearsOfExperience
  setYearsOfExperience(years: number): void {
    this.yearsOfExperience = years;
  }

  // Method to add any attribute dynamically
  addAttribute(attributeName: string, attributeValue: any): void {
    this[attributeName] = attributeValue;
  }
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0); // Get the first letter of firstName
  return `${firstLetter}. ${lastName}`;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define an interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define an interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass
class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
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

const student = new Student({ firstName: 'John', lastName: 'Doe' });
console.log(student.workOnHomework()); // This will print "Currently working"
console.log(student.displayName()); // This will print "John"
