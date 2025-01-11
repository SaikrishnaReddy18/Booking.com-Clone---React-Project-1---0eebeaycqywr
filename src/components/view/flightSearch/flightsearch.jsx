import React, { useContext, useEffect, useState } from 'react'
import './flightsearch.css';
import FlightDetail from './flightDetail';
import { FlightCodeArray, airLines, arrives,departs } from '../../../constant/constantData';
import FooterFlight from '../../footer/footerFlight';
import ResponsivePagination from 'react-responsive-pagination';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-responsive-pagination/themes/classic.css';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';
import FlightNavbar from '../../navbar/flightNavbar';
import TopNavbarOption from '../../navbar/topNavbarOption';
import TopNavbar from '../../navbar/topNavbar';
import { myContext } from '../../contextApi/usercontextprovider';

function Flightsearch() {

  // const location = useLocation();
  // const { economy} = location.state || {};
  const{navSelector} = useContext(myContext);

  const [showMore, setShowMore] = useState(false);
  const [flightDetails, setFlightDetails] = useState([]);
  const [error, setError] = useState("");


  const [selectedOption,setSelectedOption] = useState("");
  const [departure,setdeparture] = useState("");
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 10;

 const getFlightDetail = async()=>{
  try{ 
      let sourceCode =  FlightCodeArray.find((codeVal)=>{ 
        return codeVal.city.toUpperCase()===navSelector.source.toUpperCase();
        });
        let destinationCode =  FlightCodeArray.find((codeVal)=>{ 
          return codeVal.city.toUpperCase()===navSelector.destination.toUpperCase();
          });
      axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":${JSON.stringify(sourceCode.code)},"destination":${JSON.stringify(destinationCode.code)}}&day=Mon&limit=10&page=${currentPage}`,{ 
      headers:{projectId:"0eebeaycqywr"}
      })
        .then(res => {
          setFlightDetails(res?.data?.data?.flights);
        })
      }  catch(error) {
        setError(error);
            }
}
 

  const handleSelect = (id,value)=>{
    let updated = [...flightDetails];
    
     if(value==="Best") // high to low
    {
      updated.sort((a,b)=>{
        return b.ticketPrice-a.ticketPrice;
      });
    }
    else if(value==="Cheapest") // low to high
    {
      updated.sort((a,b)=>{
        return a.ticketPrice-b.ticketPrice;
      });
    }
    else{
      updated.sort((a,b)=>{
        return a.duration-b.duration;
      });
    }
    setFlightDetails(updated);
    setSelectedOption(id);
  }
  const handleClick = (id)=>{
    setdeparture(id);
  }

  useEffect(()=>{
    getFlightDetail();
  },[currentPage]);
  return (<>
  {error&&<h2>{error}</h2>}
  <div className="bg-[#003b95] h-[130px] relative lg:h-[120px]"> 
        <TopNavbar/>
        <div className="flex m-auto w-[71%] gap-[23px] lg:w-[100%]">
            
            <TopNavbarOption/>
        </div>
    </div>
    <FlightNavbar/>
    <div className='flex flex-row justify-center gap-2 p-4 md:justify-evenly sm:flex-col sm:justify-center'>
      <div className='w-[30%] sm:w-[100%]'>
        <section className='text-left'>
          <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-white'>Filters</h2>
          <p className='pl-2'>Showing 780 results</p>
        </section>
        <section className='mt-2'>
          <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-white'>Stops</h2>
            <div className="flex items-center px-2">
              <input id="list-radio-license" defaultChecked type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"/>
              <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-left text-gray-900 dark:text-gray-300">Any</label>
              <span>756</span>
            </div>
            <p className='text-left pl-2 mt-[-15px] text-gray-500 cursor-pointer'>From INR70,957.66</p>
            
            <div className="flex items-center px-2">
              <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"/>
              <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-left text-gray-900 dark:text-gray-300">1 stop max </label>
              <span>987</span>
            </div>
            <p className='text-left pl-2 mt-[-15px] text-gray-500 cursor-pointer'>From INR97,351.00</p>

        </section>
        <section className='mt-2'>
        <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-white'>Airlines</h2>
        
        {/* andesha */}
         <h6>
          {showMore ? 
          airLines.map((i,index)=>{
          return(<div className="flex items-center px-2 h-6" key={index}>
          <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"/>
          <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{i.airlineName}</label>
          <span>{i.count}</span>
        </div>)
        }) : 
          airLines.slice(0,5).map((i,index)=>{
            return(<div className="flex items-center px-2 h-6" key={index}>
            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"/>
            <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{i.airlineName}</label>
            <span>{i.count}</span>
          </div>)
          })}
        
          <div className='flex flex-row items-center justify-center px-2' onClick={()=>{setShowMore(!showMore)}}>
          <span type="button" className="py-1 px-2 mb-2 text-sm font-medium text-blue-900 cursor-pointer">
          {showMore ? "Show less" : "Show more"}</span>
          <span className="transition group-open:rotate-180 cursor-pointer text-blue-900">
            <svg fill="none" height="14" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
          </div>
        </h6>
        </section>
        
        <section className='mt-2'>
          <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-white'>Flight times</h2>
          <p className='flex justify-around border-b border-stone-300 p-4'>
            <span onClick={()=>{handleClick(1)}} className={1==departure?"changeClass":"prevClass"}>Outbound flight</span>
            <span onClick={()=>{handleClick(2)}} className={2==departure?"changeClass":"prevClass"}>Return flight</span>

          </p>
          <div>
            
          <h4 className='p-2 text-left'>Departs from {navSelector.source}</h4>
          <h6>
            { 
            departs.map((i,index)=>{
            return(<div className="flex items-center px-2 h-6" key={index}>
            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"/>
            <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{i.departTime}</label>
            <span>{i.count}</span>
          </div>)
          }) }
          </h6>

          <h4 className='p-2 text-left'>Arrives at {navSelector.destination}</h4>
          <h6>
            { 
            arrives.map((i,index)=>{
            return(<div className="flex items-center px-2 h-6" key={index}>
            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"/>
            <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{i.departTime}</label>
            <span>{i.count}</span>
          </div>)
          })}
          </h6>
          </div>
        
        </section>
        {/* hjhjghjgjhgj */}
        <section className='mt-2'>
        <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-white'>Duration</h2>
        
        <h4 className='p-2 text-left'>Maximum travel time</h4>
        <section className='text-left'>
          <p>49 hour</p>
          <input type='range' min="0" max="100" className='text-left w-[100%]'/>
        </section>
        
        </section>
      </div>
      <div className='w-[50%] flex flex-col gap-2 sm:w-[100%]'>
        <div className='flex flex-row justify-around items-center p-4 border border-slate-200'>
          <span onClick={()=>{handleSelect(1,"Best")}} className={1==selectedOption?"changeClass":"prevClass"} >Best
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
          </span>
          <span onClick={()=>{handleSelect(2,"Cheapest")}} className={2==selectedOption?"changeClass":"prevClass"} >Cheapest</span>
          <span onClick={()=>{handleSelect(3,"Fastest")}} className={3==selectedOption?"changeClass":"prevClass"}>Fastest</span>
        </div>
        
        {flightDetails?.map((i)=>{
          return <FlightDetail singleObj = {i}/>
        })}
        
        <div className='p-4 border border-gray-200 md:py-2 md:px-4' >
          
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        
      </div>
    </div>
    <FooterFlight/>
    </>
  )
}

