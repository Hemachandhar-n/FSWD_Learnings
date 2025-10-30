// import React  from 'react';

// function Signup() {
//     const[name, setName]=useState("")
//     const[email, setEmail] = useState("")
//     const[gender, setGender] = useState("")
//     const[termsAccepted, setTermsAccepted] = useState(false)
//     const[message, setMessage] = useState("")
//     const handleSubmit = (e) =>{
//         e.preventDefault();

//         if(!name || !email || !gender || !termsAccepted){
//             setMessage('please Fill all the fields and accept the Terms.');
//         }else{
//             setMessage(`Thankyou, ${name}! Signup Successfull.`);
//             setName('');
//             setEmail('');
//             setGender('');
//             setTermsAccepted(false);
//         }
//     };
//   return (
//     <div>
//         <form onSubmit={handleSubmit} style={formStyled} >
//             <h2>Signup Form</h2>
//             <input type="text" placeholder='enter yoour name'value={name} onChange={(e) => setName(e.target.value)}  style={inputStyle}/>
//             <div style={{textAlign:'left', marginBottom:'10px'}}>
//                 <label>
//                     <input type="radio" name='Gender' vaule = 'Male' checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
//                     Male
//                 </label>{''}
//                 <label>
//                     <input type="radio" name='Gender' vaule = 'Female' checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
//                     Female
//                 </label>
//             </div>
//             <label style={{textAlign:'left',marginBottom:'10px'}}>
//                 <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
//                 I Accept the Terms and condition
//             </label>
//             <button type='submit' style={btnStyle} >SignUP</button>

//             {message && <p style={{marginTop:'15px', color:'green'}}>{message}</p>}
//         </form>

//     </div>
//   );
// }

// const formStyle = {
//   width: '320px',
//   margin: '40px auto',
//   padding: '20px',
//   border: '1px solid #ccc',
//   borderRadius: '10px',
//   display: 'flex',
//   flexDirection: 'column',
// };


// const inputStyle = {
//   padding: '10px',
//   margin: '10px 0',
//   fontSize: '16px',
// };

// const btnStyle = {
//   padding: '10px',
//   fontSize: '16px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   cursor: 'pointer',
// };




// export default Signup



import React, { useState } from 'react';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !gender || !termsAccepted) {
            setMessage('Please fill all the fields and accept the Terms.');
        } else {
            setMessage(`Thank you, ${name}! Signup Successful.`);
            setName('');
            setEmail('');
            setGender('');
            setTermsAccepted(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2>Signup Form</h2>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                />
                   <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />

                <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="Male"
                            checked={gender === 'Male'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>{' '}
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="Female"
                            checked={gender === 'Female'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>
                </div>

                <label style={{ textAlign: 'left', marginBottom: '10px' }}>
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                    />
                    I accept the Terms and Conditions
                </label>

                <button type="submit" style={btnStyle}>Sign Up</button>

                {message && <p style={{ marginTop: '15px', color: 'green' }}>{message}</p>}
            </form>
        </div>
    );
}

const formStyle = {
    width: '320px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
};

const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
};

const btnStyle = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
};

export default Signup;
