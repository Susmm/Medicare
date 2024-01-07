/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/reactjs.jsx to edit this template
 */
import React, { useState } from 'react'
import "./modal.css";

function Modal({setOpenModal}){
    const handlesubmit=(e)=>{
        e.preventDefault();
    };
    return (
          <div className="modal">
          <div onClick={()=>setOpenModal(false)} className="overlay"></div>
          <div className="modal-content" >
          <form onSubmit={handlesubmit}>
                  <h2>Enter your details</h2>
                  <input placeholder="Full name" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
                  <input placeholder="Age" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
                          <input placeholder="Gender" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
                                  <input placeholder="Blood Group" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
                                          <input placeholder="Weight" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
                                                  <input placeholder="Email" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
{/* <input placeholder="Ph. No." type="text" style={{height:"30px",width:"500px"}} required className="regisInput" /><br/><br/>*/}
<input placeholder="Password" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
        <input placeholder="Confirm Password" type="text" style={{height:"30px",width:"495px"}} required className="regisInput" /><br/><br/>
                  <input type="submit" value="Submit"/>
            </form>
    </div>
    </div>
            );
};

export default Modal;