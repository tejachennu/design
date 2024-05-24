import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

    const menuItems = [
        {
            title: 'Services',
            subMenu: [
                { title: 'Join Slack', href: '#' },
                { title: 'Browse Topics', href: '#' },
                { title: 'Random Item', href: '#' },
                { title: 'Experts', href: '#' }
            ]
        },
        {
            title: 'Products',
            subMenu: [
                { title: 'New Arrivals', href: '#' },
                { title: 'Best Sellers', href: '#' },
                { title: 'Discounts', href: '#' }
            ]
        },
        {
            title: 'About',
            href: '#'
        },
        {
            title: 'Contact',
            href: '#'
        },
        {
            title: 'Company',
            subMenu: [
                { title: 'About Us', href: '#' },
                { title: 'Careers', href: '#' },
                { title: 'Contact', href: '#' }
            ]
        },
        {
            title: 'Resources',
            subMenu: [
                { title: 'Blog', href: '#' },
                { title: 'Webinars', href: '#' },
                { title: 'Case Studies', href: '#' }
            ]
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (index) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };

    const handleMouseEnter = (index) => {
        if (window.innerWidth >= 1024) {
            setOpenSubMenuIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 1024) {
            setOpenSubMenuIndex(null);
        }
    };

    return (
        <header className="relative bg-white shadow lg:bg-transparent dark:bg-gray-800">
            <div className="absolute w-full py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-between px-6">
                    <a href="#">
                        <img className="w-auto h-8" src="Astrobot-logo.png" alt="Astrobot Logo" />
                    </a>
                    <div className="lg:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none" 
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center max-lg:mt-2 max-lg:bg-white  px-6 pb-2 pt-2`}>
                    <div className="lg:flex lg:items-center lg:space-x-6">
                        {menuItems.map((menuItem, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {menuItem.subMenu ? (
                                    <>
                                        <button 
                                            onClick={() => toggleSubMenu(index)}
                                            className="flex items-center h-full px-3 py-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-orange-500 focus:outline-none"
                                        >
                                            {menuItem.title}
                                            <svg 
                                                className="w-4 h-4 ml-1" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    d={`${openSubMenuIndex === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}`}
                                                />
                                            </svg>
                                        </button>
                                        <ul  className={`${openSubMenuIndex === index ? 'block' : 'hidden'} text-white lg:bg-white bg-opacity-75 max-lg:ml-[30px] lg:ml-[12px] lg:absolute top-10 w-40 left-0 z-10 lg:shadow-lg`}>
                                            {menuItem.subMenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <a 
                                                        href={subItem.href} 
                                                        className="block px-3 py-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:bg-orange-500"
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <a 
                                        href={menuItem.href}
                                        className="flex items-center h-full px-3 py-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 dark:text-gray-200 hover:text-orange-500"
                                    >
                                        {menuItem.title}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
                        <button className="px-4 py-2 text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-600">
                            Button
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;

