//Calculating Avg Points

const points = [1, 3, 5, 7, 8, 3, 12, 88, 11, 5, 34, 3, 2];

const sum = (a, b) => a + b;
const division = (a, b) => a / b;

const avgPoints = divide(points.reduce(sum), points.length);
