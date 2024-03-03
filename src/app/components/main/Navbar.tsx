'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Social } from '../../../../constants'
import { Menu, X } from 'lucide-react';

const navLinks = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Skills",
        link: "/Skills"
    },
    {
        title: "My Projects",
        link: "/Projects"
    },
    {
        title: "Contact Us",
        link: "/Contact"
    },

]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleMenuButton = () => {
        setOpen((prevOpen) => !prevOpen);
    }
    return (
        <div className=' w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop:blur-md z-50 px-5 md:px-10 '>
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">

                <h1 className="cursor-pointer  font-bold   text-gray-300">Asad Ali</h1>

                <div className=' hidden md:contents '>
                    <div className="w-[500px] h-full flex  flex-row items-center justify-between">
                        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                            {
                                navLinks.map((item, i) => (
                                    <Link
                                        key={i}

                                        href={item.link}>{item.title}</Link>
                                ))
                            }
                            {/* <Link href="/" className="cursor-pointer">
                                Home
                            </Link>
                            <Link href="/about-me" className="cursor-pointer">
                                About me
                            </Link>
                            <Link href="/Skills" className="cursor-pointer">
                                Skills
                            </Link>
                            <Link href="/projects" className="cursor-pointer">
                                Projects
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className=' hidden md:contents'>
                    <div className="flex flex-row gap-x-5 cursor-pointer">
                        {
                            Social.map((social, i) => {
                                return (
                                    <Image
                                        key={i}
                                        src={social.src}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        onClick={() => window.open(social.link)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                {/* hamburger  button*/}
                <div className='-mr-2 flex md:hidden'>
                    <button type='button' onClick={handleMenuButton}
                        className=' cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-200 border border-[#7042f88b]'
                    >
                        <span className='sr-only'>Open Main Button</span>
                        {open == true ? <X /> : <Menu />}
                    </button>

                </div>


            </div>

            {/* mobile menu */}
            {open ?
                <div className=' md:hidden mt-5'>
                    <div className=' shadow-lg shadow-[#2A0E61]/50 backdrop:blur-md  w-full h-max  pb-3 space-y-3 sm:px-3'>


                        {
                            navLinks.map((item, i) => (
                                <Link
                                    key={i}
                                    className=' flex justify-center hover:border hover:border-[#7042f88b] cursor-pointer text-gray-300 px-3 py-2 rounded-md font-medium  text-base'
                                    href={item.link}>{item.title}</Link>
                            ))
                        }


                        <div className="flex justify-center flex-row gap-x-16 cursor-pointer" >
                            {
                                Social.map((social, i) => {
                                    return (
                                        <Image
                                            key={i}
                                            src={social.src}
                                            alt={social.name}
                                            width={28}
                                            height={28}
                                            onClick={() => window.open(social.link)}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>
                : null}


        </div>
    )
}

export default Navbar
