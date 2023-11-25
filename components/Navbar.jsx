import React from 'react';
import styles from '@/styles'
import {HiMenuAlt3} from 'react-icons/hi';




function Navbar() {
  return (
  <>
    <div className='absolute w-full z-20' >
        <div className='flex justify-between items-center max-w-[1024px] mx-auto px-4 h-24 text-white'>
            <img className='w-24' src="L2.png" alt="" />
            <HiMenuAlt3 className='z-20 text-white cursor-pointer' size={25} />

            <ul className='flex gap-7 text-base items-center'>
                <li className=''>Home</li>
                <li className=''>Services</li>
                <li className=''>Clients</li>
                <li className=''>About</li>

                <li  className='bg-sky-500 px-5 py-2 rounded-br-lg rounded-tl-lg rounded'>
                    <button>
                        Contact Us
                    </button>
                </li>
            </ul>     
        </div>
    </div>
  </>
    
  )
}


export default Navbar