//Atm

function ATM(PIN)
{
    var CHECKPIN = 1409
    if (CHECKPIN==PIN){
        console.log("Pin is correcct , Money transfered sucessfully!!")
    }
    else{
        console.log("enter the pin correctly")
    }
}
ATM(1409)