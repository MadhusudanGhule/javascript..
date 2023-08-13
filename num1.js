// function printPattern(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = '';
//       for (let j = 1; j <= n; j++) {
//         // Calculate the value at position (i, j)
//         let value = Math.max(n - Math.abs(i - (n + 1) / 2), n - Math.abs(j - (n + 1) / 2));
//         row += value + ' ';
//       }
//       console.log(row);
//     }
//   }
  
//   // Call the function with the desired size of the pattern
//   printPattern(9);







// function printPattern(n) {
//   let pattern = [];
  
//   for (let i = 0; i < n; i++) {
//     pattern[i] = [];
//     for (let j = 0; j < n; j++) {
//       pattern[i][j] = Math.max(Math.abs(i - n/2), Math.abs(j - n/2)) + 1;
//     }
//   }
  
//   for (let i = 0; i < n; i++) {
//     console.log(pattern[i].join('  '));
//   }
// }

// Call the function with the desired size of the pattern
// printPattern(9);

function printPattern(n) {
  let pattern = [];
  
  for (let i = 0; i < n; i++) {
    pattern[i] = [];
    for (let j = 0; j < n; j++) {
      pattern[i][j] = Math.max(Math.abs(i - Math.floor(n/2)), Math.abs(j - Math.floor(n/2))) + 1;
    }
  }
  
  for (let i = 0; i < n; i++) {
    console.log(pattern[i].join('  ').replace(/\.5/g, ''));
  }
}
// Call the function with the desired size of the pattern
printPattern(10);


function createBase(a){
  return (b)=>{
    return a+b;
  }
}
var addsix = createBase(6)
console.log(addsix(10))
console.log(addsix(21))
