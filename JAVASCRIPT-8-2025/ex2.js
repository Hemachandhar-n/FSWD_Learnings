function user(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({user:"sundar",age:22})
        }, 2000);
    })
}
async function fetchuser() {
    console.log("user data fecthing")
    const data=await user()
    console.log(data)
    console.log("data fetched suceesfully")
}
fetchuser()