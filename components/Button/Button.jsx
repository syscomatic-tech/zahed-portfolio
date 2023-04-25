import React from 'react'

const typeBasedClasses = (type) => {
    switch (type) {
        case 'primary':
            return 'px-5 py-3 bg-primary rounded-lg text-white'

        default:
            break;
    }
}
const Button = ({ type, className, children }) => {
    return (
        <button className={`${typeBasedClasses(type)}${className}`}>
            {children}
        </button>
    )
}

export default Button