import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';
import { HiArrowRight } from 'react-icons/hi';
import { BsChevronLeft } from 'react-icons/bs';
import portfolio1 from '../../public/images/portfolio1.jpg'
import LinkButton from '../LinkButton/LinkButton';
import Carousel from "nuka-carousel"

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            img: portfolio1,
            title: 'Modern Website',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro autem minus sit reiciendis beatae quisquam reprehenderit, rerum esse temporibus maxime? Atque, odio natus? Nostrum corporis minus quis sed nihil.',
            url: '/'
        },
        {
            id: 1,
            img: portfolio1,
            title: 'Modern Website',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro autem minus sit reiciendis beatae quisquam reprehenderit, rerum esse temporibus maxime? Atque, odio natus? Nostrum corporis minus quis sed nihil.',
            url: '/'
        },
    ]
    return (
        <div id='portfolio'>
            <h2 className='sectionHeader text-center'>Portfolio</h2>
            <p className='text-textColor text-center py-2'>Most recent work</p>
            {/* carousel not completed */}
            <Carousel
                autoplay
                autoplayInterval={3000}
                wrapAround={true}
                speed={500}
                pauseOnHover
                className='mt-12 pb-12'
                renderCenterRightControls={
                    ({ nextSlide }) => (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7 text-gray-500 font-bold cursor-pointer hover:text-primary -mr-5"
                            onClick={nextSlide}
                            data-aos-delay={4000}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    )
                }
                renderCenterLeftControls={
                    ({ previousSlide }) => (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7 text-gray-500 font-bold cursor-pointer hover:text-primary -ml-5"
                            onClick={previousSlide}
                            data-aos-delay={4000}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    )
                } 
            >
                {
                    portfolioItems.map(item =>
                        <div key={item.id} className='flex justify-center p-5'>
                            <div className='flex gap-8 flex-col md:flex-row items-center'>
                                <Image src={item.img} width={400} height={200} className='rounded-md' alt=''/>
                                <div className='max-w-[400px]'>
                                    <h5 className='text-2xl font-medium text-black'>{item.title}</h5>
                                    <p className='text-textColor py-3'>{item.desc}</p>
                                    <LinkButton href={item.url} type={'primary'} className={'flex items-center gap-2 hover:gap-4 duration-300 w-max'}>Demo <HiArrowRight size={18} /></LinkButton>
                                </div>
                            </div>
                        </div>

                    )
                }
            </Carousel>
        </div>
    );
};

export default Portfolio;