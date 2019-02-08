// var array1 = [10, 2, 5, 1, 9];
// array1.sort(function(a, b) {
//   return a - b
// });

// console.log(array1)

//sort alphabetically and then by descending age
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

  students.sort(function (a, b) {

  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return 1;
  }
});

// console.log(students[0].name);  //TEST LINE

// students.sort(function (a, b) {

// });

//array.sort to get sorted array
//parameters = < or > 0
//older first = larger first = >0

console.log(students);






