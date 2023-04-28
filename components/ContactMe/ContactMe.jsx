import React from 'react';
import { MdCall } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import Button from '../Button/Button';

const ContactMe = () => {
    const contactItems = [
        {
            id: 1,
            icon: <IoCallOutline />,
            title: 'Call me',
            desc: '0000000000'
        },
        {
            id: 2,
            icon: <IoMailOutline />,
            title: 'Email',
            desc: 'example@gmail.com'
        },
        {
            id: 3,
            icon: <IoLocationOutline />,
            title: 'Location',
            desc: 'something'
        },
    ]
    return (
        <div id='contact'>
            <h2 className='sectionHeader text-center'>Contact Me</h2>
            <p className='text-textColor text-center py-2'>Get in touch</p>
            <div className='mt-12 flex justify-between flex-col-reverse md:flex-row gap-12'>
                <div className='flex flex-col gap-5 ml-4'>
                    {
                        contactItems.map(item =>
                            <div key={item.id} className='flex gap-4 items-start'>
                                <p className='text-primary text-3xl'>{item.icon}</p>
                                <div>
                                    <h5 className='text-2xl font-medium text-black'>{item.title}</h5>
                                    <p className='text-textColor py-1'>{item.desc}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <div className="md:w-full lg:w-[680px] px-3 flex flex-col gap-5">
                        <div className='flex gap-4 flex-col sm:flex-row'>
                            <input className="appearance-none w-full  bg-gray-200 text-textColor border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="grid-last-name" type="text" placeholder="Name" />
                            <input className="appearance-none w-full  bg-gray-200 text-textColor border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="grid-last-name" type="text" placeholder="Email" />
                        </div>
                        <div>
                            <input className="appearance-none w-full bg-gray-200 text-textColor border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="grid-last-name" type="text" placeholder="Project" />
                        </div>
                        <div>
                            <textarea rows={4} className="appearance-none w-full bg-gray-200 text-textColor border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="grid-last-name" type="text" placeholder="Message" />
                        </div>
                        <div>
                            <Button type={'primary'}>Send Message</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;