import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
        <main className="md:h-screen py-10" id='About'>
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="font-normal text-gray-600">Get To Know More</h3>
                <h1 className="text-5xl text-center font-bold ">About Me</h1>
            </div>

            <div className="md:mt-20 mt-6 flex max-md:flex-col items-center gap-10 md:mx-32 mx-6">
                    <div className="">
                        <Image src="/Images/Abhijeet.jpg" width={600} height={600} alt="Abhijeet Mali" className="grayscale-100 rounded-4xl shadow-2xl" />
                    </div>
                    <div className="w-full">
                            <div className="grid md:grid-cols-2 md:gap-10 gap-4 w-full">
                                <div className="p-6 border-2 border-gray-500 rounded-3xl flex flex-col justify-center items-center gap-1">
                                    <Image src="/Images/Experience.png" width={30} height={30} alt="Abhijeet Experience" className="grayscale-100" />
                                    <h2 className="font-bold text-2xl">Experience</h2>
                                    <p className="">2+ Years</p>
                                    <p className="">Android Development</p>
                                </div>
                                 <div className="p-6 border-2 border-gray-500 rounded-3xl flex flex-col justify-center items-center gap-1">
                                    <Image src="/Images/Eduction.png" width={30} height={30} alt="Abhijeet Eduction" className="grayscale-100" />
                                    <h2 className="font-bold text-2xl">Eduction</h2>
                                    <p className="">B-Tech CSE </p>
                                    <p className="">Sanjay Ghodawat University </p>
                                </div>
                            </div>

                            <p className=" py-6 max-md:text-center">
                                I’m Abhijeet Mali, an enthusiastic Android Developer and founder of Dev Alpha, a startup incubated under Sanjay Ghodawat University. I specialize in building fast, intuitive, and scalable Android applications using Kotlin, Jetpack Compose, and Firebase. My work focuses on creating modern mobile solutions that blend clean UI with robust architecture.
                            </p>
                    </div>
            </div>
        </main>

    </>
  )
}

export const metadata = {
  title: "About Abhijeet Mali",
  description: "Portfolio of Abhijeet Mali – Android Developer and founder of Dev Alpha, building modern mobile apps using Kotlin, Jetpack Compose, and Firebase. Incubated at Sanjay Ghodawat University.",
};
