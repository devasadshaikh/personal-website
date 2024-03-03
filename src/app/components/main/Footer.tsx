'use client'
import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import { Social } from "../../../../constants";
import Image from "next/image";
const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                    <div className=" hidden md:contents">
                        <div className="  min-w-[200px] h-auto flex flex-col items-center justify-start">
                            <div className="font-bold text-[16px]">Community</div>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <FaYoutube />
                                <span className="text-[15px] ml-[6px]">Youtube</span>
                            </p>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </p>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxDiscordLogo />
                                <span className="text-[15px] ml-[6px]">Discord</span>
                            </p>
                        </div>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        {
                            Social.map((social,i) => {
                                return (
                                    <Image
                                    key={i}
                                        src={social.src}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        onClick={() => window.open(social.link)}
                                        className=" py-3 cursor-pointer"
                                    />
                                )
                            })
                        }
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p> */}
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">devasadshaikh@gmail.com</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Hyderabad,Sindh PK</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">+92 3163072158</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Dev Asad Shaikh Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer