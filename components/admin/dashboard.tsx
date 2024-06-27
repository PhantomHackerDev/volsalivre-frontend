'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { PrivateSchoolCard } from "@/components/basecomponents/cards";


interface Title {
    title: string;
}

let PrivateSchools = [{
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    scholarUnit: "BRL",
    amount: "306.57",
},
{
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230323142359118.png",
    star: 5,
    title: "Intergenius College",
    at: "Joinville - SC",
    position: "Juliao Ramos",
    scholarUnit: "BRL",
    amount: "306.57",

}
];


const PainelBoard: React.FC<Title> = ({ title }) => {
    return (
        <div className="grid grid-cols-4 md:px-24 py-10 gap-20">
            <div className=" flex flex-col justify-start space-y-3">
                <p className='text-gray-800 font-semibold text-lg'>{title}</p>
                <p className='text-gray-800 bg-slate-300 rounded-full flex justify-center items-center py-2'>{title}</p>
            </div>
            <div className="col-span-3 justify-between w-full space-y-10">
                <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
                    <p className='text-3xl text-gray-700 font-bold'>Bem-vindo, Escola Teste</p>
                    <p className='text-gray-400'>Aqui você pode gerenciar o desempenho da página de sua escola, conhecer as estratégias de seus concorrentes e aumentar a captação de alunos.</p>
                </div>
                <div className="">
                    <Swiper
                        slidesPerView={1} // Default to 1 slide for very small screens
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // 2 slides for screens >= 640px
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1, // 3 slides for screens >= 768px
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 1, // 4 slides for screens >= 1024px
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {PrivateSchools.map((school: any, index: number) => (
                            <SwiperSlide key={index}>
                                <PrivateSchoolCard
                                    key={index}
                                    star={school.star}
                                    mark={school.mark}
                                    title={school.title}
                                    at={school.at}
                                    position={school.position}
                                    scholarUnit={school.scholarUnit}
                                    amount={school.amount}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
                    <p className='text-3xl text-gray-700 font-bold'>Dados do Mercado</p>
                    <p className='text-gray-400 pb-5 border-b'>Conheça bem o seu mercado, aplique as melhores estratégias de preço e alcance as suas metas de captação.</p>
                    <p>Média por etapa de ensino no meio período <br />Cidade: <strong> Capixaba </strong></p>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <span className='text-lg font-bold'>Disposicao a pagar</span>
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> 
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <span className='text-lg font-bold'>Disposicao a pagar</span>
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const EscolaBoard: React.FC<Title> = ({ title }) => {
    return (
        <div className="grid grid-cols-4 md:px-24 py-10 gap-20">
            <div className=" flex flex-col justify-start space-y-3">
                <p className='text-gray-800 font-semibold text-lg'>{title}</p>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Editar dados da escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Melhar Escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Quero Bolsa</button>
            </div>
            <div className="col-span-3 justify-between w-full space-y-10">
                <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
                    <p className='text-3xl text-gray-700 font-bold'>Bem-vindo, Escola Teste</p>
                    <p className='text-gray-400'>Aqui você pode gerenciar o desempenho da página de sua escola, conhecer as estratégias de seus concorrentes e aumentar a captação de alunos.</p>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    )
}
const OfertasBoard: React.FC<Title> = ({ title }) => {
    return (
        <div className="grid grid-cols-4 md:px-24 py-10 gap-20">
            <div className=" flex flex-col justify-start space-y-3">
                <p className='text-gray-800 font-semibold text-lg'>{title}</p>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Editar dados da escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Melhar Escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Quero Bolsa</button>
            </div>
            <div className="col-span-3 justify-between w-full space-y-10">
                <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
                    <p className='text-3xl text-gray-700 font-bold'>Bem-vindo, Escola Teste</p>
                    <p className='text-gray-400'>Aqui você pode gerenciar o desempenho da página de sua escola, conhecer as estratégias de seus concorrentes e aumentar a captação de alunos.</p>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    )
}
const AlunosBoard: React.FC<Title> = ({ title }) => {
    return (
        <div className="grid grid-cols-4 md:px-24 py-10 gap-20">
            <div className=" flex flex-col justify-start space-y-3">
                <p className='text-gray-800 font-semibold text-lg'>{title}</p>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Editar dados da escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Melhar Escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Quero Bolsa</button>
            </div>
            <div className="col-span-3 justify-between w-full space-y-10">
                <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
                    <p className='text-3xl text-gray-700 font-bold'>Bem-vindo, Escola Teste</p>
                    <p className='text-gray-400'>Aqui você pode gerenciar o desempenho da página de sua escola, conhecer as estratégias de seus concorrentes e aumentar a captação de alunos.</p>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>    )
}
const ServiceBoard: React.FC<Title> = ({ title }) => {
    return (
        <div className="grid grid-cols-4 md:px-24 py-10 gap-20">
            <div className=" flex flex-col justify-start space-y-3">
                <p className='text-gray-800 font-semibold text-lg'>{title}</p>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Editar dados da escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Melhar Escola</button>
                <button className='hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500'>Ver no Quero Bolsa</button>
            </div>
            <div className="col-span-3 justify-between w-full space-y-10">
                <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
                    <p className='text-3xl text-gray-700 font-bold'>Bem-vindo, Escola Teste</p>
                    <p className='text-gray-400'>Aqui você pode gerenciar o desempenho da página de sua escola, conhecer as estratégias de seus concorrentes e aumentar a captação de alunos.</p>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    )
}

export { PainelBoard, EscolaBoard, OfertasBoard, AlunosBoard, ServiceBoard };