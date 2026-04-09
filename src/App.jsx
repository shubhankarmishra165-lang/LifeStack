import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/index.jsx'
import Events from './components/Events/index.jsx';
import Password from './components/Password/Password.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css'
function App() {
//   const [isLoading,setisLoading]=useState(true)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setisLoading(false)
//     },5000);
//   },[]);
//   if (isLoading) {
//   return (
//     <div className="loader-bee">
//       {/* <div className="loader"></div> */}
      
//          <picture>
//   <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f41d/512.webp" type="image/webp"/>
//   <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f41d/512.gif" alt="🐝" width="180" height="180"/>
// </picture>
//     </div>
//   );
// }
 return (
  <BrowserRouter>
    <Navbar />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path='/passwords' element={<Password/>}/>
    </Routes>
  </BrowserRouter>
 )
}
export default App;