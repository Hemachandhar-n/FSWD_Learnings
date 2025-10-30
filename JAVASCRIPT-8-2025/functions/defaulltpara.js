// syntax
// function name(params) {
//     statement()
// }
// name( argument)

// example

function name(age, city = "trichy") {
    console.log(`iam ${age} old, and im from ${city}`)
}
name(38)
name(29, "chennai")

let a = 18
let b = 26

console.log(`multiply of ${a} and ${b} =${a * b}`) //format strings by using the ${} while using 
// this strings only use the tidle charater (``)