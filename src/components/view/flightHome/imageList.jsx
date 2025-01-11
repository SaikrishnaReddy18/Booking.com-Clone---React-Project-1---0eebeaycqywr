import React, { useContext, useEffect, useState } from 'react'
import { Asia,Africa, MiddleEast,SouthAmerica,Europe,Oceania,NorthAmerica } from '../../../constant/constantData'
import { myContext } from '../../contextApi/usercontextprovider';
import { useNavigate } from 'react-router-dom';

function ImageList(props) {
    const arr = [Asia,NorthAmerica,Europe,SouthAmerica,Africa,Oceania,MiddleEast];
    const index = props.areaType.split("_")[1];
    const navigate = useNavigate();
    const {startDate,endDate,navSelector ,setNavSelector} = useContext(myContext);

    const handleClick = (sourceName,destName)=>{
      console.log(sourceName,destName);
      let updated = {...navSelector,source:sourceName,destination:destName};
      setNavSelector(updated);
      navigate('/flightsearch');
    }

  return (<div className='flex flex-wrap gap-10 gap-x-32 m-3 lg:justify-between cursor-pointer'>
         {arr[index].map((i)=>{
            return (<div className='flex flex-row gap-2' onClick={()=>{handleClick(i.source,i.destination)}}>
                <img src={i.img} className='rounded w-16 h-16'/>
                <section className='flex flex-col justify-center items-start'>
                  <h2 className='font-semibold text-sm'>
                    {i.source} to {i.destination}
                  </h2>
                  <p className='text-xs'>
                  {i.paragraph}
                  </p>
                </section>
              </div>)
         })}
         </div>
    
  )
}

export default ImageList
