"use client";

import { useState } from "react";
import {
  SearchButton,
  Neighborhood,
  SearchSchool,
  SearchSeries,
} from "../basecomponents/searchComponents";

interface SearchListProps {
  menu: number;
  setMenu: any;
}

const SearchList: React.FC<SearchListProps> = ({ menu, setMenu }) => {
  const [method, setMethod] = useState(0);
  const [school, setSchool] = useState<string>("");
  const [educ, setEduc] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-wrap items-center rounded-full bg-white my-2 2xl:w-[50vw] xl:w-[60vw] lg:w-[70vw] md:w-[97vw] sm:w-[96vw] w-[94vw]">
        <SearchButton
          disp={0}
          className={`lg:flex hidden flex-col relative ${
            school !== "" && school !== null ? "w-1/4" : "w-1/3"
          } px-2 border-r-2 border-slate-300`}
        />
        <Neighborhood
          disp={0}
          className={`lg:flex hidden flex-col relative ${
            school !== "" && school !== null ? "w-1/4" : "w-1/3"
          } px-2 border-r-2 border-slate-300`}
        />
        <SearchSchool
          disp={0}
          setSchoolParent={setSchool}
          className={`lg:flex hidden flex-col relative ${
            school !== "" && school !== null ? "w-1/4" : "w-1/3"
          } px-2`}
        />
        <SearchSeries
          disp={0}
          className={`relative ${
            school !== "" && school !== null && "lg:flex"
          } hidden flex-col border-l-2 border-slate-300 w-1/4 px-2`}
        />

        <div
          className={`${
            menu === 2 ? "block" : "hidden"
          } fixed lg:hidden top-0 left-0 w-screen h-lvh flex items-center justify-center z-20`}
        >
          <div className="flex flex-col gap-5 border border-slate-400 rounded-lg shadow bg-white p-5">
            <span
              className="self-end cursor-pointer"
              onClick={() => setMenu(0)}
            >
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
            <p className="text-xl font-bold">Search for a school</p>

            <SearchButton
              disp={1}
              className="flex flex-col gap-1 mx-8"
            />
            <Neighborhood
              disp={1}
              className="flex flex-col gap-1 mx-8"
            />

            <SearchSchool
              disp={1}
              setSchoolParent={setSchool}
              className="flex flex-col gap-1 mx-8"
            />
            <SearchSeries
              disp={1}
              school={school}
              className="flex flex-col gap-1 mx-8"
            />

            <button className="mx-14 py-2 bg-orange-500 text-white hover:bg-orange-400 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          menu === 1 ? "flex" : "hidden"
        } flex-col bg-white p-10 z-50 h-[70%]`}
      >
        <div className="flex justify-between h-[20%]">
          <p className="text-3xl font-semibold">Menu</p>
          <span className="cursor-pointer" onClick={() => setMenu(0)}>
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
        </div>
        <div className="flex flex-col justify-between text-xl h-[80%]">
          <ul className="flex flex-col gap-4">
            <li className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
              School
            </li>
            <li className="border-b border-slate-300 cursor-pointer">
              <div className="flex flex-col gap-4">
                <div
                  className="flex gap-2 cursor-pointer"
                  onClick={() => setEduc(!educ)}
                >
                  <p>Education Levels</p>
                  <span className={`${educ && "rotate-180"} transition`}>
                    <svg
                      className="w-6 h-6 text-slate-500"
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
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`${educ ? "flex" : "hidden"} flex-col ml-5 gap-4`}
                >
                  <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                    Child education
                  </p>
                  <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                    Elementary School 1
                  </p>
                  <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                    Elementary School 2
                  </p>
                  <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                    High school
                  </p>
                </div>
              </div>
            </li>
            <li className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
              <span>Magazine</span>
            </li>
            <li className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
              <span>Register your school</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SearchList;
