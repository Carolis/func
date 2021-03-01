//1) Calculating Avg Points

const points = [1, 3, 5, 7, 8, 3, 12, 88, 11, 5, 34, 3, 2];

const sum = (a, b) => a + b;
const division = (a, b) => a / b;

const avgPoints = divide(points.reduce(sum), points.length);

//2) Filtering who has the most points

const people = [
  { firstName: "person1", points: 3 },
  { firstName: "person2", points: 5 },
  { firstName: "person3", points: 5 },
  { firstName: "person4", points: 7 },
  { firstName: "person5", points: 9 },
  { firstName: "person6", points: 2 },
  { firstName: "person7", points: 2 },
];

const filterPoints = (person) => person.nota >= 7;
const approved = people.filter(filterPoints);
