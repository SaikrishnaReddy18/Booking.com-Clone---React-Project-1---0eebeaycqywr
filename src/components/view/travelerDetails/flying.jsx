import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import TopNavbar from '../../navbar/topNavbar';
import { myContext } from '../../contextApi/usercontextprovider';

function Flying() {
    const navigate = useNavigate();
    const ticketPrice = JSON.parse(localStorage.getItem("singleFlightDetail")).ticketPrice;

    const [msg,setMsg] = useState("");
    const {startDate,endDate,childrenCount,adultCount,flexiblePrice,navSelector,userDetail,handleInput} = useContext(myContext);
    
    const handleBack = ()=>{
        navigate('/ticketType');
    }
    const handleNext = ()=>{
       
        if( userDetail.firstname==="" || userDetail.lastname==="" || userDetail.gender==="" || userDetail.email==="" || userDetail.phone==="")
        {
            setMsg("All fields must be required");
            setTimeout(() => {
                setMsg("");
            }, 5000);
        }   
        else
        {
            navigate('/checkout');
        }

    }
    const[open,setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setOpen(false)
    }
  return (
    <div>
        <TopNavbar/>
    <div className='bg-gray-100 p-4'>
      <div className='flex items-center justify-between w-[70%] m-auto md:w-[100%]'>
          <div className='rounded-full h-6 w-6 bg-[#006ce4]  text-neutral-50'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" >
            <path fill='white' d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z" />
            </svg>
          </div>
          <p className='text-sm font-semibold'>Ticket type</p>
          <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
          <div className='rounded-full h-6 w-6 bg-[#006ce4] text-white'>2</div>
          <p className='text-sm font-semibold'>Who's flying?</p>
          <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
          <div className='rounded-full h-6 w-6 border border-solid border-neutral-500 text-black'>3</div>
          <p className='text-sm font-semibold'>Check and pay</p>
          <div className='border-neutral-700 border-b-[2px] w-[19%] h-[1px]'></div>
      </div>
     
    </div>
    <div className='w-[75%] m-auto p-10 md:w-[100%]'>
      <p className='text-left my-4 text-sm'>One way · {childrenCount+adultCount} traveller · {startDate} - {endDate}</p>
      <h1 className='text-left my-4 font-bold text-2xl'>{navSelector.source} to {navSelector.destination}</h1>
      <p className='text-left my-4 font-semibold'>Who's flying?</p>
      {/* cards */}
      <div className='flex justify-between md:flex-col'>
          <div className='flex gap-4 flex-col w-[35%] md:w-[60%] md:py-6'>
              <div className='flex gap-3 border rounded justify-start items-center h-fit p-4 bg-white-500 shadow-lg shadow-gray-300/50 '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6'>
                    <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z" />
                </svg>
                <div className='flex flex-col cursor-pointer' onClick={openModal}>
                    <p className='font-bold text-left text-sm'>Add Details</p>
                    <p className='text-blue-400 text-sm'>Add details for this traveller</p>
                </div>
                <Modal open={open} onClose={closeModal} style={{margin:"0",padding:"0"}}>
                <h2 className='font-bold text-lg'>Adult {adultCount}</h2>
                <p className='text-sm'>Required*</p>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <label className='text-left'>
                            First names*
                            </label>
                            <input type='text' required name='firstname' onChange={handleInput} className='w-[95%] h-10 p-4  border rounded border-gray-700 focus:ring-blue-500 focus:outline-none'/>
                        
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-left'>
                            Last names*
                            </label>
                            <input type='text' required name='lastname' onChange={handleInput} className='w-[95%] h-10 p-4 border rounded border-gray-700 focus:ring-blue-500 focus:outline-none'/>
                    
                        </div>
                    
                    </div>
                    <div className='flex flex-col my-4'>
                        <label className='text-left'>
                        Gender specified on your travel document*
                        </label>
                        <input type='gender' required name='gender' onChange={handleInput} className='w-[98%] h-10 p-4 border rounded border-gray-700 focus:ring-blue-500 focus:outline-none'/>
                    
                    </div>
                    <div className='border-b border-gray-400 pt-2'></div>
                    <button className='bg-blue-500 text-white mt-4 ml-[87%] text-sm  p-2 rounded text-[14px] font-semibold' >Done</button>
                
                </form>
               </Modal>
              </div>
              <div className='flex flex-col w-[160%]'>
              {msg?<h1 className='text-red-600 font-bold text-xl underline'>{msg}</h1>:null}
                <p className='text-left my-4 font-bold text-xl'>Contact details</p>
                <span className='text-sm text-left'>* Required</span>
                <div className='border rounded p-4 flex flex-col gap-y-3'>
                    <div className='flex flex-col'>
                    <label className='text-left'>
                         Contact email*
                    </label>
                    <input type='email' name='email' onChange={handleInput} required className='w-[70%] h-10 p-4 border rounded border-gray-700 focus:ring-blue-500 focus:outline-none'/>
                
                    </div>
                    <div className='flex flex-col'>
                    <label className='text-left'>
                         Phone number*
                    </label>
                    <div className='flex gap-3 justify-start items-center relative'>
                                  
                        <img src='https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png' className='rounded-full w-8 h-8'/>
                        <span className='absolute top-2 left-12'>+91</span>
                        <input type='tel' name='phone' onChange={handleInput} required className='w-[61%] h-10 p-4 px-8 border rounded border-gray-700 focus:ring-blue-500 focus:outline-none'/>

                    </div>
                
                    </div>
                </div>
              </div>
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

export default Flying
