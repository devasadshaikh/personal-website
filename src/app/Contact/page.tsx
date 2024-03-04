'use client'
import { Phone, Mail, MapPin } from "lucide-react"
import { Social } from "../../../constants"
import Image from "next/image"
import Link from "next/link"

const ContactPage = () => {
  return (
    <div className=" mt-24 flex w-full min-h-screen justify-center items-center" >

      <div className=" mx-5 flex flex-col md:flex-row justify-between  w-full max-w-6xl shadow-lg rounded-xl border border-[#7042f88b] p-8">

        <div className=" flex flex-col justify-between space-y-10">
          <div>
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Contact Us
            </h1>
            <p className=" text-white text-sm hidden md:contents">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

          </div>

          <div className=" space-y-5 flex flex-col">

            <div className=" inline-flex space-x-2 items-center">
              <Phone className=" text-[#7042f88b] " /><span className="text-white">+92 3163072158</span>
            </div>

            <div className=" inline-flex space-x-2 items-center">
              <Mail className=" text-[#7042f88b] " /><span className="text-white">devasadshaikh@gmail.com</span>
            </div>

            <div className=" inline-flex space-x-2 items-center">
              <MapPin className=" text-[#7042f88b] " /><span className="text-white">Hyderabad,Sindh</span>
            </div>

          </div>







          <div className=" flex space-x-8 cursor-pointer">
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


        <div className=" border border-[#7042f88b] shadow-lg shadow-[#2A0E61]/50 backdrop:blur-md  rounded-xl p-3 md:p-8 text-white mt-8 md:mt-0 ">
          <form action="" className=" flex flex-col space-y-4">
            <div>
              <label className=" text-sm">Your Name</label>
              <input type="text" placeholder="Your Name" className=" text-black mt-2 ring-1  w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#7042f88b]" />
            </div>

            <div>
              <label className=" text-sm">Email Address</label>
              <input type="Email Address" placeholder="Email Address" className=" text-black mt-2 ring-1  w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#7042f88b]" />
            </div>

            <div>
              <label className=" text-sm">Message</label>
              <textarea placeholder="Message" rows={4} className=" text-black mt-2 ring-1  w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#7042f88b]"></textarea>
            </div>
            <button className=" button-primary py-2  px-4  self-end rounded-md">Submit</button>

          </form>
        </div>


      </div>



    </div>
  )
}

export default ContactPage