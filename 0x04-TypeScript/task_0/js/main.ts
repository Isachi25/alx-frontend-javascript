interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Create table header
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

// Create table body
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const cellFirstName = document.createElement("td");
  cellFirstName.textContent = student.firstName;
  const cellLocation = document.createElement("td");
  cellLocation.textContent = student.location;

  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);

// Append the table to the body of the HTML document
document.body.appendChild(table);

