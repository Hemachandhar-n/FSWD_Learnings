function orderpizaa(flaver){
    return new Promise((resolve,reject)=>{
        if(flaver=="chicken"){
            setTimeout(() => {
                resolve("your order is ready now")
            }, 2000);
        }else{
           reject("only veg avalible");
        }  
        
    })
}
async function order() {
    try {
         const food=await orderpizaa("chicken")
         console.log("your order is prepare now")
        console.log(food)
    } catch (error) {
        console.log(error)
    }
   
}
order()