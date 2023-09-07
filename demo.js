// var obj = {
//     pName:"rama",
//     display:function(){
//         console.log(this.pName)
//     }
// }
// var obj1={
//     pName:"abc",
// };
// obj.display.call(obj1)

// event loop

// console.log("a")
// setTimeout(()=>console.log("set"),0);
// Promise.resolve(()=>console.log("pro")).then((res)=>res())
// console.log("b")

// currying function
// function add(a){
//     return function (b){
//         return function (c){
//             return function (d){
//                 return a+b+c+d
//             }
//         }
//     }
// }
// console.log(add(11)(22)(33)(44)())

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     };
// }
// console.log(add(11)(22)(33)(44)())


// question :implement this code

// const result=calc.add(10).multiply(5).subsract(30).add(10)


// const calc={
//     total:0,
//     add(a){
//         this.total+=a
//         return this //this line return the object itself
//     },
//     multiply(b){
//         this.total*=b;
//         return this //this line return the object itself
//     },
//     subsract(c){
//         this.total-=c;
//         return this //this line return the object itself
//     }
// }
// const result=calc.add(10).multiply(5).subsract(30).add(10)
// console.log(result.total)



