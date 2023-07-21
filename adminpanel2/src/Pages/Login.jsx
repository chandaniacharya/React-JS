/* eslint-disable eqeqeq */
import React from 'react'
import { useState } from "react";
import axios from "axios";

import { NavLink, useNavigate } from 'react-router-dom';
function Login() {


 const redirect=useNavigate();



const [form,setform]=useState({
    id:"",
    name:"",
    password:""
})



const onchange=(e)=>{

    setform({...form,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(form);
}




const validation = () => {
    var result = true;

    if (form.name == "" || form.name == null) {
      result = false;
      alert('name Field is required !');

      return false;
    }
    if (form.password == "" || form.password == null) {
      result = false;
     alert('Password Field is required !');
      return false;
    }
    return result;
  }





const onsubmit=async(e)=>{
    e.preventDefault();



    if (validation()) {
const res=await axios.get(`http://localhost:3000/login?name=${form.name}`);



if (res.data.length > 0) {



    if (res.data[0].password == form.password) {
      localStorage.setItem('name',res.data[0].name);
      setform({ ...form, name: "", password: "" });

      
      alert('Login Successfull !');
    
      redirect('/dashboard');
    }



    else {
        alert('Password Not valid !');
      setform({...form, name: "", password: "" });
    }
  }



  else {
   alert('Username Not valid !');
    setform({ ...form, name: "", password: "" });
  }
    }
}


  return (
    <div className='body'>
    <div>
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
  <div className="login-block ">
    <h1 style={{color:"white"}}>Admin Login</h1>
    <input type="text" placeholder='username'  id="username"  name='name' onChange={onchange} value={form.name}/>
    <input type="password" placeholder='password'  id="password" name='password' onChange={onchange} value={form.password}/><br/>
    <button onClick={onsubmit}>Login</button><br />
   <NavLink to={"/logine"}> <button className='b1'>Employee Login</button></NavLink>
  </div></div></div>

  )
}

export default Login