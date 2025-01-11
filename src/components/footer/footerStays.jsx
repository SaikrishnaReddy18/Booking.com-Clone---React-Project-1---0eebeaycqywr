import React from 'react'
import './footerStays.css';
import FooterImage from './footerImage';
export default function FooterStays() 
{
  return (
    <div className='footerContainer'>
      <div className='topFooter'>
          <h2 className='text-white text-2xl'>Save time, save money!</h2>
          <h3 className='text-gray-400'>Sign up and we'll send the best deals to you</h3>
          <form className='myform'>
            <input type='email' className='emailInput' required placeholder='Your email address'/>
            <button type='button' className='subscribeBtn'>Subscribe</button>
          </form>
      </div>
      <div className='bottonFooter'>
        <section className='topSection'>
          <div className='propertyBtnConainer'>
            <button className="propertyBtn">List your property</button>
          </div>
          <div className='pList'>
            <p>Mobile version</p>
            <p>Your account</p>
            <p>Make changes to your booking online</p>
            <p>Customer Service help</p>
            <p>Become an affiliate</p>
            <p>Booking.com for Business</p>
            
          </div>
        </section>
        <section className='bottomSection'>
          <div className='ulHolder'>
          <ul className="footer-navigation-links-list">
            <li className="footer-navigation-link">
                Countries
            </li>
            <li className="footer-navigation-link">
                Regions
            </li>
            <li className="footer-navigation-link">
                Cities
            </li>
            <li className="footer-navigation-link">  
                Districts
            </li>
            <li className="footer-navigation-link"> 
                Airports
            </li>
            <li className="footer-navigation-link">
                Hotels
           </li>
            <li className="footer-navigation-link"> 
                Places of interest
           </li>
          </ul>
          <ul className="footer-navigation-links-list">
            <li className="footer-navigation-link">
                Homes
            </li>
            <li className="footer-navigation-link">
                Apartments
            </li>
            <li className="footer-navigation-link">
                Resorts
            </li>
            <li className="footer-navigation-link">  
                Villas
            </li>
            <li className="footer-navigation-link"> 
                Hostels
            </li>
            <li className="footer-navigation-link">
                B&Bs
           </li>
            <li className="footer-navigation-link"> 
                Guests
           </li>
          </ul>
          <ul className="footer-navigation-links-list">
            <li className="footer-navigation-link">
                Unique places to stay
            </li>
            <li className="footer-navigation-link">
                All Destinations
            </li>
            <li className="footer-navigation-link">
                All flight Destinations
            </li>
            <li className="footer-navigation-link">  
                All car hier locations
            </li>
            <li className="footer-navigation-link"> 
                Discover
            </li>
            <li className="footer-navigation-link">
                Discover monthly stays
           </li>
            <li className="footer-navigation-link"> 
                Unpacked: travel articles
           </li>
           <li className="footer-navigation-link"> 
                Seasonal and holiday deals
           </li>
           <li className="footer-navigation-link"> 
                Traveller review awards
           </li>
          </ul>
          <ul className="footer-navigation-links-list">
            <li className="footer-navigation-link">
                Car hire
            </li>
            <li className="footer-navigation-link">
                Flight finder
            </li>
            <li className="footer-navigation-link">
                Restaurent reservations
            </li>
            <li className="footer-navigation-link">  
                Booking.com for Aravel Agents
            </li>
          </ul>
          <ul className="footer-navigation-links-list">
            <li className="footer-navigation-link">
              Coronavirus (COVID-19) FAQs
            </li>
            <li className="footer-navigation-link">
              About Booking.com
            </li>
            <li className="footer-navigation-link">
              Customer Service help
            </li>
            <li className="footer-navigation-link">  
                Partner help
            </li>
            <li className="footer-navigation-link"> 
                Careers
            </li>
            <li className="footer-navigation-link">
              Sustainability
           </li>
            <li className="footer-navigation-link"> 
                Press center
           </li>
           <li className="footer-navigation-link"> 
              Safety resource centre
           </li>
           <li className="footer-navigation-link">
              Investor relations
           </li>
           <li className="footer-navigation-link">
              Terms and Conditions
           </li>
           <li className="footer-navigation-link">
              Partner dispute
           </li>
           <li className="footer-navigation-link">
              How we works
           </li>
           <li className="footer-navigation-link">
              Privacy & Cookie Statement
           </li>
           <li className="footer-navigation-link">
              MSA Statement
           </li>
           <li className="footer-navigation-link">
              Corporate contact
           </li>
           <li className="footer-navigation-link">
               Content guidelines and reporting
           </li>
          </ul>
          </div>
          <h3 className='extranet'>Extranet login</h3>
          <p className='copyrightPara'>Copyright © 1996–2024 Booking.com™. All rights reserved.</p>
          <p className='descPara'>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
         
          <FooterImage/>
          
        </section>
      </div>

    </div>
  )
}
