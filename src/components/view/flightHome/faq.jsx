import React from 'react'

function FAQ() {
  return (
    <div className='my-8'>
      <h1 className='text-xl font-bold text-left'>Frequently asked questions</h1>
      <div className='flex flex-wrap gap-6 flex-row mt-4'>
        <div className='border rounded p-4 w-72 h-fit'>
            <p className='text-left font-semibold'>How do I find the cheapest flights on Booking.com?</p>
            <p className='text-left text-sm'>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors such as when you are booking and when you want to travel.</p>
        </div>
        <div className='border rounded p-4 w-72 h-fit'>
            <p className='text-left font-semibold'>Can I book one way flight tickets on Booking.com?</p>
            <p className='text-left text-sm'>Yes, you can book one way, round trip and multi city flights on our site.</p>
        </div>
        <div className='border rounded p-4 w-72 h-fit'>
            <p className='text-left font-semibold'>How far in advance can I book a flight?</p>
            <p className='text-left text-sm'>You can book a flight up to one year before your departure date.</p>
        </div>
        <div className='border rounded p-4 w-72 h-fit'>
            <p className='text-left font-semibold'>Do flights get cheaper closer to departure?</p>
            <p className='text-left text-sm'>Generally, flight prices are more likely to increase the closer you get to your flight date.</p>
        </div>
        <div className='border rounded p-4 w-72 h-fit'>
            <p className='text-left font-semibold'>What is a flexible ticket?</p>
            <p className='text-left text-sm'>A flexible ticket allows you to change your flight with the same airline company by only paying the fare and tax difference. It can only be used for one confirmed change. You are able to add the flexible ticket when booking your flight.</p>
        </div>
        <div className='border rounded p-4 w-72 h-fit'>
            <p className='text-left font-semibold'>Does Booking.com charge credit card fees?</p>
            <p className='text-left text-sm'>No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when you review your booking.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
