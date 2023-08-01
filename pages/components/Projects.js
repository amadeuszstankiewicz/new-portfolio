import { useEffect, useRef, useState } from "react";
import useMouseMove from "./hooks/useMouseMove"
import ProjectItem from "./ProjectItem";

export default function Projects({projectsRef}) {
    const projects = [
        {
            heroImg: "/projects/dnd/hero.jpg",
            title: "Fantasy Figurines",
            description: "This is an e-commerce store built using React and Next.js. The store also includes an admin panel where products and categories can be created, edited, and deleted. Additionally, it allows for viewing of placed orders. The portal is integrated with the Stripe payment processor.",
            images: ["/projects/dnd/orders.png", "/projects/dnd/products.png", "/projects/dnd/product.png"],
            descriptionUrls: [],
            demoUrls: ["https://dnd-figures.netlify.app"],
            githubUrls: ["https://github.com/amadeuszstankiewicz/shop-front", "https://github.com/amadeuszstankiewicz/shop-admin"],
            techIcons: ["react", "nextjs", "mongodb", "tailwind", "aws"]
        },
        {
            heroImg: "/projects/edowozka/hero.jpg",
            title: "eDowozka",
            description: "A startup of which I was a co-owner. On the website, customers can assemble a shopping cart with products from one of the selected stores (e.g., Lidl, Biedronka). Afterward, they choose the delivery date and expect the delivery by a courier. The courier assembles the shopping cart with the help of a special application, where they receive all the necessary information. The entire process can be tracked and edited in the administrator panel. The website was developed using JS and React. The courier application is available on Android devices and written in Kotlin. The backend was developed using PHP. Additionally, there is an application that allows scanning barcodes, taking photos, and adding new products to the database. The entire project was created from scratch by myself alone.",
            images: ["/projects/edowozka/2.jpg","/projects/edowozka/3.jpg","/projects/edowozka/4.jpg","/projects/edowozka/5.jpg","/projects/edowozka/6.jpg",
                    "/projects/edowozka/2_1.jpg","/projects/edowozka/2_2.jpg","/projects/edowozka/2_3.jpg","/projects/edowozka/2_4.jpg","/projects/edowozka/2_5.jpg",
                    "/projects/edowozka/3_1.jpg","/projects/edowozka/3_2.jpg","/projects/edowozka/3_3.jpg","/projects/edowozka/3_4.jpg"],
            descriptionUrls: [],
            demoUrls: [],
            githubUrls: [],
            techIcons: ["react", "php", "mysql", "css", "kotlin", "python"]
        },
        {
            heroImg: "/projects/odb/hero.jpg",
            title: "OddBird Games",
            description: "A commercial e-commerce store project executed by a team in which I participated.",
            images: [],
            descriptionUrls: ["https://www.frogriot.com/en/work/odd-bird-games-en/"],
            demoUrls: ["https://oddbirdgames.com/"],
            githubUrls: [],
            techIcons: ["wordpress", "php", "mysql", "jquery", "sass"]
        },
        {
            heroImg: "/projects/phal/hero.jpg",
            title: "Phalanx Games",
            description: "A commercial e-commerce store project executed by a team in which I participated.",
            images: [],
            descriptionUrls: ["https://www.frogriot.com/en/work/phalanx/"],
            demoUrls: ["https://phalanx.com.pl/"],
            githubUrls: [],
            techIcons: ["wordpress", "php", "mysql", "jquery", "sass"]
        },
        {
            heroImg: "/projects/dsr/hero.jpg",
            title: "Dolny Śląsk Rowerem",
            description: "An application for browsing bicycle routes available in Lower Silesia. The project was executed as part of a team in which I participated.",
            images: [],
            descriptionUrls: ["https://www.frogriot.com/en/work/lower-silesia-by-bike/"],
            demoUrls: ["https://www.dolnyslaskrowerem.pl/"],
            githubUrls: [""],
            techIcons: ["wordpress", "php", "mysql", "jquery", "sass", "vue", "nuxt"]
        },
        {
            heroImg: "/projects/sort/hero.jpg",
            title: "Visual of sorting algorithms",
            description: "A website that demonstrates how various algorithms sort arrays of numbers. The user can select the set from which numbers are to be drawn and how many numbers are to be generated. They can then choose the sorting algorithm and the speed of the steps.",
            images: [],
            descriptionUrls: [],
            demoUrls: ["https://v-sorting.netlify.app/"],
            githubUrls: ["https://github.com/amadeuszstankiewicz/sorting"],
            techIcons: ["react"]
        },
        {
            heroImg: "/projects/mini/hero.jpg",
            title: "Other projects",
            description: "Other small projects, usually micro-applications, that assisted in the functioning of the entire app.",
            images: [],
            descriptionUrls: [],
            demoUrls: [],
            githubUrls: [],
            techIcons: [],
            smallProjects: [
                {
                    title: "Snake game",
                    description: "Simple game written in Javascript",
                    demoUrl: "https://snakegame-as.netlify.app/",
                    githubUrl: "https://github.com/amadeuszstankiewicz/snake",
                    techIcons: ["javascript"]
                },
                {
                    title: "Matrix animation",
                    description: "An animation inspired by the Matrix. Developed using the p5.js library.",
                    demoUrl: "https://astankiewicz.netlify.app/errorshowpage",
                    githubUrl: "https://github.com/amadeuszstankiewicz/matrix_animation",
                    techIcons: ["javascript"]
                },
                {
                    title: "Web scrapper",
                    description: "An example of a web scrapper, by which products from a given site (their name, link, price, manufacturer, etc.) are downloaded and saved to a file.",
                    demoUrl: "",
                    githubUrl: "https://github.com/amadeuszstankiewicz/WebScrapper",
                    techIcons: ["python"]
                },
                {
                    title: "Twitch clips downloader",
                    description: "A script that downloads the most popular clips from streams, from twitch.tv. The user can choose the channels from which the clips are to be downloaded. In addition, titles and other clip data are saved to a text file.",
                    demoUrl: "",
                    githubUrl: "https://github.com/amadeuszstankiewicz/top_ttv_clips_downloader",
                    techIcons: ["python"]
                },
                {
                    title: "Top clips movie maker",
                    description: "A script that automatically glues the most popular clips into an entire video. In addition, transition effects, title and streamer's name are added at appropriate moments of the video. The generated text file contains a description of the video (all data, timestamps, URLs to clips).",
                    demoUrl: "",
                    githubUrl: "https://github.com/amadeuszstankiewicz/top_clips_movie",
                    techIcons: ["python"]
                },
                {
                    title: "Old portfolio",
                    description: "My old portfolio page. The portfolio was written using a js library - React. When creating some of the animations on the site, I used the p5js library.",
                    demoUrl: "https://astankiewicz.netlify.app/",
                    githubUrl: "https://github.com/amadeuszstankiewicz/Portfolio",
                    techIcons: ["javascript", "react"]
                }
            ]
        },
    ]

    const divRef = useRef(null);
    const [isMouseClicked, startingMousePosition, mousePosition] = useMouseMove();
    const [moveProjects, setMoveProjects] = useState('0px');
    const [moveImageProjects, setMoveImageProjects] = useState('0px');
    const [prevPercentage, setPrevPercentage] = useState(0);

    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        const popupRootDiv = document.getElementById('popup-root');
        if(popupRootDiv?.hasChildNodes()) {
            return;
        }

        if(isMouseClicked) {
            
            if(!isMouseDown) {
                setIsMouseDown(true);
            }
            const mouseDelta = parseFloat(startingMousePosition[0]) - mousePosition[0];
            const maxDelta = window.innerWidth / 2;
            const percentage = (-1) * (mouseDelta / maxDelta) * 100;
            let nextPercentage = parseFloat(prevPercentage) + percentage;

            if(nextPercentage > 0) {
                nextPercentage = 0
            }
            if(nextPercentage < -100) {
                nextPercentage = -100
            }

            setMoveProjects(nextPercentage)
            setMoveImageProjects(nextPercentage)
        } else {
            if(isMouseDown) {
                setIsMouseDown(false);
                setPrevPercentage( parseFloat(moveProjects) );
            }
        }
    }, [mousePosition])




    const handleWheel = (event) => {
        const popupRootDiv = document.getElementById('popup-root');
        if(popupRootDiv?.hasChildNodes()) {
            return;
        }

        let scrollSpeed = -event.deltaY/35;
        
        let nextPercentage = parseFloat(prevPercentage) + scrollSpeed;

        if(nextPercentage > 0) {
            nextPercentage = 0
        }
        if(nextPercentage < -100) {
            nextPercentage = -100
        }

        setMoveProjects(nextPercentage)
        setMoveImageProjects(nextPercentage)
        setPrevPercentage( parseFloat(nextPercentage) );
    };


    return (
        <div ref={projectsRef} onWheel={handleWheel} className="relative min-h-screen justify-center py-[64px] gap-5 transform overflow-hidden">
            <div className="absolute w-max flex gap-5 top-1/2 left-1/2 -translate-y-1/2"
                ref={divRef}
                style={{
                    transform: `translate(${moveProjects}%, -50%)`,
                }}>

                {
                    projects.length > 0 ? (
                        projects.map((project) => 
                            <ProjectItem 
                                key={project.title}
                                projectData={project}
                                moveImageProjects={moveImageProjects}
                                />
                        )
                    ) : null
                }
            </div>
        </div>
    )
}
  