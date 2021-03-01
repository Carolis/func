//1
function fn5() {
  console.log("timeout");
}
function fn4() {
  fn5();
}
function fn3() {
  setTimeout(() => {
    fn5(), 3000;
  });
  console.log("fn3");
}
function fn2() {
  fn3();
}
function fn1() {
  fn2();
}
function main() {
  fn1();
}

main();
console.log("End1");

//2
function awaitFor(someTime) {
  const future = Date.now() + someTime;
  while (Date.now() < future) {}
}

setTimeout(() => {
  console.log("Exec 01"), 3000;
});

awaitFor(3000);
console.log("End2");
