"use client";

import { useState } from "react";

interface SearchButtonProps {
  disp: number;
  className: string;
  school?: any;
  setSchoolParent?: any;
  radius?: number;
  checkedLabel?: string;
};

let checkedData = [
  ["2024", "2025"],
  ["Morning", "Afternoon", "Full", "Semi-integral", "Nocturnal", "EAD", "Saturday"],
  ["Super School"],
];

const SearchButton: React.FC<SearchButtonProps> = ({ disp, className }) => {
  const [geo, setGeo] = useState<string | any>("Sao Paulo, SP");
  const [showGeo, setShowGeo] = useState<boolean>(false);
  return (
    <div className={`${className}`} onBlur={() => setShowGeo(false)}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center">
            <span>
              <svg
                className="w-5 h-5 text-slate-600 dark:text-white"
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
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
            </span>
            <input
              type="text"
              className={`py-3 focus:outline-none rounded-full w-4/5 text-sm `}
              value={geo}
              onChange={(e) => setGeo(e.target.value)}
              onClick={() => setShowGeo(true)}
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor="" className="font-semibold text-lg">
            City:
          </label>
          <div className="flex items-center relative rounded-full border">
            <input
              type="text"
              className="px-7 py-1 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500"
              value={geo}
              onClick={() => setShowGeo(true)}
              onChange={(e) => setGeo(e.target.value)}
            />
            <span className="absolute left-2">
              <svg
                className="w-5 h-5 text-slate-600 dark:text-white"
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
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
            </span>
          </div>
        </>
      )}
      <div
        className={`${
          showGeo === false && "hidden"
        } absolute top-full flex flex-col w-full max-h-48 mt-4 overflow-y-auto rounded border border-slate-150 z-10`}
      >
        <p className="px-4 py-2 font-semibold bg-slate-100 text-slate-500">
          SEARCH BY CITY
        </p>
        <button className="px-6 py-4 text-sm text-orange-600 bg-white">
            <span>
              <svg
                className="w-5 h-5 text-slate-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className=""
                  fill="currentColor"
                  d="M256 0c8.8 0 16 7.2 16 16V64.7c93.3 7.7 167.6 82.1 175.3 175.3H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H447.3c-7.7 93.3-82.1 167.6-175.3 175.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V447.3C146.7 439.6 72.4 365.3 64.7 272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H64.7C72.4 146.7 146.7 72.4 240 64.7V16c0-8.8 7.2-16 16-16zM96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm224 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z"
                ></path>
              </svg>
            </span>
            <span> My location </span>
        </button>
        <p className="px-4 py-2 font-semibold bg-slate-100 text-slate-500">
          SUGGESTIONS
        </p>
        <p className="px-4 py-2 sm text-slate-500 bg-white">No results for search</p>
      </div>
    </div>
  );
};

const Neighborhood: React.FC<SearchButtonProps> = ({ disp, className }) => {
  const [neigh, setNeigh] = useState<string>("");
  const [showNeigh, setShowNeigh] = useState<boolean>(false);
  return (
    <div className={`${className}`} onBlur={() => setShowNeigh(false)}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center px-5">
            <span>
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
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
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
            <input
              type="text"
              className={`text-sm py-3 focus:outline-none rounded-full w-4/5`}
              value={neigh}
              onChange={(e) => setNeigh(e.target.value)}
              placeholder="Eter your neighbor"
              onClick={() => setShowNeigh(true)}
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor="" className="font-semibold text-sm">
            Neighborhood:
          </label>
          <div className="pt-1 flex items-center relative rounded-full">
            <input
              type="text"
              placeholder="Enter your neighborhood"
              className="px-10 py-1.5 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
              value={neigh}
              onClick={() => {setShowNeigh(true)}}
              onChange={(e) => setNeigh(e.target.value)}
            />
            <span className="absolute left-2">
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
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
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      )}
      <div
        className={`${
          showNeigh === false && "hidden"
        } absolute top-full flex flex-col max-h-48 mt-4 overflow-y-auto rounded border border-slate-150 z-20`}
      >
        <p className="px-4 py-2 font-semibold bg-slate-100 text-slate-500">
          SEARCH BY NEIGHBORHOOD
        </p>
        <p className="px-4 py-2 sm text-slate-500 bg-white">
          No results for search.
        </p>
      </div>
    </div>
  );
};

