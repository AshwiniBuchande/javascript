for (i=0; i<=100; i++){
    console.log(i);
}

for( let i=100; i>=0; i--){
    console.log(i)
}

// Print even and odd numbers.

for(let i=0; i<=20; i++){
    if(i%2 === 0){
        console.log(`$(i) is even`)
    }
    else{
        console.log(`$(i) is odd`)
    }
}

// Print numbers in reverse.

for( let i=100; i>=0; i--){
  console.log(i)
}

//Find the sum of numbers.
const numbers = [20, 50, 10, 30];

let sum = 0;

for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}

console.log("Sum: ", sum);

//Multiplication table.
const number = 5;

for(let i=1; i<=100; i++){
    let result = number * i;

    console.log(`${number} * ${i} = ${result}`)
}

//Factorial

const number = 10;
let factorial = 1;

for (let i=1; i<=number; i++){
    factorial = factorial * i;

    console.log(`The factorial of ${number} is:`, factorial)
}

//star pattern

const rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}


const rows = 5;

for (let i = rows; i >= 1; i--){
    let pattern = "";
    for( let j = 1; j <= i; j++){
        pattern += "*";
    }
    console.log(pattern);
}