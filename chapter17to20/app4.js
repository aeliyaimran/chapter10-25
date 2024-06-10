// chapter 17 to 20
//Q1
let data = [[],[],[]];
//Q2
let data1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//Q3
for(var i = 0; i <=10; i++){
    console.log(i)
}
//Q4
let number= parseInt(prompt("Enter a number to show its mutiplication table"));
for (var i =1; i<=10; i++){
    const product = i * number;
console.log(number,"*",i,"=", product)
}


//Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(let i=0; i<5; i++){
    console.log(fruits[i])
}
for (let i=0; i<5; i++){
    console.log("element at index",i,"is", fruits[i])
}
//Q.6(a)
for (var i = 1; i <= 15; i++){
    console.log(i)

}
//(b)
for ( var i = 10; i <= 1 ; i-- ){
    console.log (i)

}
//(C)
for ( var i = 1; i <= 20; i++){
    console.log(i);
}

//(d)
for ( var i = 1; i <= 20; i++){
    if (i % 2  !=0){
        console.log (i);
    }
}

//(e)
for ( var i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i ,"k")
    }
}


//Q.7
// Define the array
const d = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user to enter an item to search for
const userInput = prompt("Enter an item to search for:");

// Check if the item is in the array
if (d.includes(userInput)) {
    alert(`${userInput} is found in the list.`);
} else {
    alert(`${userInput} is not found in the list.`);
}
// Q.8
const a = [24, 53, 78, 91, 12];


let largestNumber = a[0];


for (let i = 1; i < a.length; i++) {
    if (a[i] > largestNumber) {
        largestNumber = a[i];
        console.log(largestNumber);
    }
}

//Q.9
let b = [24, 53, 78, 91, 12];
let smallestNumber = b[0];

for (let i = 1; i < b.length;i++){
    if (b[i] < smallestNumber){
        smallestNumber = b[i];
        console.log(smallestNumber);
    }
}
//Q.10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}