// let n=5
// let str=""
// for(let row=1;row<=n;row++){
//     for(let col=1;col<=n-row+1;col++){
//        str +="*"
//     }
//     str +="\n"
// }
// console.log(str)
// *****
// ****
// ***
// **
// *
// let n=5;
// let str="";
// for(let row=1;row<=n;row++){
//     for(let col=1;col<=n-row+1;col++){
//         str+=col
//     }  
//     str+="\n"
// }
// console.log(str)
// 12345
// 1234
// 123
// 12
// 1



// let n=5;
// let str="";
// for(let row=0;row<=2*n;row++){
//     let totelColsInRow= row > n ? 2 * n-row :row;
//     for(let col=0;col<=totelColsInRow;col++){
//         str += " *";
//     }
//     str+="\n";
// }
// console.log(str);
// *
//  * *
//  * * *
//  * * * *
//  * * * * *
//  * * * * * *
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *



// let n=5;
// let str="";
// for(let row=0;row<=2*n;row++){
//     let totelColsInRow= row > n ? 2 * n-row :row;
//     // let tottelSpace= row < n ? 2 * n-row : row;
//     let tottelSpace= n-totelColsInRow;
//     for(let spece=0;spece<tottelSpace;spece++){
//         str += " ";
//     }
//     for(let col=0;col<=totelColsInRow;col++){
//         str += " *";
//     }
//     str+="\n";
// }
// console.log(str);


// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
//  *





// var n = 9;
// let str = ""
// for (let row = 1; row <= 2*n; row++) {
//     var c=row > n ? 2 * n-row :row;

//     for (let space = 0; space < n-c; space++) {
//         str += "  "
//     }

//     for (let col = c; col >= 1; col--) {
//         str += col + " "
//     }

//     for (let col = 2; col <= c; col++) {
//         str += col + " "
//     }
    
//     str += "\n"
// }
// console.log(str)

// 1 
// 2 1 2 
// 3 2 1 2 3 
// 4 3 2 1 2 3 4 
// 5 4 3 2 1 2 3 4 5 
// 6 5 4 3 2 1 2 3 4 5 6 
// 7 6 5 4 3 2 1 2 3 4 5 6 7 
// 8 7 6 5 4 3 2 1 2 3 4 5 6 7 8 
// 9 8 7 6 5 4 3 2 1 2 3 4 5 6 7 8 9 
// 8 7 6 5 4 3 2 1 2 3 4 5 6 7 8 
// 7 6 5 4 3 2 1 2 3 4 5 6 7 
// 6 5 4 3 2 1 2 3 4 5 6 
// 5 4 3 2 1 2 3 4 5 
// 4 3 2 1 2 3 4 
// 3 2 1 2 3 
// 2 1 2 
// 1 

