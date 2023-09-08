// let arr=[1, 7, 2, 8, 3, 4, 5, 0]
// let temp=0

// for(let i=1;i<arr.length-1;i++){
// for(let j=0;j<arr.length-1;j++){
//     if(arr[i]<arr[j+1]){
//         temp=arr[j+1];
//         arr[j+1]=arr[i];
//         arr[i]=temp
//     }
// }
// }
// console.log(arr)

let Arr = [1, 7, 2, 8, 3, 4, 5, 0,9,9,9];
for (let i = 1; i < Arr.length; i++)
    for (let j = 0; j < i; j++){
        if (Arr[i] > Arr[j]) {
            let temp = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = temp;
        }}

console.log(Arr);