import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faFaceAngry, faHamburger, faX } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faXTwitter,} from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <>
    <div className='w-Full bg-[#032254]'>

        <footer className= 'w-full max-w-[1024px] mx-auto mt-20 px-4  bg-slate-20'>
            <div className='pt-7 text-slate-50 justify-items-center grid sm:grid-cols-3 sm:justify-items-end'>
                <div className='' >
                    <div>
                    <img className='w-24 mb-7' src="L2.png" alt="" />
                    </div>
                    <div className='mb-7'>elit.Obcaecati eaquuptatem nulla ullam magnam minima! Iusto, </div>
                    <div className='sm:justify-start justify-center flex gap-7'>
                        <a href='www.facebook.com'><FontAwesomeIcon icon={faFacebook} className='w-[20px]'></FontAwesomeIcon></a>
                        <a href='x.com'><FontAwesomeIcon icon={faXTwitter} className='w-[20px]'></FontAwesomeIcon></a>
                        <a href='linkedin.com'><FontAwesomeIcon icon={faLinkedin} className='w-[20px]'></FontAwesomeIcon></a>
                        <a href='instagram.com'><FontAwesomeIcon icon={faInstagram} className='w-[20px]'></FontAwesomeIcon></a>                
           
                    </div>
                </div>
                <div className='text-center sm:text-start' >
                    <div className='mt-7 mb-7 text-[18px]'>Navigation</div>
                    <div className='list-none'>
                        <li className='mb-2'>Home</li>
                        <li className='mb-2'>Services</li>
                        <li className='mb-2'>Clients</li>
                        <li className='mb-2'>About</li>
                    </div>            
                </div>
                <div className='text-center sm:text-start' >
                    <div className='mt-7 mb-7 text-[18px]'>Contacts</div>
                    <div className='mb-2'>+94 123 456 456</div>
                    <div className='mb-2'>contact@ondevx.com</div>
                    <div className='mb-2'>contact@ondevx.com</div>
                </div>             
            
            </div>
            <div>
                <div className='grid sm:grid-cols-2 sm:justify-items-start justify-center text-center text-white mt-7 border-t-2 pt-7 pb-2'>
                    <div><a href=''>Copyright © 2023 ondevx. All Rights Reserved.</a></div>
                    <div><a href=''>User Terms & Conditions | Privacy Policy</a></div>
                </div>
            </div>

        </footer>
        
    </div>
    </>
    
  )
}

export default Footer