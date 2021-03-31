let a = 4

//Function Declaration
function hello() {
  console.log('Hellooooo')
}

//Function Expression
const helloTwo = function () {
  console.log('Hello again')
}

////////////////////////////////////////////////////////////////

function sum(a, b) {
  return a + b
}
let result = sum(1, 2)
console.log('🚀result', result)
result = sum(1, 3, 4, 6, 8, 9)
console.log('🚀result', result)
result = sum(1)
console.log('🚀result', result) //will return NaN (1 + undefined)

////////////////////////////////////////////////////////////////
