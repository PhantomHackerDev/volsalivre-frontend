"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

interface CommunicateProps {
    // menu: number;
}

const Header:React.FC<CommunicateProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div 
                className="bg-[#13171a] flex justify-between items-center px-4 py-3 md:px-28 sticky top-0 z-30"
            >
                <div className="flex">
                    <a href="/">
                        <Image
                            src={Logo}
                            alt="this is logo"
                            className="w-24 h-14"
                            width={147}
                            height={37}
                        />
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                <div className={`flex-col md:flex md:flex-row justify-between items-center space-x-10 ${isOpen ? 'flex' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-10">
                        <li><a href="#advantages" className="text-orange-500 font-semibold hover:border hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Vantagens</a></li>
                        <li><a href="#partners" className="text-orange-500 font-semibold hover:border hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Escolas parceiras</a></li>
                        <li><a href="#choices" className="text-orange-500 font-semibold hover:border hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Planos</a></li>
                        <li><a href="#evidence" className="text-orange-500 font-semibold hover:border hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Cases</a>
                        </li>
                        <li><a href="#" className="text-orange-500  font-semibold hover:border hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[18px]">{""}Entrar</a>
                        </li>
                        <li><span><a className="text-white bg-[#ff7e29] p-3 rounded-full font-semibold text-[16px]">Parceiro</a></span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;