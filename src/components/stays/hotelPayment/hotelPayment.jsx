import { useContext, useState } from "react";
import Button from "../../button/button";
import TopNavbar from "../../navbar/topNavbar";
import HotelCheck from "../hotelCheckout/hotelCheck";
import HotelDetails from "../hotelDetails/hotelDetails";
import HotelPriceDetails from "../hotelPriceDetals/hotelPriceDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../../contextApi/usercontextprovider";

function HotelPayment() {
    const location = useLocation();
    const {hotelId} = location.state;
    console.log(hotelId);
    const {startDate, endDate} = useContext(myContext);
    const[hotelItem,sethotelItem] = useState({});
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const hotelBook = async()=>{
        if(token)
        {
        try
        {
            const bagData = {
                bookingType:"hotel",
                bookingDetails:{
                hotelId:hotelId,
                startDate:startDate,
                endDate:endDate}
            }
            let res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/booking`,{
                method:"POST",
                headers : {projectID:'0eebeaycqywr' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
                body: JSON.stringify(bagData)
            });
            let data = await res.json();
            console.log("paceorder",data);
            sethotelItem(data);

            if(data.status=="success"){
                navigate("/ordersuccess");
            }
               
        }
        catch(error)
        {
            console.log(error);
        }
    }
    else
    {
        navigate('/login');
    }

    }
    return (
        <div>
            <TopNavbar />
            <div className="w-[80%] ml-40 flex gap-5">
                <div className="flex flex-col gap-3 ">
                    <HotelCheck/>
                    <HotelDetails />
                    <HotelPriceDetails />
                </div>


                <div className="mt-10 ">
                    <div className="flex border-2 items-center rounded-xl">
                        <div className="flex flex-col p-3">
                            <div className="font-bold text-lg text-left">No payment details required</div>
                            <div className="mt-5 text-left">Your payment will be handled by Hotel Seven Inn Near Delhi International Airport, so you don’t need to enter any payment details for this booking.</div>
                        </div>

                        <div className="flex">
                            <img src="https://cf.bstatic.com/static/img/book/bp-no-payment-last-minute/91d509cff564c4644361f56c4b4b00d1cc9b4609.png" alt="image" />
                        </div>
                    </div>


                    <div className="flex flex-col mt-5">
                        <div className="flex items-center gap-5 p-3">
                            <input type="checkbox"/>
                            <p className="font-normal text-left">I consent to receiving marketing emails from Booking.com, including promotions, rewards, travel experiences, and information about Booking.com’s products and services.</p>
                        </div>

                        <div className="flex items-center gap-5 p-3">
                            <input type="checkbox"/>
                            <p className="font-normal text-left">I consent to receiving marketing emails from Booking.com, including promotions, rewards, travel experiences, and information about Booking.com’s products and services.</p>
                        </div>
                    </div>


                    <div className="p-4 ">
                        <div className="text-left">Your booking is directly with Hotel Seven Inn Near Delhi International Airport and by completing this booking you agree to the booking conditions, general terms, and privacy policy.</div>
                    </div>


                    <div className="mt-4 flex justify-end rounded">
                        <Button text = "Complete Booking" className = "rounded-md bg-blue-700 p-3 pl-8 pr-8 text-white" onClick={hotelBook}/>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}


export default HotelPayment;