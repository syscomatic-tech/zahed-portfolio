import React from 'react';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navItems = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/#about' },
        { title: 'Skills', link: '/#skills' },
        { title: 'Services', link: '/#services' },
        { title: 'Portfolio', link: '/#portfolio' },
        { title: 'Customers', link: '/#customers' },
    ]

    return (
        <div className='bg-white shadow-md z-[9999] fixed w-full top-0'>
            <div className="flex justify-between items-center w-full py-5 z-[9999] container">
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <Link href={'/'} className='font-medium text-2xl text-textColor hover:text-primary duration-300'>Zahed Hasan</Link>
                    </div>
                    <div className='flex justify-center'>
                        <div className={`shadow-lg md:shadow-none bg-white rounded-b-2xl border-b-2 md:border-0 border-b-primary absolute md:static duration-300 flex left-0 w-full py-5 md:py-0 justify-center z-[999] ${open ? 'top-0' : 'top-[-340px]'}`}>
                            <div className={`flex md:flex-row flex-col items-center gap-5 md:gap-7 `}>
                                {
                                    navItems.map(item =>
                                        <Link href={item.link} key={item.title} scroll={false} className='text-textColor hover:text-primary hover:text-[1.06rem] duration-300'>{item.title}</Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer z-[9999] absolute right-4 md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open ? <h3 className=' text-textColor'><IoMdClose size='24px' /></h3> : <h3 className=' text-textColor'><CgMenu size='24px' /></h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;