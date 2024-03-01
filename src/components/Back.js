import React, {useEffect} from 'react'
import Backphoto from '../images/background-gig.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Map from './Map';

const Back = () => {


  const redirectGform = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf1UNUwrftRNtjvkLFG-ChjNKrVn3YD4w7OkW7AMHQVAgBqiQ/viewform', '_blank'); 
  }

  return (

    <div className='form-container'>
         <img src= { Backphoto } />
         <div className='form-invite'>
           <p> Dengan segala hormatnya kami mempersilakan Tuan/Puan/Encik/Cik Untuk
            mengesahkan kehadiran di pautan di bawah.
           </p>
           <button onClick={redirectGform} className='btn btn-warning'>Pengesahan</button>
         </div>
    </div>
    //ssss
  )
}

export default Back