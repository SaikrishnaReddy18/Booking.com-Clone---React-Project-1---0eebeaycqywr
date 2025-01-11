import React, { useState } from 'react';
import { domestic, international, trendingCity } from '../../../constant/constantData';
import SimpleSlider from '../../slider/simpleSlider';
import ImageList from './imageList';
import FAQ from './faq';
import FlightFeatures from './flightFeatures';
import FooterFlight from '../../footer/footerFlight';
import TopNavbar from '../../navbar/topNavbar.jsx';
import TopNavbarOption from '../../navbar/topNavbarOption.jsx';
import FlightNavbar from '../../navbar/flightNavbar.jsx';

function FlightHome() {
    const [area,setArea] = useState(true);
    const [color,setColor] = useState(1);
    const handleColor =(val)=>{
        setColor(val);
    }
    const handleArea =(val)=>{
        setArea(val);
    }
  return (<>
    <div className="bg-[#003b95] h-[130px] relative lg:h-[120px]"> 
        <TopNavbar/>
        <div className="flex m-auto w-[71%] gap-[23px] lg:w-[100%]">
            
            <TopNavbarOption/>
        </div>
    </div>
    <FlightNavbar/>
    <div className="m-auto w-[70%] mt-4 lg:w-[96%]">
        <h1 className='font-bold text-xl text-left'>Popular flights near you</h1>
        <h4 className='text-left'>Find deals on domestic and international flights</h4>
        <div className='relative flex gap-2 justify-start items-start p-4 h-8'>
            <div>
                <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleColor(1)}} style={{color:color==1?"blue":"black"}}>International</p>
                
            </div>
            <div>
                <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleColor(2)}} style={{color:color==2?"blue":"black"}}>Domestic</p> 
                
            </div>
        </div>
        <div className='border-b-2 border-zinc-200 mt-[2rem]'></div>

        <SimpleSlider arrValue = {color==1?international:domestic}/>
        <div className='mt-16'>
            <h1 className='font-bold text-xl text-left'>Trending Cities</h1>
            <h4 className='text-left'>Book flights to a destination popular with travellers from India</h4>
            <SimpleSlider arrValue = {trendingCity}/>
        </div>
        
        <FlightFeatures/>
        <p className='text-left text-[12px]'>*Flexible plane tickets are available for an additional cost on selected airfares</p>
        <div className='mt-16'>
            <h1 className='font-bold text-xl text-left'>Fly worldwide with Booking.com</h1>
            <h4 className='text-left'>Flights from wherever you are to wherever you want to go</h4>
            <div className='relative flex gap-2 justify-start items-start p-4 h-8'>
            <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleArea(1)}} style={{color:area==1?"blue":"black"}}>Asia</p>
            <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleArea(2)}} style={{color:area==2?"blue":"black"}}>North America</p> 
            <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleArea(3)}} style={{color:area==3?"blue":"black"}}>Europe</p> 
            <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleArea(4)}} style={{color:area==4?"blue":"black"}}>South America</p> 
            <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleArea(5)}} style={{color:area==5?"blue":"black"}}>Africa</p> 
            <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleArea(6)}} style={{color:area==6?"blue":"black"}}>Oceania</p> 
            <p className='hover:bg-zinc-100 hover:cursor-pointer p-3' onClick={()=>{handleArea(7)}} style={{color:area==7?"blue":"black"}}>Middle East</p> 

            </div>
            <div className='border-b-2 border-zinc-200 mt-[2rem] sm:p-3'></div>
            {/* {color==1?<p className='w-[96px] h-[2px] absolute bg-blue-600 top-[8.2rem] left-[234px] lg:left-11 sm:left-7'></p>:
                <p className='w-[72px] h-[2px] absolute bg-blue-600 top-[8.2rem] left-[355px] lg:left-[168px] sm:left-[150px]'></p>} */}

            {/* <SimpleSlider arrValue = {color==1?international:domestic}/> */}
            <ImageList areaType={area==1?`Asia_${area-1}`:area==2?`North America_${area-1}`:area==3?`Europe_${area-1}`:area==4?`South America_${area-1}`:area==5?`Africa_${area-1}`:area==6?`Oceania_${area-1}`:`Middle East_${area-1}`}/>
            <FAQ/>
            
        </div>
    </div>
    <FooterFlight/>
    </>
  )
}

export default FlightHome
