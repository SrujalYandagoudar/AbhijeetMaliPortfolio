import Image from 'next/image'
import React from 'react'
import Github from '../Github/page'

export default function Experience() {
  return (
    <>
        <section className="md:h-screen" id='Experience'>
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="font-normal text-gray-600">Explore My</h3>
                <h1 className="text-5xl text-center font-bold ">Experience</h1>
            </div>

            <div className="grid md:grid-cols-2 items-center md:mx-32 mx-6 my-20 gap-10">
                <div className="border-2 border-gray-600 rounded-3xl md:px-12 px-6 py-4">
                    <h1 className="font-bold text-3xl text-gray-600 py-2 pb-6 text-center">Android Development</h1>

                      <div className="grid grid-cols-2 gap-y-6 md:justify-self-center-safe md:gap-20">
                            <div className="flex items-start md:gap-6 gap-2 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold md:text-2xl">Kotline</h1>
                                    <h3 className="text-gray-600 max-md:text-xs font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start md:gap-6 gap-2 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold md:text-2xl">Jetpack</h1>
                                    <h3 className="text-gray-600 max-md:text-xs font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start md:gap-6 gap-2 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold md:text-2xl">Firebase</h1>
                                    <h3 className="text-gray-600 max-md:text-xs font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start md:gap-6 gap-2 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold md:text-2xl">Room DB</h1>
                                    <h3 className="text-gray-600 max-md:text-xs font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start md:gap-6 gap-2 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold md:text-2xl">Android Studio</h1>
                                    <h3 className="text-gray-600 max-md:text-xs font-semibold">Expierniced</h3>
                                </div>
                            </div>

                            <div className="flex items-start md:gap-6 gap-2 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold md:text-2xl">Depandance Injection</h1>
                                    <h3 className="text-gray-600 max-md:text-xs font-semibold">Expierniced</h3>
                                </div>
                            </div>

                        </div>  
                </div>
                <div className="">
                    <p className="">
                        Experience at Dev Alpha – Sanjay Ghodawat University Incubation At Dev Alpha, a startup incubated under Sanjay Ghodawat University, Sai Chigari and I founded and led a team focused on delivering high-quality Android applications. Together, we built several impactful projects and successfully delivered custom mobile apps to real-world clients, gaining valuable experience in product development and client communication.
                    </p>

                    <div className="">
                        <h1 className="text-xl font-bold pt-4">Achivement</h1>
                        <p className="pt-2">🏆 Our team won the <strong>Best Frontend Award at the GDG On Campus SGU Hackathon</strong>  – Prabal, a 40-hour non-stop event where we built a <strong>Carbon Emission Tracking App</strong> with real-time maps, visualizations, and eco-challenges using Kotlin, Jetpack Compose, and Firebase. An unforgettable first hackathon experience!</p>
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