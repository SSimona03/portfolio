'use client'
import '../app/globals.css'
import Link from 'next/link'

import Image from 'next/image'
import image from "../public/image.png"
import { Menu } from '@headlessui/react'



export default function Navbar(){
    return(
        <div className= {`navbar relative z-40  `} >
            <div className="flex flex-row items-center navbar-name z-40 ">
                <Image src={image} width={60} max-height={60} alt="logo" className="pr-2.5 "  priority="true" ></Image>
                <Link href="./" className="font-bold">Bella</Link>
            </div>

            <div className="nav-menu">
                <Link href='/'>Home</Link>
                <Link href='/#about'>About</Link>
                <Link href='/#projects'>Projects</Link>
                <Link href='/#contact'>Contact</Link>
            </div>
       
            <div className="nav-mobile-menu text-right focus:outline-transparent focus:border-l-transparent bg-white">
                <Menu as="div" className="menu-box focus:border-l-transparent pt-8">
                    <Menu.Button className="menu-btn pb-5 focus:border-l-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="flex flex-col border-transparent focus:border-transparent focus:ring-0 focus:outline-transparent">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'text-yellow-01'}`}
                                href="/">
                                Home
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'text-yellow-01'}`}
                                href="/#about">
                                About
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'text-yellow-01'}`}
                                href="/#projects">
                                Projects
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'text-yellow-01'}`}
                                href="/#contact">
                                Contact
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
        </div>
    )
}

