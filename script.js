const confTable = document.getElementById("conference-table");
let allConferences = [];

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

// const loadTable = () => {
//   let table = document.createElement("table");
//   let headingTr = document.createElement("tr");

//   confTable.appendChild(table);
// };

const loadConferences = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/conferences/index");
    allConferences = await res.json;
    console.log(allConferences);
  } catch (err) {
    console.log(err);
  }
};

// loadTable();
console.log("Hello World");
loadConferences();
