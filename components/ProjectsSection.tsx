import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Tradeline",
    description:
      "My tasks are create some reusable, components to build an e-commerce web ( product components, block components, .... ), create a search page, details product, ..etc",
    image: "https://i.ibb.co/m8Y6s00/TRADE.png",
    role:"Front-End Developer",
    link: "https://tradeline.vn/",
  },
  {
    name: "Di Dộng Việt (CMS)",
    description:
      "Create a web app to help customers customize the main web layout, and manage products, orders, customers, and comments, ...",
    image: "https://i.ibb.co/H7Yg3WN/CMSDDV.png",
    role:"Front-End Developer",
    link: "https://didongviet.vn/",
  },
  {
    name: "Transport Management System",
    description: "A webapp to help customers take orders and create delivery orders, change delivery orders status, manage orders, bills, drivers, customers, assign driver to bill/vehicle, print bills, orders ..",
    image: "https://i.ibb.co/Qm2KwVJ/TMS.png",
    role:"Fullstack Developer",
    link: "https://tms.duongtruc.vn",
  },
  {
    name: "Omnichannel System Management",
    description:
      "A web app to help customers create orders offline (pos), online ( e-commerce platform ), manage products, orders, and customer from different sources, ...",
    image: "https://i.ibb.co/Ytz4wrB/OMS.png",
    role:"Fullstack Developer",
    link: "https://omsdev.ntlogistics.vn",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
      WORK EXPERIENCE
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.role}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                     
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
