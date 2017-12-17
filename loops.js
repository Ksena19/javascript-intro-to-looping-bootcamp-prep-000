
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}


whileLoop(10);*/

function maybeTrue() {
  return Math.random() >= 0.5;
}

var array = [1,2,3];

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0); //&& maybeTrue());
  return array;
}

doWhileLoop(array);
