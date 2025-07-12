import Image from 'next/image'
import React from 'react'
import Github from '../Github/page'

export default function Experience() {
  return (
    <>
        <section className="h-screen" id='Experience'>
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="font-normal text-gray-600">Explore My</h3>
                <h1 className="text-5xl text-center font-bold ">Experience</h1>
            </div>

            <div className="grid grid-cols-2 items-center mx-32 my-20 gap-10">
                <div className="border-2 border-gray-600 rounded-3xl px-12 py-4">
                    <h1 className="font-bold text-3xl text-gray-600 py-2 pb-6 text-center">Android Development</h1>

                      <div className="grid grid-cols-2 gap-y-6 justify-self-center-safe gap-20">
                            <div className="flex items-start gap-6 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Kotline</h1>
                                    <h3 className="text-gray-600 font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start gap-6 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Jetpack</h1>
                                    <h3 className="text-gray-600 font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start gap-6 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Firebase</h1>
                                    <h3 className="text-gray-600 font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start gap-6 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Room DB</h1>
                                    <h3 className="text-gray-600 font-semibold">Expierniced</h3>
                                </div>
                            </div>

                             <div className="flex items-start gap-6 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Android Studio</h1>
                                    <h3 className="text-gray-600 font-semibold">Expierniced</h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 ">
                                <Image src="/Images/Verified.png" width={30} height={30} alt="Skills" className="" />
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Depandance Injection</h1>
                                    <h3 className="text-gray-600 font-semibold">Expierniced</h3>
                                </div>
                            </div>

                        </div>  
                </div>
                <div className="">
                    <p className="">
                        Experience at Dev Alpha – Sanjay Ghodawat University Incubation At Dev Alpha, a startup incubated under Sanjay Ghodawat University, Sai Chigari and I founded and led a team focused on delivering high-quality Android applications. Together, we built several impactful projects and successfully delivered custom mobile apps to real-world clients, gaining valuable experience in product development and client communication.
                    </p>

                    <div className="">
                        <h1 className="text-xl font-bold pt-4">Achivment</h1>
                        <p className="pt-2">🏆 Our team won the <strong>Best Frontend Award at the GDG On Campus SGU Hackathon</strong>  – Prabal, a 40-hour non-stop event where we built a <strong>Carbon Emission Tracking App</strong> with real-time maps, visualizations, and eco-challenges using Kotlin, Jetpack Compose, and Firebase. An unforgettable first hackathon experience!</p>
                    </div>
                </div>
            </div>

           
        </section>
    </>
  )
}
