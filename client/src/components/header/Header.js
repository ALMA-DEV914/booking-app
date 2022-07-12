import React from 'react';
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed,  faCar, faHome, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='header'>
      <div className='headerContainer'>
      <div className='headerList'>
          <div className='listItem active'>
              <FontAwesomeIcon icon={faBed}/>
              <span>Stays</span>
              </div>
              <div className='listItem'>
              <FontAwesomeIcon icon={faPlane}/>
              <span>Flights</span>
              </div>
              <div className='listItem'>
              <FontAwesomeIcon icon={faCar}/>
              <span>car rentals</span>
              </div>
              <div className='listItem'>
              <FontAwesomeIcon icon={faHome}/>
              <span>Attractions</span>
              </div>
              <div className='listItem'>
              <FontAwesomeIcon icon={faTaxi}/>
              <span>Airport taxis</span>
          </div>
      </div>
      <h1 className='headerTitle'>A lifetime of discount? Grab the offer!</h1>
      <p className='header-text'>Get rewards for your travels - unlock instant savings of 10% or more with a free AlmitaBooking account</p>
      <button className='headerBtn'>Sing in / Register</button>
      </div>
    </div>
  )
}

export default Header
