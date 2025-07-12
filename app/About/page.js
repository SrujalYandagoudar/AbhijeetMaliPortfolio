import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
        <section className="h-screen py-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="font-normal text-gray-600">Get To Know More</h3>
                <h1 className="text-5xl text-center font-bold ">About Me</h1>
            </div>

            <div className="mt-20 flex items-center gap-10 mx-32">
                    <div className="">
                        <Image src="/Images/Abhijeet.jpg" width={600} height={600} alt="Abhijeet Mali" className="grayscale-100 rounded-4xl shadow-2xl" />
                    </div>
                    <div className="w-full">
                            <div className="grid grid-cols-2 gap-10 w-full">
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
                                    <p className="">Snajay Ghodawat Unversity</p>
                                </div>
                            </div>

                            <p className=" py-6">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ea saepe nam ducimus minima ut reiciendis voluptas vel maiores nisi numquam quae tempora cupiditate porro, id dolores et necessitatibus adipisci illum quia iure earum animi? Modi, corrupti necessitatibus alias provident dolorum ipsum saepe cupiditate a sint consectetur quam perspiciatis nobis!
                            </p>
                    </div>
            </div>
        </section>

    </>
  )
}
