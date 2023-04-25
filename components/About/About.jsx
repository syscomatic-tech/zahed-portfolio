import Image from 'next/image'
import React from 'react'
import AboutImg from '../../public/images/aboutImage.jpg'
import Button from '../Button/Button'

const About = () => {
    const aboutMe = [
        ['08+', 'Years experience'],
        ['20+', 'Completed projects'],
        ['5+', 'Companies worked'],
    ]
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>About</h2>
            <p className='text-center text-textColor mt-2'>My introduction</p>
            <div className='flex gap-7 md:gap-10 lg:gap-20 mt-20 justify-start items-center flex-col md:flex-row'>
                <div>
                    <Image width={500} height={400} src={AboutImg} />
                </div>
                <div>
                    <div className='max-w-[500px]'>

                    <p className=' text-textColor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem sint necessitatibus, tenetur consequatur nulla a ipsam. Illum, consectetur, ipsum fugit culpa, placeat sed iusto possimus dignissimos quasi vero dolorem.</p>
                    </div>
                    <div className='flex flex-wrap gap-8 mt-10'>
                        {
                            aboutMe.map(item =>
                                <div className='flex flex-col items-center text-center w-min'>
                                    <h5 className='text-2xl font-bold'>{item[0]}</h5>
                                    <p className='text-textColor'>{item[1]}</p>
                                </div>

                            )
                        }
                    </div>
                    <div className='mt-10'>
                        <Button type={'primary'} className={''}>Download CV</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About