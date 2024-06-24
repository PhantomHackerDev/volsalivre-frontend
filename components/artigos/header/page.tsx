'use client';

import React, {useState} from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo_blue.png";
import Login from "@/components/artigos/login";


const Header = () => {
    const [toenter, setToEnter] = useState<boolean>(false);

    return (
        <div className="flex flex-col justify-between">
            <div className="bg-slate-50 flex flex-col md:flex-row justify-between p-3 md:p-1 shadow-xl sticky top-0 z-10">
                <div className="flex justify-center md:justify-start items-center mb-2 md:mb-0">
                    <a href="/">
                        <Image
                            src={Logo}
                            alt="this is logo"
                            className="w-auto h-12 sm:h-auto md:h-auto"
                            width={147}
                            height={37}
                        />
                    </a>
                </div>
                <div className="flex md:justify-between md:flex-row sm:justify-between lg:justify-between sm:flex-row sm:w-auto justify-between  md:pl-20 items-center  sm:space-y-0 md:space-y-0 sm:space-x-0 md:space-x-4">
                    <div className="relative">
                        <input type="search" size={10} id="school" className=" rounded-full focus:outline-none block sm:w-auto px-3 py-1 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto" placeholder="Escola" required />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 rotate-90 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path className="text-orange-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" size={15} id="city" className="rounded-full focus:outline-none block px-3 py-1 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto" placeholder="Cidade" required />
                    </div>
                </div>
                <div className="flex justify-center md:justify-end items-center mt-2 md:mt-0">
                    <button onClick={() => setToEnter(true)} className="flex items-center text-sm text-gray-500 space-x-1 hover:text-orange-400">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path className="text-orange-400" fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"/><path className="text-orange-400" fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"/></svg>
                        <span> Entrar ou criar conta </span>                        
                    </button>
                </div>
            </div>
            <Login setShow={setToEnter} isShow={toenter} />
        </div>
    )
}

export default Header;