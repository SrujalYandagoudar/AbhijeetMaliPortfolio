"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


export default function Navbar() {

    const [toggal, settoggal] = useState(false);

    const handeltoggal = () => {
        settoggal(!toggal)
    }

    return (
        <>
            <section className="">
                <nav className="flex justify-between md:px-32 px-4 py-8 font-pop">
                    <h1 className="text-bold text-4xl ">Abhi Mali</h1>

                    <ul className="max-md:hidden flex justify-around items-center gap-10 text-2xl">
                        <li className="">
                            <Link href={"#About"} className="">About</Link>
                        </li>
                        <li className="">
                            <Link href={"#Experience"} className="">Experince</Link>
                        </li>
                        <li className="">
                            <Link href={"#Project"} className="">Project</Link>
                        </li>
                        <li className="">
                            <Link href={"#Contact"} className="">Contact</Link>
                        </li>
                    </ul>

                    <button onClick={handeltoggal} className='md:hidden'>
                        {toggal ? <X /> : <AlignJustify />}
                    </button>


                </nav>

                <AnimatePresence>
                    {toggal && (



                        <motion.ul key="mobileMenu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }} className="md:hidden flex flex-col justify-center items-center gap-2 text-lg">
                            <li className="">
                                <Link href={"#About"} className="">About</Link>
                            </li>
                            <li className="">
                                <Link href={"#Experience"} className="">Experince</Link>
                            </li>
                            <li className="">
                                <Link href={"#Project"} className="">Project</Link>
                            </li>
                            <li className="">
                                <Link href={"#Contact"} className="">Contact</Link>
                            </li>
                        </motion.ul>

                    )}
                </AnimatePresence>

            </section>
        </>
    )
}
