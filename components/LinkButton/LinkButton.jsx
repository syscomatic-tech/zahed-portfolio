import Link from 'next/link';
import React from 'react'

const typeBasedClasses = (type) => {
    switch (type) {
        case 'primary':
            return 'px-5 py-3 bg-primary rounded-lg text-white flex items-center gap-2 hover:gap-4 duration-300'
        case 'secondary':
            return 'px-5 py-3 bg-white rounded-lg text-primary flex items-center gap-2 hover:gap-4 duration-300'
        case 'link':
            return 'text-primary'

        default:
            break;
    }
}
const LinkButton = ({ type, className, children, href}) => {
    
    return (
        <Link href={href} className={`${typeBasedClasses(type)} ${className} w-max`}>
            {children}
        </Link>
    )
}

export default LinkButton