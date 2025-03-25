
// string to log with null coalescing operator
// let argument = process.argv[2] ?? 'Hello Boolean';

// console.log(process.argv[2]);

// console.log('Hello Boolean');

// console.log(argument);

// // instructions to log every argument
// if (process.argv.length > 2) {
//   for (let i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
//   }
// } else {
//   console.log('Hello Boolean');
// }

// instructions to log every argument in line
if (process.argv.length > 2) {

  let phrase = '';

  for (let i = 2; i < process.argv.length; i++) {

    phrase += `${process.argv[i]} `

  }

  console.log(phrase);

} else {

  console.log('Hello Boolean');

}