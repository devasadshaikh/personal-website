'use client'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Projects",
        link: "/projects"
    },

]
const Hamburger = () => {
    const [open, setOpen] = useState(false)
    const handleMenuButton = () => {
        setOpen((prevOpen) => !prevOpen);
    }
    return (
        <div className=' shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop:blur-md'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className=' flex items-center justify-between h-16'>
                    <div className='flex items-center '>
                        <Link href="/" className='text-white'>Navbar</Link>
                    </div>

                    {/* navLinks */}
                    <div className=' hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {
                                navLinks.map((item, i) => (
                                    <Link
                                        key={i}

                                        className=' transition-all duration-500 cursor-pointer text-gray-700 hover:bg-red-400 hover:px-3 hover:py-2 text-lg hover:text-white  rounded-md font-medium'
                                        href={item.link}>{item.title}</Link>
                                ))
                            }

                        </div>

                    </div>
                    {/* hamburger  button*/}
                    <div className='-mr-2 flex md:hidden'>
                        <button type='button' onClick={handleMenuButton}
                            className=' cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-red-400 hover:text-white bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                        >
                            <span className='sr-only'>Open Main Button</span>
                            {open == true ? <Menu /> : <X />}
                        </button>

                    </div>

                </div>

            </div>
            {/* mobile menu */}
            {open ?
                <div className=' md:hidden'>
                    <div className=' pb-3 space-y-3 sm:px-3'>
                        {
                            navLinks.map((item, i) => (
                                <Link
                                    key={i}
                                    className=' cursor-pointer text-gray-300 hover:bg-gray-200 hover:text-white px-3 py-2 rounded-md font-medium block text-base'
                                    href={item.link}>{item.title}</Link>
                            ))
                        }

                    </div>

                </div>
                : null}

        </div>
    )
}

export default Hamburger