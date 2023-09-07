


let star=5
let str=""
for(let row=0;row<=star;row++){
    for(let space=0 ;space<star-row;space++){
        str+=" "
    }
    for(let col=1;col<=row;col++){
        str += "* "
    }
 str+="\n"
}
console.log(str)  
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
