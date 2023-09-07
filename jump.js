let c = [0,1, 0 ,0 ,0, 1 ,0];
let count = 0;
for (let i = 0; i < c.length; i++) {
  if (c[i + 2] === 0) {
    count++;
    i = i + 1;
    console.log("1st",i)
  } else if (c[i + 1] === 1) {
    count++;
    console.log("2st",i)

  } else if(c[i+1]===0) {
    count++;
    console.log("3st",i)
  }
}

console.log(count);


