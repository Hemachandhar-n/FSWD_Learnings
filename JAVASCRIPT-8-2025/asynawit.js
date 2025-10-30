function delay(){
    return new Promise((resolve,reject)=>{          // the new conditiion is called a "Promise"
        setTimeout(() => {
            resolve("function run after 2 s")
        }, 2000);
    })
}

async function place() {
    console.log("start")
    const data=await delay()
    console.log(data)
}
place()