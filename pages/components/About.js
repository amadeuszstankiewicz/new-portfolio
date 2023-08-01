import Image from "next/image";

import { Tooltip } from 'react-tooltip'

import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact, FaWordpress, FaAws } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiPhp, SiMysql, SiExpress, SiJquery } from 'react-icons/si';
import { BiLogoMongodb, BiLogoCss3, BiLogoSass, BiLogoTailwindCss } from 'react-icons/bi';
import { BsBucket } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';

export default function About({aboutRef}) {
    return (
        <div ref={aboutRef} className="relative min-h-screen py-[64px] px-1 flex items-center justify-center lg:px-0">
            <div className="relative container max-h-[calc(100vh-68px)] overflow-y-auto mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:flex-nowrap">

                    <div className="flex items-center justify-center w-full lg:w-1/2">
                        <Image
                            src="/about/avatar.jpg"
                            width={420}
                            height={420}
                            className="rounded-lg"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2">
                        <h1 className="font-bold text-4xl">Hi, I&apos;m Amadeusz Stankiewicz</h1>
                        <h2 className="font-bold text-xl">FULLSTACK DEVELOPER</h2>

                        <p className="mt-5 text-xl xl:w-2/3">
                            Welcome to my portfolio page! I am a full-stack developer who loves tackling tricky problems and enjoys learning new things. 
                            I have expertise in both front-end and back-end development, and I&apos;m passionate about creating smart and efficient solutions.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-3 items-center">
                            <div data-tooltip-id="js-tooltip"
                                data-tooltip-content="Javascript"
                                data-tooltip-place="top">
                                <RiJavascriptFill className="w-12 h-12 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="js-tooltip" />
                            </div>
                            <div data-tooltip-id="react-tooltip"
                                data-tooltip-content="React"
                                data-tooltip-place="top">
                                <FaReact className="w-10 h-10 transition ease-linear hover:text-cyan-500"/>
                                <Tooltip id="react-tooltip" />
                            </div>
                            <div data-tooltip-id="next-tooltip"
                                data-tooltip-content="Next.js"
                                data-tooltip-place="top">
                                <TbBrandNextjs className="w-11 h-11 transition ease-linear hover:text-cyan-500"/>
                                <Tooltip id="next-tooltip" />
                            </div>
                            <div data-tooltip-id="express-tooltip"
                                data-tooltip-content="Express.js"
                                data-tooltip-place="top">
                                <SiExpress className="w-11 h-11 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="express-tooltip" />
                            </div>
                            <div data-tooltip-id="jquery-tooltip"
                                data-tooltip-content="jQuery"
                                data-tooltip-place="top">
                                <SiJquery className="w-8 h-8 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="jquery-tooltip" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-3 items-center">
                            <div data-tooltip-id="mongo-tooltip"
                                data-tooltip-content="MongoDB"
                                data-tooltip-place="top">
                                <BiLogoMongodb className="w-12 h-12 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="mongo-tooltip" />
                            </div>
                            <div data-tooltip-id="mysql-tooltip"
                                data-tooltip-content="MySQL"
                                data-tooltip-place="top">
                                <SiMysql className="w-10 h-10 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="mysql-tooltip" />
                            </div>
                            <div data-tooltip-id="aws-tooltip"
                                data-tooltip-content="AWS S3"
                                data-tooltip-place="top"
                                className="flex items-center transition ease-linear hover:text-cyan-500">
                                <FaAws className="w-10 h-10" />
                                <BsBucket className="w-6 h-6" />
                                <Tooltip id="aws-tooltip" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-3 items-center">
                            <div data-tooltip-id="php-tooltip"
                                data-tooltip-content="PHP"
                                data-tooltip-place="top">
                                <SiPhp className="w-12 h-12 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="php-tooltip" />
                            </div>
                            <div data-tooltip-id="wordpress-tooltip"
                                data-tooltip-content="Wordpress"
                                data-tooltip-place="top">
                                <FaWordpress className="w-10 h-10 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="wordpress-tooltip" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-3 items-center">
                            <div data-tooltip-id="html-tooltip"
                                data-tooltip-content="HTML5"
                                data-tooltip-place="top">
                                <AiFillHtml5 className="w-9 h-9 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="html-tooltip" />
                            </div>
                            <div data-tooltip-id="css-tooltip"
                                data-tooltip-content="CSS3"
                                data-tooltip-place="top">
                                <BiLogoCss3 className="w-10 h-10 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="css-tooltip" />
                            </div>
                            <div data-tooltip-id="sass-tooltip"
                                data-tooltip-content="Sass"
                                data-tooltip-place="top">
                                <BiLogoSass className="w-9 h-9 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="sass-tooltip" />
                            </div>
                            <div data-tooltip-id="tailwind-tooltip"
                                data-tooltip-content="Tailwind"
                                data-tooltip-place="top">
                                <BiLogoTailwindCss className="w-9 h-9 transition ease-linear hover:text-cyan-500" />
                                <Tooltip id="tailwind-tooltip" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  