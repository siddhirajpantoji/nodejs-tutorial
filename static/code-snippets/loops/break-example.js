let sum = 0;

while (true) {

  let value = process.argv[2]

  if (!value) break; // (*)

  sum += value;


}
console.log( 'Sum: ' + sum );