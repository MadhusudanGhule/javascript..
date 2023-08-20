
// Question 2: FizzBuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, 
// and for multiples of 5,
//  print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz"

// for(let i=0;i<100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")

//     }else if(i%3==0 ){
//         console.log("Fizz")
//     }else if (i%5==0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }


// Question 3: Counting Vowels
// Write a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.
// let str="ShitaRam"
// function CountVowles(){
//     const vowles="aoiueAOIUE"
//     let count=0
//     for(let i=0;i<str.length;i++){
//         let isVowels=false
//         for(let j=0;j<vowles.length;j++){
//             if(str[i]==vowles[j]){
//                 isVowels=true;
//             }
//         }
//         if(isVowels){
//             count++
//         }
//         // if(vowles.includes(str[i])){
//         //     count++
//         // }
//     }
//     return console.log(count)
// }
// CountVowles()



// Question 4: Finding Duplicates
// Write a function that takes an array of integers as input and returns an 
// array containing only the unique elements (removing duplicates).

// const arr=[1,2,3,43,434,0,,0,2,2,3,4,5,5]
// function removeDuplicate(){
//     const uniqueArr=[]
//     for(let i=0;i<arr.length;i++){
//         let isDuplicate=false
//         for(let j=0;j<uniqueArr.length;j++){
//             if(arr[i]==uniqueArr[j]){
//                 isDuplicate=true;
//             }
//         }
//         if(!isDuplicate){
//             uniqueArr.push(arr[i])
//         }
//     }
//     console.log(uniqueArr)
// }
// removeDuplicate()


// Question 5: Fibonacci Sequence
// Write a function to generate the nth Fibonacci number. The Fibonacci sequence is 
// defined as follows: F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.

// const num=1000
// let a=0;
// let b=1;
// let FibonacciN=a+b;
// while(FibonacciN<num){
//     console.log(FibonacciN)
//     FibonacciN=a+b;
//     a=b;
//     b=FibonacciN;

// }
// console.log(FibonacciN)


// Question 8: Anagram Check
// Write a function to check if two strings are anagrams of each other (contain the same characters but in a different order).


// let word1="s"
// let word2="ss"
// function Anagram(){
//     let str1=word1.split('').sort().join('')
//     let str2=word2.split('').sort().join('')
//     if(str1==str2){
//         console.log("is Anagram")
//     }else{
//         console.log("is not Anagram")
//     }
// } 
// Anagram()




// Question 9: Find the Missing Number
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n
//  with one element missing, find the missing number.

// function findNum(a) {
//     const n = num.length;
//     let expectdSum = (n * (n + 1)) / 2
//     // let actualSum = 0;
//     const actualSum = num.reduce((sum, num) => sum + num, 0);
//     // for (let i = 0; i < n; i++) {
//     //     actualSum += num[i];
//     // }
//     const res = actualSum - expectdSum
//     console.log(res)
// }
// let num = [1, 2, 3, 5]
// findNum(num)



// function findMissingNumber(nums) {
//     const n = nums.length;
//     let actualSum = 0;

//     for (let i = 0; i < n; i++) {
//         actualSum += nums[i];
//     }

//     const expectedSum = (n * (n + 1)) / 2;
//     const missingNumber = expectedSum - actualSum;

//     return missingNumber;
// }

// const numbers = [3, 0, 1, 4, 6,7]; // Missing number: 2
// const missingNumber = findMissingNumber(numbers);
// console.log(`The missing number is: ${missingNumber}`);




function findMissingNumber(nums) {
    const n = nums.length;
    let totalXOR = 0;
    let arrayXOR = 0;

    // XOR all numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        totalXOR ^= i;
    }

    // XOR all numbers in the array
    for (let num of nums) {
        arrayXOR ^= num;
    }

    return totalXOR ^ arrayXOR;
}

const numbers = [3, 0, 1, 4,6]; // Missing number: 2
const missingNumber = findMissingNumber(numbers);
console.log(`The missing number is: ${missingNumber}`);    
