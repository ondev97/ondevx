import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Why from '@/components/Why'
import Technologies from '@/components/Technologies'
import Image from 'next/image'
import OurServices from '@/components/OurServices'
import Footer from '@/components/Footer'

export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <Technologies/>
    <Why/>
    <OurServices/>
    <Footer/>




  </>
  )
}
