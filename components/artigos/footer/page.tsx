import React, {useState} from "react";

const Footer = () => {
    return (
        <div className="flex flex-col bg-[#3e3b60] px-24 space-y-28 py-8 text-white">
            <div className="flex justify-between ">
                <div className="flex flex-col space-y-5">
                    <span className="font-semibold text-lg" > Encontre Bolsas</span>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Melhores Escolas de São Paulo</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Melhores Escolas no ENEM</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Mensalidades de Escolas</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Escolas por Cidade e Bairro</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Bolsas de Estudo em Escolas</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Avaliação de Pais e Alunos</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Sistema de Ensino Mackenzie</a>
                </div>
                <div className="flex flex-col space-y-5">
                    <span className="font-semibold text-lg" > Institucional</span>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Sobre o Melhor Escola</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Revista Melhor Escola</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Trabalhe Conosco</a>
                </div>
                <div className="flex flex-col space-y-5">
                    <span className="font-semibold text-lg" > Outras bolsas</span>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Bolsas em Faculdades e Universidades</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Bolsas em Escolas de Inglês</a>
                </div>
                <div className="flex flex-col space-y-5">
                    <span className="font-semibold text-lg" > Parceiros</span>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Quero ser Parceiro</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Blog Gestores</a>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" >Área do Gestor</a>
                </div>
                <div className="flex flex-col space-y-5 items-center">
                    <span className="font-semibold text-slate-300 text-[10px]" > Parceiro Oficial<br/>Ensino Superior</span>
                    <a href="#" className="text-slate-300 hover:text-orange-400 text-xs" ><img className="" src="https://www.melhorescola.com.br/themes/site/assets/images/logo-querobolsa.png?2" data-src="https://www.melhorescola.com.br/themes/site/assets/images/logo-querobolsa.png?2" data-srcset="" width="160" height="25" alt="Quero Bolsa" srcSet=""/></a>
                </div>
            </div>
            <div className="flex flex-row space-x-24 justify-start">
                <div className="flex flex-col space-y-5">
                    <img className="footer-logo" src="https://www.melhorescola.com.br/themes/site/assets/images/assets/logo-melhor-escola.svg" data-src="https://www.melhorescola.com.br/themes/site/assets/images/assets/logo-melhor-escola.svg" data-srcset="" width="153" height="50" alt="Melhor Escola" srcSet="" />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-white text-[12px]" >Estamos construindo um grande banco de dados com avaliações e depoimentos de pais e alunos sobre as escolas brasileiras. Participe!</span>
                    <div className="flex">
                        <span className="font-semibold text-white text-[12px]" >O uso deste site implica na aceitação total dos {" "}
                        <span className="hover:underline">Termos de Uso</span>, da {" "} <span className="hover:underline">Política de Privacidade</span> e <span className="hover:underline"> Política de Cookies.</span></span>
                    </div>
                    <small className="text-slate-300 text-xs font-sans">© Copyright 2013-2024 - Melhor Escola</small>
                    <small className="text-slate-300 text-xs font-sans">CNPJ: 17.669.221/0001-50   Telefones: 0800 941 9002 - São Paulo: (11) 3522-3837</small>
                </div>
            </div>
        </div>
    )
}

export default Footer;