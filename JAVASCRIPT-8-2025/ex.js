// let moblie=["vivo","redmi","samaung","nokia","oppo","nothing"]
// console.log(moblie[3])


// moblie[0]="iqoo"
// console.log(moblie)

// moblie.unshift("vivo")
// console.log(moblie)

// moblie.pop(2)
// console.log(moblie)

// moblie.shift(0)
// console.log(moblie)

// moblie.push("Asus","iphone","Poco")
// console.log(moblie)

// console.log(moblie.includes("nokia"))

// console.log(moblie.length)


// console.log(moblie.indexOf("Poco"))

// for(let i of moblie){
//     console.log(i)
// }


// let specs={
//     cab:"ant cab",
//     gpu:"rtx3060ti",
//     core:{
//     ram:"32gb corriser",
//     mobo:"asus x570plus",
//     cpu:"amd ryzenn 5600x",
//     }

// }

// specs.gpu="RTX 5090ti"
// specs["ram"]="64gd croissair"

// console.log(specs.gpu)

// console.log(specs["cab"])

// console.log(specs.core.ram)

// for(let key in specs){
//     console.log(`${key} : ${specs[key]}`)
// }
// console.log(specs)

// let keys=Object.keys(specs)

// let values=Object.values(specs)

// let entety=Object.entries(specs)

//----------------------------------------------------------

// class inheritance

/* class person{
    constructor(name,age,city,native){
        this.name=name
        this.age=age
        this.city=city
        this.native=native
    }
}

class emp extends person{
    constructor(name,age,city,native,position,salary){
        super(name,age,city,native)
        this.position=position
        this.salary=salary
    }
    display(){
        console.log(`[name = ${this.name}] | [age = ${this.age}] | [city = ${this.city}] | [Native = ${this.native}] `)
    }
}

let emp1 = new emp ("Ram",25,"trichy","coimbatore","trainer",35000)
let emp2 = new emp ("Ravi",23,"trichy","Bombay","soft dev",25000)

let data=emp1.display()
emp2.display()
let jsondata=JSON.stringify(emp2)
console.log(jsondata) */

//converting the json data into parse into the data

// let person={
//     name : "ram",
//     age : 23,
//     position : "software devloper"
// }

// console.log(person)

// let jsondata=JSON.stringify(person)
// console.log(jsondata)

// let objectdata=JSON.parse(jsondata)
// console.log(objectdata)



// nummber check in throw.js

// function numbercheck(number){
//     if(number %2!=0){
//         throw new Error (" the given number suppouse to even number , not  to be an, odd number change the vaule !")
//     }
//     return "the number is even number"
// }
// console.log(numbercheck(6))


// fetch function

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(console.log);

// the single user can be get into the fetch function
// fetch('https://dummyjson.com/users/3')
// .then(res => res.json())
// .then(console.log);

// moving upon the try catch error

// try {
//     fetch('https://dummyjson.com/users/5')
//         .then(res => res.json())
//         .then(console.log);
// } catch (error) {
//     console.log(error)
// }
try {
    fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(console.log)
} catch (error) {
    console.log(error)
}
 