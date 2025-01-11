import { useEffect, useState } from "react";
import TopNavbar from "../navbar/topNavbar";



function OrderHistory(){

    const [data, setData]  = useState([]);
    const [toggleHotel,setToggleHotel] = useState(false);
    const [toggleFlight,setToggleFlight] = useState(false);
    const [count,setCount] = useState(0);
    const [val,setVal] = useState([])
  const token = localStorage.getItem("token");
    const fetchData = async ()=>{
        let data = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
            headers:{
                Authorization: `Bearer ${token}`,
                projectID:"0eebeaycqywr",
            }
        });

        let res = await data.json();

        setData(res?.data);
        setVal(res?.data);
    }

    useEffect(()=>{
        fetchData();
    },[]);


const handleClick = (str,value)=>{
    console.log(data);
    let filteredData
    if(value%2==0 && str=="HOTEL")
    {
        
        if(toggleHotel==false)
        {filteredData = val.filter((i)=>{
            return i.booking_type=="hotel";
        });
        console.log(filteredData);
        setData(filteredData);
    }
        else{
            setData(val);
        }
        setToggleHotel(true);
    }
    else if(value%2==1 && str=="FLIGHT")
    {
       
        if(toggleFlight==false)
        {
            filteredData = val.filter((i)=>{
            return i.booking_type=="flight";
        });
        console.log(filteredData);
        setData(filteredData)
    }
        else{
            setData(val);
        }
        setToggleFlight(true);
    }
    else
    {
        setData(data);
    }
}

    return(
        <div>
            <TopNavbar/>
            <div className="flex gap-2">
            <button onClick={()=>handleClick("HOTEL",0)}>
                Hotel
            </button>
            
            <button onClick={()=>handleClick("FLIGHT",1)}>
                Flight
            </button>
            </div>
            


           {
            data && data.map((val)=>{
                return(
                    <div style={{border:"2px solid"}} className="w-[50%] m-auto mt-10 pl-10 pt-4 pb-4 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <p><span>Type:</span><span style={{color:"red", textTransform:"uppercase"}}> {val.booking_type}</span></p>
                        <p>Created at: {val.created_at}</p>
                        <p>Start Date: {val.start_date}</p>
                        <p>End Date: {val.end_date}</p>
                        <p>Hotel Name: {val.hotel?.name}</p>
                        <p><span>Status:</span> <span className="text-red-800" style={{textTransform:"uppercase"}}>{val.status}</span></p>
                    </div>
                </div>
                )
            })
           }
        </div>
    )
}

export default OrderHistory;