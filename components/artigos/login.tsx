"use client";

import { useState } from "react";
import Link from "next/link";

interface ToEnterProps {
    isShow: boolean;
    isLogin:any;
    setShow: any;
}

const ToEnter: React.FC<ToEnterProps> = ({ isShow, setShow, isLogin }) => {
    const [name, setName] = useState<string>("");
    const [nameVal, setNameVal] = useState<boolean>(false);
    const [cpf, setCPF] = useState<string>("");
    const [cpfVal, setCPFVal] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [emailVal, setEmailVal] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [passwordVal, setPasswordVal] = useState<boolean>(false);
    const [login, setLogin] = useState<string>("");
    const [loginVal, setLoginVal] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);

    const handleLogin = () => {
        if (!status) {
            alert("sign Up");
        } else {
            isLogin(true);
            setShow(!isShow);
        }
    }

    return (
        <div className={`${isShow ? "flex" : "hidden"} fixed w-screen h-screen top-0 left-0 justify-center items-center z-20`}>
            <div className="absolute w-screen h-screen bg-slate-700 opacity-50"></div>
            <div className="flex flex-col gap-4 mb-6 md:grid md:grid-cols-2 bg-white rounded-md px-5 py-10 z-50 max-w-lg md:max-w-2xl mx-4 md:mx-0">
                <span className=" start-0 items-end cursor-pointer" onClick={() => setShow(false)}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                        />
                    </svg>
                </span>
                {
                    !status?
                    <>
                        <div className="col-span-2">
                            <div>
                                <label
                                    htmlFor="filled_success"
                                    className={`font-bold text-gray-700 text-sm px-2 ${nameVal === true &&
                                        (name !== "" ? "text-green-500" : "text-red-500")
                                        }`}
                                >
                                    Nome completo 
                                </label><span className="text-gray-600 text-xs"> (obrigatório) </span>
                                <input
                                    type="text"
                                    aria-describedby="filled_success_help"
                                    className="block text-sm text-gray-600 rounded-full px-16 py-2 w-full force:text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                                    placeholder="Digite seu nome completo"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={() => setNameVal(true)}
                                />
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <div>
                                <label
                                    htmlFor="filled_success"
                                    className={`font-bold text-gray-700 text-sm px-2 ${cpfVal === true &&
                                        (cpf !== "" ? "text-green-500" : "text-red-500")
                                        }`}
                                >
                                    CPF 
                                </label><span className="text-gray-600 text-xs"> (obrigatório) </span>
                                <input
                                    type="text"
                                    aria-describedby="filled_success_help"
                                    className="block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                                    placeholder="Digite seu CPF (999.999.999-99)"
                                    value={cpf}
                                    onChange={(e) => setCPF(e.target.value)}
                                    onBlur={() => setCPFVal(true)}
                                />
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <div>
                                <label
                                    htmlFor="filled_success"
                                    className={`font-bold text-gray-700 text-sm px-2 ${emailVal === true &&
                                        (email.includes("@") ? "text-green-500" : "text-red-500")
                                        }`}
                                >
                                    E-mail
                                </label><span className="text-gray-600 text-xs"> (obrigatório) </span>
                                <input
                                    type="text"
                                    aria-describedby="filled_success_help"
                                    className="block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => setEmailVal(true)}
                                />
                            </div>
                        </div>
                    </>:
                    <div className="col-span-2">
                        <div>
                            <label
                                htmlFor="filled_success"
                                className={`font-bold text-gray-700 text-sm px-2 ${loginVal === true &&
                                    (login !== "" ? "text-green-500" : "text-red-500")
                                    }`}
                            >
                                E-mail ou CPF 
                            </label><span className="text-gray-600 text-xs"> (obrigatório) </span>
                            <input
                                type="text"
                                aria-describedby="filled_success_help"
                                className="block text-sm text-gray-600 rounded-full px-16 py-2 w-full force:text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                                placeholder="Digite seu nome E-mail ou CPF"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                onBlur={() => setLoginVal(true)}
                            />
                        </div>
                    </div>
                }
                <div className="col-span-2">
                    <div>
                        <label
                            htmlFor="filled_success"
                            className={`font-bold text-gray-700 text-sm px-2 ${passwordVal === true &&
                                (password !== "" ? "text-green-500" : "text-red-500")
                                }`}
                        >
                            Senha
                        </label><span className="text-gray-600 text-xs"> (obrigatório) </span>
                        <div className="relative">
                            <input
                                type="text"
                                aria-describedby="filled_success_help"
                                className="block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => setPasswordVal(true)}
                            />
                        </div>
                    </div>
                </div>
                {/* <Link
                    href="/meus-dados/[menu]"
                    as = "/meus-dados/meus-dados"
                    // onClick={()=>{handleLogin()}}
                    className="bg-orange-600 text-center col-span-2 w-full text-white py-2 rounded-full hover:bg-orange-700">
                    <span>Criar conta</span>
                </Link><hr className="col-span-2" /> */}
                <button
                    onClick={()=>{handleLogin()}}
                    className="bg-orange-600 col-span-2 w-full text-white py-2 rounded-full hover:bg-orange-700">
                    <span>Criar conta</span>
                </button><hr className="col-span-2" />
                <div className="col-span-2 bg-slate-300 p-4 rounded-md">
                    <div className="text-center">
                        <p className="text-gray-700">Já tem uma conta?</p>
                        <p className="text-orange-600" onClick={()=>{setStatus(!status)}}>{status?'Criar conta agora!':'Faça o login.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToEnter;
