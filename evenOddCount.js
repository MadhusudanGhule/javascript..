let a=123

let b = String(a)
let evenCount=0
let oddCount=0
for(let i=0;i<b.length;i++){
  if(b[i]%2===0){
    evenCount++
  }else{
    oddCount++
  }
}

console.log("evenCount",evenCount,"oddCount",oddCount)