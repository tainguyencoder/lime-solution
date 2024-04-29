"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

export default function JobFooter(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="container relative text-center">
                <div className="grid grid-cols-1">
                    <div className="py-[30px] px-0">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-start text-center">
                                <Link href="/#" className="text-[22px] focus:outline-none">
                                    <Image src="/images/logo-light.png" width={138} height={24} className="mx-auto md:me-auto md:ms-0" alt="" />
                                </Link>
                            </div>

                            <ul className="list-none space-x-1 footer-list md:text-end text-center mt-6 md:mt-0">
                                <li className="inline"><Link href="/about-us" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">About us</Link></li>
                                <li className="inline mt-[10px]"><Link href="/services" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Services</Link></li>
                                <li className="inline mt-[10px]"><Link href="/contact" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <p className="mb-0">© {new Date().getFullYear()} Lime Solution. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by Lime Solution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}