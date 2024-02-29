import React from 'react'
import Backphoto from '../images/background-gig.png'

const Map = () => {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.0205753305495!2d101.77588627496982!3d2.8101090971667855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdc71f31995219%3A0x8a8b9c5bacfba796!2sSharifah%20Kohijrah%20Wedding%20%26%20Event%20Hall!5e0!3m2!1sen!2smy!4v1709093810918!5m2!1sen!2smy";

  return (

    <div className='form-container'>
        <img src= { Backphoto } />
        <div className='form-invite'>
            <p> Pautan Google Map Lokasi Majlis</p>
                <iframe
                src={mapSrc}
                width="200"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anwar & Azreena wedding"
            ></iframe>
        </div>
    </div>

      
  )
}

export default Map