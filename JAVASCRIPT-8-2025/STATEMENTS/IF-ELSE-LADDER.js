/* the if-else ladder is a control stuctureis an javascript that sllows you to execuy=tea different block of a code, depending on the multiple conditions
. it is  called a ladder because it constits of the multi-if and else statements are arranged in a ladder like positions.*/



// here is the syntax for an if-else-ladder :

/* 
if (condition-1){
    //code to be an executed if condition is true
    }else if (condition-2){
    //code to be an exeecuted if condition-1 is false and condition-2 is true
    } else if (condition-3){
    //code to be executed if condition-2 is false and condition-3 is true
    }......
else {
    //code to be executed if all condition is false
} */



// example -1


/* print a college degree percentage in 1% - 100%
    below 40(write an exam again)
    40 andd 40+ (third class)
    60 and 60+ (secound class)
    80 and 80+ (first class)
    90 and 90+ (distinction ) */



var studentname = "tommy"
var percentage = 96

if(percentage<40){
    console.log("write an exanm again")
}

else if (percentage>=40 && percentage<60){
    console.log("THIRD CLASS")
}

else if (percentage>=60 && percentage<80){
    console.log("SECOUND CLASS")
}

else if (percentage>=80 && percentage<90){
    console.log("FIRST CLASS")
}


else if (percentage>=90 && percentage<100){
    console.log("DISTINCTION CLASS")
}