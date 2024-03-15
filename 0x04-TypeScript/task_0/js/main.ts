// Define the Student Interface
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

// Create two student instances
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentList = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
})

table.appendChild(tbody);
document.body.appendChild(table);
