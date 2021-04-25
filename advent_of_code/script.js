const fs = require('fs');

fs.readFile('./ques1.txt', (err, data) => {
  console.time('show');
  if (err) {
    console.log(err);
  }
  let floor = 0;
  let dataArray = [...data.toString()];
  dataArray.forEach((item, i) => {
    if (item === '(') {
      floor += 1;
    } else {
      floor -= 1;
      if (floor === -1) {
        console.log(i);
      }
    }
  });
  // floor = dataArray.reduce((acc, curV) => {
  //   if (curV === '(') {
  //     return (acc += 1);
  //   } else return (acc -= 1);
  // }, 0);
  // [...data.toString()].forEach(item => {
  //   item === '(' ? (floor += 1) : (floor -= 1);
  // });

  console.log(floor);
  console.timeEnd('show');
});
