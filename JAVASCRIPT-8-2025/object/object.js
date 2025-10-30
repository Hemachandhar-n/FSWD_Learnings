let person={
    name:"sundar",
    age:23,
    city:"trichy",
    adddress:{
        street:"west street",
        pin:621008
    }
}

//to accsess a ellement

console.log(person.name)

console.log(person["city"])

console.log(person.adddress.pin)

//to modify object 

person.name="sundar raj"
person["age"]=24

console.log(person)

let keys=Object.keys(person)

let values=Object.values(person)

let entety=Object.entries(person)

console.log(keys)
console.log(values)
console.log(entety)

//for in

//syntax

// for(let keys in objectname){
//     statement
// }

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}