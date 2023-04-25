import Link from 'next/link'
import React from 'react'
import { GrLinkedinOption } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import { TbBrandFiverr } from 'react-icons/tb';

const Sidebar = () => {
  const items = [
    {icon: <GrLinkedinOption/> , link: '/'},
    {icon: <ImGithub/> , link: '/'},
    {icon: <TbBrandFiverr/> , link: '/'},
  ]
  return (
    <div className='absolute left-0 flex flex-col gap-8'>
      {
        items.map(item => <Link target='_blank' href={item.link} className='text-3xl text-primary hover:scale-125 duration-300'>{item.icon}</Link>)
      }
      
    </div>
  )
}

export default Sidebar