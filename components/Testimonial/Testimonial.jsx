import React, { useEffect, useState } from 'react';
import testimonial1 from '../../public/images/testimonial1.jpg'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import Carousel from 'nuka-carousel'

const Testimonial = () => {
    const [screenWidth, setScreenWidth] = useState(null);
    const testimonial = [
        {
            id: 1,
            name: 'Safayat Hussain',
            img: testimonial1,
            star: <>
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
            </>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro cum officia voluptatem. Et consequatur odit repellat itaque alias illum.'
        },
        {
            id: 2,
            name: 'Safayat Hussain',
            img: testimonial1,
            star: <>
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
                <AiFillStar className='text-primary' />
            </>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro cum officia voluptatem. Et consequatur odit repellat itaque alias illum.'
        },
    ]
    useEffect(() => {
        if (typeof window !== "undefined") {
            setScreenWidth(window.innerWidth);
        }
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenWidth]);
    return (
        <div id='customers'>
            <h2 className='sectionHeader text-center'>Testimonial</h2>
            <p className='text-textColor text-center py-2'>My client saying</p>
            <Carousel
                className='mt-12'
                autoplay
                pauseOnHover
                autoplayInterval={3000}
                speed={500}
                slidesToShow={screenWidth > 1024 ? 2 : screenWidth > 720 ? 1 : 1}
                wrapAround={true}
                renderBottomCenterControls={false}
                renderCenterLeftControls={
                    ({ previousSlide }) => (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7 text-textColor -ml-5 font-bold cursor-pointer hover:text-primary"
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
                renderCenterRightControls={
                    ({ nextSlide }) => (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7 text-textColor -mr-5 font-bold cursor-pointer hover:text-primary"
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
            >
                {
                    testimonial.map(item =>
                        <div key={item.id} className='border border-primary rounded-xl hover:border-2  p-8 m-5'>
                            <div>
                                <div className='flex gap-4 flex-wrap'>
                                    <div>
                                        <Image width={50} height={50} src={item.img} className='rounded-full' alt=''/>
                                    </div>
                                    <div>
                                        <h6 className='text-xl font-medium text-black'>{item.name}</h6>
                                        <p className='text-textColor'>Client</p>
                                    </div>
                                    <div className='text-xl flex justify-end h-full items-start ml-0 sm:ml-auto'>
                                        {item.star}
                                    </div>
                                </div>
                                <div>
                                    <p className='text-textColor py-4'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Testimonial;