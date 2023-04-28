import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { ImGithub, ImLinkedin } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='bg-primary mt-20'>
            <div className='container py-20'>
                <div className='flex justify-between flex-wrap gap-4'>
                    <div className='-mt-2'>
                        <h3 className='text-3xl text-white font-bold'>Zahed Hasan</h3>
                        <p className='text-white py-1'>Backend developer</p>
                    </div>
                    <div className='flex gap-3 md:gap-8 flex-col sm:flex-row'>
                        <Link href={'/#services'} className='text-white hover:text-[1.1rem] duration-300'>Services</Link>
                        <Link href={'/#portfolio'} className='text-white hover:text-[1.1rem] duration-300'>Portfolio</Link>
                        <Link href={'/#contact'} className='text-white hover:text-[1.1rem] duration-300'>Contact me</Link>
                    </div>
                    <div className='flex gap-3'>
                        <Link href={''} className='text-white text-2xl hover:text-3xl duration-300'><FaFacebook /></Link>
                        <Link href={''} className='text-white text-2xl hover:text-3xl duration-300'><ImLinkedin /></Link>
                        <Link href={''} className='text-white text-2xl hover:text-3xl duration-300'><ImGithub /></Link>
                    </div>

                </div>
            </div>
            <div className='text-center py-3 text-white text-sm'>
                <p>©Zahed Hasan. All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;