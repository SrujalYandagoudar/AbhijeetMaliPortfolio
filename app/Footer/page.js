import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>

            <footer id='Project'>
                <div className="flex flex-col pb-6 gap-6 ">
                    <div className="">
                        <ul className="flex justify-center items-center md:gap-10 gap-6 font-bold md:text-2xl">
                            <li className="">
                                <Link href={""} className="">About</Link>
                            </li>
                            <li className="">
                                <Link href={""} className="">Experince</Link>
                            </li>
                            <li className="">
                                <Link href={""} className="">Project</Link>
                            </li>
                            <li className="">
                                <Link href={""} className="">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-xl text-center text-gray-600">Copyright &copy; 2025 Abhijeet Mali. All Rights Reserved </p>
                    </div>
                </div>
            </footer>

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