const SearchSchool: React.FC<SearchButtonProps> = ({
  disp,
  className,
  setSchoolParent,
}) => {
  const [school, setSchool] = useState<string>("");
  const [showSchool, setShowSchool] = useState<boolean>(false);

  const handleSetSchool = (value: string) => {
    setSchool(value);
    setSchoolParent(value);
  };

  return (
    <div className={`${className}`} onBlur={() => setShowSchool(false)}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center px-5">
            <span>
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
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
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
            <input
              type="text"
              className={`text-sm py-3 focus:outline-none rounded-full w-4/5`}
              value={school}
              onChange={(e) => handleSetSchool(e.target.value)}
              placeholder="Enter your neighbor"
              onClick={() => setShowSchool(true)}
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor="" className="font-semibold text-sm">
            School:
          </label>
          <div className="flex pt-1.5 items-center relative rounded-full">
            <input
              type="text"
              placeholder="Enter School"
              className="px-10 py-1 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-purple-500 focus:ring-2"
              value={school}
              onClick={() => setShowSchool(false)}
              onChange={(e) => handleSetSchool(e.target.value)}
            />
            <span className="absolute left-2">
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
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
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      )}
      <div
        className={`${
          showSchool === false && "hidden"
        } absolute top-full flex flex-col max-h-48 mt-4 overflow-y-auto rounded border border-slate-150 z-10`}
      >
        <p
          className="px-4 py-2 font-semibold bg-slate-100 text-slate-500 cursor-pointer"
          onClick={() => handleSetSchool("BUSCAR POR CIDADE")}
        >
          SEARCH BY SCHOOL
        </p>
        <p className="px-4 py-2 sm text-slate-500 bg-white">
          No result for search
        </p>
      </div>
    </div>
  );
};

const SearchSeries: React.FC<SearchButtonProps> = ({
  disp,
  school,
  className,
}) => {
  const [series, setSeires] = useState<string | any>();
  const [showValue, setShowValue] = useState<boolean>(false);
  return (
    <div className={`${className} relative`} onBlur={() => setShowValue(false)}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center justify-center">
            <span>
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <input
              type="text"
              className={`text-sm py-1 focus:outline-none rounded-full w-4/5`}
              value={series}
              onChange={(e) => setSeires(e.target.value)}
              placeholder="Select a series"
              onClick={() => setShowValue(true)}
            />
            <span className="bg-orange-500 rounded-full p-[7px]">
              <svg
                className="w-5 h-5 text-white"
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
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      ) : (
        <>
          <label htmlFor="" className="font-semibold text-sm">
            Series:
          </label>
          <div className={`flex pt-1 items-center relative rounded-full`}>
            <input
              type="text"
              placeholder="Select a series"
              className="px-10 py-1.5 text-sm rounded-full w-full border focus:outline-none border-purple-500 focus:ring-2 focus:ring-purple-500"
              value={series}
              onClick={() => setShowValue(true)}
              onChange={(e) => setSeires(e.target.value)}
            />
            <span className="absolute left-2">
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      )}
      <div
        className={`${
          showValue === false && "hidden"
        } absolute top-full flex flex-col w-full max-h-48 mt-4 overflow-y-auto rounded border border-slate-150 bg-white text-orange-600 z-10`}
      >
        <ul role="listbox">
          <li
            className="hover:bg-orange-400 hover:text-white px-4 py-1 cursor-pointer"
            role="option"
            aria-selected="true"
          >
            <strong className="z-text z-text--size-medium z-text--weight-middle z-text--left z-list-box__option-label-title z-text--white">
              Early Childgood Education (0 a 1 ano)
            </strong>
          </li>
          <li
            className="hover:bg-orange-400 hover:text-white px-4 py-1 cursor-pointer"
            role="option"
            aria-selected="false"
          >
            <strong className="z-text z-text--size-medium z-text--weight-middle z-text--left z-list-box__option-label-title z-text--interactive">
              Early Childgood Education - G1 (1 a 2 anos)
            </strong>
          </li>
          <li
            className="hover:bg-orange-400 hover:text-white px-4 py-1 cursor-pointer"
            role="option"
            aria-selected="false"
          >
            <strong className="z-text z-text--size-medium z-text--weight-middle z-text--left z-list-box__option-label-title z-text--interactive">
              Early Childgood Education - G2 (2 anos)
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

