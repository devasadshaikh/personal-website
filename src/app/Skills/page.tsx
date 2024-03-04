
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





            {
                data.map((item) => (
                    <>
                        <div className="w-full py-[15px] border border-[#7042f88b] opacity-[0.9] rounded-full">

                            <div className=" flex items-center px-5">

                                <div>

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






        </section>
    )
}

export default Skills