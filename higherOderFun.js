// higherOderFun.js

// const people=["ram","sham","krushna"];
// const callback=(data)=> data+ ' kumar'
// console.log(callback("ram"))
// const tranfromResult=people.map(callback)
// console.log(tranfromResult)



//filter.js
// const arrs=["ram","sham","govind","madan","lakhan","krushna","ram"]
// const newFil=(eachName)=>eachName=="ram";
// const newArrs=arrs.filter(newFil)
// console.log(newArrs)

// const arr1=[1,2,3,4,5,6,7,8,9,0]
// const newArr1=arr1.filter(num=>num%2==0)
// console.log(newArr1)

//find
// const objs=[{name:"rama",age:22,gemder:"male",profile:"developer"},
//     {name:"sham",age:25,gemder:"male",profile:"photographer"},
//     {name:"krushna",age:23,gemder:"male",profile:"nodedev"}
// ]
// const newObj=objs.find(eachUser=>{
//     console.log(eachUser)
//     return eachUser.profile==="photographer"

//     // return eachUser.age===22
// })

//reduce
// const num=[1,2,3,4,5,6,7,8,9,0]
// const myTotle=num.reduce((acc,currentVal)=>{
//      console.log("acc",acc,"current",currentVal)
//      return acc+currentVal

// },0)
// console.log("totel",myTotle)

// let totel=num.reduce()
// console.log("newTotel",totel)


// a cleaner way to access arrays last element.
// let arr=[4,5,6,7,2,8,9,0]
// let lastElement=arr[arr.length-2]
// let=lastElement1=arr.at(-1)
// console.log(lastElement1)


//reverse string and arrays 

// let arr=[4,5,6,7,2,8,9,0]
// let str= "madhusudan ghule"
// let revers=str.split('').reverse().join('')
// console.log(revers)

// using for loop
// let str ="madhusudan ghule"
// let newStr=""
// for (let i=str.length-1;i>=0;i--){
//     // newStr+= str[i];
//     newStr=newStr+str[i]
// }
// console.log(newStr)



// let arr=[1,2,3,4,4,5,6,6,7,4,3,7,8,1,2,2,0,9]
// let sortArr=arr.sort((a,b)=>{return a-b})
// let uniq=[...new Set(arr)].sort((a,b)=>a-b);
// let uniqe=[...new Set(arr)]
// console.log(uniqe)



//sorting using arrays

// let zero=new Number(0)
// console.log(zero)
// if (zero){
//     console.log("if")
// }else{
//     console.log("else")
// }

// let msg="ddfghjkl"
// msg.name="johan"
// console.log(msg.name)




// let conunt=10
// function a(){
//     if(conunt===10){
//         let conunt=11;
//         console.log(conunt)
//     }
//     console.log(conunt)
// }
// a()

// var car = new Ve("h", "w", 2010, "uk")
// console.log(car)

// function Ve(m,c,y,co){
//     this.m=m
//     this.c=c
//     this.y=y
//     this.co=co
// }

// function foo(){
//     let x=y=0;
//     x++;
//     y++;
//     return x
// }
// console.log(foo(), typeof (x), typeof (y))


// function main() {
//     console.log("A")
//     setTimeout(function print() {
//             console.log("B")
//         },0)
//     console.log("C")
// }
// main()

// console.log(0.1+0.2===0.3)
// console.log(0.1+0.2)
// console.log(typeof(0.1+0.2))
// console.log(typeof(0.3))

// console.log(1+2===3)


// const a=["a","b","c","d"]
// delete a[0]
// console.log(a)
// console.log("")


// const obj={
//     props1:function(){return 0},
//     props2(){return 1},
//     ["props"+3](){return 2}
// }
// console.log(obj.props1())
// console.log(obj.props2())
// console.log(obj.props3())

//0,1,2 is out put

// console.log(1<2<3)
// console.log(3>2>1)

// const a=()=>arg.length;
// console.log(a(1,2,3))


// console.log(10+"10")
// console.log(10-"10")

console.log(NaN===NaN)