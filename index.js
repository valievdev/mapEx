const students = [
  ["Noah", "Noah", "Noah", "Noah", "Noah"],
  ["Isaac", "Isaac", "Isaac", "Isaac", "Isaac"],
  ["Samuel", "Samuel", "Samuel", "Samuel", "Samuel"],
  ["Michael", "Michael", "Michael", "Michael", "Michael"],
];
const myStr = "blah blah blah blah blah blah blah blah blah blah";
let newStr = "";

myStr.split("").forEach((char) => {
  console.log(char);
});

// console.log(myStr);

// students.forEach((studentCloneList) => {
//   studentCloneList.forEach((clone, i) => {
//     console.log(`This is ${i} ${clone}`);
//   });
//   console.log("\n");
// });

// forEach(students, function (student) {
//   console.log(student);
// });
