//! Exercises from Homework Exercise: Javascript
//? Hello You

// function hello(name) {
//     console.log(`Hello ${name}`)
// }
// hello('Mustache');

//? Hello You! Pt2

// function hello(name){
//     if (name != undefined){
//         console.log(`Hello ${name}`)
//     }
//     else{
//         console.log("Hello World")
//     }
// }

// hello();
// hello('Mustache');

//? Madlib

// function madlib(name, subject){
//     return myStr = (`${name}'s favorite subject is ${subject}`)
// }

// madlib('Anushka', 'art');
// console.log(myStr);

//? Tip Calculator

// var good = .2
// var fair = .15
// var bad = .1

// function tipAmount(bill, service){

//     var result;
//     if (service == "good"){
//         result = bill * good;
//     }
//     else if (service == "fair"){
//         result = bill * fair;
//     }
//     else if (service = "bad"){
//         result = bill * bad;
//     }
//     console.log(result)
// }

// tipAmount(100, "good")
// tipAmount(40, "fair")

//? Tip Calculator 2

// var good = .2;
// var fair = .15;
// var bad = .1;
// var tip;

// function tipAmount(bill, service){
//     if (service == "good"){
//         tip = bill * good;
//     }
//     else if (service == "fair"){
//         tip = bill * fair;
//     }
//     else if (service = "bad"){
//         tip = bill * bad;
//     }
//     return tip
// }

// function totalAmount(bill, service){
//     tip = tipAmount(bill, service);
//     return tip + bill
//     }

// var billTotal = totalAmount(100, "good");
// var billTotal = totalAmount(40, "fair");
// console.log(billTotal)


//! Homework from Javascript 101

//! Medium

//? Madlib (see solution above)

//? Tip Calculator (see solution above)

//? Tip calculator 2 (see solution above)

//? Tip Calculator 3

// var good = .2
// var fair = .15
// var bad = .1
// var tip;

// function tipAmount(bill, service){
//     if (service == "good"){
//         tip = bill * good;
//     }
//     else if (service == "fair"){
//         tip = bill * fair;
//     }
//     else if (service = "bad"){
//         tip = bill * bad;
//     }
//     return tip
// }

// function totalAmount(bill, service){
//     var tip = tipAmount(bill, service);
//     return tip + bill
//     }

// function splitAmount(bill, service, split){
//     var billTotal = totalAmount(bill, service);
//     return billTotal/split;
// }

// var splitBill = splitAmount(100, "good", 5)
// console.log(splitBill)

//? Print Numbers 1

function printNumbers(num1, num2){
for (let i = 0; i <= num2; i++){

}
}

//? Print Numbers 2

//? Print a square

// var width = 5
// var height = 6

// function printBox(width, height)
// console.log('*' * width)
// for i in range(height, 0, -1){
//     console.log('*'* + width-height);
// }
// console.log('*'*width);

//? Leet Speak (from class)

function leetSpeak(word){
    let map = {
        A : 4,
        E : 3,
        G : 6,
        I : 1,
        O : 0,
        S : 5,
        T : 7
    }

    let convertedWord = "";

    for(let i = 0; i < word.length; i++){
        let char = word[i];

        if(char.toUpperCase() in map){

            let keyValue = map[char.toUpperCase()]
            convertedWord = convertedWord + keyValue;
        }
        else{
            convertedWord = convertedWord + char;
        }
    }
    return convertedWord;
}

var result = leetSpeak("leet")
console.log(result);