import "./App.css";
import Home from "../pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register";
import { useEffect, useState } from "react";

function App() {

const [login, setLogin] = useState(false);

//token එක check කිරීම
useEffect(()=> {
    const token = localStorage.getItem('iap-token');
    console.log(token);
    
    if (token){
      setLogin(true)
    }else{
      setLogin(false)
    }
}, [])

  return (
    <div>
      {login ? <Home /> : 
      <Routes>
        <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} key={"login-page"} />
        <Route path="/register" element={<Register />} key={"register-page"} />
      </Routes>
      }
    </div>
  );
}

export default App;   
