import { MenuTipCard } from "@/components/basecomponents/cards";
import React, { useState } from "react";

interface MeneProps{
  enter:any
}

const Mene: React.FC<MeneProps> = ({enter}) => {
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const loginStatus = localStorage.getItem('token');
  const toggleEvent = () => {
    setMenuShow(!menuShow);
  };
  return (
    <>
      {loginStatus ? (
        <>
          <button onClick={toggleEvent}>
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 512 512"
            >
              <path
                className="text-orange-400"
                fill="currentColor"
                d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"
              />
              <path
                className="text-orange-400"
                fill="currentColor"
                d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"
              />
            </svg>
          </button>
          {menuShow && <MenuTipCard />}
        </>
      ) : (
        <button
          onClick={ enter}
          className="flex items-center text-sm text-gray-500 space-x-1 hover:text-orange-400"
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 512 512"
          >
            <path
              className="text-orange-400"
              fill="currentColor"
              d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"
            />
            <path
              className="text-orange-400"
              fill="currentColor"
              d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"
            />
          </svg>
          <span> Entrar ou criar conta </span>
        </button>
      )}
    </>
  );
};

export default Mene;
