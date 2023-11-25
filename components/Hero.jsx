import React from 'react'
import styles from '@/styles'

function Hero() {
  return (
  <>
    <div>
        <img src="hero.jpg" alt="" 
        className='w-full h-screen top-0 left-0 object-cover bg-cover' />
        <div className='absolute top-0 left-0 w-full h-screen hero-gradient'></div>

        <div className='max-w-[1024px] mx-auto px-4 '>
            <div className='absolute top-[40%] w-full max-w-[800px] flex flex-col'>
            <h3 className='md:text-[20px] text-[16px] text-white'>Welcome to <span className='text-[#2DABE1]'>OndevX</span> Technologies</h3>
            <h1 className='font-bold text-[36px] md:text-[48px] text-white'>Let’s Create an Outstanding Product</h1>
            <h3 className='text-white md:text-[16px] text-[14px] '>LEARN MORE</h3>

            </div>
            

        </div>
    </div>
    





  </>
  )
}

export default Hero