import React from 'react'




function Clients() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <div className='w-3/4 m-auto'>
        <div className='mt-20'>
            {data.map((d,index) => (
                <div key={index} className='bg-white h-[450px] text-black rounded-xl'>
                    <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                        <img src={d.img} alt='' className='h-44 w-44 rounded-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                        <p className='text-xl font-semibold'>{d.name}</p>
                        <p>{d.review}</p>
                        <button className=' bg-indigo-500  text-white tex-lg px-6 py-1 rounded-xl'>Read More</button>

                    </div>
                </div>
            ))}

        </div>

    </div>
    </>
  )
}

export default Clients

const data = [
    {
        name: `John Doe`,
        img: `hero.jpg`,
        review: `lorem gfuj hui uhu hujh hi `
    },
    {
        name: `John Doe`,
        img: `lady.png`,
        review: `lorem gfuj hui uhu hujh hi `
    },
    {
        name: `John Doe`,
        img: `hero.jpg`,
        review: `lorem gfuj hui uhu hujh hi `
    }

    
]