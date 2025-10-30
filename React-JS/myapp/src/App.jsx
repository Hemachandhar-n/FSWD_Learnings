// import { useState } from 'react'
// // import Imagee from './Imagee'
// // import Contion from './Contion'
// // import Data from './Data'
// // import Condition1 from './Condition1'
// // import Datam from './Datam'
// // import Login from './Login'
// // import Signup from './signup'
// import Dashboard from './Dashboard'
// import Register from './Register'
// // import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// // import Home from './Home'
// // import About from './About'
// // import Contact from './Contact'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // // import Welcome from './Welcome'
// // import State from './State'
// // import State1 from './State1'
// // import Effect from './Effect'
// // import Employee from './Employee'
// // import Comments from './Comments'
// // import Product1 from './Product1'
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     // <>
//     //  {/* <h1>welcome to react</h1>
//     //  <p>this is paragraph tag</p>
//     //  <Welcome name="sundar" position="trainer" sal="20000"/>
//     //  <Welcome name="Arun" position="developer" sal="40000"/> */}
//     //  {/* <State/> */}
//     //  {/* <Webpage/> */}
//     //  {/* <State1/> */}
//     //  {/* <Effect/> */}
//     //  {/* <Employee/> */}
//     //  {/* <Comments/> */}
//     //  {/* <Product1/> */}
//     // <Imagee/>
//     // {/* <Contion/> */}
//     // <Data/>
//     // <Condition1/>

//     // <Datam/>
//     // <Login/>
//     // <Signup/>

//     //  </>
//     // <Router>
//     //   {/* <nav>
//     //     <Link to="/">Home</Link>|
//     //     <Link to="/about">About</Link>|
//     //     <Link to="/contact">Contact</Link>
//     //   </nav> */}
//     //   <Routes>
//     //     {/* <Route  path='/' element={<Home/>}/>
//     //     <Route path='/about' element={<About/>}/>
//     //     <Route path='/contact'  element={<Contact/>}/> */}
//     //   </Routes>
//     // </Router>

//       <Router>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/Dash" element={<Dashboard />} />
//         {/* Uncomment and add more routes when needed */}
//         {/* <Route path="/about" element={<About />} /> */}
//         {/* <Route path="/contact" element={<Contact />} /> */}
//       </Routes>
//     </Router>

//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

