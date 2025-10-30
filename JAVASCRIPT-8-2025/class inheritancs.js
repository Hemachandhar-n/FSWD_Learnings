class student{
    constructor(name,age,city){
        this.name=name
        this.age=age
        this.city=city
    }
}

class emp extends student{
    constructor(name,age,city,position,salary){
        super(name,age,city)
        this.position=position
        this.salary=salary
    }
    display(){
        console.log(`Name:${this.name}|age:${this.age}|city:${this.city}|position:${this.position}|Salary:${this.salary}`)
    }
}
let emp1=new emp("sundar",24,"trichy","trainer","15000")
let emp2=new emp("kumar",22,"theni","developer",25000)

let data=emp1.display()
emp2.display()
let jsondata=JSON.stringify(emp2)
console.log(jsondata)