import React from 'react'

function HotelPriceDetails() {
  return (
    <div className="border-2  p-3 rounded-xl">
            <h1>Your price summary</h1>

            <div className="w-full justify flex flex-col justify-between">
                <div className="flex justify-between mt-4">
                    <div>Original price</div>
                    <div>₹ 1,709.10</div>
                </div>


                <div className="flex justify-between mt-4">
                    <div className="w-[80%]">
                        <div className='text-left'>Early 2024 Deal</div>
                        <div className="w-[80%]">
                            <div className="text-sm text-left">This property is offering a discount on stays between January 1 and April 1, 2024</div>
                        </div>
                    </div>
                    <div>- ₹ 384.55</div>
                </div>


                <div className="flex justify-between mt-4">
                    <div className="w-[80%]">
                        <div className='text-left'>Genius Discount</div>
                        <div className="w-[80%]">
                            <div className="text-sm text-left">You’re getting a reduced rate because you’re a Genius member.</div>
                        </div>
                    </div>
                    <div>- ₹ 170.91</div>
                </div>
            </div>


            <div className="border-2 pt-10 p-3 bg-blue-200 pb-10 mt-4 flex justify-between">
                <h1>Price</h1>
                <h1>₹ 1,153.64</h1>
            </div>
        </div>
  )
}

export default HotelPriceDetails
