import Popup from "reactjs-popup";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useWidth from "./hooks/useWidth";
import { useState } from "react";

import { AiFillGithub } from 'react-icons/ai';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact, FaWordpress, FaAws } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiPhp, SiMysql, SiExpress, SiJquery, SiKotlin, SiNuxtdotjs } from 'react-icons/si';
import { BiLogoPython, BiLogoMongodb, BiLogoCss3, BiLogoSass, BiLogoTailwindCss, BiLogoVuejs } from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';

export default function ProjectItem({moveImageProjects, projectData}) {
    const screenWidth = useWidth();
    const [hugeImage, setHugeImage] = useState('')

    const responsive = {
        all: {
            breakpoint: { max: 10000, min: 0 },
            items: 1
        }
    };

    const isSmallScreen = screenWidth < 1023 ? true : false;

    if(!projectData) {
        return;
    }

    return (
        <>
             <Popup
                trigger={
                    <img className="project-box select-none drop-shadow-lg rounded-lg transition ease-linear hover:cursor-pointer hover:scale-105" src={projectData?.heroImg} draggable="false" alt=""
                        style={{
                            objectPosition: `${moveImageProjects + 100}% 50%`
                        }}/>
                }
                modal
                nested
                >
                    {close => (
                        <div className="flex w-screen h-screen sm:p-5">
                            <div className="relative w-full rounded-lg bg-white drop-shadow-lg dark:bg-[#202020] overflow-y-auto">
                                
                                <div className="relative mx-auto w-full py-5 px-1 sm:w-[540px] lg:w-[720px]">
                                    {
                                        projectData?.images.length > 0 ? (
                                            <Carousel 
                                                className="justify-content-center items-center rounded-lg"
                                                responsive={responsive}
                                                swipeable={isSmallScreen}
                                                draggable={isSmallScreen}>

                                                <img onClick={() => setHugeImage(projectData.heroImg)} className="hover:cursor-zoom-in" src={projectData.heroImg} alt="" />
                                                {
                                                    projectData.images.map((img, index) =>
                                                        <img key={index} onClick={() => setHugeImage(img)} className="hover:cursor-zoom-in" src={img} alt="" />
                                                    )
                                                }
                                            </Carousel>
                                        ) : (
                                            <img onClick={() => setHugeImage(projectData.heroImg)} className="rounded-lg hover:cursor-zoom-in" src={projectData.heroImg} alt="" />
                                        )
                                    }
                                            
                                    <h1 className="text-3xl font-bold text-center my-3">{projectData?.title}</h1>

                                    <p className="mb-3">
                                        {projectData?.description}
                                    </p>

                                    {
                                        projectData?.demoUrls.length > 0 ? (
                                            projectData.demoUrls.map((demoUrl, index) => 
                                                <div key={index} className="w-full">
                                                    <a className="flex w-fit gap-2 mb-3 transition ease-linear hover:text-cyan-500" href={demoUrl} target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                        </svg>
                                                        Open page
                                                    </a>
                                                </div>
                                            )
                                        ) : null
                                    }

                                    {
                                        projectData?.descriptionUrls.length > 0 ? (
                                            projectData.descriptionUrls.map((descriptionUrl, index) => 
                                                <div key={index} className="w-full">
                                                    <a className="flex w-fit gap-2 mb-3 transition ease-linear hover:text-cyan-500" href={descriptionUrl} target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                        </svg>
                                                        Description
                                                    </a>
                                                </div>
                                            )
                                        ) : null
                                    }

                                    {
                                        projectData?.githubUrls.length > 0 ? (
                                            projectData.githubUrls.map((githubUrl, index) => 
                                                <div key={index} className="w-full">
                                                    <a className="flex w-fit gap-2 mb-3 transition ease-linear hover:text-cyan-500" href={githubUrl} target="_blank">
                                                        <AiFillGithub className="w-6 h-6"/>
                                                        Repo
                                                    </a>
                                                </div>
                                            )
                                        ) : null
                                    }
                                    

                                    {
                                        projectData?.techIcons.length > 0 ? (
                                            <div className="flex gap-2">
                                                {
                                                    projectData.techIcons.map((icon, index) => 
                                                        <div key={index}>
                                                            {icon === 'javcscript' && <RiJavascriptFill className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'react' && <FaReact className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'nextjs' && <TbBrandNextjs className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'express' && <SiExpress className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'jquery' && <SiJquery className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'mongodb' && <BiLogoMongodb className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'mysql' && <SiMysql className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'aws' && <FaAws className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'php' && <SiPhp className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'wordpress' && <FaWordpress className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'html' && <AiFillHtml5 className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'css' && <BiLogoCss3 className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'sass' && <BiLogoSass className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'tailwind' && <BiLogoTailwindCss className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'kotlin' && <SiKotlin className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'python' && <BiLogoPython className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'vue' && <BiLogoVuejs className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                            {icon === 'nuxt' && <SiNuxtdotjs className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        ) : null
                                    }

                                    {
                                        projectData?.smallProjects?.length > 0 ? (
                                            <div className="grid gap-5 mt-5 grid-cols-1 md:grid-cols-2">
                                                {
                                                    projectData.smallProjects.map((smallProject, index) => 
                                                        <div key={index} className="relative flex flex-col rounded shadow-md p-3 bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5">
                                                            <div className="flex gap-2 justify-between">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="flex gap-2 mb-3">
                                                                    {
                                                                        smallProject.demoUrl !== "" ? (
                                                                            <a href={smallProject.demoUrl} target="_blank" className="transition ease-linear hover:text-cyan-500">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                                                </svg>
                                                                            </a>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        smallProject.githubUrl !== "" ? (
                                                                            <a href={smallProject.githubUrl} target="_blank" className="transition ease-linear hover:text-cyan-500">
                                                                                <AiFillGithub className="w-6 h-6"/>
                                                                            </a>
                                                                        ) : null
                                                                    }
                                                                </div>
                                                            </div>
                                                            <h3 className="font-bold text-xl">{smallProject.title}</h3>

                                                            <div className="flex flex-col flex-grow">
                                                                <p className="mt-3">
                                                                    {smallProject.description}
                                                                </p>

                                                                {
                                                                    smallProject.techIcons.length > 0 ? (
                                                                        <div className="flex flex-grow items-end gap-2 mt-3">
                                                                            {
                                                                                smallProject.techIcons.map((icon, index) => 
                                                                                    <div key={index}>
                                                                                        {icon === 'javascript' && <RiJavascriptFill className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'react' && <FaReact className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'nextjs' && <TbBrandNextjs className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'express' && <SiExpress className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'jquery' && <SiJquery className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'mongodb' && <BiLogoMongodb className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'mysql' && <SiMysql className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'aws' && <FaAws className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'php' && <SiPhp className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'wordpress' && <FaWordpress className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'html' && <AiFillHtml5 className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'css' && <BiLogoCss3 className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'sass' && <BiLogoSass className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'tailwind' && <BiLogoTailwindCss className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'kotlin' && <SiKotlin className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'python' && <BiLogoPython className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'vue' && <BiLogoVuejs className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                        {icon === 'nuxt' && <SiNuxtdotjs className="transition ease-linear w-6 h-6 hover:text-cyan-500" />}
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                    ) : null
                                                                }
                                                            </div>

                                                        </div>
                                                    )
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>


                                <button
                                    onClick={close}
                                    className="absolute top-2 right-2 transition ease-linear hover:text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                </button>

                                {
                                    hugeImage !== '' ? (
                                        <div className="fixed flex justify-center items-center rounded-lg top-0 left-0 w-full h-full bg-black bg-opacity-90 z-top hover:cursor-zoom-out"
                                            onClick={() => setHugeImage('')}>
                                            <img className="max-h-full max-w-full"src={hugeImage} alt="" />
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>
                    )}
            </Popup>
        </>
    )
}
  