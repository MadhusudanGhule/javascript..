// protoType.js
let newName = "12325354             ";
// console.log(newName.trim().length) 

String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`true length is :${this.trim().length}`)
}
newName.truelength()

