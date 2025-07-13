import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <>
        <section className="md:h-[75vh]">
            <div className="flex max-md:flex-col justify-center items-center gap-16 md:mt-22 max-md:my-10 ">
                <div className="relative max-md:px-10">
                    <Image src='/Images/Abhijeet.jpg' width={400} height={400} className='rounded-full object-cover scale-x-[-1]' alt=''/>
                   
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-bold text-gray-600 text-xl">Hello, I&apos;m</h3>
                    <h1 className="text-5xl font-bold ">Abhijeet Mali</h1>
                    <h2 className="text-gray-600 text-3xl font-semibold">Android Developer</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 rounded-full border border-black font-semibold">Download CV</button>
                        <button className="p-4 rounded-full text-white bg-gray-700 font-semibold">Contact Info</button>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <button className=''><Link href={"https://www.linkedin.com/in/abhijeet-mali-abhi2003a/"} target='_blank'><Image src="/Images/Linkedin.png" alt="abhijeet-linkedin" width={50} height={50} /></Link> </button>
                        <button className=''><Link href={"https://github.com/maliAbhijeet"} target='_blank'><Image src="/Images/Github.png" alt="abhijeet-Github" width={50} height={50} /></Link> </button>

                    </div>

                </div>

                
            </div>
        </section>
   </>
  )
}

export const metadata = {
  title: "Abhijeet Mali Experience",
  description:
    "Portfolio of Abhijeet Mali – Android Developer and founder of Dev Alpha, building modern mobile apps using Kotlin, Jetpack Compose, and Firebase. Incubated at Sanjay Ghodawat University.",
  keywords: [
    "Abhijeet Mali",
    "Abhi Mali",
    "Abhijeetmali",
    "Mali Abhijeet",
    "Abhijeet Mali Skills",
    "Abhijeet Mali Project",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Firebase",
    "Dev Alpha",
    "SGU",
    "Mobile App Portfolio",
    "Srujal Yandagoudar",
    "Abhijeet Mali Github"
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
