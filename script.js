const confTable = document.getElementById("conference-table");

const tableHeadings = [
  "Name",
  "Date",
  "Time",
  "Minimum Donation",
  "Keynote",
  "Category",
  "Workshop Example",
  "Talk Example",
];

const loadTable = () => {
  let table = document.createElement("table");
  let headingTr = document.createElement("tr");

  confTable.appendChild(table);
};

loadTable();
console.log("Hello World");
