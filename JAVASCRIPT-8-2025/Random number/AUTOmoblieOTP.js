// moblie OTP

var OTP = Math.floor(Math.random()*1000000)
function Moblie_OTP(OTP)
{
    var AUTOreadOTP = OTP

    if(AUTOreadOTP==OTP)
    {
        console.log(OTP+"  Generated Sucessfully")
        console.log(AUTOreadOTP+"  AUTOreadOTP Generated sucessfully")
        console.log("Login Sucessfully")

    }
    else{
        console.log("OTP Wrong Get the corrct OTP")
    }
}
Moblie_OTP(OTP)