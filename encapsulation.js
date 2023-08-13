class bankAccount {
    constructor(balance, accountnumber) {
        this.accountnumber = accountnumber;
        this.balance = balance;

    }
    deposit(amount) {
        this.balance += amount;

    }
    withidrow(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("insfficient fund");
        }
    }
    getaccountnumber() {
        return this.accountnumber;
    }
    getbalance() {
        return this.balance;
    }

}
const account = new bankAccount(1000, "12345");
console.log("Account no:-", account.getaccountnumber())
console.log("cuurunt balance:-", account.getbalance())
account.deposit(500);
console.log("cuurunt balance:-", account.getbalance())
account.withidrow(600)
console.log("cuurunt balance:-", account.getbalance())
// 
// Encapsulation is an important principle in object - oriented programming(OOP) that involves bundling data(attributes) and 
// methods(behavior) within a class, and controlling access to them from outside the class. It promotes the idea of hiding the
//  internal implementation details of a class and exposing only necessary interfaces or APIs to interact with the class.