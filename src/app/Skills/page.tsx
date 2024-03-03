
import { Frontend_skill } from "../../../constants"
import { ProgressDemo } from "../components/main/Progress"
import { Progress } from "@/components/ui/progress"
import SkillDataProvider from "../components/sub/SkillDataProvider"
import SkillText from "../components/sub/SkillText"
import Image from "next/image"
import { Image as SImage } from 'sanity'
import { client } from "../../../sanity/lib/client"
import { urlForImage } from '../../../sanity/lib/image'


interface ISkill {
    percentage: number,
    iconImage: SImage,
    skillName: string,




}

export const dynamic = "force-dynamic"
export const getTitle = async () => {
    const res = await client.fetch(`*[_type == "skillSection"]{
        title,
        // skills[]{
          skillName,
          iconImage,
          percentage
        // }
      }`);
    return res
}




const Skills = async () => {
    const data: ISkill[] = await getTitle()
    return (
        <section
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mt-10"
            style={{ transform: "scale(0.9" }}
        >

            {/* <SkillText /> */}
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                My Skills
            </h1>



            {/* <div className="w-full py-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/html.png"
                            alt="html"
                            width={60}
                            height={60}
                        />
                    </div>
                    <Progress className=" ml-3" value={78} />
                </div>
            </div>

            <div className="w-full py-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/tailwind-css.png"
                            alt="html"
                            width={60}
                            height={60}
                        />
                    </div>
                    <Progress className=" ml-3" value={88} />
                </div>
            </div>

            <div className="w-full py-[15px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/js.png"
                            alt="html"
                            width={40}
                            height={40}
                        />
                    </div>
                    <Progress className=" ml-3" value={60} />
                </div>
            </div>

            <div className="w-full py-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/typescript.png"
                            alt="html"
                            width={60}
                            height={60}
                        />
                    </div>
                    <Progress className=" ml-3" value={90} />
                </div>
            </div>


            <div className="w-full py-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/mui.png"
                            alt="html"
                            width={60}
                            height={60}
                        />
                    </div>
                    <Progress className=" ml-3" value={28} />
                </div>
            </div>

            <div className="w-full py-[25px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/shadcn.svg"
                            alt="html"
                            width={80}
                            height={0}

                        />
                    </div>
                    <Progress className=" ml-3" value={55} />
                </div>
            </div>

            <div className="w-full py-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/react.png"
                            alt="html"
                            width={60}
                            height={60}
                        />
                    </div>
                    <Progress className=" ml-3" value={42} />
                </div>
            </div>

            <div className="w-full py-[25px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                <div className=" flex items-center px-5">
                    <div>
                        <Image
                            src="/next.svg"
                            alt="html"
                            width={60}
                            height={0}
                        />
                    </div>
                    <Progress className=" ml-3" value={92} />
                </div>
            </div> */}



            {
                data.map((item) => (
                    <>
                        <div className="w-full py-[15px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                            <div className=" flex items-center px-5">
                                {/* <h1 className="text-2xl text-white">{item.skillName}</h1> */}
                                <div>

                                    {/* {item.iconImage && (
  <Image src={urlForImage(item.iconImage).url()} alt="icon" height={150} width={150} />
)} */}

                                    <Image


                                        src={urlForImage(item.iconImage).url()}
                                        alt={item.skillName}
                                        width={40}
                                        height={0}
                                    />
                                </div>
                                <Progress className=" ml-3" value={item.percentage} />
                            </div>
                        </div>
                    </>

                ))
            }






            {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}

            </div> */}

            {/* <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div> */}


        </section>
    )
}

export default Skills