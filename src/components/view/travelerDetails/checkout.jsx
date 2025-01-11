import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../../navbar/topNavbar";
import { myContext } from "../../contextApi/usercontextprovider";
const Checkout = ()=>{
    const ticketPrice = JSON.parse(localStorage.getItem("singleFlightDetail")).ticketPrice;

    const {flexiblePrice,navSelector,userDetail} = useContext(myContext);
    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate('/flying');
    }
    const handleNext = ()=>{
        navigate('/payment');
    }
    return(
        <div>
        <TopNavbar/>
        <div className='bg-gray-100 p-8'>
         
        </div>
        <div className='w-[75%] m-auto p-10 md:w-[100%]'>
          <p className='text-left my-4 text-sm'>Round trip · 1 traveller · Mon 26 Feb - Mon 4 Mar</p>
          <h1 className='text-left my-4 font-bold text-2xl'>{navSelector.source} to {navSelector.destination}</h1>
          <p className='text-left my-2 font-semibold'>Baggage Allowance</p>
          <p className='text-left mt-2 font-semibold'>{userDetail.firstname} {userDetail.lastname}</p>
          <p className='text-left text-sm'>On each flight</p>

          {/* cards */}
          <div className='flex justify-between md:flex-col'>
              <div className='flex gap-4 flex-col w-[35%] md:w-[60%] md:py-6'>
              <section className="flex flex-col gap-y-2">
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
                    <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 pl-1 sm:w-10 lg:w-8">
                        <path d="m 19.75 10 v 10.5 c 0 1.243 -1.007 2.25 -2.25 2.25 h -1.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 8 a 0.75 0.75 0 0 1 0 -1.5 h 9.5 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 V 10 a 0.75 0.75 0 0 1 1.5 0 z m -4 -8.77 V 4 C 15.745 4.412 15.412 4.745 15 4.75 H 6.5 C 6.088 4.755 5.755 5.088 5.75 5.5 V 15 a 0.75 0.75 0 0 1 -1.5 0 V 5.5 C 4.25 4.257 5.257 3.25 6.5 3.25 h 1.75 v -2 C 8.25 0.56 8.81 0 9.5 0 h 5 c 0.69 0 1.25 0.56 1.25 1.25 z m -1.5 2 V 1.5 h -4.5 v 1.75 z M 2 23 L 23 2 A 0.75 0.75 0 0 0 22 1 L 1 22 c -0.255 0.285 -0.255 0.715 0 1 c 0.285 0.255 0.715 0.255 1 0 z" />
                    </svg>

                      <span className="text-left text-[12px] p-2">No more baggage can be added right now - check with the airline after you book</span>
                        
                    </div>
                  </section>
                  
              </div>
                {/* ticket price */}
                <div className='w-[40%] md:w-[100%] md:m-0'>  
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
                  <button className='px-12 py-3 rounded bg-blue-600 hover:bg-blue-800 text-white' onClick={handleNext}>Next</button>
              </div>
        </div>
      </div>
    )
}
export default Checkout;

