import React from "react";
import ProjectCard from "../components/sub/ProjectCard";
import { Image as SImage } from 'sanity'
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

interface IProjects {
  projectTitle: string,
  projectDes: string,
  projectImage: SImage

}

export const getProjects = async () => {
  const proj = await client.fetch(`*[_type == "projectSection"]{
    projectTitle,
    projectDes,
    projectImage
    }`);
  return proj
}

const ProjectsPage = async () => {
  const projectsData: IProjects[] = await getProjects()
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/youtube.png"
          title="YouTube Clone Using Next.js & Tailwind css"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/Microsoft.png"
          title="Microsoft Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
     
        {
          projectsData.map((item,i) => (
            <ProjectCard
            key={i}
            src={urlForImage(item.projectImage).url()}
            title={item.projectTitle}
            description={item.projectDes}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProjectsPage;