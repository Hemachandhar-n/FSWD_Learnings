/* 
the switch statement executes a block of a code dependinng on the cases. the switch statments ia  a part of a java script ,
 an conditional statement is use to perform different action based on different condition. use switch to select the many block 
 of a code of the execution.
*/
// Syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


function calculate(arithemetic_operations) {
    switch (arithemetic_operations) {
        case "+":
            console.log(10 + 20)
            break
        case "-":
            console.log(10 - 20)
            break
        case "*":
            console.log(10 * 20)
            break
        case "/":
            console.log(10 / 20)
            break
        case "%":
            console.log(10 % 20)
            break
    }

}

calculate("*");