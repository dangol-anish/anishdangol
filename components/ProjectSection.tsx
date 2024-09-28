"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { RiArrowRightUpFill } from "react-icons/ri";
import { projects } from "@/data";
import Link from "next/link";

export function ProjectSection() {
  return (
    <div className="px-10 lg:px-20 lg:py-20 ">
      <h1 id="projects-section" className="heading pb-5">
        A collection of my{" "}
        <span className="text-violet-500">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center  lg:justify-between gap-16 mt-10">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.1] dark:bg-stone-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[38rem] h-auto min-h-[20rem] rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-full text-justify mt-2 dark:text-neutral-300"
              >
                {project.des}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={project.img}
                  height="1200"
                  width="1200"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.img}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex gap-2 justify-center items-center"
                >
                  {project.iconLists.map((logo) => (
                    <Image
                      src={logo}
                      width={20}
                      height={20}
                      alt={project.title}
                    />
                  ))}
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="a"
                  href={project.link}
                  className="px-4 py-2 rounded-xl  font-bold flex text-violet-500 items-center"
                >
                  Check Live Site <RiArrowRightUpFill size={25} />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <Link href="/project" className="text-violet-500 ">
        <p className="my-10 flex ">
          View Full Project Archive <RiArrowRightUpFill size={25} />
        </p>
      </Link>
    </div>
  );
}
