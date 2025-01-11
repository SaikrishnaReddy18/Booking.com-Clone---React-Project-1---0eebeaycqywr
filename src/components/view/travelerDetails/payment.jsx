import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../button/button';
import TopNavbar from '../../navbar/topNavbar';
import { myContext } from '../../contextApi/usercontextprovider';

function Payment() {
    const navigate = useNavigate();
    const ticketPrice = JSON.parse(localStorage.getItem("singleFlightDetail")).ticketPrice;
    const {flexiblePrice,navSelector,userDetail,adultCount, childrenCount, startDate, endDate, economy} = useContext(myContext);
    
    const flightId = JSON.parse(localStorage.getItem("singleFlightDetail"))._id;
    console.log(flightId);

    const [bookFlight,setBookFlight] = useState({});
    const handleBack = ()=>{
        navigate('/flying')
    }
    const token = localStorage.getItem("token");
    const handleNext = async()=>{
      
      const data = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
        method:"POST",

        headers:{
        Authorization: `Bearer ${token}`,
          projectID:"0eebeaycqywr",
          "content-Type": "application/json",
        },

        body:JSON.stringify({
            bookingType : "flight",
            bookingDetails : {  
              "flightId" : flightId,
              "startDate" : "2024-03-07T00:00:00.000Z", 
              "endDate" : "2024-08-07T00:00:00.000Z",
            }
        })
      })

      const res = await data?.json();
      console.log(res);
    }


  return (
    <div>
      <TopNavbar/>
    <div className='bg-gray-100 p-8'>
    <div className='flex items-center justify-between w-[70%] m-auto md:w-[100%]'>
          <div className='rounded-full h-6 w-6 bg-[#006ce4]'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path fill='white' d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z" />
            </svg>
          </div>
          <p className='text-sm font-semibold'>Ticket type</p>
          <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
          <div className='rounded-full h-6 w-6 bg-[#006ce4]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" >
            <path fill='white' d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z" />
            </svg>
          </div>
          <p className='text-sm font-semibold'>Who's flying?</p>
          <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
          <div className='rounded-full h-6 w-6 bg-[#006ce4] text-white'>3</div>
          <p className='text-sm font-semibold'>Check and pay</p>
          <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
      </div>
    </div>  
    <div className='w-[75%] m-auto p-10 md:w-[100%]'>
      <p className='text-left my-4 text-sm'>Round trip · {adultCount+childrenCount} traveller · {startDate} - {endDate}</p>
      <h1 className='text-left my-4 font-bold text-2xl'>{navSelector.source} to {navSelector.destination}</h1>
      <p className='text-left my-2 font-semibold'>Check and pay</p>

      {/* cards */}
      <div className='flex justify-between md:flex-col'>
          <div className='flex gap-6 flex-col w-[62%] md:w-[100%] md:py-6'>
            <div>
                <section className='flex gap-6 border rounded p-4 items-center'>
                    <img src="https://r-xx.bstatic.com/data/airlines_logo/6E.png" alt="plane" width={"40px"} height={"20px"}/>
                    <p className='flex gap-2 flex-col'>
                        <span className='text-sm font-bold text-left'>{navSelector.source} to {navSelector.destination}</span>
                        <span className='text-sm text-left'>Sun 25 Feb · 21:00 - Sun 25 Feb · 23:05</span>
                        <span className='text-sm text-left'>Direct · 2h 05m · {economy}</span>
                    </p>
                    <div className='pl-20'>
                        <button className='text-blue-400 px-3 py-2 rounded hover:bg-blue-100'>View flight details</button>
                    </div>
                </section>
                {/* <section className='flex gap-6 border rounded p-4 items-center'>
                    <img src="https://r-xx.bstatic.com/data/airlines_logo/6E.png" alt="plane" width={"40px"} height={"20px"}/>
                    <p className='flex gap-2 flex-col'>
                        <span className='text-sm font-bold text-left'>{navSelector.source} to {navSelector.destination}</span>
                        <span className='text-sm text-left'>Sun 25 Feb · 21:00 - Sun 25 Feb · 23:05</span>
                        <span className='text-sm text-left'>Direct · 2h 05m · {economy}</span>
                    </p>
                    <div className='pl-20'>
                        <button className='text-blue-400 px-3 py-2 rounded hover:bg-blue-100'>View flight details</button>
                    </div>
                </section> */}
            </div>
            <div className='border rounded p-4'>
                <p className='text-sm font-bold py-2 text-left'>Contact details</p>
                <p className='text-sm text-left'>+91{userDetail.phone}</p>
                <p className='text-sm text-left'>{userDetail.email}</p>
            </div>
            <div className='border rounded p-4'>
                <p className='text-sm font-bold py-2 text-left'>Traveller details</p>
                <p className='text-sm text-left flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6'>
                    <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z" />
                </svg>
                <p className='flex flex-col gap-2'>
                    <span>{userDetail.firstname} {userDetail.lastname}</span>
                    <p className='text-sm text-left'>Adult . {userDetail.gender}</p>
                </p>  
                </p>
            </div>
            <div className='border rounded p-4'>
                <p className='font-bold text-xl text-left'>Baggage</p>
                <p className='text-left'>Total number of bags included for all travellers</p>
                <p className='font-bold text-left'>Flight to {navSelector.destination}</p>
                <section className="flex flex-col gap-y-2">
                <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-7'>
                        <path d="m 1.5 23.25 A 0.75 0.75 0 0 1 1 22 L 22 1 a 0.75 0.75 0 0 1 1 1 L 2 23 c -0.128 0.146 -0.307 0.235 -0.5 0.25 z m 17.77 -2.87 V 9.88 a 0.75 0.75 0 0 0 -1.5 0 v 10.5 c -0.005 0.41 -0.34 0.74 -0.75 0.74 H 7 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 10 a 2.24 2.24 0 0 0 2.25 -2.24 z M 15 12.62 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 c 0.14 0.005 0.25 0.12 0.25 0.26 V 15 H 12.5 c -0.412 0.005 -0.745 0.338 -0.75 0.75 c 0 0.316 0.2 0.597 0.5 0.7 v 0.3 a 0.75 0.75 0 0 0 1.5 0 V 16.5 h 1.5 v 1.88 c -0.005 0.134 -0.116 0.24 -0.25 0.24 H 9 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 6 c 0.963 0 1.744 -0.777 1.75 -1.74 v -4 c 0 -0.968 -0.782 -1.754 -1.75 -1.76 z M 16 5.1 c -0.085 0.407 -0.482 0.67 -0.89 0.59 C 14.896 5.646 14.678 5.623 14.46 5.62 h -5 C 7.68 5.647 6.25 7.099 6.25 8.88 v 6 a 0.75 0.75 0 0 1 -1.5 0 v -6 C 4.757 6.72 6.22 4.835 8.31 4.29 a 3.73 3.73 0 0 1 7.38 0 C 15.952 4.469 16.076 4.792 16 5.1 z m -6.15 -1 h 4.22 a 2.23 2.23 0 0 0 -4.22 0 z" />
                    </svg>

                      <span className="text-left text-[12px] p-2">No personal items included</span>
                        
                    </div>
                    <div className='flex gap-3 items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-8'>
                        <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                      </svg>
                      <p className='flex flex-col justify-start'>
                        <span className="text-left">1 cabin bag</span>
                        <span className='text-green-600 text-[14px] text-left'>included</span>
                        <span className='text-[12px]'>25 x 35 x 55 cm · Max weight 7 kg</span>
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-8'>
                        <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                      </svg>
                      <p className='flex flex-col justify-start'>
                        <span className="text-left">1 cabin bag</span>
                        <span className='text-green-600 text-[14px] text-left'>included</span>
                        <span className='text-[12px]'>25 x 35 x 55 cm · Max weight 7 kg</span>
                      </p>
                    </div>
                    
                  </section>
                  <p className='text-blue-400 text-sm text-left'>View baggage per traveller</p>
                  <p className='font-bold text-left'>Flight to {navSelector.source}</p>
                  <section className="flex flex-col gap-y-2">
                <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-7'>
                        <path d="m 1.5 23.25 A 0.75 0.75 0 0 1 1 22 L 22 1 a 0.75 0.75 0 0 1 1 1 L 2 23 c -0.128 0.146 -0.307 0.235 -0.5 0.25 z m 17.77 -2.87 V 9.88 a 0.75 0.75 0 0 0 -1.5 0 v 10.5 c -0.005 0.41 -0.34 0.74 -0.75 0.74 H 7 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 10 a 2.24 2.24 0 0 0 2.25 -2.24 z M 15 12.62 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 c 0.14 0.005 0.25 0.12 0.25 0.26 V 15 H 12.5 c -0.412 0.005 -0.745 0.338 -0.75 0.75 c 0 0.316 0.2 0.597 0.5 0.7 v 0.3 a 0.75 0.75 0 0 0 1.5 0 V 16.5 h 1.5 v 1.88 c -0.005 0.134 -0.116 0.24 -0.25 0.24 H 9 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 6 c 0.963 0 1.744 -0.777 1.75 -1.74 v -4 c 0 -0.968 -0.782 -1.754 -1.75 -1.76 z M 16 5.1 c -0.085 0.407 -0.482 0.67 -0.89 0.59 C 14.896 5.646 14.678 5.623 14.46 5.62 h -5 C 7.68 5.647 6.25 7.099 6.25 8.88 v 6 a 0.75 0.75 0 0 1 -1.5 0 v -6 C 4.757 6.72 6.22 4.835 8.31 4.29 a 3.73 3.73 0 0 1 7.38 0 C 15.952 4.469 16.076 4.792 16 5.1 z m -6.15 -1 h 4.22 a 2.23 2.23 0 0 0 -4.22 0 z" />
                    </svg>

                      <span className="text-left text-[12px] p-2">No personal items included</span>
                        
                    </div>
                    <div className='flex gap-3 items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-8'>
                        <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                      </svg>
                      <p className='flex flex-col justify-start'>
                        <span className="text-left">1 cabin bag</span>
                        <span className='text-green-600 text-[14px] text-left'>included</span>
                        <span className='text-[12px]'>25 x 35 x 55 cm · Max weight 7 kg</span>
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-8'>
                        <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                      </svg>
                      <p className='flex flex-col justify-start'>
                        <span className="text-left">1 cabin bag</span>
                        <span className='text-green-600 text-[14px] text-left'>included</span>
                        <span className='text-[12px]'>25 x 35 x 55 cm · Max weight 7 kg</span>
                      </p>
                    </div>
                    
                  </section>
                  <p className='text-blue-400 text-sm text-left'>View baggage per traveller</p>
                  <p className='text-[10px] text-left'>For more detailed baggage information and options, check airline baggage policies:</p>
            </div>
            <div className='rounded border p-4 pt-8 pb-5'>
                <p className='text-left font-bold' >Your payment</p>
                <p className='text-left'>Simple, safe and secure.</p>
                <p className='text-left text-sm font-bold mt-3'>How would you like to pay?</p>
                <div className='flex gap-2 p-1'>
                    <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg" alt="" className='w-8 h-8'/>
                    <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg" alt="" className='w-8 h-8'/>
                    <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg" alt="" className='w-8 h-8'/>
                    <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg" alt="" className='w-8 h-8'/>
                </div>
                <div className='flex flex-col gap-1 text-left p-2'>
                <label htmlFor='cardholder name' className='text-left text-sm font-bold'>Cardholder's Name*</label>
                <input type='text' required value="Purnima Dewangan" className='w-[95%] h-10 p-4  border rounded border-gray-700 focus:ring-blue-500 focus:outline-none'/>
                
                </div>
               <div className='flex flex-col pl-2'>
                <p className='flex gap-x-1'>
                  <label htmlFor='cardNumber' className='text-left text-sm font-bold'>Card Number*</label>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='w-4 h-4'>
                    <path d="M116 112H12c-6.627 0-12-5.373-12-12V28c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12zM12 24a4 4 0 0 0-4 4v72a4 4 0 0 0 4 4h104a4 4 0 0 0 4-4V28a4 4 0 0 0-4-4zm50.67 49.33a4 4 0 0 0-4-4h-36a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4zm-8 16a4 4 0 0 0-4-4h-28a4 4 0 0 0 0 8h28a4 4 0 0 0 4-4zm49.52-32.92h-23a5.88 5.88 0 0 1-6.09-5.63V38.55a5.88 5.88 0 0 1 6.09-5.63h23a5.88 5.88 0 0 1 6.09 5.63v12.23a5.88 5.88 0 0 1-6.09 5.63zm-21.14-8h19.23v-7.49H83.05zm21.14-7.49z" />
                  </svg>
                </p>
                  <input type='number' required 
                  className='w-[94%] h-10 p-4  border rounded border-gray-700 focus:ring-blue-500 focus:outline-none'/>

               </div>
               <div className='flex flex-row justify-between items-center mt-1 ml-[10px] w-[92%]'>
                  <div className="mb-4">
                    <label htmlFor="expiration" className="block font-bold mb-2 text-sm">
                      Expiration Date
                    </label>
                    <input  type="text" id="expiration"  className=" focus:outline-none rounded-sm border  w-1/2" placeholder="MM/YYYY"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="cvv" className="block font-bold mb-2 text-sm">
                      CVV
                    </label>
                    <input  type="text" id="cvv"  className="focus:outline-none rounded-sm border w-1/4" placeholder="CVV"/>
                  </div>
              </div>

            </div>
            <>
  {/* Hello world */}

</>

            <p>By clicking "pay now" you agree with the terms and conditions and privacy policies of Booking.com, Gotogate International AB, IndiGo and with the fare rules.</p>
          </div>
            {/* ticket price */}
            <div className='w-[35%] md:w-[100%] md:m-0'>  
                  <div className='flex justify-between'>
                      <span className='font-medium'>Ticket (1 adult)</span>
                      <span className='font-medium'>INR{ticketPrice}</span>
                  </div>
                  <div className='flex justify-between'>
                      <span>Flight fare</span>
                      <span>INR{ticketPrice-500}</span>
                  </div>
                  <div className='flex justify-between'>
                      <span>Taxes and charges</span>
                      <span>INR500</span>
                  </div>
                  {!flexiblePrice?
                  <div className='flex justify-between'>
                      <span>Flexible ticket</span>
                      <span>INR1000</span>
                  </div>:
                  null}  
                  <div className='flex justify-between my-4'>
                      <span className='font-bold text-xl'>Total</span>
                      <span className='font-bold text-xl'>{flexiblePrice?`INR${ticketPrice}`:`INR${ticketPrice+1000}`}</span>
                  </div>  
                  <p className='text-left'>Includes taxes and charges</p>
                  
                  <div className='flex justify-between items-center gap-20'>
                      <div className="flex items-center w-30">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='w-4 h-4'>
                              <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" />
                          </svg>
                          <p for="bordered-radio-1" className="w-full py-2 ms-2 text-sm text-gray-900 dark:text-gray-300 text-left">No need for flexibility - you're sure of your plans</p>
                      </div>
                  </div>
                  <section className='border border-slate-200 flex flex-row justify-between p-2 mt-6'>
                      <div>
                      <div className='flex flex-row gap-1 items-center'>
                      <span className='bg-blue-800 text-white text-sm py-[1px] px-2 text-[14px] font-semibold'>Genius</span>
                          <span className='text-[12px]'>Trip saving</span></div>
                      <p className='font-semibold'>Unlock Genius members-only deals</p>
                      <p className='text-[14px]'>Sign in to get 10% off or more on stays, plus other travel rewards.</p>
                      </div>
                      <div>
                      <img src='https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/GeniusGiftBoxDiscount.png' className='w-[65px] h-[65px]'/>
                      </div>
                  </section>
              </div>
        </div>
          {/* about button */}
          <div className='flex flex-row gap-4 p-6 w-[65%] justify-end'>    
              <button className='px-6 py-3 rounded hover:bg-blue-100 text-blue-400 flex' onClick={handleBack}>
                  <span className='text-blue-400'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6' data-rtl-flip="true">
                          <path d="M15.0871 19.2361C14.9677 19.2367 14.8495 19.2134 14.7392 19.1676C14.629 19.1219 14.5289 19.0546 14.4451 18.9696L8.38799 12.9125C8.26332 12.7891 8.16475 12.6418 8.09815 12.4795C8.03156 12.3172 7.99829 12.1431 8.00034 11.9676C7.99246 11.6171 8.12303 11.2776 8.36376 11.0227L14.4208 4.96566C14.5912 4.79552 14.8221 4.69995 15.0629 4.69995C15.3037 4.69995 15.5346 4.79552 15.7049 4.96566C15.7907 5.04918 15.8588 5.14902 15.9053 5.25929C15.9518 5.36957 15.9758 5.48803 15.9758 5.60771C15.9758 5.72739 15.9518 5.84586 15.9053 5.95613C15.8588 6.0664 15.7907 6.16624 15.7049 6.24976L10.0113 11.9676L15.7292 17.6855C15.8149 17.769 15.883 17.8689 15.9295 17.9792C15.976 18.0894 16 18.2079 16 18.3276C16 18.4473 15.976 18.5657 15.9295 18.676C15.883 18.7863 15.8149 18.8861 15.7292 18.9696C15.6457 19.0551 15.5458 19.1228 15.4354 19.1686C15.3251 19.2144 15.2066 19.2374 15.0871 19.2361Z" />
                      </svg>
                  </span>
                  <span>Back</span>
              </button>
              <Button text="Payment" className='px-12 py-3 rounded bg-blue-600 hover:bg-blue-800 text-white' onClick={handleNext} />
              {/* <button className='px-12 py-3 rounded bg-blue-600 hover:bg-blue-800 text-white' onClick={handleNext}>Next</button> */}
          </div>
    </div>
  </div>
  )
}

export default Payment
