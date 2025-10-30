/* NESTED If..else statements are the ones in whichone conditional statement (if statement or if.. else statement) 
is nested inside another conditional statement ( if statement ot if else statement) */

// syntax

// if(condition){
//     if(condition){
//         statement
//     }else{
//         statement
//     }
// }else{
//     statement
// }


let age = 19
let haslincense = true

if(age > 18){
    if(haslincense){
        console.log("you can drive the vechile")
    }
    else{
        console.log("you must get the driving license")  
    }
}
else(
    console.log("youa are too young to drive the vechile")
)