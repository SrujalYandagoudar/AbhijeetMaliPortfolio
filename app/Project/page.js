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
            <main className="h-full" id='Project'>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-normal text-gray-600">Browse My Recent</h3>
                    <h1 className="text-5xl text-center font-bold ">Project</h1>
                </div>

                <div className="grid md:grid-cols-3 items-center md:mx-32 mx-10 my-20 gap-10">
                    
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
            </main>
        </>
    )
}

export const metadata = {
  title: "Abhijeet Mali Experience",
  description:
    "Portfolio of Abhijeet Mali – Android Developer and founder of Dev Alpha, building modern mobile apps using Kotlin, Jetpack Compose, and Firebase. Incubated at Sanjay Ghodawat University.",
  keywords: [
    "Abhijeet Mali",
    "Attendace App",
    "Bluetooth Attendance App",
    "My Stack",
    "Abhijeet Mali Skills",
    "Abhijeet Mali Project",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Firebase",
    "Dev Alpha",
    "SGU",
    "Mobile App Portfolio",
    "Srujal Yandagoudar"
  ],
  authors: [{ name: "Abhijeet Mali" }],
  creator: "Abhijeet Mali",
  openGraph: {
    title: "Abhijeet Mali Portfolio",
    description:
      "Android Developer and founder of Dev Alpha, building innovative mobile apps using Kotlin, Jetpack Compose, and Firebase.",
    url: "https://abhijeetmali.dev", // replace with your domain
    siteName: "Abhijeet Mali Portfolio",
    images: [
      {
        url: "/Images.Abhijeet.jpg", // Path to your Open Graph image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
