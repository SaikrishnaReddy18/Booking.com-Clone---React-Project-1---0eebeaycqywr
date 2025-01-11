import React, { useState } from 'react'
import { useNavigate } from "react-router";
import Button from '../button/button';
import TopNavbar from '../navbar/topNavbar';
import { Link } from 'react-router-dom';


function Login(){

    const navigate = useNavigate();

    const  [loginData , setLoginData] = useState({
        email: '', 
        password: '',
        "appType" : "bookingportals"
     });
    
     const [errorMsg,setErrorMsg] = useState("");
    
    
     const handleChange = (e)=> {
      const updatedData = {...loginData};
      updatedData[e.target.name] = e.target.value;
      setLoginData(updatedData)
    }
    
      const handleContinue= async()=> {
        
        const options = {
            method: 'POST',
            headers : {projectID:'0eebeaycqywr' , 'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        }
        const res = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/login' ,options);
        
        const resJson = await res.json();
        
        if(resJson.status==="success")
        {
          localStorage.setItem('token' , resJson.token);
          localStorage.setItem('userName' , resJson.data.name);
          localStorage.setItem('email' , resJson.data.email);
    
          navigate('/');
        }
        else
        {
          setErrorMsg(resJson.message);
          setTimeout(()=>{
            setErrorMsg("");
          },2000);
          navigate('/login');
        }
    
      }
    
    return(
        <div>
                <TopNavbar/>

            <div className="text-center flex flex-col w-[50%] m-auto">
                <div className="p-5 w-[60%] m-auto flex flex-col gap-4 items-start ">
                    <p className="text-xl">Login Here</p>
                    {errorMsg?<p style={{color:"red", fontSize:'20px'}}>{errorMsg}</p>:null}
                    <div className="flex flex-col gap-1 items-start w-[100%]">
                       
                        <label className="text-lg " for="username">Email: </label>
                        <input className="border-2 rounded w-[100%] p-1" onChange={handleChange} name='email' type="email" placeholder="Enter Email"/>

                        <label className="text-lg " for="username">Password: </label>
                        <input className="border-2 rounded w-[100%] p-1" onChange={handleChange} name='password' type="password" placeholder="Enter Password"/>

                        <Button text = "Login" className="bg-blue-800 w-[100%] text-white rounded-xl p-2 mt-5" onClick={handleContinue}/>

                        <p className="">Don't have an Account? 
                            <Link to={`/register`}>
                                <span  className="text-blue-700 cursor-pointer underline">Register here</span>
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;