export default Flightsearch


// images
// https://r-xx.bstatic.com/data/airlines_logo/AI.png

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m 15 12.75 H 9 C 8.036 12.755 7.255 13.536 7.25 14.5 v 4 c 0.005 0.964 0.786 1.745 1.75 1.75 h 6 c 0.964 -0.005 1.745 -0.786 1.75 -1.75 v -4 C 16.745 13.536 15.964 12.755 15 12.75 z m -6 1.5 h 6 c 0.138 0 0.25 0.112 0.25 0.25 v 0.62 h -6.5 V 14.5 c 0 -0.138 0.112 -0.25 0.25 -0.25 z m 6 4.5 H 9 c -0.138 0 -0.25 -0.112 -0.25 -0.25 v -1.88 h 3.5 v 0.26 a 0.75 0.75 0 0 0 1.5 0 v -0.26 h 1.5 v 1.88 c 0 0.138 -0.112 0.25 -0.25 0.25 z M 15.69 4.42 a 3.73 3.73 0 0 0 -7.38 0 C 6.219 4.958 4.755 6.84 4.75 9 v 11.5 c 0 1.243 1.007 2.25 2.25 2.25 h 10 c 1.243 0 2.25 -1.007 2.25 -2.25 V 9 C 19.245 6.84 17.781 4.958 15.69 4.42 z M 12 2.75 c 0.95 0.002 1.796 0.603 2.11 1.5 H 9.89 C 10.204 3.353 11.05 2.752 12 2.75 z m 5.75 17.75 c -0.005 0.412 -0.338 0.745 -0.75 0.75 H 7 C 6.588 21.245 6.255 20.912 6.25 20.5 V 9 C 6.255 7.207 7.707 5.755 9.5 5.75 h 5 c 1.793 0.005 3.245 1.457 3.25 3.25 z"></path></svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path></svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m 15 9.25 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 13 C 15.745 12.588 15.412 12.255 15 12.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 0 4.5 C 15.745 17.088 15.412 16.755 15 16.75 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 4 -12 v 15 c 0 1.243 -1.007 2.25 -2.25 2.25 h -1.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 6.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -15 C 4.25 4.257 5.257 3.25 6.5 3.25 h 1.75 v -2 C 8.25 0.56 8.81 0 9.5 0 h 5 c 0.69 0 1.25 0.56 1.25 1.25 v 2 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -10 -2.25 h 4.5 V 1.5 h -4.5 z m 8.5 2.25 C 18.245 5.088 17.912 4.755 17.5 4.75 h -11 C 6.088 4.755 5.755 5.088 5.75 5.5 v 15 c 0.005 0.412 0.338 0.745 0.75 0.75 h 11 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path></svg> */}
// https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/FlightsSearch.png
// https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/GeniusGiftBoxDiscount.png
// https://r-xx.bstatic.com/data/airlines_logo/6E.png
// https://r-xx.bstatic.com/data/airlines_logo/HY.png