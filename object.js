// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayhello(){
//         console.log(`Nmaste, my name is ${this.name} i am ${this.age} year old`)
//     }
// }

// const person1=new person('johan',22)
// const person2=new person('johan',22)
// console.log(person1.name)
// console.log(person2.name)

// person1.sayhello()
// person2.sayhello()

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the first number: ', (num1) => {
//   rl.question('Enter the second number: ', (num2) => {
//     const sum = parseInt(num1) + parseInt(num2);
//     console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
//     rl.close();
//   });
// });



const person={
    name:"rama",
    hello:function(thing){
        console.log(this.name + "say hello  " + thing + " ")

    },

}
let alterEgo ={
    name:"sham ",

};
const newPerson =person.hello.bind(alterEgo)
newPerson("hello")
console.log(newPerson())

