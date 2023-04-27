import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { BiChevronDown } from 'react-icons/bi';

const Skills = () => {
    const [open, setOpen] = useState(null);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        } else {
            setOpen(index);
        }
    };
    const accordionItems = [
        {
            title: "Frontend developer",
            experience: 'more then 4 years',
            skills: [
                'HTML', 'CSS', 'Javascript', 'React', 'Nextjs'
            ]
        },
        {
            title: "Backend developer",
            experience: 'more then 4 years',
            skills: [
                'Python', 'C++', 'NodeJs', 'Django', 'Flutter'
            ]
        },
        {
            title: "Backend developer",
            experience: 'more then 4 years',
            skills: [
                'Python', 'C++', 'NodeJs', 'Django', 'Flutter'
            ]
        },

    ];
    return (
        <div className=''>
            <h2 className='sectionHeader text-center'>Skills</h2>
            <p className='text-textColor text-center mt-3'>My technical skills</p>
            <div className='mt-12'>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {accordionItems?.map((item, index) => (
                        <li onMouseEnter={() => toggle(index)} key={index}>
                            <div className='bg-primary flex justify-between p-6 rounded-xl hover:rounded-3xl hover:shadow-xl duration-300'>
                                <div className='text-white'>
                                    <h3 className='text-xl'>{item.title}</h3>
                                    <p className=''>{item.experience}</p>
                                </div>
                                <div className='flex items-center'>
                                    <BiChevronDown className='text-white text-4xl' />
                                </div>

                            </div>
                            <Collapse isOpened={open === index}>
                                <div className='bg-primary p-6 rounded-xl shadow-xl mt-1'>
                                    {
                                        item.skills.map((skill, index) => <p key={index} className='text-white text-xl py-1'>{skill}</p>)
                                    }
                                </div>
                            </Collapse>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;