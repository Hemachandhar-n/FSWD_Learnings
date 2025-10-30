const cart = [
    {name:"rtx5090",product:"gpu",price:80000,qty:1},
    {name:"64gb",product:"ram",price:15000,qty:4},
    {name:"i9 13thgen",product:"cpu",price:27000,qty:1},
    {name:"40inch",product:"monitor",price:35000,qty:2},
    {name:"ant esport",product:"cabinet",price:6000,qty:1},
    {name:"deepcool",product:"aio air pump",price:7000,qty:1},
    {name:"asus mobo",product:"motherboard",price:17000,qty:1},
    {name:"mk1300",product:"keyboard",price:1700,qty:1}
]

// map function
const productnames = cart.map(item => item.name);
console.log(productnames);

// calculate the total price for each item. (map function)

const itemtotals = cart.map(item => ({
    name: item.name,
    total: item.price * item.qty
}));
console.log(itemtotals);

// get the item quantity > 1 (filter function)

const bulkitems = cart.filter(item => item.qty > 1);
console.log(bulkitems);

//cacluate the total cart vaule (reduce function)

const totalamount = cart.reduce((acc,item) => acc+item.price*item.qty,0);
console.log(totalamount);

// total qty in (reduce function)
const totalqty = cart.reduce((acc,item) => acc + item.qty , 0)
console.log(totalqty)

// print the cart vaule ( for each function)

console.log("bill for youur purchase")
cart.forEach(item => {
    console.log(`${item.qty} x ${item.name}  = RS.${item.price * item.qty}`);
})


// check the cart if it has any expensive item > ( Rs.50,000) (some function)

const hasLuxuryItem = cart.some(item => item.price >50000)
console.log(hasLuxuryItem);

// verify the cart if it has any expensive item ( Rs.70,000) (every function)

const AllAffordable = cart.every(item => item.price < 70000)
console.log(AllAffordable);