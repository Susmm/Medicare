import './App.css';
import { useState,useEffect } from 'react';
import Modal from './Register';
import LoginModal from './Login';
import Axios from 'axios';

function App() {
    const [userReg, setUserReg] = useState("");
    const [passReg, setPassReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [ageReg, setAgeReg] = useState("");
    const [phnoReg, setPhNoReg] = useState("");
    const [genderReg, setGenderReg] = useState("");
    const [dobReg, setDobReg] = useState("");
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    
    const [modalOpen, setModalOpen] = useState(false);
    const [loginmodalOpen,setLoginModalOpen] = useState(false);
    const [loginStatus,setloginStatus] = useState(false);
    
    const [selectedDoc,setSelectedDoc] = useState("");
    
    const HandleSignup=()=>{
        setModalOpen(true);
    };
    const HandleLogin=()=>{
        setLoginModalOpen(true); 
    };
    const HandleAppointment=()=>{
        setSelectedDoc("Select by specialization");
        setloginStatus(true);
        //!loginStatus && setLoginModalOpen(true);
    };
    useEffect(()=>{
        if(selectedDoc!=="Select by specialization"){
        console.log()
        Axios.post('http://localhost:3003/doctors', {
            specialization: selectedDoc 
        }).then((response) => {
            console.log(response);
            /*if (response.data.err)
                setUserStatus(response.data.err);
            else
                setUserStatus("user registered!");*/
        }).catch ((exception) =>{
           console.log(exception); 
        });
    }
    },[selectedDoc]);
  return (
    <div className="App">
  <ul style={{paddingTop:"40px"}}>
  <li style={{fontSize: "30px",float:"left",position:"relative",top:"-14px",left:"10px",color: "white"}}>Medicare</li>        
  <li onClick={HandleSignup}><a style={{paddingRight:"6px",paddingLeft:"10px",backgroundColor:"black",fontSize:"15px"}}>Sign up</a></li>
  <li onClick={HandleLogin}><a style={{paddingRight:"12px",backgroundColor:"gray",fontSize:"15px"}}>Login</a></li>
  {loginStatus &&<li style={{paddingTop:"10px",paddingRight:"12.5px"}}><select style={{width:"180px"}} value ={selectedDoc} onChange={(e)=>setSelectedDoc(e.target.value)}><option value="Select by specialization" selected hidden>Select by specialization</option>
  <option value="Dentist">Dentist</option>
  <option value="Dermatologist">Dermatologist</option>
  <option value="Endocrinologist">Endocrinologist</option>
  <option value="Gastroenterologist">Gastroenterologist</option>
  <option value="Neurologist">Neurologist</option>
  <option value="Oncologist">Oncologist</option>
  <option value="Cardiologist">Cardiologist</option>
  <option value="Pediatrician">Pediatrician</option>
  <option value="Allergist">Allergist</option>
  <option value="Orthopedic">Orthopedic</option>
  </select></li>}
      <li onClick={HandleAppointment}><a style={{backgroundColor:selectedDoc!==""&&"#0074d9"}}>Book an appointment</a></li>      
     {/*<li><a>Logout</a></li>
     <li><a>Pending appointments</a></li>
     <li><a>Appointment History</a></li>
     <li><a>Book an appointment</a></li>*/}
  </ul>
  <div></div>
  <div style={{height:"500px"}}></div>Hello
          {modalOpen && <Modal setOpenModal={setModalOpen}/>}
          {loginmodalOpen && <LoginModal setOpenModal={setLoginModalOpen} loginStatus={loginStatus}/>}
    </div>
  );
}

export default App;
