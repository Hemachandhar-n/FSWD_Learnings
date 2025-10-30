let fruits=["apple","banana","grapes"]

//to access an array

console.log(fruits[0])

//mofify the array elemnt

fruits[1]="gova"
console.log(fruits)

//to add a elemnt at last

fruits.push("watermelon")
console.log(fruits)

//to add a element at front

fruits.unshift("grrenapple")
console.log(fruits)

//to remove elemnt at last

fruits.pop()
console.log(fruits)

//to 1st element at last

fruits.shift()
console.log(fruits)

//chect if elemnt exits

console.log(fruits.includes("gova"))

//index find

console.log(fruits.indexOf("grapes"))


//for of

//syntax

// for(let name of arrayname){
//     statements
// }

for(let fruit of fruits){
    console.log(fruit)
}
