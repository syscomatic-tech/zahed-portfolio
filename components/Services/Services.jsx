import React from 'react';
import Button from '../Button/Button';
import { MdOutlineDesignServices } from 'react-icons/md';
import { HiArrowRight } from 'react-icons/hi';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <MdOutlineDesignServices />,
            title: 'UI/UX Designer',
            modalId: 'UiUxModal',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quos ipsa! Facilis voluptatum ipsum aliquid laboriosam eos adipisci assumenda repellat.'
        },
        {
            id: 2,
            icon: <MdOutlineDesignServices />,
            title: 'Frontend Engenieer',
            modalId: 'frontendModal',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quos ipsa! Facilis voluptatum ipsum aliquid laboriosam eos adipisci assumenda repellat.'
        },
        {
            id: 3,
            icon: <MdOutlineDesignServices />,
            title: 'Backend Engenieer',
            modalId: 'backendModal',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quos ipsa! Facilis voluptatum ipsum aliquid laboriosam eos adipisci assumenda repellat.'
        },
    ]
    return (
        <div id='services'>
            <h2 className='sectionHeader text-center'>Services</h2>
            <p className='text-textColor text-center py-3'>What i offer</p>
            <div className='mt-12 flex flex-wrap justify-center gap-5'>
                {
                    services.map(service =>
                        <div key={service.id} className='bg-white py-10 w-80 border-2 rounded-2xl border-gray-200 hover:border-primary duration-300'>
                            <p className='text-4xl text-primary pl-7'>{service.icon}</p>
                            <h5 className='text-xl py-5 pl-7 text-black'>{service.title}</h5>
                            <label htmlFor={service.modalId} type={'link'} className={'flex items-center hover:gap-4 gap-1 pl-7 duration-300 cursor-pointer text-primary'}>
                                See more <HiArrowRight size={18} />
                            </label>
                            {/*  */}

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id={service.modalId} className="modal-toggle" />
                            <label htmlFor={service.modalId} className="modal cursor-pointer ">
                                <label className="modal-box relative bg-white py-10 px-8" htmlFor="">
                                    <h3 className="text-2xl text-primary">{service.title}</h3>
                                    <p className="py-4 text-textColor">{service.desc}</p>
                                </label>
                            </label>
                            {/*  */}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;