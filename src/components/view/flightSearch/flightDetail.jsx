import React, { useContext, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../../contextApi/usercontextprovider';
import { FlightCodeArray } from '../../../constant/constantData';
import Button from '../../button/button';

function FlightDetail({singleObj}) {
  const {startDate,endDate,economy,navSelector} = useContext(myContext); 
  const navigate = useNavigate();
  const[open,setOpen] = useState(false);
  const openModal = () => {
    setOpen(true); 
  };
  const closeModal = () => {
    setOpen(false);
  };
//   let DestinationCity = FlightCodeArray.find((codeVal)=>{ 
//     if(codeVal.code===singleObj.destination){
//      return codeVal;
//     }
//  });
 
  const handleSelect = ()=>{
    let obj = JSON.parse(localStorage.getItem("singleFlightDetail"))||{};
   
    obj = Object.assign(obj,singleObj);
    localStorage.setItem("singleFlightDetail",JSON.stringify(obj));
    console.log("obj ",obj);
    navigate('/ticketType')
  }
  return (
    <div className='flex flex-row border border-slate-200 mt-6 gap-2 justify-center items-center'>
          <div className='border-r-[1px] border-slate-200 w-[78%]'>
            <section className='flex flex-row justify-around items-center pt-2'>
              <img src='https://r-xx.bstatic.com/data/airlines_logo/AI.png' className='h-9'/>
              <div>
                
                  <p className='text-sm'>{singleObj.arrivalTime} </p>
                  <p className='text-[10px]'>{singleObj.source} .2 Feb</p>
              </div>
              <div className='relative'>
                <span className='text-sm md:text-[8px]'>{singleObj.duration} h 0 min</span>
                <hr className='border border-gray-500 w-[100%]'/>
                
                <div className='flex justify-center'>
                  <i className="fa-solid fa-circle absolute w-[6px] h-[6px] top-[22px] bg-[#9a9a96] rounded-[50%]"></i>
                </div>
                <p className='text-sm md:text-[8px]'>{singleObj.stops}</p>
              </div>
              <div>
                <p className='text-sm'>{singleObj.departureTime}</p>
                <p className='text-[10px]'>{singleObj.destination} .2 Feb</p>
              </div>
            </section>
            <p className='text-sm text-left pl-2'>Indigo, Air India</p>
            {/* <section className='flex flex-row justify-around items-center pt-2 mt-1'>
              <img src='https://r-xx.bstatic.com/data/airlines_logo/AI.png' className='w-9 h-9'/>
              <div>
                <p className='text-sm'>7.55</p>
                <p className='text-[10px]'>BHO .2 Feb</p>
            </div>
            <div className='relative'>
              <span className='text-sm md:text-[8px]'>13 h 40 min</span>
              <hr className='border border-gray-500 w-[100%]'/>
              <div className='flex justify-between'>
                <i className="fa-solid fa-circle absolute w-[6px] h-[6px] left-[20%] top-[22px] bg-[#9a9a96] rounded-[50%]"></i>
                <i className="fa-solid fa-circle absolute w-[6px] h-[6px] top-[22px] bg-[#9a9a96] rounded-[50%]"></i>

              </div>
              <p className='text-sm md:text-[8px]'>2 Stops</p>
            </div>
            <div>
              <p className='text-sm'>6.55</p>
              <p className='text-[10px]'>LGW .2 Feb</p>
            </div>
            </section>
            <p className='text-sm text-left pl-2'>Indigo, Air India</p> */}
          </div>
          <div className='flex flex-col p-2'>
            <section className='flex flex-row-reverse items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                <path d="m 15 12.75 H 9 C 8.036 12.755 7.255 13.536 7.25 14.5 v 4 c 0.005 0.964 0.786 1.745 1.75 1.75 h 6 c 0.964 -0.005 1.745 -0.786 1.75 -1.75 v -4 C 16.745 13.536 15.964 12.755 15 12.75 z m -6 1.5 h 6 c 0.138 0 0.25 0.112 0.25 0.25 v 0.62 h -6.5 V 14.5 c 0 -0.138 0.112 -0.25 0.25 -0.25 z m 6 4.5 H 9 c -0.138 0 -0.25 -0.112 -0.25 -0.25 v -1.88 h 3.5 v 0.26 a 0.75 0.75 0 0 0 1.5 0 v -0.26 h 1.5 v 1.88 c 0 0.138 -0.112 0.25 -0.25 0.25 z M 15.69 4.42 a 3.73 3.73 0 0 0 -7.38 0 C 6.219 4.958 4.755 6.84 4.75 9 v 11.5 c 0 1.243 1.007 2.25 2.25 2.25 h 10 c 1.243 0 2.25 -1.007 2.25 -2.25 V 9 C 19.245 6.84 17.781 4.958 15.69 4.42 z M 12 2.75 c 0.95 0.002 1.796 0.603 2.11 1.5 H 9.89 C 10.204 3.353 11.05 2.752 12 2.75 z m 5.75 17.75 c -0.005 0.412 -0.338 0.745 -0.75 0.75 H 7 C 6.588 21.245 6.255 20.912 6.25 20.5 V 9 C 6.255 7.207 7.707 5.755 9.5 5.75 h 5 c 1.793 0.005 3.245 1.457 3.25 3.25 z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                <path d="m 15 9.25 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 13 C 15.745 12.588 15.412 12.255 15 12.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 0 4.5 C 15.745 17.088 15.412 16.755 15 16.75 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 4 -12 v 15 c 0 1.243 -1.007 2.25 -2.25 2.25 h -1.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 6.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -15 C 4.25 4.257 5.257 3.25 6.5 3.25 h 1.75 v -2 C 8.25 0.56 8.81 0 9.5 0 h 5 c 0.69 0 1.25 0.56 1.25 1.25 v 2 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -10 -2.25 h 4.5 V 1.5 h -4.5 z m 8.5 2.25 C 18.245 5.088 17.912 4.755 17.5 4.75 h -11 C 6.088 4.755 5.755 5.088 5.75 5.5 v 15 c 0.005 0.412 0.338 0.745 0.75 0.75 h 11 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
              </svg>
            </section>
            <p className='text-[10px] text-right'>Included:personal item, cabin bag, checked bag</p>
            <h1 className='text-right font-bold'>INR{singleObj.ticketPrice}</h1>
            <p className='text-right text-[10px]'>Total price for all travellers</p>
            <button type="button" className="py-2.5 px-5 me-2 my-2 text-sm font-medium text-gray-900 focus:outline-none
             bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4
              focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
               dark:hover:text-white dark:hover:bg-gray-700" onClick={openModal}>View details</button>
            <div className='mt-[0.8rem]'>
              <Modal open={open} onClose={closeModal} style={{margin:"0",padding:"0"}}>
                <h2 className='my-3 font-bold text-lg'>Your flight to {FlightCodeArray.find((codeVal)=>{ 
                    if(codeVal.code===singleObj.destination){
                    return codeVal;
                    }
                }).city}</h2>
                <p className='py-4 px-2 border border-gray-200 text-sm text-green-600'>7% lower CO2e emissions than the average of all flights we offer for this route</p>
                <div>
                <p>Flight to {FlightCodeArray.find((codeVal)=>{ 
                    if(codeVal.code===singleObj.destination){
                    return codeVal;
                    }
                }).city}</p>
                <p className='text-sm'>{singleObj.stops} · {singleObj.duration}h 0m</p>
                  <div className='flex gap-[40%] flex-row my-3'>
                    <section>
                      <p className='text-sm'>{startDate} · {singleObj.arrivalTime}</p>
                      <h2 className='font-bold m'>{singleObj.source} · {navSelector.source}</h2>
                      <p className='text-sm mt-1'>{startDate} · {singleObj.departureTime}</p>
                      <h2 className='font-bold'>{singleObj.destination} · {navSelector.destination}</h2>
                    </section>
                    <section className='flex gap-2'>
                      <img src="https://r-xx.bstatic.com/data/airlines_logo/6E.png" alt="plane" width={"20px"} height={"10px"}/>
                      <p className='flex gap-2 flex-col'>
                        <span className='text-sm'>IndiGo</span>
                        <span className='text-sm'>6E826 · {economy}</span>
                        <span className='text-sm'>Flight time {singleObj.duration}</span>
                      </p>
                    </section>
                  </div>
                  <section className='flex gap-2 justify-start items-center my-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4 '>
                      <path d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75zm1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0zm-1.28.53l4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06z" />
                    </svg>
                    <p>Layover 2h 50m</p>
                    </section>
                </div>
                {/* <div className='border-b border-gray-200'>
                <p>Flight to Dubai</p>
                <p className='text-sm'>1 stop · 8h 05m</p>
                  <div className='flex gap-[40%] flex-row my-3'>
                    <section>
                      <p className='text-sm'>Wed 14 Feb · 10:45</p>
                      <h2 className='font-bold m'>BHO · Bhopal</h2>
                      <p className='text-sm mt-1'>Wed 14 Feb · 12:30</p>
                      <h2 className='font-bold'>BOM · Mumbai</h2>
                    </section>
                    <section className='flex gap-2'>
                      <img src="https://r-xx.bstatic.com/data/airlines_logo/6E.png" alt="plane" width={"20px"} height={"10px"}/>
                      <p className='flex gap-2 flex-col'>
                        <span className='text-sm'>IndiGo</span>
                        <span className='text-sm'>6E826 · Economy</span>
                        <span className='text-sm'>Flight time 1h 45m</span>
                      </p>
                    </section>
                  </div>
                  <section className='flex gap-2 justify-start items-center my-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4 '>
                      <path d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75zm1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0zm-1.28.53l4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06z" />
                    </svg>
                    <p>Layover 2h 50m</p>
                    </section>
                </div> */}
                <div className='flex gap-6 mt-2'>
                  <section>
                    <h2 className='font-medium'>Included baggage</h2>
                    <span className='text-sm'>The total baggage included in the price</span>
                  </section>
                  <section className='h-[6.75rem] w-[1px] border-slate-200 bg-[#dbdada]' ></section>
                  <section>
                    <div className='flex gap-1 justify-between'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                        <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                      </svg>
                      <p className='flex flex-col'>
                        <span>1 cabin bag</span>
                        <span className='text-[12px]'>25 x 35 x 55 cm · Max weight 7 kg</span>
                      </p>
                      <span className='text-green-600 text-[14px]'>included</span>
                    </div>
                    <div className='flex gap-1 justify-between'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                        <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                      </svg>
                      <p className='flex flex-col'>
                        <span>1 cabin bag</span>
                        <span className='text-[12px]'>25 x 35 x 55 cm · Max weight 7 kg</span>
                      </p>
                      <span className='text-green-600 text-[14px]'>included</span>
                    </div>
                  </section>
                  
                </div>
                <section className='border border-slate-200 flex flex-row justify-between p-2 mt-2'>
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
                <section className='border-b border-gray-200 mt-2' ></section>
                <div className='flex justify-between mt-4'>
                  <div>
                    <div className='flex gap-1 items-center'>
                      <p className='font-bold'>INR{singleObj.ticketPrice}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4 '>
                        <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z" />
                      </svg>
                    </div>
                    <p className='text-sm'>Total price for all travellers</p>
                  </div>
                  <Button onClick={handleSelect} text="Select" 
                  className='bg-sky-500 hover:bg-sky-600 cursor-pointer rounded-md text-white p-2 px-3 text-sm font-semibold'/>
                {/* <button className='bg-sky-500 hover:bg-sky-600 cursor-pointer rounded-md text-white p-2 px-3 text-sm font-semibold' 
                onClick={handleSelect}>Select</button> */}
                </div>
              </Modal>
            </div>
          </div>
        </div>
  )
}

export default FlightDetail
