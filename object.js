class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayhello(){
        console.log(`Nmaste, my name is ${this.name} i am ${this.age} year old`)
    }
}

const person1=new person('johan',22)
const person2=new person('johan',22)
console.log(person1.name)
console.log(person2.name)

person1.sayhello()
person2.sayhello()