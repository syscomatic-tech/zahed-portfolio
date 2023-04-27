import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Hero from '@/components/Hero/Hero.jsx'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Qualification from '@/components/Qualification/Qualification'
import Services from '@/components/Services/Services'

const font = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`${font.className} bg-white`}>
      <div className='container flex flex-col gap-48'>
        <Navbar />
        <Hero />
        <About/>
        <Skills/>
        <Qualification/>
        <Services/>
      </div>
    </main>
  )
}
