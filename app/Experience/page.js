import Image from 'next/image'
import React from 'react'

export default function Experience() {
  return (
    <>
        <section className="h-screen">
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
                        Dev Alpha is an Android development startup founded by Abhijeet Mali and Sai Chigare under the Sanjay Ghodawat University College Incubation Program. The company was launched with the aim of building innovative and user-centric Android applications that solve real-world problems. Dev Alpha specializes in creating clean, responsive, and scalable mobile apps using technologies like Kotlin, Java, XML, and Firebase. Backed by the university's support and resources, the startup has rapidly grown by delivering functional and visually polished apps for various domains. From conceptualization to deployment on the Google Play Store, Dev Alpha handles the complete app development lifecycle, ensuring quality, performance, and a great user experience. It stands as a shining example of student-led innovation and entrepreneurship nurtured within an academic environment.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}
