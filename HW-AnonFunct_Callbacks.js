
const ages = [33, 12, -20, 16, 5, 54, 21, 44, -61, 13, 15, 45, 25, 64, -32];

//? 1. Positive Numbers
// using ages array

// let posNums = ages.filter(function(agesEl){
//     return agesEl > 0;
// })
// console.log(posNums);


// for(let pos = 0; pos < ages.length; pos++){
//     if (ages[pos] > 0){
//         console.log(ages[pos]);
//     }
// }

//? 2. Even Numbers

// let evenNums = ages.filter(function(agesEl){
//     return (agesEl % 2) == 0
// })
// console.log(evenNums);


//? 3. Square the Numbers

// nums = [1, 2, 3]

// let newNums = nums.map(function(numsEl){
//     return numsEl ** 2;
// })
// console.log(newNums);

//? 4. Cities 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

// let newCities = cities.filter(function(citiesEl){
//     return citiesEl.temperature < 70;
// })
// console.log(newCities);

//? 5. Cities 2

// cities.forEach(function(i){
//     console.log(i.name);
// })

//? 6. Good Job!

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.forEach(function(i){
//     console.log(`Good Job, ${i}!`);
// })

// //? 7. Sort an Array

// let pplSort = people.sort()
// console.log(pplSort);

//? 8. Sort an Array 2

/*
let newPpl = people.sort(function(a, b){
    if (a.length < b.length){
        return -1;
    }
    if (b.length < a.length){
        return 1;
    }
    return 0;
})
console.log(newPpl);
*/

//? ## 9. Sort an array, 3
//! CODE BLOCK ON LINES 99-117

// Given an array of array of numbers like:

var arr = [
[1, 3, 4],
[2, 4, 6, 8],
[3, 6] ];

// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
// ```
// [ [1, 3, 4],
// [3, 6],
// [2, 4, 6, 8] ]
// ```

/*
function sum(numArray){
    let numSum = 0
    for(let i = 0; i < numArray.length; i++){
        numSum = numSum + numArray[i];
    }
    return numSum;
}
console.log(sum(arr[0]));

let newValue = arr.sort(function(a, b){
    if (sum(a) < sum(b)){
        return -1;
    }
    if (sum(b) < sum(a)){
        return 1;
    }
    return 0;
})
console.log(newValue);
*/


//? ## 10. 3 times 
//! CODE BLOCK ON LINES 124-134

// Given this function:

/* 

function call3Times(){
    fun();
    fun();
    fun();
}

function fun(){
    console.log('Hello World')
}

call3Times() 

*/

// Use the `call3Times` function to print "Hello, world!" 3 times.

//? ## 11. n times 
//! CODE BLOCK ON LINES 156-169

// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// ```
// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// ```
// You are allowed to use a loop in the implementation of callNTimes.

/* 

hello = 0

function callNTimes(myNum, hello){
    while (hello < myNum){
        fun();
        hello++
    }
}

function fun(){
    console.log("Hello World");
}

callNTimes(5, hello);

*/

//? ## 12. Sum an array 
//! CODE BLOCK ON LINES 184-196

// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// ```
// > sum([1, 2, 3])
// 6
// ```

/* 

const nums = [1, 2, 3]

let initialValue = 0
let sum = nums.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue
}, initialValue)

console.log(sum)

const acronym = data2.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    }, )
    console.log(acronym);

*/

    //? ## 13. Acronym
    //!(CODE BLOCK ON LINES 210-215 AND 221-226)

// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// ```
// > acronym(['very', 'important', 'person'])
// 'VIP' >  'NASA'}

//? VIP
/*
const data = ['very', 'important', 'person'];

const acronym = data.reduce(function(accumulator, currentValue){
        return accumulator + currentValue[0]
    }, "")
    console.log(acronym);
*/

//? NASA
/*

const data2 = ['national', 'aeronautics', 'space', 'administration']

const acronym = data2.reduce(function(accumulator, currentValue){
        return accumulator + currentValue[0]
    }, "")
    console.log(acronym);

*/