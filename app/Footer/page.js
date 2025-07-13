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
