import React, { useState } from 'react'
import { useNavigate } from "react-router";
import Button from '../button/button';
import TopNavbar from '../navbar/topNavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Register(){
    const[userInfo,setuserInfo] = useState("");
    const[msg,setMsg] = useState("");
    const[error,setError] = useState("");
    const [hotelUserDetail,setHotelUserDetail] = useState({
        name:"",
        email:"",
        password:"",
        appType:"bookingportals"
    });
    const navigate = useNavigate();

    const handleChange=(e)=>{
        let updated = {...hotelUserDetail};
        updated[e.target.name] = e.target.value;
        console.log(updated);
        setHotelUserDetail(updated);
        // navigate("/sign_in_page");
    }
    const inputSubmit = async()=>{
        if(hotelUserDetail.username!="" && hotelUserDetail.email!="" && hotelUserDetail.password!="")
        {
            try{
                const options = {
                    method: 'POST',
                    headers: new Headers({projectID:'0eebeaycqywr' , 'Content-Type': 'application/json'} ),
                    body: JSON.stringify(hotelUserDetail)
                }
                const res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/signup`,options) 
                const data = await res.json();
                console.log(data);
                if(data.status=="success")
                {
                    setMsg("Registered Successfully !");
                    navigate(`/login`);
                    // Invalid input data. Please provide a valid email
                }
                else
                {
                    setMsg(data.message);
                }
                setTimeout(()=>{setMsg("");},2000);
            }
            catch(error){
                console.log(error);
            }
        }
        else{
            setError("All fields must be required!");
          setTimeout(()=>{
            setError("");
          },2000);
        }
    }
    return(
        <div>
                <TopNavbar/>

            <div className="text-center flex flex-col w-[50%] m-auto">
                <div className="p-5 w-[60%] m-auto flex flex-col gap-4 items-start ">
                    <p className="text-xl">Create an account</p>
                    {error?<div style={{color:"red",fontSize:"20px",fontFamily:"montserrat,sans-serif"}}>{error}</div>:null}
                    {msg?<div style={{color:"red",fontSize:"20px"}}>{msg}</div>:null}

                    <div className="flex flex-col gap-1 items-start w-[100%]">
                        <label className="text-lg " for="username">Username: </label>
                        <input type="text" className="border-2 rounded w-[100%] p-1" onChange={handleChange} name='name' required
                         placeholder="Enter Username"/>

                        <label className="text-lg " for="username">Email: </label>
                        <input type="email" className="border-2 rounded w-[100%] p-1" onChange={handleChange} name='email' required 
                        placeholder="Enter Username"/>

                        <label className="text-lg " for="username">Password: </label>
                        <input type="password" className="border-2 rounded w-[100%] p-1" onChange={handleChange} name='password' 
                         required placeholder="Enter Username"/>

                        <Button text = "Register" className="bg-blue-800 w-[100%] text-white rounded-xl p-2 mt-5" onClick={inputSubmit}/>
                        
                        <p className="">Already Account? 
                        <Link to={`/login`}>
                            <span className="text-blue-700 cursor-pointer underline">Sign-in</span>
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register;
