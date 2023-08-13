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



let n=5;
let str="";
for(let row=0;row<=2*n;row++){
    let totelColsInRow= row > n ? 2 * n-row :row;
    // let tottelSpace= row < n ? 2 * n-row : row;
    let tottelSpace= n-totelColsInRow;
    for(let spece=0;spece<tottelSpace;spece++){
        str += " ";
    }
    for(let col=0;col<=totelColsInRow;col++){
        str += " *";
    }
    str+="\n";
}
console.log(str);

