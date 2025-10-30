function checkage(age){
    if(age<18){
        throw new Error ("age must be grater then 18") 
    }
    return "access granted"
}
console.log(checkage(19))