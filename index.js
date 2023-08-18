// // for(var i=0;i<10;i++){
// // setTimeout(()=>{
// // console.log(i)
// // },1000)
// // }
// // for (let i=0;i<4;i++){
// //   console.log("num",i)
// // }
// // find string
// // const str ="my name is rama";
// // const substr="a";
// // let result;

// // exist
// // result=str.includes(substr)
// // console.log(result);
// // where exists
// // result = str.indexOf(substr)
// // console.log(result);
// // how many time 
// // result=str.split(substr).length-1
// // console.log(result)
// // let a = "Hello, How are you"
// // let string= a.split("").reverse().join("")
// //  a=a.replace("H","_")
// //  console.log(string)//  a=a.replace(/H/g,"_")
// //  console.log([a])
// //  a=a.substring(6,a.length)
// //  console.log(a)

// // finally function
// // let task =new Promise(function(resolve,reject){
// //     setTimeout(()=>{
// //         reject("Done")
// //     },1000)
// // })
// // task.finally(()=>{
// //     console.log("finally")
// // }).
// // then(()=>{
// // console.log('data')

// // },(error)=>{
// //     console.log('error ',error)
// // })
// // sort method sorting asending and desending Array element
// // let x = [62,13,24,6,64,20,1,11,32,34,56,76]
// let m=[1,3,23,12,4,64,5,540]
// // for (let i=0;i<m.length;i++)
// // {
// //   for(let j=0;j<m.length-1;j++){
// //     if (m[i]<m[j]){
// //      let temp =m[i];
// //      m[i]=m[j];
// //      m[j]=temp;

// //     }
// //   }
// // }
// console.log("reduce :-",m.reduce((e,f)=>e<f))
// console.log("sort arr:-",m)
// // let y = m.sort()
// // console.log(m.sort())


// //closer and lecxical scope
// //   function Hello(){
// //     var a=10
// //     function innnerFun(){
// //         return a;
// //     }
// //     return innnerFun();
// //   }
// //   var inner= Hello()
// //   console.log(inner)
// // function createBase(a){
// //   return ((b)=>{
// //     return a+b;
// //   })
// // }
// // var addsix1 = createBase(6)
// // console.log(addsix(10)) //output 16
// // console.log(addsix(21)) //output 27






// const arr = ["madan", "ram", "sham", "krushna", "ram", "madan", "sham", "madan", "ram", "sham", "madan", "bhim"];

// const groupedValues = {};

// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];
//   if (!groupedValues[value]) {
//     groupedValues[value] = [value];
//   } else {
//     groupedValues[value].push(value);
//   }
// }

// const output = {};

// for (const value in groupedValues) {
//   const occurrences = groupedValues[value];
//   const index = occurrences.length > 1 ? occurrences.length - 1 : 0;
//   if (!output[index]) {
//     output[index] = [];
//   }
//   output[index].push(value);
// }

// console.log(output);




// const data=["Anil", "madan","Krushna","rama"]
// const [...y]=data
// console.log(y)

// const set = new Set([1,2,2,3,3,4,4,5,5,6,6,7,7,1])
// console.log(set)

// const data = {name:"anil"}
// console.log(delete data.name)

// const data1 = ["Anil", "madan", "Krushna", "rama"]
// const data2 = [{ name: "anil" }]
// const mergeObj = { ...data1, ...data2 }
// const mergeArr = [...data1,...data2]
// console.log("object",mergeObj)
// console.log("Array",mergeArr)

