import React from 'react'
import Navbar from '../../navbar/navbar';

import { destinationDetails } from '../../../constant/constantData'
import FooterStays from '../../footer/footerStays';
import TrendingDest from './trendingDest';
import DestinationArea from './destinationArea';
import Offers from './offers';

function StayHome() {
  return (
    <div>
        <Navbar/>
        <Offers/>
        <TrendingDest/>
        <DestinationArea  DestDetails={destinationDetails}/>
        <FooterStays/> 
    </div>
  )
}

export default StayHome









