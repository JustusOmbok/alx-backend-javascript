// Defines the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Creates two students
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'City A',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'City B',
  };
  
  // Creates an array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Renders a table using Vanilla JavaScript
  const table = document.createElement('table');
  
  // Appends table headers
  const headers = table.createTHead();
  const headerRow = headers.insertRow();
  const headerCell1 = headerRow.insertCell(0);
  headerCell1.textContent = 'First Name';
  const headerCell2 = headerRow.insertCell(1);
  headerCell2.textContent = 'Location';
  
  // Append rows for each student
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell(1);
    cell2.textContent = student.location;
  });
  
  // Appends the table to the body of the document
  document.body.appendChild(table);
