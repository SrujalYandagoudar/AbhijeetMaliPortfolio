import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Project() {
    return (
        <>
            <section className="h-screen">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-normal text-gray-600">Browse My Recent</h3>
                    <h1 className="text-5xl text-center font-bold ">Project</h1>
                </div>

                <div className="grid grid-cols-3 items-center mx-32 my-20 gap-10">
                    <div className="">
                        <div className="border-2 border-black rounded-3xl flex flex-col justify-center items-center py-6 gap-4">
                            <Image src="/Images/Abhijeet.jpg" alt="Project" width={300} height={400} className="" />
                            <h1 className="font-black text-2xl py-4">Project Name</h1>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="p-4 rounded-full hover:bg-gray-600 hover:text-white transition duration-100 border border-black font-semibold">Github</button>
                                <button className="p-4 rounded-full hover:bg-gray-600 hover:text-white transition duration-100 border border-black font-semibold">Live Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
