//arithematic operator

let a=10,b=5

let sum=a+b
let sub=a-b
let product=a*b
let div=a/b
let mob=a%b
let power=a**b

console.log("sum of a and b " +sum)
console.log("sub of a and b " +sub)
console.log("product of a and b " +product)
console.log("div of a and b " +div)
console.log("mob of a and b " +mob)
console.log("power of a and b " +power)


//assignment operator
let c=20
c+=10 //c=c+10
console.log(c)

//logical  operator

// true && true => (and)
// true || Flase => (or)
// !true => False (not)

let d=10, e=11
//and operator
if((d==10 && e==11)){
    console.log("true")
}else{
    console.log("false")
}
//or operator
if((d==10 || e==11)){
    console.log("true")
}else{
    console.log("false")
}

// not operator
if((!d==10)){
    console.log("true")
}else{
    console.log("false")
}

let username="kavin",password=1234

if((username=="kavin" && password==1234)){
    console.log("both match")
}else{
    console.log("invalid userid anf passowed")
}

// ternary operator

//syntax => (consition)? true:false

let valid=(username=="kavin")?"username match":"invlaid usermane"
console.log(valid)