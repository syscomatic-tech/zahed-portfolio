import React from 'react';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navItems = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/' },
        { title: 'Skills', link: '/' },
        { title: 'Services', link: '/' },
        { title: 'Portfolio', link: '/' },
        { title: 'Customers', link: '/' },
    ]

    return (
        <div>
            <div className="flex justify-between items-center w-full py-5 z-[9999]">
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <Link href={'/'} className='font-medium'>Zahed Hasan</Link>
                    </div>
                    <div className='flex justify-center'>
                        <div className={`shadow-lg md:shadow-none bg-white rounded-b-2xl border-b-2 md:border-0 border-b-primary absolute py-5 md:static duration-300 flex left-0 w-full justify-center z-[999] ${open ? 'top-0' : 'top-[-340px]'}`}>
                            <nav className={`flex md:flex-row flex-col items-center gap-5 md:gap-7 mt-5 md:mt-0`}>
                                {
                                    navItems.map(item =>
                                        <Link href={item.link} className='text-textColor hover:text-primary duration-300'>{item.title}</Link>
                                    )
                                }
                            </nav>
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