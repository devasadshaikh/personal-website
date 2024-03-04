'use client'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../../utils/motion'

import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import myPic from '../../../../public/myPic.jpeg'
import { client } from '../../../../sanity/lib/client'
import { Image as SImage } from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'


interface Ititle {
    yourName: string;
    shortDes: string;
    profileImage: SImage

}
export const dynamic = "force-dynamic"
export const getTitle = async () => {
    const res = await client.fetch(`*[_type=="homeSection"]{
        yourName,
        shortDes,
        profileImage

      }`);
    return res
}
const HeroContent = async () => {

    const data: Ititle[] = await getTitle()
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-40 z-[20]'
        >
            <div className=' h-full w-full flex flex-col gap-y-5 justify-center m-auto text-start '>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col mt-6 text-white  w-auto h-auto'
                >

                    <h4 className=" font-bold">Hello,</h4>
                    <div>
                        {
                            data.map((item, i) => (
                                <div key={i}>
                                    <h1 className=" font-bold text-3xl">{item.yourName}</h1>

                                    <h2 className=' text-4xl font-bold mt-2'>
                                        A {''}



                                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                                            <Typewriter

                                                words={['Developer', 'Programmer', 'Coder']}
                                                loop={true}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}

                                            />
                                        </span>

                                    </h2>

                                    <motion.p
                                        variants={slideInFromLeft(0.8)}
                                        className='text-lg text-gray-400 my-5 max-w-[600px]'
                                    >{item.shortDes}

                                    </motion.p>


                                </div>


                            ))
                        }
                    </div>



                </motion.div>



                <motion.a
                    variants={slideInFromLeft(1)}
                    className=' py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Download CV

                </motion.a>

            </div>
            <div>
                {
                    data.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={slideInFromRight(0.8)}
                            className='  flex justify-center mt-10 md:mt-0  '
                        >
                            <Image
                                src={urlForImage(item.profileImage).url()}
                                alt='mainIcon'
                                width={400}
                                height={400}
                                className=' rounded-full'
                            />

                        </motion.div>

                    ))
                }
            </div>





        </motion.div>
    )
}

export default HeroContent



