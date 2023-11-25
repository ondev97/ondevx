import React from 'react'
import styles from '@/styles'

function Why() {
  return (

    //Head Title
    <div className='w-full max-w-[1024px] mx-auto mt-20'>
        <div className='w-[500px] mx-auto'>
            <h1 className='text-center text-[40px] text-[#032254] font-bold'>Why Choose <span className='text-[#2DABE1]'>OndevX</span></h1>
            <p className='text-center text-[#5C636D]'>Lorem ipsum dolor sit amet consectetur. 
                Urna augue sed gravida nibh elementum fermentum at.
            </p>
        </div>
    
        <div className= 'w-full max-w-[1024px] mt-20 mx-auto flex justify-between'>
            <div className='w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px]'>

                <div className='flex gap-7 items-center m-[20px]'>
                    <img src="service.png" alt="" className='w-[40px]' />
                    <h3 className=''>Service1</h3>
                </div>
                <div className='mx-[20px] my-[40px]'>ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh</div>
            </div>

            <div className='w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px]'>

                <div className='flex gap-7 items-center m-[20px]'>
                    <img src="24.png" alt="" className='w-[40px]' />
                    <h3 className=''>Service2</h3>
                </div>
                <div className='mx-[20px] my-[40px]'>ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh</div>
            </div>

            <div className='w-[297px] h-[233px] shadow-lg shadow-indigo-500/50 bg-blue-100 rounded-[20px]'>

                <div className='flex gap-7 items-center m-[20px]'>
                    <img src="login.png" alt="" className='w-[40px]' />
                    <h3 className=''>Service3</h3>
                </div>
                <div className='mx-[20px] my-[40px]'>ghjkgdgh hjkghdjh hjkhdghjk hjkhjk hjh</div>
            </div>
            
        </div>

    
        <div className='mt-20 grid grid-cols-2 relative'>
        
            <div>
                <p>We work as a team to transform your idea into a virtual reality that makes your business a leading model on the internet. 
                    Further, our goal is to offer sustainability through the solutions 
                    we produce to fulfil any of the existing or future needs of our customers.
                </p>

                <div className='flex mt-10 gap-3'>
                    <div className=''>LEARN MORE</div>
                    <img src="arrow.png" alt="" />
                </div>
                
            </div>
            

            <div className='relative'>
                <img src="lady.png" alt=""className='z-1' />
                <div className='absolute top-[50%] left-[30%] w-[250px] h-[200px] bg-purple-700 blur-[110px]' ></div>
            </div>
            
                
            
            
            
            
        </div>

    </div>
  )
}

export default Why