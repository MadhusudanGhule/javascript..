async function callApi(){
    let result= await fetch("https://jsonplaceholder.typicode.com/users");
    result= await result.json();
    console.log(result.map((item)=> item.name))
}
callApi();