import React, {useState} from "react";

let article = [
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
]

const Dashboard = () => {
    return (
        <div className="flex flex-col px-24 py-10 space-y-14">
            <div className="flex">
                <div className="relative">
                    <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none scale-150">
                        <svg className="w-4 h-4 text-gray-500 rotate-90 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path className="text-orange-400" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" size={18} id="article" className="rounded-full focus:outline-none block px-16 py-[11px] ps-5 text-[16px] text-gray-900 border border-gray-300 focus:ring-3 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procurar Artigos" required />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4 h-auto">
                { article.map((result: any, index: number) =>(
                    <div key={index} className="flex rounded-sm h-[160px] hover:ring-2 hover:ring-slate-400">
                        <a href="#" className="flex flex-row p-4 justify-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className=" rounded-md card-img card-article-img w-2/5 " src={result.mark} alt=" Musicalização infantil: o que é, como aplicar e quais benefícios? "/>
                            <div className="flex flex-col justify-between pt-0 pl-4 items-start leading-normal">
                                <span className=" text-[14px] tracking-tight text-gray-700 dark:text-white"> {result.title} </span>
                                <p className="text-xs text-ellipsis text-gray-500 pb-1 overflow-hidden ... ">{result.detail}</p>
                                <p className="text-xs text-orange-500 underline">Saiba mais</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;