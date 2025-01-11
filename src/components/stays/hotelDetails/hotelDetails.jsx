import React, { useContext } from 'react'
import { myContext } from '../../contextApi/usercontextprovider';

function HotelDetails(){
    const {startDate,endDate} = useContext(myContext);
    return(
        <div className="border-2 p-3 flex flex-col gap-2 rounded-xl">
            <h1 className="text-xl">Your booking details</h1 >

            <div className="w-full flex justify-between p-3">
                <div>
                    <p className='text-left'>Check-in</p>
                    <h2 className='text-left'>{startDate}</h2>
                    <p className='text-left'>From 2:00 PM</p>
                </div>

                <div>
                    <p className='text-left'>Check-in</p>
                    <h2 className='text-left'>{endDate}</h2>
                    <p className='text-left'>From 4:00 PM</p>
                </div>
            </div>

            <div>
                <p className="font-normal text-left pl-2">Total length of stay:</p>
                <h3 className="font-bold text-left pl-2">1 night</h3>
            </div>
        </div>
    )
}


export default HotelDetails;