const TeachingState: React.FC<SearchButtonProps> = ({
  disp,
  className,
  setSchoolParent,
}) => {
  const [state, setState] = useState<string | any>();
  const [showValue, setShowValue] = useState<boolean>(false);
  return (
    <div className={`${className} relative`} onBlur={() => setShowValue(false)}>
      <>
        <label htmlFor="" className="font-semibold text-sm">
          Teaching State:
        </label>
        <div className={`flex pt-1 items-center relative rounded-full`}>
          <input
            type="text"
            placeholder="Select a teaching step"
            className="px-10 py-1.5 text-sm rounded-full w-full border focus:outline-none border-purple-500 focus:ring-2 focus:ring-purple-500"
            value={state}
            onClick={() => setShowValue(true)}
            onChange={(e) => setState(e.target.value)}
          />
          <span className="absolute left-2">
            <svg
              className="w-6 h-6 text-slate-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
        </div>
      </>
      <div
        className={`${
          showValue === false && "hidden"
        } absolute top-full flex flex-col w-full max-h-48 mt-4 overflow-y-auto rounded border border-slate-150 bg-white text-orange-600 z-10`}
      >
        <ul role="listbox">
          <li
            className="hover:bg-orange-400 hover:text-white px-4 py-1 cursor-pointer"
            role="option"
            aria-selected="true"
          >
            <strong className="z-text z-text--size-medium z-text--weight-middle z-text--left z-list-box__option-label-title z-text--white">
              Early Childgood Education (0 a 1 ano)
            </strong>
          </li>
          <li
            className="hover:bg-orange-400 hover:text-white px-4 py-1 cursor-pointer"
            role="option"
            aria-selected="false"
          >
            <strong className="z-text z-text--size-medium z-text--weight-middle z-text--left z-list-box__option-label-title z-text--interactive">
              Early Childgood Education - G1 (1 a 2 anos)
            </strong>
          </li>
          <li
            className="hover:bg-orange-400 hover:text-white px-4 py-1 cursor-pointer"
            role="option"
            aria-selected="false"
          >
            <strong className="z-text z-text--size-medium z-text--weight-middle z-text--left z-list-box__option-label-title z-text--interactive">
              Early Childgood Education - G2 (2 anos)
            </strong>
          </li>
        </ul>
      </div>
    </div>
  )
};

const SearchRadius: React.FC<SearchButtonProps> = ({
  disp,
  className,
}) => {
  const [radiusValue, setRadiusValue] = useState<number | any>();

  return (
    <div className={`${className} relative`}>
      {disp === 1 ? 
      <>
        <label htmlFor="" className="font-semibold text-sm" >
          Search radius
        </label>
        <p>Up to {radiusValue} km</p>
        <input 
          type="range" 
          onChange={(e) => setRadiusValue(e.target.value)} 
          value = {radiusValue} 
          id="currency-input" 
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 accent-indigo-600" 
          placeholder="Enter amount" />
      </> : 
      ''
      // <>
      //   <label htmlFor="" className="font-semibold text-sm">Monthly fee</label>
      //   <p>R$ 1.00 to R$ 10000.00</p>
      //   <input 
      //     type="range" 
      //     onChange={(e) => setRadiusValue(e.target.value)} 
      //     value = {radiusValue} 
      //     id="currency-input" 
      //     className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 accent-indigo-600" 
      //     placeholder="Enter amount" />
      // </>
      }
    </div>
  )
};

const SearchChecked: React.FC<SearchButtonProps> = ({disp, className, checkedLabel}) => {
  const checkedDisp: any = [];
  // if (disp === 1) {
    let length = checkedData[disp-1].length;
    for (let i = 0; i < length; i++) {
      const element = checkedData[disp-1][i];
      checkedDisp.push(
        <div key={i} className="flex items-center mb-4">
          <input id={`default-checkbox${i}-${disp-1}`} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor={`default-checkbox${i}-${disp-1}`} className={`${disp === 3? 'flex justify-between':''} ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`}>
            {element}
          </label>
            {disp === 3?
              <a className="pl-3 flex text-purple-700 hover:bg-purple-50" >
                <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </a>
            :''}
        </div>
      )
    }
  // }
  return (
    <div className={`${className} relative`}>
      <>
        <label htmlFor="" className="font-semibold text-sm">{checkedLabel}</label>
        {checkedDisp}
      </>
    </div>
  )
};
export { SearchButton, Neighborhood, SearchSchool, SearchSeries, TeachingState, SearchRadius, SearchChecked };
