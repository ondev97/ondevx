import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Why from '@/components/Why'
import Technologies from '@/components/Technologies'
import OurServices from '@/components/OurServices'
import Footer from '@/components/Footer'
import OurProject from '@/components/OurProject'
import ContactUs from '@/components/ContactUs'

export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <Technologies/>
    <Why/>
    <OurServices/>
    <OurProject/>
    <ContactUs/>
    <Footer/>

  </>
  )
}
