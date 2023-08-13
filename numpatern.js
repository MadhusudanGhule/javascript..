let max=8;

for(let i=0;i<=max;i++){
    let str=''
    for (let j=0;j<=max;j++){
        let r=j;
        let u=i;
        let l=max-r;
        let d=max-u;
        // let min = findMin(r,u,l,d);
        str+= ' '+(findMin(r,u,l,d)-4);
    }
    console.log(str)
}

function findMin(...arg){
    let min=arg[0];
    for(let i =0;i<arg.length;i++){
        if(arg[i]>min)
        min=arg[i];
    } 
    return min;
}