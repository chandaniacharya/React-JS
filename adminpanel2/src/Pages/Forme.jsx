/* eslint-disable eqeqeq */
import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Forme() {
    const redirect=useNavigate();


    const [form, setform]=useState({
        id:"",
        name:"",
        password:"",email:"",mobile:""
    })
    
    
    
    const onchange=(e)=>{
    
        setform({...form,id: new Date().getTime().toString(),[e.target.name]:e.target.value});
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
        if (form.email == "" || form.email == null) {
           result = false;
          alert('email Field is required !');
           return false;
         }
         if (form.mobile == "" || form.mobile == null) {
           result = false;
          alert('mobile Field is required !');
           return false;
         }
        return result;
      }
    
    
    
    
    
    const onsubmit=async(e)=>{
        e.preventDefault();
        if (validation()) {
    const res=await axios.post('http://localhost:3000/forme',form);
    console.log(res);
    setform({...form,name:"",password:"",email:"",mobile:""});
    redirect('/tablee');
    }}
   
   
   
   
     return (
       <div><div className='body'>
       <div>
           <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
     <div className="login-block1 ">
       <h1 style={{color:"white"}}>Add Product</h1>
       <input type="text" placeholder='Company-name'  id="password" name='password' onChange={onchange} value={form.password}/>
       <input type="text" placeholder='Product-Name'  id="username"  name='name' onChange={onchange} value={form.name}/>
       <input type="tel" placeholder='Price'  id="email"  name='email' onChange={onchange} value={form.email}/>
       <input type="number" placeholder='Available-stock'  id="mobile"  name='mobile' onChange={onchange} value={form.mobile}/><br/>
       <button onClick={onsubmit}>Add</button>
       
     </div></div></div></div>
     )
}

export default Forme