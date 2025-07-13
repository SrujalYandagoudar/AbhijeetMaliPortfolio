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


                <div className="mt-6 border-2 flex max-md:flex-col items-center border-gray-600 bg-gray-200 rounded-3xl">
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

export const metadata = {
  title: "Abhijeet Mali Portfolio",
  description:
    "Portfolio of Abhijeet Mali – Android Developer and founder of Dev Alpha, building modern mobile apps using Kotlin, Jetpack Compose, and Firebase. Incubated at Sanjay Ghodawat University.",
  keywords: [
    "Abhijeet Mali",
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

