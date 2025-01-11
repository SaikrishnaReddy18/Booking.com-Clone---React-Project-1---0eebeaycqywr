import React from 'react'

function FlightFeatures() {
  return (
    <div className='bg-gray-100 p-8 mt-10 mb-4 flex justify-center gap-[3rem] relative ml-[-21%] w-[142%] sm:ml-[-13%] sm:w-[115%] md:ml-[-8%] md:w-[110%] lg:ml-[-5%] lg:w-[107%]'>
            <section className='flex gap-2 w-[23%]'>
            <div>
                <img src='https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/MagnifyingGlassUsp.png'/>
            </div>
            <div>
                <p className='text-left font-semibold'>Search a huge selection</p>
                <p className='text-left text-[12px]'>Easily compare flights, airlines and 
                prices - all in one place</p>
            </div>
            </section>
            <section className='flex gap-2 w-[23%]'>
                <div>
                    <img src='https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/MoneyUsp.png'/>
                </div>
                <div>
                    <p className='text-left font-semibold'>Pay no hidden fees</p>
                    <p className='text-left text-[12px]'>Get a clear price breakdown, every step of the way</p>
                </div>
            </section>
            <section className='flex gap-2 w-[23%]'>
                <div>
                    <img src='https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/TicketsUsp.png'/>
                </div>
                <div>
                    <p className='text-left font-semibold'>Get more flexibility</p>
                    <p className='text-left text-[12px]'>Change your travel dates with the Flexible ticket option*</p>
                </div>
            </section>
        </div>
  )
}

export default FlightFeatures
