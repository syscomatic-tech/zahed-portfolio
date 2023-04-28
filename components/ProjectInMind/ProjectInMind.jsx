import React from 'react'
import Button from '../Button/Button';
import Image from 'next/image';
import picture from '../../public/images/heroImage.png'
import LinkButton from '../LinkButton/LinkButton';
import { HiArrowRight } from 'react-icons/hi';

const ProjectInMind = () => {
    return (
        <div>
            <div className='bg-primary flex gap-12 flex-col sm:flex-row rounded-xl max-w-[1200px] mx-auto'>
                <div className='max-w-[700px] w-full sm:w-2/3 md:w-1/2 p-8 md:p-12'>
                    <h5 className='text-2xl text-white font-medium'>You have a new project</h5>
                    <p className='text-white my-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aliquam aperiam perspiciatis expedita placeat quae provident quas unde, sed ab!</p>
                    <LinkButton href={'/#contact'} type={'secondary'} className={'flex items-center gap-1 mt-10'}>Contact Me<HiArrowRight/></LinkButton>
                </div>
                <div className='flex items-end justify-end'>
                    <Image width={300} height={300} src={picture} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default ProjectInMind;