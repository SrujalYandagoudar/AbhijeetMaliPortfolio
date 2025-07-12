import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
    <>
        <section className="">
            <nav className="flex justify-between px-32 py-8 font-pop">
                <h1 className="text-bold text-4xl ">Abhi Mali</h1>

                <ul className="flex justify-around items-center gap-10 text-2xl">
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
            </nav>
        </section>
    </>
  )
}
