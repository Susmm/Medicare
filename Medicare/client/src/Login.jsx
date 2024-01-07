/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/reactjs.jsx to edit this template
 */
import React, { useState } from 'react';
import "./modal.css";

function LoginModal({setOpenModal,loginStatus}){
    const handlesubmit=(e)=>{
        e.preventDefault();
    };
    return (
       <div className="modal">
          <div onClick={()=>setOpenModal(false)} className="overlay"></div>
          <div className="modal-content" >
          <span>{!loginStatus && "Login First!"}</span><br/><br/>
          <form onSubmit={handlesubmit}>
    <input placeholder="Email" type="text" style={{height:"30px",width:"500px"}} required className="regisInput" /><br/><br/>
<input placeholder="Password" type="text" style={{height:"30px",width:"500px"}} required className="regisInput" /><br/><br/>                                                  
        <input type="submit" value="Login"/>
        </form>
        </div>
    </div>
    );
};

export default LoginModal;