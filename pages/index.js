import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Hero from '@/components/Hero/Hero.jsx'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Qualification from '@/components/Qualification/Qualification'
import Services from '@/components/Services/Services'
import Portfolio from '@/components/Portfolio/Portfolio'
import Testimonial from '@/components/Testimonial/Testimonial'
import ContactMe from '@/components/ContactMe/ContactMe'
import Footer from '@/components/Footer/Footer'
import ProjectInMind from '@/components/ProjectInMind/ProjectInMind'

const font = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})



export default function Home() {
  return (
    <main className={`${font.className} bg-white`}>
        <Navbar />
      <div className='container flex flex-col gap-20 lg:gap-32'>
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <ProjectInMind />
        <Testimonial />
        <ContactMe />
      </div>
      <Footer />
    </main>
  )
}
