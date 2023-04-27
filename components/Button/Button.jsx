import React from 'react'

const typeBasedClasses = (type) => {
    switch (type) {
        case 'primary':
            return 'px-5 py-3 bg-primary rounded-lg text-white'
        case 'link':
            return 'px-5 py-3 text-primary'

        default:
            break;
    }
}
const Button = ({ type, className, children, onClick }) => {
    return (
        <button onClick={onClick} className={`${typeBasedClasses(type)} ${className}`}>
            {children}
        </button>
    )
}

export default Button