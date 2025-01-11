import React from 'react'
import TopNavbar from '../../navbar/topNavbar'

const FlightBooking = () => {
  return (<>
    <div className='relative'>
        <TopNavbar/>
        
      <img src='./images/flightImg.jpg' alt='Flight booking' className=' w-[100vw] h-[91vh]'/>
      <section className='bg-white fixed top-[55%] left-[30%] h-[30vh] flex flex-col gap-1 md:left-[10%]
      shadow-2xl items-center justify-center p-10 rounded px-40 md:px-32'>
        <img src='./images/successimages.png' alt='successimages' className='w-24 h-24'/>
        <p className=' text-[#30af3a] font-extrabold text-2xl'>Booking Successfull</p>
      </section>
    </div>
  </>
    
  )
}

export default FlightBooking
