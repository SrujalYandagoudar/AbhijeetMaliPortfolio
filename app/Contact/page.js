import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Contact() {
  return (
    <>
        <section className=" py-10" id='Contact'>
           

            <div className="">
                <div className="h-[80vh]  flex flex-col justify-center items-center gap-4">
                <h3 className="font-normal text-gray-600">Get In Touch</h3>
                <h1 className="text-5xl text-center font-bold ">Contact Me</h1>


                <div className="mt-6 border-2 flex items-center border-gray-600 bg-gray-200 rounded-3xl">
                    <Link href={""} target='_blank' className="flex items-center gap-2 px-6 py-4 ">
                        <Image src="/Images/Mail.png" width={30} height={30} alt="" className="" />
                        <p className="">abhijeetmali@gmail.com</p>
                    </Link>

                    <Link href={"https://www.linkedin.com/in/abhijeet-mali-abhi2003a/"} target='_blank' className="flex items-center gap-2 px-6 py-2 ">
                        <Image src="/Images/Linkedin.png" width={30} height={30} alt="Abhijeet Mali Linkedin" className="" />
                        <p className="">LinkedIn</p>
                    </Link>

                </div>


                
            </div>
            </div>
        </section>
    </>
  )
}
