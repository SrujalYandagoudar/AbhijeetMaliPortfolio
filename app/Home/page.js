import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <>
        <section className="h-[75vh]">
            <div className="flex justify-center items-center gap-16 mt-22 ">
                <div className="relative ">
                    <Image src='/Images/Abhijeet.jpg' width={400} height={400} className='rounded-full object-cover scale-x-[-1]' alt=''/>
                    {/* <img src="/Images/Abhijeet.jpg" alt="" className="w-80 h-72 rounded-full" /> */}
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-bold text-gray-600 text-xl">Hello, I'm</h3>
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
