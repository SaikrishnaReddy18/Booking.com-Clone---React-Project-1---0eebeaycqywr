import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../../navbar/topNavbar';
import { myContext } from '../../contextApi/usercontextprovider';

function TicketType() {
    const navigate = useNavigate();

    const {startDate,endDate,childrenCount,adultCount,flexiblePrice,setFlexiblePrice,
        navSelector} = useContext(myContext);

    const ticketPrice = JSON.parse(localStorage.getItem("singleFlightDetail")).ticketPrice;

    const handleBack = ()=>{
        navigate('/flightsearch');
    }
   
    const handleNext = () => {
        navigate("/flying");
      };
    
  return (
    <div>
      <TopNavbar/>
      <div className='bg-gray-100 p-4'>
        <div className='flex items-center justify-between w-[70%] m-auto  md:w-[100%]'>
            <div className='rounded-full h-6 w-6 bg-[#006ce4] text-white'>1</div>
            <p className='text-sm font-semibold'>Ticket type</p>
            <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
            <div className='rounded-full h-6 w-6 border border-solid border-neutral-500 text-black'>2</div>
            <p className='text-sm font-semibold'>Who's flying?</p>
            <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
            <div className='rounded-full h-6 w-6 border border-solid border-neutral-500 text-black'>3</div>
            <p className='text-sm font-semibold'>Check and pay</p>
            <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
        </div>
       
      </div>
      <div className='w-[75%] m-auto p-10  md:w-[100%]'>
        <p className='text-left my-4 text-sm'>One way · {childrenCount+adultCount} traveller · {startDate} - {endDate}</p>
        <h1 className='text-left my-4 font-bold text-2xl'>{navSelector.source}  to  {navSelector.destination}</h1>
        <p className='text-left my-4 font-semibold'>Select your ticket type</p>
        {/* cards */}
            <div className='flex gap-4 md:flex-col'>
                <div className='border-[2px] border-solid rounded w-[30%] p-4 h-fit md:w-[100%] md:m-0' style={{borderColor:flexiblePrice&&"#006ce4"}} onClick={()=>{setFlexiblePrice(!flexiblePrice)}}>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center w-30">
                            <input checked id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                            <label for="bordered-radio-1" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Standard ticket</label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'>
                            <path d="m 15.53 14.47 a 0.75 0.75 0 0 1 -1.06 1.06 L 12 13.06 l -2.47 2.47 A 0.75 0.75 0 0 1 8.47 14.47 L 10.94 12 L 8.47 9.53 A 0.75 0.75 0 0 1 9.53 8.47 L 12 10.94 l 2.47 -2.47 a 0.75 0.75 0 0 1 1.06 1.06 L 13.06 12 z M 23.78 13 l -2.25 -2.25 c -0.238 -0.233 -0.602 -0.278 -0.89 -0.11 h -0.05 c -0.044 0.02 -0.085 0.047 -0.12 0.08 L 18.22 13 a 0.75 0.75 0 0 0 1.06 1 l 0.89 -0.89 c -0.523 3.832 -3.645 6.783 -7.5 7.09 C 9.22 20.474 5.963 18.576 4.5 15.44 a 0.75 0.75 0 0 0 -1.385 0.576 L 3.14 16.07 c 1.595 3.459 5.051 5.678 8.86 5.69 c 0.26 0.015 0.52 0.015 0.78 0 c 4.7 -0.379 8.456 -4.067 8.92 -8.76 l 1 1 c 0.293 0.292 0.767 0.292 1.06 0 c 0.26 -0.28 0.269 -0.71 0.02 -1 z M 20.87 8 C 19.292 4.512 15.828 2.263 12 2.24 C 7.255 2.237 3.2 5.661 2.41 10.34 L 1.28 9.22 a 0.75 0.75 0 0 0 -1.06 1.06 l 2.25 2.25 c 0.07 0.068 0.15 0.122 0.24 0.16 C 2.801 12.73 2.9 12.75 3 12.75 c 0.09 0.002 0.178 -0.015 0.26 -0.05 C 3.35 12.662 3.43 12.608 3.5 12.54 l 2.25 -2.25 A 0.75 0.75 0 0 0 4.72 9.22 l -0.7 0.7 c 0.938 -3.648 4.233 -6.193 8 -6.18 c 3.227 0.004 6.156 1.886 7.5 4.82 a 0.75 0.75 0 0 0 1 0.37 c 0.368 -0.184 0.523 -0.627 0.35 -1 z" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center w-30 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='w-4 h-4'>
                            <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" />
                        </svg>
                            <p for="bordered-radio-1" className="w-full py-2 ms-2 text-sm text-gray-900 dark:text-gray-300">Cheapest Price</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center w-30 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4'>
                            <path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z" />
                        </svg>
                            <p for="bordered-radio-1" className="w-full py-2 ms-2 text-sm text-gray-900 dark:text-gray-300 text-left">No need for flexibility - you're sure of your plans</p>
                        </div>
                    </div>
                    <div className='pt-1 flex justify-between items-center border-t'>
                        <p className='text-sm'>Total price</p>
                        <p className='font-semibold'>INR{ticketPrice}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-[30%] md:w-[100%] md:m-0'>
                    <div className='border-[2px] border-solid rounded p-4 h-fit' style={{borderColor:!flexiblePrice&&"#006ce4"}} onClick={()=>{setFlexiblePrice(!flexiblePrice)}}>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center w-30">
                            {flexiblePrice?
                            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>:
                            <input checked id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                            }
                            <label for="bordered-radio-1" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flexible ticket</label>
                        </div>                                                                                                  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'>
                            <path d="M20.224 11.339A8.25 8.25 0 0 1 4.5 15.44a.75.75 0 0 0-1.364.624 9.75 9.75 0 0 0 18.583-4.848.75.75 0 1 0-1.495.122zm-16.474.66a8.25 8.25 0 0 1 15.751-3.44.75.75 0 1 0 1.364-.625 9.75 9.75 0 0 0-8.873-5.691C6.607 2.247 2.246 6.616 2.25 12a.75.75 0 0 0 1.5-.002zm20.03.97l-2.25-2.25a.75.75 0 0 0-1.06 0l-2.25 2.25a.75.75 0 1 0 1.06 1.061l2.25-2.25h-1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06zM.22 10.28l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06l-2.25 2.25h1.06L1.28 9.22a.75.75 0 0 0-1.06 1.06zm14.03-2.537l-4.95 6.6a.75.75 0 1 0 1.2.9l4.95-6.6a.75.75 0 1 0-1.2-.9zm-5.295 2.524l3.9 1.05-.446-.334 2.1 3.45a.75.75 0 1 0 1.282-.78l-2.1-3.45a.75.75 0 0 0-.446-.334l-3.9-1.05a.75.75 0 1 0-.39 1.448zm-.84 4.964l1.65.3-.536-.403.75 1.5a.75.75 0 1 0 1.342-.67l-.75-1.5a.75.75 0 0 0-.537-.403l-1.65-.3a.75.75 0 1 0-.268 1.476z" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center w-30 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='w-4 h-4'>
                            <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" />
                        </svg>
                            <p for="bordered-radio-1" className="w-full py-2 ms-2 text-sm text-left text-gray-900 dark:text-gray-300">Switch flights up to 24 hours before your departure time – with no penalties</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center w-30 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='w-4 h-4'>
                            <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" />
                        </svg>
                            <p for="bordered-radio-1" className="w-full text-left py-2 ms-2 text-sm  text-gray-900 dark:text-gray-300">Change your flight to another with the same airline for free, subject to availability</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-20'>
                        <div className="flex items-center w-30 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='w-4 h-4'>
                            <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z" />
                        </svg>
                            <p for="bordered-radio-1" className="w-full text-left py-2 ms-2 text-sm text-gray-900 dark:text-gray-300">Pay only the difference between the two if the new flight costs more than the original flight</p>
                        </div>
                    </div>
                    <div className='pt-1 flex justify-between items-center border-t'>
                        <p className='text-sm'>Total price</p>
                        <p className='font-semibold'>INR{ticketPrice+1000}</p>
                    </div>
                    </div>
                    <p className='text-[12px]'>Flexible tickets are only available when you book your flight. See Flexible ticket section for terms and conditions.</p>
                </div>
                {/* ticket price */}
                <div className='w-[35%] md:w-[100%] md:m-0 '>  
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
                        <span>INR1,000</span>
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

export default TicketType
