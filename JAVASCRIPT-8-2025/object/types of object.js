// method1

let person={
    name: "hemachand",
    age:23

}
console.log(person)

//method 2

let cart=new Object()

cart.item1="carrot"
cart.item2="beans"
cart.item3="potato"
cart.item4="tomato"
cart.item5="beetroot"


cart.item1="lemon"

console.log(cart)

// method 3

class car{
    constructor(name,price,color,year,level,cc){
        this.name=name
        this.price=price
        this.color=color
        this.year=year
        this.level=level
        this.cc=cc
    }
    onroadprice(){
        return this.price+=20045000
    }
    onmileage(){
        if (this.cc>3000)
        {
               return "150"
        }else if(this.cc>1000){
            return "90"
        }

    }
    display(){
        console.log(`name:${this.name} | price: ${this.onroadprice()} | color: ${this.color} | year : ${this.year} | level : ${this.level}|CC:${this.cc}|mailage:${this.onmileage()}`)
    }
}

let c1=new car("BMW M4",16000000,"black","2025","S-class",1200)
let c2=new car("ROLLS ROYCE- GHOST",56000000,"Red stripe","2023","B-class",1200)
let c3=new car("AUSTON MARTIN",89000000,"yellow","2021","A-class",2500)
let c4=new car("KONIZEAGG",68000000,"Blue","2025","S-class",3000)
let c5=new car("McLEARAN-P1",584600000,"White stripe","2023","S-class",4000)
let c6=new car("AUDI-A4",562000000,"Gray-White","2022","C-class",1600)
let c7=new car("PORSHE",66600000,"Gray-White","2022","A-class",1900)
let c8=new car("FORD GT",8595000000,"Gray-White","2021","s-class",4000)

c1.display()
c2.display()
c3.display()
c4.display()
c5.display()
c6.display()
c7.display()
c8.display()