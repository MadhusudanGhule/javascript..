// state is a concept in React that refers to the data that changes over time in a component, affecting its rendering.
//  useState is a specific React hook that allows functional components to manage and update their local state. 
// It provides a way to work with state in a more concise and readable manner compared to class components.




// var n=6;
//  let string="";
// for (let row = 1; row <=n; row++) {
//     for (let col = 1; col <=row; col++) {
//       string+= row + " "
//     }

//     string+="\n"; 
//   }
//       console.log(string);

// 1 1 1 1 1 
// 2 2 2 2 
// 3 3 3 
// 4 4 
// 5 








//   var n=5;
//   let string="";
//  for (var row = 1; row < n; row++) {
//      for (var col = 1; col <=n; col++) {
//        string+=row + " "
//      }

//      string+="\n";
//    }
//    console.log(string)

//    ******
//    ******
//    ******
//    ******
//    ******
//    ******
//    









//  var n=7;
//  let string="";
// for (var row = 1; row <=n; row++){
//     for (var col = 1; col <=n-row+1; col++) {
//       string+=col + " "
//     } 
//     string+="\n";
//   }
//   console.log(string)
//   // output
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

var n = 6;
let str = " "
for (let row = 1; row < n; row++) {
  for (let col = 1; col < n; row++) {
    str += "*"
  }
  str+="\n"
}
console.log(srt)
