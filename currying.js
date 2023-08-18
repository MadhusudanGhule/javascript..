// currying
// function getSum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     console.log(a+b+c+d+e)
//                 }
//             }
//         }
//     }
// }
// getSum(11)(23)(36)(47)(52)
 
// const getSum2 = (a) =>(b)=>(c)=>(d)=>(e)=> a+b+c+d+e
//  const totel=getSum2(11)(23)(36)(47)(52)
//  console.log(totel)

//  Currying is a technique in functional programming that performs the transformation of a function 
//  with multiple arguments into several functions containing a single argument in a sequence.



//prime num
// const num =5;
// var isPrime=true;

// for(let i=0;i<num;i++){
//   if(num % i== 0){
//     isPrime=false;
//   }
// }
//  if(isPrime==true){
//     console.log(`${num} is prime num`)
//   }else{
//     console.log(`${num} is not a prime num`)
//   }



// fibonachi
const num =1000;
let a=0;
let b=1;
let fn=a+b;
while(fn<num){
  console.log(fn);
  fn=a+b;
  a=b;
  b=fn;
}