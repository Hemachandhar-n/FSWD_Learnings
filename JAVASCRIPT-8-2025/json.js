let person={
    name:"sundar",
    age:23,
    position:"triner"
}
console.log(person)

let jsondata=JSON.stringify(person)  // "stringify" the data can be converted into normal data <=> Json data
console.log(jsondata)

let objectdata=JSON.parse(jsondata)   //"parse" the object can be converted into json data <=> normal data
console.log(objectdata)