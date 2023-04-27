import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import { HiAcademicCap } from 'react-icons/hi';
import { BsPersonWorkspace } from 'react-icons/bs';
import { CgCalendarDates } from 'react-icons/cg';

const Qualification = () => {
    const educationItems = [
        {
            id: 1,
            title: 'Computer engineering',
            institute: 'Dhaka university',
            start: 2000,
            finished: 2003,
            flex: ''
        },
        {
            id: 2,
            title: 'Computer engineering',
            institute: 'Dhaka university',
            start: 2000,
            finished: 2003,
            flex: 'reverse'
        },
        {
            id: 3,
            title: 'Computer engineering',
            institute: 'Dhaka university',
            start: 2000,
            finished: 2003,
            flex: ''
        },
    ]
    const workItems = [
        {
            id: 1,
            title: 'Examplework',
            institute: 'Dhaka university',
            start: 2000,
            finished: 2003,
            flex: ''
        },
        {
            id: 2,
            title: 'Examplework',
            institute: 'Dhaka university',
            start: 2000,
            finished: 2003,
            flex: 'reverse'
        },
        {
            id: 3,
            title: 'Examplework',
            institute: 'Dhaka university',
            start: 2000,
            finished: 2003,
            flex: ''
        },
    ]
    return (
        <div>
            <h2 className='sectionHeader text-center'>Qualification</h2>
            <p className='text-textColor text-center mt-3'>My personal journey</p>
            <div className='ml-10 sm:ml-0'>
                <div className='mt-8 duration-300 flex w-full gap-10 sm:gap-12 md:gap-32 flex-col sm:flex-row justify-center'>
                    {/* education items */}
                    <div className={`flex flex-col items-start`}>
                        <p className={`flex items-start gap-2 my-6 text-2xl text-primary`}><HiAcademicCap size={33} />Education</p>

                        {
                            educationItems.map(item =>
                                <div key={item.id} className={`flex justify-center  relative`}>
                                    <div className='flex flex-col items-center justify-between'>
                                        <div className='flex flex-col items-center '>
                                            <div className='w-4 h-4 hover:scale-150 duration-300 rounded-full bg-primary' />
                                            {
                                                item.id !== educationItems.length && <div className='h-[100px] w-0.5 bg-primary' />
                                            }
                                        </div>

                                    </div>
                                    <div className='relative'>
                                        <div className={`flex flex-col gap-1.5 pb-5 pl-3 `}>
                                            <h5 className='text-xl font-medium leading-5'>{item.title}</h5>
                                            <p className='text-sm text-textColor'>{item.institute}</p>
                                            <p className='text-sm text-textColor flex gap-1'><CgCalendarDates size={17} />{item.start}-{item.finished}</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                    {/* work items */}
                    <div className={`flex-col items-start flex`}>
                        <p type='link' className={`flex items-start my-6 gap-2.5 text-2xl text-primary`}><BsPersonWorkspace size={23} />Work</p>

                        {
                            workItems.map(item =>
                                <div key={item.id} className={`flex justify-center relative`}>
                                    <div className=' flex flex-col items-center justify-between'>
                                        <div className='flex flex-col items-center '>
                                            <div className='w-4 h-4 hover:scale-150 duration-300 rounded-full bg-primary' />
                                            {
                                                item.id !== workItems.length && <div className='h-[100px] w-0.5 bg-primary' />
                                            }
                                        </div>

                                    </div>
                                    <div className='relative'>
                                        <div className={`flex flex-col gap-1.5 pb-5 pl-3`}>
                                            <h5 className='text-xl font-medium leading-5'>{item.title}</h5>
                                            <p className='text-sm text-textColor'>{item.institute}</p>
                                            <p className='text-sm text-textColor flex gap-1'><CgCalendarDates size={17} />{item.start}-{item.finished}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;