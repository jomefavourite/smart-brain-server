const fs = require('fs');

// console.log(fs);

// Write
// fs.writeFile('./blah.txt', 'Hello there!!!', err => {
//   if (err) {
//     console.log(err);
//   }
// });

// read
fs.readFile('./blah.txt', (err, data) => {
  console.time('try');
  if (err) {
    console.log(err);
  }
  console.log('Async', data.toString());
  console.timeEnd('try');
});

// const file = fs.readFileSync('./blah.txt');

// console.log('Sync', file.toString());

// fs.appendFile('./blah.txt', " I'm Jome", err => {
//   if (err) {
//     console.log(err);
//   }
// });
