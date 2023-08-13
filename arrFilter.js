
// Array filter odd num
arr = [12,22,43,45,56,67,76,78,65,34,32,34,11,10,15]
const odd = arr.filter(it=>it%2 ==0)

console.log ('odd Array :-' + odd)
// Sum of odd numbers using a for loop
  let sunOfnum= 0;
  for (let i=0;i<odd.length;i++){
    sunOfnum+=odd[i];
  }
console.log ('oddOfsum :-' + sunOfnum)


// Array filter even num
const even = arr.filter(it=>it%2 !=0)
console.log('Even Array :-' + even) 
//sum of even number usinig loop
let evenOfsum=0;
for(let j=0;j<even.length;j++)
{
    evenOfsum+=even[j];
} 
console.log("sunOfnum :-"+evenOfsum)