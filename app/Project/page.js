import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Github from '../Github/page'

export default function Project() {
    const project = [
        {
            id: 1,
            projectName: "Abhijeet Mali",
            projectImage: "/Images/Abhijeet.jpg",
            GithubLink: "www.google.com",
            LiveDemo: "www.google.com"
        },

        {
            id: 2,
            projectName: "Abhijeet Mali",
            projectImage: "/Images/Abhijeet.jpg",
            GithubLink: "www.google.com",
            LiveDemo: "www.google.com"
        },

        {
            id: 3,
            projectName: "Abhijeet Mali",
            projectImage: "/Images/Abhijeet.jpg",
            GithubLink: "www.google.com",
            LiveDemo: "www.google.com"
        },

    ]
    return (
        <>
            <section className="h-full" id='Project'>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-normal text-gray-600">Browse My Recent</h3>
                    <h1 className="text-5xl text-center font-bold ">Project</h1>
                </div>

                <div className="grid grid-cols-3 items-center mx-32 my-20 gap-10">
                    
                        {project.map((project) => (
                            <div key={project.id} className="border-2 border-black rounded-3xl flex flex-col justify-center items-center py-6 gap-4">
                                <Image src={project.projectImage} alt="Project" width={300} height={400} className="" />
                                <h1 className="font-black text-2xl py-4">{project.projectName}</h1>

                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-4 rounded-full hover:bg-gray-600 hover:text-white transition duration-100 border border-black font-semibold"><Link href={project.GithubLink}>Github</Link> </button>
                                    <button className="p-4 rounded-full hover:bg-gray-600 hover:text-white transition duration-100 border border-black font-semibold"><Link href={project.LiveDemo}>Live Demo</Link> </button>
                                </div>
                            </div>
                        ))

                        }

                    
                </div>

                <Github/>
            </section>
        </>
    )
}
