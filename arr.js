// let arr = [1, 2, 3, 4, 5];
// let brr = [6, 7, 8, 9, 10];
// let length = arr.length;
// let crr = new Array(2 * length); // The resulting array

// for (let i = 0, j = 0, k = 0; i < length; i++, j += 2, k += 2) {
//     crr[j] = arr[i];
//     crr[k + 1] = brr[i];
// }
// // Printing the resulting array
// let resultString = "crr[] = {";
// for (let i = 0; i < 2 * length; i++) {
//     resultString += crr[i];
//     if (i < 2 * length - 1)
//         resultString += ", ";
// }
// resultString += "}";
// console.log(resultString);

 const arrs=["a","b","c","d"];
 let obj=arrs.reduce(
    (a,it,i)=>
    ({...a,[i]:it}),{} 
 )
 console.log(obj);

 const reversearr=Object.keys(obj).map(key=>obj[key]);
 console.log(reversearr)

 const rarr=[]
 for (let key in obj){
    rarr.push(obj[key])
 }
 console.log(rarr)



